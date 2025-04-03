
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

// Mock data for regulations
const regulationsData = {
  dld: [
    {
      id: "r1",
      question: "What is the current transfer fee for property purchases in Dubai?",
      answer: "The Dubai Land Department charges a transfer fee of 4% of the property purchase price, split equally between the buyer and seller (2% each) unless agreed otherwise. Additionally, there's a 0.25% knowledge fee and a AED 250 registration trustee fee."
    },
    {
      id: "r2",
      question: "How do I register a property with the Dubai Land Department?",
      answer: "Property registration requires both buyer and seller to visit a DLD-approved registration trustee office with Emirates IDs, passports, sale agreement, and proof of payment. The trustee will process the transfer and issue a new title deed."
    },
    {
      id: "r3",
      question: "What are Off-Plan Property Registration (Oqood) requirements?",
      answer: "For off-plan property registration (Oqood), buyers must submit the SPA signed with the developer, payment receipts, and identification documents. The developer typically handles this process and charges a registration fee of 4% of the purchase price."
    }
  ],
  rera: [
    {
      id: "r4",
      question: "What are the RERA broker registration requirements?",
      answer: "To register as a broker with RERA, you need to: 1) Complete the RERA certified broker course, 2) Pass the RERA exam, 3) Obtain a certificate of good conduct, 4) Submit application with required documents including educational credentials, 5) Pay the registration fee."
    },
    {
      id: "r5",
      question: "What commission rates are allowed by RERA?",
      answer: "RERA stipulates that the maximum commission a broker can charge is 2% of the property's sale price. For rentals, the maximum is 5% of the annual rent. These are the maximum rates; the actual commission can be negotiated between parties."
    },
    {
      id: "r6",
      question: "What are the RERA regulations for advertising properties?",
      answer: "RERA regulations require all property advertisements to include: 1) Broker registration number, 2) Property permit number, 3) Accurate property details, 4) Actual property photos (no stock images). Advertisements without proper permits may result in fines."
    }
  ],
  ejari: [
    {
      id: "r7",
      question: "How do I register a tenancy contract with Ejari?",
      answer: "To register with Ejari: 1) Complete the tenancy contract, 2) Gather required documents (copy of title deed, landlord passport/Emirates ID, tenant passport/Emirates ID), 3) Visit Ejari registration center or use the Dubai REST app, 4) Pay the registration fee (approx. AED 220)."
    },
    {
      id: "r8",
      question: "Is Ejari registration mandatory for all rental properties?",
      answer: "Yes, Ejari registration is mandatory for all residential and commercial property rentals in Dubai. Without Ejari registration, tenants may face difficulties with utility connections, visa applications, and other government services."
    },
    {
      id: "r9",
      question: "Who is responsible for Ejari registration fees?",
      answer: "The tenant is typically responsible for Ejari registration fees unless specified otherwise in the tenancy contract. The standard fee is approximately AED 220 for registration."
    }
  ],
  visa: [
    {
      id: "r10",
      question: "What are the property investment requirements for Gold Visa?",
      answer: "For a 10-year Golden Visa through property investment, you need to invest at least AED 2 million in real estate. The property must be retained for at least 3 years, be fully paid (not mortgaged), and the investor must provide proof of financial solvency."
    },
    {
      id: "r11",
      question: "Can I sponsor my family with a property investor visa?",
      answer: "Yes, property investors who qualify for a residence visa can sponsor their spouse and children under 18. For children over 18, additional conditions like being enrolled in education may apply. Parents can also be sponsored under certain financial conditions."
    },
    {
      id: "r12",
      question: "How long is the property investor visa valid?",
      answer: "The standard property investor visa is valid for 2 years if the property value is between AED 750,000 and AED 2 million. For investments over AED 2 million, a 10-year Golden Visa is available. Visa renewal requires maintaining ownership of the qualifying property."
    }
  ]
};

const Regulations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Simple search function across all regulations
  const filteredRegulations = searchQuery.trim() ? 
    Object.entries(regulationsData).reduce((result, [category, items]) => {
      const filteredItems = items.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredItems.length > 0) {
        result[category] = filteredItems;
      }
      return result;
    }, {} as Record<string, typeof regulationsData.dld>) 
    : regulationsData;
  
  return (
    <div className="space-y-6">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <Input
          type="search"
          placeholder="Search regulations and guidelines..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="dld">
        <TabsList className="mb-6">
          <TabsTrigger value="dld">DLD Guidelines</TabsTrigger>
          <TabsTrigger value="rera">RERA Regulations</TabsTrigger>
          <TabsTrigger value="ejari">Ejari Process</TabsTrigger>
          <TabsTrigger value="visa">Visa Rules</TabsTrigger>
        </TabsList>
        
        {Object.entries(filteredRegulations).length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500">No regulations found matching your search query.</p>
          </div>
        ) : (
          <>
            <TabsContent value="dld">
              <Card>
                <CardHeader>
                  <CardTitle>Dubai Land Department (DLD) Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {filteredRegulations.dld?.map((regulation) => (
                    <div key={regulation.id} className="space-y-2">
                      <h3 className="font-medium text-lg">{regulation.question}</h3>
                      <p className="text-slate-600">{regulation.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rera">
              <Card>
                <CardHeader>
                  <CardTitle>Real Estate Regulatory Agency (RERA) Regulations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {filteredRegulations.rera?.map((regulation) => (
                    <div key={regulation.id} className="space-y-2">
                      <h3 className="font-medium text-lg">{regulation.question}</h3>
                      <p className="text-slate-600">{regulation.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ejari">
              <Card>
                <CardHeader>
                  <CardTitle>Ejari Registration Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {filteredRegulations.ejari?.map((regulation) => (
                    <div key={regulation.id} className="space-y-2">
                      <h3 className="font-medium text-lg">{regulation.question}</h3>
                      <p className="text-slate-600">{regulation.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="visa">
              <Card>
                <CardHeader>
                  <CardTitle>Property Investor Visa Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {filteredRegulations.visa?.map((regulation) => (
                    <div key={regulation.id} className="space-y-2">
                      <h3 className="font-medium text-lg">{regulation.question}</h3>
                      <p className="text-slate-600">{regulation.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default Regulations;
