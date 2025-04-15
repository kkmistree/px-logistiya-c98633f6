
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Grid, List, Filter } from "lucide-react";
import DeveloperHeader from "@/components/developers/DeveloperHeader";
import DeveloperDirectory from "@/components/developers/DeveloperDirectory";
import ProjectExplorer from "@/components/developers/ProjectExplorer";
import LaunchTracker from "@/components/developers/LaunchTracker";

const Developers = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <AppShell>
      <div className="space-y-6">
        <DeveloperHeader />
        
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="projects">Project Explorer</TabsTrigger>
            <TabsTrigger value="developers">Developer Directory</TabsTrigger>
            <TabsTrigger value="launches">Launch Tracker</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <Input
                  type="search"
                  placeholder="Search industrial projects by name, developer, location..."
                  className="pl-10 w-full"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant={viewMode === "grid" ? "default" : "outline"} 
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={18} />
                </Button>
                <Button 
                  variant={viewMode === "list" ? "default" : "outline"} 
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List size={18} />
                </Button>
                <Button variant="outline" className="ml-2">
                  <Filter size={18} className="mr-2" />
                  <span>Filter</span>
                </Button>
              </div>
            </div>
            
            <ProjectExplorer viewMode={viewMode} />
          </TabsContent>
          
          <TabsContent value="developers">
            <DeveloperDirectory />
          </TabsContent>
          
          <TabsContent value="launches">
            <LaunchTracker />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default Developers;
