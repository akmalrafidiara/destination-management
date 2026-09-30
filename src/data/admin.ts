export const ADMIN_NAV = [
  { label: 'Ikhtisar Ruang Kerja', icon: 'dashboard', to: '/admin-workspace' },
  { label: 'Kontrol Kapasitas', icon: 'tune', to: null },
  { label: 'Inventaris Tiket', icon: 'confirmation_number', to: null },
  { label: 'Analitik Arus Wisata', icon: 'monitoring', to: null },
  { label: 'Validasi Gerbang', icon: 'qr_code_scanner', to: null },
]

export const EXPORT_OPTIONS = [
  { label: 'Ringkasan Keuangan (PDF)', icon: 'picture_as_pdf', tone: 'text-error' },
  { label: 'Data Arus Wisatawan (XLSX)', icon: 'table_view', tone: 'text-primary' },
  { label: 'Log Tiket & Gerbang (CSV)', icon: 'receipt_long', tone: 'text-outline' },
]

export const PAYMENT_CHANNELS = [
  { name: 'QRIS Dinamis', percent: 58, amount: 'Rp 28.275.000', note: '892 Transaksi Tanpa Kasir', text: 'text-primary', bar: 'bg-primary' },
  { name: 'Virtual Account', percent: 22, amount: 'Rp 10.725.000', note: 'Reservasi Agen & Biro', text: 'text-tertiary', bar: 'bg-tertiary' },
  { name: 'Debit / Kartu', percent: 12, amount: 'Rp 5.850.000', note: 'Mesin EDC Mandiri', text: 'text-on-surface', bar: 'bg-outline' },
  { name: 'Loket E-POS', percent: 8, amount: 'Rp 3.900.000', note: 'Cetak Karcis Tercatat', text: 'text-secondary', bar: 'bg-secondary-container' },
]

export const HOURLY_AXIS = ['05:00 Sunrise', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00 Sunset']

export interface MaintenanceTask {
  id: string
  state: 'done' | 'urgent' | 'scheduled'
  time: string
  priority: string
  title: string
  description: string
  owner: string
  meta: string
}

export const MAINTENANCE_TASKS: MaintenanceTask[] = [
  {
    id: 'MNT-091',
    state: 'done',
    time: 'Selesai (09:00)',
    priority: 'Prioritas Sedang',
    title: 'Kalibrasi Turnstile Gate 1 & 2',
    description: 'Pengecekan optik sensor barcode & sinkronisasi gerbang putar barat.',
    owner: 'Teknisi: Bambang S.',
    meta: 'Log #MNT-091',
  },
  {
    id: 'MNT-092',
    state: 'urgent',
    time: '17:30 WIB',
    priority: 'Tinggi',
    title: 'Inspeksi Jalur Trekking Barat',
    description: 'Audit pagar pembatas tebing kawah & kesiapan jalur evakuasi pasca hujan.',
    owner: 'Koordinator: Tim Ranger 03',
    meta: '',
  },
  {
    id: 'MNT-093',
    state: 'scheduled',
    time: '19:00 WIB',
    priority: 'Rutin',
    title: 'Pembersihan Sanitasi Zona A & B',
    description: 'Sterilisasi fasilitas rest area, pengurasan tangki air, dan sanitasi.',
    owner: 'CV Bersih Lestari',
    meta: 'Shift Malam',
  },
]

export const QUICK_ACTIONS = [
  { label: 'Tambah Kuota Tiket Khusus', icon: 'add_circle', tone: 'text-primary' },
  { label: 'Catat Pengeluaran Lapangan', icon: 'receipt', tone: 'text-secondary' },
  { label: 'Sesuaikan Jam Buka/Tutup', icon: 'lock_clock', tone: 'text-tertiary' },
]

export interface Transaction {
  id: string
  name: string
  contact: string
  pax: number
  amount: string
  channel: string
  channelIcon: string
  channelTone: string
  checkIn: string | null
}

export const TRANSACTIONS: Transaction[] = [
  { id: '#TRX-20250524-0891', name: 'Raditya Pratama', contact: 'raditya.p@email.com', pax: 4, amount: 'Rp 140.000', channel: 'QRIS Auto', channelIcon: 'qr_code_2', channelTone: 'text-primary', checkIn: '10:14' },
  { id: '#TRX-20250524-0892', name: 'Elena Salsabila (Trip Malang)', contact: 'Biro Wisata Jawa Timur', pax: 18, amount: 'Rp 630.000', channel: 'VA BNI', channelIcon: 'account_balance', channelTone: 'text-tertiary', checkIn: '10:28' },
  { id: '#TRX-20250524-0893', name: 'Michael Hans Christian', contact: 'Wisatawan Mancanegara', pax: 2, amount: 'Rp 440.000', channel: 'Visa/Master', channelIcon: 'credit_card', channelTone: 'text-outline', checkIn: null },
  { id: '#TRX-20250524-0894', name: 'Keluarga Hendra Gunawan', contact: 'hendra.g@corp.id', pax: 5, amount: 'Rp 175.000', channel: 'Loket E-POS', channelIcon: 'point_of_sale', channelTone: 'text-secondary', checkIn: '10:42' },
]
