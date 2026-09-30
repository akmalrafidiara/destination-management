export const MAP_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDwYEs-U5FsQYH9oLJ8RAcalVVQCMO5J1ir8v3XgRlJHihE2sDPWA7wD-furNiamYqfacqwycGpL2PWCSHn6xzE5bSqGiDU0xNlkbquk6YjGK9EUwNj2Kuo9nQlCQDfVYHhYwoLtTZKMWSQ3AOABtySjz_JuJb5NdFcxhMPaTTdVZ03ujKNg1-ls26vQ6iklS_LVlfEGDye00rFDbXcf3ZowsB6h7dvURjQPA4DQsaEr1z0W5AgWrsO'

export type RegionKey = 'all' | 'jatim' | 'jabar' | 'diy' | 'jateng' | 'sumut' | 'kaltim'

export interface ExploreDestination {
  id: string
  name: string
  image: string
  imageAlt: string
  category: string
  tag: string
  region: Exclude<RegionKey, 'all'>
  regionLabel: string
  gateNote: string
  hours: string
  status: 'open' | 'limited'
  rating: number
  reviews: number
  location: string
  capacityLabel: string
  remaining: number
  filledPercent: number
  price: number
  priceLabel: string
  priceUnit: string
}

export const EXPLORE_DESTINATIONS: ExploreDestination[] = [
  {
    id: 'bromo',
    name: 'Bromo Sunrise Park',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrmTu_cRhPmpOqyGHNr946yWQb9lccn-hI2SRfk0-9yUopHXdRr__8XTeYYFEKIQzXM44Ls4ptJ9XMOUVTvMzLz_OLU3xstsEZmo3UKDl8v6EAexYZJgq-DWyAksPbXiBcfmQ4h7o9T1MdBS5oek_S1MgBsx076XOE5sREdri5Lde_-e3Wbij-TynDS7zUOXV10EPi9OrCdu11vIgTCDD3sisMrVl7NiRse1HrUCjsL5bnFnw_FfA3',
    imageAlt: 'Kaldera Gunung Bromo saat matahari terbit dengan lautan awan',
    category: 'Wisata Alam',
    tag: 'Taman Nasional',
    region: 'jatim',
    regionLabel: 'Jawa Timur',
    gateNote: 'Akses Gerbang Wonokitri & Lautan Pasir',
    hours: 'Buka Hari Ini 07:00 - 17:00',
    status: 'open',
    rating: 4.9,
    reviews: 1420,
    location: 'Probolinggo • 12.4 km dari pusat posko',
    capacityLabel: 'Kapasitas Gerbang',
    remaining: 145,
    filledPercent: 82,
    price: 35000,
    priceLabel: 'Tarif Masuk Mulai',
    priceUnit: 'orang',
  },
  {
    id: 'curug-cibaliung',
    name: 'Curug Cibaliung Sanctuary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqI2D0h72x88NYHPk_vY7EgnmskLeXB_JOO-1mv1P8kNTEjwI4SurOga-FmD_a1xP0tK3sBOYf5dYVoi2k1u7H3aYJeJAWXSYk_s5bch5wGBZoRDwW8RC88pijgxzFsrgPRB1Nk3tbcdi0-Rxf-8M5vnnVbb8AAbK9bMIKOYV0OHbUcuEqBMrrwNl5GR-tsJB3L7xQ0LFTm6YMGjaliHsegw4RGnXR0Zd1GGwR3ifYJDqZ-wQ9_6ds',
    imageAlt: 'Air terjun tropis dengan kolam toska di tengah hutan hijau',
    category: 'Petualangan',
    tag: 'Trekking Area',
    region: 'jabar',
    regionLabel: 'Jawa Barat',
    gateNote: 'Lembah Sungai Sentul Highland',
    hours: 'Buka Hari Ini 08:00 - 16:30',
    status: 'open',
    rating: 4.8,
    reviews: 890,
    location: 'Bogor • 8.1 km dari Gerbang Tol Sentul',
    capacityLabel: 'Kapasitas Jalur Air',
    remaining: 320,
    filledPercent: 45,
    price: 20000,
    priceLabel: 'Tarif Masuk Mulai',
    priceUnit: 'orang',
  },
  {
    id: 'tebing-breksi',
    name: 'Tebing Breksi Heritage',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEpIdUM-4MJAy2NB-SdTtsCHvBi1SqGN0y5N9E_Fhtb7iKgkOwDQ-WBQOaMWqiJFcnBK78ls0yLZwo06tvfLBC3SF3nffjss1IJ7nSlJZGqR0o-ziG84mBf11MJE3Nv3IcCEEAWR2pR15-A6FvaFaNtkRuES2iBA40TbfqYAAsAnyLg7ZYlwUdqEBhxxSxOO_8f81KrCwi6uLMAHVVrbApZVwmi5ynzyhgDWJ_8-cKeaz24ukGKZY2',
    imageAlt: 'Tebing kapur putih berukir Tebing Breksi di bawah langit biru',
    category: 'Sejarah & Budaya',
    tag: 'Geo-Heritage',
    region: 'diy',
    regionLabel: 'DI Yogyakarta',
    gateNote: 'Pelataran Ukir Batu Putih & Panorama Lembah',
    hours: 'Buka Hari Ini 06:00 - 20:00',
    status: 'open',
    rating: 4.7,
    reviews: 2110,
    location: 'Sleman, DIY • 6.5 km dari Candi Prambanan',
    capacityLabel: 'Kapasitas Pelataran',
    remaining: 560,
    filledPercent: 32,
    price: 15000,
    priceLabel: 'Tarif Masuk Mulai',
    priceUnit: 'orang',
  },
  {
    id: 'menganti',
    name: 'Pantai Menganti Haven',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIcCfwM6gfoKEa-rUGknVRnno3KoEzYUx7bcDV6oaYQnf89e_MTNCxWoaetyiKHPFR1V3SRAW8TP4t1oHY5903jkp8nSgkZLKfTolA_wf0iR_nYXNJqC26B7C2iDkPTNScH1oEjuOHVrfcgN7V-KhgNGda4gWiT64aNa-fPIPrCionIl0rTb3NwqWZ1SGN4RyQ6mL1x2YnLbDtVthBr3YDlAihk2PyE0p_UfxWYY9SnWcQUDD7iCoZ',
    imageAlt: 'Garis pantai selatan Menganti dengan tebing karst hijau dan mercusuar',
    category: 'Wisata Alam',
    tag: 'Pesisir Selatan',
    region: 'jateng',
    regionLabel: 'Jawa Tengah',
    gateNote: 'Tebing Karst & Mercusuar Pesisir',
    hours: 'Buka 24 Jam Kawasan',
    status: 'open',
    rating: 4.8,
    reviews: 1680,
    location: 'Kebumen, Jateng • Akses Jalur Lintas Selatan',
    capacityLabel: 'Kapasitas Pesisir',
    remaining: 410,
    filledPercent: 50,
    price: 25000,
    priceLabel: 'Tarif Masuk Mulai',
    priceUnit: 'orang',
  },
  {
    id: 'derawan',
    name: 'Kepulauan Derawan Marine',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4CkcxfigEabHLPume6k-X-7QktsX4VngTGyLLmSI9mlyPeLzb2fpsZqQcUN3AY5hZ-gGW0CSVDBKEuX6jPIuaLoyDKB3e7ECrXi3PzOFwhv8FWr0rx3RoosFQ0gH2VGapHAkrnbmvxIXZiM-ery4T5UuhzTJFp2lFDqcRw4m1EtBfSRkJm3sERCDtY9kTYgUTNXVvbQ1GUC4XpES4rzSVYMyAEornPBI-3jFGGlNvLYqDrHk_OX75',
    imageAlt: 'Penyu hijau berenang di atas terumbu karang Kepulauan Derawan',
    category: 'Konservasi Laut',
    tag: 'Cagar Bahari',
    region: 'kaltim',
    regionLabel: 'Kalimantan Timur',
    gateNote: 'Kawasan Cagar Penyu & Labuan Cermin',
    hours: 'Kuota Terbatas Zonasi',
    status: 'limited',
    rating: 4.9,
    reviews: 620,
    location: 'Berau, Kaltim • Dermaga Tanjung Batu',
    capacityLabel: 'Kuota Penyelaman',
    remaining: 42,
    filledPercent: 92,
    price: 120000,
    priceLabel: 'Pass Kawasan Mulai',
    priceUnit: 'hari',
  },
  {
    id: 'toba',
    name: 'Danau Toba Geo-cultural',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKH90z54Eca0qe17IHCWeRNLq05hjEB4ow7TFn0X_2jh8TtKHtVSckbhX82OpcnsV4C0gVXW1BxGJA3BHhRB12g4_z8fD61_nbXQyNesDrWNFatcDrY8uSVm6KdPSsSnOKjRX1a5blZBNxciyzZaYxvJNLmcA0DdnxObVzq_aIMKemxS7DRcZKqZsRFUP_LACYBgjJpHrJkDdywFNXqmaReqNPS5zow2DynkrJOEipZxUWesM9rq4l',
    imageAlt: 'Kaldera Danau Toba dengan atap desa adat Batak dan perbukitan hijau',
    category: 'Sejarah & Budaya',
    tag: 'UNESCO Geopark',
    region: 'sumut',
    regionLabel: 'Sumatera Utara',
    gateNote: 'Lembah Bakara & Desa Adat Sigarantung',
    hours: 'Buka Hari Ini 08:00 - 18:00',
    status: 'open',
    rating: 4.9,
    reviews: 3450,
    location: 'Samosir, Sumut • Pelabuhan Ajibata',
    capacityLabel: 'Kapasitas Zona Terpadu',
    remaining: 580,
    filledPercent: 28,
    price: 30000,
    priceLabel: 'Tarif Masuk Mulai',
    priceUnit: 'orang',
  },
]

