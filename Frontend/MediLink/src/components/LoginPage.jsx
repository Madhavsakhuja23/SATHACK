import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './ui/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Heart, LinkIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Invalid credentials. Check the demo accounts below.');
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    navigate(`/${user.role}-dashboard`);
  }

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
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Card className="p-8 shadow-xl">
          <div className="mb-6 text-center">
            <h3 className="text-gray-900 mb-2">Sign In</h3>
            <p className="text-sm text-gray-600">Enter your credentials to access your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-[#00BFA6] hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#00BFA6] hover:underline">
              Sign up
            </Link>
          </div>



          {/* <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200">
            <p className="text-xs mb-2 text-gray-900">
              🎯 Try Demo Accounts (Password: <strong>demo</strong>)
            </p>
            <div className="text-xs space-y-1 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="bg-blue-100 px-2 py-0.5 rounded text-blue-700">👤 Patient</span>
                <span>patient@demo.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="bg-green-100 px-2 py-0.5 rounded text-green-700">🏥 Hospital</span>
                <span>hospital@demo.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="bg-purple-100 px-2 py-0.5 rounded text-purple-700">👨‍⚕️ Doctor</span>
                <span>doctor@demo.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="bg-amber-100 px-2 py-0.5 rounded text-amber-700">🔧 Admin</span>
                <span>admin@demo.com</span>
              </p>
            </div>
            <p className="text-xs text-gray-600 mt-2 italic">
              ✨ Your role will be automatically detected from your email
            </p>
          </div> */}
        </Card>
      </div>
    </div>
  );
}