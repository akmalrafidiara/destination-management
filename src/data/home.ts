export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1UeSCWT37oB3VF0VHFbwt966ZKAX7h14DqaEK2R9QRJRBzdk4RG6V0fXbd7Er1U1CVqvlmrYUL3wsFEcJLLz3sdjbXmeCRIc9MxnMY1ukgS9m1iXA5vP4aDKIsdJC6O4p50e_oZKkpLl1nYxnVeePf3Chn16fywHlTGSoJMav_MlU7di8b-y-KO-HBj_XktsUobywVWDiRk1pWHAR_9mB2UHEISU43RTvQ0NCZS_CFDy7v9IScWYNrYIo4'

export const PROFILE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA71yBr53Tb1vnPL0e-nti4QOcoKbYBIL7vMARxrihAqC_LpDd7UK8HXcbkd4qlzeYXc9UoLjoT2JAk0ptTS-TLYR_p9SSnCB2P8MsNkuXMsCZA7Hsn1apvAy2oDUTEONfFvgy2pDLarua83Bz3H2KVoKpa7mmMCHpOsD7h8OkLGxNCd_endFPZCw6zvaHBBb2fgoVJmxLjQoARXoceXrTebKgpFxAg9HzmzoHOW47Vnkfhl3D0mPDi'

export const NAV_LINKS = [
  { label: 'Beranda', to: '/' },
  { label: 'Jelajah Destinasi', to: '/jelajah-destinasi' },
  { label: 'Tiket Saya', to: '/tiket-saya' },
  { label: 'Admin Workspace', to: '/admin-workspace' },
]

export const STATS = [
  { value: '1.2M+', title: 'Tiket Digital Terbit', note: 'Nir-antre QR gate pass', tone: 'text-primary' },
  { value: '99.98%', title: 'Akurasi Finansial', note: 'Rekonsiliasi auto multi-kanal', tone: 'text-secondary' },
  { value: '45+', title: 'Destinasi Terpadu', note: 'Cagar alam, cagar budaya & bahari', tone: 'text-on-surface' },
  { value: '<10d', title: 'Waktu Check-In Gerbang', note: 'Validasi scanner ultrasonik', tone: 'text-primary' },
]

export const VALUE_PROPS = [
  {
    icon: 'qr_code_scanner',
    title: 'Reservasi Tiket Instan',
    body: 'Eliminasi total antrean panjang loket fisik dengan barcode QR digital berenkripsi tinggi yang diverifikasi kurang dari 1 detik di turnstile gantry.',
    footLeft: 'Tanpa Cetak Fisik',
    footRight: 'Fast-track QR',
    footIcon: 'bolt',
    iconBg: 'bg-surface-container-high text-primary',
    footTone: 'text-primary',
  },
  {
    icon: 'account_balance_wallet',
    title: 'Otomasi Finansial & Kas',
    body: 'Rekonsiliasi perolehan tiket otomatis secara berjenjang antara pengelola, kas daerah, dan asuransi kecelakaan tanpa celah kebocoran manual.',
    footLeft: 'Audit Otomatis',
    footRight: 'Zero Leakage',
    footIcon: 'verified',
    iconBg: 'bg-secondary-fixed/40 text-secondary',
    footTone: 'text-secondary',
  },
  {
    icon: 'tune',
    title: 'Manajemen Kapasitas & Flora-Fauna',
    body: 'Algoritma kuota adaptif melindungi daya dukung lingkungan. Otomatis menutup reservasi ketika limit ambang ekologis harian tercapai.',
    footLeft: 'Proteksi Ekosistem',
    footRight: 'Dynamic Slot',
    footIcon: 'shield',
    iconBg: 'bg-surface-container-high text-primary',
    footTone: 'text-primary',
  },
  {
    icon: 'insights',
    title: 'Data Pengunjung Akurat',
    body: 'Visualisasi demografi, asal negara/domisili, dan durasi tinggal. Membantu dinas pariwisata menyusun kebijakan promosi berbasis bukti konkret.',
    footLeft: 'Kepatuhan UU PDP',
    footRight: 'Enkripsi 256-bit',
    footIcon: 'lock',
    iconBg: 'bg-surface-variant text-tertiary',
    footTone: 'text-tertiary',
  },
]

export interface Destination {
  name: string
  category: string
  description: string
  image: string
  imageAlt: string
  rating: string
  reviews: string
  filledPercent: number
  remaining: string
  price: string
}

