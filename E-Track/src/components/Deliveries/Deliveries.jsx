import styles from './Deliveries.module.css'

export default function Deliveries() {
  return (
    <div className={styles.container}>
      <h3>Livraisons</h3>
      <div className={styles.content}>
        <div className={styles.status}>
          <span className={styles.badge}>Encours</span>
          <span className={styles.count}>12</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.button}>Voir tous</button>
          <button className={styles.primaryButton}>Programmer</button>
        </div>
      </div>
    </div>
  )
}