import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, BookOpen, TrendingUp } from 'lucide-react';

const enrolledCourses = [
  { title: 'AI & Machine Learning Bootcamp', progress: 65, nextLesson: 'Neural Networks' },
  { title: 'Digital Marketing Mastery', progress: 40, nextLesson: 'SEO Fundamentals' },
  { title: 'Business Strategy', progress: 80, nextLesson: 'Market Analysis' },
];

const achievements = [
  { title: 'Fast Learner', icon: '🚀', description: 'Completed 5 courses' },
  { title: 'Streak Master', icon: '🔥', description: '30-day learning streak' },
  { title: 'Quiz Champion', icon: '🏆', description: '100% on 10 quizzes' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="text-gradient">Student!</span>
            </h1>
            <p className="text-muted-foreground mb-8">Continue your learning journey</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          >
            {[
              { icon: BookOpen, label: 'Courses Enrolled', value: '3', color: 'text-primary' },
              { icon: Clock, label: 'Hours Learned', value: '45', color: 'text-success' },
              { icon: TrendingUp, label: 'Average Progress', value: '62%', color: 'text-warning' },
              { icon: Trophy, label: 'Achievements', value: '8', color: 'text-primary-dark' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`rounded-full bg-primary/10 p-3 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enrolled Courses */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Continue Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {enrolledCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-lg bg-gradient-to-br from-card to-accent/5 border border-border hover:shadow-card transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge variant="outline">{course.progress}%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Next: {course.nextLesson}
                      </p>
                      <Progress value={course.progress} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary-dark/5 border border-border/50"
                    >
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Learning Streak */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🔥</span> Learning Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <motion.p
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                      className="text-5xl font-bold text-gradient mb-2"
                    >
                      30
                    </motion.p>
                    <p className="text-sm text-muted-foreground">Days in a row</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}