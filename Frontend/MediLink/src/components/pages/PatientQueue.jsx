import { useState } from "react";
import { Eye, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { toast } from "sonner";

const mockPatients = [
  { id: "1", name: "Rajesh Kumar", age: 45, gender: "M", type: "Normal", token: "T001", status: "In Progress" },
  { id: "2", name: "Priya Sharma", age: 32, gender: "F", type: "Normal", token: "T002", status: "Next" },
  { id: "3", name: "Amit Patel", age: 28, gender: "M", type: "Emergency", token: "E001", status: "Waiting" },
  { id: "4", name: "Sneha Reddy", age: 55, gender: "F", type: "Normal", token: "T003", status: "Waiting" },
  { id: "5", name: "Vikram Singh", age: 38, gender: "M", type: "Normal", token: "T004", status: "Waiting" },
];

export const PatientQueue = ({ onViewDetails }) => {
  const [patients, setPatients] = useState(mockPatients);

  const handleCall = (patient) => {
    toast.success(`Calling ${patient.name}`, {
      description: "Patient notification sent successfully",
    });
  };

  const handleMarkTreated = (patientId) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === patientId ? { ...p, status: "Done" } : p))
    );
    toast.success("Patient marked as treated");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-primary text-white";
      case "Next":
        return "bg-secondary text-white";
      case "Waiting":
        return "bg-muted text-muted-foreground";
      case "Done":
        return "bg-accent text-accent-foreground";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Today's Queue</h2>
        <Badge variant="outline" className="text-sm">
          {patients.filter((p) => p.status !== "Done").length} Patients Waiting
        </Badge>
      </div>

      <div className="space-y-3">
        {patients.map((patient, index) => (
          <Card
            key={patient.id}
            className={`p-4 transition-smooth hover:shadow-elevated ${
              patient.status === "In Progress"
                ? "border-l-4 border-l-primary shadow-glow"
                : ""
            } animate-fade-in`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-center justify-between gap-4">
              {/* Patient Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">Token</span>
                  <span className="font-bold text-lg">{patient.token}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{patient.name}</h3>
                    {patient.type === "Emergency" && (
                      <Badge variant="destructive" className="pulse-glow">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Emergency
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {patient.age} years • {patient.gender === "M" ? "Male" : "Female"}
                  </p>
                </div>

                <Badge className={getStatusColor(patient.status)}>
                  {patient.status}
                </Badge>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onViewDetails(patient)}
                  className="hover-lift"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>

                {patient.status !== "Done" && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCall(patient)}
                      className="hover-lift"
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>

                    <Button
                      size="sm"
                      className="gradient-primary text-white hover-lift"
                      onClick={() => handleMarkTreated(patient.id)}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Mark Done
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};