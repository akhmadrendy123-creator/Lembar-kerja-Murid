import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, RotateCcw, AlertCircle, Info, Sparkles } from 'lucide-react';
import { validateActivity2 } from '../utils/mathGeometry';
import { MathView } from './MathView';
import { ScrollReveal } from './ScrollReveal';

interface Activity2Props {
  baseAngle: number; // 72
  inputBertolakBelakang: string;
  inputBerpelurus: string;
  isChecked: boolean;
  isCorrect: boolean;
  onInputChange: (bertolakBelakang: string, berpelurus: string) => void;
  onCheck: (isCorrect: boolean) => void;
  onReset: () => void;
}

export const Activity2CrossSticks: React.FC<Activity2Props> = ({
  baseAngle,
  inputBertolakBelakang,
  inputBerpelurus,
  isChecked,
  isCorrect,
  onInputChange,
  onCheck,
  onReset,
}) => {
  const [showFormulaModal, setShowFormulaModal] = useState(false);
  const [hoveredAngle, setHoveredAngle] = useState<number | null>(null);

  const handleValidate = () => {
    const res = validateActivity2(baseAngle, inputBertolakBelakang, inputBerpelurus);
    onCheck(res.allCorrect);
  };

  const validationResult = validateActivity2(baseAngle, inputBertolakBelakang, inputBerpelurus);

  return (
    <section id="section-aktivitas-2" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-900 border border-amber-400/40 text-amber-200 font-extrabold flex items-center justify-center shrink-0 text-base shadow-sm font-cinzel">
              2
            </div>
            <div>
              <div className="text-[11px] font-bold text-teal-800 uppercase tracking-widest font-cinzel">
                AKTIVITAS PRAKTIK 2
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
                Ketika Tongkat Penari Boria Bersilangan
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Yuk, kita buktikan teorema sudut bertolak belakang (<MathView math="\angle 1 \cong \angle 3" />) dan postulat sudut berpelurus (<MathView math="m\angle 1 + m\angle 2 = 180^\circ" />)!
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Visual Cross Model */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-5 sm:p-6 space-y-5">
                <div className="space-y-1 pb-3 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-amber-200"></span>
                      <h3 className="text-sm font-bold text-slate-900 font-serif-display">
                        Model Geometri: Tongkat Silang
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono-math font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      <MathView math="\overleftrightarrow{AB} \cap \overleftrightarrow{CD} = \{O\}" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Arahkan kursor pada sudut untuk melihat pasangan sudut bertolak belakang dan berpelurus:
                  </p>
                </div>

                {/* SVG Cross Sticks Illustration with Interactive Highlighting */}
                <div className="relative w-full h-64 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-amber-200/70 p-2 flex items-center justify-center shadow-inner">
                  <svg viewBox="0 0 360 210" className="w-full h-full select-none">
                    {/* Line 1: Tongkat AB */}
                    <line
                      x1="40"
                      y1="165"
                      x2="320"
                      y2="45"
                      stroke="#0D9488"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    {/* Line 2: Tongkat CD */}
                    <line
                      x1="40"
                      y1="45"
                      x2="320"
                      y2="165"
                      stroke="#0284C7"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    {/* Vertex O */}
                    <circle cx="180" cy="105" r="7" fill="#BE123C" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="180" y="128" textAnchor="middle" className="text-xs font-bold fill-slate-800 font-mono-math">
                      Titik O
                    </text>

                    {/* Labels A, B, C, D */}
                    <text x="24" y="175" className="text-xs font-extrabold fill-teal-800 font-mono-math">A</text>
                    <text x="330" y="44" className="text-xs font-extrabold fill-teal-800 font-mono-math">B</text>
                    <text x="24" y="44" className="text-xs font-extrabold fill-sky-800 font-mono-math">C</text>
                    <text x="330" y="175" className="text-xs font-extrabold fill-sky-800 font-mono-math">D</text>

                    {/* Interactive Angle 3 (Left: 65°) */}
                    <g
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredAngle(3)}
                      onMouseLeave={() => setHoveredAngle(null)}
                    >
                      <path d="M 145 105 A 35 35 0 0 1 155 82" fill="none" stroke="#BE123C" strokeWidth="2.5" />
                      <rect
                        x="75"
                        y="94"
                        width="70"
                        height="22"
                        rx="5"
                        fill={hoveredAngle === 3 || hoveredAngle === 1 ? '#F43F5E' : '#FFE4E6'}
                        stroke="#BE123C"
                        strokeWidth="1"
                      />
                      <text
                        x="110"
                        y="109"
                        textAnchor="middle"
                        className={`text-[11px] font-extrabold font-mono-math ${
                          hoveredAngle === 3 || hoveredAngle === 1 ? 'fill-white' : 'fill-rose-900'
                        }`}
                      >
                        ∠3 = 65°
                      </text>
                    </g>

                    {/* Interactive Angle 1 (Right: 65°) */}
                    <g
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredAngle(1)}
                      onMouseLeave={() => setHoveredAngle(null)}
                    >
                      <path d="M 215 105 A 35 35 0 0 1 205 128" fill="none" stroke="#BE123C" strokeWidth="2.5" />
                      <rect
                        x="215"
                        y="94"
                        width="70"
                        height="22"
                        rx="5"
                        fill={hoveredAngle === 1 || hoveredAngle === 3 ? '#F43F5E' : '#FFE4E6'}
                        stroke="#BE123C"
                        strokeWidth="1"
                      />
                      <text
                        x="250"
                        y="109"
                        textAnchor="middle"
                        className={`text-[11px] font-extrabold font-mono-math ${
                          hoveredAngle === 1 || hoveredAngle === 3 ? 'fill-white' : 'fill-rose-900'
                        }`}
                      >
                        ∠1 = 65°
                      </text>
                    </g>

                    {/* Interactive Angle 2 (Top: 115°) */}
                    <g
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredAngle(2)}
                      onMouseLeave={() => setHoveredAngle(null)}
                    >
                      <path d="M 155 82 A 35 35 0 0 1 205 82" fill="none" stroke="#0284C7" strokeWidth="2.5" />
                      <rect
                        x="145"
                        y="35"
                        width="70"
                        height="22"
                        rx="5"
                        fill={hoveredAngle === 2 || hoveredAngle === 4 ? '#0284C7' : '#E0F2FE'}
                        stroke="#0369A1"
                        strokeWidth="1"
                      />
                      <text
                        x="180"
                        y="50"
                        textAnchor="middle"
                        className={`text-[11px] font-extrabold font-mono-math ${
                          hoveredAngle === 2 || hoveredAngle === 4 ? 'fill-white' : 'fill-sky-950'
                        }`}
                      >
                        ∠2 = 115°
                      </text>
                    </g>

                    {/* Interactive Angle 4 (Bottom: 115°) */}
                    <g
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredAngle(4)}
                      onMouseLeave={() => setHoveredAngle(null)}
                    >
                      <path d="M 155 128 A 35 35 0 0 0 205 128" fill="none" stroke="#0284C7" strokeWidth="2.5" />
                      <rect
                        x="145"
                        y="155"
                        width="70"
                        height="22"
                        rx="5"
                        fill={hoveredAngle === 4 || hoveredAngle === 2 ? '#0284C7' : '#E0F2FE'}
                        stroke="#0369A1"
                        strokeWidth="1"
                      />
                      <text
                        x="180"
                        y="170"
                        textAnchor="middle"
                        className={`text-[11px] font-extrabold font-mono-math ${
                          hoveredAngle === 4 || hoveredAngle === 2 ? 'fill-white' : 'fill-sky-950'
                        }`}
                      >
                        ∠4 = 115°
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Mathematical Proof Cards */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200/80 space-y-1">
                    <div className="font-bold text-amber-950 flex items-center justify-between">
                      <span className="font-serif-display">Sudut Bertolak Belakang (Kongruen):</span>
                      <span className="font-mono-math text-amber-900 font-bold">
                        <MathView math="\angle 1 \cong \angle 3 \iff m\angle 1 = m\angle 3" />
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Karena saling berpunggungan di titik <MathView math="O" />, maka <MathView math="m\angle 3 = m\angle 1 = 65^\circ" /> dan <MathView math="m\angle 4 = m\angle 2 = 115^\circ" />.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50/50 border border-teal-200/80 space-y-1">
                    <div className="font-bold text-teal-950 flex items-center justify-between">
                      <span className="font-serif-display">Sudut Berpelurus (Pasangan Linear):</span>
                      <span className="font-mono-math text-teal-900 font-bold">
                        <MathView math="m\angle 1 + m\angle 2 = 180^\circ" />
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Membentuk garis lurus <MathView math="\overleftrightarrow{AB}" />, maka <MathView math="m\angle 2 = 180^\circ - 65^\circ = 115^\circ" />.
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-500 italic">
                    * Kuncinya: Ingat angka keramat 180° untuk setiap pasangan sudut pada satu garis lurus!
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Quiz Challenge */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-widest font-cinzel">
                    AYO COBA TEBAK &amp; HITUNG
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 font-cinzel shadow-2xs">
                    Kuis Interaktif
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-serif-display">
                  Tantangan Sudut Tongkat Silang
                </h3>

                {/* Prompt Box with Mathematical Typography */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/40 to-teal-50/80 border border-teal-200 flex items-start gap-3 text-xs text-teal-950">
                  <div className="p-1.5 rounded-lg bg-teal-800 text-amber-200 shrink-0 mt-0.5 border border-amber-400/30">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <p className="leading-relaxed font-normal">
                    Dua penari Boria menyilangkan tongkat mereka di udara. Terbentuk sudut pertama sebesar{' '}
                    <strong className="text-teal-950 font-mono-math font-bold">
                      <MathView math={`m\\angle A = ${baseAngle}^\\circ`} />
                    </strong>. Berapakah besar sudut bertolak belakang di seberangnya (<MathView math="m\angle C" />) dan sudut berpelurus di sampingnya (<MathView math="m\angle B" />)?
                  </p>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-cinzel">
                      Sudut Bertolak Belakang (<MathView math="\angle C" />) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inputBertolakBelakang}
                        onChange={(e) => onInputChange(e.target.value, inputBerpelurus)}
                        placeholder="Masukkan angka..."
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white text-slate-800 font-bold font-mono"
                      />
                      <span className="absolute right-3.5 top-3 text-xs font-bold text-slate-400">°</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 font-medium">
                      Petunjuk: <MathView math={`m\\angle C = m\\angle A = ${baseAngle}^\\circ`} />
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 font-cinzel">
                      Sudut Berpelurus (<MathView math="\angle B" />) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inputBerpelurus}
                        onChange={(e) => onInputChange(inputBertolakBelakang, e.target.value)}
                        placeholder="Masukkan angka..."
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white text-slate-800 font-bold font-mono"
                      />
                      <span className="absolute right-3.5 top-3 text-xs font-bold text-slate-400">°</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 font-medium">
                      Petunjuk: <MathView math={`180^\\circ - ${baseAngle}^\\circ`} />
                    </p>
                  </div>
                </div>

                {/* Cheat Sheet Toggle */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowFormulaModal(!showFormulaModal)}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-950 font-bold hover:underline cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Bingung? Klik di sini untuk melihat contekan rumus lengkap!</span>
                  </button>

                  {showFormulaModal && (
                    <div className="mt-2.5 p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-xs text-amber-950 space-y-1.5">
                      <div className="font-bold flex items-center gap-1.5 font-cinzel text-amber-900">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Kaidah Pembuktian Geometri Bersilangan:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                        <li>
                          <strong>Sudut Bertolak Belakang:</strong> <MathView math={`m\\angle C = m\\angle A = ${baseAngle}^\\circ`} /> (karena pasangan bertolak belakang bernilai kongruen).
                        </li>
                        <li>
                          <strong>Sudut Berpelurus:</strong> <MathView math={`m\\angle B = 180^\\circ - m\\angle A = 180^\\circ - ${baseAngle}^\\circ = ${180 - baseAngle}^\\circ`} />.
                        </li>
                      </ul>
                    </div>
                  )}
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
                          <span>Jawaban Kalian 100% Tepat!</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-rose-600" />
                          <span>Ada Nilai Derajat yang Belum Tepat, Coba Hitung Ulang!</span>
                        </>
                      )}
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      {isCorrect
                        ? `Luar biasa! Sudut bertolak belakang bernilai sama persis (m∠C = ${baseAngle}°), dan sudut berpelurus adalah 180° - ${baseAngle}° = ${180 - baseAngle}°.`
                        : `Evaluasi: Sudut bertolak belakang harusnya ${baseAngle}° (${validationResult.bertolakBelakangCorrect ? 'Tepat' : 'Belum'}), dan sudut berpelurus harusnya ${180 - baseAngle}° (${validationResult.berpelurusCorrect ? 'Tepat' : 'Belum'}).`}
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex items-center gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleValidate}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-teal-800 to-teal-700 hover:from-teal-900 hover:to-teal-800 text-amber-200 font-bold text-xs transition-all shadow-md shadow-teal-900/20 cursor-pointer active:scale-98 border border-amber-400/30"
                  >
                    Periksa Jawaban Kami
                  </button>

                  <button
                    type="button"
                    onClick={onReset}
                    className="py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
                    Ulangi
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
