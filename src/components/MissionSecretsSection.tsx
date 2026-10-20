import React from 'react';
import { MathView } from './MathView';
import { ScrollReveal } from './ScrollReveal';

export const MissionSecretsSection: React.FC = () => {
  const secrets = [
    {
      letter: 'A',
      tag: 'Titik Temu',
      title: 'Titik Sudut (Verteks)',
      desc: 'Ketika dua arah hadap atau dua tongkat bertemu di satu titik O, bukaan sudut di antara dua sinar garis OA dan OP itulah yang kita ukur sebagai derajat sudut.',
      mathExpr: '\\angle AOP = \\theta',
      formula: '\\vec{OA} \\angle \\vec{OP}',
    },
    {
      letter: 'B',
      tag: 'Kaidah 180°',
      title: 'Sudut Berpelurus',
      desc: 'Dua sudut yang bersebelahan di atas sebuah garis lurus (linear pair) jika dijumlahkan hasilnya pasti tepat 180°. Keduanya saling bersuplemen.',
      mathExpr: 'm\\angle 1 + m\\angle 2 = 180^\\circ',
      formula: 'm\\angle 2 = 180^\\circ - m\\angle 1',
    },
    {
      letter: 'C',
      tag: 'Saling Silang',
      title: 'Bertolak Belakang',
      desc: 'Dua garis yang saling menyilang membentuk pasangan sudut yang saling berpunggungan (vertical angles). Kedua sudut ini terbukti pasti kongruen dan sama besar!',
      mathExpr: '\\angle 1 \\cong \\angle 3',
      formula: 'm\\angle 1 = m\\angle 3',
    },
    {
      letter: 'D',
      tag: 'Garis Sejajar',
      title: 'Garis Pemotong (Transversal)',
      desc: 'Dua saf penari sejajar (k // l) jika dipotong oleh lintasan garis transversal m akan memunculkan sudut sehadap (sama besar) dan sepihak (jumlahnya 180°).',
      mathExpr: 'k \\parallel l \\implies \\angle 1 = \\angle 5',
      formula: 'm\\angle 3 + m\\angle 5 = 180^\\circ',
    },
  ];

  return (
    <section id="section-misi" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <div className="text-[11px] font-bold text-teal-800 uppercase tracking-widest font-cinzel">
              MISI PENGETAHUAN KITA
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
              Empat Rahasia Sudut di Tari Boria
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Kalian cukup memahami 4 kunci pembuktian geometri ini untuk menjadi ahli geometri tari:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secrets.map((item, index) => (
            <ScrollReveal key={item.letter} delay={index * 0.1} direction="up">
              <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-xs hover:shadow-xl hover:border-amber-400 hover:-translate-y-1.5 transition-all flex flex-col justify-between h-full group relative overflow-hidden">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-800 to-teal-900 border border-amber-400/40 text-amber-200 font-extrabold flex items-center justify-center text-sm font-cinzel group-hover:scale-105 transition-transform shadow-2xs">
                      {item.letter}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 font-cinzel">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif-display">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>

                {/* Mathematical Formula Callout */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-3xl">
                  <div className="text-[10px] font-bold uppercase text-slate-500 font-cinzel tracking-wider">
                    Simbol Matematis:
                  </div>
                  <div className="text-xs font-bold text-teal-900 font-mono-math">
                    <MathView math={item.mathExpr} />
                  </div>
                  <div className="text-[11px] text-amber-800 font-mono-math">
                    <MathView math={item.formula} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
