import { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from '@/components/CourseCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal } from 'lucide-react';

const mockCourses = [
  {
    title: 'Complete AI & Machine Learning Bootcamp',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    students: 12500,
    price: '$49.99',
    duration: '12 weeks',
    level: 'Beginner',
    language: 'EN/BN' as const,
    isAIRecommended: true,
  },
  {
    title: 'Digital Marketing Mastery 2024',
    instructor: 'Mark Thompson',
    rating: 4.7,
    students: 8900,
    price: '$39.99',
    duration: '8 weeks',
    level: 'Intermediate',
    language: 'EN' as const,
    isAIRecommended: true,
  },
  {
    title: 'Business Strategy & Entrepreneurship',
    instructor: 'Priya Sharma',
    rating: 4.9,
    students: 15200,
    price: '$59.99',
    duration: '10 weeks',
    level: 'Advanced',
    language: 'EN/BN' as const,
  },
  {
    title: 'Professional Data Science Certificate',
    instructor: 'James Chen',
    rating: 4.6,
    students: 6700,
    price: '$79.99',
    duration: '16 weeks',
    level: 'Advanced',
    language: 'EN' as const,
  },
  {
    title: 'SEO & Content Marketing Strategy',
    instructor: 'Lisa Anderson',
    rating: 4.8,
    students: 9400,
    price: '$44.99',
    duration: '6 weeks',
    level: 'Beginner',
    language: 'EN/BN' as const,
  },
  {
    title: 'Career Development & Job Skills',
    instructor: 'Michael Roberts',
    rating: 4.7,
    students: 11300,
    price: '$34.99',
    duration: '8 weeks',
    level: 'Beginner',
    language: 'EN' as const,
  },
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary-dark/5 to-background py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Your <span className="text-gradient">Perfect Course</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                500+ courses powered by AI to match your learning goals
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for courses, skills, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 pr-4 text-lg shadow-elegant"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid with Filters */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <SlidersHorizontal className="h-5 w-5" />
                    <h2 className="text-lg font-semibold">Filters</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Price Range</label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100}
                        step={5}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Level</label>
                      <div className="space-y-2">
                        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                          <label key={level} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Language</label>
                      <div className="space-y-2">
                        {['English', 'Bengali', 'Both'].map((lang) => (
                          <label key={lang} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">{lang}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Duration</label>
                      <div className="space-y-2">
                        {['0-4 weeks', '4-8 weeks', '8-12 weeks', '12+ weeks'].map((duration) => (
                          <label key={duration} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">{duration}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full gradient-primary">Apply Filters</Button>
                  </div>
                </div>
              </motion.aside>

              {/* Courses Grid */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 flex items-center justify-between"
                >
                  <p className="text-muted-foreground">
                    Showing {mockCourses.length} courses
                  </p>
                  <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {mockCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CourseCard {...course} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}