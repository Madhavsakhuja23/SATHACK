import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import "../ui/fix-radix.css";
// import "./BookAppointment.css";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Filter,
  Stethoscope,
  DollarSign,
  Building2,
  X,
  Wallet,
  CreditCard as CreditCardIcon,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
import { Badge } from '../ui/badge';
import { Calendar as CalendarComponent } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Slider } from '../ui/slider';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    hospital: 'City General Hospital',
    experience: '15 years',
    rating: 4.9,
    available: true,
    nextSlot: 'Today, 3:00 PM',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    consultationFee: 1500,
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'General Physician',
    hospital: 'MediCare Center',
    experience: '12 years',
    rating: 4.8,
    available: true,
    nextSlot: 'Tomorrow, 10:30 AM',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
    consultationFee: 800,
  },
  {
    id: 3,
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    hospital: "Children's Hospital",
    experience: '10 years',
    rating: 4.9,
    available: true,
    nextSlot: 'Today, 5:00 PM',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    consultationFee: 1000,
  },
  {
    id: 4,
    name: 'Dr. Robert Williams',
    specialty: 'Orthopedic',
    hospital: 'Bone & Joint Clinic',
    experience: '18 years',
    rating: 4.7,
    available: false,
    nextSlot: 'Nov 10, 11:00 AM',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=robert',
    consultationFee: 2000,
  },
  {
    id: 5,
    name: 'Dr. Aisha Patel',
    specialty: 'Dermatologist',
    hospital: 'City General Hospital',
    experience: '8 years',
    rating: 4.6,
    available: true,
    nextSlot: 'Tomorrow, 2:00 PM',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aisha',
    consultationFee: 1200,
  },
  {
    id: 6,
    name: 'Dr. James Wilson',
    specialty: 'General Physician',
    hospital: 'MediCare Center',
    experience: '20 years',
    rating: 4.9,
    available: true,
    nextSlot: 'Today, 11:00 AM',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
    consultationFee: 600,
  },
];

const hospitals = Array.from(new Set(doctors.map((d) => d.hospital)));
const specialties = Array.from(new Set(doctors.map((d) => d.specialty)));

export function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [paymentMethod, setPaymentMethod] = useState(null);

  // // Filters
  // const [searchQuery, setSearchQuery] = useState('');
  // const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  // const [selectedHospital, setSelectedHospital] = useState('all');
  // const [maxFee, setMaxFee] = useState([2500]);
  // const [showFilters, setShowFilters] = useState(false);

  // // Filtered doctors
  // const filteredDoctors = useMemo(() => {
  //   return doctors.filter((doctor) => {
  //     const matchesSearch =
  //       searchQuery === '' ||
  //       doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());

  //     const matchesSpecialty =
  //       selectedSpecialty === 'all' ||
  //       doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();

  //     const matchesHospital =
  //       selectedHospital === 'all' || doctor.hospital === selectedHospital;

  //     const matchesFee = doctor.consultationFee <= maxFee[0];

  //     return matchesSearch && matchesSpecialty && matchesHospital && matchesFee;
  //   });
  // }, [searchQuery, selectedSpecialty, selectedHospital, maxFee]);

  // const activeFiltersCount =
  //   (selectedSpecialty !== 'all' ? 1 : 0) +
  //   (selectedHospital !== 'all' ? 1 : 0) +
  //   (maxFee[0] < 2500 ? 1 : 0);

  // const clearFilters = () => {
  //   setSelectedSpecialty('all');
  //   setSelectedHospital('all');
  //   setMaxFee([2500]);
  //   setSearchQuery('');
  // };

  // const selectedDoctorData = doctors.find((d) => d.id === selectedDoctor);
// --- Filters ---
const [searchQuery, setSearchQuery] = useState('');
const [selectedSpecialty, setSelectedSpecialty] = useState('all');
const [selectedHospital, setSelectedHospital] = useState('all');
const [maxFee, setMaxFee] = useState([2500]);
const [showFilters, setShowFilters] = useState(false);

