import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { CheckCircle2, Phone } from "lucide-react";
import { Progress } from "../ui/progress";
import { KPICard } from "./KPICard";
import { Clock, Users, TrendingUp } from "lucide-react";

const queueData = [
  { token: "A101", patient: "John Doe", doctor: "Dr. Sarah Johnson", department: "Cardiology", status: "In Progress", eta: "5 min" },
  { token: "A102", patient: "Jane Smith", doctor: "Dr. Michael Chen", department: "Neurology", status: "Waiting", eta: "15 min" },
  { token: "A103", patient: "Bob Wilson", doctor: "Dr. Sarah Johnson", department: "Cardiology", status: "Waiting", eta: "25 min" },
  { token: "A104", patient: "Alice Brown", doctor: "Dr. Emily Davis", department: "Pediatrics", status: "Waiting", eta: "10 min" },
  { token: "A105", patient: "Charlie Green", doctor: "Dr. James Wilson", department: "Orthopedics", status: "In Progress", eta: "8 min" },
];

const QueueManagement = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Queue Management</h1>
        <p className="text-muted-foreground mt-2">Monitor and manage patient queues in real-time</p>
      </div>

      {/* Queue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard title="Avg. Waiting Time" value="18m" icon={Clock} trend="-5m improved" trendUp />
        <KPICard title="Total in Queue" value="24" icon={Users} />
        <KPICard title="Completed Today" value="156" icon={TrendingUp} trend="+12% efficiency" trendUp />
      </div>

      {/* Doctor Queue Progress */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>Queue Progress by Doctor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Dr. Sarah Johnson - Cardiology</span>
              <span className="text-muted-foreground">8/12 completed</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Dr. Michael Chen - Neurology</span>
              <span className="text-muted-foreground">5/8 completed</span>
            </div>
            <Progress value={62} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Dr. James Wilson - Orthopedics</span>
              <span className="text-muted-foreground">12/15 completed</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Active Queue Table */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>Active Patient Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>ETA</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {queueData.map((item) => (
                  <TableRow key={item.token} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-bold">{item.token}</TableCell>
                    <TableCell>{item.patient}</TableCell>
                    <TableCell>{item.doctor}</TableCell>
                    <TableCell>{item.department}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "In Progress" ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.eta}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline" className="hover:bg-primary/10 hover:text-primary">
                          <Phone className="h-3 w-3 mr-1" />
                          Call Next
                        </Button>
                        <Button size="sm" className="gradient-primary text-white">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Complete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QueueManagement;