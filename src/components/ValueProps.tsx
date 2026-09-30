import { Icon } from './Icon'
import { VALUE_PROPS } from '../data/home'

export function ValueProps() {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="text-caption text-primary uppercase tracking-widest mb-2 font-bold">
              Solusi Terpadu Menjawab Tantangan Pengelolaan
            </div>
            <h2 className="text-headline-md md:text-headline-lg text-on-surface">
              Dirancang Khusus Mengakhiri Sengkarut Pengelolaan Wisata Fisik
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-md">
            Platform modular yang mentransformasi kerumitan birokrasi, disparitas catatan kas, dan keluhan antrean
            menjadi arsitektur modern berstandar internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform ${item.iconBg}`}
                >
                  <Icon name={item.icon} className="text-[26px]" />
                </div>
                <h3 className="text-title-lg text-on-surface mb-2">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant">{item.body}</p>
              </div>
              <div className="mt-6 bg-surface-container-low/50 -mx-7 -mb-7 px-7 py-4 flex items-center justify-between">
                <span className="text-label-sm text-outline">{item.footLeft}</span>
                <span className={`text-label-sm font-semibold flex items-center gap-1 ${item.footTone}`}>
                  {item.footRight} <Icon name={item.footIcon} className="text-[14px]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
