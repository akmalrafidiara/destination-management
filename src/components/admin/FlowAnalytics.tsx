import { HOURLY_AXIS, PAYMENT_CHANNELS } from '../../data/admin'

const panel = 'p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20'

export function FlowAnalytics() {
  return (
    <div className="lg:col-span-8 space-y-8">
      <div className={panel}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-4 border-b border-outline-variant/20">
          <div>
            <h2 className="text-title-lg text-on-surface font-bold tracking-tight">Arus Kedatangan Wisatawan Per Jam</h2>
            <p className="text-caption text-outline mt-0.5">
              Korelasi kepadatan pengunjung terhadap pemenuhan kuota zona inti
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-label-sm text-on-surface-variant">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Aktual Gerbang
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-low text-label-sm text-on-surface-variant">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" /> Prediksi AI
            </span>
          </div>
        </div>

        <div className="relative w-full h-56 pt-6">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 600 180"
            role="img"
            aria-label="Grafik arus kedatangan wisatawan per jam"
          >
            <defs>
              <linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#006194" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#006194" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 90, 140].map((y) => (
              <line key={y} stroke="#bfc7d2" strokeDasharray="4 4" strokeOpacity="0.3" x1="0" x2="600" y1={y} y2={y} />
            ))}
            <path
              d="M 0,160 Q 75,130 150,70 T 300,30 T 450,110 T 600,140"
              fill="none"
              opacity="0.8"
              stroke="#fd651e"
              strokeDasharray="5 5"
              strokeWidth="2"
            />
            <path
              d="M 0,170 C 70,165 110,120 180,85 C 240,55 280,25 330,40 C 390,58 430,95 490,115 C 530,128 570,145 600,150 L 600,180 L 0,180 Z"
              fill="url(#primaryAreaGrad)"
            />
            <path
              d="M 0,170 C 70,165 110,120 180,85 C 240,55 280,25 330,40 C 390,58 430,95 490,115 C 530,128 570,145 600,150"
              fill="none"
              stroke="#006194"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <circle cx="330" cy="40" fill="#ffffff" r="5" stroke="#006194" strokeWidth="3" />
            <circle cx="180" cy="85" fill="#006194" r="4" />
            <circle cx="490" cy="115" fill="#006194" r="4" />
          </svg>
          <div className="absolute top-3 left-1/2 -translate-x-12 px-3 py-1 bg-surface-container-highest rounded-lg shadow-sm border border-outline-variant/30">
            <span className="text-caption text-primary font-bold">Puncak: 420 Masuk (10:00 - 11:00)</span>
          </div>
        </div>

        <div className="flex justify-between pt-5 text-outline text-caption">
          {HOURLY_AXIS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      <div className={panel}>
        <div className="flex items-center justify-between gap-3 pb-5 border-b border-outline-variant/20">
          <div>
            <h2 className="text-title-lg text-on-surface font-bold tracking-tight">Komposisi Kanal Penerimaan Finansial</h2>
            <p className="text-caption text-outline mt-0.5">
              Otomasi setoran real-time masuk rekening kas pengelolaan daerah
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-label-sm font-semibold">
            Integrasi API Aktif
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {PAYMENT_CHANNELS.map((c) => (
            <div
              key={c.name}
              className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-label-sm font-semibold text-on-surface">{c.name}</span>
                  <span className={`text-caption font-bold ${c.text}`}>{c.percent}%</span>
                </div>
                <div className="text-title-md font-bold text-on-surface">{c.amount}</div>
              </div>
              <div>
                <div className="w-full bg-surface-container h-1.5 rounded-full mt-4 overflow-hidden">
                  <div className={`${c.bar} h-full rounded-full`} style={{ width: `${c.percent}%` }} />
                </div>
                <span className="text-caption text-on-surface-variant block mt-2.5">{c.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
