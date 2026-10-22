/**
 * ============================================================
 *  SATU-SATUNYA FILE YANG PERLU KAMU EDIT UNTUK MENGGANTI KONTEN
 *  Semua data di bawah adalah CONTOH. Ganti dengan data aslimu.
 * ============================================================
 */

export const siteConfig = {
  name: "Alya Putri Wijaya",
  initials: "AW",
  role: "Business Graduate · Marketing & Digital Business",
  title: "Alya Putri Wijaya — Marketing & Business Strategist",
  description:
    "Portofolio Alya Putri Wijaya, lulusan Bisnis Digital yang menjembatani strategi dan data: riset pasar, brand strategy, dan analitik untuk pertumbuhan bisnis yang terukur.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "alya.wijaya@email.com",
  location: "Surabaya, Indonesia",
  keywords: [
    "portofolio bisnis",
    "marketing strategist",
    "digital marketing",
    "brand strategy",
    "market research",
    "data analytics",
    "fresh graduate bisnis",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/username",
    instagram: "https://www.instagram.com/username",
    whatsapp: "https://wa.me/6281234567890",
  },
};

export const hero = {
  badge: "Terbuka untuk peluang karier 2026",
  headingTop: "Bridging Strategy",
  headingAccent: "& Data",
  description:
    "Saya membantu brand mengubah riset menjadi keputusan, dan keputusan menjadi pertumbuhan yang terukur. Lulusan Bisnis Digital dengan fokus pada marketing strategy dan analitik.",
};

export const metrics = [
  { value: 10, suffix: "+", label: "Campaigns Delivered", note: "Lintas industri & skala" },
  { value: 3, suffix: " Yrs", label: "Hands-on Experience", note: "Magang, freelance, organisasi" },
  { value: 15, prefix: "Rp", suffix: "M+", label: "Revenue Generated", note: "Dari kampanye yang dikelola" },
  { value: 4.8, decimals: 1, suffix: "x", label: "Average ROAS", note: "Pada campaign berbayar" },
];

export const expertise = {
  marketResearch: {
    title: "Market Research",
    description:
      "Dari survei, wawancara, hingga competitor audit. Saya mengubah data mentah menjadi insight yang bisa langsung diputuskan.",
    methods: ["Consumer Survey", "In-depth Interview", "Competitor Audit", "TAM / SAM / SOM", "Persona & JTBD"],
  },
  brandStrategy: {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, dan identitas yang konsisten, dirancang agar brand terasa berbeda dan layak dipercaya.",
    points: ["Positioning & Messaging", "Go-to-Market Plan", "Content Architecture"],
  },
  dataAnalytics: {
    title: "Data Analytics",
    description: "Dashboard dan analisis untuk mengukur apa yang benar-benar menggerakkan bisnis.",
    points: ["Funnel & Cohort", "A/B Testing", "KPI Dashboard"],
  },
  tools: {
    title: "Toolkit",
    items: ["Google Analytics 4", "Looker Studio", "Excel / Sheets", "SQL", "Meta Ads", "Google Ads", "Figma", "Notion"],
  },
  philosophy: {
    quote: "Strategi tanpa data adalah opini. Data tanpa strategi hanyalah angka.",
  },
};

export type Category = "Marketing" | "Analytics" | "Strategy" | "Research";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: Category;
  year: string;
  role: string;
  summary: string;
  problem: string;
  strategy: string[];
  results: { label: string; value: string }[];
  resultNote: string;
  tools: string[];
}

export const categories: Category[] = ["Marketing", "Analytics", "Strategy", "Research"];

