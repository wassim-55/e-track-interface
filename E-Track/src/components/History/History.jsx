import styles from './History.module.css'
import { FaChevronRight, FaExclamationCircle, FaUser } from 'react-icons/fa'

const historyItems = [
  { title: 'Camion 125B a dépasser 48 heures de stationnement', location: 'Avon B1', time: '10:17 am', alert: true },
  { title: 'Nouveau camion détecter dans "Main entrance 2"', location: '---', time: '8:10 am', user: true },
  { title: 'Vehicule Detected in Office B11', location: '#1283550', time: '8:44 am', user: true },
  { title: 'Vehicule Detected in Area 2', location: '#1283550', time: '8:41 am', user: true },
  { title: 'Correct Vehicle Detected in Dock B01 (ontime)', location: 'Avon B01', time: '8:00 am', user: true },
]

export default function History() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Historique (1)</h3>
        <a href="#" className={styles.seeMore}>
          Voir plus <FaChevronRight size={12} />
        </a>
      </div>
      
      <div className={styles.historyList}>
        {historyItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.item} ${item.alert ? styles.alertItem : ''}`}
          >
            {item.alert ? (
              <FaExclamationCircle className={styles.alertIcon} />
            ) : (
              <FaUser className={styles.userIcon} />
            )}
            <div className={styles.content}>
              <strong>{item.title}</strong>
              <span className={styles.location}>[{item.location}]</span>
            </div>
            <span className={styles.time}>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}