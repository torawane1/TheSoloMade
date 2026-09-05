import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning database...');
  await prisma.award.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.matchPlayerStat.deleteMany();
  await prisma.matchTeamResult.deleteMany();
  await prisma.match.deleteMany();
  await prisma.tournamentParticipation.deleteMany();
  await prisma.rosterHistory.deleteMany();
  await prisma.player.deleteMany();
  await prisma.tournament.deleteMany();
  await prisma.organization.deleteMany();

  console.log('Seeding Organizations...');
  const org1 = await prisma.organization.create({
    data: {
      name: 'Soul',
      tag: 'SOUL',
      region: 'India',
      logo: 'https://placehold.co/200x200?text=SOUL',
      socialLinks: JSON.stringify({ twitter: 'https://twitter.com/teamsoul', instagram: 'https://instagram.com/teamsoul' }),
    },
  });

  const org2 = await prisma.organization.create({
    data: {
      name: 'godL',
      tag: 'godL',
      region: 'India',
      logo: 'https://placehold.co/200x200?text=godL',
      socialLinks: JSON.stringify({ twitter: 'https://twitter.com/godlike', instagram: 'https://instagram.com/godlike' }),
    },
  });

  const org3 = await prisma.organization.create({
    data: {
      name: 'Entity Gaming',
      tag: 'ENTITY',
      region: 'India',
      logo: 'https://placehold.co/200x200?text=ENTITY',
    },
  });

  console.log('Seeding Players...');
  const p1 = await prisma.player.create({
    data: {
      ign: 'Jonathan',
      realName: 'Jonathan Amaral',
      role: 'ASSAULTER',
      nationality: 'India',
      currentTeamId: org1.id,
      photo: 'https://placehold.co/200x200?text=Jonathan',
      totalKills: 452,
      totalDamage: 125400,
      totalMVPs: 12,
      kda: 4.2,
    },
  });

  const p2 = await prisma.player.create({
    data: {
      ign: 'Mortal',
      realName: 'Naman Mathur',
      role: 'IGL',
      nationality: 'India',
      currentTeamId: org1.id,
      photo: 'https://placehold.co/200x200?text=Mortal',
    },
  });

  const p3 = await prisma.player.create({
    data: {
      ign: 'Zuxxy',
      realName: 'Zuxxy',
      role: 'ASSAULTER',
      nationality: 'India',
      currentTeamId: org2.id,
      photo: 'https://placehold.co/200x200?text=Zuxxy',
    },
  });

  console.log('Seeding Tournament...');
  const tournament = await prisma.tournament.create({
    data: {
      name: 'BGMI Pro Series 2026',
      organizer: 'Krafton',
      tier: 'S',
      format: 'LEAGUE',
      prizePool: '₹1,00,00,000',
      startDate: new Date('2026-09-01'),
      endDate: new Date('2026-09-15'),
      region: 'India',
      status: 'LIVE',
      pointsSystem: JSON.stringify({
        placementPoints: { "1": 15, "2": 12, "3": 10, "4": 8, "5": 6, "6": 4, "7": 2, "8": 1 },
        killPointValue: 1
      }),
    },
  });

  await prisma.tournamentParticipation.createMany({
    data: [
      { tournamentId: tournament.id, orgId: org1.id, totalPoints: 145, totalKills: 60 },
      { tournamentId: tournament.id, orgId: org2.id, totalPoints: 130, totalKills: 55 },
      { tournamentId: tournament.id, orgId: org3.id, totalPoints: 110, totalKills: 40 },
    ],
  });

  console.log('Seeding Match...');
  const match = await prisma.match.create({
    data: {
      tournamentId: tournament.id,
      mapPlayed: 'Erangel',
      matchDate: new Date(),
    },
  });

  await prisma.matchTeamResult.createMany({
    data: [
      {
        matchId: match.id,
        orgId: org1.id,
        placement: 1,
        killPoints: 8,
        totalPoints: 23,
      },
      {
        matchId: match.id,
        orgId: org2.id,
        placement: 2,
        killPoints: 5,
        totalPoints: 17,
      },
    ],
  });

  await prisma.matchPlayerStat.createMany({
    data: [
      { matchId: match.id, playerId: p1.id, kills: 4, damage: 1200, survival: 1800, isMVP: true },
      { matchId: match.id, playerId: p2.id, kills: 2, damage: 800, survival: 1800, isMVP: false },
      { matchId: match.id, playerId: p3.id, kills: 3, damage: 1100, survival: 1200, isMVP: false },
    ],
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
