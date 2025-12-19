import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { VibeMatchCard } from '@/components/VibeMatchCard';
import { RecommendedHostels } from '@/components/RecommendedHostels';
import { CategorySection } from '@/components/CategorySection';
import { WhySection } from '@/components/WhySection';
import { HowItWorks } from '@/components/HowItWorks';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection />
        <VibeMatchCard />
        <RecommendedHostels />
        <CategorySection />
        <WhySection />
        <HowItWorks />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
