
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

// Mock transaction data
const transactionData = [
  {
    id: 1,
    location: "Al Qouz 4",
    propertyType: "Villa",
    status: "Ready built",
    price: "AED 300K",
    area: "10,000 sqft",
    date: "Mar 17, 2025"
  },
  {
    id: 2,
    location: "Arabian Ranches (Wadi Al Safa 5)",
    propertyType: "Villa",
    status: "Ready built",
    price: "AED 2.2M",
    area: "8,264 sqft",
    date: "Mar 17, 2025"
  },
  {
    id: 3,
    location: "Jumeirah Village Triangle (Al Barsha South 2)",
    propertyType: "Villa", 
    status: "Ready built",
    price: "AED 2.2M",
    area: "1,938 sqft",
    date: "Mar 17, 2025"
  },
  {
    id: 4,
    location: "Emirates Hills 1 / The Meadows 3",
    propertyType: "Villa",
    status: "Ready built",
    price: "AED 7.5M",
    area: "6,501 sqft",
    date: "Mar 17, 2025"
  },
  {
    id: 5,
    location: "Al Sufouh 1",
    propertyType: "Villa",
    status: "Ready built",
    price: "AED 1.1B",
    area: "932,234 sqft",
    date: "Mar 17, 2025"
  },
  {
    id: 6,
    location: "Palm Jumeirah",
    propertyType: "Villa",
    status: "Ready built",
    price: "AED 14.2M",
    area: "3,818 sqft",
    date: "Mar 17, 2025"
  },
  {
    id: 7,
    location: "Discovery Gardens / The Gardens 1",
    propertyType: "Villa",
    status: "Ready built",
    price: "AED 3.9M",
    area: "6,458 sqft",
    date: "Mar 17, 2025"
  },
  {
    id: 8,
    location: "Al Waheeda",
    propertyType: "Villa",
    status: "Ready built",
    price: "AED 1.6M",
    area: "7,000 sqft",
    date: "Mar 17, 2025"
  }
];

// Mock key metrics data
const keyMetrics = [
  {
    title: "Total transactions",
    value: "39,435",
    change: "+18.9% YoY Change",
    trend: "up"
  },
  {
    title: "Total transactions value",
    value: "AED 91,345,196,037",
    change: "+26.3% YoY Change",
    trend: "up"
  },
  {
    title: "Median price",
    value: "AED 1,481,852",
    change: "+8.8% YoY Change", 
    trend: "up"
  },
  {
    title: "Median price per sqft",
    value: "AED 1,494",
    change: "+7.7% YoY Change",
    trend: "up"
  }
];

const TransactionAnalysis = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [bedroom, setBedroom] = useState("all");
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
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
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
              <SelectItem value="readyBuilt">Ready built</SelectItem>
              <SelectItem value="offPlan">Off-plan</SelectItem>
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
              <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
              <SelectItem value="downtown">Downtown Dubai</SelectItem>
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
          <Select value={bedroom} onValueChange={setBedroom}>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All beds</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
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
          variant={transactionType === "rental" ? "default" : "outline"} 
          onClick={() => setTransactionType("rental")}
          className={transactionType === "rental" ? "bg-pink-500 text-white rounded-full px-6" : "rounded-full px-6"}
        >
          Rental contracts
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
          <h2 className="text-xl font-semibold">Sale transactions</h2>
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
                <TableHead>Property type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Area (sqft)</TableHead>
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
