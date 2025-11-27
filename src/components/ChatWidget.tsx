import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');
  const { language, setLanguage } = useLanguage();

  const quickSuggestions = [
    'Find AI courses for beginners',
    'What are the best digital marketing courses?',
    'Show me business courses',
    'Help me choose a career path',
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: 'Thank you for your question! Our AI assistant is being set up. This will be connected to real AI soon.', isUser: false }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary-dark shadow-elegant hover:shadow-glow transition-all"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="flex items-center justify-center"
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="flex items-center justify-center"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-primary/50 blur-xl"
          />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl bg-card shadow-elegant border border-border overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span className="font-semibold">AI Learning Assistant</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-white/80 mt-1">
                {language === 'en' ? 'Ask me anything about courses!' : 'কোর্স সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন!'}
              </p>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Try asking:' : 'জিজ্ঞাসা করার চেষ্টা করুন:'}
                  </p>
                  {quickSuggestions.map((suggestion, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setInput(suggestion)}
                      className="block w-full text-left p-3 rounded-lg bg-card hover:bg-accent transition-colors text-sm"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              )}
              
              {messages.map((message, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white'
                        : 'bg-card border border-border'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={language === 'en' ? 'Type your message...' : 'আপনার বার্তা টাইপ করুন...'}
                  className="flex-1 h-10 rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="gradient-primary shadow-elegant"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};