import { Link } from 'react-router-dom'
import { Icon } from './Icon'

interface PortalCardProps {
  badgeIcon: string
  badge: string
  badgeClass: string
  glowClass: string
  cardClass: string
  title: string
  body: string
  points: string[]
  primary: { label: string; icon: string; className: string; to: string }
  secondary: { label: string; icon: string; className: string; to?: string }
}

function PortalCard(p: PortalCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-8 md:p-12 shadow-md flex flex-col justify-between ${p.cardClass}`}>
      <div className={`absolute -right-16 -top-16 w-64 h-64 rounded-full blur-3xl pointer-events-none ${p.glowClass}`} />
      <div className="relative">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-label-sm mb-6 font-semibold ${p.badgeClass}`}>
          <Icon name={p.badgeIcon} className="text-[16px]" />
          <span>{p.badge}</span>
        </div>
        <h3 className="text-headline-md text-on-surface mb-4">{p.title}</h3>
        <p className="text-body-md text-on-surface-variant mb-8 max-w-lg">{p.body}</p>
        <ul className="space-y-3 mb-8">
          {p.points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-on-surface text-body-md">
              <Icon name="check_circle" className="text-primary text-[20px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative pt-4 flex flex-wrap items-center gap-4">
        <Link
          to={p.primary.to}
          className={`px-6 py-3.5 rounded-xl text-label-md shadow-sm transition-all active:scale-[0.98] inline-flex items-center gap-2 ${p.primary.className}`}
        >
          <span>{p.primary.label}</span>
          <Icon name={p.primary.icon} className="text-[18px]" />
        </Link>
        <Link
          to={p.secondary.to ?? '#'}
          className={`px-6 py-3.5 rounded-xl text-label-md transition-colors inline-flex items-center gap-2 ${p.secondary.className}`}
        >
          <span>{p.secondary.label}</span>
          <Icon name={p.secondary.icon} className="text-[18px]" />
        </Link>
      </div>
    </div>
  )
}

export function PortalGateway() {
  return (
    <section id="portal" className="w-full py-20 bg-surface scroll-mt-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-caption uppercase text-primary font-bold tracking-widest block mb-2">
            Akses Dua Arah yang Terpadu
          </span>
          <h2 className="text-headline-md md:text-headline-lg text-on-surface">Satu Platform, Dua Pengalaman Khusus</h2>
          <p className="text-body-md text-on-surface-variant mt-3">
            Apakah Anda wisatawan yang mencari kepraktisan instan, atau operator kawasan yang membutuhkan kendali
            operasional komprehensif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PortalCard
            badgeIcon="person"
            badge="Wisatawan & Pengunjung"
            badgeClass="bg-secondary-fixed/50 text-secondary"
            glowClass="bg-secondary-fixed/20"
            cardClass="bg-surface-container-lowest"
            title="Cek, Pesan & Bawa Tiket QR dalam Sekejap"
            body="Tanpa perlu antre di bilik tiket fisik di bawah cuaca terik. Pilih slot kedatangan, lakukan pembayaran instan QRIS/VA, dan simpan e-tiket di dompet gawai Anda."
            points={[
              'Konfirmasi instan & bukti polis asuransi resmi',
              'Peringatan kuota harian & status cuaca live',
              'Unduh tiket offline tanpa perlu koneksi internet di lokasi',
            ]}
            primary={{
              label: 'Buka Tiket Saya',
              to: '/tiket-saya',
              icon: 'confirmation_number',
              className: 'bg-secondary hover:bg-secondary-container text-on-secondary',
            }}
            secondary={{
              label: 'Daftar Destinasi Lengkap',
              to: '/jelajah-destinasi',
              icon: 'arrow_forward',
              className: 'bg-surface-container-low hover:bg-surface-container text-on-surface',
            }}
          />
          <PortalCard
            badgeIcon="admin_panel_settings"
            badge="Operator & Pengelola Wisata"
            badgeClass="bg-primary-fixed text-primary"
            glowClass="bg-primary-fixed/30"
            cardClass="bg-surface-container-high/60"
            title="Masuk Admin Workspace & Kendali Destinasi"
            body="Dashboard analitik terpusat untuk memantau kapasitas gantry gerbang, rekonsiliasi setoran kas harian, dan monitoring pemeliharaan fasilitas konservasi."
            points={[
              'Auto-split pendapatan tiket ke kas daerah & vendor',
              'Manajemen scanner petugas & gerbang turnstile otomatis',
              'Ekspor laporan kepatuhan audit BPK/Dinas dalam 1 klik',
            ]}
            primary={{
              label: 'Masuk Admin Workspace',
              to: '/masuk',
              icon: 'login',
              className: 'bg-primary hover:bg-primary-container text-on-primary',
            }}
            secondary={{
              label: 'Dokumentasi API Integrasi',
              icon: 'code',
              className: 'bg-surface-container-lowest hover:bg-surface-container-low text-on-surface',
            }}
          />
        </div>
      </div>
    </section>
  )
}
