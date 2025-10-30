import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Activity, Heart, Calendar, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-soft">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 gradient-health rounded-3xl flex items-center justify-center shadow-health">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold">Smart HealthMate</h1>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI-Based Personal<br />
            <span className="gradient-health bg-clip-text text-transparent">Medical & Diet Assistant</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your health companion powered by AI. Manage medical records, track medications, 
            and get personalized diet plans — all in one secure platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="gradient-health text-white font-semibold shadow-health hover:shadow-medium transition-all duration-300 hover:scale-105 text-lg px-8"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8"
            >
              Sign In
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="glass-card p-6 rounded-2xl shadow-health hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 gradient-health rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Health Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor vitals, symptoms, and health metrics in real-time
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl shadow-health hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 gradient-wellness rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Diet Plans</h3>
              <p className="text-sm text-muted-foreground">
                Personalized nutrition recommendations based on your health data
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl shadow-health hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 gradient-health rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Medication Reminders</h3>
              <p className="text-sm text-muted-foreground">
                Never miss a dose with smart medication scheduling
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl shadow-health hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 gradient-wellness rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                HIPAA & GDPR compliant with AES-256 encryption
              </p>
            </div>
          </div>

          <div className="mt-16 p-6 glass-card rounded-2xl shadow-health max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">Your Data Security Matters</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Protected with AES-256 encryption • HIPAA & GDPR Compliant • 
              Your health data is never shared without your explicit consent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
