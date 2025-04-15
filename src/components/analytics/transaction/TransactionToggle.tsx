
import { Button } from "@/components/ui/button";

interface TransactionToggleProps {
  transactionType: string;
  setTransactionType: (type: string) => void;
}

const TransactionToggle = ({ transactionType, setTransactionType }: TransactionToggleProps) => {
  return (
    <div className="flex justify-center gap-2">
      <Button 
        variant={transactionType === "sales" ? "default" : "outline"} 
        onClick={() => setTransactionType("sales")}
        className="bg-pink-500 text-white rounded-full px-6"
      >
        Sales transactions
      </Button>
      <Button 
        variant={transactionType === "leasing" ? "default" : "outline"} 
        onClick={() => setTransactionType("leasing")}
        className={transactionType === "leasing" ? "bg-pink-500 text-white rounded-full px-6" : "rounded-full px-6"}
      >
        Leasing contracts
      </Button>
    </div>
  );
};

export default TransactionToggle;
