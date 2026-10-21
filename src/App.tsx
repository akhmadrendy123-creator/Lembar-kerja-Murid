import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GroupIdentitySection } from './components/GroupIdentitySection';
import { TargetBelajarSection } from './components/TargetBelajarSection';
import { CultureStorySection } from './components/CultureStorySection';
import { MissionSecretsSection } from './components/MissionSecretsSection';
import { Activity1AngleLever } from './components/Activity1AngleLever';
import { Activity2CrossSticks } from './components/Activity2CrossSticks';
import { Activity3Transversal } from './components/Activity3Transversal';
import { ChoreographerChallenge } from './components/ChoreographerChallenge';
import { ReflectionSection } from './components/ReflectionSection';
import { FooterSummary } from './components/FooterSummary';
import { SubmissionModal } from './components/SubmissionModal';
import { formatLKMReport, type LKMState } from './utils/mathGeometry';

// Komponen tambahan untuk merender kartu materi
import { MathView } from './components/MathView';
import { ScrollReveal } from './components/ScrollReveal';

const STORAGE_KEY = 'boriamath_lkm_state_v1';

const DEFAULT_STATE: LKMState = {
  identity: {
    namaKelompok: 'Kelompok Gurindam 12',
    kelas: 'Kelas VIII-B',
    hariTanggal: '20/10/2026',
    namaAnggota: 'Siti Rahma, Ahmad Fauzan, Raja Irman',
  },
  activity1: {
    angle: 60,
    notes: 'Titik sudut berada di posisi penari O. Ketika sudut 60°, langkah penari serong lancip dan terlihat anggun serta serentak.',
    isSaved: true,
  },
  activity2: {
    baseAngle: 72,
    inputBertolakBelakang: '',
    inputBerpelurus: '',
    isChecked: false,
    isCorrect: false,
  },
  activity3: {
    formationId: 'saf-sejajar',
    customFormationNotes: 'Kami ingin membuat formasi sayap V dengan sudut 60 derajat di depan Tukang Karang agar gerakannya terlihat gagah.',
    isSaved: true,
  },
  challenge: {
    baseAngle: 55,
    inputSepihak: '',
    reasoning: '',
    isChecked: false,
    isCorrect: false,
  },
  reflection: {
    q1: 'Sudut bertolak belakang, karena nilainya selalu sama sehingga mudah dihitung.',
    q2: 'Sangat membantu, karena kami bisa melihat langsung garis langkah dan tongkat penari.',
    q3: 'Ternyata nenek moyang kita sudah menerapkan matematika yang sangat rapi di dalam tarian adat.',
  },
};

