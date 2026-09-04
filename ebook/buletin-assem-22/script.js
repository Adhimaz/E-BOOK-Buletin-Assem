// ── CONFIG ──
const TOTAL_PAGES = 58;
const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `pages/page-${n}.jpg`;
});

// ── PHOTO HOTSPOT DATA ──
// Format: pageIndex (0-based) → array of hotspot zones
// Koordinat dalam persentase (%) dari ukuran halaman: { x, y, w, h, title, subtitle, desc, meta }
const photoHotspots = {
  // Halaman 2 (Editor & Contributor)
  1: [
    {
      x: 7,
      y: 7,
      w: 25,
      h: 20,
      title: "Adhimaz Surya Prasesa",
      subtitle: "Editor Buletin ASSEM Annual 2022",
      desc: "Anggota Divisi Fotografi 2021 UKM ASSEM yang bertanggung jawab sebagai editor dalam penerbitan Buletin ASSEM Annual perdana ini.",
      meta: "Editor · Divisi Fotografi 2021",
    },
    {
      x: 12,
      y: 33,
      w: 16,
      h: 11,
      title: "Syawalia Rahayu",
      subtitle: "Contributor Buletin ASSEM Annual 2022",
      desc: "Anggota Divisi Fotografi 2021 UKM ASSEM yang berkontribusi dalam proses penulisan dan dokumentasi dalam Buletin ASSEM Annual 2022.",
      meta: "Contributor · Divisi Fotografi 2021",
    },
    {
      x: 38,
      y: 33,
      w: 16,
      h: 11,
      title: "Serli",
      subtitle: "Contributor Buletin ASSEM Annual 2022",
      desc: "Anggota Divisi Fotografi 2021 UKM ASSEM yang berkontribusi dalam proses penulisan dan penyusunan konten Buletin ASSEM Annual 2022.",
      meta: "Contributor · Divisi Fotografi 2021",
    },
    {
      x: 63,
      y: 33,
      w: 16,
      h: 11,
      title: "Salsa Fathaturrahma",
      subtitle: "Contributor Buletin ASSEM Annual 2022",
      desc: "Anggota Divisi Fotografi 2021 UKM ASSEM yang berkontribusi dalam proses penulisan dan dokumentasi dalam Buletin ASSEM Annual 2022.",
      meta: "Contributor · Divisi Fotografi 2021",
    },
  ],

  // Halaman 8 (MISTIK — Malam Istimewa Tahunan Asik)
  7: [
    {
      x: 7,
      y: 14,
      w: 29,
      h: 29,
      title: "MISTIK 2022 — Malam Istimewa Tahunan Asik",
      subtitle: "Dies Natalis ke-12 UKM ASSEM",
      desc: "Perayaan Dies Natalis UKM ASSEM ke-12 yang bertajuk MISTIK (Malam IStimewa Tahunan asIK), diselenggarakan pada Senin 31 Januari 2022 di Teras Bumi Rempoah, Kecamatan Baturraden. Diisi dengan live music, dance perform, dan screening video dokumenter.",
      meta: "31 Januari 2022 · Teras Bumi Rempoah, Baturraden",
    },
    {
      x: 36,
      y: 14,
      w: 31,
      h: 29,
      title: "Suasana MISTIK 2022",
      subtitle: "Perayaan Bersama Anggota ASSEM",
      desc: "Suasana kebersamaan anggota UKM ASSEM dalam perayaan Dies Natalis ke-12. Acara diawali pembukaan oleh Helik Hermawan (Pembina) dan Krishna (Pelatih), dilanjutkan sambutan Ketua Umum Ikbal Galih Nur Pamungkas. Dan penampilan live music oleh band-band UKM ASSEM dalam rangkaian acara MISTIK. ",
      meta: "31 Januari 2022 · Teras Bumi Rempoah",
    },
  ],

  // Halaman 9 (MISTIK — foto kegiatan)
  8: [
    {
      x: 7,
      y: 29,
      w: 42,
      h: 20,
      title: "Jamm Session MISTIK 2022",
      subtitle: "Penampilan Live Music",
      desc: "Penampilan live music oleh band-band UKM ASSEM dalam rangkaian acara MISTIK. Menampilkan band Advoice, Widerstand, dan UBS UKM ASSEM.",
      meta: "31 Januari 2022 · Teras Bumi Rempoah",
    },
    {
      x: 48,
      y: 49,
      w: 45,
      h: 21,
      title: "Dance Perform MISTIK 2022",
      subtitle: "Penampilan Divisi Tari",
      desc: "Perform dance yang dibawakan oleh Angkatan 2020 dan Angkatan 2021 Divisi Dance UKM ASSEM sebagai salah satu rangkaian acara penutup MISTIK 2022.",
      meta: "31 Januari 2022 · Teras Bumi Rempoah",
    },
    {
      x: 6,
      y: 70,
      w: 43,
      h: 21,
      title: "Tasyakuran MISTIK 2022",
      subtitle: "Momen Kebersamaan",
      desc: "Momen tasyakuran dan kebersamaan seluruh anggota UKM ASSEM dalam merayakan hari kelahiran organisasi ke-12.",
      meta: "31 Januari 2022 · Teras Bumi Rempoah",
    },
  ],

  // Halaman 10 (Musyawarah Anggota)
  9: [
    {
      x: 40,
      y: 17,
      w: 32,
      h: 16,
      title: "Kepengurusan Baru ASSEM 2022",
      subtitle: "Hasil Musyawarah Anggota (MUSAM)",
      desc: "Foto bersama kepengurusan baru UKM ASSEM setelah pelaksanaan MUSAM pada 10 Februari 2022. Kepengurusan dipimpin Ivanda sebagai Ketua Umum, Virgiawan sebagai Wakil Ketua, dengan berbagai kepala divisi baru.",
      meta: "10 Februari 2022 · Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 11 (AVE — ASSEM Visual Exhibition)
  10: [
    {
      x: 29,
      y: 13,
      w: 33,
      h: 31,
      title: "Suasana AVE 2022",
      subtitle: "Assem Visual Exhibition",
      desc: "Sebanyak 10 mahasiswa bergabung dalam UKM ASSEM divisi Fotografi untuk mempelajari dan memberikan karya. Acara AVE dilaksanakan pada Sabtu 10 April 2022 di Universitas Amikom Purwokerto, menampilkan 40 karya terbaik foto dan film dari anggota muda angkatan 2021.",
      meta: "10 April 2022 · Universitas Amikom Purwokerto",
    },
    {
      x: 62,
      y: 13,
      w: 31,
      h: 31,
      title: "Poster AVE 2022",
      subtitle: "Assem Visual Exhibition — Photo & Film",
      desc: "Poster resmi acara AVE 2022 yang menampilkan jadwal kegiatan: Photo Exhibition pukul 08.00, Movie Screening pukul 14.00, dan Discussion with Movie Director.",
      meta: "10 April 2022 · Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 12 (AVE — foto)
  11: [
    {
      x: 9,
      y: 46,
      w: 39,
      h: 18,
      title: "Talk Show AVE 2022",
      subtitle: "Diskusi dengan Movie Director",
      desc: "Sesi diskusi talk show bersama director masing-masing film yang ditampilkan dalam AVE 2022. Menjadi ajang berbagi ilmu dan pengalaman antara pembuat film muda dengan penonton.",
      meta: "10 April 2022 · Universitas Amikom Purwokerto",
    },
    {
      x: 51,
      y: 66,
      w: 39,
      h: 18,
      title: "Pameran Fotografi AVE 2022",
      subtitle: "Photo Exhibition",
      desc: "Pengunjung menikmati pameran foto dari karya anggota muda UKM ASSEM angkatan 2021. Sebanyak 40 karya foto terbaik dipamerkan, mulai dari genre minimalis, alam, retro, dan street.",
      meta: "10 April 2022 · Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 13 (Pentas Tari)
  12: [
    {
      x: 14,
      y: 12,
      w: 62,
      h: 31,
      title: "Pentas Tari UKM ASSEM 2022",
      subtitle: "Perform Dance ASSEM 2022",
      desc: "Pentas tari perdana Divisi Tari UKM ASSEM setelah lama tidak ada pementasan, diselenggarakan pada Rabu 22 Juni 2022. Menampilkan 4 karya tari: Tari Gunung Sari, Tari Sabdo Pandito Ratu, Tari Endang, dan Tari Venomous Woman — kolaborasi antar anggota divisi Tari.",
      meta: "22 Juni 2022 · Perform Dance ASSEM",
    },
  ],

  // Halaman 14 (Pentas Tari — foto detail)
  13: [
    {
      x: 8,
      y: 7,
      w: 46,
      h: 22,
      title: "Tarian Sabdo Pandito",
      subtitle: "Perform Dance ASSEM 2022",
      desc: "Penampilan Tari Sabdo Pandito Ratu dengan koreografer Etikanur. Tari ini merupakan salah satu dari 4 karya yang dipersembahkan dalam Pentas Tari perdana Divisi Tari UKM ASSEM.",
      meta: "22 Juni 2022 · Divisi Tari UKM ASSEM",
    },
    {
      x: 40,
      y: 34,
      w: 51,
      h: 24,
      title: "Tarian Endang",
      subtitle: "Perform Dance ASSEM 2022",
      desc: "Penampilan Tari Endang dengan koreografer Etikanur, dibawakan oleh Melati, Etikanur, Dila, Dwifa, dan Tisa. Merupakan karya kolaborasi antar anggota Divisi Tari.",
      meta: "22 Juni 2022 · Divisi Tari UKM ASSEM",
    },
    {
      x: 8,
      y: 62,
      w: 53,
      h: 26,
      title: "Diskusi Publik Pentas Tari",
      subtitle: "Sesi Diskusi Pasca Pertunjukan",
      desc: "Diskusi publik pasca pentas yang dihadiri UKM dan Seniman dari Purwokerto. Menjadi forum untuk berbagi apresiasi, kritik, dan masukan. Momen penting terbentuknya forum tari di lingkungan UKM Purwokerto.",
      meta: "22 Juni 2022 · Divisi Tari UKM ASSEM",
    },
  ],

  // Halaman 15 (Peksima)
  14: [
    {
      x: 2,
      y: 10,
      w: 96,
      h: 22,
      title: "PEKSIMA 2022 — Pekan Seni Mahasiswa Amikom",
      subtitle: "Kompetisi Seni Universitas Amikom Purwokerto",
      desc: "PEKSIMA adalah ajang kompetisi seni bagi Universitas Amikom Purwokerto dengan 11 kategori lomba: poster, fotografi, komik strip, cerpen, lakon, puisi, baca puisi, menyanyi keroncong, dangdut, pop, dan seriosa. Dilaksanakan 6 Juni 2022.",
      meta: "6 Juni 2022 · Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 16 (Peksima — foto)
  15: [
    {
      x: 10,
      y: 6,
      w: 41,
      h: 19,
      title: "Lomba Kelompok Multimedia PEKSIMA 2022",
      subtitle: "Pameran Karya Fotografi & Poster",
      desc: "Peserta kelompok multimedia PEKSIMA 2022 menampilkan karya poster, fotografi, dan komik strip. Kelompok multimedia dijurikan oleh Kelvin.",
      meta: "6 Juni 2022 · Universitas Amikom Purwokerto",
    },
    {
      x: 52,
      y: 29,
      w: 38,
      h: 39,
      title: "Perform Lomba Musik PEKSIMA 2022",
      subtitle: "Kompetisi Kelompok Musik",
      desc: "Penampilan peserta pada kategori musik PEKSIMA 2022 yang meliputi menyanyi dangdut, pop, seriosa, dan keroncong. Kelompok Musik dijurikan oleh Bunga. Anggota ASSEM ada yang meraih juara 1, 2, dan 3.",
      meta: "6 Juni 2022 · Universitas Amikom Purwokerto",
    },
    {
      x: 10,
      y: 70,
      w: 41,
      h: 19,
      title: "Penyerahan Plakat PEKSIMA 2022",
      subtitle: "Penghargaan Pemenang",
      desc: "Upacara penyerahan plakat kepada para pemenang PEKSIMA 2022. Dari 11 lomba yang diadakan, ada peraih juara 1, 2, dan 3 yang berasal dari anggota UKM ASSEM.",
      meta: "6 Juni 2022 · Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 17 (Peksimida — Monolog)
  16: [
    {
      x: 51,
      y: 58,
      w: 27,
      h: 12,
      title: "Pentas Monolog PEKSIMIDA 2022",
      subtitle: "Balada Sumarah · Universitas Tidar, Magelang",
      desc: "Penampilan monolog berjudul 'Balada Sumarah' karya Tentrem Lestari yang dibawakan oleh Wiwi Susanti, anggota Divisi Teater UKM ASSEM. Mendapat nomer undi 21 dan meraih peringkat 8 dari 31 peserta.",
      meta: "10 September 2022 · Universitas Tidar, Magelang",
    },
    {
      x: 51,
      y: 73,
      w: 27,
      h: 14,
      title: "Tim Monolog UKM ASSEM",
      subtitle: "Tim PEKSIMIDA 2022",
      desc: "Tim monolog UKM ASSEM yang terdiri dari: Adam (Sutradara), Budi (Pelatih), Rizki, Abdul, Rofi (setting & properti), Dewi (make up & kostum), Zaki & Azka (lighting), dan Aziz (musik).",
      meta: "2022 · Divisi Teater UKM ASSEM",
    },
  ],

  // Halaman 18 (Peksimida — Tari Garapan)
  17: [
    {
      x: 53,
      y: 58,
      w: 20,
      h: 11,
      title: "Tim Tari Garapan PEKSIMIDA 2022",
      subtitle: "Tari Shima · ISI Surakarta",
      desc: "Tim tari garapan UKM ASSEM mewakili Universitas Amikom Purwokerto di PEKSIMIDA 2022 cabang tari. Penari: Tika, Melati, Dila, Dwifa. Koreografer: Tika. Tim musik: Agung, Resi, Aziz. Tim wardrobe: Hany, Dhea Candra. Tim setting: Firman, Fikri. Tim lighting: Azka.",
      meta: "14 September 2022 · Gedung Teater Besar ISI Surakarta",
    },
    {
      x: 54,
      y: 72,
      w: 20,
      h: 16,
      title: "Pentas Tari Shima",
      subtitle: "PEKSIMIDA 2022 · Cabang Tari",
      desc: "Penampilan tari garapan berjudul 'Shima' yang menceritakan seorang wanita yang trauma dengan kisah cintanya. Dipentaskan di Gedung Teater Besar ISI Surakarta. Ini adalah kali pertama Universitas Amikom Purwokerto mengikuti cabang lomba tari tingkat PEKSIMIDA.",
      meta: "14 September 2022 · Gedung Teater Besar ISI Surakarta",
    },
  ],

  // Halaman 19 (FISMA 2022)
  18: [
    {
      x: 22,
      y: 13,
      w: 34,
      h: 32,
      title: "Suasana Festival Seniman Muda (FISMA) 2022",
      subtitle: "Parade Band & Pertunjukan Seni",
      desc: "FISMA (Festival Seniman Muda) ke-7 diselenggarakan pada 17 Juli 2022 pukul 13.00–22.00 WIB di Universitas Amikom Purwokerto. Ada 5 band SMA/SMK, 6 band UKM-UKM, dan Guest Star BARAMANTRA & BUMBLEBEE. Diperuntukkan bagi pemuda kawasan Barlingmascakeb.",
      meta: "17 Juli 2022 · Universitas Amikom Purwokerto",
    },
    {
      x: 55,
      y: 13,
      w: 32,
      h: 32,
      title: "Poster FISMA 2022 — Senada Bersama",
      subtitle: "Festival Seniman Muda ke-7",
      desc: "Poster resmi FISMA 2022 bertema 'Senada Bersama'. Acara gratis HTM ini menampilkan Special Performance dari berbagai SMA/SMK dan UKM di Purwokerto beserta Guest Star BARAMANTRA.",
      meta: "17 Juli 2022 · HTM Gratis",
    },
  ],

  // Halaman 20 (FISMA — foto)
  19: [
    {
      x: 8,
      y: 6,
      w: 33,
      h: 16,
      title: "Penyerahan Sertifikat & Plakat FISMA 2022",
      subtitle: "Apresiasi untuk Para Performer",
      desc: "Momen penyerahan sertifikat dan plakat kepada para performer dan peserta FISMA 2022. Acara berjalan sukses dengan pengunjung yang memenuhi area meskipun sempat diguyur hujan.",
      meta: "17 Juli 2022 · FISMA 2022",
    },
    {
      x: 54,
      y: 36,
      w: 36,
      h: 17,
      title: "Penampilan Babar Blues — Guest Star FISMA 2022",
      subtitle: "Live Performance",
      desc: "Penampilan Guest Star Babar Blues yang memukau penonton FISMA 2022. Band ini menjadi salah satu daya tarik utama festival yang mengundang hingga ratusan penonton dari kawasan Barlingmascakeb.",
      meta: "17 Juli 2022 · FISMA 2022",
    },
    {
      x: 8,
      y: 68,
      w: 49,
      h: 23,
      title: "Suasana Malam FISMA 2022",
      subtitle: "Konser Malam Hari",
      desc: "Suasana konser FISMA 2022 di malam hari yang pecah dan semarak. Para penonton antusias menyaksikan penampilan demi penampilan dari berbagai band dan group seni.",
      meta: "17 Juli 2022 · Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 21 (Pentas Produksi #5 — Nayara)
  20: [
    {
      x: 7,
      y: 12,
      w: 60,
      h: 29,
      title: "Pentas Produksi #5 ASSEM — NAYARA",
      subtitle: "Teater Fantasi UKM ASSEM",
      desc: "Pentas Produksi ke-5 UKM ASSEM berjudul 'Nayara' bergenre fantasi, disutradarai Virgiawan dengan naskah karya Risqa. Dilaksanakan 1 Oktober 2022 pukul 19.30–20.30 WIB di Gedung Kesenian Soetedja. Pemain: Billi (Wira), Febi (Nayara), Ikbal (Raja), Debi (Dipa), Dimas (Cakra), Surya (Bartra), Matsnan (Danis), Falia (Syila), Diva & Amel & Tisa & Kana (Dayang).",
      meta: "1 Oktober 2022 · Gedung Kesenian Soetedja · HTM 10k",
    },
  ],

  // Halaman 22 (Pentas Produksi — foto)
  21: [
    {
      x: 11,
      y: 36,
      w: 32,
      h: 18,
      title: "Team Artistik Nayara",
      subtitle: "Pentas Produksi #5 UKM ASSEM",
      desc: "Tim artistik yang bekerja keras mempersiapkan setting dan properti panggung untuk Pentas Produksi #5 'Nayara'. Latihan rutin dilaksanakan setiap Senin sampai Minggu, pukul 09.00–15.00 dan 18.00–23.00 WIB selama 3 bulan.",
      meta: "2022 · Divisi Teater UKM ASSEM",
    },
    {
      x: 55,
      y: 36,
      w: 34,
      h: 17,
      title: "Pentas Wira & Nayara",
      subtitle: "Adegan Utama Pentas Produksi #5",
      desc: "Adegan utama antara Wira (diperankan Billi) dan Nayara (diperankan Febi) dalam pertunjukan teater fantasi 'Nayara'. Cerita unik antara dunia khayangan dengan bumi.",
      meta: "1 Oktober 2022 · Gedung Kesenian Soetedja",
    },
    {
      x: 7,
      y: 63,
      w: 39,
      h: 15,
      title: "Latihan Pentas Produksi #5",
      subtitle: "Proses Persiapan Nayara",
      desc: "Proses latihan Pentas Produksi #5 yang berlangsung selama 3 bulan. Latihan mencakup olah tubuh, olah vokal, dan olah mimik di sekretariat UKM ASSEM.",
      meta: "Juli–Oktober 2022 · Sekretariat UKM ASSEM",
    },
    {
      x: 55,
      y: 63,
      w: 34,
      h: 16,
      title: "Penonton Pentas Nayara",
      subtitle: "Antusiasme Penonton",
      desc: "Penonton yang memadati Gedung Kesenian Soetedja untuk menyaksikan Pentas Produksi #5 'Nayara'. Pertunjukan ini berhasil menghibur dan menghanyutkan penonton dalam cerita fantasi yang unik.",
      meta: "1 Oktober 2022 · Gedung Kesenian Soetedja",
    },
  ],

  // Halaman 24 (LDOA — foto)
  23: [
    {
      x: 14,
      y: 38,
      w: 33,
      h: 15,
      title: "Jurit Malam LDOA 2022",
      subtitle: "Malam Penuh Tantangan",
      desc: "Kegiatan jurit malam yang menjadi salah satu rangkaian LDOA 2022. Para peserta menghadapi berbagai tantangan dan rintangan di malam hari sebagai bagian dari pembentukan karakter organisasi.",
      meta: "Oktober 2022 · Bumi Perkemahan Kendalisada",
    },
    {
      x: 53,
      y: 38,
      w: 32,
      h: 15,
      title: "Jelajah Malam LDOA 2022",
      subtitle: "Eksplorasi Perkemahan",
      desc: "Kegiatan jelajah malam para peserta LDOA 2022 di area Bumi Perkemahan Kendalisada. Kegiatan ini membangun chemistry, keberanian, dan jiwa kepemimpinan para calon anggota muda.",
      meta: "Oktober 2022 · Bumi Perkemahan Kendalisada, Banyumas",
    },
    {
      x: 14,
      y: 66,
      w: 33,
      h: 15,
      title: "Pematerian Kesenian LDOA 2022",
      subtitle: "Pembekalan Ilmu Kesenian",
      desc: "Sesi pematerian kesenian dari berbagai divisi: Fotografi, Film, Musik, Tari, dan Teater. Peserta mendapat pembekalan ilmu dasar tentang berbagai bidang seni yang ada di UKM ASSEM.",
      meta: "Oktober 2022 · Bumi Perkemahan Kendalisada",
    },
    {
      x: 53,
      y: 66,
      w: 32,
      h: 15,
      title: "Api Unggun LDOA 2022",
      subtitle: "Momen Kebersamaan",
      desc: "Momen api unggun yang menjadi salah satu puncak kebersamaan dalam LDOA 2022. Anggota senior dan peserta berkumpul bersama dalam suasana hangat sambil berbagi cerita dan semangat berorganisasi.",
      meta: "Oktober 2022 · Bumi Perkemahan Kendalisada",
    },
  ],

  // Halaman 25 (AOS — Assem On Stage)
  24: [
    {
      x: 8,
      y: 13,
      w: 84,
      h: 39,
      title: "ASSEM ON STAGE 2022",
      subtitle: "Launching Album Kompilasi Divisi Musik",
      desc: "ASSEM On Stage (AOS) 2022 adalah launching album kompilasi UKM ASSEM Divisi Musik ke-3, dilaksanakan 26 November 2022 pukul 19.00–22.00 WIB di Basement Gedung 2 (Lama) Universitas Amikom Purwokerto. 5 band tampil: Winahans, Mouza ft Alamsyah, Widerstand, Advoice, Khusnul. Guest Star: Hydia. Pengunjung mencapai 500+ orang.",
      meta: "26 November 2022 · Basement Gedung 2 Lama, Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 26 (AOS — foto)
  25: [
    {
      x: 11,
      y: 50,
      w: 34,
      h: 16,
      title: "Perform Advoice — AOS 2022",
      subtitle: "Live Performance Band",
      desc: "Penampilan band Advoice dalam Assem On Stage 2022. Band ini melaunching 2 lagu baru dalam konser launching album kompilasi Divisi Musik UKM ASSEM ke-3.",
      meta: "26 November 2022 · AOS 2022",
    },
    {
      x: 55,
      y: 50,
      w: 33,
      h: 16,
      title: "Talkshow AOS 2022",
      subtitle: "Sesi Diskusi dengan Performer",
      desc: "Sesi talkshow interaktif bersama para performer di AOS 2022, membahas proses kreatif pembuatan lagu dari menentukan judul dan tema hingga building venue yang meriah.",
      meta: "26 November 2022 · AOS 2022",
    },
    {
      x: 11,
      y: 71,
      w: 34,
      h: 16,
      title: "Perform Mouza ft Alamsyah — AOS 2022",
      subtitle: "Live Performance",
      desc: "Penampilan Mouza ft Alamsyah yang melaunching 1 lagu baru dalam rangkaian AOS 2022. Suasana konser sangat pecah terutama saat Guest Star Hydia tampil.",
      meta: "26 November 2022 · AOS 2022",
    },
    {
      x: 55,
      y: 71,
      w: 33,
      h: 13,
      title: "Perform Guest Star Hydia — AOS 2022",
      subtitle: "Special Performance",
      desc: "Penampilan Guest Star Hydia yang memiliki tingkat kepopuleran sangat tinggi di Purwokerto. Kehadirannya membuat suasana konser semakin semarak dan pecah.",
      meta: "26 November 2022 · AOS 2022",
    },
  ],

  // Halaman 27 (Red Carpet)
  26: [
    {
      x: 7,
      y: 13,
      w: 64,
      h: 33,
      title: "RED CARPET 2022 — Get Up Show Up",
      subtitle: "Pameran & Pertunjukan Perdana Anggota Muda",
      desc: "Red Carpet adalah kegiatan seni pertama kalinya yang dibuat oleh anggota muda untuk mempersembahkan karya perdana mereka ke khalayak umum. Dilaksanakan 11 Desember 2022 di Basement Universitas Amikom Purwokerto pukul 18.30 WIB. Diketuai Razin. Menampilkan: 40 foto & 1 poster film (pameran), screening & live pemaparan dari 5 divisi.",
      meta: "11 Desember 2022 · Basement Universitas Amikom Purwokerto",
    },
  ],

  // Halaman 28 (Red Carpet — foto)
  27: [
    {
      x: 19,
      y: 6,
      w: 16,
      h: 17,
      title: "Pemaparan Fotografi — Red Carpet 2022",
      subtitle: "Karya Perdana Divisi Fotografi",
      desc: "Pemaparan karya fotografi oleh anggota muda Divisi Fotografi dalam Red Carpet 2022. Divisi fotografi memaparkan 2 foto terbaiknya dalam sesi live pemaparan di atas panggung.",
      meta: "11 Desember 2022 · Red Carpet ASSEM",
    },
    {
      x: 56,
      y: 6,
      w: 31,
      h: 12,
      title: "Pemaparan Tari — Red Carpet 2022",
      subtitle: "Karya Perdana Divisi Tari",
      desc: "Pemaparan tarian baru oleh anggota muda Divisi Tari dalam Red Carpet 2022. Divisi tari memaparkan tarian barunya secara live di panggung berukuran 7x7 meter.",
      meta: "11 Desember 2022 · Red Carpet ASSEM",
    },
    {
      x: 12,
      y: 30,
      w: 29,
      h: 11,
      title: "Pameran Foto — Red Carpet 2022",
      subtitle: "40 Karya Foto Terbaik",
      desc: "Pameran foto yang menampilkan 40 foto terbaik dan 1 poster film karya anggota muda UKM ASSEM. Konsep pameran menggunakan sketsel dan stand foto dengan konsep 'Get Up Show Up'.",
      meta: "11 Desember 2022 · Red Carpet ASSEM",
    },
    {
      x: 56,
      y: 27,
      w: 31,
      h: 13,
      title: "Pemaparan Teater — Red Carpet 2022",
      subtitle: "Karya Perdana Divisi Teater",
      desc: "Pemaparan teater baru oleh anggota muda Divisi Teater. Menjadi momen pertama anggota muda Divisi Teater menampilkan karya di hadapan publik.",
      meta: "11 Desember 2022 · Red Carpet ASSEM",
    },
    {
      x: 34,
      y: 64,
      w: 30,
      h: 12,
      title: "Penonton Red Carpet 2022",
      subtitle: "Antusiasme Pengunjung",
      desc: "Para penonton yang hadir menyaksikan Red Carpet 2022. Acara ini membuktikan bahwa anggota muda UKM ASSEM siap tampil dan bersinar dengan karya perdana mereka.",
      meta: "11 Desember 2022 · Red Carpet ASSEM",
    },
  ],

  // Halaman 29 (Kolom Karya — Daftar Fotografer)
  28: [
    {
      x: 6,
      y: 26,
      w: 30,
      h: 10,
      title: "Debi Irianto",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan karya-karyanya di Kolom Karya Buletin ASSEM 2022. Karya Debi dapat dilihat di halaman 25 buletin ini.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 35,
      y: 26,
      w: 30,
      h: 14,
      title: "Riska Isnaeni",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan karya-karyanya di Kolom Karya. Karya Riska antara lain: Equus Caballus dan Sekumpulan Transportasi Tradisional Tak Bermesin (halaman 28).",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 63,
      y: 26,
      w: 30,
      h: 10,
      title: "Syawalia Rahayu",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan 4 karya di Kolom Karya: 'The other side of the quiet', 'Being adult', 'We Are', dan 'Takdir'. Menggunakan Sony ILCE-6000, Canon EOS 750D, dan Canon EOS 70D.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 6,
      y: 39,
      w: 30,
      h: 10,
      title: "Primana Akmal Nurfozi",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang berkontribusi dalam Kolom Karya Buletin ASSEM Annual 2022.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 35,
      y: 39,
      w: 30,
      h: 14,
      title: "Salsa Fathaturrahma",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan karya: 'Teman perjalanan' (iPhone X) dan 'Spiders and their nests' (Canon EOS 70D). Juga berkontribusi sebagai contributor buletin ini.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 63,
      y: 39,
      w: 30,
      h: 10,
      title: "Arindia Nur Zahra",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan karya: 'Alam' dan 'Mengenang Pahlawan' menggunakan Canon EOS 700D. Karya-karyanya dapat dilihat di halaman 31 buletin.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 6,
      y: 52,
      w: 30,
      h: 10,
      title: "Silvia Putri Nur Fadila Hidayat",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan karya low-light photography: 'One point of light' dan 'Light in the midst of noise' menggunakan Vivo V2030.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 35,
      y: 53,
      w: 30,
      h: 14,
      title: "Wandri Maulid",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan karya: 'Tentang Senja' dan 'A path in nature' menggunakan Realme 3 Pro. Karyanya memiliki filosofi mendalam tentang keindahan alam.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 63,
      y: 52,
      w: 30,
      h: 10,
      title: "Serli",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM dan contributor buletin yang berkontribusi dalam Kolom Karya Buletin ASSEM Annual 2022.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 6,
      y: 65,
      w: 30,
      h: 10,
      title: "Wahyu Putra Pratama",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Fotografer UKM ASSEM yang menampilkan karya-karyanya di Kolom Karya Buletin ASSEM Annual 2022.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 35,
      y: 66,
      w: 30,
      h: 14,
      title: "Ade Firmansyah",
      subtitle: "Anggota Divisi Fotografi 2022",
      desc: "Fotografer angkatan 2022 UKM ASSEM yang berkontribusi dalam Kolom Karya Buletin ASSEM Annual 2022.",
      meta: "Divisi Fotografi 2022 · UKM ASSEM",
    },
    {
      x: 63,
      y: 65,
      w: 30,
      h: 10,
      title: "Adhimaz Surya Prasesa",
      subtitle: "Anggota Divisi Fotografi 2021",
      desc: "Editor Buletin ASSEM sekaligus fotografer yang menampilkan karya: 'Hemisphere' (Canon EOS 70D) dan 'CyberSpeed' (Canon EOS 600D) di halaman 43. Juga berperan sebagai Editor buletin perdana ini.",
      meta: "Divisi Fotografi 2021 · UKM ASSEM",
    },
    {
      x: 6,
      y: 79,
      w: 30,
      h: 10,
      title: "Atasya Khalilllah Marandita",
      subtitle: "Anggota Divisi Fotografi 2022",
      desc: "Fotografer angkatan 2022 UKM ASSEM yang menampilkan karya 'Apis Dorsata' dan 'Dandelion' menggunakan Canon PowerShot SX430 IS.",
      meta: "Divisi Fotografi 2022 · UKM ASSEM",
    },
    {
      x: 35,
      y: 79,
      w: 30,
      h: 14,
      title: "Salsa Iftinan Khairunnisa",
      subtitle: "Anggota Divisi Fotografi 2022",
      desc: "Fotografer angkatan 2022 UKM ASSEM yang berkontribusi dalam Kolom Karya Buletin ASSEM Annual 2022.",
      meta: "Divisi Fotografi 2022 · UKM ASSEM",
    },
    {
      x: 63,
      y: 79,
      w: 30,
      h: 10,
      title: "Nabil Panca Budhi Hizbullah",
      subtitle: "Anggota Divisi Fotografi 2022",
      desc: "Fotografer angkatan 2022 UKM ASSEM yang berkontribusi dalam Kolom Karya Buletin ASSEM Annual 2022.",
      meta: "Divisi Fotografi 2022 · UKM ASSEM",
    },
  ],

  // Halaman 57 (Gallery ASSEM)
  56: [
    {
      x: 7,
      y: 12,
      w: 43,
      h: 20,
      title: "Gallery UKM ASSEM",
      subtitle: "Amikom Seneng Seni & Musik",
      desc: "Foto Bersama UKM ASSEM — Amikom Seneng Seni & Musik, unit kegiatan mahasiswa Universitas Amikom Purwokerto yang bergerak di bidang seni dan musik.",
      meta: "UKM ASSEM · Universitas Amikom Purwokerto",
    },
    {
      x: 7,
      y: 32,
      w: 43,
      h: 20,
      title: "Gallery UKM ASSEM",
      subtitle: "Amikom Seneng Seni & Musik",
      desc: "Foto Bersama UKM ASSEM — Amikom Seneng Seni & Musik, unit kegiatan mahasiswa Universitas Amikom Purwokerto yang bergerak di bidang seni dan musik.",
      meta: "UKM ASSEM · Universitas Amikom Purwokerto",
    },
    {
      x: 7,
      y: 52,
      w: 43,
      h: 20,
      title: "Gallery UKM ASSEM",
      subtitle: "Amikom Seneng Seni & Musik",
      desc: "Foto Bersama UKM ASSEM — Amikom Seneng Seni & Musik, unit kegiatan mahasiswa Universitas Amikom Purwokerto yang bergerak di bidang seni dan musik.",
      meta: "UKM ASSEM · Universitas Amikom Purwokerto",
    },
    {
      x: 50,
      y: 12,
      w: 43,
      h: 20,
      title: "Gallery UKM ASSEM",
      subtitle: "Amikom Seneng Seni & Musik",
      desc: "Foto Bersama UKM ASSEM — Amikom Seneng Seni & Musik, unit kegiatan mahasiswa Universitas Amikom Purwokerto yang bergerak di bidang seni dan musik.",
      meta: "UKM ASSEM · Universitas Amikom Purwokerto",
    },
    {
      x: 50,
      y: 32,
      w: 43,
      h: 20,
      title: "Gallery UKM ASSEM",
      subtitle: "Amikom Seneng Seni & Musik",
      desc: "Foto Bersama UKM ASSEM — Amikom Seneng Seni & Musik, unit kegiatan mahasiswa Universitas Amikom Purwokerto yang bergerak di bidang seni dan musik.",
      meta: "UKM ASSEM · Universitas Amikom Purwokerto",
    },
    {
      x: 50,
      y: 52,
      w: 43,
      h: 20,
      title: "Gallery UKM ASSEM",
      subtitle: "Amikom Seneng Seni & Musik",
      desc: "Foto Bersama UKM ASSEM — Amikom Seneng Seni & Musik, unit kegiatan mahasiswa Universitas Amikom Purwokerto yang bergerak di bidang seni dan musik.",
      meta: "UKM ASSEM · Universitas Amikom Purwokerto",
    },
    {
      x: 28,
      y: 71,
      w: 43,
      h: 21,
      title: "Gallery UKM ASSEM",
      subtitle: "Amikom Seneng Seni & Musik",
      desc: "Foto Bersama UKM ASSEM — Amikom Seneng Seni & Musik, unit kegiatan mahasiswa Universitas Amikom Purwokerto yang bergerak di bidang seni dan musik.",
      meta: "UKM ASSEM · Universitas Amikom Purwokerto",
    },
  ],
};

// ── STATE ──
let currentPage = 0;
let doubleMode = false;
let isAnimating = false;
const STEP = () => (doubleMode ? 2 : 1);

const bookContainer = document.getElementById("bookContainer");
const pageInfo = document.getElementById("pageInfo");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbStrip = document.getElementById("thumbStrip");
const loading = document.getElementById("loadingOverlay");

// ── POPUP ──
let popupEl = null;

function createPopupEl() {
  const el = document.createElement("div");
  el.id = "photoPopup";
  el.innerHTML = `
    <div class="popup-inner">
      <button class="popup-close" id="popupClose">✕</button>
      <div class="popup-tag">📸 Foto</div>
      <h2 class="popup-title" id="popupTitle"></h2>
      <div class="popup-subtitle" id="popupSubtitle"></div>
      <div class="popup-divider"></div>
      <p class="popup-desc" id="popupDesc"></p>
      <div class="popup-meta" id="popupMeta"></div>
    </div>
  `;
  document.body.appendChild(el);
  el.addEventListener("click", (e) => {
    if (e.target === el) closePopup();
  });
  el.querySelector("#popupClose").addEventListener("click", closePopup);
  return el;
}

function openPopup(hotspot) {
  if (!popupEl) popupEl = createPopupEl();
  popupEl.querySelector("#popupTitle").textContent = hotspot.title;
  popupEl.querySelector("#popupSubtitle").textContent = hotspot.subtitle;
  popupEl.querySelector("#popupDesc").textContent = hotspot.desc;
  popupEl.querySelector("#popupMeta").textContent = hotspot.meta;
  popupEl.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePopup() {
  if (popupEl) popupEl.classList.remove("active");
  document.body.style.overflow = "";
}

// ── HOTSPOT OVERLAY ──
function buildHotspotOverlay(pageIdx, containerEl) {
  const hotspots = photoHotspots[pageIdx];
  if (!hotspots || hotspots.length === 0) return;

  hotspots.forEach((h) => {
    const zone = document.createElement("div");
    zone.className = "hotspot-zone";
    zone.style.cssText = `left:${h.x}%;top:${h.y}%;width:${h.w}%;height:${h.h}%;`;
    zone.title = h.title;
    zone.innerHTML = `<span class="hotspot-icon">🔍</span>`;
    zone.addEventListener("click", (e) => {
      e.stopPropagation();
      openPopup(h);
    });
    containerEl.appendChild(zone);
  });
}

// ── BUILD THUMBNAILS ──
function buildThumbs() {
  thumbStrip.innerHTML = "";
  pages.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "thumb" + (i === 0 ? " active" : "");
    div.dataset.idx = i;
    div.innerHTML = `<img src="${src}" loading="lazy" alt="hal ${i + 1}"><div class="thumb-num">${i + 1}</div>`;
    div.onclick = () => goToPage(i);
    thumbStrip.appendChild(div);
  });
}

// ── RENDER BOOK ──
function render() {
  bookContainer.innerHTML = "";

  if (doubleMode) {
    bookContainer.classList.add("double");
    [currentPage, currentPage + 1].forEach((idx, pos) => {
      const sp = document.createElement("div");
      sp.className = "static-page " + (pos === 0 ? "left" : "right");
      if (idx < TOTAL_PAGES) {
        sp.innerHTML = `<img src="${pages[idx]}" alt="Halaman ${idx + 1}" draggable="false">`;
        buildHotspotOverlay(idx, sp);
      } else {
        sp.style.background = "#f5f5f5";
      }
      bookContainer.appendChild(sp);
    });
  } else {
    bookContainer.classList.remove("double");
    const sp = document.createElement("div");
    sp.className = "static-page left";
    sp.style.width = "100%";
    sp.innerHTML = `<img src="${pages[currentPage]}" alt="Halaman ${currentPage + 1}" draggable="false">`;
    buildHotspotOverlay(currentPage, sp);
    bookContainer.appendChild(sp);
  }

  updateUI();
}

// ── FLIP ANIMATION ──
function flipForward() {
  if (isAnimating) return;
  const nextIdx = currentPage + STEP();
  if (nextIdx >= TOTAL_PAGES) return;

  if (!doubleMode) {
    isAnimating = true;
    animateSingleFlip("forward", () => {
      currentPage = nextIdx;
      render();
      isAnimating = false;
    });
    return;
  }

  isAnimating = true;
  const flipPage = document.createElement("div");
  flipPage.className = "page-scene";
  flipPage.style.left = "var(--page-w)";
  flipPage.style.transformOrigin = "left center";
  flipPage.style.zIndex = 20;

  const front = document.createElement("div");
  front.className = "page-face front";
  if (currentPage + 1 < TOTAL_PAGES)
    front.innerHTML = `<img src="${pages[currentPage + 1]}" draggable="false">`;

  const back = document.createElement("div");
  back.className = "page-face back";
  if (nextIdx < TOTAL_PAGES)
    back.innerHTML = `<img src="${pages[nextIdx]}" draggable="false">`;

  flipPage.appendChild(front);
  flipPage.appendChild(back);
  bookContainer.appendChild(flipPage);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      flipPage.classList.add("flipped");
      flipPage.style.transform = "rotateY(180deg)";
      setTimeout(() => {
        currentPage = nextIdx;
        render();
        isAnimating = false;
      }, 720);
    });
  });
}

function flipBackward() {
  if (isAnimating) return;
  const prevIdx = currentPage - STEP();
  if (prevIdx < 0) return;

  if (!doubleMode) {
    isAnimating = true;
    animateSingleFlip("backward", () => {
      currentPage = prevIdx;
      render();
      isAnimating = false;
    });
    return;
  }

  isAnimating = true;
  const flipPage = document.createElement("div");
  flipPage.className = "page-scene";
  flipPage.style.left = "0";
  flipPage.style.transformOrigin = "right center";
  flipPage.style.zIndex = 20;
  flipPage.style.transform = "rotateY(-180deg)";

  const front = document.createElement("div");
  front.className = "page-face front";
  if (currentPage < TOTAL_PAGES)
    front.innerHTML = `<img src="${pages[currentPage]}" draggable="false">`;

  const back = document.createElement("div");
  back.className = "page-face back";
  if (prevIdx < TOTAL_PAGES)
    back.innerHTML = `<img src="${pages[prevIdx]}" draggable="false">`;

  flipPage.appendChild(front);
  flipPage.appendChild(back);
  bookContainer.appendChild(flipPage);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      flipPage.style.transition =
        "transform 0.7s cubic-bezier(0.645,0.045,0.355,1)";
      flipPage.style.transform = "rotateY(0deg)";
      setTimeout(() => {
        currentPage = prevIdx;
        render();
        isAnimating = false;
      }, 720);
    });
  });
}

function animateSingleFlip(dir, cb) {
  const overlay = document.createElement("div");
  overlay.style.cssText = `position:absolute;inset:0;background:rgba(0,0,0,0);z-index:30;transition:background 0.35s;pointer-events:none;`;
  bookContainer.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.style.background = "rgba(0,0,0,0.4)";
    setTimeout(() => {
      overlay.style.background = "rgba(0,0,0,0)";
      cb();
    }, 350);
  });
}

// ── NAVIGATION ──
function nextPage() {
  flipForward();
}
function prevPage() {
  flipBackward();
}

function goToPage(idx) {
  currentPage = doubleMode ? (idx % 2 === 0 ? idx : idx - 1) : idx;
  if (currentPage < 0) currentPage = 0;
  render();
  updateThumb();
  scrollThumbIntoView();
}

// ── UI UPDATE ──
function updateUI() {
  const displayLeft = currentPage + 1;
  const displayRight = doubleMode
    ? Math.min(currentPage + 2, TOTAL_PAGES)
    : currentPage + 1;

  if (doubleMode && currentPage + 1 < TOTAL_PAGES) {
    pageInfo.innerHTML = `Hal <span>${displayLeft}–${displayRight}</span> / <span>${TOTAL_PAGES}</span>`;
  } else {
    pageInfo.innerHTML = `Hal <span>${displayLeft}</span> / <span>${TOTAL_PAGES}</span>`;
  }

  const progress = ((currentPage + (doubleMode ? 2 : 1)) / TOTAL_PAGES) * 100;
  progressFill.style.width = Math.min(progress, 100) + "%";

  prevBtn.disabled = currentPage <= 0;
  nextBtn.disabled = currentPage + STEP() >= TOTAL_PAGES;
  updateThumb();
}

function updateThumb() {
  document.querySelectorAll(".thumb").forEach((t) => {
    const i = parseInt(t.dataset.idx);
    t.classList.toggle(
      "active",
      i === currentPage || (doubleMode && i === currentPage + 1),
    );
  });
}

function scrollThumbIntoView() {
  const active = thumbStrip.querySelector(".thumb.active");
  if (active)
    active.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
}

// ── TOGGLE VIEW ──
function toggleView() {
  doubleMode = !doubleMode;
  document.getElementById("viewIcon").textContent = doubleMode ? "📖" : "📄";
  document.getElementById("viewLabel").textContent = doubleMode
    ? "2 Halaman"
    : "1 Halaman";
  if (doubleMode && currentPage % 2 !== 0) currentPage--;
  render();
}

// ── TOGGLE THUMBS ──
function toggleThumbs() {
  thumbStrip.classList.toggle("visible");
  document.getElementById("btnThumb") &&
    document.getElementById("btnThumb").classList.toggle("active");
  if (thumbStrip.classList.contains("visible")) scrollThumbIntoView();
}

// ── FULLSCREEN ──
function toggleFullscreen() {
  const overlay = document.getElementById("fullscreenOverlay");
  overlay.classList.add("active");
  document.getElementById("fullscreenImg").src = pages[currentPage];
}
function closeFullscreen() {
  document.getElementById("fullscreenOverlay").classList.remove("active");
}

// ── KEYBOARD ──
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") nextPage();
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevPage();
  if (e.key === "Escape") {
    closeFullscreen();
    closePopup();
  }
  if (e.key === "f" || e.key === "F") toggleFullscreen();
});

// ── TOUCH SWIPE ──
let touchStartX = 0;
document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    dx < 0 ? nextPage() : prevPage();
  }
});

// ── CLICK ON BOOK HALVES (non-hotspot) ──
bookContainer.addEventListener("click", (e) => {
  if (e.target.closest(".hotspot-zone")) return;
  const rect = bookContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if (x < rect.width / 2) prevPage();
  else nextPage();
});

// ── DROPDOWN MENU ──
function toggleMenu() {
  document.getElementById("headerMenu").classList.toggle("open");
}
function closeMenu() {
  document.getElementById("headerMenu").classList.remove("open");
}
document.addEventListener("click", (e) => {
  const menu = document.getElementById("headerMenu");
  if (menu && !menu.contains(e.target)) closeMenu();
});

// ── INIT ──
function init() {
  buildThumbs();
  render();
  pages.slice(0, 6).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
  setTimeout(() => {
    loading.classList.add("hidden");
    setTimeout(() => (loading.style.display = "none"), 500);
  }, 800);
}

init();
