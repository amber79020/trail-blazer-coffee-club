
import React, { useState } from 'react';
import { Filter, Coffee, Clock, Users, Star, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('distance');

  const filters = [
    { id: 'open', label: '營業中', icon: Clock, color: 'text-green-600' },
    { id: 'specialty', label: '精品咖啡', icon: Coffee, color: 'text-amber-600' },
    { id: 'quiet', label: '安靜環境', icon: Users, color: 'text-blue-600' },
    { id: 'highrated', label: '高評分', icon: Star, color: 'text-yellow-600' },
    { id: 'nearby', label: '500m內', icon: MapPin, color: 'text-purple-600' },
    { id: 'favorites', label: '收藏店家', icon: Heart, color: 'text-red-600' },
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="bg-white rounded-lg border border-coffee-200 p-3 space-y-3">
      {/* Top Row - Sort and Filter Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-coffee-600" />
          <span className="text-sm font-medium text-coffee-800">篩選條件</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-28 h-8 text-xs border-coffee-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">距離</SelectItem>
              <SelectItem value="rating">評分</SelectItem>
              <SelectItem value="popular">人氣</SelectItem>
              <SelectItem value="newest">最新</SelectItem>
            </SelectContent>
          </Select>
          
          {activeFilters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="h-8 px-2 text-xs text-coffee-600 hover:text-coffee-800"
            >
              清除
            </Button>
          )}
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilters.includes(filter.id);
          
          return (
            <Button
              key={filter.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(filter.id)}
              className={`h-8 px-3 text-xs flex items-center space-x-1 ${
                isActive 
                  ? 'coffee-gradient text-white shadow-sm' 
                  : 'border-coffee-300 text-coffee-700 hover:bg-coffee-50 hover:border-coffee-400'
              }`}
            >
              <Icon className={`h-3 w-3 ${isActive ? 'text-white' : filter.color}`} />
              <span>{filter.label}</span>
            </Button>
          );
        })}
      </div>

      {/* Active Filters Summary */}
      {activeFilters.length > 0 && (
        <div className="flex items-center justify-between pt-2 border-t border-coffee-100">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-coffee-100 text-coffee-800 text-xs">
              {activeFilters.length} 項篩選條件
            </Badge>
            <span className="text-xs text-coffee-600">
              顯示符合條件的咖啡廳
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
