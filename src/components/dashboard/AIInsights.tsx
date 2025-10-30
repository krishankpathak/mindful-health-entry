import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, ArrowRight } from "lucide-react";

export function AIInsights() {
  const insights = [
    {
      text: "Your sugar levels have improved by 6% this month.",
      trend: "positive",
    },
    {
      text: "AI suggests mild morning walks to support better digestion.",
      trend: "suggestion",
    },
    {
      text: "Your medication adherence is excellent - keep it up!",
      trend: "positive",
    },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Health Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
            <TrendingUp className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
            <p className="text-sm flex-1">{insight.text}</p>
          </div>
        ))}
        <Button variant="outline" className="w-full group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
