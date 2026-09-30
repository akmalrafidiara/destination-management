import { useEffect, useRef, useState } from 'react'
import { Icon } from '../Icon'
import { EXPORT_OPTIONS } from '../../data/admin'

function useToday() {
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date())
}

export function ControlHeader() {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const today = useToday()

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-8 pb-2">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary text-caption tracking-wider uppercase border border-outline-variant/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            Pemantauan Langsung Kawasan
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant text-caption border border-outline-variant/30 shadow-sm">
            <Icon name="verified" className="text-[16px] text-primary" />
            Sistem Operasional Normal
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-1">
          <h1 className="text-[28px] font-bold text-on-surface tracking-tight leading-tight">Pusat Kendali Destinasi</h1>
          <button
            type="button"
            className="flex items-center gap-2.5 px-4 py-2 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 text-on-surface hover:bg-surface-container-low transition-all text-label-md"
          >
            <Icon name="location_on" className="text-[20px] text-primary" />
            <span className="font-semibold">Taman Wisata Alam G. Bromo</span>
            <Icon name="expand_more" className="text-[18px] text-outline ml-1" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3.5">
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30">
          <Icon name="calendar_today" className="text-[18px] text-outline" />
          <span className="text-label-md text-on-surface font-semibold">Hari Ini, {today}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant ml-0.5" />
          <span className="text-caption text-on-surface-variant font-medium">WIB (GMT+7)</span>
        </div>

        <div ref={wrapperRef} className="relative inline-block text-left">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2.5 px-5 py-2.5 bg-primary text-on-primary rounded-xl shadow-sm hover:bg-primary-container hover:shadow-md transition-all text-label-md font-semibold tracking-wide"
          >
            <Icon name="ios_share" className="text-[18px]" />
            Ekspor Laporan
            <Icon name="arrow_drop_down" className="text-[18px]" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-60 rounded-xl bg-surface-container-lowest shadow-xl z-30 p-2 border border-outline-variant/20">
              {EXPORT_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full text-left px-3.5 py-2.5 text-on-surface hover:bg-surface-container rounded-lg text-label-sm flex items-center gap-2.5 transition-colors"
                >
                  <Icon name={opt.icon} className={`text-[18px] ${opt.tone}`} />
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
