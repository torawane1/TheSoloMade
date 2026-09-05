export const SITE_CONFIG = {
  name: 'BGMI CIRCUIT',
  accentColor: '#FACC15', // Yellow-400
  secondaryColor: '#F97316', // Orange-500
  darkMode: true,
};

export const MOCK_DATA = {
  tournaments: [
    {
      id: 'bgis-2024',
      name: 'BGIS 2024',
      organizer: 'Krafton',
      tier: 'S',
      status: 'COMPLETED',
      prizePool: '₹2 Crore',
      startDate: '2024-05-01',
      region: 'India',
      standings: [
        { rank: 1, team: 'Team Soul', totalPoints: 145, killPoints: 60, placePoints: 85 },
        { rank: 2, team: 'GodLike Esports', totalPoints: 130, killPoints: 55, placePoints: 75 },
        { rank: 3, team: 'Entity Gaming', totalPoints: 110, killPoints: 40, placePoints: 70 },
        { rank: 4, team: 'Global Esports', totalPoints: 95, killPoints: 35, placePoints: 60 },
      ],
      matches: [
        { id: 'm1', map: 'Erangel', date: '2024-05-01', result: 'Completed' },
        { id: 'm2', map: 'Miramar', date: '2024-05-01', result: 'Completed' },
      ]
    },
    {
      id: 'bmps-2024',
      name: 'BMPS 2024',
      organizer: 'Krafton',
      tier: 'S',
      status: 'UPCOMING',
      prizePool: '₹2 Crore',
      startDate: '2024-12-01',
      region: 'India',
      standings: [],
      matches: []
    }
  ],
  players: [
    {
      id: 'jonathan',
      ign: 'Jonathan',
      realName: 'Jonathan Amaral',
      role: 'ASSAULTER',
      team: 'GodLike Esports',
      nationality: 'India',
      stats: { totalKills: 452, totalDamage: 125400, totalMVPs: 12, kda: 4.2 },
      performanceTrend: [
        { match: 'M1', kills: 4 }, { match: 'M2', kills: 8 }, { match: 'M3', kills: 2 }, 
        { match: 'M4', kills: 10 }, { match: 'M5', kills: 6 },
      ],
      recentMatches: [
        { tournament: 'BGIS 2024', map: 'Erangel', kills: 6, damage: 1200, mvp: true },
        { tournament: 'BGIS 2024', map: 'Miramar', kills: 3, damage: 800, mvp: false },
      ]
    },
    {
      id: 'mortal',
      ign: 'Mortal',
      realName: 'Naman Mathur',
      role: 'IGL',
      team: 'Team Soul',
      nationality: 'India',
      stats: { totalKills: 210, totalDamage: 85000, totalMVPs: 5, kda: 3.1 },
      performanceTrend: [
        { match: 'M1', kills: 2 }, { match: 'M2', kills: 4 }, { match: 'M3', kills: 1 }, 
        { match: 'M4', kills: 5 }, { match: 'M5', kills: 3 },
      ],
      recentMatches: [
        { tournament: 'BGIS 2024', map: 'Erangel', kills: 2, damage: 600, mvp: false },
      ]
    }
  ],
  organizations: [
    {
      id: 'soul',
      name: 'Team Soul',
      tag: 'SOUL',
      achievements: ['BGIS Champion', 'BMPS Finalist'],
      members: ['Mortal', 'Viper', 'Aman']
    },
    {
      id: 'godlike',
      name: 'GodLike Esports',
      tag: 'GODL',
      achievements: ['BMPS Champion', 'Global Recognition'],
      members: ['Jonathan', 'Zuxxy', 'Neyo']
    }
  ]
};
