import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const religions = [
  'Hinduism',
  'Buddhism',
  'Christianity',
  'Islam',
  'Judaism',
  'Sikhism',
  'Taoism',
  'Shinto',
  'Zoroastrianism',
  'Jainism',
] as const;

export type Religion = typeof religions[number];