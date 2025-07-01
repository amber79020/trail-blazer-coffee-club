
import React from 'react';
import { MapPin, Navigation, Layers, HelpCircle, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapViewProps {
  onShowGuide?: () => void;
}

const MapView: React.FC<MapViewProps> = ({ onShowGuide }) => {
  return (
    <div className="relative h-96 bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-lg overflow-hidden border border-coffee-300">
      {/* Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-coffee-600">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-coffee-400 animate-float" />
          <p className="text-lg font-medium">咖啡地圖探索</p>
          <p className="text-sm mb-3">探索附近的咖啡廳與你的軌跡</p>
          <Button
            onClick={onShowGuide}
            variant="outline"
            size="sm"
            className="bg-white/90 text-coffee-700 border-coffee-300 hover:bg-white"
          >
            <HelpCircle className="h-4 w-4 mr-1" />
            使用說明
          </Button>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <Button size="icon" className="bg-white/90 text-coffee-700 hover:bg-white shadow-sm">
          <Navigation className="h-4 w-4" />
        </Button>
        <Button size="icon" className="bg-white/90 text-coffee-700 hover:bg-white shadow-sm">
          <Layers className="h-4 w-4" />
        </Button>
        <Button size="icon" className="bg-white/90 text-coffee-700 hover:bg-white shadow-sm">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {/* Quick Filter */}
      <div className="absolute top-4 left-4">
        <Button size="sm" className="bg-white/90 text-coffee-700 hover:bg-white shadow-sm">
          <Filter className="h-4 w-4 mr-1" />
          篩選
        </Button>
      </div>

      {/* User Location */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
        <div className="flex items-center space-x-2 text-sm text-coffee-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span>台北市大安區</span>
        </div>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
        <div className="flex items-center space-x-3 text-xs text-coffee-700">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>營業中</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>已打烊</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>已造訪</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
