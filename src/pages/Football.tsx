import { Trophy, Calendar, Info, Timer, Users } from 'lucide-react';

export const FootballView = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            alt="Football Action" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9f4iv2zpc7UPBmkwM26vUHtK9gR417MVVmGJgHNTWbiYk8GU2l76mDnOxzgJMV0EnE5II8h5C7bjSU-XcRs70aAsJQqNr3Mni_2L0b-J6E6N9vp9_lMBvZpTOzEIHjJfqBNua4ILGZFQAr_TmG54HzNMwqWBaeS87s4xH3_rvtP1-kW18zS4Zld--DOYOb6Zc34xoQs8Vwoy9DDW2-zHoy7JOVjIx02J4VWBmG63H8caJZ268CmKbwUBPQmLl9HH_JdsURlxaetPf"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface via-on-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 lg:px-12 py-16 max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-brand rounded-full mb-6">
            <Trophy className="w-3 h-3 fill-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Tournament Center</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-display font-black tracking-tighter mb-4 leading-none uppercase">Football</h1>
          <p className="text-slate-300 font-medium text-base lg:text-lg mb-8 leading-relaxed">
            Precision, speed, and kinetic energy. The KUCC 2025 Football Championship features the top four seeded teams competing in a high-stakes bracket for the editorial glory. 
          </p>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl inline-flex items-center gap-4 shadow-xl">
            <Calendar className="text-primary-brand w-6 h-6 lg:w-8 lg:h-8" />
            <div>
              <p className="text-[10px] uppercase font-bold text-primary-brand tracking-widest">Date & Time</p>
              <p className="font-bold text-base lg:text-lg">April 28, 2025 | 10:00 AM</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight">Match Bracket</h2>
            <span className="text-[10px] font-bold text-slate-400 font-display uppercase tracking-widest whitespace-nowrap">4 Team Knockout</span>
          </div>
          
          <div className="bg-[#eef4ff] rounded-[2rem] p-6 lg:p-12 overflow-x-auto hide-scrollbar">
            <div className="flex min-w-[700px] justify-between items-center relative gap-8">
              {/* Semi Finals */}
              <div className="space-y-12 lg:space-y-24 w-60 lg:w-64">
                <div className="relative">
                  <div className="space-y-2">
                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-primary-brand flex justify-between items-center">
                      <span className="font-bold text-sm">Team Alpha</span>
                      <span className="text-[10px] font-bold text-primary-brand uppercase tracking-widest">Win</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-slate-200 flex justify-between items-center opacity-60">
                      <span className="font-bold text-sm text-slate-500">Team Delta</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lost</span>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-[2px] bg-slate-200"></div>
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-[2px] h-32 bg-slate-200"></div>
                </div>
                <div className="relative">
                  <div className="space-y-2">
                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-slate-200 flex justify-between items-center">
                      <span className="font-bold text-sm">Team Beta</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">28 Apr</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-slate-200 flex justify-between items-center">
                      <span className="font-bold text-sm">Team Gamma</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">28 Apr</span>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-[2px] bg-slate-200"></div>
                  <div className="hidden lg:block absolute -top-[128px] -right-8 w-[2px] h-32 bg-slate-200"></div>
                </div>
              </div>

              <div className="flex-1 h-[2px] bg-slate-200 mx-8 hidden sm:block"></div>

              {/* Finals */}
              <div className="w-72 relative">
                <div className="text-center mb-6">
                  <p className="text-[10px] font-black text-primary-brand uppercase tracking-[0.3em] font-display">The Championship</p>
                </div>
                <div className="bg-primary-brand/5 border-2 border-dashed border-primary-brand/30 p-6 lg:p-8 rounded-[2rem] flex flex-col items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary-brand flex items-center justify-center shadow-lg shadow-primary-brand/20">
                    <Trophy className="text-white w-8 h-8 fill-white" />
                  </div>
                  <div className="space-y-4 w-full">
                    <div className="bg-white p-5 rounded-2xl shadow-xl border-l-4 border-primary-brand text-center">
                      <span className="font-black text-lg uppercase tracking-tight font-display">Team Alpha</span>
                    </div>
                    <div className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest">VS</div>
                    <div className="bg-white/40 border border-slate-200/50 p-5 rounded-2xl text-center italic text-slate-400 text-sm">
                      TBD Winner (Match 2)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight">Active Teams</h2>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Team Alpha', status: 'Active', seed: '#1', color: 'bg-primary-brand/10', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgOcdBgofmkwIoyrfOysW8ipd_ftaxRF74WNcTjvxE5Xi3wOnn3oO-wQt6IuaIcz_2zBl9fM7t_a5pK0qp796tX2oKSNkYYeGi32OkOCUw3x6v3Zw4Dg2zC1TV-6kJKR38FI3nh3LaaOjxxlgFOoZdHnFOwfaWOrzPpjf7TeOguC5LqcvAyHFqwdUfRoi6-N8O7lpan6q-uw1Weqbds82QWWjuXAHYPBqbQlJ_lcdxEdVLkhkrQf8zDP-et2clcxSJycllXqyxt4ik' },
              { name: 'Team Beta', status: 'Pre-game', seed: '#2', color: 'bg-secondary-container' },
              { name: 'Team Gamma', status: 'Pre-game', seed: '#3', color: 'bg-emerald-100' },
              { name: 'Team Delta', status: 'Eliminated', seed: '#4', color: 'bg-slate-100', error: true },
            ].map((team, idx) => (
              <div key={idx} className="group relative bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-primary-brand/10 shadow-sm flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${team.color} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                  {team.img ? (
                    <img src={team.img} alt={team.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <Trophy className="w-6 h-6 text-slate-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl text-on-surface tracking-tight font-display">{team.name}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${team.error ? 'text-red-500' : 'text-primary-brand'}`}>Seed {team.seed} • {team.status}</p>
                </div>
                <Info className="w-5 h-5 text-slate-300 group-hover:text-primary-brand transition-colors cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight">Game Regulations</h2>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 bg-primary-container p-10 rounded-[2rem] text-white relative overflow-hidden group">
            <Timer className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter font-display">Match Duration</h3>
            <p className="font-medium text-lg leading-snug">Two halves of 20 minutes each, with a 5-minute strategic intermission.</p>
          </div>
          <div className="col-span-12 md:col-span-8 bg-white p-10 rounded-[2rem] border border-outline-variant/10 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Users, title: 'Squad Size', desc: 'Each team must field exactly 5 players. No substitutions permitted after second half starts.' },
                { icon: Trophy, title: 'Standard Play', desc: 'FIFA standard 5-a-side rules apply. No slide tackling to ensure maximum safety.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shadow-sm flex-shrink-0">
                    <item.icon className="text-primary-brand w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
