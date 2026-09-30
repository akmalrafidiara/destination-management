import { Icon } from '../Icon'
import { GEAR_CHECKLIST } from '../../data/tickets'

export function GuidePanels({ onToast }: { onToast: (message: string) => void }) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-title-lg text-on-surface tracking-tight">Panduan Kunjungan &amp; Dukungan 24/7</h2>
        <p className="text-body-sm text-outline">Informasi teknis dan keselamatan resmi dari pengelola cagar wisata</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-md bg-surface-container text-primary text-caption font-semibold">
                Kondisi Kawah Ijen
              </span>
              <span className="text-caption text-outline">Real-time Sensor</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Icon name="thermostat" className="text-primary text-[36px]" />
              <div>
                <span className="text-headline-sm text-on-surface font-bold">4°C - 11°C</span>
                <p className="text-caption text-on-surface-variant">Suhu puncak dini hari sangat dingin</p>
              </div>
            </div>
            <div className="space-y-2 text-on-surface-variant text-body-sm">
              <div className="flex items-center justify-between">
                <span>Konsentrasi Gas Belerang</span>
                <span className="font-semibold text-primary">Normal (Level I)</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-1/4 rounded-full" />
              </div>
              <p className="text-caption text-outline pt-1">
                Wajib membawa masker respirator bersertifikasi dan senter kepala (headlamp).
              </p>
            </div>
          </div>
          <div className="pt-6 mt-4">
            <a href="#" className="inline-flex items-center gap-1 text-label-sm text-primary font-semibold hover:underline">
              <span>Unduh SOP Keselamatan Pendakian</span>
              <Icon name="arrow_forward" className="text-[14px]" />
            </a>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-md bg-surface-container text-secondary text-caption font-semibold">
                Daftar Perlengkapan Wajib
              </span>
              <span className="text-caption text-outline">Pemeriksaan di Gate</span>
            </div>
            <ul className="space-y-3 text-body-sm text-on-surface">
              {GEAR_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Icon name="check_circle" className="text-primary text-[18px] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-6 mt-4">
            <span className="text-caption text-outline flex items-center gap-1">
              <Icon name="info" className="text-[14px]" />
              Tersedia rental masker resmi di pos Paltuding
            </span>
          </div>
        </div>

        <div className="bg-surface-container p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-md bg-secondary-container text-on-primary text-caption font-semibold">
                Bantuan Cepat 24/7
              </span>
              <span className="flex items-center gap-1 text-primary text-caption">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Online
              </span>
            </div>
            <h3 className="text-title-md text-on-surface font-semibold mb-2">Mengalami Masalah Tiket?</h3>
            <p className="text-body-sm text-on-surface-variant mb-6">
              Tim Call Center Ranger dan Pusat Bantuan DestinaPro siap mendampingi proses reservasi, kendala teknis
              gerbang, dan situasi darurat medis di lokasi.
            </p>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => onToast('Membuka sesi Live Chat Pengunjung...')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-label-md font-medium transition-colors shadow-sm"
              >
                <Icon name="chat" className="text-[18px]" />
                <span>Hubungi Chat Dukungan</span>
              </button>
              <a
                href="tel:112"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface text-error text-label-md font-medium transition-colors"
              >
                <Icon name="emergency" className="text-[18px]" />
                <span>Panggilan Darurat Ranger (SAR)</span>
              </a>
            </div>
          </div>
          <p className="text-caption text-outline text-center mt-4">Waktu respons rata-rata: &lt; 2 Menit</p>
        </div>
      </div>
    </div>
  )
}
