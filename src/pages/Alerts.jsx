import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { AlertTriangle, AlertCircle, Info } from 'lucide-react'

const Alerts = () => {
  const [selectedAlert, setSelectedAlert] = useState(null)

  const alerts = [
    { id: 1, route: 'R-205', severity: 'Critical', type: 'Breakdown', time: '10 min ago', message: 'Vehicle breakdown on Main St' },
    { id: 2, route: 'R-101', severity: 'Warning', type: 'Delay', time: '25 min ago', message: 'Traffic congestion causing delays' },
    { id: 3, route: 'R-312', severity: 'Info', type: 'Schedule', time: '1 hr ago', message: 'Route schedule updated' },
    { id: 4, route: 'R-089', severity: 'Critical', type: 'Safety', time: '2 hr ago', message: 'Driver reported safety concern' }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Alerts & Delays</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Critical</p>
              <p className="text-3xl font-bold text-red-600">3</p>
            </div>
            <AlertTriangle className="text-red-600" size={32} />
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Warning</p>
              <p className="text-3xl font-bold text-yellow-600">5</p>
            </div>
            <AlertCircle className="text-yellow-600" size={32} />
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Info</p>
              <p className="text-3xl font-bold text-blue-600">12</p>
            </div>
            <Info className="text-blue-600" size={32} />
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Alerts</CardTitle>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Routes</option>
                <option>R-101</option>
                <option>R-205</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Severity</option>
                <option>Critical</option>
                <option>Warning</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map(alert => (
              <div key={alert.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 cursor-pointer" onClick={() => setSelectedAlert(alert)}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="primary">{alert.route}</Badge>
                    <Badge variant={alert.severity === 'Critical' ? 'danger' : alert.severity === 'Warning' ? 'warning' : 'info'}>
                      {alert.severity}
                    </Badge>
                    <span className="text-sm font-medium">{alert.type}</span>
                  </div>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
                <p className="text-gray-700">{alert.message}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Modal isOpen={!!selectedAlert} onClose={() => setSelectedAlert(null)} title="Alert Details">
        {selectedAlert && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="primary">{selectedAlert.route}</Badge>
              <Badge variant={selectedAlert.severity === 'Critical' ? 'danger' : selectedAlert.severity === 'Warning' ? 'warning' : 'info'}>
                {selectedAlert.severity}
              </Badge>
            </div>
            <div>
              <p className="font-medium">Type: {selectedAlert.type}</p>
              <p className="text-sm text-gray-600">Time: {selectedAlert.time}</p>
            </div>
            <p className="text-gray-700">{selectedAlert.message}</p>
            <div className="flex gap-2">
              <Button className="flex-1">Resolve Alert</Button>
              <Button variant="outline" className="flex-1">Assign Team</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Alerts
