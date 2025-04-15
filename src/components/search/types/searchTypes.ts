
export interface CategoryItem {
  label: string;
  location: string;
  count: number;
  description?: string;
}

export interface CategoryGroup {
  title: string;
  description: string;
  items: CategoryItem[];
}

export interface SearchSuggestion {
  query: string;
  description: string;
  tags: string[];
  metrics: {
    roi: string;
    growth: string;
    potential: 'high' | 'medium' | 'low';
  };
}

export interface SearchDashboardProps {
  onSearch: (query: string) => void;
  onCategoryClick: (filter: string) => void;
}
