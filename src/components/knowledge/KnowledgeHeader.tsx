
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";

const KnowledgeHeader = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Knowledge Base</h1>
          <p className="text-slate-500">Resources and educational materials</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline">
            <BookOpen size={18} className="mr-2" />
            <span>Latest Updates</span>
          </Button>
        </div>
      </div>
      
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <Input
          type="search"
          placeholder="Search the knowledge base..."
          className="pl-10 w-full"
        />
      </div>
    </div>
  );
};

export default KnowledgeHeader;
