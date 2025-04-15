
import React from 'react';
import { Property } from '@/types/property';

interface PropertyMapViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertyMapView = ({ properties, onPropertySelect }: PropertyMapViewProps) => {
  return (
    <div className="h-[600px] bg-slate-100 rounded-lg flex items-center justify-center">
      <p className="text-slate-500">Map view coming soon</p>
    </div>
  );
};

export default PropertyMapView;
