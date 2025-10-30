import { Calendar, Clock, Video, MapPin, Plus, User, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-02-15",
    time: "10:00 AM",
    type: "In-Person",
    location: "City Medical Center, Room 204",
    status: "upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Endocrinologist",
    date: "2024-02-18",
    time: "2:30 PM",
    type: "Video Call",
    location: "Online Consultation",
    status: "upcoming",
  },
  {
    id: 3,
    doctor: "Dr. Emily Roberts",
    specialty: "General Physician",
    date: "2024-01-28",
    time: "11:00 AM",
    type: "In-Person",
    location: "Health Plus Clinic",
    status: "completed",
  },
];

export function Appointments() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Appointments & Consultations
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your doctor visits and online consultations
          </p>
        </div>
        <Button className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <Plus className="h-4 w-4" />
          Book Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <Calendar className="h-10 w-10 text-primary mb-3" />
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Total Appointments</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
          <CardContent className="p-6">
            <Clock className="h-10 w-10 text-orange-500 mb-3" />
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-muted-foreground">Upcoming</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-6">
            <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-6">
            <Video className="h-10 w-10 text-purple-500 mb-3" />
            <p className="text-3xl font-bold">1</p>
            <p className="text-sm text-muted-foreground">Video Calls</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-elegant">
          <CardHeader>
            <CardTitle>Your Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className={`p-5 border rounded-xl hover:shadow-md transition-all ${
                    apt.status === "completed" ? "bg-muted/30" : "bg-accent/20"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {apt.doctor.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-lg">{apt.doctor}</p>
                        <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                      </div>
                    </div>
                    <Badge variant={apt.status === "upcoming" ? "default" : "secondary"}>
                      {apt.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{apt.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {apt.type === "Video Call" ? (
                        <Video className="h-4 w-4" />
                      ) : (
                        <MapPin className="h-4 w-4" />
                      )}
                      <span>{apt.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{apt.location}</span>
                    </div>
                  </div>
                  {apt.status === "upcoming" && (
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">
                        {apt.type === "Video Call" ? "Join Call" : "View Details"}
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-2" variant="outline">
              <Calendar className="h-4 w-4" />
              View Calendar
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <User className="h-4 w-4" />
              Find a Doctor
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Video className="h-4 w-4" />
              Instant Video Consultation
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Clock className="h-4 w-4" />
              Appointment History
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
