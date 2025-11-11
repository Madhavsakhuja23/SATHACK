import { useState } from "react";
import { DSidebar } from "./DSidebar";
import { DTopNavbar } from "./DTopNavbar";
import { DFooter } from "./DFooter";

export const DDashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <DSidebar />

      <div className="flex-1 flex flex-col">
        <DTopNavbar notificationCount={4} />

        <main className="flex-1 p-6">
          {children}
        </main>

        <DFooter />
      </div>
    </div>
  );
};