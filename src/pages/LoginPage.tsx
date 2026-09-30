import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Modal } from '../components/Modal'
import { LOGO_URL } from '../data/home'

type Role = 'visitor' | 'admin'

const ROLES = {
  visitor: {
    subtitle: 'Akses tiket digital QR, status pesanan, dan bukti bayar.',
    identifierLabel: 'Email atau Nomor WhatsApp',
    placeholder: 'nama@domain.com atau 0812xxxx',
    bannerIcon: 'qr_code_2',
    bannerText: 'Login cepat untuk membuka e-tiket offline, panduan audio tour, serta voucher kuliner.',
    session: 'Sesi 30 Hari',
    submit: 'Masuk ke Akun Tiket',
    bannerTone: 'bg-primary/10 text-primary',
    submitTone: 'bg-primary hover:bg-primary-container text-on-primary shadow-primary/20 hover:shadow-primary/30',
    redirect: '/tiket-saya',
  },
  admin: {
    subtitle: 'Dasbor operasional pengelola taman, cagar alam & atraksi.',
    identifierLabel: 'ID Petugas / Email Pengelola',
    placeholder: 'admin@destinasi.id atau ID-OPS-09',
    bannerIcon: 'point_of_sale',
    bannerText: 'Terproteksi: Scanner barcode gerbang, pelaporan rekonsiliasi kas harian, dan kuota pengunjung.',
    session: 'Sesi Keamanan 8 Jam',
    submit: 'Masuk ke Konsol Pengelola',
    bannerTone: 'bg-secondary/15 text-secondary',
    submitTone: 'bg-secondary hover:bg-secondary-container text-on-secondary shadow-secondary/20 hover:shadow-secondary/30',
    redirect: '/admin-workspace',
  },
} as const

const inputBase =
  'w-full h-11 bg-surface-container-low focus:bg-surface-container-lowest text-on-surface rounded-lg text-body-sm outline-none shadow-sm focus:shadow-md focus:shadow-primary/10 transition-all duration-200 placeholder:text-outline-variant'

