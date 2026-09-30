import { FOOTER_LINKS, LOGO_URL } from '../data/home'

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <img alt="DestinaPro Logo" className="h-6 w-auto object-contain opacity-80" src={LOGO_URL} />
            <span className="text-body-sm text-on-surface-variant">
              DestinaPro — Intelligent Destination Management &amp; Visitor Ticketing
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LINKS.map((label) => (
              <a key={label} href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-outline">
            © {new Date().getFullYear()} DestinaPro Technologies Inc. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-4 text-outline text-caption">
            <span>Infrastruktur Wisata Cerdas</span>
            <span className="inline-block w-1 h-1 rounded-full bg-outline-variant" />
            <span>Status Operasional Normal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
