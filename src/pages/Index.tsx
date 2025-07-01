
import React from 'react';
import Header from '@/components/Header';
import MapView from '@/components/MapView';
import FilterBar from '@/components/FilterBar';
import CoffeeShopCard from '@/components/CoffeeShopCard';
import BottomNav from '@/components/BottomNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Award } from 'lucide-react';

const Index = () => {
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
        {/* Welcome Section */}
        <div className="py-6">
          <h2 className="text-2xl font-bold text-coffee-900 mb-2">
            探索你的咖啡之旅 ☕
          </h2>
          <p className="text-coffee-600">
            發現附近的特色咖啡廳，記錄你的咖啡軌跡
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-coffee-200">
                <CardContent className="p-4">
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-coffee-900">{stat.value}</div>
                  <div className="text-sm text-coffee-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="nearby" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-coffee-100">
            <TabsTrigger value="nearby" className="data-[state=active]:bg-white data-[state=active]:text-coffee-900">
              附近咖啡廳
            </TabsTrigger>
            <TabsTrigger value="map" className="data-[state=active]:bg-white data-[state=active]:text-coffee-900">
              地圖探索
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nearby" className="space-y-4">
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

          <TabsContent value="map" className="space-y-4">
            <MapView />
            
            <Card className="border-coffee-200">
              <CardHeader>
                <CardTitle className="text-coffee-900">我的咖啡軌跡</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-coffee-600 mb-4">
                  你已經造訪了 12 家咖啡廳，收集了 8 個徽章！
                </p>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-sm">
                    ☕
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    📍
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                    ⭐
                  </div>
                  <div className="w-8 h-8 bg-coffee-100 rounded-full flex items-center justify-center text-coffee-600 font-semibold text-sm">
                    +5
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
