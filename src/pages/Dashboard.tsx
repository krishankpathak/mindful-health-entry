import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { HealthSnapshot } from "@/components/dashboard/HealthSnapshot";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { HealthKits } from "@/components/dashboard/HealthKits";
import { DietPlan } from "@/components/dashboard/DietPlan";
import { MedicalRecords } from "@/components/dashboard/MedicalRecords";
import { Medicines } from "@/components/dashboard/Medicines";
import { DietPlans } from "@/components/dashboard/DietPlans";
import { Appointments } from "@/components/dashboard/Appointments";
import { Analytics } from "@/components/dashboard/Analytics";
import { Settings } from "@/components/dashboard/Settings";

export default function Dashboard() {
  const location = useLocation();
  const userName = location.state?.userName || "User";
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "records":
        return <MedicalRecords />;
      case "medicines":
        return <Medicines />;
      case "diet":
        return <DietPlans />;
      case "health-kits":
        return <HealthKits />;
      case "appointments":
        return <Appointments />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings userName={userName} />;
      default:
        // Dashboard overview
        return (
          <div className="space-y-6">
            <div className="bg-gradient-primary p-8 rounded-2xl text-white shadow-elegant">
              <h1 className="text-4xl font-bold mb-2">Welcome back, {userName}! 👋</h1>
              <p className="text-white/90 text-lg">
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
    }
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar userName={userName} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
