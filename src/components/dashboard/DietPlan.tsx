import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Apple, Flame } from "lucide-react";

export function DietPlan() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Apple className="h-5 w-5 text-green-500" />
          Today's Diet Plan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Status</span>
          <Badge variant="secondary">Balanced</Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              Calories
            </span>
            <span className="font-medium">1,650 / 2,000 kcal</span>
          </div>
          <Progress value={82} className="h-2" />
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Protein</span>
            <span className="font-medium">45g / 60g</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Carbs</span>
            <span className="font-medium">180g / 250g</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Fats</span>
            <span className="font-medium">52g / 70g</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
