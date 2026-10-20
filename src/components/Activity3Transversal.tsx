import React, { useState } from 'react';
import { Layers, BookmarkCheck, CheckCircle2, Check, PenTool, Sparkles } from 'lucide-react';
import { MathView } from './MathView';
import { ScrollReveal } from './ScrollReveal';

interface Activity3Props {
  formationId: 'saf-sejajar' | 'sayap-v' | 'pucuk-rebung';
  customFormationNotes: string;
  isSaved: boolean;
  onFormationChange: (id: 'saf-sejajar' | 'sayap-v' | 'pucuk-rebung') => void;
  onNotesChange: (notes: string) => void;
  onSave: () => void;
}

export const Activity3Transversal: React.FC<Activity3Props> = ({
  formationId,
  customFormationNotes,
  isSaved,
  onFormationChange,
  onNotesChange,
  onSave,
}) => {
  const [activePairFilter, setActivePairFilter] = useState<'sehadap' | 'berseberangan' | 'sepihak' | null>(null);

  return (
    <section id="section-aktivitas-3" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-900 border border-amber-400/40 text-amber-200 font-extrabold flex items-center justify-center shrink-0 text-base shadow-sm font-cinzel">
              3
            </div>
            <div>
              <div className="text-[11px] font-bold text-teal-800 uppercase tracking-widest font-cinzel">
                AKTIVITAS PRAKTIK 3
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
                Pola Lantai Boria &amp; Garis Transversal
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Kaidah matematis ketika barisan saf penari sejajar (<MathView math="k \parallel l" />) dipotong oleh lintasan garis transversal (<MathView math="m" />).
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Stage Floor Plan & Transversal Line */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-5 sm:p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-amber-900 uppercase tracking-widest font-cinzel">
                      SIMULASI DENAH PANGGUNG DARI ATAS
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 font-serif-display">
                      {formationId === 'saf-sejajar' && 'Formasi 1: Saf Sejajar Dipotong Lintasan Transversal'}
                      {formationId === 'sayap-v' && 'Formasi 2: Sayap V Melayu (Sudut Lancip Simetris)'}
                      {formationId === 'pucuk-rebung' && 'Formasi 3: Motif Segitiga Pucuk Rebung Melayu'}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-teal-50 text-teal-900 border border-teal-200 font-mono-math">
                    <MathView math="k \parallel l \cap m" />
                  </span>
                </div>

                {/* Stage Graphic (Interactive SVG) with Authentic Geometric Notations */}
                <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-amber-50/20 via-white to-amber-50/30 rounded-2xl border border-amber-200/80 p-3 overflow-hidden flex items-center justify-center shadow-inner">
                  {/* Floor Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#b4530908_1px,transparent_1px),linear-gradient(to_bottom,#b4530908_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                  <svg viewBox="0 0 420 250" className="w-full h-full select-none">
                    {formationId === 'saf-sejajar' && (
                      <g>
                        {/* Saf 1 (Line k) */}
                        <line x1="30" y1="75" x2="380" y2="75" stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round" />
                        <text x="385" y="79" className="text-xs font-bold fill-teal-900 font-mono-math">Saf 1 (k)</text>

                        {/* Parallel arrow markers on line k */}
                        <polygon points="120,75 112,71 112,79" fill="#0D9488" />
                        <polygon points="128,75 120,71 120,79" fill="#0D9488" />

                        {/* Dancers in Saf 1 */}
                        {[70, 140, 260, 330].map((cx, i) => (
                          <g key={`saf1-${i}`}>
                            <circle cx={cx} cy="75" r="7" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />
                            <text x={cx} y="62" textAnchor="middle" className="text-[9px] font-bold fill-teal-900">
                              P{i + 1}
                            </text>
                          </g>
                        ))}

                        {/* Saf 2 (Line l) */}
                        <line x1="30" y1="170" x2="380" y2="170" stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round" />
                        <text x="385" y="174" className="text-xs font-bold fill-teal-900 font-mono-math">Saf 2 (l)</text>

                        {/* Parallel arrow markers on line l */}
                        <polygon points="120,170 112,166 112,174" fill="#0D9488" />
                        <polygon points="128,170 120,166 120,174" fill="#0D9488" />

                        {/* Dancers in Saf 2 */}
                        {[70, 140, 260, 330].map((cx, i) => (
                          <g key={`saf2-${i}`}>
                            <circle cx={cx} cy="170" r="7" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />
                            <text x={cx} y="194" textAnchor="middle" className="text-[9px] font-bold fill-teal-900">
                              P{i + 5}
                            </text>
                          </g>
                        ))}

                        {/* Transversal Line m (Lintasan Tukang Karang) */}
                        <line
                          x1="130"
                          y1="225"
                          x2="290"
                          y2="20"
                          stroke="#E11D48"
                          strokeWidth="3.5"
                          strokeDasharray="6 3"
                          strokeLinecap="round"
                        />
                        <text x="296" y="25" className="text-xs font-extrabold fill-rose-800 font-mono-math">Lintasan (m)</text>

                        {/* Tukang Karang marker */}
                        <circle cx="210" cy="122.5" r="9" fill="#F59E0B" stroke="#92400E" strokeWidth="2.5" />
                        <text x="210" y="145" textAnchor="middle" className="text-[10px] font-black fill-amber-950 font-cinzel">
                          Tukang Karang
                        </text>

                        {/* Intersection P on Saf 1 */}
                        <circle cx="247" cy="75" r="5" fill="#E11D48" />
                        <text x="234" y="66" className="text-[11px] font-bold fill-rose-900 font-mono-math">P</text>

                        {/* Angle 1 (55°) - Sehadap */}
                        <path d="M 272 75 A 25 25 0 0 1 260 59" fill="none" stroke="#E11D48" strokeWidth="2.5" />
                        <rect x="264" y="46" width="64" height="20" rx="5" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1" />
                        <text x="296" y="60" textAnchor="middle" className="text-[10px] font-black fill-rose-950 font-mono-math">
                          ∠1 = 55°
                        </text>

                        {/* Intersection Q on Saf 2 */}
                        <circle cx="173" cy="170" r="5" fill="#E11D48" />
                        <text x="158" y="162" className="text-[11px] font-bold fill-rose-900 font-mono-math">Q</text>

                        {/* Angle 5 (55°) - Sehadap di Saf 2 */}
                        <path d="M 198 170 A 25 25 0 0 1 186 154" fill="none" stroke="#E11D48" strokeWidth="2.5" />
                        <rect x="190" y="141" width="64" height="20" rx="5" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1" />
                        <text x="222" y="155" textAnchor="middle" className="text-[10px] font-black fill-rose-950 font-mono-math">
                          ∠5 = 55°
                        </text>

                        {/* Angle 6 (125°) - Dalam Sepihak */}
                        <path d="M 173 170 A 25 25 0 0 0 148 170" fill="none" stroke="#0284C7" strokeWidth="2.5" />
                        <rect x="100" y="176" width="70" height="20" rx="5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" />
                        <text x="135" y="190" textAnchor="middle" className="text-[10px] font-black fill-sky-950 font-mono-math">
                          ∠6 = 125°
                        </text>

                        {/* Mathematical relation tag overlay */}
                        <text x="210" y="240" textAnchor="middle" className="text-[10px] font-bold fill-slate-500 font-mono-math">
                          Kaidah: ∠1 = ∠5 (Sudut Sehadap) | ∠5 + ∠6 = 180° (Sudut Sepihak)
                        </text>
                      </g>
                    )}

                    {formationId === 'sayap-v' && (
                      <g>
                        {/* Sayap V Formation Lines */}
                        <line x1="210" y1="50" x2="80" y2="190" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" />
                        <line x1="210" y1="50" x2="340" y2="190" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" />

                        {/* Tukang Karang vertex */}
                        <circle cx="210" cy="50" r="9" fill="#F59E0B" stroke="#92400E" strokeWidth="2.5" />
                        <text x="210" y="32" textAnchor="middle" className="text-[10px] font-black fill-amber-950 font-cinzel">
                          Pemimpin V (Verteks)
                        </text>

                        {/* Angle arc at apex */}
                        <path d="M 194 67 A 30 30 0 0 0 226 67" fill="none" stroke="#0D9488" strokeWidth="3" />
                        <rect x="180" y="78" width="60" height="20" rx="5" fill="#044E3D" />
                        <text x="210" y="92" textAnchor="middle" className="text-[11px] font-bold fill-amber-300 font-mono-math">
                          θ = 60°
                        </text>

                        {/* Left Wing Dancers */}
                        {[80, 123, 166].map((cx, i) => {
                          const cy = 50 + ((cx - 210) / (80 - 210)) * 140;
                          return (
                            <g key={`v-left-${i}`}>
                              <circle cx={cx} cy={cy} r="7" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />
                              <text x={cx - 16} y={cy + 4} className="text-[9px] font-bold fill-teal-900">
                                L{i + 1}
                              </text>
                            </g>
                          );
                        })}

                        {/* Right Wing Dancers */}
                        {[254, 297, 340].map((cx, i) => {
                          const cy = 50 + ((cx - 210) / (340 - 210)) * 140;
                          return (
                            <g key={`v-right-${i}`}>
                              <circle cx={cx} cy={cy} r="7" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />
                              <text x={cx + 16} y={cy + 4} className="text-[9px] font-bold fill-teal-900">
                                R{i + 1}
                              </text>
                            </g>
                          );
                        })}

                        <text x="210" y="228" textAnchor="middle" className="text-[11px] font-bold fill-slate-600 font-serif-display">
                          Dua sayap simetris membentuk segitiga sama kaki terhadap garis sumbu panggung.
                        </text>
                      </g>
                    )}

                    {formationId === 'pucuk-rebung' && (
                      <g>
                        {/* Rhombus / Belah Ketupat */}
                        <polygon
                          points="210,35 300,125 210,215 120,125"
                          fill="rgba(13, 148, 136, 0.08)"
                          stroke="#0D9488"
                          strokeWidth="3"
                          strokeDasharray="5 5"
                        />

                        {/* Diagonals d1 and d2 */}
                        <line x1="210" y1="35" x2="210" y2="215" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
                        <line x1="120" y1="125" x2="300" y2="125" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />

                        {/* Perpendicular symbol at center */}
                        <rect x="210" y="115" width="10" height="10" fill="none" stroke="#B45309" strokeWidth="1.5" />

                        {/* Vertex dancers */}
                        <circle cx="210" cy="35" r="8" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
                        <circle cx="300" cy="125" r="7" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />
                        <circle cx="210" cy="215" r="7" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />
                        <circle cx="120" cy="125" r="7" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />

                        {/* Side Dancers */}
                        <circle cx="255" cy="80" r="6" fill="#0369A1" stroke="#FFFFFF" strokeWidth="2" />
                        <circle cx="255" cy="170" r="6" fill="#0369A1" stroke="#FFFFFF" strokeWidth="2" />
                        <circle cx="165" cy="170" r="6" fill="#0369A1" stroke="#FFFFFF" strokeWidth="2" />
                        <circle cx="165" cy="80" r="6" fill="#0369A1" stroke="#FFFFFF" strokeWidth="2" />

                        <text x="210" y="142" textAnchor="middle" className="text-xs font-black fill-teal-950 font-serif-display">
                          Pucuk Rebung Melayu (Diagonal Saling Tegak Lurus: d₁ ⊥ d₂)
                        </text>
                      </g>
                    )}
                  </svg>
                </div>

                {/* Formation Switcher Buttons */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-600 font-cinzel">
                    Klik untuk Mengganti Bentuk Formasi Panggung:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'saf-sejajar', label: '1. Saf Sejajar' },
                      { id: 'sayap-v', label: '2. Sayap V Melayu' },
                      { id: 'pucuk-rebung', label: '3. Pucuk Rebung' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onFormationChange(item.id as any)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          formationId === item.id
                            ? 'bg-gradient-to-r from-teal-800 to-teal-700 text-amber-200 shadow-sm border border-amber-400/40'
                            : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Kamus Cepat Sudut Sejajar & Custom Formation Input */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-5 sm:p-6 space-y-5">
                <div className="space-y-1 pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest font-cinzel">
                    KAMUS LENGKAP SUDUT SEJAJAR
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif-display">
                    Hubungan Antar-Sudut Dua Garis Sejajar (<MathView math="k \parallel l" />)
                  </h3>
                </div>

                {/* Comprehensive KaTeX Mathematical Table */}
                <div className="space-y-2.5 text-xs">
                  {/* Sudut Sehadap */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-slate-900 font-serif-display">Sudut Sehadap (Corresponding)</div>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-teal-100 text-teal-900 font-cinzel">
                        SAMA BESAR
                      </span>
                    </div>
                    <div className="text-[11px] text-teal-900 font-mono-math">
                      <MathView math="\angle 1 = \angle 5,\quad \angle 2 = \angle 6,\quad \angle 3 = \angle 7" />
                    </div>
                  </div>

                  {/* Sudut Berseberangan */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-slate-900 font-serif-display">Sudut Berseberangan (Alternate)</div>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-teal-100 text-teal-900 font-cinzel">
                        SAMA BESAR
                      </span>
                    </div>
                    <div className="text-[11px] text-teal-900 font-mono-math">
                      <MathView math="\text{Dalam: } \angle 3 = \angle 6 \quad|\quad \text{Luar: } \angle 1 = \angle 8" />
                    </div>
                  </div>

                  {/* Sudut Sepihak */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-amber-950 font-serif-display">Sudut Sepihak (Consecutive)</div>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-amber-200 text-amber-950 font-cinzel">
                        JUMLAH = 180°
                      </span>
                    </div>
                    <div className="text-[11px] text-amber-900 font-mono-math">
                      <MathView math="m\angle 3 + m\angle 5 = 180^\circ \quad|\quad m\angle 4 + m\angle 6 = 180^\circ" />
                    </div>
                  </div>
                </div>

                {/* Creative Choreographer Proposal Form */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider font-cinzel">
                    Yuk, Rancang Formasi Versi Kelompokmu! <span className="text-rose-500">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Bayangkan kelompok kalian adalah penata tari (koreografer). Bagaimana susunan 8 penari dan sudut apa yang terbentuk?
                  </p>
                  <textarea
                    rows={4}
                    value={customFormationNotes}
                    onChange={(e) => onNotesChange(e.target.value)}
                    placeholder="Contoh: Kami ingin membuat formasi sayap V dengan sudut 60 derajat di depan Tukang Karang agar gerakannya terlihat gagah..."
                    className="w-full p-3.5 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white text-slate-800 font-medium leading-relaxed"
                  />
                </div>

                {/* Save Button */}
                <button
                  type="button"
                  onClick={onSave}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-teal-800 to-teal-700 hover:from-teal-900 hover:to-teal-800 text-amber-200 font-bold text-xs transition-all shadow-md shadow-teal-900/20 active:scale-98 cursor-pointer border border-amber-400/30"
                >
                  {isSaved ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Ide Formasi Telah Disimpan!</span>
                    </>
                  ) : (
                    <>
                      <PenTool className="w-4 h-4 text-amber-300" />
                      <span>Simpan Ide Formasi Kelompok</span>
                    </>
                  )}
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
