
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

type SearchResultCardProps = {
  title: string;
  excerpt: string;
  url: string;
  type: string;
};

const SearchResultCard: React.FC<SearchResultCardProps> = ({ title, excerpt, url, type }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <Badge 
          variant="outline" 
          className={`
            ${type === 'Project' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
            ${type === 'Oplossing' ? 'bg-green-50 text-green-700 border-green-200' : ''}
            ${type === 'Product' ? 'bg-purple-50 text-purple-700 border-purple-200' : ''}
            ${type === 'Pagina' ? 'bg-gray-50 text-gray-700 border-gray-200' : ''}
            ${type === 'Blog' ? 'bg-orange-50 text-orange-700 border-orange-200' : ''}
          `}
        >
          {type}
        </Badge>
      </div>
      <p className="text-gray-600 mb-3 text-sm">{excerpt}</p>
      {url.startsWith('#') ? (
        <a 
          href={url} 
          className="inline-flex items-center text-brand-green hover:text-brand-green-dark font-medium text-sm"
        >
          Bekijk details <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      ) : (
        <Link 
          to={url} 
          className="inline-flex items-center text-brand-green hover:text-brand-green-dark font-medium text-sm"
        >
          Bekijk details <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export default SearchResultCard;
