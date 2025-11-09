import { Bell, User } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="hover:bg-muted rounded-lg transition-colors" />
        </div>

        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <Button variant="ghost" size="icon" className="relative hover:bg-muted rounded-full">
            <Bell className="h-5 w-5 text-foreground" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-destructive text-white text-xs">
              3
            </Badge>
          </Button>

          {/* Hospital Name */}
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-foreground">CityCare Hospital</p>
            <p className="text-xs text-muted-foreground">Admin Dashboard</p>
          </div>

          {/* Profile Avatar */}
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
              <User className="h-5 w-5 text-white" />
            </div>
          </Button>
        </div>
      </div>
    </header>)}