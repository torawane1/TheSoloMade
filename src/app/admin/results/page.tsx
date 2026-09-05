"use client";

import React, { useState } from 'react';
import { Save, Plus, Trash2, Calculator } from 'lucide-react';
import { calculateMatchPoints, DEFAULT_POINTS_SYSTEM } from '@/lib/points';

export default function MatchResultsPage() {
  const [teams, setTeams] = useState([
    { id: '1', name: 'Soul', placement: '', kills: '' },
    { id: '2', name: 'godL', placement: '', kills: '' },
    { id: '3', name: 'Entity Gaming', placement: '', kills: '' },
    { id: '4', name: 'Global Esports', placement: '', kills: '' },
  ]);

  const handleTeamChange = (index: number, field: string, value: string) => {
    const newTeams = [...teams];
    newTeams[index] = { ...newTeams[index], [field]: value };
    setTeams(newTeams);
  };

  const addTeam = () => {
    setTeams([...teams, { id: Date.now().toString(), name: '', placement: '', kills: '' }]);
  };

  const removeTeam = (index: number) => {
    setTeams(teams.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold uppercase italic tracking-tighter">Enter Match Results</h1>
          <p className="text-zinc-500">Input placement and kill data to auto-calculate total points.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-yellow-500/20">
          <Save className="w-5 h-5" /> Save Results
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-yellow-500 font-bold uppercase text-sm">
              <Calculator className="w-4 h-4" /> Scoring System
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-zinc-800 rounded-lg border border-zinc-700">
                <div className="text-xs text-zinc-500 font-bold uppercase mb-2">Default Points</div>
                <div className="text-sm text-zinc-300 font-mono">
                  1st: {DEFAULT_POINTS_SYSTEM.placementPoints[1]}pts<br />
                  2nd: {DEFAULT_POINTS_SYSTEM.placementPoints[2]}pts<br />
                  3rd: {DEFAULT_POINTS_SYSTEM.placementPoints[3]}pts<br />
                  Kills: {DEFAULT_POINTS_SYSTEM.killPointValue}pt/kill
                </div>
              </div>
              <p className="text-xs text-zinc-500 italic">
                Points are calculated automatically based on the tournament's configured scoring system.
              </p>
            </div>
          </div>
        </div>

        {/* Entry Table */}
        <div className="lg:col-span-2">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-zinc-800/50 text-zinc-400 text-xs uppercase font-black tracking-widest">
                <tr>
                  <th className="px-6 py-4">Organization</th>
                  <th className="px-6 py-4 text-center">Placement</th>
                  <th className="px-6 py-4 text-center">Kills</th>
                  <th className="px-6 py-4 text-center">Total</th>
                  <th className="px-6 py-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {teams.map((team, index) => {
                  const points = calculateMatchPoints(
                    parseInt(team.placement) || 0,
                    parseInt(team.kills) || 0
                  );
                  return (
                    <tr key={team.id} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <input 
                          type="text" 
                          value={team.name} 
                          onChange={(e) => handleTeamChange(index, 'name', e.target.value)}
                          placeholder="Team Name"
                          className="bg-transparent border-none focus:ring-0 text-white font-bold p-0 placeholder-zinc-600 w-full"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input 
                          type="number" 
                          value={team.placement} 
                          onChange={(e) => handleTeamChange(index, 'placement', e.target.value)}
                          placeholder="0"
                          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-1 text-center w-20 text-white focus:border-yellow-500 transition-colors"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input 
                          type="number" 
                          value={team.kills} 
                          onChange={(e) => handleTeamChange(index, 'kills', e.target.value)}
                          placeholder="0"
                          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-1 text-center w-20 text-white focus:border-yellow-500 transition-colors"
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xl font-black text-yellow-500">{points.totalPoints}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => removeTeam(index)}
                          className="text-zinc-600 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="p-4 bg-zinc-800/30 border-t border-zinc-800">
              <button 
                onClick={addTeam}
                className="flex items-center gap-2 text-zinc-400 hover:text-yellow-500 transition-colors text-sm font-bold uppercase"
              >
                <Plus className="w-4 h-4" /> Add Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
