
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

// Mock transaction data for Saudi industrial properties
const transactionData = [
  {
    id: 1,
    location: "Riyadh Industrial City",
    propertyType: "Warehouse",
    status: "Available",
    price: "SAR 15.3M",
    area: "5,000 sqm",
    date: "Apr 12, 2025"
  },
  {
    id: 2,
    location: "Jeddah Industrial City",
    propertyType: "Factory",
    status: "Under-Development",
    price: "SAR 22.5M",
    area: "8,264 sqm",
    date: "Apr 10, 2025"
  },
  {
    id: 3,
    location: "KAEC Industrial Valley",
    propertyType: "Logistics", 
    status: "Available",
    price: "SAR 18.2M",
    area: "7,938 sqm",
    date: "Apr 07, 2025"
  },
  {
    id: 4,
    location: "Dammam Industrial City",
    propertyType: "Warehouse",
    status: "Available",
    price: "SAR 17.5M",
    area: "6,501 sqm",
    date: "Apr 05, 2025"
  },
  {
    id: 5,
    location: "Jubail Industrial City",
    propertyType: "Factory",
    status: "Under-Development",
    price: "SAR 31.1M",
    area: "12,234 sqm",
    date: "Mar 28, 2025"
  },
  {
    id: 6,
    location: "Sudair City for Industry",
    propertyType: "Land",
    status: "Available",
    price: "SAR 14.2M",
    area: "20,818 sqm",
    date: "Mar 25, 2025"
  },
  {
    id: 7,
    location: "Yanbu Industrial City",
    propertyType: "Factory",
    status: "Under-Development",
    price: "SAR 29.9M",
    area: "10,458 sqm",
    date: "Mar 20, 2025"
  },
  {
    id: 8,
    location: "Rabigh Industrial Zone",
    propertyType: "Warehouse",
    status: "Available",
    price: "SAR 16.6M",
    area: "7,000 sqm",
    date: "Mar 15, 2025"
  }
];

// Mock key metrics data for Saudi industrial market
const keyMetrics = [
  {
    title: "Total transactions",
    value: "2,845",
    change: "+18.9% YoY Change",
    trend: "up"
  },
  {
    title: "Total transactions value",
    value: "SAR 91,345,196,037",
    change: "+22.3% YoY Change",
    trend: "up"
  },
  {
    title: "Median price",
    value: "SAR 15,481,852",
    change: "+4.8% YoY Change", 
    trend: "up"
  },
  {
    title: "Median price per sqm",
    value: "SAR 1,845",
    change: "+3.7% YoY Change",
    trend: "up"
  }
];

const TransactionAnalysis = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [size, setSize] = useState("all");
  const [area, setArea] = useState("all");
  const [transactionType, setTransactionType] = useState("sales");
  const [date, setDate] = useState<Date>();
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="warehouse">Warehouse</SelectItem>
              <SelectItem value="factory">Factory</SelectItem>
              <SelectItem value="logistics">Logistics</SelectItem>
              <SelectItem value="land">Land</SelectItem>
              <SelectItem value="office">Industrial Office</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Property Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="under-development">Under-Development</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={area} onValueChange={setArea}>
            <SelectTrigger>
              <SelectValue placeholder="Choose area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All areas</SelectItem>
              <SelectItem value="riyadh">Riyadh Industrial City</SelectItem>
              <SelectItem value="jeddah">Jeddah Industrial City</SelectItem>
              <SelectItem value="dammam">Dammam Industrial City</SelectItem>
              <SelectItem value="jubail">Jubail Industrial City</SelectItem>
              <SelectItem value="kaec">KAEC Industrial Valley</SelectItem>
              <SelectItem value="sudair">Sudair City</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025 (Year-to-date)</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger>
              <SelectValue placeholder="Area Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All sizes</SelectItem>
              <SelectItem value="small">Small (< 5,000 sqm)</SelectItem>
              <SelectItem value="medium">Medium (5,000-10,000 sqm)</SelectItem>
              <SelectItem value="large">Large (> 10,000 sqm)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Property metrics" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Property metrics</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Transaction type toggle */}
      <div className="flex justify-center gap-2">
        <Button 
          variant={transactionType === "sales" ? "default" : "outline"} 
          onClick={() => setTransactionType("sales")}
          className="bg-pink-500 text-white rounded-full px-6"
        >
          Sales transactions
        </Button>
        <Button 
          variant={transactionType === "leasing" ? "default" : "outline"} 
          onClick={() => setTransactionType("leasing")}
          className={transactionType === "leasing" ? "bg-pink-500 text-white rounded-full px-6" : "rounded-full px-6"}
        >
          Leasing contracts
        </Button>
      </div>
      
      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="bg-slate-900 text-white">
            <CardContent className="p-4">
              <h3 className="text-sm text-slate-300">{metric.title}</h3>
              <p className="text-xl font-bold mt-2">{metric.value}</p>
              <div className="flex items-center mt-1">
                <Badge variant={metric.trend === "up" ? "success" : "destructive"} className="text-xs">
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Sale transactions table */}
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
              {transactionData.map((transaction) => (
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
        
        {/* Pagination */}
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            className="w-24"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-24 bg-pink-500 text-white"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionAnalysis;
