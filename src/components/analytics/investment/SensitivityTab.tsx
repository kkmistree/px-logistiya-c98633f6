
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const sensitivityData = [
  { irr: 8, occupancy: 75, rentalGrowth: -1, costInflation: 5, value: 9.2 },
  { irr: 10, occupancy: 80, rentalGrowth: 0, costInflation: 4, value: 10.8 },
  { irr: 12, occupancy: 85, rentalGrowth: 1, costInflation: 3, value: 12.5 },
  { irr: 14, occupancy: 90, rentalGrowth: 2, costInflation: 2, value: 14.9 },
  { irr: 16, occupancy: 95, rentalGrowth: 3, costInflation: 1, value: 17.6 },
  { irr: 18, occupancy: 100, rentalGrowth: 4, costInflation: 0, value: 20.3 },
];

const SensitivityTab = () => {
  const [occupancy, setOccupancy] = useState(90);
  const [rentalGrowth, setRentalGrowth] = useState(2);
  const [costInflation, setCostInflation] = useState(2);

  // Calculate estimated IRR based on slider values
  const estimatedIRR = () => {
    // Simple calculation for demo purposes
    const baseIRR = 14; 
    const occupancyFactor = (occupancy - 90) * 0.1;
    const growthFactor = (rentalGrowth - 2) * 0.5;
    const inflationFactor = (2 - costInflation) * 0.25;
    
    return (baseIRR + occupancyFactor + growthFactor + inflationFactor).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">IRR Sensitivity Analysis</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={sensitivityData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="irr" label={{ value: 'IRR (%)', position: 'insideBottomRight', offset: -10 }} />
              <YAxis label={{ value: 'Property Value (M SAR)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value, name) => [name === 'value' ? `SAR ${value}M` : `${value}%`, name === 'value' ? 'Property Value' : name]} />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" name="Property Value" dot={{ r: 6 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Variable Adjustment</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Occupancy Rate (%)</span>
                <span className="text-sm font-bold text-blue-600">{occupancy}%</span>
              </div>
              <Slider
                defaultValue={[90]}
                min={70}
                max={100}
                step={1}
                onValueChange={(value) => setOccupancy(value[0])}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Annual Rental Growth (%)</span>
                <span className="text-sm font-bold text-green-600">{rentalGrowth}%</span>
              </div>
              <Slider
                defaultValue={[2]}
                min={-2}
                max={6}
                step={0.5}
                onValueChange={(value) => setRentalGrowth(value[0])}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Cost Inflation (%)</span>
                <span className="text-sm font-bold text-red-600">{costInflation}%</span>
              </div>
              <Slider
                defaultValue={[2]}
                min={0}
                max={6}
                step={0.5}
                onValueChange={(value) => setCostInflation(value[0])}
              />
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
              <div className="flex justify-between items-center">
                <span className="text-blue-800 font-medium">Estimated IRR:</span>
                <span className="text-2xl font-bold text-blue-600">{estimatedIRR()}%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Sensitivity Matrix</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Occupancy</TableHead>
                  <TableHead>-2%</TableHead>
                  <TableHead>0%</TableHead>
                  <TableHead>+2%</TableHead>
                  <TableHead>+4%</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">80%</TableCell>
                  <TableCell className="text-red-500">8.2%</TableCell>
                  <TableCell className="text-red-500">9.5%</TableCell>
                  <TableCell>10.9%</TableCell>
                  <TableCell>12.2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">85%</TableCell>
                  <TableCell className="text-red-500">9.8%</TableCell>
                  <TableCell>11.2%</TableCell>
                  <TableCell>12.7%</TableCell>
                  <TableCell>14.1%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">90%</TableCell>
                  <TableCell>11.3%</TableCell>
                  <TableCell>12.8%</TableCell>
                  <TableCell className="text-green-500">14.4%</TableCell>
                  <TableCell className="text-green-500">16.0%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">95%</TableCell>
                  <TableCell>12.9%</TableCell>
                  <TableCell className="text-green-500">14.5%</TableCell>
                  <TableCell className="text-green-500">16.2%</TableCell>
                  <TableCell className="text-green-500">17.9%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-slate-500">
            <p>Table shows IRR values based on occupancy (rows) and rental growth (columns)</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SensitivityTab;
