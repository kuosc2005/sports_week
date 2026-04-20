import { Home, Contact, Trophy, FileText, Image, Swords, Volleyball, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';

export const Sidebar = ({ currentScreen, setScreen, isOpen, toggleClose }: { currentScreen: Screen, setScreen: (s: Screen) => void, isOpen: boolean, toggleClose: () => void }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'forms', label: 'Registration Forms', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Contact },
    { id: 'gallery', label: 'Gallery', icon: Image },
  ];

  const categories = [
    { id: 'football', label: 'Football', icon: Trophy },
    { id: 'basketball', label: 'Basketball', icon: Trophy },
    { id: 'cricket', label: 'Cricket', icon: Trophy },
    { id: 'table-tennis', label: 'Table Tennis', icon: Trophy },
    { id: 'badminton', label: 'Badminton', icon: Trophy },
    { id: 'chess', label: 'Chess', icon: Swords },
    { id: 'volleyball', label: 'Volleyball', icon: Trophy },
    { id: 'futsal', label: 'Futsal', icon: Trophy },
  ];

  const SidebarContent = () => (
    <div className="h-full flex flex-col py-8 px-4">
      <div className="mb-10 px-2">
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-lg items-center justify-center overflow-hidden">
            <img 
              alt="KUCC Logo" 
              className="w-full h-full object-cover" 
              src="assets/KUCC.png"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            
            <p className="text-2xl font-black tracking-tighter text-on-surface uppercase leading-none font-display">KUCC 2026</p>
            <p className="text-[10px] font-bold text-primary-container tracking-widest uppercase mt-1">KUCC Cup</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { setScreen(item.id as Screen); toggleClose(); }}
            className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 group ${
              currentScreen === item.id 
                ? 'text-primary-container font-bold bg-white/50 shadow-sm border-l-4 border-primary-container' 
                : 'text-slate-500 hover:text-primary-brand hover:bg-white/50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}

        <div className="pt-6 pb-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-4">Games</p>
        </div>

        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => { setScreen(item.id as Screen); toggleClose(); }}
            className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
              currentScreen === item.id 
                ? 'text-primary-container font-bold bg-white/50 shadow-sm border-l-4 border-primary-container' 
                : 'text-slate-500 hover:text-primary-brand hover:bg-white/50'
            }`}
          >
            <item.icon className={`w-5 h-5 ${currentScreen === item.id ? 'fill-primary-container' : ''}`} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-2 pt-4">
        <button 
          onClick={() => { setScreen('forms'); toggleClose(); }}
          className="kinetic-gradient w-full text-white py-3 px-4 rounded-full font-bold text-sm transition-all duration-200 active:scale-95 shadow-[0_8px_16px_rgba(169,0,86,0.2)]"
        >
          Register Now
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[280px] h-screen fixed left-0 top-0 overflow-y-auto bg-[#FFF0F6] z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleClose}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] bg-[#FFF0F6] z-[70] lg:hidden shadow-2xl overflow-y-auto"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};