import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Pill,
  Upload,
  Scan,
  CheckCircle,
  XCircle,
  Shield,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function VerifyMedicine() {
  const [verificationStatus, setVerificationStatus] = useState('idle'); // 'idle' | 'safe' | 'unsafe' | 'warning'
  const [isScanning, setIsScanning] = useState(false);
  const [medicineCode, setMedicineCode] = useState('');

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setVerificationStatus('safe');
    }, 2000);
  };

  const handleVerifyCode = () => {
    if (medicineCode) {
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        setVerificationStatus('safe');
      }, 1500);
    }
  };

  return (
    <div>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
            <Pill className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-gray-900">Verify Medicine</h1>
        </div>
        <p className="text-gray-600">Check medicine authenticity using AI-powered verification</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900">Verification Methods</h3>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  AI Powered
                </Badge>
              </div>

              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upload">Upload Photo</TabsTrigger>
                  <TabsTrigger value="qr">Scan QR Code</TabsTrigger>
                  <TabsTrigger value="code">Enter Code</TabsTrigger>
                </TabsList>

                {/* Upload Photo */}
                <TabsContent value="upload" className="space-y-4">
                  <div>
                    <Label>Upload Medicine Photo</Label>
                    <p className="text-sm text-gray-500 mb-3">
                      Take a clear photo of the medicine packaging, label, or batch number
                    </p>
                    <motion.div
                      className="relative p-12 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#00BFA6] transition-colors cursor-pointer bg-gradient-to-br from-gray-50 to-white"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
                      <div className="text-center">
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        </motion.div>
                        <p className="text-gray-900 mb-1">Click to upload or drag & drop</p>
                        <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                      </div>
                    </motion.div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white hover:shadow-lg"
                    onClick={handleScan}
                    disabled={isScanning}
                  >
                    {isScanning ? 'Verifying...' : 'Verify Medicine'}
                  </Button>
                </TabsContent>

                {/* QR Code */}
                <TabsContent value="qr" className="space-y-4">
                  <div>
                    <Label>Scan QR Code</Label>
                    <p className="text-sm text-gray-500 mb-3">
                      Use your camera to scan the QR code on the medicine packaging
                    </p>
                    <div className="relative p-16 rounded-xl border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        >
                          <Scan className="w-16 h-16 text-purple-500 mx-auto mb-3" />
                        </motion.div>
                        <p className="text-gray-900 mb-1">Position QR code in frame</p>
                        <p className="text-sm text-gray-500">Camera will activate automatically</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"
                    onClick={handleScan}
                    disabled={isScanning}
                  >
                    {isScanning ? 'Scanning...' : 'Start QR Scanner'}
                  </Button>
                </TabsContent>

                {/* Enter Code */}
                <TabsContent value="code" className="space-y-4">
                  <div>
                    <Label>Medicine Batch Number</Label>
                    <p className="text-sm text-gray-500 mb-3">
                      Enter the batch number or verification code from the packaging
                    </p>
                    <Input
                      placeholder="e.g., MED-2024-ABC-12345"
                      value={medicineCode}
                      onChange={(e) => setMedicineCode(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white hover:shadow-lg"
                    onClick={handleVerifyCode}
                    disabled={!medicineCode || isScanning}
                  >
                    {isScanning ? 'Verifying...' : 'Verify Code'}
                  </Button>
                </TabsContent>
              </Tabs>

              {/* Loading State */}
              {isScanning && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-6 rounded-xl bg-gradient-to-r from-[#00BFA6]/10 to-[#2196F3]/10 border border-[#00BFA6]/30"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Shield className="w-6 h-6 text-[#00BFA6]" />
                    </motion.div>
                    <div>
                      <p className="text-gray-900">Verifying medicine...</p>
                      <p className="text-sm text-gray-600">Checking against WHO & CDSCO databases</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Verification Result */}
              {verificationStatus !== 'idle' && !isScanning && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-6">
                  {verificationStatus === 'safe' && (
                    <Alert className="bg-green-50 border-green-300">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <AlertDescription>
                        <p className="text-green-900 mb-2">✅ Medicine Verified Successfully</p>
                        <div className="text-sm text-green-800 space-y-1">
                          <p>• Registered with CDSCO</p>
                          <p>• WHO approved formulation</p>
                          <p>• Valid batch number: MED-2024-ABC-12345</p>
                          <p>• Manufacturing date: Jan 2024</p>
                          <p>• Expiry date: Dec 2026</p>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}

                  {verificationStatus === 'unsafe' && (
                    <Alert className="bg-red-50 border-red-300">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <AlertDescription>
                        <p className="text-red-900 mb-2">⚠️ Warning: Unverified Medicine</p>
                        <p className="text-sm text-red-800">
                          This medicine could not be verified in our database. Please consult your doctor or
                          pharmacist before use.
                        </p>
                      </AlertDescription>
                    </Alert>
                  )}

                  {verificationStatus === 'warning' && (
                    <Alert className="bg-yellow-50 border-yellow-300">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription>
                        <p className="text-yellow-900 mb-2">⚠️ Caution Required</p>
                        <p className="text-sm text-yellow-800">
                          Medicine verified but nearing expiry date. Please check packaging carefully.
                        </p>
                      </AlertDescription>
                    </Alert>
                  )}
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Recent Verifications */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6">
            <Card className="p-6">
              <h3 className="text-gray-900 mb-4">Recent Verifications</h3>
              <div className="space-y-3">
                {[
                  { name: 'Paracetamol 500mg', status: 'safe', date: 'Today, 2:30 PM' },
                  { name: 'Amoxicillin 250mg', status: 'safe', date: 'Yesterday, 11:15 AM' },
                  { name: 'Ibuprofen 400mg', status: 'safe', date: 'Nov 3, 2025' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0">Verified</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Column */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
            {/* How It Works */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-purple-600" />
                <h3 className="text-gray-900">How It Works</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-purple-700">
                    1
                  </div>
                  <p>Upload photo or scan QR code of medicine packaging</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-purple-700">
                    2
                  </div>
                  <p>AI analyzes batch number and verifies against databases</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-purple-700">
                    3
                  </div>
                  <p>Get instant verification results with safety information</p>
                </div>
              </div>
            </Card>

            {/* Data Sources */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-4">Verified Databases</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-gray-900">WHO</p>
                    <p className="text-xs text-gray-600">World Health Organization</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-gray-900">CDSCO</p>
                    <p className="text-xs text-gray-600">Central Drugs Standard Control</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-gray-900">FDA</p>
                    <p className="text-xs text-gray-600">Food & Drug Administration</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Safety Tips */}
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
              <h3 className="text-gray-900 mb-4">Safety Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Always check expiry dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Store medicines as instructed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Consult doctor before use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Report counterfeit medicines</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
