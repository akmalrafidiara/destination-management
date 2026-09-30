import { useMemo, useState } from 'react'
import { Icon } from '../components/Icon'
import { ExploreFilters, type ExploreFilterState } from '../components/explore/ExploreFilters'
import { ExploreCard } from '../components/explore/ExploreCard'
import { MapView } from '../components/explore/MapView'
import { BookingDrawer } from '../components/explore/BookingDrawer'
import {
  EXPLORE_DESTINATIONS,
  PAGE_SIZE,
  SORT_OPTIONS,
  type ExploreDestination,
  type SortKey,
} from '../data/explore'

const INITIAL_FILTERS: ExploreFilterState = {
  query: '',
  region: 'all',
  price: 'all',
  minRating: 4.5,
  category: 'Semua',
}

const inPriceRange = (price: number, range: ExploreFilterState['price']) =>
  range === 'all' ||
  (range === 'low' && price < 50000) ||
  (range === 'mid' && price >= 50000 && price <= 150000) ||
  (range === 'high' && price > 150000)

export default function ExplorePage() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [sort, setSort] = useState<SortKey>('recommended')
  const [view, setView] = useState<'grid' | 'map'>('grid')
  const [page, setPage] = useState(1)
  const [booking, setBooking] = useState<ExploreDestination | null>(null)

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    const list = EXPLORE_DESTINATIONS.filter(
      (d) =>
        (!q || `${d.name} ${d.category} ${d.tag} ${d.location}`.toLowerCase().includes(q)) &&
        (filters.region === 'all' || d.region === filters.region) &&
        inPriceRange(d.price, filters.price) &&
        d.rating >= filters.minRating &&
        (filters.category === 'Semua' || d.category === filters.category),
    )
    if (sort === 'popular') list.sort((a, b) => b.reviews - a.reviews)
    if (sort === 'quota') list.sort((a, b) => b.remaining - a.remaining)
    return list
  }, [filters, sort])

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageItems = results.slice(start, start + PAGE_SIZE)

  const changeFilters = (next: ExploreFilterState) => {
    setFilters(next)
    setPage(1)
  }

  const viewBtn = (mode: 'grid' | 'map', icon: string, label: string) => (
    <button
      type="button"
      onClick={() => setView(mode)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-label-md transition-all ${
        view === mode ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
      }`}
    >
      <Icon name={icon} className="text-[18px]" />
      <span>{label}</span>
    </button>
  )

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/80 via-surface to-background pb-12 pt-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-caption uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Katalog Ekosistem Destinasi Nasional
              </div>
              <h1 className="text-headline-md md:text-headline-lg text-on-surface tracking-tight">
                Eksplorasi Destinasi Terpadu
              </h1>
              <p className="text-body-md text-on-surface-variant max-w-2xl">
                Akses kuota resmi real-time, tiket digital tervalidasi, dan panduan zonasi konservasi untuk pengalaman
                pelesir aman dan berkelanjutan.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-lowest p-1.5 rounded-xl shadow-sm self-start lg:self-auto">
              {viewBtn('grid', 'grid_view', 'Tampilan Grid')}
              {viewBtn('map', 'map', 'Peta Interaktif')}
            </div>
          </div>

          <ExploreFilters value={filters} onChange={changeFilters} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 w-full -mt-4 pb-20">
        {view === 'map' && <MapView destinations={results} onBook={setBooking} />}

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-title-md text-on-surface">Menampilkan {results.length} Kawasan Wisata Terpilih</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-outline-variant" />
            <span className="hidden sm:block text-body-sm text-on-surface-variant">Sinkronisasi kuota per 2 menit</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-on-surface-variant text-label-sm">
            <span>Urutkan:</span>
            {SORT_OPTIONS.map((o, i) => (
              <span key={o.value} className="flex items-center gap-2">
                {i > 0 && <span className="text-outline-variant">/</span>}
                <button
                  type="button"
                  onClick={() => setSort(o.value)}
                  className={sort === o.value ? 'text-primary font-semibold' : 'hover:text-on-surface'}
                >
                  {o.label}
                </button>
              </span>
            ))}
          </div>
        </div>

        {pageItems.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-2xl p-12 text-center text-on-surface-variant shadow-sm">
            <Icon name="travel_explore" className="text-[40px] text-outline mb-2" />
            <p className="text-title-md text-on-surface">Destinasi tidak ditemukan</p>
            <p className="text-body-md mb-4">Coba ubah kata kunci atau longgarkan filter Anda.</p>
            <button
              type="button"
              onClick={() => changeFilters(INITIAL_FILTERS)}
              className="px-4 py-2 rounded-lg bg-primary text-on-primary text-label-md hover:bg-primary-container transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.map((d) => (
              <ExploreCard key={d.id} d={d} onBook={setBooking} />
            ))}
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-lowest shadow-sm">
            <div className="text-body-sm text-on-surface-variant">
              Menampilkan <span className="font-semibold text-on-surface">{start + 1} - {start + pageItems.length}</span>{' '}
              dari total <span className="font-semibold text-on-surface">{results.length}</span> destinasi wisata
              terverifikasi
            </div>
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Halaman sebelumnya"
                  disabled={currentPage === 1}
                  onClick={() => setPage(currentPage - 1)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-40"
                >
                  <Icon name="chevron_left" className="text-[18px]" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-label-md transition-colors ${
                      n === currentPage
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  aria-label="Halaman berikutnya"
                  disabled={currentPage === totalPages}
                  onClick={() => setPage(currentPage + 1)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-40"
                >
                  <Icon name="chevron_right" className="text-[18px]" />
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-surface-container-high to-surface-container rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-primary text-caption uppercase tracking-wider font-semibold">
              Kemitraan Otorita Wisata &amp; BUMDes
            </span>
            <h3 className="text-headline-md text-on-surface tracking-tight">
              Kelola Tiket Destinasi Kawasan Anda Secara Terintegrasi
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Daftarkan gate masuk wisata, validasi QR instan offline-ready, serta pantau dashboard retribusi harian
              bersama ekosistem DestinaPro.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a href="#" className="px-5 py-2.5 bg-primary text-on-primary rounded-lg text-label-md hover:bg-primary-container transition-all shadow-sm">
                Gabung Sebagai Mitra Pengelola
              </a>
              <a href="#" className="px-5 py-2.5 bg-surface-container-lowest text-on-surface rounded-lg text-label-md hover:bg-surface-container-low transition-all">
                Dokumentasi API Gate
              </a>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        </div>
      </div>

      <BookingDrawer destination={booking} onClose={() => setBooking(null)} />
    </div>
  )
}
