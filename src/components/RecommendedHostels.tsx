import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HostelCard, HostelCardSkeleton } from '@/components/HostelCard';
import { hostels } from '@/data/mockData';

export const RecommendedHostels = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-2">
              Recommended for you
            </h2>
            <p className="text-muted-foreground">
              Based on your VibeMatch™ preferences
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Hostels Carousel (Mobile) / Grid (Desktop) */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {hostels.map((hostel) => (
            <div
              key={hostel.id}
              className="min-w-[300px] sm:min-w-[340px] lg:min-w-0 snap-start"
            >
              <HostelCard hostel={hostel} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {hostels.slice(0, 4).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0 ? 'w-6 bg-primary' : 'bg-secondary'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="hero-outline" size="lg">
            View All Hostels
          </Button>
        </div>
      </div>
    </section>
  );
};
