
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBadgeVariant } from "./compareUtils";

interface ComparisonCardProps {
  title: string;
  value: string;
  changeValue: string;
  trend: string;
}

const ComparisonCard = ({ title, value, changeValue, trend }: ComparisonCardProps) => {
  return (
    <Card className="bg-slate-800 text-white border-none">
      <CardContent className="p-6">
        <h3 className="text-base text-slate-300 mb-1">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <div className="mt-1">
          <Badge variant={getBadgeVariant(trend)}>
            {changeValue} YoY Change
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonCard;
