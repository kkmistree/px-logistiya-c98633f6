
import React from 'react';
import { FileX2 } from 'lucide-react';

const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <FileX2 className="w-12 h-12 text-slate-300 mb-4" />
      <h3 className="text-lg font-medium text-slate-700">No properties found</h3>
      <p className="text-slate-500 mt-1">Try adjusting your search criteria</p>
    </div>
  );
};

export default NoResults;
