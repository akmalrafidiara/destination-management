import { useState } from 'react'
import { Icon } from '../Icon'
import { Modal } from '../Modal'
import { ACTIVE_TICKET } from '../../data/tickets'

const SLOTS = [
  { id: 'dini', label: '02:00 - 08:00 (Blue Fire)' },
  { id: 'siang', label: '08:00 - 14:00 (Siang)' },
]

const tomorrowISO = () => new Date(Date.now() + 86_400_000).toISOString().slice(0, 10)

interface Props {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export function RescheduleModal({ open, onClose, onConfirm }: Props) {
  const [date, setDate] = useState(tomorrowISO)
  const [slot, setSlot] = useState('dini')

  return (
    <Modal open={open} onClose={onClose} label="Ubah Jadwal Kunjungan" maxWidth="max-w-lg">
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-title-lg text-on-surface font-semibold">Ubah Jadwal Kunjungan</h3>
          <button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-outline"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>
        <p className="text-body-sm text-on-surface-variant">
          Tiket kode <strong className="text-primary font-mono">{ACTIVE_TICKET.pnr}</strong> (Kawah Ijen Geopark) dapat
          dipindahkan tanggal kunjungannya maksimal 24 jam sebelum slot waktu masuk.
        </p>
        <div className="space-y-3">
          <label htmlFor="new-date" className="block text-label-sm text-on-surface font-medium">
            Pilih Tanggal Baru
          </label>
          <input
            id="new-date"
            type="date"
            min={tomorrowISO()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-surface-container-low px-4 py-2.5 rounded-lg text-on-surface text-body-sm outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="space-y-3">
          <span className="block text-label-sm text-on-surface font-medium">Slot Waktu Pendakian</span>
          <div className="grid grid-cols-2 gap-2 text-label-sm">
            {SLOTS.map((s) => (
              <label
                key={s.id}
                className={`p-3 rounded-lg flex items-center gap-2 cursor-pointer ${
                  slot === s.id ? 'bg-surface-container text-primary font-semibold' : 'bg-surface-container-low text-on-surface'
                }`}
              >
                <input type="radio" name="reslot" className="accent-primary" checked={slot === s.id} onChange={() => setSlot(s.id)} />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="pt-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md font-medium transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary text-label-md font-medium transition-colors"
          >
            Konfirmasi Perubahan
          </button>
        </div>
      </div>
    </Modal>
  )
}
