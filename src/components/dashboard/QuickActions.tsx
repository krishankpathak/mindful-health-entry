import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Pill, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export function QuickActions() {
  const actions = [
    { label: "Upload Report", icon: Upload, color: "bg-gradient-primary" },
    { label: "Check Medicine", icon: Pill, color: "bg-gradient-secondary" },
    { label: "Generate Diet", icon: UtensilsCrossed, color: "bg-gradient-accent" },
    { label: "Order Health Kit", icon: ShoppingBag, color: "bg-gradient-primary" },
  ];

  const handleAction = (label: string) => {
    toast.success(`${label} feature coming soon!`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              variant="outline"
              className="h-auto flex-col gap-2 py-4 hover-scale"
              onClick={() => handleAction(action.label)}
            >
              <div className={`p-3 rounded-lg ${action.color}`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs font-medium">{action.label}</span>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
