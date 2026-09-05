import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-static';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tournamentId = searchParams.get('tournamentId');

    if (!tournamentId) {
      return NextResponse.json({ error: 'tournamentId is required' }, { status: 400 });
    }

    const standings = await prisma.tournamentParticipation.findMany({
      where: { tournamentId },
      include: {
        org: true,
      },
      orderBy: [
        { totalPoints: 'desc' },
        { totalKills: 'desc' },
      ],
    });

    return NextResponse.json(standings);
  } catch (error) {
    console.error('Error fetching tournament standings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
