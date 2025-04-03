
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ComparisonHeaderProps {
  year: string;
}

const ComparisonHeader = ({ year }: ComparisonHeaderProps) => {
  return (
    <div className="bg-slate-900 text-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-1">Area side by side analysis</h2>
    </div>
  );
};

export default ComparisonHeader;
