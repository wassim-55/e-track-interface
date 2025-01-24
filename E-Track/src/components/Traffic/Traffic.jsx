// components/Traffic/Traffic.jsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './Traffic.module.css'

const data = [
  { name: 'Temporaire', value: 34, color: '#3182CE' },
  { name: 'Permanent', value: 66, color: '#48BB78' },
]

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180))
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180))

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function Traffic() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Traffic</h3>
      </div>
      
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={0}
              label={renderLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legendContainer}>
        {data.map((entry, index) => (
          <div key={index} className={styles.legendItem}>
            <span 
              className={styles.colorBox} 
              style={{ backgroundColor: entry.color }}
            />
            <span className={styles.label}>
              {entry.name} {entry.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}