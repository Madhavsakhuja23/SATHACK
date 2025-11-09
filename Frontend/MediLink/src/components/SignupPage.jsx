import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './ui/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Heart, LinkIcon, Upload } from 'lucide-react';
import { toast } from 'sonner';

export default function SignupPage() {
  const [role, setRole] = useState('patient');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      await signup({ ...data, role });
      toast.success('Account created! Pending admin verification.');
      navigate(`/${role}-dashboard`);
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00BFA6]/10 via-white to-[#2196F3]/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-8 h-8 fill-current text-[#00BFA6]" />
            <LinkIcon className="w-6 h-6 text-[#00BFA6]" />
            <span className="text-2xl text-gray-900">MediLink</span>
          </Link>
          <p className="text-gray-600">Create your account</p>
        </div>

        <Card className="p-8 shadow-xl">
          <Tabs value={role} onValueChange={setRole} className="mb-6">
             <TabsList className="grid w-full grid-cols-2 rounded-xl bg-transparent relative">
    {['patient', 'hospital'].map((type) => (
      <TabsTrigger
        key={type}
        value={type}
        className={`relative z-10 rounded-lg py-2.5 px-4 font-medium transition-all duration-300 
          flex items-center justify-center
          border border-transparent 
          focus-visible:outline-none
          ${role === type
            ? 'bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white shadow-md'
            : ' text-gray-700 hover:text-[#00BFA6]'
          }`}
        style={{
          height: '42px', // fixes vertical alignment always
          lineHeight: '1.2rem',
        }}
      >
        <span
          className={
            role === type
              ? ''
              : 'bg-gradient-to-r from-[#00BFA6] to-[#2196F3] bg-clip-text text-transparent'
          }
        >
          {type === 'patient' ? 'Patient' : 'Hospital'}
        </span>
      </TabsTrigger>
    ))}
  </TabsList>


            {/* Patient Signup Form */}
            <TabsContent value="patient">
              <div className="mt-4" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 9876543210" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Create a strong password" required className="mt-1" />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] hover:opacity-90" disabled={isLoading}>
                  {isLoading ? 'Creating Account...' : 'Sign Up'}
                </Button>
              </form>
            </TabsContent>

            {/* Hospital Signup Form */}
            <TabsContent value="hospital">
              <div className="mt-4" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="hospitalName">Hospital Name</Label>
                  <Input id="hospitalName" name="hospitalName" placeholder="Apollo Hospital" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="licenseNo">License Number</Label>
                  <Input id="licenseNo" name="licenseNo" placeholder="MH-HOS-2024-001" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" placeholder="Mumbai" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="admin@hospital.com" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Create a strong password" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="license">Upload License (PDF)</Label>
                  <div className="mt-1 flex items-center gap-2">
                    <Input id="license" name="license" type="file" accept=".pdf" required className="flex-1" />
                    <Upload className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] hover:opacity-90" disabled={isLoading}>
                  {isLoading ? 'Creating Account...' : 'Sign Up'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-[#00BFA6] hover:underline">
              Sign in
            </Link>
          </div>

          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-xs text-amber-800">
              Note: Doctor accounts are created by hospitals
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}