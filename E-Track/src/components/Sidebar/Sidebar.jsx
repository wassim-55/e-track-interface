import styles from './Sidebar.module.css'
import { 
  FaHome, 
  FaTruck, 
  FaMapMarkedAlt, 
  FaHistory, 
  FaWrench, 
  FaUser,
  FaShieldAlt,
  FaSignOutAlt 
} from 'react-icons/fa'

export default function Sidebar({ isOpen }) {
  const menuItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Fleet and Devices', icon: <FaTruck /> },
    { name: 'Fleet Tracking', icon: <FaMapMarkedAlt /> },
    { name: 'History', icon: <FaHistory /> },
    { name: 'Maintenance', icon: <FaWrench /> },
    { name: 'Personal', icon: <FaUser /> },
    { name: 'Access management', icon: <FaShieldAlt /> },
  ]

  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <h1 className={styles.logo}>E-TRACK</h1>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <span className={styles.icon}>{item.icon}</span>
            {item.name}
          </li>
        ))}
        <li className={styles.logout}>
          <span className={styles.icon}><FaSignOutAlt /></span>
          Log out
        </li>
      </ul>
    </nav>
  )
}