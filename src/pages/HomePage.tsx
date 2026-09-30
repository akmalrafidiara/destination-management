import { useMemo, useState } from 'react'
import { Hero } from '../components/Hero'
import { StatsStrip } from '../components/StatsStrip'
import { ValueProps } from '../components/ValueProps'
import { FeaturedDestinations } from '../components/FeaturedDestinations'
import { PortalGateway } from '../components/PortalGateway'
import { CtaBanner } from '../components/CtaBanner'
import { DESTINATIONS, type SearchState } from '../data/home'

const EMPTY_SEARCH: SearchState = { query: '', date: '', typeKeyword: '' }

export default function HomePage() {
  const [draft, setDraft] = useState<SearchState>(EMPTY_SEARCH)
  const [applied, setApplied] = useState<SearchState>(EMPTY_SEARCH)

  const results = useMemo(() => {
    const q = applied.query.trim().toLowerCase()
    const types = applied.typeKeyword ? applied.typeKeyword.split('|') : []
    return DESTINATIONS.filter((d) => {
      const matchesQuery = !q || `${d.name} ${d.category} ${d.description}`.toLowerCase().includes(q)
      const matchesType = types.length === 0 || types.some((t) => d.category.includes(t))
      return matchesQuery && matchesType
    })
  }, [applied])

  const handleSearch = () => {
    setApplied(draft)
    document.getElementById('destinasi')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero search={draft} onChange={setDraft} onSubmit={handleSearch} />
      <StatsStrip />
      <ValueProps />
      <FeaturedDestinations destinations={results} />
      <PortalGateway />
      <CtaBanner />
    </>
  )
}
