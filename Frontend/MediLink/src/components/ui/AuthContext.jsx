import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password, role) => {
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));

    // Demo users - role is automatically detected from credentials
    if (email === 'patient@demo.com' && password === 'demo') {
      setUser({
        id: '1',
        name: 'John Doe',
        email: 'patient@demo.com',
        role: 'patient',
        phone: '+91 9876543210',
        healthId: 'MED-PAT-001',
        verified: true
      });
    } else if (email === 'hospital@demo.com' && password === 'demo') {
      setUser({
        id: '2',
        name: 'Admin',
        email: 'hospital@demo.com',
        role: 'hospital',
        hospitalName: 'Apollo Hospital',
        verified: true
      });
    } else if (email === 'doctor@demo.com' && password === 'demo') {
      setUser({
        id: '3',
        name: 'Dr. Sarah Williams',
        email: 'doctor@demo.com',
        role: 'doctor',
        specialization: 'Cardiology',
        verified: true
      });
    } else if (email === 'admin@demo.com' && password === 'demo') {
      setUser({
        id: '4',
        name: 'Super Admin',
        email: 'admin@demo.com',
        role: 'admin',
        verified: true
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (data) => {
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 500));

    const newUser = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: data.role,
      phone: data.phone,
      hospitalName: data.hospitalName,
      verified: false
    };

    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}