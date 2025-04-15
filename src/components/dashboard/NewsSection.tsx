
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "MODON announces new service fees for industrial cities",
      date: "Apr 1, 2025",
      source: "Saudi Industrial Development Fund"
    },
    {
      title: "Saudi Central Bank updates industrial financing requirements",
      date: "Mar 28, 2025",
      source: "SAMA"
    },
    {
      title: "KAEC introduces new zoning rules for industrial developments",
      date: "Mar 25, 2025",
      source: "KAEC Authority"
    }
  ];

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          {news.map((item, index) => (
            <div key={index} className="flex justify-between items-start pb-2 border-b last:border-0">
              <div>
                <h3 className="font-medium text-sm">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.date} • {item.source}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsSection;
