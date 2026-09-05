export type PointsSystem = {
  placementPoints: Record<number, number>; // { 1: 15, 2: 12, 3: 10, ... }
  killPointValue: number; // usually 1 point per kill
};

export const DEFAULT_POINTS_SYSTEM: PointsSystem = {
  placementPoints: {
    1: 15,
    2: 12,
    3: 10,
    4: 8,
    5: 6,
    6: 4,
    7: 2,
    8: 1,
    9: 0,
  },
  killPointValue: 1,
};

export function calculateMatchPoints(placement: number, kills: number, system: PointsSystem = DEFAULT_POINTS_SYSTEM) {
  const placementPoints = system.placementPoints[placement] || 0;
  const killPoints = kills * system.killPointValue;
  return {
    placementPoints,
    killPoints,
    totalPoints: placementPoints + killPoints,
  };
}

export function aggregateTournamentStandings(matchResults: any[]) {
  const standings: Record<string, { totalPoints: number; totalKills: number; matchesPlayed: number }> = {};

  matchResults.forEach((result) => {
    const orgId = result.orgId;
    if (!standings[orgId]) {
      standings[orgId] = { totalPoints: 0, totalKills: 0, matchesPlayed: 0 };
    }
    standings[orgId].totalPoints += result.totalPoints;
    standings[orgId].totalKills += result.killPoints; // Assuming killPoints = kills * 1
    standings[orgId].matchesPlayed += 1;
  });

  return Object.entries(standings)
    .map(([orgId, stats]) => ({
      orgId,
      ...stats,
    }))
    .sort((a, b) => b.totalPoints - a.totalPoints || b.totalKills - a.totalKills);
}
