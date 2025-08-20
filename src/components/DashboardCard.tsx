import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  gradient: string;
  textColor?: string;
}

export function DashboardCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  gradient,
  textColor = "text-white"
}: DashboardCardProps) {
  return (
    <Card className={cn("border-0 relative overflow-hidden", gradient)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className={cn("text-sm font-medium opacity-90", textColor)}>
              {title}
            </p>
            <p className={cn("text-3xl font-bold", textColor)}>
              {value}
            </p>
            {subtitle && (
              <p className={cn("text-sm opacity-75", textColor)}>
                {subtitle}
              </p>
            )}
          </div>
          <div className={cn("p-3 rounded-full bg-white/20", textColor)}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
        <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/5 rounded-full" />
      </CardContent>
    </Card>
  );
}