import { useMemo } from "react";

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const strength = useMemo(() => {
    if (!password) return { level: 0, text: "", color: "" };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    if (score <= 2) return { level: score * 25, text: "Weak", color: "bg-destructive" };
    if (score <= 3) return { level: score * 25, text: "Fair", color: "bg-amber-500" };
    if (score <= 4) return { level: score * 25, text: "Good", color: "bg-accent" };
    return { level: 100, text: "Strong", color: "bg-secondary" };
  }, [password]);

  if (!password) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Password strength:</span>
        <span className={`font-medium ${strength.color.replace('bg-', 'text-')}`}>
          {strength.text}
        </span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${strength.color} transition-all duration-500 ease-out`}
          style={{ width: `${strength.level}%` }}
        />
      </div>
    </div>
  );
};
