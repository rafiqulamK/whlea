import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CourseCategories } from '@/components/CourseCategories';
import { AIFeatures } from '@/components/AIFeatures';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourseCategories />
      <AIFeatures />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
