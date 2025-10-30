import { FileText, Upload, Download, Eye, Calendar, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const records = [
  { id: 1, name: "Blood Test Report", date: "2024-01-15", type: "Lab Report", status: "Normal" },
  { id: 2, name: "X-Ray Chest", date: "2024-01-10", type: "Imaging", status: "Clear" },
  { id: 3, name: "Prescription - Dr. Smith", date: "2024-01-08", type: "Prescription", status: "Active" },
  { id: 4, name: "Vaccination Record", date: "2023-12-20", type: "Immunization", status: "Complete" },
  { id: 5, name: "Annual Checkup", date: "2023-12-15", type: "Checkup", status: "Reviewed" },
];

export function MedicalRecords() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Medical Records
          </h1>
          <p className="text-muted-foreground mt-1">
            All your health documents in one secure place
          </p>
        </div>
        <Button className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <Upload className="h-4 w-4" />
          Upload New Record
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <FileText className="h-10 w-10 text-primary mb-3" />
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Total Records</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-6">
            <Calendar className="h-10 w-10 text-accent mb-3" />
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">This Month</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
          <CardContent className="p-6">
            <Download className="h-10 w-10 text-secondary mb-3" />
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Downloads</p>
          </CardContent>
        </Card>
        <Card className="hover-scale cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-6">
            <Eye className="h-10 w-10 text-purple-500 mb-3" />
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Views</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {records.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{record.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-sm text-muted-foreground">{record.date}</p>
                      <Badge variant="outline" className="text-xs">{record.type}</Badge>
                      <Badge className="text-xs">{record.status}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
