import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Search, Eye, Edit, Trash2 } from "lucide-react";

const doctors = [
  { id: 1, name: "Dr. Sarah Johnson", department: "Cardiology", status: "Verified", patients: 12, verification: "Verified" },
  { id: 2, name: "Dr. Michael Chen", department: "Neurology", status: "Verified", patients: 8, verification: "Verified" },
  { id: 3, name: "Dr. Emily Davis", department: "Pediatrics", status: "Pending", patients: 0, verification: "Pending" },
  { id: 4, name: "Dr. James Wilson", department: "Orthopedics", status: "Verified", patients: 15, verification: "Verified" },
  { id: 5, name: "Dr. Lisa Anderson", department: "General Medicine", status: "Verified", patients: 10, verification: "Verified" },
  { id: 6, name: "Dr. Robert Taylor", department: "Cardiology", status: "Rejected", patients: 0, verification: "Rejected" },
];

const DoctorList = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Doctor List</h1>
          <p className="text-muted-foreground mt-2">Manage and view all doctors in your hospital</p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="gradient-card border border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by Name / Department / Status" className="pl-10" />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">Verified</Button>
              <Button variant="outline" size="sm">Pending</Button>
              <Button variant="outline" size="sm">Rejected</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Doctors Table */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>All Doctors ({doctors.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Doctor Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Patients Today</TableHead>
                  <TableHead>Verification</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctors.map((doctor) => (
                  <TableRow key={doctor.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{doctor.name}</TableCell>
                    <TableCell>{doctor.department}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          doctor.status === "Verified"
                            ? "default"
                            : doctor.status === "Pending"
                            ? "secondary"
                            : "destructive"
                        }
                        className={doctor.status === "Verified" ? "bg-success" : ""}
                      >
                        {doctor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{doctor.patients}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{doctor.verification}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-secondary/10 hover:text-secondary">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-destructive/10 hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
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

export default DoctorList;