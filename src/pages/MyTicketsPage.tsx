import { useState } from 'react'
import { Icon } from '../components/Icon'
import { Toast } from '../components/Toast'
import { ActivePass } from '../components/tickets/ActivePass'
import { HistoryList } from '../components/tickets/HistoryList'
import { GuidePanels } from '../components/tickets/GuidePanels'
import { RescheduleModal } from '../components/tickets/RescheduleModal'
import { UPCOMING_TICKETS } from '../data/tickets'
import { useToast } from '../lib/useToast'

export default function MyTicketsPage() {
  const { message, show } = useToast()
  const [rescheduleOpen, setRescheduleOpen] = useState(false)
  const activeCount = 1 + UPCOMING_TICKETS.length

  return (
    <div className="flex flex-col w-full">
      <Toast message={message} />

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high text-primary text-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span>Portal Pengunjung Terverifikasi</span>
              <span className="text-outline-variant">•</span>
              <span className="font-medium">NIK/Paspor Aktif</span>
            </div>
            <h1 className="text-headline-md md:text-headline-lg text-on-surface tracking-tight">
              Selamat datang kembali, <span className="text-primary font-bold">Budi Santoso</span>
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Akses mudah semua tiket digital berstandar gerbang otomatis, riwayat eksplorasi warisan budaya, serta
              panduan keselamatan langsung di genggaman Anda.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <Icon name="confirmation_number" className="text-[26px]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-title-lg text-on-surface font-bold">{activeCount} Tiket Aktif</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-caption uppercase tracking-wider font-semibold">
                  Siap Kunjung
                </span>
              </div>
              <p className="text-body-sm text-outline">Menunggu pemindaian gerbang masuk</p>
            </div>
          </div>
        </div>

        <ActivePass onToast={show} onReschedule={() => setRescheduleOpen(true)} />

        {UPCOMING_TICKETS.map((t) => (
          <div
            key={t.pnr}
            className="mb-16 bg-surface-container-low rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <Icon name={t.icon} className="text-[24px]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-title-md text-on-surface font-semibold">{t.name}</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-caption font-medium">
                    {t.badge}
                  </span>
                </div>
                <p className="text-body-sm text-on-surface-variant">{t.detail}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-label-sm text-outline font-mono">{t.pnr}</span>
              <button
                type="button"
                onClick={() => show(`Membuka E-Pass ${t.pnr}...`)}
                className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface text-primary text-label-md font-medium transition-colors"
              >
                Buka E-Pass
              </button>
            </div>
          </div>
        ))}

        <HistoryList onToast={show} />
        <GuidePanels onToast={show} />
      </div>

      <RescheduleModal
        open={rescheduleOpen}
        onClose={() => setRescheduleOpen(false)}
        onConfirm={() => {
          setRescheduleOpen(false)
          show('Jadwal kunjungan baru berhasil diajukan dan diproses')
        }}
      />
    </div>
  )
}
