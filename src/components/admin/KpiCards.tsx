import { Icon } from '../Icon'

const CAPACITY = 2000
const VISITORS = 1625

const card =
  'p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between border border-outline-variant/20'
const foot = 'mt-6 pt-3.5 border-t border-outline-variant/20 flex items-center justify-between'

export function KpiCards() {
  const filled = (VISITORS / CAPACITY) * 100

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className={card}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-caption uppercase tracking-wider text-outline">Pencatatan Otomatis</span>
            <span className="text-title-md text-on-surface font-semibold">Pendapatan Hari Ini</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
            <Icon name="payments" className="text-[22px]" />
          </div>
        </div>
        <div className="mt-5">
          <span className="text-headline-md font-bold text-on-surface tracking-tight">Rp 48.750.000</span>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="inline-flex items-center text-primary text-label-sm font-semibold">
              <Icon name="trending_up" className="text-[16px]" /> +14.2%
            </span>
            <span className="text-caption text-outline">vs penutupan kemarin</span>
          </div>
        </div>
        <div className={`${foot} text-on-surface-variant text-caption`}>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" /> QRIS &amp; PG Otomatis
          </span>
          <span className="font-semibold text-primary">Sinkron 100%</span>
        </div>
      </div>

      <div className={card}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-caption uppercase tracking-wider text-secondary">Batas Daya Tampung</span>
            <span className="text-title-md text-on-surface font-semibold">Pengunjung Masuk</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
            <Icon name="group" className="text-[22px]" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <span className="text-headline-md font-bold text-on-surface tracking-tight">
              {VISITORS.toLocaleString('id-ID')}
            </span>
            <span className="text-label-md font-medium text-outline">Kapasitas: {CAPACITY.toLocaleString('id-ID')}</span>
          </div>
          <div className="w-full bg-surface-container h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-secondary-container h-full rounded-full transition-all duration-700" style={{ width: `${filled}%` }} />
          </div>
        </div>
        <div className={foot}>
          <span className="inline-flex items-center gap-1 text-caption text-secondary font-semibold">
            <Icon name="warning" className="text-[14px]" /> Terisi {filled.toFixed(1)}% (Siaga)
          </span>
          <span className="text-caption text-outline">Sisa {CAPACITY - VISITORS} Kursi</span>
        </div>
      </div>

      <div className={card}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-caption uppercase tracking-wider text-outline">Integrasi Gate &amp; Web</span>
            <span className="text-title-md text-on-surface font-semibold">Pemesanan Online</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
            <Icon name="confirmation_number" className="text-[22px]" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold text-on-surface tracking-tight">430</span>
            <span className="text-label-md text-on-surface-variant font-medium">Transaksi Terverifikasi</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-caption text-on-surface-variant">Nol Entri Manual (Zero Error)</span>
          </div>
        </div>
        <div className={`${foot} text-caption text-outline`}>
          <span>Loket Mandiri: 142</span>
          <span>Aplikasi Wisata: 288</span>
        </div>
      </div>

      <div className={card}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-caption uppercase tracking-wider text-outline">Audit Fasilitas</span>
            <span className="text-title-md text-on-surface font-semibold">Kesiapan Infrastruktur</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary">
            <Icon name="health_and_safety" className="text-[22px]" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <span className="text-headline-md font-bold text-on-surface tracking-tight">98.4%</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary text-caption font-semibold">
              Prima
            </span>
          </div>
          <p className="text-caption text-on-surface-variant mt-1.5">2 agenda inspeksi preventif hari ini</p>
        </div>
        <div className={`${foot} text-caption`}>
          <span className="text-on-surface-variant">Sensor: Aktif</span>
          <span className="text-secondary font-semibold">1 Perbaikan Ringan</span>
        </div>
      </div>
    </div>
  )
}
