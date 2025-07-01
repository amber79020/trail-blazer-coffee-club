
import React, { useState } from 'react';
import Header from '@/components/Header';
import MapView from '@/components/MapView';
import FilterBar from '@/components/FilterBar';
import CoffeeShopCard from '@/components/CoffeeShopCard';
import BottomNav from '@/components/BottomNav';
import MapGuide from '@/components/MapGuide';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Award, MapPin, List } from 'lucide-react';

const Index = () => {
  const [showGuide, setShowGuide] = useState(false);

  // Mock data for coffee shops
  const coffeeShops = [
    {
      id: '1',
      name: '藍瓶咖啡 Blue Bottle Coffee',
      image: '/placeholder.svg',
      rating: 4.5,
      distance: '120m',
      address: '台北市大安區忠孝東路四段181巷35弄',
      tags: ['精品咖啡', '手沖', '文青'],
      isOpen: true,
      openTime: '08:00 - 20:00',
      isLiked: true,
      visitCount: 3
    },
    {
      id: '2',
      name: 'Fika Fika Cafe',
      image: '/placeholder.svg',
      rating: 4.3,
      distance: '250m',
      address: '台北市大安區復興南路一段107巷',
      tags: ['北歐風', '甜點', '安靜'],
      isOpen: true,
      openTime: '09:00 - 21:00',
      isLiked: false,
      visitCount: 1
    },
    {
      id: '3',
      name: '興波咖啡 Simple Kaffa',
      image: '/placeholder.svg',
      rating: 4.7,
      distance: '380m',
      address: '台北市大安區忠孝東路三段',
      tags: ['冠軍咖啡', '拉花', '專業'],
      isOpen: false,
      openTime: '07:30 - 19:00',
      isLiked: true,
      visitCount: 0
    }
  ];

  const stats = [
    { label: '已造訪', value: '12', icon: Award, color: 'text-green-600' },
    { label: '好友', value: '48', icon: Users, color: 'text-blue-600' },
    { label: '熱門路線', value: '5', icon: TrendingUp, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-coffee-50">
      <Header />
      
      <main className="container px-4 pb-20">
        {/* Compact Stats */}
        <div className="py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-coffee-600" />
              <span className="text-sm font-medium text-coffee-800">探索咖啡軌跡</span>
            </div>
            
            <div className="flex space-x-1">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-1 bg-white rounded-md px-2 py-1 shadow-sm border border-coffee-200">
                    <Icon className={`h-3 w-3 ${stat.color}`} />
                    <span className="text-xs font-semibold text-coffee-900">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-3 bg-coffee-100">
            <TabsTrigger value="map" className="data-[state=active]:bg-white data-[state=active]:text-coffee-900">
              <MapPin className="h-4 w-4 mr-1" />
              地圖探索
            </TabsTrigger>
            <TabsTrigger value="list" className="data-[state=active]:bg-white data-[state=active]:text-coffee-900">
              <List className="h-4 w-4 mr-1" />
              清單檢視
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-3">
            <MapView onShowGuide={() => setShowGuide(true)} />
            
            <Card className="border-coffee-200">
              <CardContent className="p-3">
                <h3 className="font-semibold text-coffee-900 mb-2">我的咖啡軌跡</h3>
                <p className="text-sm text-coffee-600 mb-3">
                  你已經造訪了 12 家咖啡廳，收集了 8 個徽章！
                </p>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-xs">
                    ☕
                  </div>
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">
                    📍
                  </div>
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-xs">
                    ⭐
                  </div>
                  <div className="w-6 h-6 bg-coffee-100 rounded-full flex items-center justify-center text-coffee-600 font-semibold text-xs">
                    +5
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <FilterBar />
            
            <div className="space-y-4">
              {coffeeShops.map((shop) => (
                <CoffeeShopCard key={shop.id} {...shop} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center py-4">
              <button className="text-coffee-600 hover:text-coffee-800 font-medium">
                載入更多咖啡廳...
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
      
      {/* Map Guide Modal */}
      {showGuide && (
        <MapGuide onClose={() => setShowGuide(false)} />
      )}
    </div>
  );
};

export default Index;
