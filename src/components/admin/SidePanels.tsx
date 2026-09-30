import { useState } from 'react'
import { Icon } from '../Icon'
import { MAINTENANCE_TASKS, QUICK_ACTIONS, type MaintenanceTask } from '../../data/admin'

const panel = 'p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20'

function TaskCard({ task, assigned, onAssign }: { task: MaintenanceTask; assigned: boolean; onAssign: () => void }) {
  if (task.state === 'urgent') {
    return (
      <div className="p-4 bg-secondary-fixed/30 rounded-xl flex flex-col gap-2 border border-secondary-container/30">
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-secondary-container text-on-secondary text-caption font-bold">
            <Icon name="schedule" className="text-[13px]" /> {task.time}
          </span>
          <span className="text-caption text-secondary font-bold uppercase tracking-wider">{task.priority}</span>
        </div>
        <h4 className="text-label-md font-bold text-on-secondary-container mt-0.5">{task.title}</h4>
        <p className="text-caption text-on-secondary-container/90 leading-relaxed">{task.description}</p>
        <div className="flex items-center justify-between pt-1.5 border-t border-secondary-container/20">
          <span className="text-caption text-on-secondary-container font-medium">{task.owner}</span>
          <button
            type="button"
            disabled={assigned}
            onClick={onAssign}
            className="px-2.5 py-1 rounded-md bg-secondary text-on-secondary text-caption font-semibold shadow-sm hover:opacity-95 transition-opacity disabled:opacity-60"
          >
            {assigned ? 'Ditugaskan' : 'Tugaskan'}
          </button>
        </div>
      </div>
    )
  }

  const done = task.state === 'done'
  return (
    <div className="p-4 bg-surface-container-low rounded-xl flex flex-col gap-2 border border-outline-variant/20">
      <div className="flex items-start justify-between">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-caption ${
            done
              ? 'bg-surface-container-highest text-primary font-semibold'
              : 'bg-surface-container text-on-surface-variant font-medium'
          }`}
        >
          <Icon name={done ? 'check_circle' : 'update'} className="text-[13px]" /> {task.time}
        </span>
        <span className="text-caption text-outline">{task.priority}</span>
      </div>
      <h4 className="text-label-md font-bold text-on-surface mt-0.5">{task.title}</h4>
      <p className="text-caption text-on-surface-variant leading-relaxed">{task.description}</p>
      <div className="flex items-center justify-between pt-1.5 border-t border-outline-variant/20">
        <span className="text-caption text-outline">{task.owner}</span>
        <span className={`text-caption ${done ? 'font-medium text-primary' : 'text-outline'}`}>{task.meta}</span>
      </div>
    </div>
  )
}

export function SidePanels() {
  const [assigned, setAssigned] = useState<Set<string>>(new Set())
  const total = MAINTENANCE_TASKS.length
  const done = MAINTENANCE_TASKS.filter((t) => t.state === 'done').length

  return (
    <div className="lg:col-span-4 space-y-6">
      <div className={`${panel} flex flex-col justify-between`}>
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
            <div>
              <h2 className="text-title-lg text-on-surface font-bold tracking-tight">Jadwal Perawatan</h2>
              <p className="text-caption text-outline mt-0.5">Logistik, sanitasi, &amp; keselamatan</p>
            </div>
            <button
              type="button"
              title="Tambah Tugas"
              aria-label="Tambah Tugas"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-variant transition-colors"
            >
              <Icon name="add" className="text-[18px]" />
            </button>
          </div>
          <div className="space-y-3.5 pt-4">
            {MAINTENANCE_TASKS.map((t) => (
              <TaskCard
                key={t.id}
                task={t}
                assigned={assigned.has(t.id)}
                onAssign={() => setAssigned((prev) => new Set(prev).add(t.id))}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 bg-surface-container rounded-xl p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Icon name="build_circle" className="text-primary text-[20px]" />
            <span className="text-caption text-on-surface font-semibold">
              {done} dari {total} Tugas Selesai
            </span>
          </div>
          <span className="text-caption text-primary font-bold">{Math.round((done / total) * 100)}% Kelar</span>
        </div>
      </div>

      <div className={`${panel} space-y-4`}>
        <h3 className="text-title-md text-on-surface font-bold">Tindakan Cepat Lapangan</h3>
        <div className="space-y-3">
          {QUICK_ACTIONS.map((a) => (
            <button
              key={a.label}
              type="button"
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all text-on-surface text-label-md group border border-outline-variant/20"
            >
              <span className="flex items-center gap-3">
                <Icon name={a.icon} className={`${a.tone} group-hover:scale-110 transition-transform`} />
                <span className="font-semibold">{a.label}</span>
              </span>
              <Icon name="chevron_right" className="text-outline text-[18px]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
