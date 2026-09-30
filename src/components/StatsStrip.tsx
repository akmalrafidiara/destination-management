import { STATS } from '../data/home'

export function StatsStrip() {
  return (
    <section className="w-full py-8 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {STATS.map((stat) => (
          <div key={stat.title} className="flex flex-col items-center md:items-start p-4 text-center md:text-left">
            <span className={`text-display-mobile ${stat.tone}`}>{stat.value}</span>
            <span className="text-title-md text-on-surface mt-1">{stat.title}</span>
            <span className="text-body-sm text-outline">{stat.note}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
