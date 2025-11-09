import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CheckCircle2, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AddDoctors = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Doctor request submitted for admin verification!");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Add New Doctor</h1>
        <p className="text-muted-foreground mt-2">Register a new doctor under your hospital account</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Card */}
        <Card className="lg:col-span-2 gradient-card border border-border/50">
          <CardHeader>
            <CardTitle>Doctor Information</CardTitle>
            <CardDescription>Fill in the details to register a new doctor</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Dr. John Smith" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.smith@hospital.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization *</Label>
                  <Select>
                    <SelectTrigger id="specialization">
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="general">General Medicine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="outpatient">Outpatient</SelectItem>
                      <SelectItem value="inpatient">Inpatient</SelectItem>
                      <SelectItem value="icu">ICU</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">License Number *</Label>
                  <Input id="license" placeholder="MED-123456" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="document">Upload Document (Optional)</Label>
                <div className="flex items-center gap-2">
                  <Input id="document" type="file" className="flex-1" />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90 shadow-glow">
                Submit for Verification
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Verification Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Step 1: Submit</p>
                  <p className="text-xs text-muted-foreground">Fill and submit the form</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-secondary/10">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Step 2: Review</p>
                  <p className="text-xs text-muted-foreground">Admin reviews credentials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-muted">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Step 3: Approval</p>
                  <p className="text-xs text-muted-foreground">Doctor gets verified</p>
                </div>
              </div>
            </div>

            {submitted && (
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm font-medium text-primary">✓ Request sent for verification!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddDoctors;