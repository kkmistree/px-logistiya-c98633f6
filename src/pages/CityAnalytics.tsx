
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TransactionAnalysis from "@/components/analytics/TransactionAnalysis";
import AreasComparison from "@/components/analytics/AreasComparison";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const CityAnalytics = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const navigate = useNavigate();

  // Format city name for display
  const formatCityName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // City-specific data
  const cityData = {
    riyadh: {
      name: "Riyadh",
      metrics: {
        growthRate: 12.3,
        occupancyRate: 94.5,
        avgRent: "SAR 285/sqm",
        newSupply: "1.2M sqm",
      },
      industries: ["Manufacturing", "Logistics", "Tech", "Pharmaceuticals"],
      performance: [65, 82, 78, 91]
    },
    jeddah: {
      name: "Jeddah",
      metrics: {
        growthRate: 9.7,
        occupancyRate: 91.2,
        avgRent: "SAR 254/sqm",
        newSupply: "850K sqm",
      },
      industries: ["Logistics", "Shipping", "Manufacturing", "Food Processing"],
      performance: [72, 88, 64, 81]
    },
    dammam: {
      name: "Dammam",
      metrics: {
        growthRate: 10.5,
        occupancyRate: 89.8,
        avgRent: "SAR 245/sqm",
        newSupply: "720K sqm",
      },
      industries: ["Petrochemicals", "Logistics", "Manufacturing", "Warehousing"],
      performance: [86, 75, 82, 69]
    }
  };

  const city = cityName as keyof typeof cityData;
  const currentCity = cityData[city] || { 
    name: formatCityName(cityName || ""),
    metrics: {
      growthRate: 0,
      occupancyRate: 0,
      avgRent: "N/A",
      newSupply: "N/A"
    },
    industries: [],
    performance: [0, 0, 0, 0]
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 w-8 p-0" 
                onClick={() => navigate("/market")}
              >
                <ArrowLeft size={16} />
              </Button>
              <h1 className="text-2xl font-bold">{currentCity.name} Industrial Market Analytics</h1>
            </div>
            <p className="text-sm text-slate-500">Detailed market insights and analytics for industrial real estate in {currentCity.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Growth Rate</p>
              <p className="text-2xl font-bold">{currentCity.metrics.growthRate}%</p>
              <p className="text-xs text-emerald-600 mt-1">↑ vs Saudi avg. 8.4%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Occupancy Rate</p>
              <p className="text-2xl font-bold">{currentCity.metrics.occupancyRate}%</p>
              <p className="text-xs text-emerald-600 mt-1">↑ vs Saudi avg. 87.2%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Avg. Rental Rate</p>
              <p className="text-2xl font-bold">{currentCity.metrics.avgRent}</p>
              <p className="text-xs text-emerald-600 mt-1">↑ vs Saudi avg. SAR 235/sqm</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">New Supply (2025)</p>
              <p className="text-2xl font-bold">{currentCity.metrics.newSupply}</p>
              <p className="text-xs text-amber-600 mt-1">↑ 15% vs 2024</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Industry Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentCity.industries.map((industry, index) => (
                <div key={industry} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{industry}</span>
                    <span className="font-medium">{currentCity.performance[index]}%</span>
                  </div>
                  <Progress value={currentCity.performance[index]} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="transactions">Transaction Analysis</TabsTrigger>
            <TabsTrigger value="areas">Areas Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="transactions">
            <TransactionAnalysis />
          </TabsContent>
          
          <TabsContent value="areas">
            <AreasComparison />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default CityAnalytics;
