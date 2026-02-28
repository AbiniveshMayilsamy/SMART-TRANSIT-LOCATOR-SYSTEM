import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react'

const Analytics = () => {
  const kpis = [
    { label: 'Fleet Utilization', value: '87%', trend: '+5%', icon: Activity, up: true },
    { label: 'On-Time Rate', value: '94.2%', trend: '+2.1%', icon: Clock, up: true },
    { label: 'Avg Delay', value: '4.2 min', trend: '-12%', icon: TrendingDown, up: true },
    { label: 'Fuel Efficiency', value: '8.5 km/L', trend: '+3%', icon: TrendingUp, up: true }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <Card key={i}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-800">{kpi.value}</p>
                <p className={`text-sm mt-1 ${kpi.up ? 'text-green-600' : 'text-red-600'}`}>{kpi.trend}</p>
              </div>
              <kpi.icon className="text-primary-600" size={24} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>On-Time Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Line Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fleet Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Bar Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delay Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Area Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Route Efficiency Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Heatmap</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Analytics
