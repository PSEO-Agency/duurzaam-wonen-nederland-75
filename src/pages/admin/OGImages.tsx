
import React from 'react';
import OGImageManager from '@/components/admin/OGImageManager';

const AdminOGImages: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Open Graph Images</h1>
        <p className="text-gray-500">Manage and regenerate Open Graph images for better social media sharing.</p>
      </div>
      
      <OGImageManager />
    </div>
  );
};

export default AdminOGImages;
