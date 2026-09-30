export const ACTIVE_TICKET = {
  pnr: 'DP-2025-88219',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCoKnkqf45vrv4Lj5u2IBLJxFrYSHsDNyr7vEoDSR3v6pybKwsnUFZkhOAITv_RSkrVpxszBf3Rj3h8Np9bYcbFWG1zrA7ByOsE-_aENuwjQQJe0Lb9b475a0nNYDsB4tJp1CIfWBZ7w0g6OTPTgW-n-Ze1kVeqgKYrKanbcGrdnKXOT2_0TFSVdZfC903NSGgpCUdo1UDHxYX14jBZBvKeOwbm7uLVX6VJcPq0diUqIH1XyNlitiF2',
  badge: 'UNESCO Global Geopark',
  category: 'Taman Wisata Alam',
  name: 'Kawah Ijen Geopark & Blue Fire Experience',
  location: 'Banyuwangi - Bondowoso, Jawa Timur',
  date: 'Sabtu, 28 Jun 2025',
  slot: 'Slot: 02:00 - 08:00 WIB',
  guests: '3 Orang (Dewasa)',
  entryPoint: 'Pos Paltuding',
  entryLane: 'Jalur Antrean Gate A',
  guide: 'Hendra Setiawan',
  guideLicense: 'Lisensi: HPI-IJN-0419',
  hash: 'ID-HASH: 8bfa9...40e2',
  validity: 'Validitas: 5 Jam Lagi',
}

export const UPCOMING_TICKETS = [
  {
    pnr: 'DP-2025-99401',
    icon: 'museum',
    name: 'Taman Hutan Raya Juanda - Dago Pakar',
    badge: 'Minggu Depan',
    detail: 'Slot: Minggu, 06 Juli 2025 • 2 Tiket Terusan Goa Jepang & Belanda',
  },
]

export interface HistoryItem {
  id: string
  invoice: string
  image: string
  name: string
  date: string
  dateSort: number
  detail: string
  category: 'budaya' | 'alam'
  rating?: number
}

export const HISTORY: HistoryItem[] = [
  {
    id: 'prambanan',
    invoice: 'INV-PBN-7712',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBor-Ddr3_HwzuQZOuY54QZyhG6dAzrD0wzDVrpD71fnOgbS9Q-OREFDoiq3l6zkeWXVZDj8M-FZbsvOwDvNuxL025ul0iyd7cp2ISQxnAG9wQYJH0Ti_83pRQvX1yQr5smSh9gExMMMrdpJ4ORCwpGWvbVH78qC20ddT0sIwP3BcHDpdgUlwp7H864VKJ5K3VRQTNCtU0Bxoyd-xQYxsOmlZ5ylRiu0jwEOMJV0qbLakBTYNoZpyJU',
    name: 'Candi Prambanan Heritage Pass & Sendratari',
    date: '12 Mei 2025',
    dateSort: 20250512,
    detail: '2 Pengunjung',
    category: 'budaya',
    rating: 5,
  },
  {
    id: 'pandawa',
    invoice: 'INV-PDW-3301',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9FVmeqoHLGuQc0s_fVUwLzgwERrgSSLfmWj0_wyPJAs05hG70DIFHlI0JrkZWAxqeS8YAgprum4CEns-yFMglHrEha8_ZhPGGczZy-cuIsE_JpqBbLrWYcdvqlfu6uEqRE3uhN0_RIaF9joLDzGF_xGuGQVrf_dIgGgw7loAIqjmNeFRtD_oaXIp3XwgnaLVtxGzSLMUrTVHS4tMKaDZaJzWHtsCSxUR9xCDV2YU_MGelYL0PPv_j',
    name: 'Pantai Pandawa & Kawasan Tebing Kapur',
    date: '04 Februari 2025',
    dateSort: 20250204,
    detail: '4 Pengunjung + Parkir Bus',
    category: 'alam',
  },
]

export const HISTORY_FILTERS = [
  { value: 'all', label: 'Terbaru (2025 - 2024)' },
  { value: 'budaya', label: 'Destinasi Budaya' },
  { value: 'alam', label: 'Wisata Alam' },
] as const

export const GEAR_CHECKLIST = [
  'Surat Keterangan Sehat dokter (maksimal 3 hari).',
  'Sepatu trekking beralas gerigi non-slip.',
  'Jaket tebal penahan angin dan sarung tangan wol.',
  'E-Ticket QR Code aktif (telah diunduh offline).',
]
