import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowUp, ExternalLink, BookCheck, Bookmark, Sparkles } from 'lucide-react';
import { toggleGambusMusic, stopGambusMusic } from '../utils/audioSynth';
import { MathView } from './MathView';
import { ScrollReveal, MalayMotifDivider } from './ScrollReveal';

export const FooterSummary: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    const newState = toggleGambusMusic((playing) => setIsPlayingAudio(playing));
    setIsPlayingAudio(newState);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-8 bg-white border-t-2 border-amber-200/90 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <MalayMotifDivider />

        {/* Top Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          {/* Left: Quick Recap with Mathematical Equations */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal direction="left">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest font-cinzel">
                Rangkuman Cepat untuk Diingat:
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <ScrollReveal delay={0.05} direction="up">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-teal-900 font-cinzel">1. TITIK TEMU &amp; ARAH</span>
                    <span className="text-[10px] font-mono-math px-1.5 py-0.5 rounded bg-white text-teal-800 border border-slate-200">
                      <MathView math="\vec{OA} \angle \vec{OP}" />
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Gerakan penari dan ayunan tongkat menghasilkan bukaan sudut derajat yang presisi di titik verteks.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1} direction="up">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-teal-900 font-cinzel">2. BERTOLAK BELAKANG</span>
                    <span className="text-[10px] font-mono-math px-1.5 py-0.5 rounded bg-white text-teal-800 border border-slate-200">
                      <MathView math="\angle 1 \cong \angle 3" />
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Dua sudut yang saling membelakangi pada perpotongan garis silang besarnya pasti SAMA (<MathView math="m\angle 1 = m\angle 3" />).
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} direction="up">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-teal-900 font-cinzel">3. SUDUT BERPELURUS</span>
                    <span className="text-[10px] font-mono-math px-1.5 py-0.5 rounded bg-white text-teal-800 border border-slate-200">
                      <MathView math="180^\circ" />
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Sudut-sudut yang membentuk satu garis lurus jumlahnya selalu pas 180° (<MathView math="\angle 1 + \angle 2 = 180^\circ" />).
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="up">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-teal-900 font-cinzel">4. SAF SEJAJAR</span>
                    <span className="text-[10px] font-mono-math px-1.5 py-0.5 rounded bg-white text-teal-800 border border-slate-200">
                      <MathView math="k \parallel l" />
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Sudut sehadap selalu sama besar, sedangkan sudut dalam sepihak berjumlah 180° (<MathView math="\angle 3 + \angle 5 = 180^\circ" />).
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Academic Research & Curriculum */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="right">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest font-cinzel">
                Rujukan Riset &amp; Kurikulum:
              </h3>
            </ScrollReveal>

            <div className="space-y-3 text-xs">
              <ScrollReveal delay={0.1} direction="up">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 border border-amber-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950 font-cinzel">
                    <Bookmark className="w-3.5 h-3.5 text-amber-700" />
                    <span>JURNAL ILMIAH TERAKREDITASI</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-[11px]">
                    Scesa, L. A., Febrian, &amp; Rahmatina, D. (2023). &quot;Ethnomathematics in Boria dance from Penyengat Island.&quot;{' '}
                    <span className="font-bold text-teal-900">Jurnal Gantang</span>, 8(2), 207-218.
                  </p>
                  <div className="text-[10px] text-teal-800 font-mono-math font-bold">
                    DOI: 10.31629/jg.v8i2.6637
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} direction="up">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-teal-900 font-cinzel">
                    <BookCheck className="w-3.5 h-3.5 text-teal-700" />
                    <span>CAPAIAN PEMBELAJARAN NASIONAL</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Kementerian Pendidikan Dasar dan Menengah RI • Matematika Fase D SMP: Hubungan Antar-Sudut.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Royal Aesthetics */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base text-slate-900">
                Boria<span className="text-teal-700">Math</span>
              </span>
              <span className="text-xs text-amber-500 font-bold">•</span>
              <span className="text-[11px] font-bold text-teal-900 uppercase tracking-widest font-cinzel">
                ETNOMATEMATIKA SMP
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-xl">
              Membawa keindahan seni pertunjukan Tari Boria Pulau Penyengat ke dalam pembelajaran Geometri yang ramah, asyik, dan bermakna.
            </p>

            {/* Audio Synth Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleToggleAudio}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-gradient-to-r from-teal-800 to-teal-700 text-amber-200 border-amber-400 shadow-md animate-pulse'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-950 border-amber-300'
                }`}
              >
                {isPlayingAudio ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4 text-amber-700" />}
                <span>{isPlayingAudio ? 'Matikan Alunan Gambus' : 'Alunan Gambus Melayu'}</span>
                <span className="text-[10px] opacity-80 hidden sm:inline font-mono">(Acoustic Synth)</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300/80 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-98"
            >
              <ArrowUp className="w-3.5 h-3.5 text-teal-700" />
              <span>Kembali ke Atas</span>
            </button>
            <span className="text-[10px] text-slate-500 font-cinzel font-bold">
              Fase D • Kurikulum Merdeka
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
