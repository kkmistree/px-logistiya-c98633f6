
import { Card } from "@/components/ui/card";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, Cell } from "recharts";

const propertyData = [
  { property: "Industrial Plot A", roi: 12, irr: 16, yield: 8.5 },
  { property: "Logistics Hub B", roi: 14, irr: 17, yield: 9.2 },
  { property: "Warehouse C", roi: 11, irr: 15.5, yield: 7.8 },
  { property: "Mixed Use D", roi: 10, irr: 14, yield: 7.2 },
  { property: "Industrial Park E", roi: 13, irr: 16.5, yield: 8.9 },
];

const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EC4899', '#8B5CF6'];

const PropertyAnalysisTab = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance by Property</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={propertyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="property" angle={-45} textAnchor="end" height={70} />
              <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
              <Tooltip formatter={(value) => [`${value}%`, ""]} />
              <Bar dataKey="roi" name="ROI (%)" fill="#10B981">
                {propertyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
              <Bar dataKey="irr" name="IRR (%)" fill="#3B82F6">
                {propertyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                ))}
              </Bar>
              <Bar dataKey="yield" name="Yield (%)" fill="#F59E0B">
                {propertyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[(index + 4) % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Key Property Metrics</h3>
          <div className="space-y-4">
            {propertyData.map((property, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                <span className="font-medium">{property.property}</span>
                <div className="flex gap-4">
                  <span className="text-green-600">ROI: {property.roi}%</span>
                  <span className="text-blue-600">IRR: {property.irr}%</span>
                  <span className="text-amber-600">Yield: {property.yield}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Investment Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Total Properties:</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Average ROI:</span>
              <span className="font-medium text-green-600">12%</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Average IRR:</span>
              <span className="font-medium text-blue-600">15.8%</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Average Yield:</span>
              <span className="font-medium text-amber-600">8.3%</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Best Performer:</span>
              <span className="font-medium">Logistics Hub B</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PropertyAnalysisTab;
