
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ComparisonDifferenceProps {
  value: string;
  isPositive: boolean;
}

const ComparisonDifference = ({ value, isPositive }: ComparisonDifferenceProps) => {
  return (
    <Badge className={`px-2 py-1 text-xs text-white ${
      isPositive ? 'bg-green-500' : 'bg-red-500'
    } rounded-full`}>
      {Math.abs(parseFloat(value))}%
    </Badge>
  );
};

export default ComparisonDifference;
