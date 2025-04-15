
import { useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Currency, currencies, useCurrency } from "@/contexts/CurrencyContext";
import { toast } from "sonner";

const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  const handleSelect = (selected: Currency) => {
    // Only update if different from current
    if (selected.code !== currency.code) {
      setCurrency(selected);
      // Show visual indication of currency change
      toast.success(`Currency changed to ${selected.name}`);
    }
    setOpen(false);
  };

  return (
    <div className="px-4 py-2 border-t border-white/10">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full justify-between text-white border-white/20 bg-white/5 hover:bg-white/10"
          >
            <span className="flex items-center gap-2">
              <span className="font-medium">{currency.symbol}</span>
              <span>{currency.code}</span>
            </span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
          {currencies.map((currencyOption) => (
            <DropdownMenuItem
              key={currencyOption.code}
              className="cursor-pointer"
              onClick={() => handleSelect(currencyOption)}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{currencyOption.symbol}</span>
                <span>{currencyOption.code}</span>
                <span className="text-xs text-gray-500 ml-1">- {currencyOption.name}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CurrencySwitcher;
