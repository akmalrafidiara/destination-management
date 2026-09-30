import { Icon } from '../Icon'
import {
  CATEGORY_CHIPS,
  PRICE_OPTIONS,
  RATING_OPTIONS,
  REGION_OPTIONS,
  type PriceKey,
  type RegionKey,
} from '../../data/explore'

export interface ExploreFilterState {
  query: string
  region: RegionKey
  price: PriceKey
  minRating: number
  category: string
}

interface Props {
  value: ExploreFilterState
  onChange: (next: ExploreFilterState) => void
}

const selectClass =
  'w-full h-11 bg-surface-container-low rounded-xl text-body-sm text-on-surface appearance-none focus:outline-none cursor-pointer'

export function ExploreFilters({ value, onChange }: Props) {
  const set = <K extends keyof ExploreFilterState>(key: K, v: ExploreFilterState[K]) =>
    onChange({ ...value, [key]: v })

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        <div className="md:col-span-5 relative">
          <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
          <input
            type="text"
            value={value.query}
            onChange={(e) => set('query', e.target.value)}
            placeholder="Cari nama cagar alam, geopark, atau atraksi bahari..."
            className="w-full h-11 pl-11 pr-4 bg-surface-container-low rounded-xl text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all"
          />
        </div>

        <div className="md:col-span-3 relative">
          <Icon name="near_me" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
          <select
            className={`${selectClass} pl-11 pr-8`}
            value={value.region}
            onChange={(e) => set('region', e.target.value as RegionKey)}
          >
            {REGION_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[18px] pointer-events-none" />
        </div>

        <div className="md:col-span-2 relative">
          <select
            className={`${selectClass} px-3.5`}
            value={value.price}
            onChange={(e) => set('price', e.target.value as PriceKey)}
          >
            {PRICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[18px] pointer-events-none" />
        </div>

        <div className="md:col-span-2 relative">
          <select
            className={`${selectClass} px-3.5`}
            value={value.minRating}
            onChange={(e) => set('minRating', Number(e.target.value))}
          >
            {RATING_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[18px] pointer-events-none" />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
        <span className="text-caption text-outline uppercase tracking-wider mr-2 shrink-0">Kategori:</span>
        {CATEGORY_CHIPS.map((chip) => {
          const active = value.category === chip
          return (
            <button
              key={chip}
              type="button"
              onClick={() => set('category', chip)}
              className={`px-3.5 py-1.5 rounded-full text-label-sm shrink-0 transition-all ${
                active
                  ? 'bg-primary text-on-primary shadow-sm active:scale-95'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {chip}
            </button>
          )
        })}
      </div>
    </div>
  )
}
