
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SettingsPersonal = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <p className="text-sm text-slate-500">Enable dark mode for the platform interface</p>
            </div>
            <Switch id="dark-mode" />
          </div>
          
          <div className="space-y-2">
            <Label>Interface Density</Label>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 bg-primary text-primary-foreground">Comfortable</Button>
              <Button variant="outline" className="flex-1">Compact</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Language</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ar">Arabic</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Time Zone</Label>
            <Select defaultValue="gst">
              <SelectTrigger>
                <SelectValue placeholder="Select Time Zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gst">GST - Gulf Standard Time (UTC+4)</SelectItem>
                <SelectItem value="utc">UTC - Universal Time</SelectItem>
                <SelectItem value="est">EST - Eastern Standard Time</SelectItem>
                <SelectItem value="pst">PST - Pacific Standard Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Email Notifications</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-listings" className="flex-1">New property listings</Label>
                <Switch id="email-listings" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-messages" className="flex-1">New messages</Label>
                <Switch id="email-messages" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-updates" className="flex-1">Platform updates</Label>
                <Switch id="email-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-deals" className="flex-1">Deal room activity</Label>
                <Switch id="email-deals" defaultChecked />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Push Notifications</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-messages" className="flex-1">New messages</Label>
                <Switch id="push-messages" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-reminders" className="flex-1">Appointment reminders</Label>
                <Switch id="push-reminders" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-clients" className="flex-1">Client activity alerts</Label>
                <Switch id="push-clients" defaultChecked />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">SMS Notifications</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-urgent" className="flex-1">Urgent messages</Label>
                <Switch id="sms-urgent" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-reminders" className="flex-1">Appointment reminders</Label>
                <Switch id="sms-reminders" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Currency Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Default Currency</Label>
            <Select defaultValue="aed">
              <SelectTrigger>
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aed">AED - UAE Dirham</SelectItem>
                <SelectItem value="usd">USD - US Dollar</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="gbp">GBP - British Pound</SelectItem>
                <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Alternate Currency</Label>
            <Select defaultValue="usd">
              <SelectTrigger>
                <SelectValue placeholder="Select Alternate Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="aed">AED - UAE Dirham</SelectItem>
                <SelectItem value="usd">USD - US Dollar</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="gbp">GBP - British Pound</SelectItem>
                <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-500">Prices will be shown in both currencies when available</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-convert">Auto Currency Conversion</Label>
              <p className="text-sm text-slate-500">Automatically convert to client's preferred currency</p>
            </div>
            <Switch id="auto-convert" defaultChecked />
          </div>
        </CardContent>
      </Card>
      
      <Button>Save Changes</Button>
    </div>
  );
};

export default SettingsPersonal;
