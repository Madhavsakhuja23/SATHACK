import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Upload, Save } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const handleSave = () => {
    toast.success("Hospital profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Hospital Profile</h1>
        <p className="text-muted-foreground mt-2">Manage your hospital information and settings</p>
      </div>

      {/* Hospital Information */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>Hospital Information</CardTitle>
          <CardDescription>Update your hospital's basic details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Logo Upload */}
          <div className="space-y-2">
            <Label htmlFor="logo">Hospital Logo</Label>
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl shadow-glow">
                CH
              </div>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload New Logo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Hospital Name *</Label>
              <Input id="name" defaultValue="CityCare Hospital" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registration">Registration Number *</Label>
              <Input id="registration" defaultValue="HOS-2024-001234" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Textarea id="address" rows={3} defaultValue="123 Healthcare Avenue, Medical District, City - 400001" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number *</Label>
              <Input id="phone" type="tel" defaultValue="+91 22 1234 5678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" defaultValue="admin@citycarehospital.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Operating Hours</Label>
            <Input id="hours" defaultValue="24/7 - Open All Days" />
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Card className="gradient-card border border-border/50">
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage your alert preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <p className="font-medium">Real-Time Emergency Alerts</p>
              <p className="text-sm text-muted-foreground">Receive instant notifications for emergency cases</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <p className="font-medium">Queue Status Updates</p>
              <p className="text-sm text-muted-foreground">Get notified about queue changes</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <p className="font-medium">Daily Analytics Report</p>
              <p className="text-sm text-muted-foreground">Receive daily performance summaries via email</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="gradient-primary text-white hover:opacity-90 shadow-glow">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Profile;