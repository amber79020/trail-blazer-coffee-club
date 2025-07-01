
import React from 'react';
import { Star, MapPin, Clock, Phone, Heart, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CoffeeShopCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  distance: string;
  address: string;
  tags: string[];
  isOpen: boolean;
  openTime?: string;
  isLiked?: boolean;
  visitCount?: number;
}

const CoffeeShopCard: React.FC<CoffeeShopCardProps> = ({
  name,
  image,
  rating,
  distance,
  address,
  tags,
  isOpen,
  openTime,
  isLiked = false,
  visitCount = 0
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-coffee-200">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <Badge variant={isOpen ? "default" : "secondary"} className={isOpen ? "bg-green-500" : "bg-gray-500"}>
            {isOpen ? "營業中" : "已打烊"}
          </Badge>
          <Button
            size="icon"
            variant="ghost"
            className={`h-8 w-8 rounded-full backdrop-blur-sm ${
              isLiked ? 'bg-red-500/90 text-white' : 'bg-white/90 text-gray-700'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-coffee-800">
            {distance}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-coffee-900 line-clamp-1">{name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-coffee-700">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="line-clamp-1">{address}</span>
        </div>

        {openTime && (
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <span>{openTime}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-coffee-300 text-coffee-700">
              {tag}
            </Badge>
          ))}
        </div>

        {visitCount > 0 && (
          <div className="flex items-center text-sm text-coffee-600 mb-3">
            <Camera className="h-4 w-4 mr-1" />
            <span>已造訪 {visitCount} 次</span>
          </div>
        )}

        <div className="flex space-x-2">
          <Button size="sm" className="flex-1 coffee-gradient text-white hover:opacity-90">
            查看詳情
          </Button>
          <Button size="sm" variant="outline" className="border-coffee-300 text-coffee-700 hover:bg-coffee-50">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoffeeShopCard;
