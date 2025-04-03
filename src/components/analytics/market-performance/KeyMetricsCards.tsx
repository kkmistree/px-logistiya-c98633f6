
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MetricItem {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

interface KeyMetricsCardsProps {
  metrics: MetricItem[];
}

const KeyMetricsCards = ({ metrics }: KeyMetricsCardsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.slice(0, 3).map((metric, index) => (
          <Card key={index} className="bg-slate-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-slate-300">{metric.title}</h3>
              <p className="text-2xl font-bold mt-2">{metric.value}</p>
              <div className="flex items-center mt-1">
                <Badge variant={metric.trend === "up" ? "success" : "destructive"} className="text-xs">
                  YoY Change: {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.slice(3).map((metric, index) => (
          <Card key={index} className="bg-slate-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-slate-300">{metric.title}</h3>
              <p className="text-2xl font-bold mt-2">{metric.value}</p>
              <div className="flex items-center mt-1">
                <Badge variant={metric.trend === "up" ? "success" : "destructive"} className="text-xs">
                  YoY Change: {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default KeyMetricsCards;
