import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import styles from './TrafficChart.module.css'

const data = [
  { month: 'Feb', traffic: 2400 },
  { month: 'Mar', traffic: 4200 },
  { month: 'Apr', traffic: 3700 },
  { month: 'May', traffic: 2800 },
  { month: 'Jun', traffic: 5100 },
  { month: 'Jul', traffic: 3900 },
  { month: 'Aug', traffic: 4800 },
  { month: 'Sep', traffic: 4100 },
  { month: 'Oct', traffic: 3200 },
  { month: 'Nov', traffic: 4500 },
  { month: 'Dec', traffic: 4900 },
]

export default function TrafficChart() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Traffic des vehicules</h3>
        <span>Jan 01 - Dec 31</span>
      </div>
      
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3182CE" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3182CE" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#718096' }}
              interval="preserveStartEnd"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#718096' }}
              width={40}
            />
            <Tooltip
              contentStyle={{
                background: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#3182CE"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTraffic)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}