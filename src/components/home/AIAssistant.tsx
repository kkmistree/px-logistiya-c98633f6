
import { useState } from "react";
import { Bot, Search, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{
    type: "user" | "ai";
    text: string;
  }[]>([
    {
      type: "ai",
      text: "Hello! I'm your AI real estate assistant. How can I help you today?",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { type: "user", text: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "";
      
      if (input.toLowerCase().includes("roi") || input.toLowerCase().includes("return")) {
        response = "Based on current market data, apartments in Dubai Marina are showing an average ROI of 5.8%, while Downtown is at 6.2%. JVC remains the highest with 7.8% for smaller units. Would you like a detailed report on any specific area?";
      } else if (input.toLowerCase().includes("price") || input.toLowerCase().includes("market")) {
        response = "Property prices in Dubai have increased by 15.2% year-on-year, with prime areas seeing up to 18% growth. Palm Jumeirah and Emirates Hills continue to lead luxury segment appreciation. I can provide specific area analysis if needed.";
      } else if (input.toLowerCase().includes("client") || input.toLowerCase().includes("investor")) {
        response = "I notice you have 3 active investment clients looking in the Marina area. Would you like me to match them with the newest high-ROI properties available there? I can generate investment sheets for each option.";
      } else {
        response = "I'd be happy to help with that. Would you like me to search for properties, analyze market trends, or assist with client matching based on your request?";
      }
      
      setMessages(prev => [...prev, { type: "ai", text: response }]);
    }, 1000);
    
    setInput("");
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-estate-primary hover:bg-estate-primary/90 shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        <Bot size={24} />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 sm:w-96 rounded-lg shadow-lg bg-white border border-slate-200 flex flex-col z-50">
      <div className="flex items-center justify-between p-3 border-b border-slate-200 bg-estate-primary text-white rounded-t-lg">
        <div className="flex items-center">
          <Bot size={18} className="mr-2" />
          <span className="font-medium">PropAI Assistant</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-estate-primary/70">
          <X size={18} />
        </Button>
      </div>
      
      <div className="p-3 flex-1 h-80 overflow-y-auto flex flex-col gap-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[80%] p-3 rounded-lg ${
              message.type === "user"
                ? "bg-estate-primary text-white self-end"
                : "bg-slate-100 text-slate-800 self-start"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      
      <div className="p-3 border-t border-slate-200">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Ask me anything about real estate..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" className="bg-estate-primary hover:bg-estate-primary/90">
            <Send size={18} />
          </Button>
        </form>
        <div className="mt-2 flex gap-2">
          <Button variant="outline" size="sm" className="text-xs py-1">
            <Search size={12} className="mr-1" />
            Market trends
          </Button>
          <Button variant="outline" size="sm" className="text-xs py-1">
            <Search size={12} className="mr-1" />
            ROI analysis
          </Button>
          <Button variant="outline" size="sm" className="text-xs py-1">
            <Search size={12} className="mr-1" />
            Match clients
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