export default function App() {
  const [state, setState] = useState<LKMState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_STATE;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopiedGlobal, setIsCopiedGlobal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyLKM = () => {
    const text = formatLKMReport(state);
    navigator.clipboard.writeText(text);
    setIsCopiedGlobal(true);
    showToast('Seluruh rangkuman LKM berhasil disalin ke clipboard!');
    setTimeout(() => setIsCopiedGlobal(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      <Navbar onCopyLKM={handleCopyLKM} isCopied={isCopiedGlobal} />

      <main>
        <HeroSection />

        <GroupIdentitySection
          data={state.identity}
          onChange={(identity) => {
            setState((prev) => ({ ...prev, identity }));
          }}
        />

        <TargetBelajarSection />

        {/* --- KARTU MATERI SUDUT YANG DIPINDAHKAN --- */}
        <section className="py-8 bg-white border-y border-slate-100 shadow-sm relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="text-lg font-extrabold text-slate-800 mb-5 text-center font-serif-display">
                Konsep Sudut Dasar pada Formasi Tari
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Card 1: 180° Sudut Berpelurus */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl font-black text-teal-800 font-mono-math">
                      <MathView math="180^\circ" />
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      Linear Pair
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Sudut Lurus Saf
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Dua arah hadap berpelurus: <MathView math="\theta_1 + \theta_2 = 180^\circ" />
                  </p>
                </div>

                {/* Card 2: Bertolak Belakang */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-black text-amber-700 font-mono-math flex items-center gap-1">
                      <MathView math="\angle 1 \cong \angle 3" />
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      Kongruen
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Sudut Silang
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Saling bertolak belakang: <MathView math="m\angle 1 = m\angle 3" />
                  </p>
                </div>

                {/* Card 3: Garis Sejajar & Transversal */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-amber-200/80 shadow-xs hover:border-teal-400 hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base font-black text-teal-800 font-mono-math">
                      <MathView math="k \parallel l" />
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">
                      Sejajar
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    4 Saf Barisan
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Dipotong lintasan transversal garis <MathView math="m" />
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        {/* --- AKHIR KARTU MATERI SUDUT --- */}

        <CultureStorySection />

        <MissionSecretsSection />

        <Activity1AngleLever
          angle={state.activity1.angle}
          notes={state.activity1.notes}
          isSaved={state.activity1.isSaved}
          onAngleChange={(angle) => {
            setState((prev) => ({
              ...prev,
              activity1: { ...prev.activity1, angle, isSaved: false },
            }));
          }}
          onNotesChange={(notes) => {
            setState((prev) => ({
              ...prev,
              activity1: { ...prev.activity1, notes, isSaved: false },
            }));
          }}
          onSave={() => {
            setState((prev) => ({
              ...prev,
              activity1: { ...prev.activity1, isSaved: true },
            }));
            showToast('Catatan Aktivitas 1 berhasil disimpan!');
          }}
        />

        <Activity2CrossSticks
          baseAngle={state.activity2.baseAngle}
          inputBertolakBelakang={state.activity2.inputBertolakBelakang}
          inputBerpelurus={state.activity2.inputBerpelurus}
          isChecked={state.activity2.isChecked}
          isCorrect={state.activity2.isCorrect}
          onInputChange={(inputBertolakBelakang, inputBerpelurus) => {
            setState((prev) => ({
              ...prev,
              activity2: {
                ...prev.activity2,
                inputBertolakBelakang,
                inputBerpelurus,
                isChecked: false,
              },
            }));
          }}
          onCheck={(isCorrect) => {
            setState((prev) => ({
              ...prev,
              activity2: {
                ...prev.activity2,
                isChecked: true,
                isCorrect,
              },
            }));
            if (isCorrect) {
              showToast('Selamat! Jawaban Aktivitas 2 kalian benar!');
            }
          }}
          onReset={() => {
            setState((prev) => ({
              ...prev,
              activity2: {
                ...prev.activity2,
                inputBertolakBelakang: '',
                inputBerpelurus: '',
                isChecked: false,
                isCorrect: false,
              },
            }));
          }}
        />

        <Activity3Transversal
          formationId={state.activity3.formationId}
          customFormationNotes={state.activity3.customFormationNotes}
          isSaved={state.activity3.isSaved}
          onFormationChange={(formationId) => {
            setState((prev) => ({
              ...prev,
              activity3: { ...prev.activity3, formationId },
            }));
          }}
          onNotesChange={(customFormationNotes) => {
            setState((prev) => ({
              ...prev,
              activity3: { ...prev.activity3, customFormationNotes, isSaved: false },
            }));
          }}
          onSave={() => {
            setState((prev) => ({
              ...prev,
              activity3: { ...prev.activity3, isSaved: true },
            }));
            showToast('Ide rancangan formasi kelompok berhasil disimpan!');
          }}
        />

        <ChoreographerChallenge
          baseAngle={state.challenge.baseAngle}
          inputSepihak={state.challenge.inputSepihak}
          reasoning={state.challenge.reasoning}
          isChecked={state.challenge.isChecked}
          isCorrect={state.challenge.isCorrect}
          onInputChange={(inputSepihak, reasoning) => {
            setState((prev) => ({
              ...prev,
              challenge: {
                ...prev.challenge,
                inputSepihak,
                reasoning,
                isChecked: false,
              },
            }));
          }}
          onSubmit={(isCorrect) => {
            setState((prev) => ({
              ...prev,
              challenge: {
                ...prev.challenge,
                isChecked: true,
                isCorrect,
              },
            }));
            if (isCorrect) {
              showToast('Jawaban Tantangan Koreografer tepat sekali!');
            }
          }}
        />

        <ReflectionSection
          q1={state.reflection.q1}
          q2={state.reflection.q2}
          q3={state.reflection.q3}
          onChange={(q1, q2, q3) => {
            setState((prev) => ({
              ...prev,
              reflection: { q1, q2, q3 },
            }));
          }}
          onOpenReportModal={() => setIsModalOpen(true)}
          isCopied={isCopiedGlobal}
        />
      </main>

      <FooterSummary />

      <SubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={state}
      />

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
