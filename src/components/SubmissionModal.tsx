import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileText, Download, Sparkles } from 'lucide-react';
import type { LKMState } from '../utils/mathGeometry';
import { formatLKMReport } from '../utils/mathGeometry';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: LKMState;
}

export const SubmissionModal: React.FC<SubmissionModalProps> = ({ isOpen, onClose, data }) => {
  const [copied, setCopied] = useState(false);
  const reportText = formatLKMReport(data);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `LKM-BoriaMath-${(data.identity.namaKelompok || 'Kelompok').replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full border-2 border-amber-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with Royal Theme */}
        <div className="p-5 border-b border-amber-200/60 flex items-center justify-between bg-gradient-to-r from-teal-900 to-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400 text-slate-950 shadow-sm font-cinzel">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-white text-sm sm:text-base font-serif-display">
                  Rangkuman Jawaban LKM Siap Kirim
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 font-cinzel">
                  e-LKPD
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Format teks rapi untuk dikirimkan melalui WhatsApp Guru atau Google Classroom.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Textarea preview */}
        <div className="p-5 flex-1 overflow-y-auto bg-slate-50">
          <div className="relative">
            <pre className="w-full h-84 p-4 text-xs font-mono bg-slate-950 text-teal-200 rounded-2xl overflow-x-auto whitespace-pre leading-relaxed border border-slate-800 shadow-inner">
              {reportText}
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
            >
              <Printer className="w-4 h-4 text-teal-800" />
              <span>Cetak / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
            >
              <Download className="w-4 h-4 text-teal-800" />
              <span>Unduh .txt</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              Tutup
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-800 to-teal-700 hover:from-teal-900 hover:to-teal-800 text-amber-200 text-xs font-bold transition-all shadow-md shadow-teal-900/20 active:scale-98 cursor-pointer border border-amber-400/30"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-amber-300" />
                  <span>Salin ke Clipboard</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
