import { useState } from "react";
import { Camera, Save } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import { toast } from "sonner";

const DProfile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. Meena Sharma",
    specialization: "Cardiologist",
    licenseNo: "MED-2024-45678",
    hospital: "Apollo Hospital",
    phone: "+91 98765 43210",
    email: "meena.sharma@medilink.com",
    workingHours: "9:00 AM - 5:00 PM",
    bio: "Experienced cardiologist with 15+ years of practice. Specialized in preventive cardiology and cardiac rehabilitation.",
    notifications: true,
  });

  const handleSave = () => {
    toast.success("Profile updated successfully", {
      description: "Your changes have been saved",
    });
  };

  const handleChangePassword = () => {
    toast.info("Password change", {
      description: "Password change form would appear here",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </div>

      {/* Profile Photo */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                MS
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 rounded-full h-8 w-8 gradient-primary text-white"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{profile.name}</h3>
            <p className="text-muted-foreground">{profile.specialization}</p>
            <p className="text-sm text-muted-foreground mt-1">
              License: {profile.licenseNo}
            </p>
          </div>
        </div>
      </Card>

      {/* Personal Information */}
      <Card className="p-6 shadow-card">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialization">Specialization</Label>
            <Input
              id="specialization"
              value={profile.specialization}
              onChange={(e) =>
                setProfile({ ...profile, specialization: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hospital">Hospital Name</Label>
            <Input
              id="hospital"
              value={profile.hospital}
              onChange={(e) =>
                setProfile({ ...profile, hospital: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="license">License Number</Label>
            <Input
              id="license"
              value={profile.licenseNo}
              onChange={(e) =>
                setProfile({ ...profile, licenseNo: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="hours">Working Hours</Label>
            <Input
              id="hours"
              value={profile.workingHours}
              onChange={(e) =>
                setProfile({ ...profile, workingHours: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="bio">Professional Bio</Label>
            <Textarea
              id="bio"
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              rows={4}
            />
          </div>
        </div>
      </Card>

      {/* Settings */}
      <Card className="p-6 shadow-card">
        <h3 className="text-lg font-semibold mb-4">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Patient Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive notifications for new patients and emergencies
              </p>
            </div>
            <Switch
              checked={profile.notifications}
              onCheckedChange={(checked) =>
                setProfile({ ...profile, notifications: checked })
              }
            />
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="p-6 shadow-card">
        <h3 className="text-lg font-semibold mb-4">Security</h3>
        <Button variant="outline" onClick={handleChangePassword}>
          Change Password
        </Button>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          className="gradient-primary text-white hover-lift"
          onClick={handleSave}
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  );
};

export default DProfile;
