import { motion } from 'motion/react';
import { Image } from 'lucide-react';

const games = ['Football', 'Basketball', 'Cricket', 'Table Tennis', 'Badminton', 'Chess', 'Volleyball', 'Futsal'];

export const GalleryView = () => {
  return (
    <div className="space-y-14 animate-in fade-in duration-700">
      <section>
        <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tighter text-on-surface mb-2">
          Gallery
        </h1>
        <p className="text-slate-500 font-medium mt-3">Photos will be added after the tournament on May 2, 2026. Check back soon!</p>
      </section>

      {games.map((game, i) => (
        <section key={game}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-primary-brand rounded-full"></div>
              <h2 className="text-2xl font-display font-black text-on-surface uppercase tracking-tight">{game}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((j) => (
                <div
                  key={j}
                  className="aspect-square rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2"
                >
                  <Image className="w-8 h-8 text-slate-200" />
                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Photo {j}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 italic mt-3 font-medium">Photos coming after the event.</p>
          </motion.div>
        </section>
      ))}
    </div>
  );
};
