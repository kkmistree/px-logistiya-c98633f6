
import { useIsMobile } from "@/hooks/use-mobile";
import PropertyViewOptions from "@/components/property/PropertyViewOptions";

interface MLSHeaderProps {
  viewMode: "grid" | "list" | "split";
  setViewMode: (mode: "grid" | "list" | "split") => void;
  filtersVisible: boolean;
  setFiltersVisible: (visible: boolean) => void;
  onSearch: (query: string) => void;
  onSaveSearch: () => void;
  savedSearch: boolean;
}

const MLSHeader = ({
  viewMode,
  setViewMode,
  filtersVisible,
  setFiltersVisible,
}: MLSHeaderProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-estate-primary">Industrial Assets</h1>
        <p className="text-sm sm:text-base text-slate-500">Search and analyze industrial properties across Saudi Arabia</p>
      </div>
      <PropertyViewOptions 
        viewMode={viewMode}
        setViewMode={setViewMode}
        filtersVisible={filtersVisible}
        setFiltersVisible={setFiltersVisible}
      />
    </div>
  );
};

export default MLSHeader;