export const DESTINATIONS: Destination[] = [
  {
    name: 'Kawah Ijen Geopark',
    category: 'Geopark & Konservasi',
    description:
      'Pesona api biru abadi dan danau kawah asam terbesar di dunia dengan kuota pendakian harian terkontrol.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD76xgQwharBFpb-7KSzXZGgkGh0kyqv2pbvdRAeWu5sKs2uAb-ez3H5jgVprAHI7-9I1zx-mHdSMqJRgmibKeuqqQ6Sx5xh4aEpuv2leqmFcJmG2EtXqopR1rwrgDbe42L9ccDweDIob4WGUgEo4EnaT1-25ssWmqKvEygVu0zdlsau11_iwPEUUX9DAIaLJDvmQ5IvoyqbLuUXIdsziXyMJ_m8a9Kb152Cb7eVzDF4uZyNnCemilO',
    imageAlt: 'Danau kawah asam Kawah Ijen berwarna toska dengan asap belerang saat matahari terbit',
    rating: '4.9',
    reviews: '1.4k',
    filledPercent: 88,
    remaining: '142 / 1.200 Orang',
    price: 'Rp 50.000',
  },
  {
    name: 'Taman Konservasi Bromo',
    category: 'Taman Nasional',
    description:
      'Lautan pasir vulkanik, savana Teletubbies, dan spot sunrise Bukit Cinta dengan sistem slot jeep terintegrasi.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPAUjfS5g0RAgp2p2XG4AH7Ek64E1nVVvsekqZZEC8nKq6XiFHtJ_CKhqwdz74geF9r_fd9hFrGYF5JbJO8D9jijrBJgl3W2C1ALsVMykOHZKMWLjqTRWzTm4wySi_vYqJ7hzECJwiLSINqZCz1cgWVCwbeAaAuf9TVT0FCWjRs_7ccYEjLuXm-nC9pztlBF43A-vp89oR3jXys-Vut1gRntjlxpmr7ET_dT-4MDGILM9cEYhdpd7R',
    imageAlt: 'Kawah Gunung Bromo dan Gunung Batok diselimuti kabut pagi',
    rating: '4.8',
    reviews: '3.8k',
    filledPercent: 54,
    remaining: '1.150 / 2.500 Orang',
    price: 'Rp 34.000',
  },
  {
    name: 'Bahari Karimunjawa',
    category: 'Wisata Bahari & Cagar',
    description:
      'Cagar biosfer laut tropis, penyelamatan hiu jinak, dan terumbu karang terjaga dengan reservasi dermaga kapal.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_fwR-vYRnrk7ChAd0opBZ7Fq2wJELQ2DFp9P_H7CmbD0GbPBud_P1SjehwTW2J7tY0x0sOjblQ9AluqfqiIclenotmG60t1KrwmV8LPZt5JHKAub4n36ChhsRorHdgUDBw9vbSRQJyks9xRt6i3syi7Q__IDhbYcrW6i3Oyo80_4BU3mBd4dB9hcsBi88NMQkN3NkAKwrS6H9dMp2--RurLFtz7yE57JSqAYIxA7a4ajI60sGsemy',
    imageAlt: 'Perairan dangkal toska Karimunjawa dengan perahu tradisional di atas terumbu karang',
    rating: '4.9',
    reviews: '890',
    filledPercent: 35,
    remaining: '420 / 650 Tiket',
    price: 'Rp 75.000',
  },
  {
    name: 'Candi Prambanan Heritage',
    category: 'Situs Warisan Dunia UNESCO',
    description:
      'Kompleks candi Hindu abad ke-9 termegah dengan integrasi tiket pertunjukan Ramayana Ballet malam hari.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1UOwQdqi0l6P8MR4EAstbxE0t-7wGtkPl24-hDtmVj4ssY6UX5J8SIABQB2Uhp9CRo9ZXt10F0qFwUDAWISNhaSADSKqM32eIZPQKtjUfTZRaVz9W1YbcfomM4Ah6wMPoYujWAOYpTRKDZIzH090Go1TTeaDcShElZH3J72adoMgkrIas6Nj_S1TXRAL-5XWq3L4IjaczFqHqFYweljZCyNgcOwvROCs_vQQBdvLXDz8AwiTuhfyD',
    imageAlt: 'Menara batu kompleks Candi Prambanan saat golden hour',
    rating: '4.9',
    reviews: '6.2k',
    filledPercent: 60,
    remaining: '1.820 / 4.500 Orang',
    price: 'Rp 50.000',
  },
]

export const TYPE_OPTIONS = [
  { label: 'Semua Tipe Wisata', keyword: '' },
  { label: 'Taman Nasional & Geopark', keyword: 'Geopark|Taman Nasional' },
  { label: 'Situs Heritage & Candi', keyword: 'Warisan' },
  { label: 'Wisata Bahari & Coral', keyword: 'Bahari' },
]

export interface SearchState {
  query: string
  date: string
  typeKeyword: string
}

export const FOOTER_LINKS = ['Kebijakan Privasi', 'Syarat Layanan', 'API Mitra', 'Dukungan Pengunjung']
