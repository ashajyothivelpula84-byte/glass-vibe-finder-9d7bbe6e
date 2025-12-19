import { categories } from '@/data/mockData';

export const CategorySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find the perfect hostel that matches your lifestyle and preferences
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className="group glass-card p-4 lg:p-5 text-center hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-3xl lg:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125">
                {category.icon}
              </div>
              <p className="font-semibold text-sm lg:text-base mb-1">
                {category.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {category.count} hostels
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
