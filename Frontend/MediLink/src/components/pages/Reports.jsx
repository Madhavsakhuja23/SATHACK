import { AnalyticsSection } from "./AnalyticsSection";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { FileDown, Calendar } from "lucide-react";
import { toast } from "sonner";

const Reports = () => {
  const handleExport = (format) => {
    toast.success(`Exporting report as ${format}`, {
      description: "Your report will download shortly",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            View detailed insights and analytics
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="hover-lift">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button
            className="gradient-primary text-white hover-lift"
            onClick={() => handleExport("PDF")}
          >
            <FileDown className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 hover-lift shadow-card">
          <p className="text-sm text-muted-foreground mb-1">
            Patients This Week
          </p>
          <p className="text-3xl font-bold text-primary">80</p>
          <p className="text-xs text-muted-foreground mt-2">
            +12% from last week
          </p>
        </Card>

        <Card className="p-6 hover-lift shadow-card">
          <p className="text-sm text-muted-foreground mb-1">
            Avg Consultation Time
          </p>
          <p className="text-3xl font-bold text-secondary">11 mins</p>
          <p className="text-xs text-muted-foreground mt-2">
            -3 mins improvement
          </p>
        </Card>

        <Card className="p-6 hover-lift shadow-card">
          <p className="text-sm text-muted-foreground mb-1">
            Prescriptions Issued
          </p>
          <p className="text-3xl font-bold text-accent-foreground">132</p>
          <p className="text-xs text-muted-foreground mt-2">This month</p>
        </Card>
      </div>

      {/* Analytics Charts */}
      <AnalyticsSection />

      {/* Export Options */}
      <Card className="p-6 shadow-card">
        <h3 className="font-semibold mb-4">Export Options</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="hover-lift"
            onClick={() => handleExport("PDF")}
          >
            <FileDown className="h-4 w-4 mr-2" />
            Export as PDF
          </Button>

          <Button
            variant="outline"
            className="hover-lift"
            onClick={() => handleExport("Excel")}
          >
            <FileDown className="h-4 w-4 mr-2" />
            Export as Excel
          </Button>

          <Button
            variant="outline"
            className="hover-lift"
            onClick={() => handleExport("CSV")}
          >
            <FileDown className="h-4 w-4 mr-2" />
            Export as CSV
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Reports;
