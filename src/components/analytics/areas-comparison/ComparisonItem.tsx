
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ComparisonItemProps {
  title: string;
  value: string;
  changeValue: string;
}

const ComparisonItem = ({ title, value, changeValue }: ComparisonItemProps) => {
  const isPositive = !changeValue.startsWith("-");
  const badgeClass = isPositive ? "bg-green-500" : "bg-red-500";
  
  return (
    <div className="bg-slate-800 text-white border-none rounded-lg p-6">
      <p className="text-base text-slate-300 mb-1">{title}</p>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <Badge className={`px-3 py-1 ${badgeClass} text-white`}>
        {changeValue} YoY Change
      </Badge>
    </div>
  );
};

export default ComparisonItem;
