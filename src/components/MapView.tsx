
import React from 'react';
import { MapPin, Navigation, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapView = () => {
  return (
    <div className="relative h-96 bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-lg overflow-hidden border border-coffee-300">
      {/* Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-coffee-600">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-coffee-400 animate-float" />
          <p className="text-lg font-medium">地圖功能</p>
          <p className="text-sm">這裡將顯示互動式地圖</p>
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
      </div>

      {/* User Location */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
        <div className="flex items-center space-x-2 text-sm text-coffee-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span>台北市大安區</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
