
import React, { useState } from 'react';
import { X, MapPin, Navigation, Filter, Camera, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MapGuideProps {
  onClose: () => void;
}

const MapGuide: React.FC<MapGuideProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const guideSteps = [
    {
      title: '歡迎使用 CoffeeTrail 地圖',
      content: '透過地圖探索附近的咖啡廳，記錄你的咖啡軌跡！',
      icon: MapPin,
      color: 'text-coffee-600'
    },
    {
      title: '探索附近咖啡廳',
      content: '地圖上的標記代表咖啡廳位置。綠色表示營業中，紅色表示已打烊，藍色表示你已造訪過。',
      icon: Navigation,
      color: 'text-blue-600'
    },
    {
      title: '使用篩選功能',
      content: '點擊篩選按鈕可以依據營業狀態、類型、評分等條件來篩選咖啡廳。',
      icon: Filter,
      color: 'text-green-600'
    },
    {
      title: '記錄你的軌跡',
      content: '造訪咖啡廳後，可以拍照、評分、寫心得，建立專屬的咖啡軌跡地圖。',
      icon: Camera,
      color: 'text-yellow-600'
    },
    {
      title: '收藏與分享',
      content: '將喜愛的咖啡廳加入收藏，或分享你的咖啡路線給好友。',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      title: '社群互動',
      content: '關注好友的動態，查看熱門路線推薦，一起探索城市咖啡文化！',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  const nextStep = () => {
    if (currentStep < guideSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentGuide = guideSteps[currentStep];
  const Icon = currentGuide.icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-between items-center">
            <div className="w-6"></div>
            <CardTitle className="text-lg font-semibold text-coffee-900">
              使用指南
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 text-coffee-600 hover:text-coffee-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Step Indicator */}
          <div className="flex justify-center space-x-2 mb-6">
            {guideSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep 
                    ? 'bg-coffee-600' 
                    : index < currentStep 
                      ? 'bg-coffee-300' 
                      : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <div className={`mx-auto w-16 h-16 rounded-full bg-coffee-50 flex items-center justify-center`}>
              <Icon className={`h-8 w-8 ${currentGuide.color}`} />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-coffee-900 mb-2">
                {currentGuide.title}
              </h3>
              <p className="text-sm text-coffee-600 leading-relaxed">
                {currentGuide.content}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="text-coffee-600 hover:text-coffee-800"
            >
              上一步
            </Button>
            
            <span className="text-sm text-coffee-600">
              {currentStep + 1} / {guideSteps.length}
            </span>
            
            <Button
              onClick={nextStep}
              className="coffee-gradient text-white"
            >
              {currentStep === guideSteps.length - 1 ? '開始探索' : '下一步'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapGuide;
