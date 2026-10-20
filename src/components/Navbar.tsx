import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Compass, GraduationCap, Copy, Check, Sparkles } from 'lucide-react';

interface NavbarProps {
  onCopyLKM: () => void;
  isCopied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyLKM, isCopied }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-900/10 shadow-sm transition-all">
      {/* Scroll Progress Bar with Golden Emerald Gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-amber-400 to-teal-500 origin-left z-50 shadow-xs shadow-amber-400/40"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Royal Malay Badges */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 p-0.5 border border-amber-400/40 shadow-sm flex items-center justify-center text-amber-300 font-cinzel font-black text-sm group-hover:scale-105 transition-transform">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center leading-none">
                  Boria<span className="text-teal-700">Math</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 ml-1 inline-block animate-pulse"></span>
                </span>
                <span className="text-[9px] font-bold text-amber-700 uppercase tracking-widest font-cinzel mt-0.5">
                  Pulau Penyengat
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 border-l border-slate-200/90 pl-3">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-teal-50 to-amber-50 text-teal-900 border border-teal-200/70 shadow-2xs">
                <Sparkles className="w-3 h-3 text-amber-500" />
                LKM SERU ETNOMATEMATIKA SMP
              </span>
              <span className="hidden lg:inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100/90 text-slate-700 border border-slate-200/60">
                Fase D • Kelas VIII
              </span>
              <span className="hidden xl:inline-flex items-center text-[10px] font-medium text-slate-500">
                Petualangan Geometri &amp; Tari Boria
              </span>
            </div>
          </div>

          {/* Navigation Jump Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-600">
            {[
              { id: 'section-identitas', label: 'Identitas' },
              { id: 'section-target', label: 'Tujuan' },
              { id: 'section-budaya', label: 'Tari Boria' },
              { id: 'section-misi', label: 'Misi Sudut' },
              { id: 'section-aktivitas-1', label: 'Aktivitas 1' },
              { id: 'section-aktivitas-2', label: 'Aktivitas 2' },
              { id: 'section-aktivitas-3', label: 'Aktivitas 3' },
              { id: 'section-tantangan', label: 'Tantangan' },
              { id: 'section-refleksi', label: 'Refleksi' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-2.5 py-1.5 rounded-lg hover:text-teal-900 hover:bg-teal-50/80 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onCopyLKM}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg border border-amber-300/80 bg-amber-50/50 hover:bg-amber-100/80 text-amber-900 transition-all shadow-2xs"
              title="Salin Rangkuman Jawaban LKM"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
              <span className="font-semibold">{isCopied ? 'Tersalin!' : 'Salin LKM'}</span>
            </button>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-800 to-teal-700 text-amber-200 border border-amber-400/40 shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              <span>Kelas VIII</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
