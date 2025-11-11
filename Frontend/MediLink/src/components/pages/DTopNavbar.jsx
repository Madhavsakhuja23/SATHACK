import { User } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const DTopNavbar = () => {
  return (
    <header className="h-16 bg-card border-b shadow-card flex items-center justify-between px-6 sticky top-0 z-40 backdrop-blur-sm bg-card/95">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Doctor Portal</h2>
        <p className="text-xs text-muted-foreground">Manage your patients and consultations</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover-lift">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  MS
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">Dr. Meena Sharma</p>
                <p className="text-xs text-muted-foreground">Cardiologist</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};