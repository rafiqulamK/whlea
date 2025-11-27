import { motion } from 'framer-motion';
import { Brain, TrendingUp, Briefcase, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    courses: '120+ Courses',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    courses: '85+ Courses',
    gradient: 'from-success to-primary',
  },
  {
    icon: Briefcase,
    title: 'Business & Entrepreneurship',
    courses: '95+ Courses',
    gradient: 'from-warning to-primary-dark',
  },
  {
    icon: Target,
    title: 'Job Skills & Career',
    courses: '110+ Courses',
    gradient: 'from-primary-dark to-success',
  },
  {
    icon: Award,
    title: 'Professional Certifications',
    courses: '90+ Courses',
    gradient: 'from-primary to-warning',
  },
];

export const CourseCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore <span className="text-gradient">Top Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our most popular learning paths and start your journey today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card hover:shadow-elegant transition-all cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative space-y-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex rounded-xl bg-gradient-to-br ${category.gradient} p-3 text-white shadow-lg`}
                >
                  <category.icon className="h-6 w-6" />
                </motion.div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.courses}</p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-primary transition-colors"
                  >
                    Explore →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};