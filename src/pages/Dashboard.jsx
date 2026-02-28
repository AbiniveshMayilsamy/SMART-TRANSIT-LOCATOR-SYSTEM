import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Bus, Clock, AlertCircle, TrendingUp, MapPin, Maximize2, Minimize2 } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    { label: 'Active Vehicles', value: '142/180', progress: 79, icon: Bus, color: 'text-blue-600' },
    { label: 'On-Time Performance', value: '94.2%', icon: Clock, color: 'text-green-600' },
    { label: 'Avg Wait Time', value: '4.2 min', trend: '↓ 12%', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'Active Alerts', value: '8', critical: '3 Critical', icon: AlertCircle, color: 'text-red-600' }
  ]

  const routes = [
    { id: 'R-101', status: 'On Time', eta: '12:45 PM', stops: 8, vehicle: 'BUS-042', capacity: 75 },
    { id: 'R-205', status: 'Delayed', eta: '1:15 PM', stops: 5, vehicle: 'BUS-128', capacity: 92 },
    { id: 'R-312', status: 'At Stop', eta: '12:30 PM', stops: 12, vehicle: 'BUS-067', capacity: 45 },
    { id: 'R-089', status: 'On Time', eta: '1:00 PM', stops: 6, vehicle: 'BUS-201', capacity: 68 }
  ]

  const schedules = [
    { route: 'R-101', operator: 'John Smith', time: '08:00 - 16:00', type: 'Regular', status: 'Active' },
    { route: 'R-205', operator: 'Sarah Johnson', time: '09:00 - 17:00', type: 'Express', status: 'Active' },
    { route: 'R-312', operator: 'Mike Davis', time: '07:00 - 15:00', type: 'Regular', status: 'Delayed' },
    { route: 'R-089', operator: 'Emma Wilson', time: '10:00 - 18:00', type: 'Express', status: 'Active' }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Live Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                {stat.progress && (
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${stat.progress}%` }}></div>
                  </div>
                )}
                {stat.trend && <p className="text-sm text-green-600 mt-1">{stat.trend} improvement</p>}
                {stat.critical && <p className="text-sm text-red-600 mt-1">{stat.critical}</p>}
              </div>
              <stat.icon className={stat.color} size={24} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Map Overview</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" className="text-sm py-1">Satellite</Button>
                <Button variant="outline" className="text-sm py-1">Traffic</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative">
              <MapPin className="text-gray-400" size={48} />
              <p className="text-gray-500 ml-2">Map View</p>
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>On Time</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Delayed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>At Stop</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50">
                  <Maximize2 size={20} />
                </button>
                <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50">
                  <Minimize2 size={20} />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {routes.map((route) => (
                <div key={route.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="primary">{route.id}</Badge>
                    <Badge variant={route.status === 'On Time' ? 'success' : route.status === 'Delayed' ? 'danger' : 'info'}>
                      {route.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">ETA: {route.eta}</p>
                  <p className="text-sm text-gray-600">Stops: {route.stops} remaining</p>
                  <p className="text-sm text-gray-600 mb-2">Vehicle: {route.vehicle}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${route.capacity}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Capacity: {route.capacity}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Schedule Overview</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline">Import CSV</Button>
              <Button>Auto Assign</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Route ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Operator</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time Window</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4"><Badge variant="primary">{schedule.route}</Badge></td>
                    <td className="py-3 px-4 text-sm">{schedule.operator}</td>
                    <td className="py-3 px-4 text-sm">{schedule.time}</td>
                    <td className="py-3 px-4 text-sm">{schedule.type}</td>
                    <td className="py-3 px-4">
                      <Badge variant={schedule.status === 'Active' ? 'success' : 'warning'}>{schedule.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" className="text-sm py-1">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
