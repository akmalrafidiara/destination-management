import { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { formatRupiah } from '../../lib/format'
import type { ExploreDestination } from '../../data/explore'

const INSURANCE_PER_GUEST = 2000
const CONSERVATION_FEE = 2000
const MAX_GUESTS = 10

const SLOTS = [
  { id: 'pagi', label: 'Pagi (07:00 - 12:00)' },
  { id: 'siang', label: 'Siang (12:00 - 17:00)' },
]

const todayISO = () => new Date().toISOString().slice(0, 10)

interface Props {
  destination: ExploreDestination | null
  onClose: () => void
}

export function BookingDrawer({ destination, onClose }: Props) {
  const [date, setDate] = useState(todayISO)
  const [slot, setSlot] = useState('pagi')
  const [guests, setGuests] = useState(2)
  const [confirmed, setConfirmed] = useState(false)
  const open = destination !== null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setConfirmed(false)
      onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const price = destination?.price ?? 0
  const subtotal = guests * price
  const insurance = guests * INSURANCE_PER_GUEST
  const total = subtotal + insurance + CONSERVATION_FEE

  const close = () => {
    setConfirmed(false)
    onClose()
  }

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 bg-on-surface/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        aria-hidden={!open}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-surface-container-lowest shadow-2xl z-50 transform transition-transform duration-300 flex flex-col justify-between overflow-y-auto ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between pb-4">
            <div>
              <span className="text-caption text-outline uppercase tracking-wider">Fast Booking Pass</span>
              <h3 className="text-title-lg text-on-surface">{destination?.name ?? 'Detail Pemesanan Tiket'}</h3>
            </div>
            <button
              type="button"
              aria-label="Tutup"
              onClick={close}
              className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-outline hover:text-on-surface transition-colors"
            >
              <Icon name="close" className="text-[18px]" />
            </button>
          </div>

          {confirmed ? (
            <div className="p-6 rounded-xl bg-surface-container-low text-center space-y-2">
              <Icon name="check_circle" className="text-primary text-[40px]" />
              <p className="text-title-md text-on-surface">Pemesanan berhasil dibuat</p>
              <p className="text-body-sm text-on-surface-variant">
                Anda akan diarahkan ke gateway pembayaran QRIS / VA untuk {destination?.name}.
              </p>
            </div>
          ) : (
            <>
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <Icon name="confirmation_number" />
                </div>
                <div>
                  <p className="text-label-md text-on-surface">Validitas Tiket Instan</p>
                  <p className="text-caption text-on-surface-variant">Dilengkapi Barcode QR Dinamis Anti-Duplikasi</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="visit-date" className="block text-label-sm text-on-surface mb-1.5 font-medium">
                    Pilih Tanggal Kunjungan
                  </label>
                  <input
                    id="visit-date"
                    type="date"
                    min={todayISO()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-11 px-3.5 bg-surface-container-low rounded-xl text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all"
                  />
                </div>

                <div>
                  <span className="block text-label-sm text-on-surface mb-1.5 font-medium">Sesi / Slot Kedatangan</span>
                  <div className="grid grid-cols-2 gap-2">
                    {SLOTS.map((s) => (
                      <label
                        key={s.id}
                        className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors"
                      >
                        <input
                          type="radio"
                          name="slot"
                          className="accent-primary"
                          checked={slot === s.id}
                          onChange={() => setSlot(s.id)}
                        />
                        <span className="text-body-sm text-on-surface">{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-label-sm text-on-surface mb-1.5 font-medium">Jumlah Wisatawan (Orang)</span>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
                    <span className="text-body-sm text-on-surface">Wisatawan Nusantara</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-label="Kurangi"
                        disabled={guests <= 1}
                        onClick={() => setGuests((g) => g - 1)}
                        className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface flex items-center justify-center font-bold shadow-sm disabled:opacity-40"
                      >
                        -
                      </button>
                      <span className="text-title-md text-on-surface w-5 text-center">{guests}</span>
                      <button
                        type="button"
                        aria-label="Tambah"
                        disabled={guests >= MAX_GUESTS}
                        onClick={() => setGuests((g) => g + 1)}
                        className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface flex items-center justify-center font-bold shadow-sm disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm space-y-2">
                  <div className="flex justify-between text-body-sm text-on-surface-variant">
                    <span>Tiket Masuk x {guests}</span>
                    <span>{formatRupiah(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-body-sm text-on-surface-variant">
                    <span>Retribusi Asuransi Jasa Raharja</span>
                    <span>{formatRupiah(insurance)}</span>
                  </div>
                  <div className="flex justify-between text-body-sm text-on-surface-variant">
                    <span>Biaya Konservasi &amp; Pemeliharaan</span>
                    <span>{formatRupiah(CONSERVATION_FEE)}</span>
                  </div>
                  <div className="pt-2 flex justify-between text-title-md text-on-surface">
                    <span>Total Pembayaran</span>
                    <span className="text-primary font-bold">{formatRupiah(total)}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="p-6 bg-surface-container-low flex flex-col gap-3">
          {confirmed ? (
            <button
              type="button"
              onClick={close}
              className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-label-md font-semibold transition-all shadow-md"
            >
              Selesai
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmed(true)}
              className="w-full py-3.5 rounded-xl bg-secondary hover:bg-secondary-container text-on-secondary text-label-md font-semibold transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Lanjutkan Ke Pembayaran</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </button>
          )}
          <p className="text-caption text-center text-outline">
            E-tiket instan terbit &amp; tersimpan otomatis di halaman "Tiket Saya"
          </p>
        </div>
      </aside>
    </>
  )
}
