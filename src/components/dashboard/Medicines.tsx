import { Pill, Clock, AlertCircle, CheckCircle, Plus, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const medicines = [
  { id: 1, name: "Metformin", dosage: "500mg", frequency: "Twice daily", time: "8:00 AM, 8:00 PM", taken: 14, total: 30, refill: "In 16 days" },
  { id: 2, name: "Lisinopril", dosage: "10mg", frequency: "Once daily", time: "9:00 AM", taken: 22, total: 30, refill: "In 8 days" },
  { id: 3, name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily", time: "9:00 AM", taken: 28, total: 30, refill: "In 2 days" },
  { id: 4, name: "Aspirin", dosage: "81mg", frequency: "Once daily", time: "10:00 AM", taken: 18, total: 30, refill: "In 12 days" },
];

const schedule = [
  { time: "8:00 AM", medicine: "Metformin 500mg", status: "taken" },
  { time: "9:00 AM", medicine: "Lisinopril 10mg + Vitamin D3", status: "taken" },
  { time: "10:00 AM", medicine: "Aspirin 81mg", status: "pending" },
  { time: "8:00 PM", medicine: "Metformin 500mg", status: "upcoming" },
];

export function Medicines() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Medicine Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your medications and never miss a dose
          </p>
        </div>
        <Button className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <Plus className="h-4 w-4" />
          Add Medicine
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <Pill className="h-10 w-10 text-primary mb-3" />
            <p className="text-3xl font-bold">4</p>
            <p className="text-sm text-muted-foreground">Active Medicines</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-6">
            <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
            <p className="text-3xl font-bold">92%</p>
            <p className="text-sm text-muted-foreground">Adherence Rate</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
          <CardContent className="p-6">
            <AlertCircle className="h-10 w-10 text-orange-500 mb-3" />
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-muted-foreground">Refills Due Soon</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-6">
            <Clock className="h-10 w-10 text-accent mb-3" />
            <p className="text-3xl font-bold">1</p>
            <p className="text-sm text-muted-foreground">Pending Today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-elegant">
          <CardHeader>
            <CardTitle>Active Medications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {medicines.map((med) => (
                <div key={med.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-lg">{med.name}</p>
                      <p className="text-sm text-muted-foreground">{med.dosage} • {med.frequency}</p>
                    </div>
                    <Badge variant={med.taken > med.total * 0.8 ? "default" : "destructive"}>
                      {med.refill}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{med.taken}/{med.total} taken</span>
                    </div>
                    <Progress value={(med.taken / med.total) * 100} className="h-2" />
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{med.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border ${
                    item.status === "taken"
                      ? "bg-green-500/10 border-green-500/20"
                      : item.status === "pending"
                      ? "bg-orange-500/10 border-orange-500/20"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm">{item.time}</p>
                    {item.status === "taken" && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                    {item.status === "pending" && (
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.medicine}</p>
                  {item.status === "pending" && (
                    <Button size="sm" className="w-full mt-2">
                      Mark as Taken
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
