import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'hero.title': {
    en: 'Learn AI, Digital Marketing & Business Skills',
    bn: 'এআই, ডিজিটাল মার্কেটিং এবং ব্যবসায়িক দক্ষতা শিখুন',
  },
  'hero.subtitle': {
    en: 'AI-powered personalized learning in English & Bengali',
    bn: 'ইংরেজি এবং বাংলায় এআই-চালিত ব্যক্তিগত শিক্ষা',
  },
  'hero.exploreCourses': {
    en: 'Explore Courses',
    bn: 'কোর্স দেখুন',
  },
  'hero.aiCareerAdvisor': {
    en: 'AI Career Advisor',
    bn: 'এআই ক্যারিয়ার উপদেষ্টা',
  },
  'stats.courses': {
    en: '500+ Courses',
    bn: '৫০০+ কোর্স',
  },
  'stats.students': {
    en: '50K+ Students',
    bn: '৫০০০০+ শিক্ষার্থী',
  },
  'stats.aiPowered': {
    en: 'AI-Powered Learning',
    bn: 'এআই-চালিত শিক্ষা',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'bn' ? 'bn' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};