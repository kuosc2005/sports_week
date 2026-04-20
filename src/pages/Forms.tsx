import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ArrowLeft, CheckCircle, Upload, X, AlertCircle, ChevronRight } from 'lucide-react';

const SPORT_CONFIG: Record<string, {
  name: string;
  color: string;
  bgColor: string;
  desc: string;
  teamSize: string;
  icon: string;
  fields: Array<{ id: string; label: string; type: string; required: boolean; options?: string[] }>;
}> = {
  football: {
    name: 'Football',
    color: 'bg-green-500',
    bgColor: 'bg-green-50 border-green-200',
    desc: '11v11 Main Tournament',
    teamSize: '11 players',
    icon: '⚽',
    fields: [
      { id: 'teamName', label: 'Team Name', type: 'text', required: true },
      { id: 'captainName', label: "Captain's Full Name", type: 'text', required: true },
      { id: 'captainEmail', label: "Captain's Email", type: 'email', required: true },
      { id: 'captainPhone', label: "Captain's Phone", type: 'tel', required: true },
      { id: 'playerCount', label: 'Number of Players (min 11, max 16)', type: 'number', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'notes', label: 'Additional Notes', type: 'textarea', required: false },
    ],
  },
  basketball: {
    name: 'Basketball',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50 border-orange-200',
    desc: '5v5 Slam & Jam',
    teamSize: '5 players',
    icon: '🏀',
    fields: [
      { id: 'teamName', label: 'Team Name', type: 'text', required: true },
      { id: 'captainName', label: "Captain's Full Name", type: 'text', required: true },
      { id: 'captainEmail', label: "Captain's Email", type: 'email', required: true },
      { id: 'captainPhone', label: "Captain's Phone", type: 'tel', required: true },
      { id: 'playerCount', label: 'Number of Players (min 5, max 8)', type: 'number', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'notes', label: 'Additional Notes', type: 'textarea', required: false },
    ],
  },
  cricket: {
    name: 'Cricket',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50 border-blue-200',
    desc: 'T10 Series Format',
    teamSize: '11 players',
    icon: '🏏',
    fields: [
      { id: 'teamName', label: 'Team Name', type: 'text', required: true },
      { id: 'captainName', label: "Captain's Full Name", type: 'text', required: true },
      { id: 'captainEmail', label: "Captain's Email", type: 'email', required: true },
      { id: 'captainPhone', label: "Captain's Phone", type: 'tel', required: true },
      { id: 'playerCount', label: 'Number of Players (min 11, max 15)', type: 'number', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'notes', label: 'Additional Notes', type: 'textarea', required: false },
    ],
  },
  'table-tennis': {
    name: 'Table Tennis',
    color: 'bg-yellow-500',
    bgColor: 'bg-yellow-50 border-yellow-200',
    desc: 'Fast-Paced Singles',
    teamSize: 'Individual',
    icon: '🏓',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'email', required: true },
      { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { id: 'studentId', label: 'Student ID', type: 'text', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'category', label: 'Category', type: 'select', required: true, options: ['Singles', 'Doubles'] },
      { id: 'partnerName', label: 'Partner Name (if Doubles)', type: 'text', required: false },
    ],
  },
  badminton: {
    name: 'Badminton',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50 border-purple-200',
    desc: 'Double Elimination',
    teamSize: 'Individual / Pair',
    icon: '🏸',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'email', required: true },
      { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { id: 'studentId', label: 'Student ID', type: 'text', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'category', label: 'Category', type: 'select', required: true, options: ['Singles', 'Doubles', 'Mixed Doubles'] },
      { id: 'partnerName', label: 'Partner Name (if Doubles)', type: 'text', required: false },
    ],
  },
  chess: {
    name: 'Chess',
    color: 'bg-slate-700',
    bgColor: 'bg-slate-50 border-slate-200',
    desc: 'Rapid Format',
    teamSize: 'Individual',
    icon: '♟️',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'email', required: true },
      { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { id: 'studentId', label: 'Student ID', type: 'text', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'chessRating', label: 'FIDE/Online Rating (optional)', type: 'text', required: false },
    ],
  },
  volleyball: {
    name: 'Volleyball',
    color: 'bg-red-500',
    bgColor: 'bg-red-50 border-red-200',
    desc: '6v6 Standard',
    teamSize: '6 players',
    icon: '🏐',
    fields: [
      { id: 'teamName', label: 'Team Name', type: 'text', required: true },
      { id: 'captainName', label: "Captain's Full Name", type: 'text', required: true },
      { id: 'captainEmail', label: "Captain's Email", type: 'email', required: true },
      { id: 'captainPhone', label: "Captain's Phone", type: 'tel', required: true },
      { id: 'playerCount', label: 'Number of Players (min 6, max 10)', type: 'number', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'notes', label: 'Additional Notes', type: 'textarea', required: false },
    ],
  },
  futsal: {
    name: 'Futsal',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50 border-teal-200',
    desc: '5v5 Indoor',
    teamSize: '5 players',
    icon: '🥅',
    fields: [
      { id: 'teamName', label: 'Team Name', type: 'text', required: true },
      { id: 'captainName', label: "Captain's Full Name", type: 'text', required: true },
      { id: 'captainEmail', label: "Captain's Email", type: 'email', required: true },
      { id: 'captainPhone', label: "Captain's Phone", type: 'tel', required: true },
      { id: 'playerCount', label: 'Number of Players (min 5, max 8)', type: 'number', required: true },
      { id: 'stream', label: 'Stream', type: 'select', required: true, options: ['Computer Science', 'Computer Engineering', 'BIT', 'Health Informatics'] },
      { id: 'semester', label: 'Semester', type: 'select', required: true, options: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'] },
      { id: 'notes', label: 'Additional Notes', type: 'textarea', required: false },
    ],
  },
};

