
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KeyMetric {
  title: string;
  value: string;
  change: string;
  trend: string;
}

interface KeyMetricsGridProps {
  metrics: KeyMetric[];
}

const KeyMetricsGrid = ({ metrics }: KeyMetricsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-slate-900 text-white">
          <CardContent className="p-4">
            <h3 className="text-sm text-slate-300">{metric.title}</h3>
            <p className="text-xl font-bold mt-2">{metric.value}</p>
            <div className="flex items-center mt-1">
              <Badge variant={metric.trend === "up" ? "success" : "destructive"} className="text-xs">
                {metric.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KeyMetricsGrid;
