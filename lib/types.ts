export type Religion = 
  | 'Hinduism'
  | 'Buddhism'
  | 'Christianity'
  | 'Islam'
  | 'Judaism'
  | 'Sikhism'
  | 'Taoism'
  | 'Shinto'
  | 'Zoroastrianism'
  | 'Jainism'
  | 'Universal';

export interface Festival {
  id: number;
  name: string;
  religion: Religion;
  description: string;
  date: string;
  significance: string[];
  rituals: string[];
  universalMessage: string;
}

export interface Graha {
  id: string;
  name: string;
  description: string;
  ruling_day: string;
  mantras: string[];
  significance: string;
  gemstone: string;
}

export interface Deity {
  id: string;
  name: string;
  religion: Religion;
  description: string;
  attributes: string[];
  iconography: string;
  significance: string;
  stories: string[];
  temples?: Array<{ name: string; location: string }>;
  churches?: Array<{ name: string; location: string }>;
  mosques?: Array<{ name: string; location: string }>;
  gurdwaras?: Array<{ name: string; location: string }>;
  sites?: Array<{ name: string; location: string }>;
  shrines?: Array<{ name: string; location: string }>;
  mantras?: string[];
  prayers?: string[];
  modelEmbedCode?: string;
  incarnations?: string[];
}

export interface HolyBook {
  id: number;
  name: string;
  religion: Religion;
  description: string;
  category: string;
  language: string;
  verses: string | number;
  chapters: string | number;
}

export interface SacredStory {
  id: number;
  title: string;
  religion: Religion;
  description: string;
  tradition: string;
  era: string;
  category: string;
  universalTheme: string;
  content: string[];
  morals: string[];
  relatedStories: Array<{ title: string; description: string }>;
}

export interface Teaching {
  id: number;
  title: string;
  description: string;
  religions: Religion[];
  keyPoints: string[];
  references: Array<{ text: string; source: string }>;
  applications: string[];
}

export interface History {
  id: number;
  title: string;
  description: string;
  events: Array<{ date: string; description: string }>;
  significance: string[];
  artifacts: Array<{ name: string; description: string }>;
  references: string[];
}

export interface DevotionalVideo {
  id: number;
  title: string;
  religion: Religion;
  description: string;
  youtubeId: string;
  channel: string;
  category: string;
}

// Add more type definitions as needed...