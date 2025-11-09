import { Users, UserCheck, AlertCircle, Clock, DollarSign, TrendingUp } from "lucide-react";
import { KPICard } from "./KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const lineData = [
  { day: "Mon", patients: 45 },
  { day: "Tue", patients: 52 },
  { day: "Wed", patients: 48 },
  { day: "Thu", patients: 61 },
  { day: "Fri", patients: 55 },
  { day: "Sat", patients: 38 },
  { day: "Sun", patients: 42 },
];

const pieData = [
  { name: "Cardiology", value: 30, color: "#00BFA6" },
  { name: "Neurology", value: 25, color: "#2196F3" },
  { name: "Orthopedics", value: 20, color: "#FFC107" },
  { name: "Pediatrics", value: 15, color: "#9C27B0" },
  { name: "Others", value: 10, color: "#FF5722" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Welcome, CityCare Hospital 👋</h1>
          <p className="text-muted-foreground mt-2">Here's what's happening with your hospital today.</p>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <KPICard title="Total Patients Today" value="247" icon={Users} trend="+12% from yesterday" trendUp />
        <KPICard title="Active Doctors" value="32" icon={UserCheck} trend="4 on leave" trendUp={false} />
        <KPICard title="Emergency Cases" value="8" icon={AlertCircle} trend="+2 critical" trendUp={false} />
        <KPICard title="Avg Wait Time" value="18m" icon={Clock} trend="-5m improved" trendUp />
        <KPICard title="Revenue Today" value="₹2.4L" icon={DollarSign} trend="+18% growth" trendUp />
        <KPICard title="Completion Rate" value="94%" icon={TrendingUp} trend="+3% this week" trendUp />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card className="gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Patient Visits - Last 7 Days</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
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

        {/* Pie Chart */}
        <Card className="gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Department Load Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action */}
      <Card className="gradient-card border border-border/50">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Manage Patient Queue</h3>
            <p className="text-muted-foreground text-sm mt-1">View and manage all ongoing patient queues</p>
          </div>
          <Button
            onClick={() => navigate("/queue")}
            className="gradient-primary text-white hover:opacity-90 transition-all shadow-glow"
          >
            Go to Queue Management
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;