
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface PropertyTypeData {
  type: string;
  medianPrice: string;
  pricePerSqft: string;
}

interface PriceAnalysisTableProps {
  data: PropertyTypeData[];
}

const PriceAnalysisTable = ({ data }: PriceAnalysisTableProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-xl font-bold">Price analysis (2024)</h2>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property type</TableHead>
              <TableHead>Median price</TableHead>
              <TableHead>Median price/sqft</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.type}</TableCell>
                <TableCell>{row.medianPrice}</TableCell>
                <TableCell>{row.pricePerSqft}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default PriceAnalysisTable;
