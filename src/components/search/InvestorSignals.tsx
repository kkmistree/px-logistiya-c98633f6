
import { useState } from 'react';
import { Bell, TrendingUp, TrendingDown, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';

interface Signal {
  id: number;
  title: string;
  description: string;
  type: 'opportunity' | 'risk' | 'info';
  timestamp: string;
}

const InvestorSignals = () => {
  const [signals] = useState<Signal[]>([
    {
      id: 1,
      title: "Cap rate compression detected in KAEC",
      description: "Industrial yields falling as prices rise, indicating growing investor competition",
      type: "info",
      timestamp: "2h ago"
    },
    {
      id: 2,
      title: "Foreign capital surge in Jeddah Industrial Area",
      description: "22% increase in foreign investment this quarter in port-adjacent properties",
      type: "opportunity",
      timestamp: "6h ago"
    },
    {
      id: 3,
      title: "Vacancy rates rising in older warehouse stock",
      description: "Facilities built pre-2020 showing 8% higher vacancy compared to newer builds",
      type: "risk",
      timestamp: "1d ago"
    }
  ]);

  return (
    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Bell size={18} className="mr-2 text-amber-500" />
            Investor Signals
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Info size={14} className="text-slate-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">Real-time market signals relevant to investment decisions</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription className="text-xs mt-1">Market movements and investment indicators</CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        {signals.map((signal) => (
          <TooltipProvider key={signal.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`p-3 rounded-md border cursor-help ${
                  signal.type === 'opportunity' 
                    ? 'bg-green-50 border-green-100' 
                    : signal.type === 'risk'
                      ? 'bg-red-50 border-red-100'
                      : 'bg-blue-50 border-blue-100'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-1.5 rounded-full ${
                      signal.type === 'opportunity' 
                        ? 'bg-green-100' 
                        : signal.type === 'risk'
                          ? 'bg-red-100'
                          : 'bg-blue-100'
                    }`}>
                      {signal.type === 'opportunity' ? (
                        <TrendingUp size={14} className="text-green-600" />
                      ) : signal.type === 'risk' ? (
                        <TrendingDown size={14} className="text-red-600" />
                      ) : (
                        <Info size={14} className="text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className={`text-sm font-medium ${
                          signal.type === 'opportunity' 
                            ? 'text-green-700' 
                            : signal.type === 'risk'
                              ? 'text-red-700'
                              : 'text-blue-700'
                        }`}>{signal.title}</h4>
                        <span className="text-xs text-slate-500">{signal.timestamp}</span>
                      </div>
                      <p className="text-xs mt-1 text-slate-600">{signal.description}</p>
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p className="text-xs max-w-xs">Click to explore more about this market signal</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </CardContent>
    </Card>
  );
};

export default InvestorSignals;
