
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const integrations = [
  {
    id: "calendar",
    name: "Calendar Integration",
    logo: "https://placehold.co/60?text=Calendar",
    description: "Sync appointments and viewings with Google Calendar, Outlook, or Apple Calendar.",
    connected: true,
    service: "Google Calendar"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business API",
    logo: "https://placehold.co/60?text=WhatsApp",
    description: "Send automated messages, property details, and appointment reminders to clients via WhatsApp.",
    connected: true,
    service: "WhatsApp Business"
  },
  {
    id: "crm",
    name: "CRM Integration",
    logo: "https://placehold.co/60?text=CRM",
    description: "Connect to your existing CRM system for bidirectional syncing of client data.",
    connected: false,
    service: null
  },
  {
    id: "email",
    name: "Email Marketing",
    logo: "https://placehold.co/60?text=Email",
    description: "Connect to email marketing platforms like Mailchimp or SendGrid for bulk client communications.",
    connected: true,
    service: "Mailchimp"
  },
  {
    id: "docs",
    name: "Document Management",
    logo: "https://placehold.co/60?text=Docs",
    description: "Connect to cloud storage services for document management and e-signatures.",
    connected: true,
    service: "Google Drive"
  },
  {
    id: "analytics",
    name: "Analytics Integration",
    logo: "https://placehold.co/60?text=Analytics",
    description: "Connect to analytics platforms for enhanced business intelligence and reporting.",
    connected: false,
    service: null
  }
];

const webhookEndpoints = [
  {
    id: "new-lead",
    name: "New Lead Created",
    url: "https://example.com/webhooks/new-lead",
    enabled: true
  },
  {
    id: "property-update",
    name: "Property Update",
    url: "https://example.com/webhooks/property-update",
    enabled: true
  },
  {
    id: "deal-stage",
    name: "Deal Stage Changed",
    url: "https://example.com/webhooks/deal-stage",
    enabled: false
  }
];

const SettingsIntegrations = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Third-Party Integrations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrations.map((integration) => (
              <Card key={integration.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                      <img 
                        src={integration.logo} 
                        alt={integration.name} 
                        className="max-w-[30px] max-h-[30px]" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{integration.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">{integration.description}</p>
                      {integration.connected && (
                        <p className="text-xs text-green-600 mt-2">Connected to {integration.service}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 border-t flex justify-end">
                  {integration.connected ? (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Configure</Button>
                      <Button variant="outline" size="sm">Disconnect</Button>
                    </div>
                  ) : (
                    <Button size="sm">Connect</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <h3 className="font-medium">Security Notice</h3>
            <p className="text-sm text-slate-600 mt-1">
              API keys provide full access to your account. Never share your API keys in publicly accessible areas such as GitHub, client-side code, or forums.
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="api-key">Your API Key</Label>
            <div className="flex gap-2">
              <Input id="api-key" type="password" value="••••••••••••••••••••••••••••••" readOnly className="flex-1" />
              <Button variant="outline">Reveal</Button>
              <Button variant="outline">Regenerate</Button>
            </div>
            <p className="text-xs text-slate-500">Last used: 2 days ago</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Webhook Secret</Label>
            <div className="flex gap-2">
              <Input id="webhook-secret" type="password" value="••••••••••••••••••••••••••••••" readOnly className="flex-1" />
              <Button variant="outline">Reveal</Button>
              <Button variant="outline">Regenerate</Button>
            </div>
            <p className="text-xs text-slate-500">Use this secret to verify webhook payloads</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Webhook Endpoints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {webhookEndpoints.map((endpoint) => (
              <div key={endpoint.id} className="flex items-center justify-between p-4 bg-slate-50 rounded">
                <div>
                  <h3 className="font-medium">{endpoint.name}</h3>
                  <p className="text-sm text-slate-500">{endpoint.url}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Switch id={`webhook-${endpoint.id}`} checked={endpoint.enabled} />
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline">Add New Webhook</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Custom Integrations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 className="font-medium">Need a Custom Integration?</h3>
            <p className="text-sm text-slate-600 mt-1">
              Our platform supports custom integrations with various third-party services. If you need a specific integration not listed here, please contact our support team.
            </p>
            <Button variant="outline" size="sm" className="mt-2">Contact Support</Button>
          </div>
          
          <div className="space-y-2">
            <Label>API Documentation</Label>
            <p className="text-sm text-slate-600">
              Access our comprehensive API documentation to build custom integrations with our platform.
            </p>
            <Button variant="outline">View API Documentation</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsIntegrations;
