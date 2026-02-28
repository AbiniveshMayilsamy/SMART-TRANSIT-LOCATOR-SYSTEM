import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Route, MapPin, AlertTriangle, Truck, Users, BarChart3, Settings } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()
  
  const links = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/route-planner', icon: Route, label: 'Route Planner' },
    { path: '/nearby-stops', icon: MapPin, label: 'Nearby Stops' },
    { path: '/alerts', icon: AlertTriangle, label: 'Alerts & Delays' },
    { path: '/vehicles', icon: Truck, label: 'Vehicles' },
    { path: '/drivers', icon: Users, label: 'Drivers' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ]
  
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-40">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-primary-600">TransitEase</h1>
      </div>
      <nav className="p-4">
        {links.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              location.pathname === path
                ? 'bg-primary-100 text-primary-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
