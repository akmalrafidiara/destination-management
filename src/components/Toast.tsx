import { Icon } from './Icon'

export function Toast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[60] transition-all duration-300 pointer-events-none flex items-center gap-3 bg-inverse-surface text-inverse-on-surface px-5 py-3.5 rounded-xl shadow-xl ${
        message ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <Icon name="check_circle" className="text-tertiary-fixed text-[20px]" />
      <span className="text-body-sm font-medium">{message}</span>
    </div>
  )
}
