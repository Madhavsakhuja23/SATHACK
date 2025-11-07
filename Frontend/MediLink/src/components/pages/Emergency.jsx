import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  Phone,
  MapPin,
  Navigation,
  Clock,
  Ambulance,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';

const emergencyDoctors = [
  {
    id: 1,
    name: 'Dr. Emily Roberts',
    specialty: 'Emergency Medicine',
    hospital: 'City General Hospital - ER',
    distance: '1.2 km',
    availability: 'Available Now',
    phone: '+1 234-567-8901',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    status: 'active',
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    specialty: 'Trauma Surgeon',
    hospital: 'Metro Emergency Center',
    distance: '2.5 km',
    availability: 'Available Now',
    phone: '+1 234-567-8902',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
    status: 'active',
  },
  {
    id: 3,
    name: 'Dr. Aisha Patel',
    specialty: 'Critical Care',
    hospital: 'Rapid Response Clinic',
    distance: '3.8 km',
    availability: 'Available Now',
    phone: '+1 234-567-8903',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aisha',
    status: 'active',
  },
  {
    id: 4,
    name: 'Dr. David Martinez',
    specialty: 'Emergency Physician',
    hospital: 'LifeCare Emergency',
    distance: '4.2 km',
    availability: 'On Call',
    phone: '+1 234-567-8904',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    status: 'busy',
  },
];

export function Emergency() {
  const [emergencyActivated, setEmergencyActivated] = useState(false);

  const handleEmergencyAlert = () => {
    setEmergencyActivated(true);
    // In a real app, this would trigger location sharing and alert services
  };

  return (
    <div>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <AlertCircle className="w-8 h-8 text-red-600" />
          </motion.div>
          <h1 className="text-gray-900">Emergency Services</h1>
        </div>
        <p className="text-gray-600">
          Immediate medical assistance and available emergency doctors
        </p>
      </motion.div>

      {/* Emergency Alert Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
        <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-full bg-red-100">
              <Ambulance className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">Emergency Alert System</h3>
              <p className="text-gray-700 mb-4">
                Activate emergency mode to share your location with the nearest hospitals and emergency services.
                Available doctors will be notified immediately.
              </p>

              {!emergencyActivated ? (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                    onClick={handleEmergencyAlert}
                  >
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      🚨 Activate Emergency Mode
                    </motion.div>
                  </Button>
                </motion.div>
              ) : (
                <Alert className="bg-red-100 border-red-300">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-900">
                    <strong>Emergency Mode Activated!</strong> Your location has been shared with nearby hospitals.
                    Emergency services have been notified.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          {/* Emergency Hotline */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-white/70 border border-red-200">
              <Phone className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-xs text-gray-600">Emergency Hotline</p>
                <p className="text-gray-900">108</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-white/70 border border-red-200">
              <MapPin className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-xs text-gray-600">Nearest Hospital</p>
                <p className="text-gray-900">1.2 km away</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-white/70 border border-red-200">
              <Clock className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-xs text-gray-600">Est. Arrival</p>
                <p className="text-gray-900">~8 minutes</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Available Emergency Doctors */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-gray-900 mb-1">Available Emergency Doctors</h2>
            <p className="text-sm text-gray-600">Sorted by distance from your location</p>
          </div>
          <Badge className="bg-green-100 text-green-700 border-0">
            {emergencyDoctors.filter((d) => d.status === 'active').length} Available
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card
                className={`p-6 hover:shadow-lg transition-all ${
                  emergencyActivated && doctor.status === 'active'
                    ? 'ring-2 ring-green-500 shadow-lg'
                    : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="h-14 w-14 ring-2 ring-[#00BFA6]/20">
                      <AvatarImage src={doctor.avatar} />
                      <AvatarFallback>{doctor.name.split(' ')[1][0]}</AvatarFallback>
                    </Avatar>
                    {doctor.status === 'active' && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-gray-900 mb-1">{doctor.name}</h3>
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-xs">
                          {doctor.specialty}
                        </Badge>
                      </div>
                      {doctor.status === 'active' ? (
                        <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-yellow-700 border-yellow-300 text-xs">
                          On Call
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{doctor.hospital}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Navigation className="w-3 h-3 text-[#00BFA6]" />
                          <span className="text-[#00BFA6]">{doctor.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>{doctor.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white hover:shadow-lg"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Call Now
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-[#00BFA6]/10 hover:text-[#00BFA6] hover:border-[#00BFA6]"
                      >
                        <Navigation className="w-3 h-3 mr-1" />
                        Navigate
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">Hospital Locations</h3>
          <div className="relative rounded-xl overflow-hidden h-80 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#00BFA6] mx-auto mb-3" />
                <p className="text-gray-900 mb-2">Live Location Map</p>
                <p className="text-sm text-gray-600">
                  Showing {emergencyDoctors.length} emergency facilities nearby
                </p>
              </div>
            </div>

            {/* Animated pulse for active emergency */}
            {emergencyActivated && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
              >
                <div className="w-32 h-32 rounded-full bg-red-500" />
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
