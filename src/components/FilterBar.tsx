
import React, { useState } from 'react';
import { Filter, Coffee, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filters = [
    { id: 'open', label: '營業中', icon: Clock },
    { id: 'specialty', label: '精品咖啡', icon: Coffee },
    { id: 'quiet', label: '安靜環境', icon: Users },
    { id: 'highrated', label: '高評分', icon: Star },
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="flex items-center space-x-3 p-4 bg-white border-b border-coffee-200">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center space-x-2 border-coffee-300 text-coffee-700 hover:bg-coffee-50"
      >
        <Filter className="h-4 w-4" />
        <span>篩選</span>
      </Button>

      <div className="flex space-x-2 overflow-x-auto">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilters.includes(filter.id);
          
          return (
            <Button
              key={filter.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(filter.id)}
              className={`flex items-center space-x-1 whitespace-nowrap ${
                isActive 
                  ? 'coffee-gradient text-white' 
                  : 'border-coffee-300 text-coffee-700 hover:bg-coffee-50'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{filter.label}</span>
            </Button>
          );
        })}
      </div>

      {activeFilters.length > 0 && (
        <Badge variant="secondary" className="ml-auto bg-coffee-100 text-coffee-800">
          {activeFilters.length} 項篩選
        </Badge>
      )}
    </div>
  );
};

export default FilterBar;