export const caseStudies: CaseStudy[] = [
  {
    slug: "fnb-digital-launch",
    title: "Peluncuran Digital Brand Kopi Lokal",
    client: "Kopi Nusantara (UMKM F&B)",
    category: "Marketing",
    year: "2025",
    role: "Digital Marketing Lead",
    summary: "Membangun demand dari nol untuk brand kopi premium lewat kampanye omnichannel.",
    problem:
      "Brand baru dengan produk bagus namun nol brand awareness dan anggaran terbatas (Rp 25 juta). Penjualan 100% bergantung pada kunjungan toko fisik.",
    strategy: [
      "Memetakan 3 persona konsumen lewat survei 120 responden untuk menentukan segmen prioritas.",
      "Merancang konten edukasi 'kopi untuk pemula' di Instagram & TikTok sebagai pintu masuk organik.",
      "Menjalankan paid campaign bertahap: awareness → retargeting → conversion, dengan optimasi mingguan.",
      "Membangun program referral dan bundling untuk mendorong repeat purchase.",
    ],
    results: [
      { label: "Revenue (90 hari)", value: "Rp 420 jt" },
      { label: "ROAS", value: "5.2x" },
      { label: "Follower Growth", value: "+340%" },
      { label: "Repeat Purchase", value: "38%" },
    ],
    resultNote: "Penjualan online menjadi 62% dari total omzet dalam tiga bulan, dari sebelumnya nol.",
    tools: ["Meta Ads", "TikTok Ads", "GA4", "Canva"],
  },
  {
    slug: "ecommerce-funnel-analytics",
    title: "Optimasi Funnel E-commerce Fashion",
    client: "Atelier Lokal (E-commerce)",
    category: "Analytics",
    year: "2025",
    role: "Business Data Analyst (Intern)",
    summary: "Menemukan titik kebocoran funnel dan menaikkan konversi lewat eksperimen terstruktur.",
    problem:
      "Traffic naik 60% namun konversi stagnan di 1.1%. Tim tidak tahu di tahap mana calon pembeli berhenti.",
    strategy: [
      "Membangun funnel analysis di GA4 dan menemukan drop-off terbesar pada tahap checkout.",
      "Melakukan segmentasi cohort berdasarkan sumber traffic dan perangkat.",
      "Merancang 4 A/B test: ringkasan ongkir, guest checkout, urutan form, dan social proof.",
      "Menyusun dashboard Looker Studio untuk monitoring mingguan tim.",
    ],
    results: [
      { label: "Conversion Rate", value: "1.1% → 2.4%" },
      { label: "Checkout Drop-off", value: "-27%" },
      { label: "Incremental Revenue", value: "Rp 310 jt" },
      { label: "Waktu Pelaporan", value: "-70%" },
    ],
    resultNote: "Dua dari empat eksperimen menjadi standar permanen di situs.",
    tools: ["GA4", "Looker Studio", "SQL", "Google Sheets"],
  },
  {
    slug: "saas-go-to-market",
    title: "Go-to-Market Strategy Startup SaaS B2B",
    client: "Stokin (Startup Inventori)",
    category: "Strategy",
    year: "2024",
    role: "Strategy Associate",
    summary: "Merumuskan positioning dan jalur akuisisi pelanggan UMKM untuk produk SaaS baru.",
    problem:
      "Produk dipahami sebagai 'aplikasi stok biasa' dan sulit dibedakan dari kompetitor. Biaya akuisisi pelanggan terlalu tinggi.",
    strategy: [
      "Menganalisis 8 kompetitor untuk memetakan celah positioning.",
      "Mengubah narasi dari 'catat stok' menjadi 'cegah kerugian akibat stok mati'.",
      "Menyusun ICP dan playbook outreach untuk 3 vertikal UMKM.",
      "Menetapkan pricing tier berdasarkan willingness-to-pay dari 25 wawancara.",
    ],
    results: [
      { label: "CAC", value: "-41%" },
      { label: "Trial → Paid", value: "9% → 17%" },
      { label: "Pilot Customers", value: "64" },
      { label: "MRR (6 bulan)", value: "Rp 48 jt" },
    ],
    resultNote: "Positioning baru dipakai di seluruh materi sales dan website.",
    tools: ["Notion", "Figma", "HubSpot", "Excel"],
  },
  {
    slug: "gen-z-consumer-research",
    title: "Riset Perilaku Konsumen Gen Z",
    client: "Lembaga Riset Kampus",
    category: "Research",
    year: "2024",
    role: "Lead Researcher",
    summary: "Memetakan faktor keputusan beli skincare lokal di kalangan Gen Z kota besar.",
    problem:
      "Brand skincare lokal kesulitan memahami mengapa Gen Z lebih memilih produk impor meski harganya lebih tinggi.",
    strategy: [
      "Mendesain survei kuantitatif (n=312) dan 14 wawancara mendalam.",
      "Menganalisis data dengan regresi dan analisis tematik untuk menemukan driver utama.",
      "Merumuskan 4 segmen konsumen beserta pesan komunikasi yang relevan.",
    ],
    results: [
      { label: "Responden", value: "312" },
      { label: "Driver Utama", value: "Trust > Harga" },
      { label: "Segmen Teridentifikasi", value: "4" },
      { label: "Dipresentasikan ke", value: "3 brand" },
    ],
    resultNote: "Laporan dijadikan rujukan dalam pengembangan kampanye oleh dua brand mitra.",
    tools: ["SPSS", "Google Forms", "Excel", "Miro"],
  },
  {
    slug: "social-commerce-campaign",
    title: "Kampanye Social Commerce Musiman",
    client: "Rumah Batik Kita",
    category: "Marketing",
    year: "2023",
    role: "Campaign Manager",
    summary: "Memaksimalkan momentum Ramadan lewat kolaborasi kreator dan live selling.",
    problem:
      "Penjualan musiman bergantung pada diskon besar yang menggerus margin dan tidak membangun loyalitas.",
    strategy: [
      "Mengganti strategi diskon dengan nilai tambah: storytelling pengrajin dan bundling hadiah.",
      "Berkolaborasi dengan 12 micro-creator berbasis kecocokan audiens, bukan jumlah follower.",
      "Menjalankan 8 sesi live selling dengan skrip dan jadwal berbasis data jam ramai.",
    ],
    results: [
      { label: "Penjualan vs Tahun Lalu", value: "+186%" },
      { label: "Margin Kotor", value: "+9 pt" },
      { label: "Engagement Rate", value: "7.4%" },
      { label: "Pelanggan Baru", value: "2.100+" },
    ],
    resultNote: "Menjadi kampanye dengan margin tertinggi sepanjang sejarah brand tersebut.",
    tools: ["TikTok Shop", "Instagram", "Google Sheets", "CapCut"],
  },
];

