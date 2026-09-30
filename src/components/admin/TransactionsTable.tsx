import { useMemo, useState } from 'react'
import { Icon } from '../Icon'
import { TRANSACTIONS } from '../../data/admin'

type GateFilter = 'all' | 'in' | 'out'

const FILTERS: { value: GateFilter; label: string }[] = [
  { value: 'all', label: 'Semua Status' },
  { value: 'in', label: 'Sudah Check-In' },
  { value: 'out', label: 'Belum Check-In' },
]

export function TransactionsTable() {
  const [query, setQuery] = useState('')
  const [gate, setGate] = useState<GateFilter>('all')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TRANSACTIONS.filter(
      (t) =>
        (!q || `${t.id} ${t.name} ${t.contact}`.toLowerCase().includes(q)) &&
        (gate === 'all' || (gate === 'in') === (t.checkIn !== null)),
    )
  }, [query, gate])

  return (
    <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm space-y-5 border border-outline-variant/20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-3 border-b border-outline-variant/20">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-title-lg text-on-surface font-bold tracking-tight">Validasi Gerbang &amp; Kuitansi Terkini</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-caption font-bold">
              Live Feed
            </span>
          </div>
          <p className="text-caption text-outline mt-0.5">
            Rekapitulasi tiket online dan status scan barcode masuk kawasan
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari Kode Tiket / Nama..."
              className="pl-9 pr-4 py-2 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-label-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all w-full md:w-64 border border-outline-variant/20"
            />
            <Icon name="search" className="absolute left-2.5 top-2 text-[18px] text-outline" />
          </div>
          <div className="relative">
            <Icon name="filter_list" className="absolute left-3 top-2.5 text-[16px] text-outline pointer-events-none" />
            <select
              value={gate}
              onChange={(e) => setGate(e.target.value as GateFilter)}
              aria-label="Filter status gerbang"
              className="pl-9 pr-3 py-2 rounded-xl bg-surface-container-low text-on-surface text-label-sm hover:bg-surface-container transition-colors border border-outline-variant/20 cursor-pointer outline-none"
            >
              {FILTERS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low/70 text-outline text-caption uppercase tracking-wider">
              <th className="py-3.5 px-4 rounded-l-xl">ID Transaksi</th>
              <th className="py-3.5 px-4">Nama Pemesan</th>
              <th className="py-3.5 px-4 text-center">Jumlah Tiket</th>
              <th className="py-3.5 px-4">Nominal</th>
              <th className="py-3.5 px-4">Saluran Bayar</th>
              <th className="py-3.5 px-4">Status Gerbang</th>
              <th className="py-3.5 px-4 rounded-r-xl text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-on-surface text-body-sm">
            {rows.map((t) => (
              <tr key={t.id} className="hover:bg-surface-container-low/40 transition-colors border-b border-outline-variant/20 last:border-b-0">
                <td className="py-4 px-4 text-label-md font-semibold text-primary whitespace-nowrap">{t.id}</td>
                <td className="py-4 px-4">
                  <div className="font-medium text-on-surface">{t.name}</div>
                  <div className="text-caption text-outline">{t.contact}</div>
                </td>
                <td className="py-4 px-4 text-center font-semibold whitespace-nowrap">{t.pax} Pax</td>
                <td className="py-4 px-4 font-semibold text-on-surface whitespace-nowrap">{t.amount}</td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1.5 text-caption font-medium px-2.5 py-1 rounded-lg bg-surface-container text-on-surface whitespace-nowrap">
                    <Icon name={t.channelIcon} className={`text-[14px] ${t.channelTone}`} /> {t.channel}
                  </span>
                </td>
                <td className="py-4 px-4">
                  {t.checkIn ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-primary text-caption font-bold whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Sudah Check-In ({t.checkIn})
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-outline text-caption font-medium whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline" /> Belum Check-In
                    </span>
                  )}
                </td>
                <td className="py-4 px-4 text-right">
                  <button
                    type="button"
                    title="Detail Kuitansi"
                    aria-label={`Detail kuitansi ${t.id}`}
                    className="p-2 hover:bg-surface-container rounded-lg text-outline hover:text-on-surface transition-colors"
                  >
                    <Icon name="receipt_long" className="text-[18px]" />
                  </button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="py-10 text-center text-on-surface-variant">
                  Tidak ada transaksi yang cocok dengan pencarian.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between pt-4 text-outline text-caption border-t border-outline-variant/20">
        <span>
          Menampilkan {rows.length} dari 430 transaksi hari ini
        </span>
        <div className="flex items-center gap-1.5">
          <button type="button" disabled className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-semibold disabled:opacity-40">
            Sebelumnya
          </button>
          <span className="px-2.5 font-bold text-primary">1</span>
          <button type="button" disabled className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-semibold disabled:opacity-40">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  )
}