export default function LoginPage() {
  const navigate = useNavigate()
  const [role, setRole] = useState<Role>('visitor')
  const [showPassword, setShowPassword] = useState(false)
  const [lookupOpen, setLookupOpen] = useState(false)
  const cfg = ROLES[role]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate(cfg.redirect)
  }

  const handleLookup = (e: FormEvent) => {
    e.preventDefault()
    setLookupOpen(false)
    navigate('/tiket-saya')
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-6 bg-surface">
      <div className="flex flex-col w-full items-center justify-center relative overflow-hidden py-8 sm:py-14 px-4 sm:px-6">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[360px] bg-gradient-to-tr from-surface-variant/40 via-primary-fixed/20 to-transparent blur-2xl pointer-events-none rounded-full" />

        <div className="relative w-full max-w-[490px] bg-surface-container-lowest/90 backdrop-blur-2xl rounded-xl shadow-xl shadow-on-surface/5 p-6 sm:p-9">
          <div className="flex flex-col items-center text-center mb-6">
            <Link to="/" aria-label="Kembali ke beranda" className="relative w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center p-2 mb-4 shadow-sm">
              <img alt="DestinaPro Logo" className="w-full h-full object-contain rounded-md" src={LOGO_URL} />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-on-primary">
                <Icon name="verified" className="text-[10px] font-bold" />
              </div>
            </Link>
            <span className="text-caption uppercase tracking-wider text-outline mb-1">Portal Terpadu Nusantara</span>
            <h1 className="text-headline-sm text-on-surface">Masuk ke DestinaPro</h1>
            <p className="text-body-sm text-on-surface-variant mt-1.5">{cfg.subtitle}</p>
          </div>

          <div role="tablist" className="relative bg-surface-container-high/80 p-1 rounded-full flex items-center mb-6 select-none shadow-inner">
            <div
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-surface-container-lowest rounded-full shadow-sm transition-all duration-300 ease-out pointer-events-none"
              style={{ left: role === 'visitor' ? '4px' : '50%' }}
            />
            <button
              type="button"
              role="tab"
              aria-selected={role === 'visitor'}
              onClick={() => setRole('visitor')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-label-md transition-colors duration-200 focus:outline-none ${
                role === 'visitor' ? 'text-primary font-semibold' : 'text-on-surface-variant font-medium'
              }`}
            >
              <Icon name="confirmation_number" className="text-[18px]" />
              <span>Pengunjung</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={role === 'admin'}
              onClick={() => setRole('admin')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-label-md transition-colors duration-200 focus:outline-none ${
                role === 'admin' ? 'text-secondary font-semibold' : 'text-on-surface-variant font-medium'
              }`}
            >
              <Icon name="admin_panel_settings" className="text-[18px]" />
              <span>Pengelola Destinasi</span>
            </button>
          </div>

          <div className="bg-surface-container-low rounded-lg p-3 mb-6 flex items-start gap-2.5">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${cfg.bannerTone}`}>
              <Icon name={cfg.bannerIcon} className="text-[16px]" />
            </div>
            <p className="text-caption text-on-surface-variant leading-snug min-w-0 flex-1">{cfg.bannerText}</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="identifier" className="block text-label-sm text-on-surface mb-1.5">
                {cfg.identifierLabel}
              </label>
              <div className="relative">
                <Icon name="alternate_email" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
                <input id="identifier" required type="text" placeholder={cfg.placeholder} className={`${inputBase} pl-10 pr-3.5`} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-label-sm text-on-surface">
                  Kata Sandi
                </label>
                <a href="#" className="text-caption text-primary hover:text-tertiary transition-colors">
                  Lupa sandi?
                </a>
              </div>
              <div className="relative">
                <Icon name="lock" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
                <input
                  id="password"
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  className={`${inputBase} pl-10 pr-10`}
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface focus:outline-none flex items-center justify-center p-1"
                >
                  <Icon name={showPassword ? 'visibility_off' : 'visibility'} className="text-[18px]" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary cursor-pointer" />
                <span className="text-body-sm text-on-surface-variant">Ingat akun ini</span>
              </label>
              <span className="text-caption px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                {cfg.session}
              </span>
            </div>

            <button
              type="submit"
              className={`w-full h-12 mt-2 text-label-md font-semibold rounded-lg shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 ${cfg.submitTone}`}
            >
              <span>{cfg.submit}</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </button>
          </form>

          <div className="relative my-6 flex items-center justify-center">
            <div className="w-full h-px bg-surface-container-high" />
            <span className="absolute px-3 bg-surface-container-lowest text-caption uppercase text-outline">
              Atau akses cepat
            </span>
          </div>

          <div className="space-y-2.5">
            <button
              type="button"
              className="w-full h-11 bg-surface-container-low hover:bg-surface-container text-on-surface text-label-md rounded-lg flex items-center justify-center gap-3 active:scale-[0.99] transition-all duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4" />
                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853" />
                <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
              </svg>
              <span>Lanjutkan dengan Google</span>
            </button>
            {role === 'visitor' && (
              <button
                type="button"
                onClick={() => setLookupOpen(true)}
                className="w-full h-11 bg-surface-container-highest/60 hover:bg-surface-container-highest text-primary text-label-md rounded-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-all duration-200"
              >
                <Icon name="find_in_page" className="text-[18px]" />
                <span>Cari Tiket via Kode Booking (Tanpa Password)</span>
              </button>
            )}
          </div>

          <div className="mt-7 flex flex-col items-center text-center gap-1.5">
            <div className="flex items-center justify-center flex-wrap gap-2 text-caption text-outline">
              <span className="inline-flex items-center gap-1">
                <Icon name="lock" className="text-[14px] text-primary" />
                Enkripsi SSL 256-Bit
              </span>
              <span className="text-outline-variant">•</span>
              <span className="inline-flex items-center gap-1">
                <Icon name="hub" className="text-[14px] text-secondary" />
                Gerbang Wisata Nasional
              </span>
            </div>
            <p className="text-caption text-outline-variant">
              Layanan resmi ticketing destinasi wisata terakreditasi Kemenparekraf
            </p>
          </div>
        </div>
      </div>

      <Modal open={lookupOpen} onClose={() => setLookupOpen(false)} label="Pencarian E-Tiket Instan" maxWidth="max-w-md">
        <form onSubmit={handleLookup} className="rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon name="receipt_long" className="text-[18px]" />
              </div>
              <div>
                <h3 className="text-title-md text-on-surface">Pencarian E-Tiket Instan</h3>
                <p className="text-caption text-on-surface-variant">Bagi pemesan tamu tanpa kata sandi</p>
              </div>
            </div>
            <button type="button" aria-label="Tutup" onClick={() => setLookupOpen(false)} className="text-outline hover:text-on-surface rounded-full p-1">
              <Icon name="close" />
            </button>
          </div>
          <div>
            <label htmlFor="booking-code" className="block text-label-sm text-on-surface mb-1">
              Kode Booking (Order ID)
            </label>
            <input
              id="booking-code"
              required
              type="text"
              placeholder="Contoh: DPN-202409-8812"
              className="w-full h-11 px-3.5 bg-surface-container-low rounded-lg text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest shadow-sm uppercase tracking-wider"
            />
          </div>
          <div>
            <label htmlFor="booking-contact" className="block text-label-sm text-on-surface mb-1">
              Nomor WhatsApp / Email Pembeli
            </label>
            <input
              id="booking-contact"
              required
              type="text"
              placeholder="Masukkan kontak saat reservasi"
              className="w-full h-11 px-3.5 bg-surface-container-low rounded-lg text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full h-11 mt-2 bg-secondary hover:bg-secondary-container text-on-secondary text-label-md font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Icon name="search" className="text-[18px]" />
            <span>Temukan Tiket Saya</span>
          </button>
        </form>
      </Modal>
    </main>
  )
}
