import { Link, NavLink } from 'react-router-dom'
import { Icon } from './Icon'
import { LOGO_URL, NAV_LINKS, PROFILE_URL } from '../data/home'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img alt="DestinaPro Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
          <span className="text-title-md text-on-surface tracking-tight">DestinaPro</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 p-1 rounded-full border border-outline-variant/30">
          {NAV_LINKS.map((link) => {
            const base = 'text-label-md px-4 py-1.5 rounded-full transition-all duration-200'
            const idle = `${base} text-on-surface-variant hover:text-on-surface`
            return link.to ? (
              <NavLink
                key={link.label}
                to={link.to}
                end
                className={({ isActive }) =>
                  isActive ? `${base} bg-surface-container text-primary font-semibold` : idle
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <a key={link.label} href="#" className={idle}>
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            aria-label="Notifikasi"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          >
            <Icon name="notifications" className="text-[20px]" />
          </button>

          <div className="hidden sm:flex items-center bg-surface-container-low rounded-full p-0.5 border border-outline-variant/30">
            <button
              type="button"
              className="text-label-sm px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary shadow-[0_1px_3px_rgba(15,23,42,0.05)]"
            >
              ID
            </button>
            <button
              type="button"
              className="text-label-sm px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-colors"
            >
              EN
            </button>
          </div>

          <Link
            to="/jelajah-destinasi"
            className="hidden md:inline-flex items-center justify-center text-label-md text-on-secondary bg-secondary hover:bg-secondary-container px-4 py-2 rounded-lg shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-all active:scale-[0.98]"
          >
            Pesan Tiket
          </Link>

          <Link to="/masuk" aria-label="Masuk akun" className="flex items-center pl-1 border-l border-outline-variant/40">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-lowest"
              src={PROFILE_URL}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