export interface TimelineItem {
  type: "work" | "education";
  title: string;
  org: string;
  period: string;
  points: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Digital Marketing Specialist (Freelance)",
    org: "Berbagai UMKM & Startup",
    period: "2024 — Sekarang",
    points: [
      "Mengelola kampanye berbayar dengan total anggaran Rp 400 jt+.",
      "Membangun dashboard performa untuk 6 klien.",
    ],
  },
  {
    type: "work",
    title: "Business Data Analyst Intern",
    org: "Atelier Lokal",
    period: "Jan — Jun 2025",
    points: [
      "Menganalisis funnel dan menjalankan A/B test yang menaikkan konversi 2x.",
      "Mengotomatisasi laporan mingguan, menghemat 8 jam kerja per minggu.",
    ],
  },
  {
    type: "work",
    title: "Head of Marketing",
    org: "Himpunan Mahasiswa Bisnis",
    period: "2023 — 2024",
    points: [
      "Memimpin tim 15 orang dan menyelenggarakan 3 event dengan 1.500+ peserta.",
      "Menggalang sponsor senilai Rp 85 jt dari 12 perusahaan.",
    ],
  },
  {
    type: "education",
    title: "S1 Bisnis Digital",
    org: "Universitas Contoh Indonesia",
    period: "2021 — 2025",
    points: ["IPK 3.82 / 4.00, Cum Laude.", "Skripsi: Perilaku konsumen Gen Z pada social commerce."],
  },
  {
    type: "education",
    title: "Certified Professional",
    org: "Google Analytics · Meta Blueprint",
    period: "2023 — 2024",
    points: ["Google Analytics Certification.", "Meta Certified Digital Marketing Associate."],
  },
];

export const testimonials = [
  {
    quote:
      "Alya tidak hanya menyajikan angka, ia menerjemahkannya menjadi rekomendasi yang jelas. Setelah rekomendasinya diterapkan, konversi kami naik lebih dari dua kali lipat.",
    name: "Rina Kusuma",
    role: "Head of E-commerce",
    company: "Atelier Lokal",
  },
  {
    quote:
      "Jarang menemukan orang yang sama kuatnya di strategi dan eksekusi. Kampanye yang ia pimpin selesai tepat waktu, di bawah anggaran, dan melampaui target.",
    name: "Bayu Santoso",
    role: "Founder",
    company: "Kopi Nusantara",
  },
  {
    quote:
      "Riset yang ia susun rapi, tajam, dan langsung bisa dipakai tim kami. Cara ia mempresentasikan temuan ke manajemen sangat meyakinkan.",
    name: "Dr. Maya Pratiwi",
    role: "Dosen Pembimbing",
    company: "Universitas Contoh Indonesia",
  },
];
