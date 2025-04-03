
import AppShell from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "@/types/user";

const UserSettingsPage = () => {
  // Mock user settings data
  const user: User = {
    id: "u1",
    name: "Kaiyan Mistree",
    email: "kaiyan@propsimplify.com",
    role: "broker",
    joinedAt: "2022-03-15T00:00:00Z",
    verification: {
      emailVerified: true,
      identityVerified: true,
      licenseVerified: true
    },
    settings: {
      notifications: {
        email: true,
        push: true,
        sms: false
      },
      privacy: {
        showProfile: true,
        showContact: true,
        showActivity: false
      }
    }
  };

  return (
    <AppShell>
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="notifications">
          <TabsList className="mb-4">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-listings" className="flex-1">New property listings</Label>
                      <Switch id="email-listings" defaultChecked={user.settings.notifications.email} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-messages" className="flex-1">New messages</Label>
                      <Switch id="email-messages" defaultChecked={user.settings.notifications.email} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-updates" className="flex-1">Platform updates</Label>
                      <Switch id="email-updates" defaultChecked={user.settings.notifications.email} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Push Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-listings" className="flex-1">New property listings</Label>
                      <Switch id="push-listings" defaultChecked={user.settings.notifications.push} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-messages" className="flex-1">New messages</Label>
                      <Switch id="push-messages" defaultChecked={user.settings.notifications.push} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-reminders" className="flex-1">Appointment reminders</Label>
                      <Switch id="push-reminders" defaultChecked={user.settings.notifications.push} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">SMS Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-urgent" className="flex-1">Urgent messages</Label>
                      <Switch id="sms-urgent" defaultChecked={user.settings.notifications.sms} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-reminders" className="flex-1">Appointment reminders</Label>
                      <Switch id="sms-reminders" defaultChecked={user.settings.notifications.sms} />
                    </div>
                  </div>
                </div>
                
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control who can see your information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-profile">Show profile to other agents</Label>
                      <p className="text-sm text-muted-foreground">Your profile will be visible to other agents on the platform</p>
                    </div>
                    <Switch id="show-profile" defaultChecked={user.settings.privacy.showProfile} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-contact">Share contact information</Label>
                      <p className="text-sm text-muted-foreground">Your email and phone will be visible to other agents</p>
                    </div>
                    <Switch id="show-contact" defaultChecked={user.settings.privacy.showContact} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-activity">Show activity history</Label>
                      <p className="text-sm text-muted-foreground">Your recent listings and transactions will be visible</p>
                    </div>
                    <Switch id="show-activity" defaultChecked={user.settings.privacy.showActivity} />
                  </div>
                </div>
                
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Password</h3>
                  <Button variant="outline">Change Password</Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-2fa">Enable 2FA</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="enable-2fa" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Login Sessions</h3>
                  <Button variant="outline">Manage Active Sessions</Button>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium text-destructive">Danger Zone</h3>
                  <Button variant="destructive">Deactivate Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel of the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Theme</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1">Light</Button>
                    <Button variant="outline" className="flex-1">Dark</Button>
                    <Button variant="outline" className="flex-1">System</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Font Size</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1">Small</Button>
                    <Button variant="outline" className="flex-1 bg-primary text-primary-foreground">Medium</Button>
                    <Button variant="outline" className="flex-1">Large</Button>
                  </div>
                </div>
                
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default UserSettingsPage;