export const REGION_OPTIONS: { value: RegionKey; label: string }[] = [
  { value: 'all', label: 'Seluruh Wilayah (Indonesia)' },
  { value: 'jatim', label: 'Jawa Timur (Bromo & Sekitarnya)' },
  { value: 'jabar', label: 'Jawa Barat (Bogor & Sentul)' },
  { value: 'diy', label: 'DI Yogyakarta & Sekitarnya' },
  { value: 'jateng', label: 'Jawa Tengah (Pesisir Selatan)' },
  { value: 'sumut', label: 'Sumatera Utara (Kawasan Toba)' },
  { value: 'kaltim', label: 'Kalimantan Timur (Derawan Arc)' },
]

export type PriceKey = 'all' | 'low' | 'mid' | 'high'

export const PRICE_OPTIONS: { value: PriceKey; label: string }[] = [
  { value: 'all', label: 'Rentang Harga: Semua' },
  { value: 'low', label: '< Rp 50.000' },
  { value: 'mid', label: 'Rp 50.000 - Rp 150.000' },
  { value: 'high', label: '> Rp 150.000' },
]

export const RATING_OPTIONS = [
  { value: 4.5, label: 'Rating: 4.5+ ★ Bintang' },
  { value: 4.8, label: 'Rating: 4.8+ ★ Terfavorit' },
  { value: 0, label: 'Semua Peringkat' },
]

export const CATEGORY_CHIPS = ['Semua', 'Wisata Alam', 'Sejarah & Budaya', 'Taman Tematik', 'Konservasi Laut', 'Petualangan']

export type SortKey = 'recommended' | 'popular' | 'quota'

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'recommended', label: 'Rekomendasi' },
  { value: 'popular', label: 'Paling Populer' },
  { value: 'quota', label: 'Ketersediaan Kuota' },
]

export const PAGE_SIZE = 6
