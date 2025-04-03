
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for featured content
const featuredContent = [
  {
    id: "c1",
    title: "2025 Dubai Real Estate Market Forecast",
    excerpt: "Expert analysis on market trends, price movements, and investment opportunities in Dubai for 2025.",
    image: "https://placehold.co/600x400?text=Market+Forecast",
    category: "Market Insights",
    readTime: 8,
    publishedAt: "2025-06-01T00:00:00Z"
  },
  {
    id: "c2",
    title: "Complete Guide to Dubai's Off-Plan Investment",
    excerpt: "Everything you need to know about investing in off-plan properties, payment plans, and developer evaluations.",
    image: "https://placehold.co/600x400?text=Off-Plan+Guide",
    category: "Investment",
    readTime: 12,
    publishedAt: "2025-05-28T00:00:00Z"
  },
  {
    id: "c3",
    title: "Dubai Golden Visa: New Rules for Property Investors",
    excerpt: "Updated regulations and requirements for obtaining Golden Visa through real estate investment.",
    image: "https://placehold.co/600x400?text=Golden+Visa",
    category: "Regulations",
    readTime: 6,
    publishedAt: "2025-05-25T00:00:00Z"
  },
  {
    id: "c4",
    title: "Dubai Marina Area Guide: Trends & Opportunities",
    excerpt: "Deep dive into Dubai Marina's real estate market, amenities, lifestyle, and investment potential.",
    image: "https://placehold.co/600x400?text=Marina+Guide",
    category: "Area Guide",
    readTime: 10,
    publishedAt: "2025-05-20T00:00:00Z"
  },
  {
    id: "c5",
    title: "Rental Yield Comparison: Dubai vs. Global Markets",
    excerpt: "How Dubai's rental yields compare to other global investment destinations in 2025.",
    image: "https://placehold.co/600x400?text=Rental+Yield",
    category: "Investment",
    readTime: 7,
    publishedAt: "2025-05-15T00:00:00Z"
  }
];

// Mock data for topic categories
const topicCategories = [
  { name: "Market Insights", count: 28 },
  { name: "Investment Guides", count: 42 },
  { name: "Regulations & Compliance", count: 35 },
  { name: "Area Guides", count: 22 },
  { name: "Developer Profiles", count: 15 },
  { name: "Taxation & Legal", count: 20 }
];

// Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

const KnowledgeHome = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Featured Content</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredContent.map((content) => (
          <Card key={content.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={content.image} 
                alt={content.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
              />
            </div>
            
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="bg-slate-100 text-slate-700">
                  {content.category}
                </Badge>
                <span className="text-xs text-slate-500">{content.readTime} min read</span>
              </div>
              
              <h3 className="font-semibold text-lg mb-2">{content.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-3">{content.excerpt}</p>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-xs text-slate-500">{formatDate(content.publishedAt)}</span>
              <button className="text-sm text-blue-600 hover:underline">Read More</button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Latest Updates</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="w-12 flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                      <span className="text-xs font-semibold">NEW</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">DLD Launches New Property Registration Platform</h4>
                    <p className="text-sm text-slate-600 mt-1">The Dubai Land Department has announced a new digital platform for property registration and title deeds management.</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-slate-500">Jun 5, 2025</span>
                      <span className="text-xs text-slate-500">Regulations</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="w-12 flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full">
                      <span className="text-xs font-semibold">UPDATE</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">New Mortgage Cap Rules Take Effect</h4>
                    <p className="text-sm text-slate-600 mt-1">The Central Bank of UAE has updated LTV ratios for expatriates and UAE nationals, affecting mortgage lending criteria.</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-slate-500">Jun 3, 2025</span>
                      <span className="text-xs text-slate-500">Finance</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full">
                      <span className="text-xs font-semibold">GUIDE</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Broker's Guide to Property Valuation</h4>
                    <p className="text-sm text-slate-600 mt-1">New comprehensive guide on property valuation methodologies and best practices for real estate brokers.</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-slate-500">Jun 1, 2025</span>
                      <span className="text-xs text-slate-500">Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Topics</h3>
              
              <div className="space-y-2">
                {topicCategories.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="text-slate-700">{topic.name}</span>
                    <Badge variant="outline">{topic.count}</Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Investment</Badge>
                  <Badge variant="outline">Off-Plan</Badge>
                  <Badge variant="outline">Visa Rules</Badge>
                  <Badge variant="outline">Downtown</Badge>
                  <Badge variant="outline">ROI</Badge>
                  <Badge variant="outline">Palm Jumeirah</Badge>
                  <Badge variant="outline">Taxation</Badge>
                  <Badge variant="outline">RERA</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHome;
