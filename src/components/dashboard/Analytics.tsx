import { TrendingUp, Heart, Activity, Weight, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const healthTrends = [
  { date: "Jan 1", weight: 75, bp: 120, sugar: 95, steps: 8500 },
  { date: "Jan 8", weight: 74.5, bp: 118, sugar: 92, steps: 9200 },
  { date: "Jan 15", weight: 74, bp: 122, sugar: 98, steps: 8800 },
  { date: "Jan 22", weight: 73.8, bp: 119, sugar: 90, steps: 10500 },
  { date: "Jan 29", weight: 73.5, bp: 117, sugar: 88, steps: 11200 },
];

const medicineAdherence = [
  { day: "Mon", adherence: 95 },
  { day: "Tue", adherence: 100 },
  { day: "Wed", adherence: 85 },
  { day: "Thu", adherence: 100 },
  { day: "Fri", adherence: 90 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 95 },
];

const caloriesBurned = [
  { day: "Mon", calories: 2200 },
  { day: "Tue", calories: 2400 },
  { day: "Wed", calories: 2100 },
  { day: "Thu", calories: 2500 },
  { day: "Fri", calories: 2300 },
  { day: "Sat", calories: 2600 },
  { day: "Sun", calories: 2200 },
];

export function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Health Analytics & Reports
        </h1>
        <p className="text-muted-foreground mt-1">
          Track your health metrics and progress over time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
          <CardContent className="p-6">
            <Heart className="h-10 w-10 text-red-500 mb-3" />
            <p className="text-3xl font-bold">118</p>
            <p className="text-sm text-muted-foreground">Avg. Blood Pressure</p>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              2% improvement
            </p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-6">
            <Activity className="h-10 w-10 text-blue-500 mb-3" />
            <p className="text-3xl font-bold">91</p>
            <p className="text-sm text-muted-foreground">Avg. Blood Sugar</p>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              7% improvement
            </p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-6">
            <Weight className="h-10 w-10 text-purple-500 mb-3" />
            <p className="text-3xl font-bold">73.5</p>
            <p className="text-sm text-muted-foreground">Current Weight (kg)</p>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              1.5 kg lost
            </p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
          <CardContent className="p-6">
            <Calendar className="h-10 w-10 text-orange-500 mb-3" />
            <p className="text-3xl font-bold">9,840</p>
            <p className="text-sm text-muted-foreground">Avg. Daily Steps</p>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              15% increase
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Weight & Blood Pressure Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="hsl(var(--primary))" strokeWidth={2} />
                <Line type="monotone" dataKey="bp" stroke="hsl(var(--accent))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Blood Sugar Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={healthTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Area type="monotone" dataKey="sugar" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary) / 0.2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Medicine Adherence (Weekly)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={medicineAdherence}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="adherence" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Calories Burned (Weekly)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={caloriesBurned}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="calories" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
