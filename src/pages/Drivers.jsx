import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Input } from '../components/ui/Input'
import { Plus, Search, Star } from 'lucide-react'

const Drivers = () => {
  const [showModal, setShowModal] = useState(false)

  const drivers = [
    { name: 'John Smith', license: 'DL-12345', exp: '8 years', vehicle: 'BUS-042', status: 'On Duty', rating: 4.8 },
    { name: 'Sarah Johnson', license: 'DL-67890', exp: '5 years', vehicle: 'BUS-128', status: 'On Duty', rating: 4.9 },
    { name: 'Mike Davis', license: 'DL-54321', exp: '12 years', vehicle: 'BUS-067', status: 'Off Duty', rating: 4.7 },
    { name: 'Emma Wilson', license: 'DL-98765', exp: '3 years', vehicle: 'BUS-201', status: 'On Duty', rating: 4.6 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Drivers Management</h1>
        <Button onClick={() => setShowModal(true)}>
          <Plus size={20} className="mr-2" />
          Add Driver
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Drivers List ({drivers.length})</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Search drivers..." className="pl-10 w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Driver</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">License</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Experience</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Assigned Vehicle</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rating</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold">
                          {driver.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium">{driver.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{driver.license}</td>
                    <td className="py-3 px-4 text-sm">{driver.exp}</td>
                    <td className="py-3 px-4"><Badge variant="primary">{driver.vehicle}</Badge></td>
                    <td className="py-3 px-4">
                      <Badge variant={driver.status === 'On Duty' ? 'success' : 'default'}>{driver.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{driver.rating}</span>
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

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add New Driver">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <Input placeholder="Enter driver name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
            <Input placeholder="DL-XXXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
            <Input placeholder="e.g., 5 years" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Assign Vehicle</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option>Select vehicle</option>
              <option>BUS-042</option>
              <option>BUS-128</option>
            </select>
          </div>
          <Button className="w-full">Add Driver</Button>
        </div>
      </Modal>
    </div>
  )
}

export default Drivers
