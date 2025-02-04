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
  | 'Jainism';

export interface Festival {
  id: number;
  name: string;
  description: string;
  date: string;
  significance: string[];
  rituals: string[];
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

// Add more type definitions as needed...