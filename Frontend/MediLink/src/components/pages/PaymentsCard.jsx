import { motion } from 'framer-motion'; // or: import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const payments = [
  {
    id: 1,
    description: 'Cardiology Consultation',
    amount: '₹1,200',
    date: 'Nov 5, 2025',
    status: 'Paid',
    method: 'UPI',
  },
  {
    id: 2,
    description: 'Lab Tests',
    amount: '₹850',
    date: 'Nov 2, 2025',
    status: 'Paid',
    method: 'Cash',
  },
  {
    id: 3,
    description: 'Follow-up Visit',
    amount: '₹500',
    date: 'Nov 8, 2025',
    status: 'Pending',
    method: '-',
  },
];

const toNumber = (amt) => Number((amt || '').replace(/[₹,\s]/g, '') || 0);
const formatINR = (n) => n.toLocaleString('en-IN');

export function PaymentsCard() {
  const totalPaid = payments
    .filter((p) => p.status === 'Paid')
    .reduce((sum, p) => sum + toNumber(p.amount), 0);

  const totalPending = payments
    .filter((p) => p.status === 'Pending')
    .reduce((sum, p) => sum + toNumber(p.amount), 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <Card className="p-6 shadow-md hover:shadow-xl transition-all duration-300 border-0 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100">
              <CreditCard className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-gray-900">Payments &amp; Bills</h3>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <p className="text-sm text-gray-600 mb-1">Total Paid</p>
            <p className="text-gray-900">₹{formatINR(totalPaid)}</p>
            <Badge className="mt-2 bg-green-100 text-green-700 border-0 text-xs">
              <CheckCircle className="w-3 h-3 mr-1" />
              Cleared
            </Badge>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-gray-900">₹{formatINR(totalPending)}</p>
            <Badge className="mt-2 bg-orange-100 text-orange-700 border-0 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              Due
            </Badge>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-3">
          <p className="text-sm text-gray-600">Recent Transactions</p>
          {payments.slice(0, 2).map((payment, index) => (
            <motion.div
              key={payment.id}
              className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-900">{payment.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-gray-500">{payment.date}</p>
                    <Badge variant="outline" className="text-xs">
                      {payment.method}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900">{payment.amount}</p>
                  {payment.status === 'Paid' ? (
                    <CheckCircle className="w-4 h-4 text-green-600 ml-auto mt-1" />
                  ) : (
                    <Clock className="w-4 h-4 text-orange-600 ml-auto mt-1" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full mt-4 hover:bg-gradient-to-r hover:from-[#00BFA6] hover:to-[#2196F3] hover:text-white hover:border-transparent transition-all"
        >
          View Full History
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </Card>
    </motion.div>
  );
}