/* ================================================================
   ✏️  CONFIG.JS — FILE KONFIGURASI PORTOFOLIO
   ================================================================
   Halo! File ini adalah SATU-SATUNYA file yang perlu kamu ubah.
   Ikuti petunjuk di setiap bagian, lalu simpan dan refresh browser.
   Jangan ubah file lain kecuali kamu sudah paham JavaScript.
   ================================================================ */


/* ----------------------------------------------------------------
   👤 PROFIL UTAMA
   Ubah nama, tagline, deskripsi, dan info pribadimu di sini.
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
  name:       "Anandita Galuh Sekar Kinanti",   // Nama lengkap kamu
  initials:   "AGSK",                  // 2 huruf inisial (untuk logo & avatar)
  tagline:    "Frontend & UI/UX Designer", // Kalimat singkat di bawah nama
  greeting:   "Halo, saya",          // Kata sapaan sebelum nama besar
  bio: [
    // Paragraf pertama tentang kamu (boleh diedit bebas)
    `Saya adalah seorang siswi SMK jurusan <strong>Rekayasa Perangkat Lunak</strong> yang memiliki minat dalam
    pengembangan web dan UI/UX Design. Saya senang mempelajari hal-hal baru, mengembangkan kemampuan pemrograman,
    cara merancang antarmuka yang sederhana, menarik, dan mudah digunakan, serta membuat proyek yang dapat memberikan pengalaman belajar yang bermanfaat.`,
    // Paragraf kedua (teknologi yang kamu pakai)
    `Dalam mengembangkan proyek, saya menggunakan <strong>HTML, CSS, JavaScript</strong> sebagai teknologi utama untuk membangun antarmuka website serta menggabungkan prinsip UI/UX Design. Saya juga memanfaatkan <strong>Github</strong> sebagai media penyimpanan proyek dan <strong>Google Drive</strong> untuk berbagi hasil pekerjaan.`,
  ],

  // Info detail di kartu about
  location:   "Malang, Jawa Timur",
  education:  "SMKS Brantas Karangkates — RPL",
  focus:      "Frontend & UI/UX Designer",
  languages:  "Indonesia, English",

  // Status badge di hero & about (ganti teks sesuai kondisimu)
  status:     "Murid SMKS Brantas Karangkates — 2026",   // contoh: "Sedang Sekolah" / "Open to Projects"
  statusOpen: true,    // true = titik hijau (aktif), false = titik merah

  // Link tombol "Unduh CV" — ganti dengan path file CV kamu
  cvLink:     "files/CV_Anandita Galuh Sekar Kinanti",     // contoh: "file/cv-rizky.pdf"
};


/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   Angka yang muncul di bagian bawah hero dengan animasi counter.
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
  { number: 6,   label: "Proyek"    },
  { number: 0,    label: "Tahun pengalaman" },
  { number: 0,   label: "Klien"     },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   Ganti nilai "url" dengan link profilmu. Kosongkan ("") untuk sembunyi.
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
  email:     "ananditaaa2010@gmail.com",
  instagram: "https://www.instagram.com/ananditagaluh?igsh=MWJrYzZyZmdkZHZldg==",   // kosongkan "" untuk sembunyikan
  github:    "https://github.com/ananditaaa2010-a11y",
  linkedin:  "https://www.linkedin.com/in/anandita-galuh-sekar-kinanti-6063b2384?trk=contact-info",
  twitter:   "",   // kosongkan "" untuk sembunyikan
};


/* ----------------------------------------------------------------
   🛠️  KEAHLIAN (SKILLS)
   Tambah / hapus skill sesuai kemampuanmu.
   Skill bar: nilai 0–100 (persentase kemampuan).
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  categories: [
    {
      icon:   "fa-solid fa-desktop",
      title:  "Frontend",
      tags:   ["HTML5", "CSS3", "JavaScript"],
    },
    {
      icon:   "fa-solid fa-wrench",
      title:  "Tools & Others",
      tags:   ["GitHub", "Figma", "VS Code"],
    },
  ],

  bars: [
    { name: "Frontend Development", pct: 88},
    { name: "UI / UX Design",       pct: 90 },
  ],
};


/* ----------------------------------------------------------------
   💼 PROYEK
   Tambah proyek baru dengan menambah blok { ... } di bawah.
   category harus salah satu dari: "Web App" / "Mobile" / "Game" / "Web"
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
  {
    title:    "Sistem Informasi Universitas",
    desc:     "Website sederhana yang berisi informasi Universitas Atma Jaya Yogyakarta.",
    tags:     ["HTML", "CSS"],
    category: "Web",
    img : "../img/univ.jpg",
    scale: "0.85",
    fit:"contain",
    link:     "https://drive.google.com/drive/folders/169R3fSfCAHkVx097qVUEvLi55mTc7g70?usp=drive_link",   // ganti dengan URL proyekmu
  },
  {
    title:    "Website Produk JCO Donuts",
    desc:     "Website sederhana yang berisi tentang sebuah penjualan produk yaitu JCO Donuts.",
    tags:     ["HTML", "CSS"],
    category: "Web App",
    img: "../img/logo baru.png",
    scale: "0.85",
    fit:"contain",
    link:     "https://drive.google.com/drive/folders/169R3fSfCAHkVx097qVUEvLi55mTc7g70?usp=drive_link",
  },
  {
    title:    "Python",
    desc:     "Bahasa python di projek ini digunakan untuk mengembangkan web(server), pengembangan perangkat lunak, matematika dan system scripting.",
    tags:     ["Python"],
    category: "Bahasa Pemrograman Dasar",
    img:"../img/python.jpg",
    scale: "0.85",
    fit:"contain",
    link:     "https://drive.google.com/drive/folders/18nZtpMi1cFNg-g_ThQcgp08iBDadSXhM?usp=drive_link",
  },
  {
    title:    "Design Landing-page Figma",
    desc:     "Desain landing-page.",
    tags:     ["Figma"],
    category: "Design Web",
    img:"../img/landing.jpg",
    scale: "0.85",
    fit:"contain",
    link:     "https://www.figma.com/design/hwiHotD2EtEFiHTnz7G6wJ/E-Commerce-Design?node-id=0-1&t=tHgj5ebnapz78nLI-1",
  },
   {
    title:    "Design web Batik Khas Yogyakarta Figma",
    desc:     "Desain website toko atau E-commerce melalui Figma.",
    tags:     ["Figma"],
    category: "Design Web",
    img:"../img/batikbaru.jpg",
    scale: "0.85",
    fit:"contain",
    link:     "https://docs.google.com/document/d/1IXtKdZZeUXmvzTJlvwLknqLplPBPV6nUzIAECFkfMEw/edit?usp=sharing",
  },
     {
    title:    "Website E-Commerce",
    desc:     "Website sederhana yang berisi produk penjualan.",
    tags:     ["HTML", "CSS", "JavaScript"],
    category: "Web",
    img : "../img/univ.jpg",
    scale: "0.85",
    fit:"contain",
    link:     "https://www.figma.com/design/hwiHotD2EtEFiHTnz7G6wJ/E-Commerce-Design?node-id=0-1&t=AgTP4Hqli09JAkjF-1
",   // ganti dengan URL proyekmu
  },
];


/* ----------------------------------------------------------------
   🎨 WARNA TEMA  (opsional — skip jika tidak mau ubah)
   Ganti kode warna hex sesuai selera.
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  accent:  "#9800c2",   // warna utama (ungu)
  accent2: "rgba(63, 132, 250, 0.35)",   // warna kedua (pink)
};
