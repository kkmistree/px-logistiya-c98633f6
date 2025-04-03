
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Download, Filter, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const timePeriodOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "yearly", label: "Yearly" }
];

const reportTypeOptions = [
  { value: "market-performance", label: "Market Performance" },
  { value: "broker-performance", label: "Broker Performance" },
  { value: "transaction-analysis", label: "Transaction Analysis" },
  { value: "areas-comparison", label: "Areas Comparison" },
  { value: "property-trends", label: "Property Trends" }
];

const ReportGenerator = () => {
  const [timePeriod, setTimePeriod] = useState<string>("monthly");
  const [reportType, setReportType] = useState<string>("market-performance");
  const [fromDate, setFromDate] = useState<Date | undefined>(new Date());
  const [toDate, setToDate] = useState<Date | undefined>(new Date());
  const [reportFormat, setReportFormat] = useState<string>("pdf");
  
  const handleGenerateReport = () => {
    // This would connect to a real API endpoint in production
    console.log("Generating report with settings:", {
      timePeriod,
      reportType,
      fromDate: fromDate ? format(fromDate, "yyyy-MM-dd") : null,
      toDate: toDate ? format(toDate, "yyyy-MM-dd") : null,
      reportFormat
    });
    
    // Show success message in real implementation
    alert("Report generation started. The report will be delivered to your email shortly.");
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Custom Report Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Type</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Report Type" />
                </SelectTrigger>
                <SelectContent>
                  {reportTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Period</label>
              <Select value={timePeriod} onValueChange={setTimePeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time Period" />
                </SelectTrigger>
                <SelectContent>
                  {timePeriodOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Format</label>
              <Select value={reportFormat} onValueChange={setReportFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Report</SelectItem>
                  <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                  <SelectItem value="csv">CSV File</SelectItem>
                  <SelectItem value="ppt">PowerPoint Presentation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">From Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !fromDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">To Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !toDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Additional Filters
            </Button>
            <Button onClick={handleGenerateReport} className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="font-medium mb-2">Report Preview</h3>
            <div className="bg-gray-50 rounded-lg p-4 h-40 flex items-center justify-center">
              <p className="text-gray-500 text-sm text-center">
                {reportType === "market-performance" ? (
                  <>Market performance report preview will be shown here.</>
                ) : reportType === "broker-performance" ? (
                  <>Broker performance report preview will be shown here.</>
                ) : reportType === "transaction-analysis" ? (
                  <>Transaction analysis report preview will be shown here.</>
                ) : reportType === "areas-comparison" ? (
                  <>Areas comparison report preview will be shown here.</>
                ) : (
                  <>Property trends report preview will be shown here.</>
                )}
                <br />
                <span className="block mt-2">
                  Configure your report settings and click "Generate Report" to download a full report.
                </span>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Saved Reports</h3>
              <div className="border rounded-lg divide-y">
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Monthly Market Report - October 2024</p>
                    <p className="text-sm text-gray-500">Generated on Apr 3, 2025</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Quarterly Broker Performance - Q1 2025</p>
                    <p className="text-sm text-gray-500">Generated on Apr 1, 2025</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Yearly Market Overview - 2024</p>
                    <p className="text-sm text-gray-500">Generated on Mar 15, 2025</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Scheduled Reports</h3>
              <div className="border rounded-lg divide-y">
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Weekly Market Summary</p>
                    <p className="text-sm text-gray-500">Every Monday</p>
                  </div>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Monthly Performance Report</p>
                    <p className="text-sm text-gray-500">1st day of each month</p>
                  </div>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Quarterly Areas Overview</p>
                    <p className="text-sm text-gray-500">Every 3 months</p>
                  </div>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportGenerator;
