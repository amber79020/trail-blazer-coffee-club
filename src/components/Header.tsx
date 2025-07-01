
import React from 'react';
import { MapPin, Search, Bell, User, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg coffee-gradient">
            <Coffee className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-coffee-800">CoffeeTrail</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="搜尋咖啡廳..."
              className="pl-10 bg-coffee-50 border-coffee-200 focus:border-coffee-400"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-coffee-700 hover:text-coffee-800 hover:bg-coffee-100">
            <MapPin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-coffee-700 hover:text-coffee-800 hover:bg-coffee-100">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-coffee-700 hover:text-coffee-800 hover:bg-coffee-100">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
