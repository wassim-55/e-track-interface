import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Overview from './components/Overview/Overview'
import TrafficChart from './components/TrafficChart/TrafficChart'
import Traffic from './components/Traffic/Traffic'
import History from './components/History/History'
import Statistics from './components/Statistics/Statistics'
import Deliveries from './components/Deliveries/Deliveries'
import './variables.css'
import styles from './App.module.css'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className={styles.appContainer}>
      {isMobile && (
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      )}

      <Sidebar isOpen={sidebarOpen && !isMobile} mobileOpen={sidebarOpen && isMobile} />
      
      <div className={styles.mainContent}>
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className={styles.dashboardGrid}>
          <div className={styles.overviewTrafficContainer}>
            <Overview />
            <Traffic />
          </div>
          <div className={styles.trafficHistoryContainer}>
            <TrafficChart />
          </div>
          <Statistics />
          <History />
          <Deliveries />
        </div>
      </div>
    </div>
  )
}