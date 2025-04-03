
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { areaPerformanceData } from './areaComparisonData';

const AreaPerformanceTable = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Area Metrics Comparison</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Area</TableHead>
              <TableHead>Transactions</TableHead>
              <TableHead>Avg Price/sqft</TableHead>
              <TableHead>YoY Price Change</TableHead>
              <TableHead>Rental Yield</TableHead>
              <TableHead>Avg. Rental (AED/year)</TableHead>
              <TableHead>Off-Plan %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {areaPerformanceData.map((area, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{area.area}</TableCell>
                <TableCell>{area.transactions.toLocaleString()}</TableCell>
                <TableCell>AED {area.avgPrice}</TableCell>
                <TableCell>
                  <Badge variant="success">+{area.yoyPrice}%</Badge>
                </TableCell>
                <TableCell>{area.yield}%</TableCell>
                <TableCell>AED {area.avgRental.toLocaleString()}</TableCell>
                <TableCell>{area.offPlanPercentage}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AreaPerformanceTable;
