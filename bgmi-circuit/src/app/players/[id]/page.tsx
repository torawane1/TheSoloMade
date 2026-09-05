import React from 'react';
import { User, Trophy, Target, TrendingUp, History, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PlayerProfilePage({ params }: { params: { id: string } }) {
  // Mock data for UI - will be integrated with Prisma
  const player = {
    ign: 'Jonathan',
    realName: 'Jonathan Amaral',
    role: 'ASSAULTER',
    team: 'Soul',
    nationality: 'India',
    stats: {
      totalKills: 452,
      totalDamage: 125400,
      totalMVPs: 12,
      kda: 4.2,
    },
    recentMatches: [
      { tournament: 'BPS 2026', map: 'Erangel', kills: 6, damage: 1200, mvp: true },
      { tournament: 'BPS 2026', map: 'Miramar', kills: 3, damage: 800, mvp: false },
      { tournament: 'BPS 2026', map: 'Sanhok', kills: 8, damage: 1500, mvp: true },
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-20">
      {/* Profile Header */}
      <div className="relative bg-zinc-900 border-b border-zinc-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-zinc-800 border-4 border-yellow-500 overflow-hidden shadow-2xl">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.ign}`} alt={player.ign} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-xs font-black px-2 py-1 rounded uppercase">
              {player.role}
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-2">
              {player.ign}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-zinc-400">
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-yellow-500" /> {player.team}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-yellow-500" /> {player.realName}
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-4 h-4 text-yellow-500" /> India
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Stats Grid */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold uppercase italic flex items-center gap-2">
            <TrendingUp className="text-yellow-500" /> Career Stats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
              <div className="text-zinc-500 text-xs font-bold uppercase mb-1">Total Kills</div>
              <div className="text-3xl font-black text-white">{player.stats.totalKills}</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
              <div className="text-zinc-500 text-xs font-bold uppercase mb-1">Total Damage</div>
              <div className="text-3xl font-black text-white">{player.stats.totalDamage.toLocaleString()}</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
              <div className="text-zinc-500 text-xs font-bold uppercase mb-1">MVPs</div>
              <div className="text-3xl font-black text-yellow-500">{player.stats.totalMVPs}</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
              <div className="text-zinc-500 text-xs font-bold uppercase mb-1">Avg KDA</div>
              <div className="text-3xl font-black text-white">{player.stats.kda}</div>
            </div>
          </div>
        </div>

        {/* Recent Performance */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold uppercase italic flex items-center gap-2">
            <History className="text-yellow-500" /> Recent Matches
          </h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase font-black tracking-widest">
                  <th className="px-6 py-4">Tournament</th>
                  <th className="px-6 py-4">Map</th>
                  <th className="px-6 py-4 text-center">Kills</th>
                  <th className="px-6 py-4 text-center">Damage</th>
                  <th className="px-6 py-4 text-center">MVP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {player.recentMatches.map((match, i) => (
                  <tr key={i} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4 font-bold">{match.tournament}</td>
                    <td className="px-6 py-4 text-zinc-400">{match.map}</td>
                    <td className="px-6 py-4 text-center font-bold text-white">{match.kills}</td>
                    <td className="px-6 py-4 text-center text-zinc-400">{match.damage}</td>
                    <td className="px-6 py-4 text-center">
                      {match.mvp ? (
                        <span className="px-2 py-1 bg-yellow-500 text-black text-[10px] font-black rounded uppercase">Yes</span>
                      ) : (
                        <span className="text-zinc-600 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
