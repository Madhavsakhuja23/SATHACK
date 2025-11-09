import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const emergencies = [
  { id: 1, patient: "Emily Parker", location: "Downtown, 2.3 km", severity: "Critical", eta: "5 min", doctor: "Unassigned", status: "Pending" },
  { id: 2, patient: "Mark Stevens", location: "Suburb Area, 4.1 km", severity: "Moderate", eta: "12 min", doctor: "Dr. Sarah Johnson", status: "Accepted" },
  { id: 3, patient: "Linda White", location: "City Center, 1.8 km", severity: "Critical", eta: "3 min", doctor: "Dr. James Wilson", status: "En Route" },
  { id: 4, patient: "Tom Harris", location: "East Side, 5.5 km", severity: "Mild", eta: "18 min", doctor: "Unassigned", status: "Pending" },
];

const EmergencyAlerts = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Emergency Alerts</h1>
        <p className="text-muted-foreground mt-2">Manage emergency cases and real-time patient locations</p>
      </div>

      {/* Map Placeholder */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Live Emergency Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="relative z-10 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Real-time GPS tracking map would appear here</p>
              <p className="text-sm text-muted-foreground mt-1">4 active emergency locations</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Alerts Table */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>Active Emergency Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>ETA</TableHead>
                  <TableHead>Assigned Doctor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emergencies.map((emergency) => (
                  <TableRow key={emergency.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{emergency.patient}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {emergency.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          emergency.severity === "Critical"
                            ? "border-destructive text-destructive"
                            : emergency.severity === "Moderate"
                            ? "border-warning text-warning"
                            : "border-success text-success"
                        }
                      >
                        {emergency.severity === "Critical" && "🔴"}
                        {emergency.severity === "Moderate" && "🟠"}
                        {emergency.severity === "Mild" && "🟢"} {emergency.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{emergency.eta}</TableCell>
                    <TableCell>{emergency.doctor}</TableCell>
                    <TableCell>
                      <Badge
                        variant={emergency.status === "Pending" ? "secondary" : "default"}
                        className={emergency.status === "Accepted" ? "bg-success" : ""}
                      >
                        {emergency.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        {emergency.doctor === "Unassigned" && (
                          <Select>
                            <SelectTrigger className="w-[140px] h-8">
                              <SelectValue placeholder="Assign Doctor" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dr1">Dr. Sarah Johnson</SelectItem>
                              <SelectItem value="dr2">Dr. James Wilson</SelectItem>
                              <SelectItem value="dr3">Dr. Michael Chen</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                        {emergency.status === "Pending" && (
                          <Button size="sm" className="gradient-primary text-white">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Acknowledge
                          </Button>
                        )}
                        {emergency.status === "En Route" && (
                          <Button size="sm" variant="outline" className="hover:bg-success/10 hover:text-success">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Resolve
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Incoming Alerts Sidebar */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            Recent Incoming Alerts (Last 30 min)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm font-medium">🔴 Critical - Cardiac Arrest</p>
              <p className="text-xs text-muted-foreground mt-1">Patient: Emily Parker • 2 minutes ago</p>
            </div>
            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <p className="text-sm font-medium">🟠 Moderate - Accident Injury</p>
              <p className="text-xs text-muted-foreground mt-1">Patient: Mark Stevens • 15 minutes ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyAlerts;