import React from 'react';
import { Sparkles, CheckCheck, Copy, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ReflectionProps {
  q1: string;
  q2: string;
  q3: string;
  onChange: (q1: string, q2: string, q3: string) => void;
  onOpenReportModal: () => void;
  isCopied: boolean;
}

export const ReflectionSection: React.FC<ReflectionProps> = ({
  q1,
  q2,
  q3,
  onChange,
  onOpenReportModal,
  isCopied,
}) => {
  return (
    <section id="section-refleksi" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-teal-800 uppercase tracking-widest font-cinzel">
              REFLEKSI BELAJAR
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
              Apa yang Kalian Rasakan Setelah Belajar?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tuliskan kesan dan pemahaman kelompok kalian sebelum mengirimkan lembar kerja ini ke Guru.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Reflection Questions */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-6 sm:p-8 space-y-6">
            {/* Question 1 */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 leading-snug font-serif-display">
                1. Konsep sudut mana yang paling mudah kalian pahami hari ini? Mengapa?
              </label>
              <textarea
                rows={2}
                value={q1}
                onChange={(e) => onChange(e.target.value, q2, q3)}
                placeholder="Contoh: Kami paling paham sudut bertolak belakang karena nilainya selalu sama..."
                className="w-full p-4 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white text-slate-800 font-medium leading-relaxed"
              />
            </div>

            {/* Question 2 */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 leading-snug font-serif-display">
                2. Apakah gambar dan simulasi tari Boria membantu kalian membayangkan bentuk sudut?
              </label>
              <textarea
                rows={2}
                value={q2}
                onChange={(e) => onChange(q1, e.target.value, q3)}
                placeholder="Contoh: Sangat membantu, karena kami bisa melihat langsung garis langkah dan tongkat penari..."
                className="w-full p-4 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white text-slate-800 font-medium leading-relaxed"
              />
            </div>

            {/* Question 3 */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 leading-snug font-serif-display">
                3. Apa hal paling menarik tentang budaya Melayu yang kalian temukan di pelajaran ini?
              </label>
              <textarea
                rows={2}
                value={q3}
                onChange={(e) => onChange(q1, q2, e.target.value)}
                placeholder="Contoh: Ternyata nenek moyang kita sudah menerapkan matematika yang sangat rapi di dalam tarian adat..."
                className="w-full p-4 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white text-slate-800 font-medium leading-relaxed"
              />
            </div>

            {/* Green Final Submission Callout Banner with Golden Trim */}
            <div className="pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-teal-50 via-emerald-50/60 to-teal-50 border-2 border-teal-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-900 text-amber-200 flex items-center justify-center shrink-0 border border-amber-400/40 shadow-xs">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-teal-950 font-serif-display">
                      Semua Jawaban Siap Disalin!
                    </div>
                    <p className="text-xs text-teal-800 mt-0.5">
                      Klik tombol di samping untuk menyalin seluruh rangkuman jawaban LKM kelompokmu dalam teks rapi untuk dikirim ke guru.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenReportModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-800 to-teal-700 hover:from-teal-900 hover:to-teal-800 text-amber-200 font-bold text-xs transition-all shadow-md shadow-teal-900/20 active:scale-98 shrink-0 cursor-pointer border border-amber-400/30"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4 text-amber-300" />}
                  <span>Salin Seluruh Jawaban LKM</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
