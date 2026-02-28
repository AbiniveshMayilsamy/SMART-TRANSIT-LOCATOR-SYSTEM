import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Input } from '../components/ui/Input'
import { Plus, Search } from 'lucide-react'

const Vehicles = () => {
  const [showModal, setShowModal] = useState(false)

  const vehicles = [
    { id: 'BUS-042', type: 'Standard Bus', capacity: 50, status: 'Active', route: 'R-101', health: 95 },
    { id: 'BUS-128', type: 'Express Bus', capacity: 45, status: 'Active', route: 'R-205', health: 88 },
    { id: 'BUS-067', type: 'Standard Bus', capacity: 50, status: 'Maintenance', route: '-', health: 45 },
    { id: 'BUS-201', type: 'Mini Bus', capacity: 30, status: 'Active', route: 'R-089', health: 92 },
    { id: 'BUS-156', type: 'Standard Bus', capacity: 50, status: 'Offline', route: '-', health: 0 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Vehicles Management</h1>
        <Button onClick={() => setShowModal(true)}>
          <Plus size={20} className="mr-2" />
          Add Vehicle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Fleet Overview ({vehicles.length})</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Search vehicles..." className="pl-10 w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Vehicle ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Capacity</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Assigned Route</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Health</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map(vehicle => (
                  <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{vehicle.id}</td>
                    <td className="py-3 px-4 text-sm">{vehicle.type}</td>
                    <td className="py-3 px-4 text-sm">{vehicle.capacity}</td>
                    <td className="py-3 px-4">
                      <Badge variant={vehicle.status === 'Active' ? 'success' : vehicle.status === 'Maintenance' ? 'warning' : 'default'}>
                        {vehicle.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      {vehicle.route !== '-' ? <Badge variant="primary">{vehicle.route}</Badge> : '-'}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${vehicle.health > 70 ? 'bg-green-500' : vehicle.health > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${vehicle.health}%` }}></div>
                        </div>
                        <span className="text-sm">{vehicle.health}%</span>
                      </div>
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

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add New Vehicle">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle ID</label>
            <Input placeholder="e.g., BUS-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option>Standard Bus</option>
              <option>Express Bus</option>
              <option>Mini Bus</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
            <Input type="number" placeholder="50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option>Active</option>
              <option>Maintenance</option>
              <option>Offline</option>
            </select>
          </div>
          <Button className="w-full">Add Vehicle</Button>
        </div>
      </Modal>
    </div>
  )
}

export default Vehicles
