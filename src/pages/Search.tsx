
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuickSearch from "@/components/search/QuickSearch";

const SearchPage = () => {
  const navigate = useNavigate();
  
  const handleSearch = (query: string) => {
    console.log("Search query from page:", query);
    // In a real app, this would trigger search results to be shown
  };
  
  const handleClose = () => {
    navigate(-1);
  };

  return <QuickSearch fullScreen onSearch={handleSearch} onClose={handleClose} />;
};

export default SearchPage;
