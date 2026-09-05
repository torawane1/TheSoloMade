import React from 'react';
import { Trophy, TrendingUp, Target, User } from 'lucide-react';
import Link from 'next/link';

export default function LeaderboardsPage() {
  // Mock data for UI demonstration - will be replaced with Prisma queries in real implementation
  const teamStandings = [
    { rank: 1, name: 'Soul', points: 124, kills: 82, matches: 12 },
    { rank: 2, name: 'godL', points: 110, kills: 75, matches: 12 },
    { rank: 3, name: 'Entity Gaming', points: 98, kills: 60, matches: 12 },
    { rank: 4, name: 'Global Esports', points: 85, kills: 55, matches: 12 },
    { rank: 5, name: 'Team XSpark', points: 72, kills: 48, matches: 12 },
  ];

  const playerStandings = [
    { rank: 1, name: 'Jonathan', team: 'Soul', kills: 42, damage: 12400, mvps: 5 },
    { rank: 2, name: 'Zuxxy', team: 'godL', kills: 38, damage: 11200, mvps: 3 },
    { rank: 3, name: 'Mortal', team: 'Soul', kills: 30, damage: 8500, mvps: 2 },
    { rank: 4, name: 'wreckless', team: 'godL', kills: 28, damage: 9100, mvps: 4 },
    { rank: 5, name: 'Nakul', team: 'Entity', kills: 25, damage: 7800, mvps: 1 },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-20">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-4">
            Global Leaderboards
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            The definitive ranking of the best BGMI players and organizations based on tournament performance.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Team Leaderboard */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500 w-8 h-8" />
            <h2 className="text-3xl font-bold uppercase italic">Organization Rankings</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase font-black tracking-widest">
                  <th className="px-6 py-4 w-20">Rank</th>
                  <th className="px-6 py-4">Organization</th>
                  <th className="px-6 py-4 text-center">Total Points</th>
                  <th className="px-6 py-4 text-center">Total Kills</th>
                  <th className="px-6 py-4 text-center">Matches</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {teamStandings.map((team) => (
                  <tr key={team.rank} className="hover:bg-zinc-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <span className={`font-mono font-bold ${team.rank === 1 ? 'text-yellow-500 text-lg' : 'text-zinc-500'}`}>
                        #{team.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/teams/${team.name.toLowerCase()}`} className="font-bold group-hover:text-yellow-500 transition-colors">
                        {team.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-white">{team.points}</td>
                    <td className="px-6 py-4 text-center text-zinc-400">{team.kills}</td>
                    <td className="px-6 py-4 text-center text-zinc-500">{team.matches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Player Leaderboard */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-red-500 w-8 h-8" />
            <h2 className="text-3xl font-bold uppercase italic">Player Performance</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase font-black tracking-widest">
                  <th className="px-6 py-4 w-20">Rank</th>
                  <th className="px-6 py-4">Player</th>
                  <th className="px-6 py-4">Team</th>
                  <th className="px-6 py-4 text-center">Kills</th>
                  <th className="px-6 py-4 text-center">Damage</th>
                  <th className="px-6 py-4 text-center">MVPs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {playerStandings.map((player) => (
                  <tr key={player.rank} className="hover:bg-zinc-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <span className={`font-mono font-bold ${player.rank === 1 ? 'text-yellow-500 text-lg' : 'text-zinc-500'}`}>
                        #{player.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/players/${player.name.toLowerCase()}`} className="font-bold group-hover:text-yellow-500 transition-colors">
                        {player.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{player.team}</td>
                    <td className="px-6 py-4 text-center font-bold text-white">{player.kills}</td>
                    <td className="px-6 py-4 text-center text-zinc-400">{player.damage.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-2 py-1 bg-zinc-800 rounded text-yellow-500 font-bold text-xs">
                        {player.mvps}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
