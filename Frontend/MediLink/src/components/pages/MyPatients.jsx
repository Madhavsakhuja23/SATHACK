import { useState } from "react";
import { Search, Eye, MessageSquare, FileText } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const mockPatients = [
  { id: "1", name: "Rajesh Kumar", age: 45, gender: "Male", hospital: "Apollo Hospital", lastVisit: "2025-01-05", status: "Active" },
  { id: "2", name: "Priya Sharma", age: 32, gender: "Female", hospital: "Fortis Healthcare", lastVisit: "2025-01-04", status: "Active" },
  { id: "3", name: "Amit Patel", age: 28, gender: "Male", hospital: "Max Hospital", lastVisit: "2025-01-03", status: "Emergency" },
  { id: "4", name: "Sneha Reddy", age: 55, gender: "Female", hospital: "Apollo Hospital", lastVisit: "2024-12-28", status: "Inactive" },
  { id: "5", name: "Vikram Singh", age: 38, gender: "Male", hospital: "AIIMS", lastVisit: "2025-01-02", status: "Active" },
  { id: "6", name: "Anita Desai", age: 42, gender: "Female", hospital: "Fortis Healthcare", lastVisit: "2024-12-30", status: "Inactive" },
  { id: "7", name: "Karan Mehta", age: 51, gender: "Male", hospital: "Max Hospital", lastVisit: "2025-01-06", status: "Active" },
];

const MyPatients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-primary text-white";
      case "Emergency": return "bg-destructive text-white pulse-glow";
      case "Inactive": return "bg-muted text-muted-foreground";
      default: return "";
    }
  };

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">My Patients</h1>
        <p className="text-muted-foreground">Manage and view all your patients</p>
      </div>

      {/* Search and Filters */}
      <Card className="p-4 shadow-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by patient name..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "gradient-primary text-white" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "today" ? "default" : "outline"}
              onClick={() => setFilter("today")}
              className={filter === "today" ? "gradient-primary text-white" : ""}
            >
              Today
            </Button>
            <Button
              variant={filter === "week" ? "default" : "outline"}
              onClick={() => setFilter("week")}
              className={filter === "week" ? "gradient-primary text-white" : ""}
            >
              This Week
            </Button>
          </div>
        </div>
      </Card>

      {/* Patients Table */}
      <Card className="shadow-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Hospital</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient, index) => (
              <TableRow
                key={patient.id}
                className="hover:bg-accent/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.hospital}</TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(patient.status)}>
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline" className="hover-lift">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="hover-lift">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="hover-lift">
                      <FileText className="h-4 w-4 mr-1" />
                      Notes
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default MyPatients;