import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Program } from './pages/Program'
import { Speakers } from './pages/Speakers'
import { Invitation } from './pages/Invitation'
import { Committee } from './pages/Committee'
import { Registration } from './pages/Registration'
import { Abstracts } from './pages/Abstracts'
import { Contact } from './pages/Contact'
import { GeneralInfo } from './pages/GeneralInfo'
import { Shuttle } from './pages/Shuttle'
import { Certificate } from './pages/Certificate'
import { Guide } from './pages/Guide'
import { Announcements } from './pages/Announcements'
import { Admin } from './pages/Admin'
import { NotificationService } from './services/notificationService'

function App() {
  useEffect(() => {
    // Request notification permission on app load
    NotificationService.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted')
      }
    })

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.log('Service Worker registration failed:', error)
      })
    }
  }, [])

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/davet" element={<Invitation />} />
            <Route path="/kurullar" element={<Committee />} />
            <Route path="/kayit" element={<Registration />} />
            <Route path="/bildiri" element={<Abstracts />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/bilgiler" element={<GeneralInfo />} />
            <Route path="/shuttle" element={<Shuttle />} />
            <Route path="/sertifika" element={<Certificate />} />
            <Route path="/kilavuz" element={<Guide />} />
            <Route path="/duyurular" element={<Announcements />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
