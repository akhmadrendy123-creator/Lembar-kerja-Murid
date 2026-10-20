import React, { useState } from 'react';
import { Users, Copy, Check, Calendar, BookOpen, Sparkles } from 'lucide-react';
import type { GroupIdentity } from '../utils/mathGeometry';
import { ScrollReveal } from './ScrollReveal';

interface GroupIdentitySectionProps {
  data: GroupIdentity;
  onChange: (data: GroupIdentity) => void;
}

export const GroupIdentitySection: React.FC<GroupIdentitySectionProps> = ({ data, onChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `Data Kelompok: ${data.namaKelompok || '-'}\nKelas: ${data.kelas || '-'}\nTanggal: ${data.hariTanggal || '-'}\nAnggota: ${data.namaAnggota || '-'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="section-identitas" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="bg-white rounded-3xl border-2 border-amber-200/90 shadow-md shadow-amber-900/5 p-6 sm:p-8 relative overflow-hidden">
            {/* Top decorative songket accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-800 via-amber-400 to-teal-800"></div>

            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-teal-800 to-teal-700 text-amber-200 font-cinzel shadow-2xs">
                    Langkah 1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-display">
                    Tuliskan Identitas Kelompokmu
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  Isi data tim kalian terlebih dahulu ya! Jawaban kalian akan otomatis tersimpan selama belajar di halaman ini.
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-300/80 bg-amber-50/60 hover:bg-amber-100/80 text-amber-950 text-xs font-bold transition-all shadow-2xs self-start sm:self-auto cursor-pointer active:scale-98"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
                <span>{copied ? 'Data Tersalin!' : 'Salin Data Kelompok'}</span>
              </button>
            </div>

            {/* Form Fields with Elevated Styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-cinzel">
                  Nama Kelompok <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={data.namaKelompok}
                  onChange={(e) => onChange({ ...data, namaKelompok: e.target.value })}
                  placeholder="Contoh: Kelompok Gurindam 12"
                  className="w-full px-4 py-3 text-sm bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all font-semibold text-slate-800 shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-cinzel">
                  Kelas <span className="text-rose-500">*</span>
                </label>
                <select
                  value={data.kelas}
                  onChange={(e) => onChange({ ...data, kelas: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all font-semibold text-slate-800 shadow-2xs cursor-pointer"
                >
                  <option value="Kelas VIII-A">Kelas VIII-A</option>
                  <option value="Kelas VIII-B">Kelas VIII-B</option>
                  <option value="Kelas VIII-C">Kelas VIII-C</option>
                  <option value="Kelas VIII-D">Kelas VIII-D</option>
                  <option value="Kelas VIII-E">Kelas VIII-E</option>
                  <option value="Kelas VIII-F">Kelas VIII-F</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-cinzel">
                  Hari / Tanggal <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={data.hariTanggal}
                  onChange={(e) => onChange({ ...data, hariTanggal: e.target.value })}
                  placeholder="Contoh: 20/10/2026"
                  className="w-full px-4 py-3 text-sm bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all font-semibold text-slate-800 shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-cinzel">
                  Nama Anggota <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={data.namaAnggota}
                  onChange={(e) => onChange({ ...data, namaAnggota: e.target.value })}
                  placeholder="Siti Rahma, Ahmad Fauzan, Raja Irman"
                  className="w-full px-4 py-3 text-sm bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all font-semibold text-slate-800 shadow-2xs"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-medium text-slate-600">Penyimpanan lokal aktif — data kelompok tersimpan aman di browser.</span>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
