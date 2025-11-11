import { useState } from "react";
import { Plus, Search, Download, Eye, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

const mockPrescriptions = [
  { id: "1", patientName: "Rajesh Kumar", medicine: "Amoxicillin", dosage: "500mg", duration: "7 days", date: "2025-01-07", status: "Active" },
  { id: "2", patientName: "Priya Sharma", medicine: "Ibuprofen", dosage: "400mg", duration: "5 days", date: "2025-01-06", status: "Active" },
  { id: "3", patientName: "Amit Patel", medicine: "Paracetamol", dosage: "650mg", duration: "3 days", date: "2025-01-05", status: "Completed" },
  { id: "4", patientName: "Sneha Reddy", medicine: "Metformin", dosage: "500mg", duration: "30 days", date: "2025-01-04", status: "Active" },
  { id: "5", patientName: "Vikram Singh", medicine: "Atorvastatin", dosage: "10mg", duration: "30 days", date: "2025-01-03", status: "Active" },
];

const Prescriptions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPrescription, setNewPrescription] = useState({
    patientName: "",
    medicine: "",
    dosage: "",
    duration: "",
    notes: "",
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-primary text-white";
      case "Completed":
        return "bg-accent text-accent-foreground";
      case "Pending":
        return "bg-secondary text-white";
      default:
        return "";
    }
  };

  const handleAddPrescription = () => {
    toast.success("Prescription added successfully", {
      description: `Prescription sent to ${newPrescription.patientName}`,
    });
    setNewPrescription({ patientName: "", medicine: "", dosage: "", duration: "", notes: "" });
    setShowAddModal(false);
  };

  const handleDownload = (prescription) => {
    toast.success("Downloading prescription", {
      description: `PDF for ${prescription.patientName}`,
    });
  };

  const filteredPrescriptions = mockPrescriptions.filter(
    (p) =>
      p.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.medicine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Prescriptions</h1>
          <p className="text-muted-foreground">Manage and view all prescriptions</p>
        </div>

        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogTrigger asChild>
            <Button className="gradient-primary text-white hover-lift">
              <Plus className="h-4 w-4 mr-2" />
              Add New Prescription
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Prescription</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Name</Label>
                  <Input
                    id="patientName"
                    placeholder="Enter patient name"
                    value={newPrescription.patientName}
                    onChange={(e) =>
                      setNewPrescription({ ...newPrescription, patientName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicine">Medicine Name</Label>
                  <Input
                    id="medicine"
                    placeholder="e.g., Amoxicillin"
                    value={newPrescription.medicine}
                    onChange={(e) =>
                      setNewPrescription({ ...newPrescription, medicine: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    placeholder="e.g., 500mg"
                    value={newPrescription.dosage}
                    onChange={(e) =>
                      setNewPrescription({ ...newPrescription, dosage: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    placeholder="e.g., 7 days, twice daily"
                    value={newPrescription.duration}
                    onChange={(e) =>
                      setNewPrescription({ ...newPrescription, duration: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes / Diagnosis</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter diagnosis and additional notes..."
                  value={newPrescription.notes}
                  onChange={(e) =>
                    setNewPrescription({ ...newPrescription, notes: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 hover-lift"
                  onClick={() => toast.info("Verifying medicine safety...")}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Check Medicine Authenticity
                </Button>
                <Button
                  className="flex-1 gradient-primary text-white hover-lift"
                  onClick={handleAddPrescription}
                >
                  Save Prescription
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card className="p-4 shadow-card">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by patient or medicine name..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Card>

      {/* Prescriptions Table */}
      <Card className="shadow-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Medicine</TableHead>
              <TableHead>Dosage</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPrescriptions.map((prescription, index) => (
              <TableRow
                key={prescription.id}
                className="hover:bg-accent/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TableCell className="font-medium">{prescription.patientName}</TableCell>
                <TableCell>{prescription.medicine}</TableCell>
                <TableCell>{prescription.dosage}</TableCell>
                <TableCell>{prescription.duration}</TableCell>
                <TableCell>{prescription.date}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(prescription.status)}>
                    {prescription.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline" className="hover-lift">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover-lift"
                      onClick={() => handleDownload(prescription)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      PDF
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

export default Prescriptions;
