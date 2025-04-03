
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { getPercentageClass } from '@/components/analytics/area-analysis/utils';

interface ComparisonItemProps {
  title: string;
  value: string;
  changeValue: string;
  year?: string;
}

const ComparisonItem = ({ title, value, changeValue, year = "2024" }: ComparisonItemProps) => {
  const isPositive = changeValue.startsWith("+");
  const badgeClass = isPositive ? "bg-green-500" : "bg-red-500";
  
  return (
    <div className="bg-slate-800 text-white border-none rounded-lg p-6">
      <h3 className="text-base text-slate-300 mb-1">{title} ({year})</h3>
      <p className="text-2xl font-bold">{value}</p>
      <div className="mt-1">
        <Badge className={`px-3 py-1 ${badgeClass} text-white`}>
          {changeValue} YoY Change
        </Badge>
      </div>
    </div>
  );
};

export default ComparisonItem;
