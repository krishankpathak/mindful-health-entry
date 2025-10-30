import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Pill, Calendar } from "lucide-react";

export function HealthSnapshot() {
  const stats = [
    {
      title: "Medical Reports",
      value: "2 New Reports",
      subtitle: "5 total reports",
      icon: FileText,
      color: "text-blue-500",
    },
    {
      title: "Active Medicines",
      value: "5 Medicines",
      subtitle: "2 refills due soon",
      icon: Pill,
      color: "text-teal-500",
    },
    {
      title: "Next Appointment",
      value: "In 3 Days",
      subtitle: "Dr. Smith - Cardiology",
      icon: Calendar,
      color: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
