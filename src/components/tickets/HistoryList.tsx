import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icon'
import { Modal } from '../Modal'
import { HISTORY, HISTORY_FILTERS, type HistoryItem } from '../../data/tickets'

const FILLED = "[font-variation-settings:'FILL'_1]"

export function HistoryList({ onToast }: { onToast: (message: string) => void }) {
  const [filter, setFilter] = useState<(typeof HISTORY_FILTERS)[number]['value']>('all')
  const [ratings, setRatings] = useState<Record<string, number>>(() =>
    Object.fromEntries(HISTORY.filter((h) => h.rating).map((h) => [h.id, h.rating as number])),
  )
  const [reviewing, setReviewing] = useState<HistoryItem | null>(null)
  const [draftRating, setDraftRating] = useState(0)
  const [draftText, setDraftText] = useState('')

  const items = useMemo(
    () =>
      HISTORY.filter((h) => filter === 'all' || h.category === filter).sort((a, b) => b.dateSort - a.dateSort),
    [filter],
  )

  const openReview = (item: HistoryItem) => {
    setDraftRating(0)
    setDraftText('')
    setReviewing(item)
  }

  const submitReview = () => {
    if (!reviewing || draftRating < 1) return
    setRatings((r) => ({ ...r, [reviewing.id]: draftRating }))
    setReviewing(null)
    onToast('Terima kasih! Ulasan Anda telah dipublikasikan.')
  }

  return (
    <div className="mb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-title-lg text-on-surface tracking-tight">Riwayat Kunjungan Sebelumnya</h2>
          <p className="text-body-sm text-outline">Arsip perjalanan, bukti tagihan pajak resmi, dan testimoni destinasi</p>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="history-filter" className="text-caption text-outline uppercase tracking-wider">
            Urutkan:
          </label>
          <select
            id="history-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="bg-surface-container-lowest text-on-surface text-label-sm px-3 py-1.5 rounded-lg outline-none cursor-pointer"
          >
            {HISTORY_FILTERS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((h) => {
          const rating = ratings[h.id]
          return (
            <div
              key={h.id}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-start sm:items-center gap-5">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-surface-container">
                  <img className="w-full h-full object-cover" src={h.image} alt={h.name} loading="lazy" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-title-md text-on-surface font-semibold">{h.name}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-caption">
                      Selesai Dikunjungi
                    </span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant flex flex-wrap items-center gap-2">
                    <span>{h.date}</span>
                    <span>•</span>
                    <span>{h.detail}</span>
                    <span>•</span>
                    <span className="font-mono text-outline">{h.invoice}</span>
                  </p>
                  {rating ? (
                    <div className="flex items-center gap-1 text-secondary">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon
                          key={i}
                          name="star"
                          className={`text-[16px] ${i < rating ? FILLED : 'text-outline-variant'}`}
                        />
                      ))}
                      <span className="text-caption text-on-surface font-medium ml-1">
                        {rating.toFixed(1)} (Ulasan Terpublikasi)
                      </span>
                    </div>
                  ) : (
                    <span className="text-caption text-secondary-container font-medium flex items-center gap-1">
                      <Icon name="rate_review" className="text-[14px]" />
                      Belum memberikan rating
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 self-end lg:self-center">
                <button
                  type="button"
                  onClick={() => onToast(`Mengunduh Invoice Pajak Elektronik ${h.invoice}...`)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant text-label-sm transition-colors"
                >
                  <Icon name="receipt_long" className="text-[16px]" />
                  <span>Kuitansi &amp; Invoice</span>
                </button>
                {rating ? (
                  <Link
                    to="/jelajah-destinasi"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-label-sm font-semibold transition-colors"
                  >
                    <span>Pesan Kembali</span>
                    <Icon name="arrow_forward" className="text-[14px]" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => openReview(h)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-secondary-fixed-dim text-label-sm font-semibold transition-colors"
                  >
                    <Icon name="star" className="text-[16px]" />
                    <span>Beri Ulasan Destinasi</span>
                  </button>
                )}
              </div>
            </div>
          )
        })}
        {items.length === 0 && (
          <div className="bg-surface-container-lowest rounded-xl p-10 text-center text-on-surface-variant shadow-sm">
            Belum ada riwayat untuk kategori ini.
          </div>
        )}
      </div>

      <Modal open={reviewing !== null} onClose={() => setReviewing(null)} label="Beri Ulasan Destinasi">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-title-lg text-on-surface font-semibold">Beri Ulasan Destinasi</h3>
            <button
              type="button"
              aria-label="Tutup"
              onClick={() => setReviewing(null)}
              className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-outline"
            >
              <Icon name="close" className="text-[20px]" />
            </button>
          </div>
          <p className="text-body-sm text-on-surface-variant">Destinasi: {reviewing?.name}</p>
          <div className="flex items-center justify-center gap-2 py-3" role="radiogroup" aria-label="Rating bintang">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={draftRating === n}
                aria-label={`${n} bintang`}
                onClick={() => setDraftRating(n)}
                className={`hover:text-secondary transition-colors ${n <= draftRating ? 'text-secondary' : 'text-outline'}`}
              >
                <Icon name="star" className={`text-[32px] ${n <= draftRating ? FILLED : ''}`} />
              </button>
            ))}
          </div>
          <textarea
            rows={3}
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            placeholder="Ceritakan pengalaman fasilitas, kebersihan, dan pemandangan..."
            className="w-full bg-surface-container-low p-3 rounded-lg text-on-surface text-body-sm outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setReviewing(null)}
              className="px-4 py-2 rounded-lg bg-surface-container text-on-surface text-label-md"
            >
              Batal
            </button>
            <button
              type="button"
              disabled={draftRating < 1}
              onClick={submitReview}
              className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-label-md font-medium disabled:opacity-50"
            >
              Kirim Ulasan
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
