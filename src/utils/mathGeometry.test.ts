import test from 'node:test';
import assert from 'node:assert/strict';
import {
  classifyAngle,
  calculateBerpelurus,
  calculateBertolakBelakang,
  validateActivity2,
  validateChallenge,
  formatLKMReport
} from './mathGeometry.ts';
import type { LKMState } from './mathGeometry.ts';

test('classifyAngle classifies angles accurately', () => {
  assert.equal(classifyAngle(0), 'Nol');
  assert.equal(classifyAngle(15), 'Lancip');
  assert.equal(classifyAngle(60), 'Lancip');
  assert.equal(classifyAngle(90), 'Siku-siku');
  assert.equal(classifyAngle(120), 'Tumpul');
  assert.equal(classifyAngle(180), 'Lurus');
  assert.equal(classifyAngle(210), 'Refleks');
});

test('calculateBerpelurus and calculateBertolakBelakang work properly', () => {
  assert.equal(calculateBerpelurus(65), 115);
  assert.equal(calculateBerpelurus(72), 108);
  assert.equal(calculateBerpelurus(90), 90);
  assert.equal(calculateBertolakBelakang(72), 72);
  assert.equal(calculateBertolakBelakang(115), 115);
});

test('validateActivity2 verifies vertical and supplementary angles correctly', () => {
  // Correct answers
  const resultCorrect = validateActivity2(72, '72', '108');
  assert.equal(resultCorrect.allCorrect, true);
  assert.equal(resultCorrect.bertolakBelakangCorrect, true);
  assert.equal(resultCorrect.berpelurusCorrect, true);

  // Wrong supplementary
  const resultWrong = validateActivity2(72, '72', '100');
  assert.equal(resultWrong.allCorrect, false);
  assert.equal(resultWrong.bertolakBelakangCorrect, true);
  assert.equal(resultWrong.berpelurusCorrect, false);
});

test('validateChallenge validates consecutive interior angle (sudut dalam sepihak)', () => {
  const resultCorrect = validateChallenge(55, '125');
  assert.equal(resultCorrect.isCorrect, true);
  assert.equal(resultCorrect.expected, 125);

  const resultWrong = validateChallenge(55, '55');
  assert.equal(resultWrong.isCorrect, false);
});

test('formatLKMReport outputs comprehensive markdown/text report', () => {
  const mockState: LKMState = {
    identity: {
      namaKelompok: 'Kelompok Gurindam 12',
      kelas: 'Kelas VIII-B',
      hariTanggal: '20/10/2026',
      namaAnggota: 'Siti Rahma, Ahmad Fauzan, Raja Irman',
    },
    activity1: {
      angle: 60,
      notes: 'Langkah serong penari membentuk sudut 60 derajat yang rapi dan serempak.',
      isSaved: true,
    },
    activity2: {
      baseAngle: 72,
      inputBertolakBelakang: '72',
      inputBerpelurus: '108',
      isChecked: true,
      isCorrect: true,
    },
    activity3: {
      formationId: 'saf-sejajar',
      customFormationNotes: 'Pola saf sejajar dengan 8 penari dibagi 2 baris.',
      isSaved: true,
    },
    challenge: {
      baseAngle: 55,
      inputSepihak: '125',
      reasoning: 'Karena sudut dalam sepihak berjumlah 180°, maka 180° - 55° = 125°.',
      isChecked: true,
      isCorrect: true,
    },
    reflection: {
      q1: 'Sudut bertolak belakang karena nilainya selalu sama.',
      q2: 'Sangat membantu karena terlihat aplikasinya di panggung.',
      q3: 'Tari Boria mengajarkan kekompakan dan syair nasihat leluhur.',
    },
  };

  const report = formatLKMReport(mockState);
  assert.match(report, /Kelompok Gurindam 12/);
  assert.match(report, /125°/);
  assert.match(report, /Siti Rahma/);
});
