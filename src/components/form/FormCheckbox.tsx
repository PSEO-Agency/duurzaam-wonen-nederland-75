
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FormCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onClick: () => void;
  className?: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  label,
  checked,
  onClick,
  className = '',
}) => {
  // The main issue is here - we're creating an endless loop with the state updates
  // Let's fix it by not using onCheckedChange at all in this component
  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
        checked ? 'border-brand-green bg-brand-green/5' : 'hover:border-gray-400'
      } ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <Checkbox 
          id={id}
          checked={checked}
          // Removing the onCheckedChange prop completely as we handle changes via onClick on the parent div
          className="pointer-events-none"
        />
        <Label htmlFor={id} className="cursor-pointer">{label}</Label>
      </div>
    </div>
  );
};

// Using React.memo to prevent unnecessary re-renders
export default React.memo(FormCheckbox);
