
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TransactionHighlights = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Transaction Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h3 className="font-medium">Record Month</h3>
            <p className="text-2xl font-bold">18,929</p>
            <p className="text-sm text-slate-600">Transactions in October 2025</p>
            <Badge variant="success" className="mt-2">+14.3% vs Previous Month</Badge>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-medium">Transaction Value</h3>
            <p className="text-2xl font-bold">AED 40.9B</p>
            <p className="text-sm text-slate-600">Total Value in October 2025</p>
            <Badge variant="success" className="mt-2">+14.4% vs Previous Month</Badge>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <h3 className="font-medium">Off-Plan Sales</h3>
            <p className="text-2xl font-bold">13,467</p>
            <p className="text-sm text-slate-600">71% of Total Transactions</p>
            <Badge variant="success" className="mt-2">+18.4% vs Previous Month</Badge>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h3 className="font-medium">YTD Growth</h3>
            <p className="text-2xl font-bold">+75.8%</p>
            <p className="text-sm text-slate-600">vs October 2024</p>
            <Badge variant="success" className="mt-2">Historical High</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHighlights;
