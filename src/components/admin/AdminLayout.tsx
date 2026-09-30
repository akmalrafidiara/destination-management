import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon } from '../Icon'
import { ADMIN_NAV } from '../../data/admin'
import { LOGO_URL, PROFILE_URL } from '../../data/home'

export function AdminLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="bg-background min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col max-lg:hidden">
        <div className="h-16 px-6 flex items-center gap-3 border-b border-outline-variant/20">
          <img alt="DestinaPro Logo" className="h-7 w-auto object-contain" src={LOGO_URL} />
          <span className="text-title-md text-on-surface tracking-tight">DestinaPro</span>
        </div>

        <div className="px-4 py-3">
          <div className="bg-surface-container-low px-3 py-2 rounded-lg flex items-center justify-between">
            <span className="text-caption text-on-surface-variant uppercase tracking-wider">Kanal Destinasi</span>
            <span className="text-label-sm text-primary font-semibold">Admin HQ</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1">
          {ADMIN_NAV.map((item) => {
            const base = 'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all'
            const idle = `${base} text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface`
            const content = (
              <>
                <Icon name={item.icon} className="text-[20px]" />
                <span className="text-label-md">{item.label}</span>
              </>
            )
            return item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? `${base} bg-primary-container text-on-primary-container font-semibold` : idle
                }
              >
                {content}
              </NavLink>
            ) : (
              <a key={item.label} href="#" className={idle}>
                {content}
              </a>
            )
          })}
        </nav>

        <div className="p-4 border-t border-outline-variant/20">
          <Link
            to="/"
            className="flex items-center gap-2 text-label-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <Icon name="arrow_back" className="text-[18px]" />
            Kembali ke Portal Publik
          </Link>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <Link to="/" aria-label="Portal publik" className="lg:hidden text-on-surface-variant hover:text-primary">
              <Icon name="arrow_back" className="text-[20px]" />
            </Link>
            <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">Pusat Pengendali</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Notifikasi Operasional"
              className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              <Icon name="notifications" className="text-[20px]" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-outline-variant/40">
              <div className="text-right hidden sm:block">
                <p className="text-label-md text-on-surface font-semibold leading-tight">Pengelola Kawasan</p>
                <p className="text-caption text-outline">Disbudpar Prov.</p>
              </div>
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-lowest"
                src={PROFILE_URL}
              />
            </div>
          </div>
        </header>

        <main className="relative pt-16 bg-surface w-full px-4 sm:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