const SPORTS_LIST = [
  { id: 'football', name: 'Football', desc: '11v11 Main Tournament', color: 'bg-green-500' },
  { id: 'basketball', name: 'Basketball', desc: '5v5 Slam & Jam', color: 'bg-orange-500' },
  { id: 'cricket', name: 'Cricket', desc: 'T10 Series Format', color: 'bg-blue-500' },
  { id: 'table-tennis', name: 'Table Tennis', desc: 'Fast-Paced Singles', color: 'bg-yellow-500' },
  { id: 'badminton', name: 'Badminton', desc: 'Double Elimination', color: 'bg-purple-500' },
  { id: 'chess', name: 'Chess', desc: 'Rapid Format', color: 'bg-slate-700' },
  { id: 'volleyball', name: 'Volleyball', desc: '6v6 Standard', color: 'bg-red-500' },
  { id: 'futsal', name: 'Futsal', desc: '5v5 Indoor', color: 'bg-teal-500' },
];

/* ─── Sub-form Component ─── */
const SportForm = ({ sportId, onBack }: { sportId: string; onBack: () => void }) => {
  const config = SPORT_CONFIG[sportId];
  const [step, setStep] = useState<'form' | 'payment' | 'done'>('form');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [paymentPreview, setPaymentPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!config) return null;

  const handleChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => { const n = { ...prev }; delete n[id]; return n; });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    config.fields.forEach(f => {
      if (f.required && !formData[f.id]?.trim()) {
        newErrors[f.id] = `${f.label} is required`;
      }
      if (f.type === 'email' && formData[f.id] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[f.id])) {
        newErrors[f.id] = 'Enter a valid email address';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = () => {
    if (validateForm()) setStep('payment');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setPaymentPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handlePaymentSubmit = () => {
    if (!paymentFile) {
      alert('Please upload your payment screenshot before submitting.');
      return;
    }
    setStep('done');
  };

  if (step === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-24 space-y-6"
      >
        <div className={`w-20 h-20 ${config.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="font-display text-4xl font-black tracking-tight text-on-surface">Registered!</h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          Your registration for <strong>{config.name}</strong> has been submitted successfully.
          Our team will verify your payment and confirm your slot within 24 hours.
        </p>
        <div className="bg-primary-brand/5 border border-primary-brand/20 rounded-2xl p-5 text-left space-y-2">
          <p className="text-xs font-bold text-primary-brand uppercase tracking-widest">What happens next?</p>
          <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
            <li>Payment screenshot reviewed by coordinators</li>
            <li>Confirmation sent to your email within 24 hours</li>
            <li>Team/player details added to the draw</li>
          </ul>
        </div>
        <button
          onClick={onBack}
          className="kinetic-gradient px-8 py-3 rounded-full text-white font-bold text-sm shadow-xl shadow-primary-brand/30 hover:scale-105 active:scale-95 transition-all"
        >
          Register for Another Sport
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back + Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-primary-brand font-semibold text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Forms
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-xl ${config.color} flex items-center justify-center flex-shrink-0 shadow-md text-2xl`}>
          {config.icon}
        </div>
        <div>
          <h1 className="font-display text-4xl lg:text-5xl font-black tracking-tighter text-on-surface">
            {config.name} <span className="text-primary-brand italic">Registration</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">{config.desc} · {config.teamSize}</p>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-3">
        {['Registration Details', 'Payment Verification'].map((label, i) => {
          const done = (i === 0 && step === 'payment') || step === 'done';
          const active = (i === 0 && step === 'form') || (i === 1 && step === 'payment');
          return (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className={`flex-1 h-[2px] w-8 rounded ${step === 'payment' ? 'bg-primary-brand' : 'bg-slate-200'}`}></div>}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                active ? 'bg-primary-brand text-white shadow-lg shadow-primary-brand/30' :
                done ? 'bg-green-500 text-white' :
                'bg-slate-100 text-slate-400'
              }`}>
                {done ? <CheckCircle className="w-3 h-3" /> : <span>{i + 1}</span>}
                {label}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {step === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-3xl border border-outline-variant/10 shadow-sm p-8 lg:p-10"
          >
            <h2 className="font-display font-black text-xl text-on-surface mb-6">Step 1: Registration Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {config.fields.map(field => (
                <div key={field.id} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-semibold text-on-surface mb-1.5">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      value={formData[field.id] || ''}
                      onChange={e => handleChange(field.id, e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium bg-white transition-all outline-none focus:ring-2 focus:ring-primary-brand/30 focus:border-primary-brand ${
                        errors[field.id] ? 'border-red-400 bg-red-50' : 'border-outline-variant/20 hover:border-primary-brand/40'
                      }`}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      rows={3}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      value={formData[field.id] || ''}
                      onChange={e => handleChange(field.id, e.target.value)}
                      className="w-full border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium bg-white transition-all outline-none focus:ring-2 focus:ring-primary-brand/30 focus:border-primary-brand hover:border-primary-brand/40 resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      value={formData[field.id] || ''}
                      onChange={e => handleChange(field.id, e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-medium bg-white transition-all outline-none focus:ring-2 focus:ring-primary-brand/30 focus:border-primary-brand ${
                        errors[field.id] ? 'border-red-400 bg-red-50' : 'border-outline-variant/20 hover:border-primary-brand/40'
                      }`}
                    />
                  )}
                  {errors[field.id] && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleFormSubmit}
                className="kinetic-gradient flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-sm shadow-xl shadow-primary-brand/30 hover:scale-105 active:scale-95 transition-all"
              >
                Next: Payment <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 'payment' && (
          <motion.div
            key="payment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Payment instructions */}
            <div className="bg-white rounded-3xl border border-outline-variant/10 shadow-sm p-8 lg:p-10 space-y-6">
              <h2 className="font-display font-black text-xl text-on-surface">Step 2: Payment Verification</h2>
              <div className="bg-primary-brand/5 border border-primary-brand/20 rounded-2xl p-6 space-y-3">
                <p className="text-sm font-bold text-primary-brand uppercase tracking-widest">Payment Instructions</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Please transfer the registration fee to the following account and upload a screenshot of your payment confirmation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-xl p-4 border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bank</p>
                    <p className="font-bold text-sm">NIC Asia Bank</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Name</p>
                    <p className="font-bold text-sm">KUCC Events 2026</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Number</p>
                    <p className="font-bold text-sm font-mono">XXXX-XXXXX-XXX</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Registration Fee</p>
                    <p className="font-bold text-sm text-primary-brand">NPR 500 per team/player</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 italic">eSewa / Khalti / FonePay QR also accepted. Contact coordinator for QR code.</p>
              </div>

              {/* Upload area */}
              <div>
                <p className="text-sm font-semibold text-on-surface mb-3">Upload Payment Screenshot <span className="text-red-500">*</span></p>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all hover:border-primary-brand/50 hover:bg-primary-brand/5 ${
                    paymentFile ? 'border-green-400 bg-green-50' : 'border-outline-variant/20'
                  }`}
                >
                  {paymentPreview ? (
                    <div className="relative inline-block">
                      <img src={paymentPreview} alt="Payment screenshot" className="max-h-48 rounded-xl mx-auto shadow-md" />
                      <button
                        onClick={(e) => { e.stopPropagation(); setPaymentFile(null); setPaymentPreview(null); }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md"
                      >
                        <X className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                        <Upload className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-on-surface">Click to upload payment screenshot</p>
                        <p className="text-xs text-slate-400 mt-1">PNG, JPG, JPEG — max 5MB</p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep('form')}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary-brand font-semibold text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handlePaymentSubmit}
                  className="kinetic-gradient flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-sm shadow-xl shadow-primary-brand/30 hover:scale-105 active:scale-95 transition-all"
                >
                  Submit Registration <CheckCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Forms List View ─── */
export const FormsView = () => {
  const [activeSport, setActiveSport] = useState<string | null>(null);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <AnimatePresence mode="wait">
        {activeSport ? (
          <motion.div
            key={activeSport}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <SportForm sportId={activeSport} onBack={() => setActiveSport(null)} />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            <section>
              <div className="absolute -left-8 top-0 w-24 h-1 bg-primary-brand hidden lg:block"></div>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tighter text-on-surface mb-2">
                Registration <span className="text-primary-brand italic">Forms</span>
              </h1>
              <p className="text-slate-500 font-medium mt-3">
                Select your game below to fill in the registration form and join KUCC Cup 2026.
              </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
              {SPORTS_LIST.map((sport, i) => (
                <motion.button
                  key={sport.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  onClick={() => setActiveSport(sport.id)}
                  className="group bg-white rounded-2xl shadow-sm border border-outline-variant/10 p-6 flex items-center gap-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary-brand/20 text-left w-full"
                >
                  <div className={`w-14 h-14 rounded-xl ${sport.color} flex items-center justify-center flex-shrink-0 text-2xl`}>
                    {SPORT_CONFIG[sport.id]?.icon ?? <FileText className="w-7 h-7 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-black text-xl text-on-surface tracking-tight">{sport.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">{sport.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-primary-brand font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Register <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="bg-primary-brand/5 border border-primary-brand/20 rounded-2xl p-8 mt-8">
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                <span className="font-bold text-primary-brand">Note:</span> Registration closes on April 28, 2026.
                Make sure to select the correct sport and complete payment verification. For any issues, contact the event coordinator.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};