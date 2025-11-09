import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Search, FileText, CreditCard, Download } from "lucide-react";

const patients = [
  { id: 1, name: "John Doe", age: 45, doctor: "Dr. Sarah Johnson", date: "2024-01-15", diagnosis: "Hypertension", bill: "Paid" },
  { id: 2, name: "Jane Smith", age: 32, doctor: "Dr. Michael Chen", date: "2024-01-14", diagnosis: "Migraine", bill: "Pending" },
  { id: 3, name: "Bob Wilson", age: 58, doctor: "Dr. Sarah Johnson", date: "2024-01-14", diagnosis: "Diabetes Check", bill: "Paid" },
  { id: 4, name: "Alice Brown", age: 12, doctor: "Dr. Emily Davis", date: "2024-01-13", diagnosis: "Flu", bill: "Paid" },
  { id: 5, name: "Charlie Green", age: 67, doctor: "Dr. James Wilson", date: "2024-01-13", diagnosis: "Knee Pain", bill: "Pending" },
  { id: 6, name: "Diana Prince", age: 41, doctor: "Dr. Lisa Anderson", date: "2024-01-12", diagnosis: "Annual Checkup", bill: "Paid" },
];

const PatientRecords = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Patient Records</h1>
          <p className="text-muted-foreground mt-2">Central record system for all hospital patients</p>
        </div>
        <Button className="gradient-primary text-white hover:opacity-90 shadow-glow">
          <Download className="h-4 w-4 mr-2" />
          Export All Records
        </Button>
      </div>

      {/* Search Bar */}
      <Card className="gradient-card border border-border/50">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by Name / Date / Doctor" className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Patient Records Table */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>All Patient Records ({patients.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Visit Date</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>Bill Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.doctor}</TableCell>
                    <TableCell>{patient.date}</TableCell>
                    <TableCell>{patient.diagnosis}</TableCell>
                    <TableCell>
                      <Badge
                        variant={patient.bill === "Paid" ? "default" : "secondary"}
                        className={patient.bill === "Paid" ? "bg-success" : ""}
                      >
                        {patient.bill}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline" className="hover:bg-primary/10 hover:text-primary">
                          <FileText className="h-3 w-3 mr-1" />
                          View Report
                        </Button>
                        <Button size="sm" variant="outline" className="hover:bg-secondary/10 hover:text-secondary">
                          <CreditCard className="h-3 w-3 mr-1" />
                          Payment
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

export default PatientRecords;