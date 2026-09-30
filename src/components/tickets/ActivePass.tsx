import { Icon } from '../Icon'
import { ACTIVE_TICKET as t } from '../../data/tickets'

interface Props {
  onToast: (message: string) => void
  onReschedule: () => void
}

const label = 'text-caption text-outline uppercase tracking-wider block mb-1'

export function ActivePass({ onToast, onReschedule }: Props) {
  const copyPnr = async () => {
    try {
      await navigator.clipboard.writeText(t.pnr)
      onToast(`Kode Booking PNR (${t.pnr}) disalin ke clipboard`)
    } catch {
      onToast('Gagal menyalin kode. Salin secara manual.')
    }
  }

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-primary" />
          <h2 className="text-title-lg text-on-surface tracking-tight">Tiket Elektronik Aktif (E-Pass)</h2>
        </div>
        <button
          type="button"
          onClick={() => onToast('Tiket ini diverifikasi langsung oleh otoritas BKSDA & Perhutani.')}
          className="text-label-sm text-primary flex items-center gap-1 hover:underline"
        >
          <Icon name="info" className="text-[16px]" />
          Ketentuan Validitas Gerbang
        </button>
      </div>

      <div className="relative bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="h-2.5 w-full bg-gradient-to-r from-primary via-primary-container to-secondary" />
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4 relative p-8 flex flex-col justify-between overflow-hidden bg-surface-container-low min-h-[340px] lg:min-h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              alt="Kawah Ijen dengan danau asam toska dalam kabut pagi"
              src={t.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface text-label-sm font-semibold">
                {t.badge}
              </span>
              <span className="w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-primary shadow-sm">
                <Icon name="verified" className="text-[18px]" />
              </span>
            </div>
            <div className="relative z-10 space-y-2 mt-28 lg:mt-auto">
              <p className="text-caption text-surface-variant uppercase tracking-widest">{t.category}</p>
              <h3 className="text-headline-sm text-on-primary font-bold leading-tight">{t.name}</h3>
              <p className="text-body-sm text-surface-container-high flex items-center gap-1.5">
                <Icon name="pin_drop" className="text-[16px] text-secondary-fixed" />
                {t.location}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-8 bg-surface-container-lowest">
            <div>
              <div className="flex items-start justify-between gap-3 mb-6 bg-surface-container-low/40 p-4 rounded-xl">
                <div>
                  <span className={label}>Kode Pemesanan (PNR)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-title-lg font-bold text-primary tracking-wide">{t.pnr}</span>
                    <button
                      type="button"
                      onClick={copyPnr}
                      title="Salin Kode PNR"
                      aria-label="Salin Kode PNR"
                      className="text-outline-variant hover:text-primary transition-colors"
                    >
                      <Icon name="content_copy" className="text-[18px]" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className={label}>Status Lisensi</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary text-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Terkonfirmasi
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <span className={label}>Jadwal Masuk</span>
                  <p className="text-title-md text-on-surface font-semibold">{t.date}</p>
                  <p className="text-body-sm text-on-surface-variant">{t.slot}</p>
                </div>
                <div>
                  <span className={label}>Pengunjung &amp; Layanan</span>
                  <p className="text-title-md text-on-surface font-semibold">{t.guests}</p>
                  <div className="inline-flex items-center gap-1 text-primary text-caption font-medium">
                    <Icon name="health_and_safety" className="text-[14px]" />
                    <span>Asuransi Wisata Aktif</span>
                  </div>
                </div>
                <div>
                  <span className={label}>Titik Akses Masuk</span>
                  <p className="text-body-md text-on-surface font-medium">{t.entryPoint}</p>
                  <p className="text-caption text-secondary font-semibold">{t.entryLane}</p>
                </div>
                <div>
                  <span className={label}>Pemandu Terdaftar</span>
                  <p className="text-body-md text-on-surface font-medium">{t.guide}</p>
                  <p className="text-caption text-outline">{t.guideLicense}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 bg-surface-container-low/70 px-4 py-3 rounded-lg text-on-surface-variant text-caption">
              <span className="flex items-center gap-1.5">
                <Icon name="encrypted" className="text-[16px] text-outline" />
                Enkripsi SHA-256 Validated
              </span>
              <span className="font-mono text-outline">{t.hash}</span>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-surface-container-low relative">
            <div className="hidden lg:flex flex-col justify-between absolute left-0 top-0 bottom-0 py-4 -ml-2 pointer-events-none">
              <div className="w-4 h-4 rounded-full bg-background -ml-2" />
              <div className="w-4 h-4 rounded-full bg-background -ml-2" />
            </div>
            <div className="w-full max-w-[210px] space-y-4">
              <button
                type="button"
                onClick={() => onToast('Memperbarui token enkripsi tiket dynamic QR...')}
                aria-label="Segarkan token QR"
                className="relative bg-surface-container-lowest p-4 rounded-xl shadow-md inline-block group cursor-pointer"
              >
                <svg className="w-36 h-36 mx-auto text-on-surface" fill="currentColor" viewBox="0 0 100 100" aria-hidden="true">
                  <path d="M5,5 h30 v30 h-30 z M10,10 v20 h20 v-20 z M15,15 h10 v10 h-10 z" />
                  <path d="M65,5 h30 v30 h-30 z M70,10 v20 h20 v-20 z M75,15 h10 v10 h-10 z" />
                  <path d="M5,65 h30 v30 h-30 z M10,70 v20 h20 v-20 z M15,75 h10 v10 h-10 z" />
                  <rect height="6" width="6" x="42" y="6" />
                  <rect height="12" width="6" x="52" y="6" />
                  <rect height="6" width="16" x="42" y="18" />
                  <rect height="16" width="6" x="6" y="42" />
                  <rect height="6" width="10" x="18" y="42" />
                  <rect height="6" width="8" x="24" y="52" />
                  <rect className="text-primary fill-current" height="8" width="8" x="42" y="42" />
                  <rect height="6" width="6" x="54" y="42" />
                  <rect height="6" width="12" x="64" y="42" />
                  <rect height="6" width="14" x="80" y="42" />
                  <rect height="14" width="6" x="42" y="54" />
                  <rect height="16" width="8" x="52" y="52" />
                  <rect height="8" width="6" x="64" y="52" />
                  <rect height="6" width="12" x="74" y="52" />
                  <rect height="14" width="6" x="88" y="52" />
                  <rect height="6" width="12" x="42" y="72" />
                  <rect height="12" width="6" x="58" y="72" />
                  <rect height="12" width="6" x="42" y="82" />
                  <rect height="6" width="18" x="52" y="88" />
                  <rect height="20" width="6" x="74" y="64" />
                  <rect height="8" width="10" x="84" y="70" />
                  <rect height="10" width="6" x="84" y="84" />
                </svg>
                <div className="absolute inset-0 bg-primary/90 rounded-xl flex flex-col items-center justify-center text-on-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  <Icon name="sync" className="text-[28px] animate-spin" />
                  <span className="text-caption mt-1 font-semibold">Segarkan Token</span>
                </div>
              </button>

              <div className="space-y-1">
                <div className="h-8 w-full bg-surface-container flex items-center justify-between px-2 rounded" aria-hidden="true">
                  {['w-1', 'w-0.5', 'w-2', 'w-0.5', 'w-1.5', 'w-0.5', 'w-2', 'w-1', 'w-0.5', 'w-1.5', 'w-0.5', 'w-2', 'w-1'].map(
                    (w, i) => (
                      <span key={i} className={`${w} h-5 bg-on-surface-variant`} />
                    ),
                  )}
                </div>
                <p className="text-outline font-mono tracking-widest text-[10px]">SCAN DI MESIN SCANNER TURNSTILE</p>
              </div>

              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-surface-container-highest text-primary text-caption font-semibold">
                  {t.validity}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onToast('Menyimpan tiket ke Apple Wallet...')}
              className="inline-flex items-center gap-2 bg-on-surface hover:bg-inverse-surface text-on-primary px-4 py-2.5 rounded-lg text-label-md transition-all active:scale-[0.98] shadow-sm"
            >
              <Icon name="wallet" className="text-[18px]" />
              <span>Simpan ke Apple Wallet</span>
            </button>
            <button
              type="button"
              onClick={() => onToast('Mengunduh e-Ticket PDF bersertifikat...')}
              className="inline-flex items-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface px-4 py-2.5 rounded-lg text-label-md transition-colors"
            >
              <Icon name="download" className="text-[18px] text-primary" />
              <span>Unduh E-Ticket (PDF)</span>
            </button>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface px-4 py-2.5 rounded-lg text-label-md transition-colors"
            >
              <Icon name="near_me" className="text-[18px] text-secondary" />
              <span>Rute Lokasi (Google Maps)</span>
            </a>
          </div>
          <button
            type="button"
            onClick={onReschedule}
            className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-error px-3 py-2 rounded-lg text-label-sm transition-colors"
          >
            <Icon name="edit_calendar" className="text-[16px]" />
            <span>Ubah Jadwal / Batal</span>
          </button>
        </div>
      </div>
    </div>
  )
}
