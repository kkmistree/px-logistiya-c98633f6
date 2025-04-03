
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsPersonal from "@/components/settings/SettingsPersonal";
import SettingsBrokerage from "@/components/settings/SettingsBrokerage";
import SettingsIntegrations from "@/components/settings/SettingsIntegrations";

const Settings = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Settings</h1>
          <p className="text-slate-500">Configure platform settings and preferences</p>
        </div>
        
        <Tabs defaultValue="personal">
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Personal Settings</TabsTrigger>
            <TabsTrigger value="brokerage">Brokerage Settings</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <SettingsPersonal />
          </TabsContent>
          
          <TabsContent value="brokerage">
            <SettingsBrokerage />
          </TabsContent>
          
          <TabsContent value="integrations">
            <SettingsIntegrations />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default Settings;
