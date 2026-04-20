import { motion } from 'motion/react';
import { Calendar, MapPin, Download, Trophy, ChevronDown, Activity, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface Team {
  name: string;
  contact?: string;
  members?: string[];
  seed?: string;
}

interface Match {
  team1: string;
  team2: string;
  result?: string;
  round: string;
}

interface GameConfig {
  name: string;
  date: string;
  venue: string;
  heroImg: string;
  regulations: { title: string; desc: string }[];
  teams: Team[];
  bracket: Match[];
  formLink: string;
}

const TeamCard = ({ team }: { team: Team }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-white rounded-xl p-4 shadow-sm border border-outline-variant/10 hover:border-primary-brand/30 hover:shadow-md transition-all duration-300 cursor-pointer flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-brand/10 flex items-center justify-center flex-shrink-0">
          <Trophy className="w-5 h-5 text-primary-brand" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-on-surface">{team.name}</p>
          {team.seed && <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Seed {team.seed}</p>}
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${hovered ? 'rotate-180' : ''}`} />
      </div>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute left-0 right-0 top-full mt-1 z-50 bg-white border border-primary-brand/20 rounded-xl shadow-2xl p-4"
        >
          {team.contact && (
            <div className="mb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Contact</p>
              <p className="text-sm font-semibold text-on-surface">{team.contact}</p>
            </div>
          )}
          {team.members && team.members.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Team Members</p>
              <ul className="space-y-1">
                {team.members.map((m, i) => (
                  <li key={i} className="text-sm text-slate-600 font-medium">• {m}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const handleDownloadTiesheet = (gameName: string) => {
  const content = `KUCC Cup 2026 - ${gameName} Tiesheet\n\nThis is a placeholder tiesheet.\nFull bracket will be available before the event.`;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `KUCC-Cup-2026-${gameName.replace(/\s+/g, '-')}-Tiesheet.txt`;
  a.click();
  URL.revokeObjectURL(url);
};

/* ─── Live Updates placeholder — will be wired to Google Sheets later ─── */
const LiveUpdatesSection = ({ gameName }: { gameName: string }) => {
  const placeholderUpdates = [
    { time: '--:-- AM', text: 'Live updates will appear here during the event.', type: 'info' },
    { time: '--:-- AM', text: 'Scores, goals, and match results will be posted in real time.', type: 'info' },
    { time: '--:-- AM', text: 'Connect your Google Sheet to start syncing live data.', type: 'pending' },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight">
            Live Updates
          </h2>
          <p className="text-sm text-slate-400 font-medium mt-1 italic">
            Real-time match updates for {gameName}
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
          <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Offline · Event Day Only</span>
        </div>
      </div>

      {/* Feed */}
      <div className="bg-on-surface rounded-3xl p-6 lg:p-8 space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary-brand/10 blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        {placeholderUpdates.map((u, i) => (
          <div key={i} className="flex items-start gap-4 relative z-10">
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
              u.type === 'pending' ? 'bg-primary-brand/20' : 'bg-white/10'
            }`}>
              {u.type === 'pending'
                ? <RefreshCw className="w-4 h-4 text-primary-brand" />
                : <Activity className="w-4 h-4 text-white/40" />
              }
            </div>
            <div className="flex-1 border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{u.time}</p>
              <p className={`text-sm font-medium ${u.type === 'pending' ? 'text-primary-brand/80 italic' : 'text-white/50 italic'}`}>
                {u.text}
              </p>
            </div>
          </div>
        ))}

        <div className="relative z-10 mt-4 bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">How to enable live updates</p>
          <p className="text-xs text-white/40 leading-relaxed">
            To sync live data from Google Sheets, add your published sheet URL in the config and map the columns to
            match events. Updates will refresh every 30 seconds during the event window.
          </p>
        </div>
      </div>
    </section>
  );
};

