
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import KnowledgeHeader from "@/components/knowledge/KnowledgeHeader";
import KnowledgeHome from "@/components/knowledge/KnowledgeHome";
import AreaGuides from "@/components/knowledge/AreaGuides";
import Regulations from "@/components/knowledge/Regulations";
import DeveloperHandbook from "@/components/knowledge/DeveloperHandbook";

const Knowledge = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <KnowledgeHeader />
        
        <Tabs defaultValue="home">
          <TabsList className="mb-6">
            <TabsTrigger value="home">Featured Content</TabsTrigger>
            <TabsTrigger value="areas">Area Guides</TabsTrigger>
            <TabsTrigger value="regulations">Regulations</TabsTrigger>
            <TabsTrigger value="developers">Developer Handbook</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            <KnowledgeHome />
          </TabsContent>
          
          <TabsContent value="areas">
            <AreaGuides />
          </TabsContent>
          
          <TabsContent value="regulations">
            <Regulations />
          </TabsContent>
          
          <TabsContent value="developers">
            <DeveloperHandbook />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default Knowledge;
