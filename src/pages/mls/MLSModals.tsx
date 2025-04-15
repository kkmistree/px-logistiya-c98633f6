
import { Property } from "@/types/property";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectDetail from "@/components/property/ProjectDetail";
import ProjectScorecard from "@/components/property/ProjectScorecard";
import { useIsMobile } from "@/hooks/use-mobile";

interface MLSModalsProps {
  selectedProperty: Property | null;
  showDetailModal: boolean;
  setShowDetailModal: (show: boolean) => void;
  showScorecardModal: boolean;
  setShowScorecardModal: (show: boolean) => void;
}

const MLSModals = ({
  selectedProperty,
  showDetailModal,
  setShowDetailModal,
  showScorecardModal,
  setShowScorecardModal,
}: MLSModalsProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className={`${isMobile ? 'w-[95vw] max-w-lg p-0' : 'max-w-4xl p-0'}`}>
          {selectedProperty && (
            <ProjectDetail 
              property={selectedProperty} 
              onClose={() => setShowDetailModal(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={showScorecardModal} onOpenChange={setShowScorecardModal}>
        <DialogContent className={`${isMobile ? 'w-[95vw] max-w-lg p-0' : 'max-w-4xl p-0'}`}>
          {selectedProperty && (
            <ProjectScorecard 
              property={selectedProperty} 
              onClose={() => setShowScorecardModal(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MLSModals;
