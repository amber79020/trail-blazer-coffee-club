
import React, { useState } from 'react';
import { Home, Map, Heart, User, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: '首頁', icon: Home },
    { id: 'explore', label: '探索', icon: Compass },
    { id: 'map', label: '地圖', icon: Map },
    { id: 'favorites', label: '收藏', icon: Heart },
    { id: 'profile', label: '個人', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-coffee-200 z-40">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 ${
                isActive 
                  ? 'text-coffee-600' 
                  : 'text-gray-500 hover:text-coffee-600'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-coffee-600' : ''}`} />
              <span className={`text-xs ${isActive ? 'text-coffee-600 font-medium' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 bg-coffee-600 rounded-full"></div>
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
