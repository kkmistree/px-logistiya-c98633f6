
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Transaction {
  id: number;
  location: string;
  propertyType: string;
  status: string;
  price: string;
  area: string;
  date: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  sortBy: string;
  setSortBy: (value: string) => void;
}

const TransactionTable = ({ transactions, sortBy, setSortBy }: TransactionTableProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Industrial Transactions</h2>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Date (Newest first)</SelectItem>
            <SelectItem value="oldest">Date (Oldest first)</SelectItem>
            <SelectItem value="price-high">Price (High to Low)</SelectItem>
            <SelectItem value="price-low">Price (Low to High)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Location</TableHead>
              <TableHead>Property Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Area (sqm)</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.location}</TableCell>
                <TableCell>{transaction.propertyType}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>{transaction.area}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline" className="h-8 text-xs bg-pink-500 text-white">
                    View details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" className="w-24">
          Previous
        </Button>
        <Button variant="outline" size="sm" className="w-24 bg-pink-500 text-white">
          Next
        </Button>
      </div>
    </div>
  );
};

export default TransactionTable;
