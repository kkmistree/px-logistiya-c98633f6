
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AreaItemType } from "./areaData";
import { getBadgeVariant } from "./utils";

interface TableViewProps {
  areaData: AreaItemType[];
}

const TableView = ({ areaData }: TableViewProps) => {
  return (
    <Card>
      <CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Area</TableHead>
              <TableHead>Total Value (2024)</TableHead>
              <TableHead>Total Volume (2024)</TableHead>
              <TableHead>Median Price (2024)</TableHead>
              <TableHead>Median Price/sqft (2024)</TableHead>
              <TableHead>Value YoY</TableHead>
              <TableHead>Volume YoY</TableHead>
              <TableHead>Existing Units</TableHead>
              <TableHead>Upcoming Units</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {areaData.map((area) => (
              <TableRow key={area.id}>
                <TableCell className="font-medium">{area.name}</TableCell>
                <TableCell>{area.totalValue}</TableCell>
                <TableCell>{area.totalVolume}</TableCell>
                <TableCell>{area.medianPrice}</TableCell>
                <TableCell>{area.medianPricePerSqft}</TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(area.trend)}>
                    {area.valueYoY}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(area.trend)}>
                    {area.volumeYoY}
                  </Badge>
                </TableCell>
                <TableCell>{area.existingUnits}</TableCell>
                <TableCell>{area.upcomingUnits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TableView;
