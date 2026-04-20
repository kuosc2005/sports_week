import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const sports = [
  { name: 'Football', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'football@ku.edu.np', img: '/assets/football.jpg' },
  { name: 'Basketball', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'basketball@ku.edu.np', img: '/assets/basketball.jpg' },
  { name: 'Cricket', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'cricket@ku.edu.np', img: '/assets/cricket.jpg' },
  { name: 'Table Tennis', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'tabletennis@ku.edu.np', img: '/assets/table-tennis.jpg' },
  { name: 'Badminton', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'badminton@ku.edu.np', img: '/assets/badminton.jpg' },
  { name: 'Chess', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'chess@ku.edu.np', img: '/assets/chess.jpg' },
  { name: 'Volleyball', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'volleyball@ku.edu.np', img: '/assets/volleyball.jpg' },
  { name: 'Futsal', coordinator: 'TBD', phone: '+977-XXXXXXXXXX', email: 'futsal@ku.edu.np', img: '/assets/futsal.jpg' },
];

export const ContactView = () => {
  return (
    <div className="space-y-16 animate-in fade-in zoom-in-95 duration-700">
      <section className="relative">
        <div className="absolute -left-8 top-0 w-24 h-1 bg-primary-brand hidden lg:block"></div>
        <h1 className="text-6xl lg:text-8xl font-display font-extrabold tracking-tighter text-on-surface mb-2">
          Contact <span className="text-primary-brand italic">Us</span>
        </h1>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Get in touch with the KUCC Cup team</p>
      </section>

      {/* Sports Coordinator — Chief */}
      <section>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-brand mb-4 block">KUCC Cup Coordinator</span>
        <div className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-[0_12px_24px_rgba(13,28,45,0.06)] overflow-hidden transition-all duration-500 hover:shadow-2xl border-l-4 border-primary-brand">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-brand/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-slate-100 shadow-inner flex-shrink-0">
              <img
                alt="Sports Coordinator"
                className="w-full h-full object-cover"
                src="/assets/Asharya_Kadel.jpg"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Samip+Aryal&background=A90056&color=fff&size=96'; }}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-on-surface">Mr. Asharya Kadel</h2>
              <p className="text-slate-500 font-medium text-sm lg:text-base mb-6">KUCC Cup Coordinator</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-primary-brand" />
                  <span className="text-base font-semibold">+977-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-primary-brand" />
                  <span className="text-base font-semibold">coordinator@ku.edu.np</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KUCC Org */}
      <section>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4 block">KUCC</span>
        <div className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-[0_12px_24px_rgba(13,28,45,0.06)] overflow-hidden transition-all duration-500 hover:shadow-2xl border-l-4 border-indigo-600">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-on-surface mb-1 leading-tight">KUCC – Kathmandu University Computer Club</h2>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-primary-brand flex-shrink-0 mt-0.5" />
                <span className="text-base font-semibold">Dhulikhel, Kavrepalanchok, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="w-5 h-5 text-primary-brand" />
                <span className="text-base font-semibold">kucc@ku.edu.np</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Globe className="w-5 h-5 text-primary-brand" />
                <span className="text-base font-semibold underline decoration-primary-brand/30 decoration-2 underline-offset-4">kucc.ku.edu.np</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-Sport Coordinators */}
      <section>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-brand mb-4 block">Sport Coordinators</span>
        <h3 className="text-2xl font-display font-bold mb-8">Coordinator for Each Sport</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_16px_rgba(13,28,45,0.06)] hover:shadow-xl transition-all duration-300 border border-outline-variant/10"
            >
              <div className="relative h-28 overflow-hidden bg-slate-200">
                <img
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  src={sport.img}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h4 className="absolute bottom-3 left-4 text-white font-display font-extrabold text-sm uppercase tracking-tight">{sport.name}</h4>
              </div>
              <div className="p-4">
                <p className="font-bold text-on-surface text-sm mb-3">{sport.coordinator}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-3.5 h-3.5 text-primary-brand flex-shrink-0" />
                    <span className="text-xs font-medium">{sport.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="w-3.5 h-3.5 text-primary-brand flex-shrink-0" />
                    <span className="text-xs font-medium truncate">{sport.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-outline-variant/20 pt-10">
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Follow Us</p>
          <div className="flex gap-5">
            <Facebook className="w-6 h-6 text-slate-600 hover:text-primary-brand cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-slate-600 hover:text-primary-brand cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 text-slate-600 hover:text-primary-brand cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}