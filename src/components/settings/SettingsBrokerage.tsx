
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SettingsBrokerage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Company Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" defaultValue="PropSimplify Real Estate LLC" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="broker-number">Broker ORN Number</Label>
              <Input id="broker-number" defaultValue="12345" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trade-license">Trade License Number</Label>
              <Input id="trade-license" defaultValue="TL-678901" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rera-license">RERA License Number</Label>
              <Input id="rera-license" defaultValue="RERA-23456" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-email">Company Email</Label>
              <Input id="company-email" type="email" defaultValue="info@propsimplify.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-phone">Company Phone</Label>
              <Input id="company-phone" type="tel" defaultValue="+971 4 123 4567" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company-address">Company Address</Label>
            <Input id="company-address" defaultValue="Office 1234, XYZ Tower, Sheikh Zayed Road, Dubai, UAE" />
          </div>
          
          <div className="space-y-2">
            <Label>Upload Company Logo</Label>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 border border-dashed border-slate-300 rounded-md flex items-center justify-center">
                <span className="text-xs text-slate-500">Logo</span>
              </div>
              <Button variant="outline">Upload Logo</Button>
            </div>
            <p className="text-xs text-slate-500">Recommended size: 400x400px, formats: PNG, JPG</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Commission Tracking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="default-commission">Default Commission Rate (%)</Label>
              <Input id="default-commission" type="number" defaultValue="2" min="0" max="100" step="0.1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="team-split">Default Team Split (%)</Label>
              <Input id="team-split" type="number" defaultValue="30" min="0" max="100" step="1" />
              <p className="text-xs text-slate-500">Percentage shared with team members</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-calculate">Auto-Calculate Commissions</Label>
              <p className="text-sm text-slate-500">Automatically calculate commissions on new deals</p>
            </div>
            <Switch id="auto-calculate" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="track-expenses">Track Deal Expenses</Label>
              <p className="text-sm text-slate-500">Track and deduct expenses from commission calculations</p>
            </div>
            <Switch id="track-expenses" defaultChecked />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Roles & Permissions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Default Role for New Users</Label>
            <Select defaultValue="agent">
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="agent">Agent</SelectItem>
                <SelectItem value="assistant">Assistant</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Role Permissions</h3>
            <div className="space-y-2 p-4 bg-slate-50 rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium">Agents</span>
                <div className="text-sm text-slate-500">Edit role permissions</div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <Switch id="agent-view-clients" defaultChecked />
                  <Label htmlFor="agent-view-clients" className="text-sm">View Clients</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="agent-edit-clients" defaultChecked />
                  <Label htmlFor="agent-edit-clients" className="text-sm">Edit Clients</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="agent-view-deals" defaultChecked />
                  <Label htmlFor="agent-view-deals" className="text-sm">View Deals</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="agent-create-deals" defaultChecked />
                  <Label htmlFor="agent-create-deals" className="text-sm">Create Deals</Label>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <Button variant="outline" size="sm">Manage All Roles</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Branding</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <div className="flex gap-2">
                <Input id="primary-color" type="color" defaultValue="#8884d8" className="w-12 h-10 p-1" />
                <Input defaultValue="#8884d8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondary-color">Secondary Color</Label>
              <div className="flex gap-2">
                <Input id="secondary-color" type="color" defaultValue="#82ca9d" className="w-12 h-10 p-1" />
                <Input defaultValue="#82ca9d" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Email Template Branding</Label>
            <div className="p-4 bg-slate-50 rounded">
              <p className="text-sm text-slate-600 mb-3">
                Customize the appearance of automated emails sent to clients, including headers, footers, and signature.
              </p>
              <Button variant="outline" size="sm">Customize Email Templates</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Report Branding</Label>
            <div className="p-4 bg-slate-50 rounded">
              <p className="text-sm text-slate-600 mb-3">
                Customize the appearance of generated reports, including logo, colors, and contact information.
              </p>
              <Button variant="outline" size="sm">Customize Report Templates</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Button>Save Changes</Button>
    </div>
  );
};

export default SettingsBrokerage;
