import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Modal } from '../components/ui/Modal'
import { MapPin, Search } from 'lucide-react'

const NearbyStops = () => {
  const [selectedStop, setSelectedStop] = useState(null)
  
  const stops = [
    { name: 'Central Station', distance: '0.5 km', routes: ['R-101', 'R-205'], load: 75 },
    { name: 'Market Square', distance: '1.2 km', routes: ['R-312', 'R-089'], load: 45 },
    { name: 'University Campus', distance: '2.1 km', routes: ['R-101', 'R-312'], load: 92 },
    { name: 'Hospital Junction', distance: '3.5 km', routes: ['R-205'], load: 38 }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Nearby Stops</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Map View</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                <p className="text-gray-500">Stop Locations Map</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input placeholder="Search stops..." className="pl-10" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Radius</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>5 km</option>
                  <option>10 km</option>
                  <option>20 km</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nearby Stops ({stops.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[500px] overflow-y-auto">
                {stops.map((stop, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 cursor-pointer" onClick={() => setSelectedStop(stop)}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{stop.name}</h4>
                      <span className="text-sm text-gray-500">{stop.distance}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {stop.routes.map(route => (
                        <Badge key={route} variant="primary">{route}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Passenger Load</span>
                      <span className="text-sm font-semibold">{stop.load}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${stop.load}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Modal isOpen={!!selectedStop} onClose={() => setSelectedStop(null)} title="Stop Details">
        {selectedStop && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">{selectedStop.name}</h3>
              <p className="text-gray-600">Distance: {selectedStop.distance}</p>
            </div>
            <div>
              <p className="font-medium mb-2">Active Routes:</p>
              <div className="flex gap-2">
                {selectedStop.routes.map(route => (
                  <Badge key={route} variant="primary">{route}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Passenger Load: {selectedStop.load}%</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary-600 h-3 rounded-full" style={{ width: `${selectedStop.load}%` }}></div>
              </div>
            </div>
            <Button className="w-full">View Full Details</Button>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default NearbyStops
