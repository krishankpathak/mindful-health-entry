import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { HealthSnapshot } from "@/components/dashboard/HealthSnapshot";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { HealthKits } from "@/components/dashboard/HealthKits";
import { DietPlan } from "@/components/dashboard/DietPlan";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    if (activeTab === "health-kits") {
      return <HealthKits />;
    }

    // Dashboard overview
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Your complete health overview at a glance
          </p>
        </div>

        <HealthSnapshot />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AIInsights />
          </div>
          <div className="space-y-6">
            <DietPlan />
            <QuickActions />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar userName="John Doe" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
