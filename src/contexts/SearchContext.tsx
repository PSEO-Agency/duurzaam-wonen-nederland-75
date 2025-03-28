
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SearchResultType = {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  type: 'Project' | 'Oplossing' | 'Product' | 'Pagina' | 'Blog';
};

interface SearchContextType {
  searchResults: SearchResultType[];
  isLoading: boolean;
  searchTerm: string;
  performSearch: (query: string) => void;
  clearResults: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Mock search data (in a real app, this would come from a database or API)
  const mockSearchData: SearchResultType[] = [
    {
      id: '1',
      title: 'Kunststof Kozijnen',
      excerpt: 'Hoogwaardige, energiezuinige en onderhoudsarme kunststof kozijnen voor uw woning.',
      url: '/kunststof-kozijnen',
      type: 'Product'
    },
    {
      id: '2',
      title: 'Renovatie woning Hengelo',
      excerpt: 'Complete verduurzaming van een jaren \'70 woning in Hengelo met nieuwe kozijnen.',
      url: '/projecten/renovatie-woning-hengelo',
      type: 'Project'
    },
    {
      id: '3',
      title: 'Dakkapel installatie',
      excerpt: 'Uitbreiding van de woonruimte door middel van een hoogwaardige dakkapel.',
      url: '#dakkapel',
      type: 'Oplossing'
    },
    {
      id: '4',
      title: 'Energiebesparende maatregelen',
      excerpt: 'Tips en adviezen voor het verduurzamen van uw woning en besparen op energiekosten.',
      url: '/blog/energiebesparende-maatregelen',
      type: 'Blog'
    },
    {
      id: '5',
      title: 'Over ons',
      excerpt: 'Leer meer over Duurzaam Wonen Nederland en onze missie om woningen te verduurzamen.',
      url: '/over-ons',
      type: 'Pagina'
    },
    {
      id: '6',
      title: 'Werkgebied',
      excerpt: 'Bekijk in welke regio\'s Duurzaam Wonen Nederland actief is.',
      url: '/werkgebied',
      type: 'Pagina'
    },
    {
      id: '7',
      title: 'HSB Wanden',
      excerpt: 'Houtskeletbouw wanden voor duurzame en energiezuinige constructies.',
      url: '#hsb-wanden',
      type: 'Product'
    },
    {
      id: '8',
      title: 'Aanbouw/Uitbouw',
      excerpt: 'Vergroot uw woonruimte met een duurzame aanbouw of uitbouw.',
      url: '#aanbouw',
      type: 'Oplossing'
    },
    {
      id: '9',
      title: 'Showroom',
      excerpt: 'Bezoek onze showroom en bekijk alle producten in het echt.',
      url: '/showroom',
      type: 'Pagina'
    },
    {
      id: '10',
      title: 'Zakelijk',
      excerpt: 'Informatie over zakelijke samenwerking met Duurzaam Wonen Nederland.',
      url: '/zakelijk',
      type: 'Pagina'
    }
  ];

  const performSearch = (query: string) => {
    setSearchTerm(query);
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Filter the mock data based on the query
      const results = mockSearchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  const clearResults = () => {
    setSearchResults([]);
    setSearchTerm('');
  };

  return (
    <SearchContext.Provider 
      value={{ 
        searchResults, 
        isLoading, 
        searchTerm, 
        performSearch, 
        clearResults 
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
