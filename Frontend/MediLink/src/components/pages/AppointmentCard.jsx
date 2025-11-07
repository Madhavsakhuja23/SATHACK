import { motion } from 'framer-motion'; // or: import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronRight, Activity } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
import { Badge } from '../ui/badge';

const appointments = [
  {
    id: 1,
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    hospital: 'City General Hospital',
    date: 'Today',
    time: '3:00 PM',
    status: 'Upcoming',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    waitTime: '12 mins',
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    specialty: 'General Physician',
    hospital: 'MediCare Center',
    date: 'Tomorrow',
    time: '10:30 AM',
    status: 'Scheduled',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
    waitTime: null,
  },
];

export function AppointmentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -4 }}
    >
      <Card className="p-6 shadow-md hover:shadow-xl transition-all duration-300 border-0 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#00BFA6]/10 to-[#2196F3]/10">
              <Calendar className="w-5 h-5 text-[#00BFA6]" />
            </div>
            <h3 className="text-gray-900">My Appointments</h3>
          </div>
          <Badge className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white border-0">
            {appointments.length} Upcoming
          </Badge>
        </div>

        <div className="space-y-4">
          {appointments.map((appointment, index) => {
            // safer fallback initials (e.g., "SJ")
            const initials = appointment.doctor
              .split(' ')
              .map((p) => p[0])
              .slice(0, 2)
              .join('');

            return (
              <motion.div
                key={appointment.id}
                className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 hover:from-[#00BFA6]/5 hover:to-[#2196F3]/5 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-[#00BFA6]/20">
                    <AvatarImage src={appointment.avatar} alt={appointment.doctor} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <p className="text-gray-900">{appointment.doctor}</p>
                        <p className="text-sm text-gray-500">{appointment.specialty}</p>
                      </div>
                      {appointment.status === 'Upcoming' && (
                        <Badge variant="outline" className="text-[#00BFA6] border-[#00BFA6]">
                          {appointment.status}
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{appointment.hospital}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>
                          {appointment.date}, {appointment.time}
                        </span>
                      </div>
                    </div>

                    {appointment.waitTime && (
                      <motion.div
                        className="mt-2 flex items-center gap-2 text-sm"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="flex items-center gap-1 text-[#00BFA6]">
                          <Activity className="w-3 h-3" />
                          <span>AI Estimate: ~{appointment.waitTime} wait</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Button className="w-full mt-4 bg-gradient-to-r from-[#00BFA6] to-[#2196F3] hover:shadow-lg hover:scale-[1.02] transition-all text-white">
          View All Appointments
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </Card>
    </motion.div>
  );
}