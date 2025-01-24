import { useState } from 'react'
import { FaTruck, FaBoxOpen, FaParking, FaAnchor } from 'react-icons/fa'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import styles from './Overview.module.css'

const timeFilters = ['Semaine', 'Mois', 'Année']
const stats = [
  { 
    title: 'Camions', 
    value: '224',
    icon: <FaTruck />,
    color: '#3182CE',
    chartData: [45, 60, 55, 70, 65, 80]
  },
  { 
    title: 'livraison encours', 
    value: '17',
    icon: <FaBoxOpen />,
    color: '#48BB78',
    chartData: [30, 45, 40, 55, 50, 65]
  },
  { 
    title: 'Parkings libres', 
    value: '197',
    icon: <FaParking />,
    color: '#9F7AEA',
    chartData: [80, 75, 85, 70, 90, 95]
  },
  { 
    title: 'Quais libres', 
    value: '10',
    icon: <FaAnchor />,
    color: '#F56565',
    chartData: [20, 25, 30, 35, 40, 45]
  }
]

const MiniChart = ({ data, color }) => (
  <ResponsiveContainer width={60} height={30}>
    <LineChart data={data.map(value => ({ value }))}>
      <Line
        type="monotone"
        dataKey="value"
        stroke={color}
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  </ResponsiveContainer>
)

export default function Overview() {
  const [selectedFilter, setSelectedFilter] = useState('Semaine')

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Overview</h3>
        <div className={styles.filters}>
          {timeFilters.map(filter => (
            <button
              key={filter}
              className={`${styles.filterButton} ${selectedFilter === filter ? styles.active : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={styles.card}
            style={{ 
              background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
              borderLeft: `4px solid ${stat.color}`
            }}
          >
            <div className={styles.content}>
              <div className={styles.icon} style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className={styles.valueContainer}>
                <span className={styles.value}>{stat.value}</span>
                <MiniChart data={stat.chartData} color={stat.color} />
              </div>
              <span className={styles.title}>{stat.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}