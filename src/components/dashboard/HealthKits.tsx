import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Droplets, Thermometer, Heart, Flower2, Plane, Apple } from "lucide-react";
import { toast } from "sonner";

const healthKits = [
  {
    name: "Diabetes Care Kit",
    icon: Droplets,
    description: "Essential medicines & supplies for diabetes management",
    price: "₹1,299",
    delivery: "30 min delivery",
    color: "text-blue-500",
  },
  {
    name: "Fever & Flu Relief Kit",
    icon: Thermometer,
    description: "Complete relief package for fever and cold symptoms",
    price: "₹599",
    delivery: "30 min delivery",
    color: "text-red-500",
  },
  {
    name: "First-Aid & Injury Kit",
    icon: Heart,
    description: "Emergency supplies for cuts, sprains and minor injuries",
    price: "₹899",
    delivery: "30 min delivery",
    color: "text-pink-500",
  },
  {
    name: "Menstrual Comfort Kit",
    icon: Flower2,
    description: "Pain relief and comfort essentials for menstrual care",
    price: "₹499",
    delivery: "30 min delivery",
    color: "text-purple-500",
  },
  {
    name: "Travel Emergency Kit",
    icon: Plane,
    description: "Compact kit with essentials for travel health emergencies",
    price: "₹799",
    delivery: "Next day delivery",
    color: "text-cyan-500",
  },
  {
    name: "Stomach & Digestion Kit",
    icon: Apple,
    description: "Relief supplies for stomach issues and digestive problems",
    price: "₹699",
    delivery: "30 min delivery",
    color: "text-green-500",
  },
];

export function HealthKits() {
  const handleOrder = (kitName: string) => {
    toast.success(`${kitName} added to cart!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Premade Health Kits</h2>
        <p className="text-muted-foreground">
          Fast Relief, Doctor Approved — Get curated health kits delivered within minutes
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by condition (e.g., flu, injury, travel)"
          className="pl-10"
        />
      </div>

      {/* AI Recommendation Banner */}
      <Card className="bg-gradient-primary border-0">
        <CardContent className="p-6">
          <p className="text-white font-medium">
            💡 AI suggests these kits based on your recent symptoms and health data
          </p>
        </CardContent>
      </Card>

      {/* Health Kits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthKits.map((kit, index) => {
          const Icon = kit.icon;
          return (
            <Card key={index} className="hover-scale group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-accent ${kit.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {kit.delivery}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-4">{kit.name}</CardTitle>
                <CardDescription>{kit.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{kit.price}</span>
                  <Badge variant="outline" className="text-xs">Doctor Verified</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-primary" 
                    onClick={() => handleOrder(kit.name)}
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Security Notice */}
      <Card className="border-dashed">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            🔒
          </div>
          <p className="text-sm text-muted-foreground">
            Your health data is encrypted and never shared without consent. HIPAA-equivalent security guaranteed.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