// normalize fee for comparison
const feeLimit = Array.isArray(maxFee) ? maxFee[0] : maxFee;

// --- Filtered Doctors ---
const filteredDoctors = useMemo(() => {
  const query = searchQuery.trim().toLowerCase();

  return doctors.filter((doctor) => {
    const matchesSearch =
      query === '' ||
      doctor.name.toLowerCase().includes(query) ||
      doctor.specialty.toLowerCase().includes(query) ||
      doctor.hospital.toLowerCase().includes(query);

    const matchesSpecialty =
      selectedSpecialty === 'all' ||
      doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();

    const matchesHospital =
      selectedHospital === 'all' ||
      doctor.hospital.toLowerCase() === selectedHospital.toLowerCase();

    const matchesFee = Number(doctor.consultationFee) <= Number(feeLimit);

    return matchesSearch && matchesSpecialty && matchesHospital && matchesFee;
  });
}, [searchQuery, selectedSpecialty, selectedHospital, feeLimit]);

// --- Active filters count ---
const activeFiltersCount =
  (selectedSpecialty !== 'all' ? 1 : 0) +
  (selectedHospital !== 'all' ? 1 : 0) +
  (feeLimit < 2500 ? 1 : 0);

// --- Clear all filters ---
const clearFilters = () => {
  setSelectedSpecialty('all');
  setSelectedHospital('all');
  setMaxFee([2500]);
  setSearchQuery('');
};

