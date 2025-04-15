
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download } from "lucide-react";

// Mock data for developer handbook
const developerInfo = [
  {
    id: "d1",
    name: "MODON",
    logo: "https://placehold.co/100x60?text=MODON",
    tier: "Platinum",
    commission: {
      primary: 3,
      secondary: 2
    },
    registrationProcess: "Complete MODON Partner Portal registration, attend industrial development training session, submit broker license and commercial registration.",
    incentives: ["3% commission on primary industrial sales", "Volume-based bonuses", "Early access to industrial zone releases"],
    contacts: [
      { name: "Abdullah Al-Otaibi", role: "Industrial Broker Relations", email: "abdullah.o@modon.gov.sa", phone: "+966 5x xxx xxxx" },
      { name: "Sarah Al-Qahtani", role: "Investment Director", email: "sarah.q@modon.gov.sa", phone: "+966 5x xxx xxxx" }
    ]
  },
  {
    id: "d2",
    name: "Saudi Economic Development Co.",
    logo: "https://placehold.co/100x60?text=SEDC",
    tier: "Gold",
    commission: {
      primary: 3,
      secondary: 2
    },
    registrationProcess: "Register on SEDC Partner Portal, submit commercial license, attend industrial orientation, sign broker agreement.",
    incentives: ["3% standard commission", "Additional 1% on specialized industrial units", "International investor bonuses"],
    contacts: [
      { name: "Mohammed Al-Harbi", role: "Commercial Channel Manager", email: "mohammed.h@sedc.com.sa", phone: "+966 5x xxx xxxx" },
      { name: "Layla Al-Ghamdi", role: "Business Development Director", email: "layla.g@sedc.com.sa", phone: "+966 5x xxx xxxx" }
    ]
  },
  {
    id: "d3",
    name: "KAEC Industrial Valley",
    logo: "https://placehold.co/100x60?text=KAEC",
    tier: "Platinum",
    commission: {
      primary: 2.5,
      secondary: 2
    },
    registrationProcess: "Apply through KAEC Broker Relations, provide company commercial registration and industry certificates, attend KAEC industrial product training.",
    incentives: ["2.5% base commission", "Quarterly performance bonuses", "Co-marketing opportunities"],
    contacts: [
      { name: "Faisal Al-Zahrani", role: "Broker Relations Manager", email: "faisal.z@kaec.sa", phone: "+966 5x xxx xxxx" },
      { name: "Nora Al-Shammari", role: "Investment Director", email: "nora.s@kaec.sa", phone: "+966 5x xxx xxxx" }
    ]
  },
  {
    id: "d4",
    name: "Royal Commission for Jubail",
    logo: "https://placehold.co/100x60?text=RCJ",
    tier: "Gold",
    commission: {
      primary: 3,
      secondary: 2
    },
    registrationProcess: "Submit registration on RCJ Industrial Partner Portal, provide broker license documentation, complete Jubail Industrial City product knowledge course.",
    incentives: ["3% standard commission", "Tiered incentive program", "Launch event invitations"],
    contacts: [
      { name: "Khalid Al-Dosari", role: "Industrial Channel Manager", email: "khalid.d@rcjubail.gov.sa", phone: "+966 5x xxx xxxx" },
      { name: "Hanan Al-Mutairi", role: "Partner Relations", email: "hanan.m@rcjubail.gov.sa", phone: "+966 5x xxx xxxx" }
    ]
  }
];

const DeveloperHandbook = () => {
  const [selectedDeveloper, setSelectedDeveloper] = React.useState(developerInfo[0].id);
  
  const developer = developerInfo.find(d => d.id === selectedDeveloper);
  
  return (
    <div className="space-y-6">
      <div className="w-full max-w-md">
        <Select defaultValue={selectedDeveloper} onValueChange={setSelectedDeveloper}>
          <SelectTrigger>
            <SelectValue placeholder="Select Developer" />
          </SelectTrigger>
          <SelectContent>
            {developerInfo.map((dev) => (
              <SelectItem key={dev.id} value={dev.id}>{dev.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {developer && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Developer Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-12 bg-slate-100 flex items-center justify-center rounded">
                    <img 
                      src={developer.logo} 
                      alt={developer.name} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">{developer.name}</h3>
                    <Badge className={
                      developer.tier === "Platinum" 
                        ? "bg-purple-600" 
                        : developer.tier === "Gold" 
                        ? "bg-amber-500" 
                        : "bg-slate-400"
                    }>
                      {developer.tier} Developer
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">Commission Structure</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 rounded">
                      <p className="text-xs text-slate-500">Primary Market</p>
                      <p className="font-medium">{developer.commission.primary}%</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded">
                      <p className="text-xs text-slate-500">Secondary Market</p>
                      <p className="font-medium">{developer.commission.secondary}%</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-slate-500 mb-1">Key Contacts</h4>
                  <div className="space-y-3">
                    {developer.contacts.map((contact, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded">
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-slate-500">{contact.role}</p>
                        <div className="mt-1 text-sm">
                          <p>{contact.email}</p>
                          <p>{contact.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  <button className="text-sm text-blue-600 hover:underline flex items-center">
                    <ExternalLink size={16} className="mr-2" />
                    View All Projects
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Registration Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{developer.registrationProcess}</p>
                  
                  <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <h4 className="font-medium mb-1">Required Documents</h4>
                    <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                      <li>Valid commercial registration</li>
                      <li>Company trade license</li>
                      <li>Saudi national ID (for Saudi nationals)</li>
                      <li>Passport copy</li>
                      <li>Profile photo</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Incentives & Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {developer.incentives.map((incentive, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                          <span>{incentive}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-medium mb-1">Vision 2030 Aligned Broker Program</h4>
                      <p className="text-sm text-slate-600">
                        Achieve Vision 2030 broker status by selling {developer.tier === "Platinum" ? "5" : "3"} industrial units in a quarter to unlock additional benefits, including higher commissions, early access to industrial zone launches, and exclusive investor events.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Resources & Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                      <span>Industrial Broker Registration Form</span>
                      <button className="text-sm text-blue-600 hover:underline flex items-center">
                        <Download size={16} className="mr-2" />
                        Download
                      </button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                      <span>Industrial Commission Policy</span>
                      <button className="text-sm text-blue-600 hover:underline flex items-center">
                        <Download size={16} className="mr-2" />
                        Download
                      </button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                      <span>Industrial Zone Brochures</span>
                      <button className="text-sm text-blue-600 hover:underline flex items-center">
                        <Download size={16} className="mr-2" />
                        Download
                      </button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                      <span>Vision 2030 Industrial Marketing Materials</span>
                      <button className="text-sm text-blue-600 hover:underline flex items-center">
                        <Download size={16} className="mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperHandbook;
