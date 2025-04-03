
import { ArrowUpRight, Clock, AlertCircle, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const TasksReminders = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const tasks = [
    {
      id: "t1",
      title: "Follow-up with Mohammed Al Farsi",
      description: "Last contacted 7 days ago",
      type: "followup",
      priority: "high",
      dueDate: "Today"
    },
    {
      id: "t2",
      title: "Viewing scheduled with Elena Petrova",
      description: "Downtown Apartment",
      type: "viewing",
      priority: "medium",
      dueDate: "Tomorrow, 10:30 AM"
    },
    {
      id: "t3",
      title: "Deal Room deadline approaching",
      description: "Palm Jumeirah Villa SPA signature needed",
      type: "deal",
      priority: "high",
      dueDate: "In 2 days"
    },
    {
      id: "t4",
      title: "Payment reminder for SPA milestone",
      description: "Business Bay Office final payment",
      type: "payment",
      priority: "medium",
      dueDate: "Apr 10, 2025"
    }
  ];

  const handleViewAll = () => {
    navigate("/tasks");
  };
  
  const handleTaskAction = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
      toast({
        title: `Actioning: ${task.title}`,
        description: "Opening relevant section to complete this task"
      });
      
      switch(task.type) {
        case "followup":
          navigate("/clients/details/123");
          break;
        case "viewing":
          navigate("/viewings/details/456");
          break;
        case "deal":
          navigate("/deals/details/789");
          break;
        case "payment":
          navigate("/payments/details/101");
          break;
        default:
          navigate("/tasks");
      }
    }
  };

  // Helper to get icon based on task type
  const getTaskIcon = (type: string) => {
    switch(type) {
      case "followup": return <MessageSquare size={16} className="text-blue-500" />;
      case "viewing": return <Calendar size={16} className="text-green-500" />;
      case "deal": return <AlertCircle size={16} className="text-red-500" />;
      case "payment": return <Clock size={16} className="text-amber-500" />;
      default: return <Clock size={16} className="text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Tasks & Reminders</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={handleViewAll}
        >
          View All <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <Card 
            key={task.id}
            className={`p-3 border cursor-pointer transition-colors ${
              task.priority === "high" 
                ? "border-red-200 hover:border-red-300" 
                : "border-slate-200 hover:border-slate-300"
            }`}
            onClick={() => handleTaskAction(task.id)}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getTaskIcon(task.type)}
              </div>
              <div className="flex-1">
                <h3 className={`text-sm font-medium ${
                  task.priority === "high" ? "text-red-700" : "text-estate-primary"
                }`}>
                  {task.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">{task.description}</p>
                <div className="flex items-center mt-2">
                  <Clock size={14} className="text-slate-400 mr-1" />
                  <span className={`text-xs ${
                    task.dueDate.includes("Today") ? "font-medium text-red-600" : "text-slate-500"
                  }`}>
                    {task.dueDate}
                  </span>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-estate-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTaskAction(task.id);
                }}
              >
                Action
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <Button 
        className="w-full mt-3 bg-estate-primary hover:bg-estate-primary/90 text-white"
        onClick={() => navigate("/tasks/new")}
      >
        Create New Task
      </Button>
    </div>
  );
};

export default TasksReminders;
