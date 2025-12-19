import { Heart, Star, MapPin, Wifi, UtensilsCrossed, Shirt, Wind, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hostel } from '@/data/mockData';
import { useState } from 'react';

interface HostelCardProps {
  hostel: Hostel;
}

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  WiFi: Wifi,
  Food: UtensilsCrossed,
  Laundry: Shirt,
  AC: Wind,
  Gym: Dumbbell,
};

export const HostelCard = ({ hostel }: HostelCardProps) => {
  const [isFavorite, setIsFavorite] = useState(hostel.isFavorite);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group glass-card overflow-hidden hover-lift">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}
        
        {/* Image */}
        <img
          src={hostel.image}
          alt={hostel.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

        {/* Match Badge */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-green-600 text-white text-xs font-bold">
          {hostel.matchPercentage}% Match
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            isFavorite ? 'bg-destructive' : 'hover:bg-card'
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite ? 'fill-white text-white scale-110' : 'text-foreground'
            }`}
          />
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-3 left-3">
          <p className="text-white text-xs opacity-80">per month</p>
          <p className="text-white text-2xl font-bold">
            ₹{hostel.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors duration-300">
            {hostel.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-sm">{hostel.rating}</span>
            <span className="text-xs text-muted-foreground">({hostel.reviews})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{hostel.location}</span>
          <span className="mx-1">•</span>
          <span>{hostel.distance}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hostel.amenities.slice(0, 4).map((amenity) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <div
                key={amenity}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary rounded-lg text-xs font-medium"
              >
                {IconComponent && <IconComponent className="w-3 h-3" />}
                {amenity}
              </div>
            );
          })}
          {hostel.amenities.length > 4 && (
            <div className="px-2.5 py-1 bg-secondary rounded-lg text-xs font-medium text-muted-foreground">
              +{hostel.amenities.length - 4} more
            </div>
          )}
        </div>

        {/* CTA */}
        <Button className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};

export const HostelCardSkeleton = () => {
  return (
    <div className="glass-card overflow-hidden">
      {/* Image Skeleton */}
      <div className="h-48 sm:h-56 bg-secondary animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-4 sm:p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div className="h-6 w-3/4 bg-secondary rounded-lg animate-pulse" />
          <div className="h-6 w-16 bg-secondary rounded-lg animate-pulse" />
        </div>
        <div className="h-4 w-1/2 bg-secondary rounded-lg animate-pulse" />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 bg-secondary rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="h-11 w-full bg-secondary rounded-2xl animate-pulse" />
      </div>
    </div>
  );
};
