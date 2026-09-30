import { ControlHeader } from '../components/admin/ControlHeader'
import { KpiCards } from '../components/admin/KpiCards'
import { FlowAnalytics } from '../components/admin/FlowAnalytics'
import { SidePanels } from '../components/admin/SidePanels'
import { TransactionsTable } from '../components/admin/TransactionsTable'

export default function AdminWorkspacePage() {
  return (
    <div className="flex flex-col w-full pb-16 space-y-8">
      <ControlHeader />
      <KpiCards />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <FlowAnalytics />
        <SidePanels />
      </div>
      <TransactionsTable />
    </div>
  )
}
