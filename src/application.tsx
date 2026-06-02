import { Root } from './pages/root.tsx'
import { Snippets, Snippet } from './pages/snippets.tsx'
import { Devlogs, Devlog } from './pages/devlogs.tsx'

import { HashRouter, Route, Routes, Navigate } from "react-router-dom"
import './application.css'

export function Application() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />

        <Route path="/snippets" element={<Snippets />} />
        <Route path="/snippets/:slug" element={<Snippet />} />

        <Route path="/devlogs" element={<Devlogs />} />
        <Route path="/devlogs/:slug" element={<Devlog />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
