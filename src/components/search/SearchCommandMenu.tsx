import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  Command 
} from '@/components/ui/command';
import { useSearch } from '@/contexts/SearchContext';
import { Button } from '@/components/ui/button';

interface SearchCommandMenuProps {
  isMobile?: boolean;
}

const SearchCommandMenu: React.FC<SearchCommandMenuProps> = ({ isMobile = false }) => {
  const [open, setOpen] = useState(false);
  const { searchResults, performSearch, searchTerm, clearResults } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setTimeout(() => {
        clearResults();
      }, 300);
    }
  };

  const handleSelect = (url: string) => {
    setOpen(false);
    navigate(url);
  };

  const handleSearch = (value: string) => {
    performSearch(value);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Zoeken</span>
      </Button>

      <CommandDialog open={open} onOpenChange={handleOpenChange}>
        <Command className="rounded-lg border shadow-md">
          <CommandInput 
            placeholder="Zoeken in Duurzaam Wonen Nederland..." 
            value={searchTerm}
            onValueChange={handleSearch}
          />
          <CommandList>
            <CommandEmpty>Geen resultaten gevonden.</CommandEmpty>
            {searchResults.length > 0 && (
              <>
                <CommandGroup heading="Projecten">
                  {searchResults
                    .filter(item => item.type === 'Project')
                    .slice(0, 3)
                    .map(item => (
                      <CommandItem 
                        key={item.id} 
                        onSelect={() => handleSelect(item.url)}
                        className="flex flex-col items-start"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-500 truncate w-full">{item.excerpt}</div>
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Producten">
                  {searchResults
                    .filter(item => item.type === 'Product')
                    .slice(0, 3)
                    .map(item => (
                      <CommandItem 
                        key={item.id} 
                        onSelect={() => handleSelect(item.url)}
                        className="flex flex-col items-start"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-500 truncate w-full">{item.excerpt}</div>
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Oplossingen">
                  {searchResults
                    .filter(item => item.type === 'Oplossing')
                    .slice(0, 3)
                    .map(item => (
                      <CommandItem 
                        key={item.id} 
                        onSelect={() => handleSelect(item.url)}
                        className="flex flex-col items-start"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-500 truncate w-full">{item.excerpt}</div>
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Pagina's">
                  {searchResults
                    .filter(item => item.type === 'Pagina')
                    .slice(0, 3)
                    .map(item => (
                      <CommandItem 
                        key={item.id} 
                        onSelect={() => handleSelect(item.url)}
                        className="flex flex-col items-start"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-500 truncate w-full">{item.excerpt}</div>
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Blog">
                  {searchResults
                    .filter(item => item.type === 'Blog')
                    .slice(0, 3)
                    .map(item => (
                      <CommandItem 
                        key={item.id} 
                        onSelect={() => handleSelect(item.url)}
                        className="flex flex-col items-start"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-500 truncate w-full">{item.excerpt}</div>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </>
            )}
            
            {searchTerm && (
              <CommandItem 
                onSelect={() => handleSelect(`/zoeken?q=${encodeURIComponent(searchTerm)}`)}
                className="border-t pt-2 mt-2"
              >
                <Search className="mr-2 h-4 w-4" />
                <span>Bekijk alle resultaten voor "{searchTerm}"</span>
              </CommandItem>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default SearchCommandMenu;
