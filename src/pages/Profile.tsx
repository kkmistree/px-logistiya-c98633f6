
import AppShell from "@/components/layout/AppShell";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User } from "@/types/user";

const ProfilePage = () => {
  // Mock user data
  const user: User = {
    id: "u1",
    name: "Kaiyan Mistree",
    email: "kaiyan@propsimplify.com",
    role: "broker",
    company: "PropSimplify Real Estate LLC",
    license: "CA-BRE-01234567",
    phone: "+1 (555) 123-4567",
    bio: "Real estate professional specializing in luxury properties and investment opportunities in the Bay Area.",
    specializations: ["Luxury Homes", "Investment Properties", "Commercial Real Estate"],
    languages: ["English", "Mandarin"],
    joinedAt: "2022-03-15T00:00:00Z",
    lastActive: "2023-04-02T15:30:00Z",
    dealsClosed: 48,
    totalVolume: 24500000,
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
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Summary */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-2">
                <div className="bg-primary text-primary-foreground w-full h-full flex items-center justify-center text-2xl font-bold">
                  KM
                </div>
              </Avatar>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</CardDescription>
              <CardDescription>{user.company}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-medium">License:</p>
                <p>{user.license}</p>
              </div>
              <div>
                <p className="font-medium">Deals Closed:</p>
                <p>{user.dealsClosed}</p>
              </div>
              <div>
                <p className="font-medium">Total Volume:</p>
                <p>${(user.totalVolume! / 1000000).toFixed(1)}M</p>
              </div>
              <div>
                <p className="font-medium">Member Since:</p>
                <p>{new Date(user.joinedAt).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Profile Edit Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue={user.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue={user.company} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" rows={4} defaultValue={user.bio} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specializations">Specializations (comma separated)</Label>
                <Input id="specializations" defaultValue={user.specializations?.join(", ")} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="languages">Languages (comma separated)</Label>
                <Input id="languages" defaultValue={user.languages?.join(", ")} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default ProfilePage;
