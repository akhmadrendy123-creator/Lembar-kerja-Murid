import React from 'react';
import { Music, Users2, Shuffle, Info, Sparkles } from 'lucide-react';
import { MathView } from './MathView';
import { ScrollReveal } from './ScrollReveal';

export const CultureStorySection: React.FC = () => {
  return (
    <section id="section-budaya" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Bagian 1: Header & Sumber Akademis */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <div className="text-[11px] font-bold text-teal-800 uppercase tracking-widest font-cinzel">
                WARISAN BUDAYA PULAU PENYENGAT
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display">
                Kenali Keunikan Seni Tari Boria
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Tari Boria adalah tarian gembira khas Melayu dari Pulau Penyengat. Tarian ini dipimpin oleh
                seorang <strong className="text-slate-800 font-bold">Tukang Karang</strong> yang bernyanyi pantun dan syair nasihat,
                diikuti para penari berbusana kurung dan songket yang membawa tongkat hias. Gerakannya sangat
                kompak, melangkah maju, serong, dan berputar mengikuti hitungan irama yang teratur!
              </p>
            </div>

            <div className="lg:w-84 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/90 text-[11px] text-slate-600 shrink-0 shadow-2xs">
              <div className="font-bold text-amber-900 uppercase tracking-wider text-[10px] font-cinzel mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                SUMBER INSPIRASI PEMBELAJARAN:
              </div>
              <p className="italic font-medium text-slate-800">
                &quot;Ethnomathematics in Boria dance from Penyengat Island&quot;
              </p>
              <p className="text-slate-500 mt-1">
                Scesa, Febrian, &amp; Rahmatina (2023) • <span className="font-bold text-teal-800">Jurnal Gantang</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bagian 2: Integrasi Video YouTube & Kotak Pengamatan (FIXED CSS) */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Wrapper Video Absolut untuk memaksa rasio 16:9 */}
            <div className="lg:col-span-2 relative w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 pt-[56.25%] group">
              <iframe
                src="https://www.youtube.com/embed/ROd_jNU_K3M?rel=0&start=35"
                title="Pertunjukan Tari Boria Pulau Penyengat"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
              <div className="absolute top-4 left-4 pointer-events-none z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-900 shadow-md">
                  Video Amatan
                </span>
              </div>
            </div>

            <div className="lg:col-span-1 bg-teal-50 border border-teal-100 rounded-2xl p-5 sm:p-6 flex flex-col justify-center gap-4 shadow-sm">
              <div className="flex items-center gap-2 border-b border-teal-200/60 pb-3">
                <Info className="w-6 h-6 text-teal-600 shrink-0" />
                <h4 className="font-bold text-teal-900 text-lg">Fokus Pengamatan:</h4>
              </div>
              <ul className="list-disc list-outside text-sm text-teal-800 space-y-2.5 ml-4">
                <li>Amati posisi kaki penari saat jalan di tempat (apakah membentuk <strong>sudut siku-siku</strong>?).</li>
                <li>Perhatikan gerakan hormat dan ayunan tongkat (apakah membentuk <strong>sudut lancip</strong>?).</li>
                <li>Lihat bagaimana saf barisan diatur sejajar dan lurus (<strong>berpelurus 180°</strong>).</li>
              </ul>
              <div className="mt-2 bg-teal-600/10 p-3 rounded-lg text-xs text-teal-800 font-medium">
                * Tonton pertunjukan ini sebelum melanjutkan ke misi pencarian sudut di bawah!
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bagian 3: Visual Gambar Asli & 3 Kartu Konsep Budaya */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-xl group min-h-[380px] h-full flex flex-col justify-end bg-slate-950">
                <img
                  src="/assets/aistudio/Image_1_cda2bd4f.jpeg"
                  alt="Penari Boria memegang tongkat dengan keseragaman sudut"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"></div>

                <div className="absolute top-3 left-3 z-20 w-3 h-3 border-t-2 border-l-2 border-amber-400"></div>
                <div className="absolute top-3 right-3 z-20 w-3 h-3 border-t-2 border-r-2 border-amber-400"></div>

                <div className="relative z-10 p-6 text-white space-y-2">
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-300 font-cinzel">
                    HARMONI TONGKAT &amp; LANGKAH
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug font-serif-display">
                    Ayunan Tongkat Boria Bersudut Seragam
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    Lihatlah senyum ceria penari memegang tongkat dengan sudut kemiringan yang sama.
                    Keseragaman ini yang kita pelajari dalam geometri sudut sehadap!
                  </p>
                  <div className="pt-1 flex items-center gap-2 text-[11px] text-amber-300 font-mono-math">
                    <span>Sudut kemiringan serempak:</span>
                    <span className="px-1.5 py-0.5 rounded bg-black/60 border border-amber-400/30">
                      <MathView math="\theta_1 = \theta_2 = \theta_3" />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <ScrollReveal direction="right" delay={0.35}>
              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-800 border border-teal-200">
                      <Music className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif-display">1. Ketukan Irama</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-cinzel">
                      Putaran Arah &amp; Rotasi
                    </span>
                    <span className="text-[10px] font-mono-math px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      <MathView math="R_{(O, \theta)}" />
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Penari melangkah dalam hitungan 1 sampai 8. Pada hitungan ganjil (1, 3, 5, 7), penari memutar arah tubuh sehingga tercipta bukaan sudut serong yang serempak.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-800 border border-teal-200">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif-display">2. Jarak Seimbang</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-cinzel">
                      Dua Garis Sejajar
                    </span>
                    <span className="text-[10px] font-mono-math px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      <MathView math="k \parallel l" />
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Penari menjaga jarak sedepa (rentangan tangan) agar barisan depan dan belakang tidak bertabrakan dan selalu berada di garis yang sejajar rapi: jarak antara saf selalu ekuidistan (<MathView math="d_1 = d_2" />).
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.45}>
              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-teal-900 text-amber-200 border border-teal-800">
                      <Shuffle className="w-4 h-4 text-amber-300" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif-display">3. Formasi Garis Silang</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-gradient-to-r from-teal-800 to-teal-900 text-amber-200 border border-amber-400/30 font-cinzel">
                      Transversal Pemotong
                    </span>
                    <span className="text-[10px] font-mono-math px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      <MathView math="m \cap k, m \cap l" />
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dari barisan lurus, penari berpindah membentuk pola silang atau bentuk huruf V. Garis pergerakan ini memotong barisan seperti garis transversal yang memicu relasi sudut istimewa.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
};
