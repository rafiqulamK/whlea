import { motion } from 'framer-motion';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: string;
  duration: string;
  level: string;
  language: 'EN' | 'BN' | 'EN/BN';
  isAIRecommended?: boolean;
  thumbnail?: string;
}

export const CourseCard = ({
  title,
  instructor,
  rating,
  students,
  price,
  duration,
  level,
  language,
  isAIRecommended,
  thumbnail,
}: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, rotateY: 2 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary-dark/20">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <BookOpen className="h-16 w-16 text-primary/40" />
          </div>
        )}
        
        {isAIRecommended && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="absolute top-4 left-0 bg-gradient-to-r from-primary to-primary-dark px-4 py-1 text-xs font-semibold text-white shadow-lg"
          >
            🤖 AI Recommended
          </motion.div>
        )}
        
        <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-0">
          {language}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{instructor}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? 'fill-warning text-warning'
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{rating}</span>
          </div>
          
          <Badge variant="outline">{level}</Badge>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button size="sm" className="gradient-primary shadow-elegant">
            Enroll Now
          </Button>
        </div>
      </div>

      {/* 3D lighting effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.1) 0%, transparent 50%)',
        }}
      />
    </motion.div>
  );
};