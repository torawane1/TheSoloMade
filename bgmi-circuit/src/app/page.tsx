import React from 'react';
import { Trophy, User, Users, Calendar, Search } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mb-4">
            BGMI Circuit
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
            The ultimate statistics and information hub for BGMI Esports. 
            Track your favorite players, teams, and tournaments in real-time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tournaments" className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase tracking-wider transition-all transform hover:scale-105">
              Explore Tournaments
            </Link>
            <Link href="/leaderboards" className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase tracking-wider transition-all border border-zinc-700">
              Global Rankings
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats / Ticker */}
      <div className="bg-yellow-500 text-black py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="mx-4 font-bold uppercase text-sm">🔥 Live: BGMI Pro Series 2026 - Day 4 - Erangel Map</span>
          <span className="mx-4 font-bold uppercase text-sm">🏆 Top Player: Jonathan (Soul) - 4 Kills MVP</span>
          <span className="mx-4 font-bold uppercase text-sm">⚡ Roster Change: Soul adds new support player</span>
          <span className="mx-4 font-bold uppercase text-sm">🔥 Live: BGMI Pro Series 2026 - Day 4 - Erangel Map</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Tournament */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold uppercase italic flex items-center gap-2">
              <Trophy className="text-yellow-500" /> Featured Event
            </h2>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-6 hover:border-yellow-500/50 transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-black uppercase rounded mb-2 inline-block">S-Tier</span>
                <h3 className="text-2xl font-bold mb-1">BGMI Pro Series 2026</h3>
                <p className="text-zinc-400 mb-4">Organized by Krafton • Prize Pool: ₹1,00,00,000</p>
                <Link href="/tournaments/bgmi-pro-series" className="text-yellow-500 font-bold hover:underline flex items-center gap-1">
                  View Standings →
                </Link>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
                <div className="text-xs text-zinc-500 uppercase font-bold mb-2">Current Status</div>
                <div className="flex items-center gap-2 text-green-500 font-bold">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  LIVE NOW
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Players Widget */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold uppercase italic flex items-center gap-2">
            <User className="text-yellow-500" /> Top Players
          </h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-zinc-800 bg-zinc-800/50 font-bold uppercase text-xs text-zinc-400">
              Current Form
            </div>
            <div className="divide-y divide-zinc-800">
              {[
                { name: 'Jonathan', team: 'Soul', kills: 142, rating: 9.8 },
                { name: 'Zuxxy', team: 'godL', kills: 128, rating: 9.5 },
                { name: 'Mortal', team: 'Soul', kills: 98, rating: 8.7 },
                { name: 'wreckless', team: 'godL', kills: 85, rating: 8.2 },
              ].map((player, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-zinc-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-500 font-mono font-bold">{i + 1}</span>
                    <div>
                      <div className="font-bold">{player.name}</div>
                      <div className="text-xs text-zinc-500">{player.team}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-yellow-500">{player.rating}</div>
                    <div className="text-xs text-zinc-500">{player.kills} Kills</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/leaderboards" className="block p-4 text-center text-xs font-bold uppercase text-zinc-500 hover:text-yellow-500 transition-colors">
              View Full Rankings
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-black italic uppercase mb-4">BGMI CIRCUIT</div>
          <p className="text-zinc-500 text-sm mb-8">
            © 2026 BGMI Circuit. Not affiliated with Krafton. Built for the community.
          </p>
          <div className="flex justify-center gap-6 text-zinc-400 text-sm">
            <Link href="/about" className="hover:text-yellow-500">About</Link>
            <Link href="/terms" className="hover:text-yellow-500">Terms</Link>
            <Link href="/privacy" className="hover:text-yellow-500">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
