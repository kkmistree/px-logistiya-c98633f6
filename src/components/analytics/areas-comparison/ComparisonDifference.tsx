
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ComparisonDifferenceProps {
  value: string;
  isPositive: boolean;
}

const ComparisonDifference = ({ value, isPositive }: ComparisonDifferenceProps) => {
  return (
    <Badge className={`absolute z-10 transform -translate-y-1/2 px-3 py-1 text-white ${
      isPositive ? 'bg-green-500' : 'bg-red-500'
    }`}>
      {value}%
    </Badge>
  );
};

export default ComparisonDifference;
