import { Calendar, Clock, FileText, Users, TrendingUp, Activity } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const stats = [
  { icon: Calendar, label: "Total Patients Today", value: "14", change: "+2 from yesterday", color: "text-primary" },
  { icon: Users, label: "Emergencies", value: "2", change: "Active now", color: "text-destructive" },
  { icon: Clock, label: "Average Wait Time", value: "11m", change: "-3m from last week", color: "text-secondary" },
  { icon: FileText, label: "Prescriptions Written", value: "9", change: "Today", color: "text-accent-foreground" },
];

const weekData = [
  { day: "Mon", patients: 12 },
  { day: "Tue", patients: 15 },
  { day: "Wed", patients: 10 },
  { day: "Thu", patients: 18 },
  { day: "Fri", patients: 14 },
  { day: "Sat", patients: 8 },
  { day: "Sun", patients: 5 },
];

const DDashboard = () => {
  const navigate = useNavigate();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Greeting Section */}
      <div className="relative gradient-hero text-white rounded-2xl p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {greeting}, Dr. Meena Sharma 👋
          </h1>
          <p className="text-white/90 text-lg mb-4">
            Here's your overview for today
          </p>
          <Button
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => navigate("/queue")}
          >
            View Today's Queue
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="p-6 hover-lift animate-fade-in shadow-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-accent/20 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Patient Count */}
        <Card className="p-6 hover-lift shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Weekly Patient Count</h3>
              <p className="text-sm text-muted-foreground">Patients seen this week</p>
            </div>
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weekData}>
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
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
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 hover-lift shadow-card">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button
              className="w-full justify-start gradient-primary text-white"
              onClick={() => navigate("/queue")}
            >
              <Clock className="h-4 w-4 mr-2" />
              View Patient Queue
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start hover-lift"
              onClick={() => navigate("/prescriptions")}
            >
              <FileText className="h-4 w-4 mr-2" />
              Add Prescription
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start hover-lift"
              onClick={() => navigate("/patients")}
            >
              <Users className="h-4 w-4 mr-2" />
              View All Patients
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start hover-lift"
              onClick={() => navigate("/reports")}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              View Reports
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DDashboard;