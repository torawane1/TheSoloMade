import React from 'react';
import { Trophy, Calendar, Map, Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  // Return a few sample IDs so Next.js can build these pages statically
  return [
    { id: 'bgmi-pro-series-2026' },
    { id: 'bgmi-masters' },
  ];
}

export default function TournamentDetailPage({ params }: { params: { id: string } }) {
  // Static Mock data for Frontend Phase
  const tournament = {
    name: 'BGMI Pro Series 2026',
    organizer: 'Krafton',
    tier: 'S',
    status: 'LIVE',
    prizePool: '₹1,00,00,000',
    startDate: '2026-09-01',
    region: 'India',
  };

  const standings = [
    { rank: 1, team: 'Soul', totalPoints: 145, killPoints: 60, placePoints: 85 },
    { rank: 2, team: 'godL', totalPoints: 130, killPoints: 55, placePoints: 75 },
    { rank: 3, team: 'Entity Gaming', totalPoints: 110, killPoints: 40, placePoints: 70 },
    { rank: 4, team: 'Global Esports', totalPoints: 95, killPoints: 35, placePoints: 60 },
  ];

  const matches = [
    { id: 'm1', map: 'Erangel', date: '2026-09-01', result: 'Completed' },
    { id: 'm2', map: 'Miramar', date: '2026-09-01', result: 'Completed' },
    { id: 'm3', map: 'Sanhok', date: '2026-09-02', result: 'Live' },
    { id: 'm4', map: 'Vikendi', date: '2026-09-02', result: 'Upcoming' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-20">
      {/* Tournament Hero */}
      <div className="relative bg-zinc-900 border-b border-zinc-800 py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-black uppercase rounded">
                  {tournament.tier}-Tier
                </span>
                <span className="flex items-center gap-1 text-zinc-400 text-xs uppercase font-bold">
                  <Calendar className="w-3 h-3" /> {tournament.startDate}
                </span>
                <span className="flex items-center gap-1 text-green-500 text-xs uppercase font-bold animate-pulse">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> {tournament.status}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
                {tournament.name}
              </h1>
              <div className="flex flex-wrap gap-6 text-zinc-400 font-medium">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Prize Pool: <span className="text-white font-bold">{tournament.prizePool}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span>Organizer: <span className="text-white font-bold">{tournament.organizer}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Standings */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold uppercase italic flex items-center gap-3">
              <Trophy className="text-yellow-500" /> Overall Standings
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase font-black tracking-widest">
                  <th className="px-6 py-4 w-20 text-center">Rank</th>
                  <th className="px-6 py-4">Team</th>
                  <th className="px-6 py-4 text-center">Placement Pts</th>
                  <th className="px-6 py-4 text-center">Kill Pts</th>
                  <th className="px-6 py-4 text-center font-bold text-white">Total Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {standings.map((team) => (
                  <tr key={team.team} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4 text-center font-mono font-bold text-zinc-500">
                      {team.rank}
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/teams/${team.team.toLowerCase()}`} className="font-bold hover:text-yellow-500 transition-colors">
                        {team.team}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center text-zinc-400">{team.placePoints}</td>
                    <td className="px-6 py-4 text-center text-zinc-400">{team.killPoints}</td>
                    <td className="px-6 py-4 text-center font-black text-white text-lg">{team.totalPoints}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Match Schedule */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold uppercase italic flex items-center gap-3">
            <Calendar className="text-yellow-500" /> Schedule
          </h2>

          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-yellow-500/50 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase">
                    <Map className="w-3 h-3" /> {match.map}
                  </div>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    match.result === 'Live' ? 'bg-green-500 text-black animate-pulse' :
                    match.result === 'Completed' ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-800 text-zinc-500'
                  }`}>
                    {match.result}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-300">{match.date}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
