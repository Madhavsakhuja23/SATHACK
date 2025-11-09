import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Download, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { KPICard } from "./KPICard";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const weeklyData = [
  { week: "Week 1", patients: 280 },
  { week: "Week 2", patients: 315 },
  { week: "Week 3", patients: 298 },
  { week: "Week 4", patients: 342 },
];

const doctorPerformance = [
  { doctor: "Dr. Sarah", patients: 156 },
  { doctor: "Dr. Michael", patients: 142 },
  { doctor: "Dr. Emily", patients: 128 },
  { doctor: "Dr. James", patients: 168 },
  { doctor: "Dr. Lisa", patients: 134 },
];

const departmentData = [
  { name: "Cardiology", value: 30, color: "#00BFA6" },
  { name: "Neurology", value: 25, color: "#2196F3" },
  { name: "Orthopedics", value: 20, color: "#FFC107" },
  { name: "Pediatrics", value: 15, color: "#9C27B0" },
  { name: "Others", value: 10, color: "#FF5722" },
];

const Analytics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Analytics &amp; Insights</h1>
          <p className="text-muted-foreground mt-2">
            Visualize hospital performance with comprehensive data
          </p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
          <Button className="gradient-primary text-white hover:opacity-90 shadow-glow">
            <Download className="h-4 w-4 mr-2" />
            Download Report (PDF)
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Avg. Consultation Time" value="24m" icon={Clock} trend="-3m improved" trendUp />
        <KPICard title="Total Revenue (Month)" value="₹48.2L" icon={DollarSign} trend="+22% growth" trendUp />
        <KPICard title="Emergency Response Rate" value="96%" icon={TrendingUp} trend="+4% faster" trendUp />
        <KPICard title="Patient Satisfaction" value="4.8/5" icon={Users} trend="+0.3 rating" trendUp />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart - Patient Flow */}
        <Card className="gradient-card border border-border/50">
          <CardHeader>
            <CardTitle>Patient Flow per Week</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart - Doctor Performance */}
        <Card className="gradient-card border border-border/50">
          <CardHeader>
            <CardTitle>Doctor Performance (Patients/Day)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={doctorPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="doctor" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="patients" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart - Department Distribution */}
        <Card className="gradient-card border border-border/50 lg:col-span-2">
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;