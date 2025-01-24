import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import styles from './Statistics.module.css'

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const statsData = [
  {
    title: 'Parking',
    value: '916',
    delta: '+8%',
    chartData: days.map((day, index) => ({
      day,
      value: index === 0 ? 0 : Math.floor(Math.random() * 100) + 20
    })),
    color: '#3182CE'
  },
  {
    title: 'Livraisons',
    value: '1.75k',
    delta: '+8%',
    chartData: days.map((day, index) => ({
      day,
      value: index === 0 ? 0 : Math.floor(Math.random() * 100) + 40
    })),
    color: '#48BB78'
  },
  {
    title: 'Revenue',
    value: '$2370',
    delta: '+8%',
    chartData: days.map((day, index) => ({
      day,
      value: index === 0 ? 0 : Math.floor(Math.random() * 100) + 60
    })),
    color: '#9F7AEA'
  },
  {
    title: 'Expenses',
    value: '$425',
    delta: '+8%',
    chartData: days.map((day, index) => ({
      day,
      value: index === 0 ? 0 : Math.floor(Math.random() * 100)
    })),
    color: '#F56565'
  }
]

const MiniLineChart = ({ data, color }) => (
  <ResponsiveContainer width="100%" height={80}>
    <LineChart data={data}>
      <XAxis 
        dataKey="day" 
        axisLine={false}
        tickLine={false}
        tick={{ fill: '#718096', fontSize: 10 }}
      />
      <YAxis 
        hide={true}
        domain={[0, 'auto']}
      />
      <Tooltip
        contentStyle={{
          background: '#fff',
          border: 'none',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      />
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

export default function Statistics() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Statistics</h3>
        <button className={styles.timeFilter}>
          Dernier mois
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#3182CE">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.row}>
          {statsData.slice(0, 2).map((stat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.title}>{stat.title}</span>
                <span className={styles.delta} style={{ color: stat.color }}>
                  {stat.delta}
                </span>
              </div>
              <div className={styles.value}>{stat.value}</div>
              <MiniLineChart data={stat.chartData} color={stat.color} />
            </div>
          ))}
        </div>

        <div className={styles.row}>
          {statsData.slice(2, 4).map((stat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.title}>{stat.title}</span>
                <span className={styles.delta} style={{ color: stat.color }}>
                  {stat.delta}
                </span>
              </div>
              <div className={styles.value}>{stat.value}</div>
              <MiniLineChart data={stat.chartData} color={stat.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}