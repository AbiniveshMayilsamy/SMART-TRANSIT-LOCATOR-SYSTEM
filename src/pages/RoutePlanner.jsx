import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { MapPin, Plus, Navigation } from 'lucide-react'

const RoutePlanner = () => {
  const [stops, setStops] = useState([''])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Route Planner</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Map View</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                <p className="text-gray-500">Interactive Route Map</p>
                <p className="text-sm text-gray-400">Drag points to adjust route</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Route Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
                <Input placeholder="Enter starting point" />
              </div>
              
              {stops.map((_, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stop {i + 1}</label>
                  <Input placeholder="Enter stop location" />
                </div>
              ))}
              
              <Button variant="outline" className="w-full" onClick={() => setStops([...stops, ''])}>
                <Plus size={16} className="mr-2" />
                Add Stop
              </Button>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <Input placeholder="Enter destination" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assign Vehicle</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Select vehicle</option>
                  <option>BUS-042</option>
                  <option>BUS-128</option>
                  <option>BUS-067</option>
                </select>
              </div>
              
              <Button className="w-full">
                <Navigation size={16} className="mr-2" />
                Save Route
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Route Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Distance</span>
                <span className="font-semibold">24.5 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Time</span>
                <span className="font-semibold">45 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Stops</span>
                <span className="font-semibold">{stops.length + 2}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimized Route</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">Suggested optimization can save 8 minutes</p>
              <Button variant="outline" className="w-full">Apply Optimization</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default RoutePlanner
