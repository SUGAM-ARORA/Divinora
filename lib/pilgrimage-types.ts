// ============================================
// Divinora — Pilgrimage & Sacred India Types
// ============================================

export interface PilgrimagePlace {
  id: string;
  name: string;
  alternateName?: string;
  location: string;
  state: string;
  coordinates?: { lat: number; lng: number };
  deity: string;
  significance: string;
  description: string;
  history: string;
  bestTimeToVisit: string;
  timings?: string;
  howToReach: TransportOption[];
  nearbyPlaces?: string[];
  photoKeywords?: string[];
  category?: PilgrimageCategory;
  difficulty?: TrekDifficulty;
  elevation?: string;
  tags: string[];
}

export type PilgrimageCategory =
  | 'char-dham'
  | 'jyotirlinga'
  | 'shakti-peetha'
  | 'sapta-puri'
  | 'divya-desam'
  | 'panch-dham'
  | 'sacred-trek'
  | 'sacred-city'
  | 'heritage-site'
  | 'sacred-river'
  | 'mountain-temple';

export type TrekDifficulty = 'easy' | 'moderate' | 'hard' | 'extreme';

export interface TransportOption {
  mode: 'flight' | 'train' | 'bus' | 'car' | 'trek' | 'helicopter' | 'pony' | 'palki' | 'cable-car' | 'boat';
  description: string;
  from?: string;
  duration?: string;
  cost?: string;
}

export interface PilgrimageCircuit {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  totalPlaces?: number;
  places?: PilgrimagePlace[];
  category?: PilgrimageCategory;
  region?: string;
  icon: string;
  color?: string;
  gradient?: string;
  coverImage?: string;
  significance: string[];
  bestSeason: string;
  estimatedDays: string;
  estimatedBudget: string;
}

export interface SacredTrek {
  id: string;
  name: string;
  location: string;
  state: string;
  deity: string;
  description: string;
  difficulty: TrekDifficulty;
  distance: string;
  elevation: string;
  duration: string;
  bestMonths: string[];
  startPoint: string;
  endPoint: string;
  routes: TrekRoute[];
  highlights: string[];
  essentials: string[];
  warnings: string[];
  nearestAirport: string;
  nearestRailway: string;
  category: PilgrimageCategory;
}

export interface TrekRoute {
  name: string;
  mode: string;
  distance: string;
  duration: string;
  difficulty: TrekDifficulty;
  description: string;
  cost?: string;
}

export interface IndianState {
  id: string;
  name: string;
  capital: string;
  region: 'north' | 'south' | 'east' | 'west' | 'central' | 'northeast';
  famousTemples: StateSacredPlace[];
  sacredRivers?: string[];
  famousTreks?: string[];
  highlights: string[];
  description: string;
  svgPath?: string;
}

export interface StateSacredPlace {
  name: string;
  deity: string;
  type: string;
  location: string;
}

export interface DeityInfo {
  id: string;
  name: string;
  alternateName: string[];
  description: string;
  iconography: string;
  significance: string;
  mantras: string[];
  stories: string[];
  festivals: string[];
  famousTemples: { name: string; location: string; circuit?: string }[];
  category: 'trimurti' | 'tridevi' | 'avatar' | 'ganesha-kartikeya' | 'navagraha' | 'other';
  associatedWith: string[];
  color: string;
}

export interface SacredRiver {
  id: string;
  name: string;
  origin: string;
  length: string;
  states: string[];
  significance: string;
  famousGhats: { name: string; location: string; significance: string }[];
  description: string;
}

export interface FestivalEvent {
  id: string;
  name: string;
  month: string;
  description: string;
  significance: string;
  celebrations: string[];
  associatedDeity: string;
  famousLocations: string[];
}
