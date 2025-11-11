import { useState } from "react";
import { X, Activity, Thermometer, Heart, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import { Card } from "../ui/card";
import { toast } from "sonner";

export const ConsultationModal = ({ patient, open, onClose }) => {
  const [prescription, setPrescription] = useState({
    medicine: "",
    dosage: "",
    duration: "",
    notes: "",
  });

  if (!patient) return null;

  const vitals = [
    { icon: Heart, label: "Pulse", value: "78 bpm", color: "text-primary" },
    { icon: Thermometer, label: "Temperature", value: "98.6°F", color: "text-secondary" },
    { icon: Activity, label: "BP", value: "120/80", color: "text-accent-foreground" },
  ];

  const handleSave = () => {
    toast.success("Prescription saved successfully", {
      description: `Prescription sent to ${patient.name}`,
    });
    setPrescription({ medicine: "", dosage: "", duration: "", notes: "" });
    onClose();
  };

  const handleVerify = () => {
    toast.info("Verifying medicine safety...", {
      description: "Checking WHO database",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Active Consultation</DialogTitle>
        </DialogHeader>

        {/* Patient Details */}
        <Card className="p-4 bg-accent/10 border-accent">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                {patient.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{patient.name}</h3>
              <p className="text-sm text-muted-foreground">
                {patient.age} years • {patient.gender === "M" ? "Male" : "Female"} • Token: {patient.token}
              </p>
            </div>
          </div>
        </Card>

        {/* Vitals */}
        <div>
          <h4 className="font-semibold mb-3">Vitals Summary</h4>
          <div className="grid grid-cols-3 gap-3">
            {vitals.map((vital, index) => (
              <Card key={index} className="p-3 hover-lift">
                <div className="flex items-center gap-2 mb-1">
                  <vital.icon className={`h-4 w-4 ${vital.color}`} />
                  <span className="text-xs text-muted-foreground">{vital.label}</span>
                </div>
                <p className="text-lg font-bold">{vital.value}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Prescription Form */}
        <div className="space-y-4">
          <h4 className="font-semibold">Prescription Details</h4>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="medicine">Medicine Name</Label>
              <Input
                id="medicine"
                placeholder="e.g., Amoxicillin"
                value={prescription.medicine}
                onChange={(e) => setPrescription({ ...prescription, medicine: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                id="dosage"
                placeholder="e.g., 500mg"
                value={prescription.dosage}
                onChange={(e) => setPrescription({ ...prescription, dosage: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              placeholder="e.g., 7 days, twice daily"
              value={prescription.duration}
              onChange={(e) => setPrescription({ ...prescription, duration: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes / Diagnosis</Label>
            <Textarea
              id="notes"
              placeholder="Enter diagnosis and additional notes..."
              value={prescription.notes}
              onChange={(e) => setPrescription({ ...prescription, notes: e.target.value })}
              rows={4}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t">
          <Button
            variant="outline"
            className="flex-1 hover-lift"
            onClick={handleVerify}
          >
            <Shield className="h-4 w-4 mr-2" />
            Verify Safety
          </Button>
          <Button
            className="flex-1 gradient-primary text-white hover-lift"
            onClick={handleSave}
          >
            Save Prescription
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};