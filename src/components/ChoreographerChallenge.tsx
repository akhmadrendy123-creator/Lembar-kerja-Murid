import React from 'react';
import { AlertTriangle, Send, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { validateChallenge } from '../utils/mathGeometry';
import { MathView } from './MathView';
import { ScrollReveal } from './ScrollReveal';

interface ChoreographerChallengeProps {
  baseAngle: number; // 55
  inputSepihak: string;
  reasoning: string;
  isChecked: boolean;
  isCorrect: boolean;
  onInputChange: (inputSepihak: string, reasoning: string) => void;
  onSubmit: (isCorrect: boolean) => void;
}

export const ChoreographerChallenge: React.FC<ChoreographerChallengeProps> = ({
  baseAngle,
  inputSepihak,
  reasoning,
  isChecked,
  isCorrect,
  onInputChange,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateChallenge(baseAngle, inputSepihak);
    onSubmit(res.isCorrect);
  };

  return (
    <section id="section-tantangan" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 text-white font-extrabold flex items-center justify-center shrink-0 text-base shadow-sm font-cinzel">
              !
            </div>
            <div>
              <div className="text-[11px] font-bold text-amber-900 uppercase tracking-widest font-cinzel">
                TANTANGAN KASUS LAPANGAN
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
                Bantu Sang Penata Tari Boria!
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Case Story Banner with Golden Songket Borders and Mathematical Symbols */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50/60 to-amber-50 border-2 border-amber-300 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-amber-200/90 text-amber-950 shrink-0 mt-0.5 shadow-2xs">
                <AlertTriangle className="w-5 h-5 text-amber-900" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="text-xs font-bold text-amber-950 uppercase tracking-widest font-cinzel flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  CERITA KASUS PEMBUKTIAN GEOMETRI:
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  &quot;Di Balai Adat Pulau Penyengat, seorang penata tari meminta saf kedua membentuk
                  posisi terhadap lintasan jalan dengan <strong className="text-amber-950 font-bold">sudut sehadap sebesar <MathView math={`\\alpha = ${baseAngle}^\\circ`} /></strong>.
                  Agar formasi panggung tetap seimbang dan rapi, hitunglah berapa <strong className="text-amber-950 font-bold">besar sudut dalam sepihaknya (<MathView math="\\beta" />)</strong> dan
                  jelaskan bagaimana penari bisa menjaganya bersama-sama!&quot;
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs text-amber-900 font-mono-math">
                  <span className="font-bold">Model Geometri:</span>
                  <span className="px-2 py-0.5 rounded bg-white/80 border border-amber-300">
                    <MathView math={`\\alpha + \\beta = 180^\\circ \\implies \\beta = 180^\\circ - ${baseAngle}^\\circ`} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Answer Form */}
        <ScrollReveal direction="up" delay={0.2}>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Angle Input */}
              <div className="md:col-span-5 space-y-2">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider font-cinzel">
                  Besar Sudut Dalam Sepihak (<MathView math="\beta" />) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputSepihak}
                    onChange={(e) => onInputChange(e.target.value, reasoning)}
                    placeholder="Ketik angka hasil hitunganmu..."
                    className="w-full px-4 py-3.5 text-base bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-900 font-bold font-mono"
                    required
                  />
                  <span className="absolute right-4 top-3.5 text-sm font-bold text-slate-400 font-mono">°</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Kaidah: Dua sudut dalam sepihak saling bersuplemen (<MathView math="\alpha + \beta = 180^\circ" />).
                </p>
              </div>

              {/* Explanation & Advice */}
              <div className="md:col-span-7 space-y-2">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider font-cinzel">
                  Cara Menghitung &amp; Saran untuk Penari <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={reasoning}
                  onChange={(e) => onInputChange(inputSepihak, e.target.value)}
                  placeholder="Tuliskan jalan hitungannya (180° - 55°) dan saran kalian agar penari tetap kompak..."
                  className="w-full p-4 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-800 font-medium leading-relaxed"
                  required
                />
              </div>
            </div>

            {/* Validation Feedback */}
            {isChecked && (
              <div
                className={`p-4 rounded-2xl border text-xs ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Luar Biasa! Jawaban Kalian Tepat Sekali (β = {180 - baseAngle}°).</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Hasil Hitungan Belum Sesuai Teorema Sudut Sepihak.</span>
                    </>
                  )}
                </div>
                <p className="text-[11px] leading-relaxed">
                  {isCorrect
                    ? `Karena dua sudut dalam sepihak pada dua garis sejajar berjumlah 180°, maka β = 180° - ${baseAngle}° = ${180 - baseAngle}°. Saran kelompok kalian sangat bermakna untuk kekompakan saf penari Boria!`
                    : `Rumus matematis: Sudut Sepihak = 180° - Sudut Sehadap (${baseAngle}°). Silakan kurangi 180 dengan ${baseAngle} dan coba kembali!`}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold text-xs transition-all shadow-md shadow-amber-900/20 active:scale-98 cursor-pointer border border-amber-500/40"
              >
                <Send className="w-4 h-4 text-amber-200" />
                <span>Kirim Jawaban Tantangan</span>
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
