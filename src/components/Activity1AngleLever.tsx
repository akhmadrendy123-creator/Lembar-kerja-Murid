import React, { useState, useEffect } from 'react';
import { Sliders, CheckCircle2, MessageSquare, Check } from 'lucide-react';
import { classifyAngle } from '../utils/mathGeometry';
import { MathView } from './MathView';
import { ScrollReveal } from './ScrollReveal';

interface Activity1Props {
  angle: number;
  notes: string;
  isSaved: boolean;
  onAngleChange: (angle: number) => void;
  onNotesChange: (notes: string) => void;
  onSave: () => void;
}

export const Activity1AngleLever: React.FC<Activity1Props> = ({
  angle,
  notes,
  isSaved,
  onAngleChange,
  onNotesChange,
  onSave,
}) => {
  // State lokal untuk 3 kotak jawaban terpisah
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [ans3, setAns3] = useState('');

  // Sinkronisasi data saat pertama kali dimuat
  useEffect(() => {
    if (!notes) return;
    // Mengabaikan teks jawaban bawaan (default) dari App.tsx agar kotak tetap kosong
    if (notes.includes('Titik sudut berada di posisi penari')) return; 

    // Jika ada data tersimpan di localStorage, pecah kembali ke 3 kotak
    if (notes.includes('Jawaban 1:')) {
      const parts = notes.split(/Jawaban \d:\n/);
      if (parts.length >= 4) {
        setAns1(parts[1].trim());
        setAns2(parts[2].trim());
        setAns3(parts[3].trim());
      }
    }
  }, []);

  // Fungsi untuk menggabungkan 3 jawaban dan mengirimnya ke App.tsx
  const updateParentNotes = (q1: string, q2: string, q3: string) => {
    const combined = `Jawaban 1:\n${q1}\n\nJawaban 2:\n${q2}\n\nJawaban 3:\n${q3}`;
    onNotesChange(combined);
  };

  const handleAns1 = (val: string) => { setAns1(val); updateParentNotes(val, ans2, ans3); };
  const handleAns2 = (val: string) => { setAns2(val); updateParentNotes(ans1, val, ans3); };
  const handleAns3 = (val: string) => { setAns3(val); updateParentNotes(ans1, ans2, val); };

  const classification = classifyAngle(angle);

  // SVG Geometry Calculation
  const originX = 140;
  const originY = 220;
  const rayLength = 175;
  const rad = (angle * Math.PI) / 180;
  const endX = originX + Math.cos(rad) * rayLength;
  const endY = originY - Math.sin(rad) * rayLength;

  const arcRadius = 60;
  const arcEndX = originX + Math.cos(rad) * arcRadius;
  const arcEndY = originY - Math.sin(rad) * arcRadius;
  const largeArcFlag = angle > 180 ? 1 : 0;
  const arcPath =
    angle === 0
      ? ''
      : `M ${originX + arcRadius} ${originY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcEndX} ${arcEndY}`;

  const presets = [
    { label: '30° (Langkah Samping)', val: 30, math: '\\theta = 30^\\circ' },
    { label: '60° (Serong Khas Melayu)', val: 60, math: '\\theta = 60^\\circ' },
    { label: '90° (Tegak Lurus Saf)', val: 90, math: '\\vec{OA} \\perp \\vec{OP}' },
    { label: '120° (Membuka Sayap V)', val: 120, math: '\\theta = 120^\\circ' },
  ];

  const getClassificationMath = () => {
    switch (classification) {
      case 'Lancip': return '0^\\circ < \\theta < 90^\\circ';
      case 'Siku-siku': return '\\theta = 90^\\circ \\; (\\vec{OA} \\perp \\vec{OP})';
      case 'Tumpul': return '90^\\circ < \\theta < 180^\\circ';
      case 'Lurus': return '\\theta = 180^\\circ \\; (\\text{Garis Lurus})';
      default: return '\\theta';
    }
  };

  return (
    <section id="section-aktivitas-1" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-900 border border-amber-400/40 text-amber-200 font-extrabold flex items-center justify-center shrink-0 text-base shadow-sm font-cinzel">
              1
            </div>
            <div>
              <div className="text-[11px] font-bold text-teal-800 uppercase tracking-widest font-cinzel">
                AKTIVITAS PRAKTIK 1
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
                Ayo Mainkan Tuas Arah Gerak Penari!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Geser tuas di bawah untuk melihat bagaimana sudut langkah penari Boria berubah secara nyata sesuai notasi sudut matematis.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* KIRI: Interactive Simulation (Tetap Sama) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-5 sm:p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-teal-800" />
                    <h3 className="text-sm font-bold text-slate-900 font-serif-display">
                      Simulasi Arah Langkah Penari
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-teal-50 text-teal-900 border border-teal-200 font-mono-math">
                      <MathView math={`m\\angle AOP = \\theta = ${angle}^\\circ`} />
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold font-cinzel ${
                        classification === 'Lancip'
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                          : classification === 'Siku-siku'
                          ? 'bg-blue-50 text-blue-900 border border-blue-300'
                          : 'bg-amber-50 text-amber-950 border border-amber-300'
                      }`}
                    >
                      Sudut {classification}
                    </span>
                  </div>
                </div>

                <div className="relative w-full h-80 sm:h-88 bg-gradient-to-b from-slate-50 via-white to-amber-50/20 rounded-2xl border border-amber-200/60 overflow-hidden flex items-center justify-center shadow-inner">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:22px_22px]"></div>
                  <svg viewBox="0 0 420 280" className="w-full h-full select-none" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.03))' }}>
                    <defs>
                      <linearGradient id="angleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0D9488" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.12" />
                      </linearGradient>
                    </defs>

                    <path d={`M ${originX + rayLength} ${originY} A ${rayLength} ${rayLength} 0 0 0 ${originX - rayLength} ${originY}`} fill="none" stroke="#CBD5E1" strokeWidth="1.5" />

                    {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180].map((deg) => {
                      const tickRad = (deg * Math.PI) / 180;
                      const isMajor = deg % 30 === 0 || deg === 45 || deg === 90;
                      const innerR = isMajor ? rayLength - 12 : rayLength - 6;
                      const outerR = rayLength;
                      const x1 = originX + Math.cos(tickRad) * innerR;
                      const y1 = originY - Math.sin(tickRad) * innerR;
                      const x2 = originX + Math.cos(tickRad) * outerR;
                      const y2 = originY - Math.sin(tickRad) * outerR;
                      const textR = rayLength + 14;
                      const labelX = originX + Math.cos(tickRad) * textR;
                      const labelY = originY - Math.sin(tickRad) * textR;

                      return (
                        <g key={deg}>
                          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={isMajor ? '#64748B' : '#CBD5E1'} strokeWidth={isMajor ? 1.5 : 1} />
                          {isMajor && (
                            <text x={labelX} y={labelY + 3} textAnchor="middle" className="text-[10px] font-mono font-bold fill-slate-700">{deg}°</text>
                          )}
                        </g>
                      );
                    })}

                    {angle > 0 && (
                      <path d={`M ${originX} ${originY} L ${originX + arcRadius} ${originY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcEndX} ${arcEndY} Z`} fill="url(#angleGlow)" />
                    )}

                    {angle > 0 && <path d={arcPath} fill="none" stroke="#0D9488" strokeWidth="2.5" />}

                    {angle >= 10 && (
                      <g transform={`translate(${originX + Math.cos(rad / 2) * (arcRadius + 18)}, ${originY - Math.sin(rad / 2) * (arcRadius + 18)})`}>
                        <rect x="-18" y="-9" width="36" height="18" rx="4" fill="#044E3D" />
                        <text x="0" y="3" textAnchor="middle" className="text-[10px] font-bold fill-amber-300 font-mono">{angle}°</text>
                      </g>
                    )}

                    <line x1={originX - 30} y1={originY} x2={originX + rayLength + 30} y2={originY} stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points={`${originX + rayLength + 35},${originY} ${originX + rayLength + 25},${originY - 4} ${originX + rayLength + 25},${originY + 4}`} fill="#1E293B" />
                    <circle cx={originX + rayLength + 10} cy={originY} r="3" fill="#1E293B" />
                    <text x={originX + rayLength + 10} y={originY - 8} className="text-[10px] font-bold fill-slate-800 font-mono-math">A (Saf 0°)</text>

                    <line x1={originX} y1={originY} x2={endX} y2={endY} stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round" />
                    {[0.3, 0.55, 0.8].map((ratio, i) => (
                      <circle key={i} cx={originX + Math.cos(rad) * (rayLength * ratio)} cy={originY - Math.sin(rad) * (rayLength * ratio)} r="3" fill="#F59E0B" opacity={0.8} />
                    ))}

                    <circle cx={endX} cy={endY} r="6" fill="#0D9488" stroke="#FFFFFF" strokeWidth="2" />
                    <text x={endX + Math.cos(rad) * 18} y={endY - Math.sin(rad) * 16 + 4} textAnchor="middle" className="text-xs font-extrabold fill-teal-900 font-mono-math">P (Arah Langkah)</text>

                    <circle cx={originX} cy={originY} r="8" fill="#BE123C" stroke="#FFFFFF" strokeWidth="2.5" />
                    <text x={originX} y={originY + 22} textAnchor="middle" className="text-xs font-black fill-rose-800 font-mono-math">Titik O (Verteks)</text>

                    <g transform={`translate(${originX}, ${originY}) rotate(${-angle})`}>
                      <path d="M -8 -12 L 8 -12 L 6 0 L -6 0 Z" fill="#D97706" opacity="0.4" />
                      <ellipse cx="0" cy="-6" rx="14" ry="4" fill="#065F46" opacity="0.9" />
                      <circle cx="0" cy="-6" r="5" fill="#FDE68A" />
                      <polygon points="0,-12 4,-6 -4,-6" fill="#D97706" />
                    </g>
                  </svg>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-amber-900 font-cinzel">DEFINISI MATEMATIS:</span>
                    <span className="font-mono-math font-bold text-teal-900"><MathView math={getClassificationMath()} /></span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Notasi: <MathView math="m\angle AOP = \theta" /></span>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold font-mono">
                    <span>15° (Serong Luar)</span>
                    <span>45°</span>
                    <span className="font-bold text-teal-800">90° (Tegak Lurus)</span>
                    <span>135°</span>
                    <span>165° (Balik)</span>
                  </div>
                  <input
                    type="range" min="0" max="180" value={angle}
                    onChange={(e) => onAngleChange(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-800 focus:outline-none"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-600 font-cinzel">Pilihan Cepat Sudut Formasi Boria:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {presets.map((p) => (
                      <button
                        key={p.val} type="button" onClick={() => onAngleChange(p.val)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                          angle === p.val
                            ? 'bg-gradient-to-r from-teal-800 to-teal-700 text-amber-200 shadow-sm border border-amber-400/40'
                            : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/80'
                        }`}
                      >
                        <span className="font-bold">{p.label}</span>
                        <span className="text-[10px] opacity-80 font-mono-math"><MathView math={p.math} /></span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* KANAN: Discussion & Group Notes (REVISI BARU - 3 KOTAK ISIAN) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-5 sm:p-6 space-y-4">
                <div className="space-y-1 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-widest font-cinzel">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>AYO DISKUSIKAN</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-serif-display">
                    Catatan Pengamatan Kelompok
                  </h3>
                  <p className="text-xs text-slate-500">
                    Diskusikan 3 pertanyaan pemandu berikut bersama teman kelompokmu:
                  </p>
                </div>

                {/* 3 Kotak Pertanyaan Terpisah */}
                <div className="space-y-4 pt-2">
                  
                  {/* Pertanyaan 1 */}
                  <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-4 sm:p-5 transition-all focus-within:border-teal-400 focus-within:ring-4 focus-within:ring-teal-500/10">
                    <h4 className="text-sm font-bold text-slate-800 mb-1">1. Di mana titik sudutnya?</h4>
                    <p className="text-xs text-slate-500 mb-3">Sudut terbentuk di titik mana saat penari mengayunkan langkahnya?</p>
                    <textarea
                      rows={2}
                      value={ans1}
                      onChange={(e) => handleAns1(e.target.value)}
                      placeholder="Ketik jawaban kelompokmu di sini..."
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 transition-all resize-none shadow-sm"
                    />
                  </div>

                  {/* Pertanyaan 2 */}
                  <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-4 sm:p-5 transition-all focus-within:border-teal-400 focus-within:ring-4 focus-within:ring-teal-500/10">
                    <h4 className="text-sm font-bold text-slate-800 mb-1">2. Apa bedanya saat sudut digeser ke 90° atau 120°?</h4>
                    <p className="text-xs text-slate-500 mb-3">Apakah sudutnya menjadi lancip, siku-siku, atau tumpul?</p>
                    <textarea
                      rows={2}
                      value={ans2}
                      onChange={(e) => handleAns2(e.target.value)}
                      placeholder="Ketik jawaban kelompokmu di sini..."
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 transition-all resize-none shadow-sm"
                    />
                  </div>

                  {/* Pertanyaan 3 */}
                  <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-4 sm:p-5 transition-all focus-within:border-teal-400 focus-within:ring-4 focus-within:ring-teal-500/10">
                    <h4 className="text-sm font-bold text-slate-800 mb-1">3. Mengapa sudut yang tepat penting bagi penari?</h4>
                    <p className="text-xs text-slate-500 mb-3">Bagaimana keseragaman sudut membuat tarian terlihat rapi dan tidak tabrakan?</p>
                    <textarea
                      rows={2}
                      value={ans3}
                      onChange={(e) => handleAns3(e.target.value)}
                      placeholder="Ketik jawaban kelompokmu di sini..."
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 transition-all resize-none shadow-sm"
                    />
                  </div>

                </div>

                {/* Tombol Simpan */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onSave}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-teal-800 to-teal-700 hover:from-teal-900 hover:to-teal-800 text-amber-200 font-bold text-xs transition-all shadow-md shadow-teal-900/20 active:scale-98 cursor-pointer border border-amber-400/30"
                  >
                    {isSaved ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Jawaban Aktivitas 1 Telah Tersimpan!</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-amber-300" />
                        <span>Simpan Semua Jawaban</span>
                      </>
                    )}
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
