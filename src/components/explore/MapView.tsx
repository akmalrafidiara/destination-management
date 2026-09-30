import { Icon } from '../Icon'
import { MAP_IMAGE_URL, type ExploreDestination } from '../../data/explore'

interface Props {
  destinations: ExploreDestination[]
  onBook: (d: ExploreDestination) => void
}

export function MapView({ destinations, onBook }: Props) {
  return (
    <div className="mb-12 bg-surface-container-lowest rounded-2xl p-4 shadow-sm overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 h-[520px] rounded-xl overflow-hidden relative shadow-inner">
          <div
            className="w-full h-full bg-cover bg-center"
            role="img"
            aria-label="Peta kawasan wisata nasional"
            style={{ backgroundImage: `url('${MAP_IMAGE_URL}')` }}
          />
          <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-xl shadow-md flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-secondary animate-ping" />
            <div>
              <p className="text-label-sm text-on-surface font-semibold">Sensor Densitas Wisata Aktif</p>
              <p className="text-caption text-on-surface-variant">
                {destinations.length} Zona Terpantau Terkoneksi Gate Digital
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Icon name="route" />
              </div>
              <div>
                <h4 className="text-title-md text-on-surface">Panduan Jalur Lintasan &amp; Shuttle</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Terintegrasi titik kumpul kendaraan resmi &amp; zonasi bebas polusi
                </p>
              </div>
            </div>
            <button
              type="button"
              disabled={destinations.length === 0}
              onClick={() => destinations[0] && onBook(destinations[0])}
              className="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md hover:bg-primary-container transition-all disabled:opacity-40"
            >
              Pilih Dari Peta
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col space-y-3 overflow-y-auto max-h-[520px] pr-1">
          {destinations.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => onBook(d)}
              className={`text-left p-3.5 rounded-xl hover:bg-surface-container transition-all ${
                i === 0 ? 'bg-surface-container-low' : 'bg-surface-container-lowest shadow-sm hover:bg-surface-container-low'
              }`}
            >
              <div className="flex items-center justify-between text-caption text-outline mb-1">
                <span>
                  {String(i + 1).padStart(2, '0')}. {d.regionLabel.toUpperCase()}
                </span>
                <span className={`font-semibold ${d.filledPercent >= 80 ? 'text-secondary' : 'text-primary'}`}>
                  Tersisa {d.remaining} Tiket
                </span>
              </div>
              <p className="text-title-md text-on-surface">{d.name}</p>
              <p className="text-body-sm text-on-surface-variant">{d.gateNote}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
