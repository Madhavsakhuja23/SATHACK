import { Card } from "../ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const dailyData = [
  { day: "Mon", patients: 12 },
  { day: "Tue", patients: 15 },
  { day: "Wed", patients: 10 },
  { day: "Thu", patients: 18 },
  { day: "Fri", patients: 14 },
];

const consultationData = [
  { name: "Quick", value: 35, color: "hsl(174, 100%, 37%)" },
  { name: "Standard", value: 45, color: "hsl(207, 90%, 54%)" },
  { name: "Detailed", value: 20, color: "hsl(174, 65%, 85%)" },
];

const prescriptionData = [
  { type: "Antibiotics", count: 12 },
  { type: "Pain Relief", count: 8 },
  { type: "Vitamins", count: 5 },
  { type: "Others", count: 4 },
];

export const AnalyticsSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Daily Patient Count */}
        <Card className="p-4 hover-lift">
          <h3 className="font-semibold mb-4">Daily Patient Count</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dailyData}>
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
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Consultation Duration */}
        <Card className="p-4 hover-lift">
          <h3 className="font-semibold mb-4">Consultation Duration</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={consultationData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
              >
                {consultationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Prescription Summary */}
        <Card className="p-4 hover-lift">
          <h3 className="font-semibold mb-4">Prescriptions Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={prescriptionData}>
              <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" fontSize={10} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="count" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};