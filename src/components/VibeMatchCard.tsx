import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Users, Volume2, BookOpen, PartyPopper, Sparkles } from 'lucide-react';

export const VibeMatchCard = () => {
  const [selectedVibe, setSelectedVibe] = useState<string>('balanced');
  const [budget, setBudget] = useState([10000]);
  const [people, setPeople] = useState(2);

  const vibes = [
    { id: 'quiet', label: 'Quiet', icon: BookOpen, description: 'Study-friendly' },
    { id: 'social', label: 'Social', icon: PartyPopper, description: 'Community vibes' },
    { id: 'balanced', label: 'Balanced', icon: Volume2, description: 'Best of both' },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-amber-500/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold gradient-text">Exclusive Feature</span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              VibeMatch™
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We personalize hostel recommendations based on your living vibe. Tell us what matters to you.
            </p>
          </div>

          {/* VibeMatch Card */}
          <div className="glass-card p-6 lg:p-10 hover-lift">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Side - Vibe Selection */}
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
                    Select Your Vibe
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {vibes.map((vibe) => (
                      <button
                        key={vibe.id}
                        onClick={() => setSelectedVibe(vibe.id)}
                        className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                          selectedVibe === vibe.id
                            ? 'border-primary bg-primary/10 shadow-glow'
                            : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                        }`}
                      >
                        <div
                          className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-2 transition-all duration-300 ${
                            selectedVibe === vibe.id
                              ? 'bg-gradient-to-br from-primary to-accent'
                              : 'bg-secondary'
                          }`}
                        >
                          <vibe.icon
                            className={`w-6 h-6 ${
                              selectedVibe === vibe.id ? 'text-primary-foreground' : 'text-foreground'
                            }`}
                          />
                        </div>
                        <p className="font-semibold text-sm">{vibe.label}</p>
                        <p className="text-xs text-muted-foreground">{vibe.description}</p>
                        {selectedVibe === vibe.id && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground text-xs">✓</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* People Selector */}
                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
                    Sharing Preference
                  </label>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div className="flex gap-2 flex-1">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                          key={num}
                          onClick={() => setPeople(num)}
                          className={`w-10 h-10 rounded-xl font-semibold transition-all duration-300 ${
                            people === num
                              ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground scale-110'
                              : 'bg-secondary hover:bg-secondary/80'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {people === 1 ? 'Single room' : `${people} sharing`}
                  </p>
                </div>
              </div>

              {/* Right Side - Budget & CTA */}
              <div className="space-y-6">
                {/* Budget Slider */}
                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
                    Monthly Budget
                  </label>
                  <div className="bg-secondary/50 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">₹5,000</span>
                      <span className="text-2xl font-bold gradient-text">
                        ₹{budget[0].toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">₹25,000</span>
                    </div>
                    <Slider
                      value={budget}
                      onValueChange={setBudget}
                      min={5000}
                      max={25000}
                      step={500}
                      className="py-4"
                    />
                  </div>
                </div>

                {/* Match Preview */}
                <div className="glass rounded-2xl p-4 border-2 border-dashed border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">98%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Perfect matches found!</p>
                      <p className="text-sm text-muted-foreground">
                        12 hostels match your vibe
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="hero" size="xl" className="w-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Find My Perfect Match
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
