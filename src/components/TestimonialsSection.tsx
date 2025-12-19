import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/mockData';

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              Loved by thousands
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our community says about their experience
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="glass-card p-6 lg:p-8 hover-lift relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.hostel} • {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '10K+', label: 'Happy Residents' },
              { value: '500+', label: 'Verified Hostels' },
              { value: '4.8', label: 'Average Rating' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 glass-card hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
