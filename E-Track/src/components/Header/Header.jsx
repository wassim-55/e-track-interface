import styles from './Header.module.css'

export default function Header({ onMenuToggle }) {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={onMenuToggle}>☰</button>
      <h2>Good afternoon, Wassim </h2>
      <div className={styles.timeFilter}>
      </div>
    </header>
  )
}