import React from 'react';
import { Target, CheckCircle2, ListOrdered, Sparkles, BookOpen } from 'lucide-react';
import { MathView } from './MathView';
import { ScrollReveal, MalayMotifDivider } from './ScrollReveal';

export const TargetBelajarSection: React.FC = () => {
  const learningGoals = [
    {
      num: '1',
      title: 'Mengenal Budaya Boria',
      desc: 'Melihat bagaimana ketukan musik dan aba-aba tari Boria menciptakan susunan sudut teratur.',
      mathTag: '\\text{Hitungan } 1-8',
    },
    {
      num: '2',
      title: 'Menentukan Titik Sudut',
      desc: 'Menemukan titik pangkal (verteks O) dan dua garis sinar arah hadap penari di atas panggung.',
      mathTag: '\\angle AOP = \\theta',
    },
    {
      num: '3',
      title: 'Garis Saling Silang',
      desc: 'Membuktikan bahwa sudut bertolak belakang pasti sama besar, dan sudut lurus bernilai 180°.',
      mathTag: '\\angle 1 \\cong \\angle 3',
    },
    {
      num: '4',
      title: 'Saf Sejajar & Garis Potong',
      desc: 'Memahami pasangan sudut sehadap, berseberangan, dan sepihak pada barisan penari.',
      mathTag: 'k \\parallel l \\cap m',
    },
    {
      num: '5',
      title: 'Menghitung Besar Sudut',
      desc: 'Mencari nilai derajat sudut yang belum diketahui dengan perhitungan aljabar geometri yang tepat.',
      mathTag: '180^\\circ - x',
    },
    {
      num: '6',
      title: 'Merancang Formasi Panggung',
      desc: 'Membuat pola lantai kreasi kelompok kalian sendiri dengan menerapkan kaidah simetri sudut.',
      mathTag: '\\Delta \\text{ V-Shape}',
    },
  ];

  const guides = [
    'Tulis nama anggota kelompok di kotak Identitas.',
    'Baca kisah Tari Boria dan amati foto penari berbusana Melayu.',
    'Geser tuas sudut di Aktivitas 1 dan amati perubahannya.',
    'Tebak dan hitung sudut di Aktivitas 2, lalu tekan tombol periksa.',
    'Pilih pola panggung di Aktivitas 3 dan buat kreasi kelompokmu.',
    'Pecahkan tantangan seru koreografer dan salin rangkuman untuk gurumu!',
  ];

  return (
    <section id="section-target" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <MalayMotifDivider />

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold text-teal-800 uppercase tracking-widest mb-1 font-cinzel">
                TARGET BELAJAR MURID KELAS 8
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
                Apa yang Akan Kita Pelajari Hari Ini?
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Tenang, belajarnya seru dan tidak rumit! Melalui gerakan tari Boria, kalian akan mudah memahami sifat-sifat sudut geometri berikut:
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-teal-50 to-amber-50 text-teal-900 border border-teal-300 shadow-2xs font-cinzel">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                Kurikulum Merdeka • Geometri Sudut
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Goals Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningGoals.map((item, index) => (
            <ScrollReveal key={item.num} delay={index * 0.08} direction="up">
              <div className="p-5 rounded-3xl bg-white border border-amber-200/70 shadow-xs hover:shadow-lg hover:border-amber-400 hover:-translate-y-1 transition-all flex flex-col justify-between h-full group">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-800 to-teal-900 text-amber-200 font-extrabold flex items-center justify-center shrink-0 text-sm shadow-xs border border-amber-400/30 group-hover:scale-105 transition-transform font-cinzel">
                    {item.num}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 font-serif-display">{item.title}</h3>
                      <span className="text-[10px] font-mono-math font-bold px-1.5 py-0.5 rounded bg-slate-100 text-teal-800 border border-slate-200">
                        <MathView math={item.mathTag} />
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Panduan Belajar Santai & Seru with Gold Foil Accent */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-amber-50/80 border-2 border-amber-300/80 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-amber-400/80 text-amber-950 shadow-2xs">
                <ListOrdered className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif-display">
                Panduan Belajar Santai &amp; Seru
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Ikuti alur belajar berikut bersama teman sekelompokmu secara berurutan:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {guides.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/95 border border-amber-200 shadow-2xs text-xs text-slate-700 hover:border-amber-400 transition-colors"
                >
                  <span className="font-extrabold text-amber-800 shrink-0 font-cinzel text-xs">{idx + 1}.</span>
                  <span className="leading-relaxed font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
