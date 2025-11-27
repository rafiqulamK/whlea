import { motion } from 'framer-motion';
import { Search, Bot, RefreshCw, Globe } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'AI Course Discovery Agent',
    description: 'Finds perfect courses based on your goals and learning style',
    color: 'text-primary',
  },
  {
    icon: Bot,
    title: 'Smart Learning Assistant',
    description: '24/7 AI-powered help for all your course questions',
    color: 'text-success',
  },
  {
    icon: RefreshCw,
    title: 'Daily Content Evolution',
    description: 'Courses automatically improve based on student feedback',
    color: 'text-warning',
  },
  {
    icon: Globe,
    title: 'Bilingual Support',
    description: 'Seamless learning experience in English & Bengali',
    color: 'text-primary-dark',
  },
];

export const AIFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Bot className="h-4 w-4" />
            <span>AI-Powered Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn Smarter with <span className="text-gradient">Artificial Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI technology adapts to your learning style and helps you achieve your goals faster
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card hover:shadow-elegant transition-all"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className={`inline-flex rounded-full bg-gradient-to-br from-primary/10 to-primary-dark/10 p-4 ${feature.color}`}
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>

              {/* 3D glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
                  transform: 'translateZ(-10px)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};