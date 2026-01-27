"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.religions': 'Religions',
    'nav.explore': 'Explore',
    'nav.texts': 'Sacred Texts',
    'nav.festivals': 'Festivals',
    'nav.meditation': 'Meditation',
    'nav.community': 'Community',
    'nav.navratri': 'Navratri 2025',
    'nav.join': 'Join Sacred Journey',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.continue': 'Continue',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.read_more': 'Read More',
    'common.learn_more': 'Learn More',
    
    // Home page
    'home.title': 'Divine Wisdom & Sacred Knowledge',
    'home.subtitle': 'Explore spiritual teachings from all world religions',
    'home.cta.explore': 'Explore Wisdom',
    'home.cta.meditate': 'Start Meditation',
    
    // Religion pages
    'religion.hinduism': 'Hinduism',
    'religion.christianity': 'Christianity',
    'religion.islam': 'Islam',
    'religion.buddhism': 'Buddhism',
    'religion.sikhism': 'Sikhism',
    'religion.judaism': 'Judaism',
    'religion.others': 'Other Traditions',
    
    // Meditation
    'meditation.title': 'Sacred Meditation Tool',
    'meditation.subtitle': 'Find inner peace through guided meditation',
    'meditation.start': 'Start Session',
    'meditation.pause': 'Pause',
    'meditation.resume': 'Resume',
    'meditation.complete': 'Session Complete!',
    
    // Bookmarks
    'bookmark.add': 'Bookmark',
    'bookmark.remove': 'Remove Bookmark',
    'bookmark.saved': 'Bookmarked!',
    'bookmark.removed': 'Bookmark removed',
    'bookmark.signin_required': 'Sign in to bookmark content',
    
    // Auth
    'auth.signin': 'Sign In',
    'auth.signup': 'Sign Up',
    'auth.signout': 'Sign Out',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.name': 'Full Name',
    'auth.welcome': 'Welcome to Divinora!',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.religions': 'धर्म',
    'nav.explore': 'अन्वेषण',
    'nav.texts': 'पवित्र ग्रंथ',
    'nav.festivals': 'त्योहार',
    'nav.meditation': 'ध्यान',
    'nav.community': 'समुदाय',
    'nav.navratri': 'नवरात्रि 2025',
    'nav.join': 'पवित्र यात्रा में शामिल हों',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    'common.save': 'सहेजें',
    'common.cancel': 'रद्द करें',
    'common.continue': 'जारी रखें',
    'common.back': 'वापस',
    'common.next': 'अगला',
    'common.previous': 'पिछला',
    'common.close': 'बंद करें',
    'common.open': 'खोलें',
    'common.read_more': 'और पढ़ें',
    'common.learn_more': 'और जानें',
    
    // Home page
    'home.title': 'दिव्य ज्ञान और पवित्र शिक्षा',
    'home.subtitle': 'सभी विश्व धर्मों की आध्यात्मिक शिक्षाओं का अन्वेषण करें',
    'home.cta.explore': 'ज्ञान का अन्वेषण करें',
    'home.cta.meditate': 'ध्यान शुरू करें',
    
    // Religion pages
    'religion.hinduism': 'हिंदू धर्म',
    'religion.christianity': 'ईसाई धर्म',
    'religion.islam': 'इस्लाम',
    'religion.buddhism': 'बौद्ध धर्म',
    'religion.sikhism': 'सिख धर्म',
    'religion.judaism': 'यहूदी धर्म',
    'religion.others': 'अन्य परंपराएं',
    
    // Meditation
    'meditation.title': 'पवित्र ध्यान उपकरण',
    'meditation.subtitle': 'निर्देशित ध्यान के माध्यम से आंतरिक शांति पाएं',
    'meditation.start': 'सत्र शुरू करें',
    'meditation.pause': 'रोकें',
    'meditation.resume': 'फिर से शुरू करें',
    'meditation.complete': 'सत्र पूर्ण!',
    
    // Bookmarks
    'bookmark.add': 'बुकमार्क करें',
    'bookmark.remove': 'बुकमार्क हटाएं',
    'bookmark.saved': 'बुकमार्क किया गया!',
    'bookmark.removed': 'बुकमार्क हटाया गया',
    'bookmark.signin_required': 'सामग्री को बुकमार्क करने के लिए साइन इन करें',
    
    // Auth
    'auth.signin': 'साइन इन',
    'auth.signup': 'साइन अप',
    'auth.signout': 'साइन आउट',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.name': 'पूरा नाम',
    'auth.welcome': 'दिविनोरा में आपका स्वागत है!',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('divinora-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('divinora-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}