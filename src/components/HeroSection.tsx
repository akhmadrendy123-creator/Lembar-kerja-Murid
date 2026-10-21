import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20 bg-gradient-to-b from-teal-950/[0.03] via-amber-50/[0.25] to-[#F6F8FA]">
      {/* Decorative Malay geometric songket motif subtle background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Ambient decorative glow orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="down">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-amber-900/10 mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-gradient-to-r from-teal-100 via-amber-50 to-teal-50 px-3.5 py-1.5 rounded-full border border-teal-300/60 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-ping"></span>
              <span className="font-cinzel tracking-wider">PETUALANGAN MATEMATIKA BUDAYA • FASE D (KELAS 8 SMP)</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs backdrop-blur-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Pulau Penyengat, Kepulauan Riau</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Bagian Kiri: Hanya Judul dan Subjudul */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Ayo Singkap Rahasia <br />
                <span className="font-serif italic font-normal text-teal-800 underline decoration-amber-400 decoration-wavy decoration-2">
                  Matematika
                </span>{' '}
                <br className="hidden sm:inline" />
                di Balik Keindahan Tari Boria!
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Pernahkan kalian melihat barisan penari Boria bergerak serempak dan anggun? Yuk, kita
                amati bagaimana langkah kaki, ayunan tongkat, dan formasi berbaris para penari ternyata
                membentuk sudut-sudut geometri yang menakjubkan!
              </p>
            </ScrollReveal>
          </div>

          {/* Bagian Kanan: Gambar Panggung Harmoni */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.25}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-1.5 shadow-2xl shadow-teal-950/20 border-2 border-amber-400/40 group">
                <div className="absolute top-3 left-3 z-20 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none"></div>
                <div className="absolute top-3 right-3 z-20 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 z-20 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none"></div>
                <div className="absolute bottom-3 right-3 z-20 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none"></div>

                <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 w-full bg-slate-900">
                  <img
                    src="/assets/aistudio/Image_2_25358578.jpeg"
                    alt="Pertunjukan Tari Boria Pulau Penyengat"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30"></div>
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
                    <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-cinzel">
                      Khas Pulau Penyengat
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      Tukang Karang &amp; Pasukan
                    </span>
                  </div>
                  <div className="absolute bottom-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-teal-950/80 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Model Geometri Interaktif
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white space-y-2 rounded-2xl mt-1.5 border border-amber-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-700 ring-2 ring-amber-300"></div>
                      <h3 className="font-bold text-slate-900 text-base font-serif-display">
                        Panggung Harmoni Tari Boria
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      Fase D SMP
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Pemimpin (Tukang Karang) melantunkan syair sambil memandu arah langkah pasukan tari
                    yang sejajar dan serong simetris sesuai kaidah garis sejajar dan transversal.
                  </p>
                  <div className="flex items-center justify-between pt-2.5 text-[11px] text-slate-500 font-medium border-t border-slate-100">
                    <span className="font-semibold text-slate-700">Kesenian Tradisional Melayu Riau</span>
                    <span className="text-teal-800 font-bold">Tanjungpinang, Kepri</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
