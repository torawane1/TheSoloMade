import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tournamentId, mapPlayed, matchDate, teamResults, playerStats } = body;

    if (!tournamentId || !mapPlayed || !teamResults || !playerStats) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tournament = await prisma.tournament.findUnique({
      where: { id: tournamentId },
    });

    if (!tournament) {
      return NextResponse.json({ error: 'Tournament not found' }, { status: 404 });
    }

    const pointsSystem = JSON.parse(tournament.pointsSystem);

    // Start transaction to ensure data integrity
    return await prisma.$transaction(async (tx) => {
      // 1. Create the Match
      const match = await tx.match.create({
        data: {
          tournamentId,
          mapPlayed,
          matchDate: matchDate ? new Date(matchDate) : new Date(),
        },
      });

      // 2. Record Team Results and Update Tournament Participations
      for (const teamRes of teamResults) {
        await tx.matchTeamResult.create({
          data: {
            matchId: match.id,
            orgId: teamRes.orgId,
            placement: teamRes.placement,
            killPoints: teamRes.killPoints,
            totalPoints: teamRes.totalPoints,
          },
        });

        // Update overall tournament standing for the team
        await tx.tournamentParticipation.update({
          where: {
            tournamentId_orgId: {
              tournamentId,
              orgId: teamRes.orgId,
            },
          },
          data: {
            totalPoints: { increment: teamRes.totalPoints },
            totalKills: { increment: teamRes.killPoints },
          },
        });
      }

      // 3. Record Player Stats and Update Career Stats
      for (const pStat of playerStats) {
        await tx.matchPlayerStat.create({
          data: {
            matchId: match.id,
            playerId: pStat.playerId,
            kills: pStat.kills,
            damage: pStat.damage,
            survival: pStat.survival,
            isMVP: pStat.isMVP,
          },
        });

        // Update career aggregate stats
        await tx.player.update({
          where: { id: pStat.playerId },
          data: {
            totalKills: { increment: pStat.kills },
            totalDamage: { increment: pStat.damage },
            totalMVPs: { increment: pStat.isMVP ? 1 : 0 },
          },
        });
      }

      return NextResponse.json({ 
        message: 'Match results submitted successfully', 
        matchId: match.id 
      });
    });
  } catch (error) {
    console.error('Error submitting match results:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
