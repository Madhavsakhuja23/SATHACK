import { Card, CardContent } from "../ui/card";

export function KPICard({ title, value, icon: Icon, trend, trendUp }) {
  return (
    <Card className="gradient-card border border-border/50 hover:shadow-md transition-all duration-300 hover-scale">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className={`text-xs font-medium ${trendUp ? "text-success" : "text-destructive"}`}>
                {trend}
              </p>
            )}
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}