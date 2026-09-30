import { useRef } from 'react'
import { Icon } from './Icon'
import type { Destination } from '../data/home'

function DestinationCard({ d }: { d: Destination }) {
  const isCritical = d.filledPercent >= 80

  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group snap-start shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={d.imageAlt}
          src={d.image}
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Icon name="grade" className="text-secondary text-[16px]" />
          <span className="text-label-sm font-semibold text-on-surface">{d.rating}</span>
          <span className="text-caption text-outline">({d.reviews} ulasan)</span>
        </div>
        <div
          className={`absolute top-3 right-3 text-caption uppercase px-2.5 py-1 rounded-full font-bold tracking-wide ${
            isCritical ? 'bg-error text-on-error' : 'bg-primary text-on-primary'
          }`}
        >
          {d.filledPercent}% Terisi
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-caption text-primary uppercase font-bold tracking-wide">{d.category}</span>
          <h3 className="text-title-lg text-on-surface mt-0.5 mb-1 group-hover:text-primary transition-colors">
            {d.name}
          </h3>
          <p className="text-body-sm text-on-surface-variant line-clamp-2">{d.description}</p>
        </div>

        <div className="my-4 bg-surface-container-low p-3 rounded-xl">
          <div className="flex justify-between items-center mb-1.5 text-label-sm">
            <span className="text-outline">Sisa Kuota Hari Ini</span>
            <span className="font-bold text-on-surface">{d.remaining}</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
            <div
              className={`h-full rounded-full ${isCritical ? 'bg-error' : 'bg-primary'}`}
              style={{ width: `${d.filledPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-caption text-outline block">Mulai dari</span>
            <span className="text-title-lg font-bold text-secondary">
              {d.price}
              <span className="text-body-sm text-outline font-normal">/pax</span>
            </span>
          </div>
          <a
            href="#"
            className="px-4 py-2 bg-secondary hover:bg-secondary-container text-on-secondary rounded-lg text-label-sm font-semibold transition-colors"
          >
            Pesan
          </a>
        </div>
      </div>
    </div>
  )
}

export function FeaturedDestinations({ destinations }: { destinations: Destination[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="destinasi" className="w-full py-20 bg-surface-container-low scroll-mt-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <div className="text-caption text-secondary uppercase tracking-widest font-semibold mb-1">
              Eksplorasi Langsung
            </div>
            <h2 className="text-headline-md text-on-surface">Destinasi Unggulan Terhubung DestinaPro</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Sebelumnya"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-on-surface hover:text-primary transition-colors"
            >
              <Icon name="chevron_left" className="text-[20px]" />
            </button>
            <button
              type="button"
              aria-label="Berikutnya"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-on-surface hover:text-primary transition-colors"
            >
              <Icon name="chevron_right" className="text-[20px]" />
            </button>
          </div>
        </div>

        {destinations.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-2xl p-12 text-center text-on-surface-variant">
            <Icon name="travel_explore" className="text-[40px] text-outline mb-2" />
            <p className="text-title-md text-on-surface">Destinasi tidak ditemukan</p>
            <p className="text-body-md">Coba ubah kata kunci atau tipe wisata Anda.</p>
          </div>
        ) : (
          <div ref={trackRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
            {destinations.map((d) => (
              <DestinationCard key={d.name} d={d} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
