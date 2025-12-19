export interface Hostel {
  id: string;
  name: string;
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  price: number;
  amenities: string[];
  type: 'boys' | 'girls' | 'unisex';
  category: 'student' | 'working' | 'co-living' | 'budget' | 'premium';
  matchPercentage: number;
  image: string;
  isFavorite: boolean;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  hostel: string;
  date: string;
}

export const hostels: Hostel[] = [
  {
    id: '1',
    name: 'Urban Nest Premium',
    location: 'Koramangala, Bangalore',
    distance: '0.5 km from metro',
    rating: 4.8,
    reviews: 234,
    price: 12500,
    amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Gym'],
    type: 'unisex',
    category: 'premium',
    matchPercentage: 98,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Scholar\'s Hub',
    location: 'HSR Layout, Bangalore',
    distance: '1.2 km from metro',
    rating: 4.6,
    reviews: 189,
    price: 8500,
    amenities: ['WiFi', 'Food', 'Study Room', 'Laundry'],
    type: 'boys',
    category: 'student',
    matchPercentage: 92,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Lotus Living',
    location: 'Indiranagar, Bangalore',
    distance: '0.3 km from metro',
    rating: 4.9,
    reviews: 312,
    price: 15000,
    amenities: ['WiFi', 'AC', 'Food', 'Gym', 'Pool', 'Spa'],
    type: 'girls',
    category: 'premium',
    matchPercentage: 95,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Budget Stays',
    location: 'BTM Layout, Bangalore',
    distance: '0.8 km from metro',
    rating: 4.2,
    reviews: 156,
    price: 5500,
    amenities: ['WiFi', 'Food', 'Laundry'],
    type: 'boys',
    category: 'budget',
    matchPercentage: 78,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Co-Work Living',
    location: 'Whitefield, Bangalore',
    distance: '0.2 km from metro',
    rating: 4.7,
    reviews: 278,
    price: 18000,
    amenities: ['WiFi', 'AC', 'Coworking', 'Food', 'Gym', 'Events'],
    type: 'unisex',
    category: 'co-living',
    matchPercentage: 88,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    isFavorite: true,
  },
  {
    id: '6',
    name: 'Green Valley PG',
    location: 'Electronic City, Bangalore',
    distance: '1.5 km from metro',
    rating: 4.4,
    reviews: 98,
    price: 7000,
    amenities: ['WiFi', 'Food', 'Garden', 'Parking'],
    type: 'girls',
    category: 'working',
    matchPercentage: 82,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    isFavorite: false,
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'Found my perfect hostel in just 10 minutes! The VibeMatch feature is incredible - it really understood what I was looking for.',
    hostel: 'Urban Nest Premium',
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    text: 'Transparent pricing and verified listings gave me confidence. Moved in within a week of searching. Highly recommend sklassics!',
    hostel: 'Scholar\'s Hub',
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Ananya Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 4,
    text: 'The app made hostel hunting so much easier. Loved the filter options and the clean interface. My new hostel feels like home!',
    hostel: 'Lotus Living',
    date: '3 weeks ago',
  },
];

export const categories = [
  { id: 'boys', label: 'Boys', icon: '👨', count: 245 },
  { id: 'girls', label: 'Girls', icon: '👩', count: 189 },
  { id: 'unisex', label: 'Unisex', icon: '👥', count: 156 },
  { id: 'student', label: 'Student', icon: '📚', count: 312 },
  { id: 'working', label: 'Working Pro', icon: '💼', count: 198 },
  { id: 'co-living', label: 'Co-living', icon: '🏠', count: 87 },
  { id: 'budget', label: 'Budget', icon: '💰', count: 423 },
  { id: 'premium', label: 'Premium', icon: '⭐', count: 112 },
];

export const valueProps = [
  {
    icon: '✓',
    title: 'Verified Listings',
    description: 'Every hostel is personally verified for quality and safety standards.',
  },
  {
    icon: '🎯',
    title: 'Smart Matching',
    description: 'Our VibeMatch™ algorithm finds hostels that match your lifestyle.',
  },
  {
    icon: '💎',
    title: 'Transparent Pricing',
    description: 'No hidden fees. See exactly what you pay before you commit.',
  },
  {
    icon: '🛡️',
    title: '24/7 Support',
    description: 'Our team is always available to help you settle in smoothly.',
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Search',
    description: 'Enter your preferred location, budget, and preferences to discover hostels near you.',
    icon: '🔍',
  },
  {
    step: 2,
    title: 'Match',
    description: 'Our VibeMatch™ algorithm analyzes your preferences and shows you the best matches.',
    icon: '💫',
  },
  {
    step: 3,
    title: 'Move-in',
    description: 'Book your chosen hostel online and move in hassle-free with our support team.',
    icon: '🏠',
  },
];
