import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import TheoryScreen from './pages/TheoryScreen'
import VideosScreen from './pages/VideosScreen'
import QuizScreen from './pages/QuizScreen'
import TransportScreen from './pages/TransportScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/theory" element={<TheoryScreen />} />
        <Route path="/videos" element={<VideosScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/transport" element={<TransportScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
