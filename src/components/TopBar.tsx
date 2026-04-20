import { Menu, Search, Bell, User } from 'lucide-react';

export const TopBar = ({ title, toggleOpen }: { title: string, toggleOpen: () => void }) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[280px] h-16 z-40 bg-surface/80 backdrop-blur-md flex justify-between items-center px-4 lg:px-12 border-b border-outline-variant/5">
      <div className="flex items-center gap-4 lg:gap-8">
        <button onClick={toggleOpen} className="lg:hidden p-2 text-on-surface hover:bg-slate-100 rounded-lg">
          <Menu className="w-6 h-6" />
        </button>
        <p className="font-display font-bold text-base lg:text-lg text-on-surface whitespace-nowrap">{title}</p>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-primary-container border-b-2 border-primary-container pb-1 font-semibold text-sm">Live</a>
          <a href="#" className="text-slate-600 hover:text-primary-brand font-semibold text-sm transition-colors">Schedule</a>
          <a href="#" className="text-slate-600 hover:text-primary-brand font-semibold text-sm transition-colors">Athletes</a>
        </nav>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <div className="hidden sm:flex relative items-center bg-white/50 px-4 py-2 rounded-full w-48 lg:w-64 border border-outline-variant/20 shadow-sm">
          <Search className="w-4 h-4 text-slate-400 mr-2" />
          <input className="bg-transparent border-none focus:ring-0 text-xs w-full placeholder:text-slate-400" placeholder="Search..." type="text"/>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 text-slate-600">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary-brand rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};