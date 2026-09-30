import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { TYPE_OPTIONS, type SearchState } from '../data/home'

interface HeroProps {
  search: SearchState
  onChange: (next: SearchState) => void
  onSubmit: () => void
}

const fieldClass = 'flex-1 w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-container-low'
const inputClass =
  'bg-transparent text-title-md text-on-surface focus:outline-none placeholder:text-outline-variant w-full'

export function Hero({ search, onChange, onSubmit }: HeroProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <section className="relative w-full overflow-hidden pb-16 pt-8 md:pt-14 md:pb-24">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[980px] h-[520px] bg-gradient-to-b from-primary-fixed/40 via-surface-variant/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-48 -right-36 w-[420px] h-[420px] bg-secondary-fixed/30 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-low shadow-sm">
            <span className="inline-flex w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-caption uppercase text-on-surface-variant tracking-wider">
              Infrastruktur Smart Tourism Generasi Baru
            </span>
            <span className="text-label-sm text-primary font-semibold flex items-center gap-0.5">
              V2.4 Rilis <Icon name="arrow_forward" className="text-[16px]" />
            </span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-display-mobile md:text-display text-on-surface text-balance">
            Kelola Destinasi Wisata Modern <span className="text-primary">Tanpa Batas</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-balance">
            Transisi mulus dari antrean loket manual konvensional menuju otomasi arus pengunjung instan, rekonsiliasi
            kas real-time, dan ekosistem ticketing nir-hambatan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 pb-8">
            <Link
              to="/jelajah-destinasi"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-on-secondary text-label-md shadow-md hover:bg-secondary-container transition-all active:scale-[0.98]"
            >
              <Icon name="explore" className="text-[20px]" />
              <span>Jelajah Wisata Sekarang</span>
            </Link>
            <a
              href="#portal"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface-container-lowest text-primary text-label-md shadow-sm hover:bg-surface-container-low transition-all active:scale-[0.98]"
            >
              <Icon name="dashboard_customize" className="text-[20px]" />
              <span>Coba Portal Pengelola</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto -mt-2 bg-surface-container-lowest/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-xl shadow-surface-variant/30 flex flex-col md:flex-row items-center gap-3"
        >
          <label className={fieldClass}>
            <Icon name="location_on" className="text-primary text-[22px]" />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-caption text-outline">Destinasi / Wilayah</span>
              <input
                className={inputClass}
                type="text"
                placeholder="Semua Kawasan (Indonesia)"
                value={search.query}
                onChange={(e) => onChange({ ...search, query: e.target.value })}
              />
            </div>
          </label>

          <label className={fieldClass}>
            <Icon name="calendar_today" className="text-primary text-[22px]" />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-caption text-outline">Jadwal Masuk</span>
              <input
                className={inputClass}
                type="date"
                value={search.date}
                onChange={(e) => onChange({ ...search, date: e.target.value })}
              />
            </div>
          </label>

          <label className={fieldClass}>
            <Icon name="category" className="text-primary text-[22px]" />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-caption text-outline">Tipe Wisata</span>
              <select
                className={`${inputClass} cursor-pointer pr-4`}
                value={search.typeKeyword}
                onChange={(e) => onChange({ ...search, typeKeyword: e.target.value })}
              >
                {TYPE_OPTIONS.map((opt) => (
                  <option key={opt.label} value={opt.keyword}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <button
            type="submit"
            className="w-full md:w-auto h-12 md:h-auto px-7 py-3.5 bg-primary hover:bg-primary-container text-on-primary rounded-xl text-label-md flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] shrink-0"
          >
            <Icon name="search" className="text-[20px]" />
            <span>Cari Destinasi</span>
          </button>
        </form>
      </div>
    </section>
  )
}
