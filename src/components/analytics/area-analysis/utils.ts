
export const getBadgeVariant = (trend: string) => {
  switch(trend) {
    case "up": return "success";
    case "down": return "destructive";
    default: return "outline";
  }
};

export const getPercentageClass = (value: string) => {
  if (value.startsWith("+")) return "text-green-500";
  if (value.startsWith("-")) return "text-red-500";
  return "";
};
