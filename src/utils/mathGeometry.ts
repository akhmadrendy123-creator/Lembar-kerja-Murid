/**
 * Math and Geometry utilities for BoriaMath Etnomatematika module
 */

export type AngleClassification = 'Nol' | 'Lancip' | 'Siku-siku' | 'Tumpul' | 'Lurus' | 'Refleks';

export interface GroupIdentity {
  namaKelompok: string;
  kelas: string;
  hariTanggal: string;
  namaAnggota: string;
}

export interface LKMState {
  identity: GroupIdentity;
  activity1: {
    angle: number;
    notes: string;
    isSaved: boolean;
  };
  activity2: {
    baseAngle: number;
    inputBertolakBelakang: string;
    inputBerpelurus: string;
    isChecked: boolean;
    isCorrect: boolean;
  };
  activity3: {
    formationId: 'saf-sejajar' | 'sayap-v' | 'pucuk-rebung';
    customFormationNotes: string;
    isSaved: boolean;
  };
  challenge: {
    baseAngle: number; // 55
    inputSepihak: string;
    reasoning: string;
    isChecked: boolean;
    isCorrect: boolean;
  };
  reflection: {
    q1: string;
    q2: string;
    q3: string;
  };
}

/**
 * Classifies an angle in degrees into Indonesian geometry terms
 */
export function classifyAngle(deg: number): AngleClassification {
  const normalized = Math.round(deg * 10) / 10;
  if (normalized === 0) return 'Nol';
  if (normalized > 0 && normalized < 90) return 'Lancip';
  if (normalized === 90) return 'Siku-siku';
  if (normalized > 90 && normalized < 180) return 'Tumpul';
  if (normalized === 180) return 'Lurus';
  return 'Refleks';
}

/**
 * Calculates supplementary angle (sudut berpelurus = 180 - x)
 */
export function calculateBerpelurus(deg: number): number {
  return 180 - deg;
}

/**
 * Calculates vertical angle (sudut bertolak belakang = x)
 */
export function calculateBertolakBelakang(deg: number): number {
  return deg;
}

/**
 * Validates Activity 2 answers
 */
export function validateActivity2(
  baseAngle: number,
  inputOpposite: string | number,
  inputSupplementary: string | number
): {
  bertolakBelakangCorrect: boolean;
  berpelurusCorrect: boolean;
  allCorrect: boolean;
  expectedOpposite: number;
  expectedSupplementary: number;
} {
  const valOpp = typeof inputOpposite === 'number' ? inputOpposite : parseFloat(inputOpposite.trim());
  const valSup = typeof inputSupplementary === 'number' ? inputSupplementary : parseFloat(inputSupplementary.trim());

  const expectedOpposite = calculateBertolakBelakang(baseAngle);
  const expectedSupplementary = calculateBerpelurus(baseAngle);

  const bertolakBelakangCorrect = Math.abs(valOpp - expectedOpposite) < 0.5;
  const berpelurusCorrect = Math.abs(valSup - expectedSupplementary) < 0.5;

  return {
    bertolakBelakangCorrect,
    berpelurusCorrect,
    allCorrect: bertolakBelakangCorrect && berpelurusCorrect,
    expectedOpposite,
    expectedSupplementary,
  };
}

/**
 * Validates Choreographer Challenge answers (sudut dalam sepihak: 180 - 55 = 125)
 */
export function validateChallenge(
  baseAngle: number,
  inputAngle: string | number
): {
  isCorrect: boolean;
  expected: number;
} {
  const val = typeof inputAngle === 'number' ? inputAngle : parseFloat(inputAngle.trim());
  const expected = 180 - baseAngle;
  return {
    isCorrect: Math.abs(val - expected) < 0.5,
    expected,
  };
}

/**
 * Formats full LKM answers into structured text ready for teacher grading
 */
export function formatLKMReport(data: LKMState): string {
  const now = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `=======================================================
LEMBAR KERJA PESERTA DIDIK ELEKTRONIK (e-LKPD)
BORIAMATH: ETNOMATEMATIKA TARI BORIA PULAU PENYENGAT
Materi: Hubungan Antar-Sudut Geometri (Fase D • Kelas VIII)
=======================================================

I. IDENTITAS KELOMPOK
- Nama Kelompok : ${data.identity.namaKelompok || '-'}
- Kelas         : ${data.identity.kelas || '-'}
- Hari / Tanggal: ${data.identity.hariTanggal || now}
- Anggota       : ${data.identity.namaAnggota || '-'}

-------------------------------------------------------
II. AKTIVITAS 1: SIMULASI ARAH LANGKAH PENARI (TUAS SUDUT)
- Sudut yang diamati : ${data.activity1.angle}° (${classifyAngle(data.activity1.angle)})
- Catatan & Kesimpulan Kelompok:
  "${data.activity1.notes || '(Belum diisi)'}"

-------------------------------------------------------
III. AKTIVITAS 2: TONGKAT PENARI BERSILANGAN
- Sudut Acuan ∠A                 : ${data.activity2.baseAngle}°
- Tebakan Bertolak Belakang (∠C) : ${data.activity2.inputBertolakBelakang}° (Kunci: ${calculateBertolakBelakang(data.activity2.baseAngle)}°)
- Tebakan Berpelurus (∠B/∠D)     : ${data.activity2.inputBerpelurus}° (Kunci: ${calculateBerpelurus(data.activity2.baseAngle)}°)
- Status Jawaban                 : ${data.activity2.isCorrect ? 'BENAR (Tepat)' : data.activity2.isChecked ? 'Perlu Diperbaiki' : 'Belum Diperiksa'}

-------------------------------------------------------
IV. AKTIVITAS 3: POLA LANTAI & GARIS TRANSVERSAL
- Formasi Pilihan: ${data.activity3.formationId.toUpperCase()}
- Rancangan Formasi Kreasi Kelompok:
  "${data.activity3.customFormationNotes || '(Belum diisi)'}"

-------------------------------------------------------
V. TANTANGAN KASUS KOREOGRAFER TARI BORIA
- Sudut Sehadap Acuan       : ${data.challenge.baseAngle}°
- Jawaban Sudut Dalam Sepihak: ${data.challenge.inputSepihak}° (Kunci: ${180 - data.challenge.baseAngle}°)
- Status Jawaban            : ${data.challenge.isCorrect ? 'BENAR' : data.challenge.isChecked ? 'Perlu Diperbaiki' : 'Belum Diperiksa'}
- Cara Menghitung & Saran   :
  "${data.challenge.reasoning || '(Belum diisi)'}"

-------------------------------------------------------
VI. REFLEKSI BELAJAR
1. Konsep sudut yang paling dipahami:
   ${data.reflection.q1 || '(Belum diisi)'}

2. Manfaat visualisasi tari Boria:
   ${data.reflection.q2 || '(Belum diisi)'}

3. Nilai budaya Melayu yang dipelajari:
   ${data.reflection.q3 || '(Belum diisi)'}

=======================================================
Disusun dengan BoriaMath • Sumber: Jurnal Gantang (Scesa et al., 2023)
=======================================================`;
}
