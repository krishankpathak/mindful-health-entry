import { UtensilsCrossed, Flame, TrendingUp, Apple, Coffee, Sun, Moon, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const meals = [
  { 
    id: 1, 
    time: "Breakfast", 
    icon: Coffee, 
    items: ["Oatmeal with berries", "Greek yogurt", "Green tea"],
    calories: 350,
    protein: 15,
    carbs: 45,
    fats: 8,
    status: "completed"
  },
  { 
    id: 2, 
    time: "Mid-Morning Snack", 
    icon: Apple, 
    items: ["Apple slices", "Almonds (10)"],
    calories: 150,
    protein: 4,
    carbs: 20,
    fats: 7,
    status: "completed"
  },
  { 
    id: 3, 
    time: "Lunch", 
    icon: Sun, 
    items: ["Grilled chicken salad", "Quinoa", "Olive oil dressing"],
    calories: 480,
    protein: 35,
    carbs: 38,
    fats: 18,
    status: "pending"
  },
  { 
    id: 4, 
    time: "Dinner", 
    icon: Moon, 
    items: ["Baked salmon", "Steamed broccoli", "Brown rice"],
    calories: 520,
    protein: 40,
    carbs: 45,
    fats: 16,
    status: "upcoming"
  },
];

const nutritionGoals = {
  calories: { current: 500, target: 1800 },
  protein: { current: 19, target: 120 },
  carbs: { current: 65, target: 200 },
  fats: { current: 15, target: 60 },
};

export function DietPlans() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Diet Plans & Nutrition
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-powered personalized meal plans for optimal health
          </p>
        </div>
        <Button className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <Plus className="h-4 w-4" />
          Generate New Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
          <CardContent className="p-6">
            <Flame className="h-10 w-10 text-orange-500 mb-3" />
            <p className="text-3xl font-bold">{nutritionGoals.calories.current}</p>
            <p className="text-sm text-muted-foreground">Calories / {nutritionGoals.calories.target}</p>
            <Progress value={(nutritionGoals.calories.current / nutritionGoals.calories.target) * 100} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
          <CardContent className="p-6">
            <UtensilsCrossed className="h-10 w-10 text-red-500 mb-3" />
            <p className="text-3xl font-bold">{nutritionGoals.protein.current}g</p>
            <p className="text-sm text-muted-foreground">Protein / {nutritionGoals.protein.target}g</p>
            <Progress value={(nutritionGoals.protein.current / nutritionGoals.protein.target) * 100} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-6">
            <TrendingUp className="h-10 w-10 text-blue-500 mb-3" />
            <p className="text-3xl font-bold">{nutritionGoals.carbs.current}g</p>
            <p className="text-sm text-muted-foreground">Carbs / {nutritionGoals.carbs.target}g</p>
            <Progress value={(nutritionGoals.carbs.current / nutritionGoals.carbs.target) * 100} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20">
          <CardContent className="p-6">
            <Flame className="h-10 w-10 text-yellow-500 mb-3" />
            <p className="text-3xl font-bold">{nutritionGoals.fats.current}g</p>
            <p className="text-sm text-muted-foreground">Fats / {nutritionGoals.fats.target}g</p>
            <Progress value={(nutritionGoals.fats.current / nutritionGoals.fats.target) * 100} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>Today's Meal Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {meals.map((meal) => {
              const Icon = meal.icon;
              return (
                <div
                  key={meal.id}
                  className={`p-5 border rounded-xl hover:shadow-md transition-all ${
                    meal.status === "completed"
                      ? "bg-green-500/5 border-green-500/20"
                      : meal.status === "pending"
                      ? "bg-orange-500/5 border-orange-500/20"
                      : "bg-muted/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{meal.time}</p>
                        <p className="text-sm text-muted-foreground">{meal.calories} calories</p>
                      </div>
                    </div>
                    <Badge variant={meal.status === "completed" ? "default" : meal.status === "pending" ? "secondary" : "outline"}>
                      {meal.status}
                    </Badge>
                  </div>
                  <ul className="space-y-1 mb-3">
                    {meal.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t pt-3">
                    <span>Protein: {meal.protein}g</span>
                    <span>Carbs: {meal.carbs}g</span>
                    <span>Fats: {meal.fats}g</span>
                  </div>
                  {meal.status === "pending" && (
                    <Button size="sm" className="w-full mt-3">
                      Mark as Completed
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
