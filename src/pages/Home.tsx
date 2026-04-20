import { motion } from 'motion/react';
import { Users, Trophy, Calendar } from 'lucide-react';

export const HomeView = ({ setScreen }: { setScreen: (s: any) => void }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <section className="relative h-[600px] lg:h-[800px] rounded-[2rem] overflow-hidden flex items-center px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="/assets/kuground.jpg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary-brand/10 border border-primary-brand/20 px-4 py-1 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-brand animate-pulse"></span>
            <span className="text-primary-brand font-bold text-[10px] uppercase tracking-[0.2em]">Live Registration Open</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl lg:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-4"
          >
            KUCC<br/><span className="text-primary-brand">Cup 2026</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-display text-lg lg:text-2xl font-bold text-slate-600 mb-8 leading-tight"
          >
            Kathmandu University Computer Club <br/>
            <span className="opacity-60 text-base lg:text-lg font-medium">Where champions are made.</span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 lg:gap-10"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Date</p>
              <p className="font-bold text-base lg:text-lg">May 2, 2026</p>
            </div>
            <button 
              onClick={() => setScreen('forms')}
              className="kinetic-gradient px-8 py-4 rounded-full text-white font-display font-extrabold text-sm shadow-xl shadow-primary-brand/30 hover:scale-105 active:scale-95 transition-all"
            >
              Join The Tournament
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-12 right-12 text-right hidden xl:block">
          <span className="font-display text-[160px] font-black leading-none opacity-[0.03] select-none pointer-events-none">KUCC</span>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-8 py-12">
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-on-surface">Engineering the Future of Sports</h2>
          <p className="text-lg lg:text-xl leading-relaxed text-slate-600">
            The KUCC Cup 2026 isn't just about competition; it's a celebration of synergy between physical prowess and technological passion. Organized by the Kathmandu University Computer Club, we bring together the brightest minds of the IT department to the field, challenging limits beyond the keyboard.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Users, val: '500+', label: 'Athletes' },
              { icon: Trophy, val: '8', label: 'Championships' },
              { icon: Calendar, val: '1 Day', label: 'Non-stop Action' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 lg:p-8 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col items-center sm:items-start">
                <stat.icon className="text-primary-brand mb-4 w-8 h-8" />
                <h4 className="font-display font-bold text-xl mb-1">{stat.val}</h4>
                <p className="text-sm font-medium opacity-60 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-on-surface p-10 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center text-white">
            <div className="absolute top-0 right-0 w-32 h-32 kinetic-gradient opacity-20 blur-3xl -mr-16 -mt-16"></div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-12 opacity-50">Event Commences In</h3>
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {[
                { val: '12', label: 'Days' },
                { val: '08', label: 'Hours' },
                { val: '45', label: 'Minutes' },
                { val: '30', label: 'Seconds', primary: true },
              ].map((time, i) => (
                <div key={i} className="flex flex-col">
                  <span className={`font-display text-5xl lg:text-7xl font-black tracking-tighter leading-none ${time.primary ? 'text-primary-brand' : ''}`}>{time.val}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-2">{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-primary-brand">Disciplines</span>
            <h2 className="font-display text-4xl lg:text-5xl font-black tracking-tight mt-2">The Sporting Core</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { tag: 'Football', screen: 'football', img: '/assets/football.jpg' },
            { tag: 'Basketball', screen: 'basketball', img: '/assets/basketball.jpg' },
            { tag: 'Cricket', screen: 'cricket', img: '/assets/cricket.jpg' },
            { tag: 'Table Tennis', screen: 'table-tennis', img: '/assets/table-tennis.jpg' },
            { tag: 'Badminton', screen: 'badminton', img: '/assets/badminton.jpg' },
            { tag: 'Chess', screen: 'chess', img: '/assets/chess.jpg' },
            { tag: 'Volleyball', screen: 'volleyball', img: '/assets/volleyball.jpg' },
            { tag: 'Futsal', screen: 'futsal', img: '/assets/futsal.jpg' },
          ].map((sport, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              onClick={() => setScreen(sport.screen)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-lg cursor-pointer"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={sport.img} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-display text-sm lg:text-base font-extrabold uppercase tracking-tight">{sport.tag}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="font-display font-black text-2xl text-on-surface">KUCC</span>
          <span className="text-xs text-slate-400 font-medium">© 2026 Kathmandu University Computer Club.</span>
        </div>
      </footer>
    </div>
  );
}