export const GameView = ({ config }: { config: GameConfig }) => {
  return (
    <div className="space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero */}
      <section className="relative h-[340px] lg:h-[420px] rounded-[2rem] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img 
            alt={config.name}
            className="w-full h-full object-cover" 
            src={config.heroImg}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/50 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 lg:px-12 pb-10 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-brand rounded-full mb-4">
            <Trophy className="w-3 h-3 fill-white text-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">KUCC Cup 2026</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-white mb-4 uppercase leading-none">{config.name}</h1>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl flex items-center gap-3">
              <Calendar className="text-primary-brand w-5 h-5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-primary-brand tracking-widest">Date</p>
                <p className="font-bold text-sm text-white">{config.date}</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl flex items-center gap-3">
              <MapPin className="text-primary-brand w-5 h-5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-primary-brand tracking-widest">Venue</p>
                <p className="font-bold text-sm text-white">{config.venue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE UPDATES (previously where Regulations were) ── */}
      <LiveUpdatesSection gameName={config.name} />

      {/* Tiesheet */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight">Tiesheet / Bracket</h2>
          <button
            onClick={() => handleDownloadTiesheet(config.name)}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary-brand text-white rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-brand/20"
          >
            <Download className="w-4 h-4" /> Download
          </button>
        </div>

        <div className="bg-[#eef4ff] rounded-[2rem] p-6 lg:p-10 overflow-x-auto hide-scrollbar">
          <div className="flex min-w-[600px] justify-center items-center gap-8 relative">
            {/* Semi Finals */}
            <div className="space-y-10 w-52">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center mb-4">Semi Finals</p>
              {config.bracket.filter(m => m.round === 'semi').map((match, i) => (
                <div key={i} className="space-y-2">
                  <div className="bg-white p-3 rounded-xl shadow-sm border-l-4 border-primary-brand">
                    <span className="font-bold text-sm">{match.team1}</span>
                  </div>
                  <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">vs</div>
                  <div className="bg-white p-3 rounded-xl shadow-sm border-l-4 border-slate-200">
                    <span className="font-bold text-sm text-slate-500">{match.team2}</span>
                  </div>
                  {match.result && <p className="text-[10px] text-center font-bold text-primary-brand uppercase tracking-widest">{match.result}</p>}
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center gap-0">
              <div className="w-16 h-[2px] bg-slate-300"></div>
            </div>

            {/* Finals */}
            <div className="w-64 flex flex-col items-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary-brand text-center mb-6">Final</p>
              <div className="bg-primary-brand/5 border-2 border-dashed border-primary-brand/30 p-8 rounded-[2rem] flex flex-col items-center gap-5 w-full">
                <div className="w-14 h-14 rounded-full bg-primary-brand flex items-center justify-center shadow-lg shadow-primary-brand/20">
                  <Trophy className="text-white w-7 h-7 fill-white" />
                </div>
                {config.bracket.filter(m => m.round === 'final').map((match, i) => (
                  <div key={i} className="space-y-3 w-full">
                    <div className="bg-white p-4 rounded-2xl shadow-xl border-l-4 border-primary-brand text-center">
                      <span className="font-black text-base uppercase tracking-tight font-display">{match.team1}</span>
                    </div>
                    <div className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest">VS</div>
                    <div className="bg-white/60 border border-slate-200/50 p-4 rounded-2xl text-center text-slate-400 text-sm italic">
                      {match.team2}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight mb-6">Participating Teams</h2>
        <p className="text-sm text-slate-500 mb-4 font-medium">Hover over a team to see details and contact information.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {config.teams.map((team, i) => (
            <TeamCard key={i} team={team} />
          ))}
        </div>
      </section>

      {/* Winners Gallery Placeholder */}
      <section>
        <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight mb-3">Winners</h2>
        <p className="text-sm text-slate-400 font-medium mb-6 italic">Photos and results will be added after the tournament.</p>
        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl h-64 flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-slate-300" />
          </div>
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Champion Photos Coming Soon</p>
          <p className="text-slate-300 text-xs">Results will be posted after May 2, 2026</p>
        </div>
      </section>

      {/* ── GAME REGULATIONS (moved to very bottom) ── */}
      <section className="pb-8">
        <h2 className="text-3xl lg:text-4xl font-display font-black text-on-surface uppercase tracking-tight mb-6">
          Game Regulations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.regulations.map((reg, i) => (
            <div key={i} className="bg-white rounded-2xl border border-outline-variant/10 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-8 h-1 bg-primary-brand mb-4 rounded-full"></div>
              <h4 className="font-bold text-base text-on-surface mb-2">{reg.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{reg.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};