// --- Selected doctor data ---
const selectedDoctorData = doctors.find((d) => d.id === selectedDoctor);

  return (
    <div>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-gray-900 mb-2">Book an Appointment</h1>
        <p className="text-gray-600">Find and schedule appointments with top doctors</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Search and Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 space-y-4">
            <Card className="p-4">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search doctors, specialties, or hospitals..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  variant={showFilters ? 'default' : 'outline'}
                  className={
                    showFilters
                      ? 'bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white'
                      : ''
                  }
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-white text-[#00BFA6]">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </Card>

            {/* Advanced Filters */}
            {showFilters && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-900">Advanced Filters</h3>
                    {activeFiltersCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-600 hover:text-[#00BFA6]">
                        <X className="w-4 h-4 mr-1" />
                        Clear All
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Specialty */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-[#00BFA6]" />
                        Specialty
                      </Label>
                      <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Specialties" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Specialties</SelectItem>
                          {specialties.map((specialty) => (
                            <SelectItem key={specialty} value={specialty.toLowerCase()}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Hospital */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#00BFA6]" />
                        Hospital
                      </Label>
                      <Select value={selectedHospital} onValueChange={setSelectedHospital}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Hospitals" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Hospitals</SelectItem>
                          {hospitals.map((hospital) => (
                            <SelectItem key={hospital} value={hospital}>
                              {hospital}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Fee */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#00BFA6]" />
                        Max Fee
                      </Label>
                      <div className="pt-2">
                        <Slider value={maxFee} onValueChange={setMaxFee} max={2500} min={500} step={100} />
                        <div className="flex justify-between text-sm">
                          <span>₹500</span>
                          <span className="text-[#00BFA6]">₹{maxFee[0]}</span>
                          <span>₹2500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>

          {/* Doctor List */}
          <div className="space-y-4">
            {filteredDoctors.map((doctor, index) => (
              <motion.div key={doctor.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + index * 0.1 }}>
                <Card
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedDoctor === doctor.id ? 'ring-2 ring-[#00BFA6]' : ''
                  }`}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <div className="flex gap-4">
                    <Avatar className="h-16 w-16 ring-2 ring-[#00BFA6]/20">
                      <AvatarImage src={doctor.avatar} />
                      <AvatarFallback>{doctor.name.split(' ')[1][0]}</AvatarFallback>
                    </Avatar>
                    {/* <div className="flex-1">
                      <h3 className="text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-gray-600">{doctor.specialty}</p>
                      <p className="text-[#00BFA6] font-medium">₹{doctor.consultationFee}</p>
                    </div>
                  </div> */}
                  <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-gray-900 mb-1">{doctor.name}</h3>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white border-0">
                                {doctor.specialty}
                              </Badge>
                              <span className="text-sm text-gray-600">{doctor.experience} experience</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">⭐</span>
                            <span className="text-gray-900">{doctor.rating}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{doctor.hospital}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Next: {doctor.nextSlot}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-[#00BFA6]" />
                            <span className="text-[#00BFA6]">₹{doctor.consultationFee}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {doctor.available ? (
                            <Badge className="bg-green-100 text-green-700 border-0">
                              Available Today
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-600">
                              Fully Booked
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="sticky top-24">
            <Card className="p-6">
              <h3 className="text-gray-900 mb-4">Schedule Appointment</h3>

              {!selectedDoctor ? (
                <div className="text-center py-8">
                  <Stethoscope className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Select a doctor to continue</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-[#00BFA6]/5 to-[#2196F3]/5 border border-[#00BFA6]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedDoctorData?.avatar} />
                      </Avatar>
                      <div>
                        <p className="text-gray-900">{selectedDoctorData?.name}</p>
                        <p className="text-sm text-gray-600">{selectedDoctorData?.specialty}</p>
                      </div>
                    </div>
                    <div className="flex justify-between border-t pt-3 border-[#00BFA6]/20">
                      <span className="text-sm text-gray-600">Consultation Fee</span>
                      <span className="text-[#00BFA6]">₹{selectedDoctorData?.consultationFee}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left">
                          <Calendar className="mr-2 h-4 w-4" />
                          {selectedDate ? selectedDate.toLocaleDateString() : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      {/* <PopoverContent className="w-auto p-0" align="start"> */}
                      {/* <PopoverContent
  align="start"
  sideOffset={8}
  className="w-auto p-2 bg-white border border-gray-200 rounded-xl shadow-lg z-[99999]"
> */}

                        {/* <CalendarComponent mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                      </PopoverContent> */}
                      <PopoverContent
  align="start"
  sideOffset={6}
  className="z-[99999] w-auto rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
>
  {/* <CalendarComponent
    mode="single"
    selected={selectedDate}
    onSelect={setSelectedDate}
  /> */}
  <Calendar
  mode="single"
  selected={selectedDate}
  onSelect={setSelectedDate}
  // weekStartsOn={0}
  // fixedWeeks
/>
</PopoverContent>

                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Reason for Visit (Optional)</Label>
                    <Input placeholder="e.g., Regular checkup, Follow-up..." />
                  </div>

                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant={paymentMethod === 'online' ? 'default' : 'outline'}
                          className={`w-full h-auto py-4 flex flex-col items-center gap-2 ${
                            paymentMethod === 'online'
                              ? 'bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white border-0'
                              : 'hover:bg-[#00BFA6]/5 hover:border-[#00BFA6]'
                          }`}
                          onClick={() => setPaymentMethod('online')}
                        >
                          <CreditCardIcon className="w-6 h-6" />
                          <span>Pay Online</span>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant={paymentMethod === 'cash' ? 'default' : 'outline'}
                          className={`w-full h-auto py-4 flex flex-col items-center gap-2 ${
                            paymentMethod === 'cash'
                              ? 'bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white border-0'
                              : 'hover:bg-[#00BFA6]/5 hover:border-[#00BFA6]'
                          }`}
                          onClick={() => setPaymentMethod('cash')}
                        >
                          <Wallet className="w-6 h-6" />
                          <span>Pay by Cash</span>
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white hover:shadow-lg"
                    disabled={!selectedDate || !paymentMethod}
                  >
                    Confirm Appointment
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    You'll receive a confirmation message after booking
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
