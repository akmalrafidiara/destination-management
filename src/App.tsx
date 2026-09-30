import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import AdminWorkspacePage from './pages/AdminWorkspacePage'
import LoginPage from './pages/LoginPage'
import MyTicketsPage from './pages/MyTicketsPage'
import { AdminLayout } from './components/admin/AdminLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="jelajah-destinasi" element={<ExplorePage />} />
          <Route path="tiket-saya" element={<MyTicketsPage />} />
        </Route>
        <Route path="masuk" element={<LoginPage />} />
        <Route element={<AdminLayout />}>
          <Route path="admin-workspace" element={<AdminWorkspacePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
