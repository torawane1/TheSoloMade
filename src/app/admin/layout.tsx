import React from 'react';
import { LayoutDashboard, Trophy, Users, ShieldAlert, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-black uppercase italic tracking-tighter text-yellow-500">
            CMS Panel
          </h1>
          <p className="text-zinc-500 text-xs font-bold uppercase">BGMI Circuit Admin</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-800 text-white font-bold transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/admin/tournaments" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
            <Trophy className="w-5 h-5" /> Tournaments
          </Link>
          <Link href="/admin/players" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
            <Users className="w-5 h-5" /> Players
          </Link>
          <Link href="/admin/results" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
            <ShieldAlert className="w-5 h-5" /> Enter Results
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-zinc-500 hover:bg-red-900/20 hover:text-red-500 transition-colors font-bold">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 bg-zinc-900/50 border-b border-zinc-800 flex items-center justify-between px-8">
          <div className="text-zinc-400 text-sm font-medium">
            Administrator &gt; <span className="text-white">Management</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xs">
              AD
            </div>
            <span className="text-sm font-bold">Admin User</span>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
