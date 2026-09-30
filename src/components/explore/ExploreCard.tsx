import { Icon } from '../Icon'
import { formatRupiah } from '../../lib/format'
import type { ExploreDestination } from '../../data/explore'

export function ExploreCard({ d, onBook }: { d: ExploreDestination; onBook: (d: ExploreDestination) => void }) {
  const tight = d.filledPercent >= 80

  return (
    <article className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-64 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={d.image}
            alt={d.imageAlt}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent" />

          <div className="absolute top-3.5 left-3.5">
            <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-label-sm text-primary font-medium">
              {d.category}
            </span>
          </div>
          <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
            <span className={`w-2 h-2 rounded-full ${d.status === 'open' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="text-caption text-on-surface">{d.hours}</span>
          </div>

          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-on-secondary">
            <div className="flex items-center gap-1 text-amber-300 text-label-sm">
              <Icon name="star" className="text-[16px] [font-variation-settings:'FILL'_1]" />
              <span className="text-on-secondary font-semibold">{d.rating}</span>
              <span className="text-surface-container-highest/80 text-caption">
                ({d.reviews.toLocaleString('en-US')} ulasan)
              </span>
            </div>
            <span className="text-caption px-2 py-0.5 rounded bg-on-surface/40 backdrop-blur-sm">{d.tag}</span>
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-title-lg text-on-surface group-hover:text-primary transition-colors tracking-tight">
            {d.name}
          </h2>
          <div className="mt-2 flex items-center justify-between gap-2 text-body-sm text-on-surface-variant">
            <div className="flex items-center gap-1.5 truncate">
              <Icon name="location_on" className="text-outline text-[16px]" />
              <span className="truncate">{d.location}</span>
            </div>
            <a href="#" className="text-primary hover:underline text-label-sm shrink-0 flex items-center gap-0.5">
              Buka Rute
              <Icon name="arrow_outward" className="text-[14px]" />
            </a>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-surface-container-low space-y-1.5">
            <div className="flex items-center justify-between text-label-sm">
              <span className="text-on-surface-variant">{d.capacityLabel}</span>
              <span className={`font-semibold ${tight ? 'text-secondary' : 'text-primary'}`}>
                Sisa kuota: {d.remaining} tiket
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
              <div
                className={`h-full rounded-full ${tight ? 'bg-secondary' : 'bg-primary'}`}
                style={{ width: `${d.filledPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="pt-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-caption text-outline">{d.priceLabel}</p>
            <p className="text-title-lg text-on-surface">
              {formatRupiah(d.price)}{' '}
              <span className="text-body-sm text-on-surface-variant font-normal">/ {d.priceUnit}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onBook(d)}
            className="px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary text-label-md transition-all shadow-sm active:scale-95"
          >
            Detail &amp; Pesan
          </button>
        </div>
      </div>
    </article>
  )
}
