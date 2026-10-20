/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

  // Auto-save to localStorage
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
      {/* Top Navbar */}
      <Navbar onCopyLKM={handleCopyLKM} isCopied={isCopiedGlobal} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Section 1: Group Identity */}
        <GroupIdentitySection
          data={state.identity}
          onChange={(identity) => {
            setState((prev) => ({ ...prev, identity }));
          }}
        />

        {/* Target Belajar Murid Kelas 8 */}
        <TargetBelajarSection />

        {/* Culture Story: Tari Boria Pulau Penyengat */}
        <CultureStorySection />

        {/* Mission Secrets: 4 Rahasia Sudut */}
        <MissionSecretsSection />

        {/* Aktivitas Praktik 1: Tuas Sudut Penari */}
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

        {/* Aktivitas Praktik 2: Tongkat Bersilangan */}
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

        {/* Aktivitas Praktik 3: Pola Lantai & Garis Transversal */}
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

        {/* Tantangan Kasus Lapangan: Bantu Sang Penata Tari Boria */}
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

        {/* Refleksi Belajar & Submission Trigger */}
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

      {/* Footer Summary & Audio Synthesizer */}
      <FooterSummary />

      {/* Submission Modal */}
      <SubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={state}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
