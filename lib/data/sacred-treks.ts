import { SacredTrek } from '../pilgrimage-types';

export const sacredTreks: SacredTrek[] = [
  {
    id: 'vaishno-devi', name: 'Vaishno Devi', location: 'Katra, Jammu & Kashmir', state: 'Jammu & Kashmir',
    deity: 'Mata Vaishno Devi', difficulty: 'moderate',
    description: 'One of the most visited shrines in India. The Holy Cave shrine of Mata Vaishno Devi is at 5,200 ft in the Trikuta Mountains. Over 8 million pilgrims visit annually.',
    distance: '12 km (one way from Katra)', elevation: '5,200 ft (1,585 m)', duration: '5-7 hours one way',
    bestMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    startPoint: 'Katra', endPoint: 'Bhawan (Holy Cave)',
    routes: [
      { name: 'Walking (Traditional)', mode: 'trek', distance: '12 km', duration: '5-7 hours', difficulty: 'moderate', description: 'Well-paved path with shops and rest stops', cost: 'Free' },
      { name: 'Pony/Horse Ride', mode: 'pony', distance: '12 km', duration: '4-5 hours', difficulty: 'easy', description: 'Ponies available from Katra to Bhawan', cost: '₹500-1,500' },
      { name: 'Palki (Palanquin)', mode: 'palki', distance: '12 km', duration: '6-8 hours', difficulty: 'easy', description: 'Carried by 4 porters', cost: '₹3,000-5,000' },
      { name: 'Helicopter', mode: 'helicopter', distance: 'Direct', duration: '5-8 minutes', difficulty: 'easy', description: 'Katra to Sanjichhat helipad (then 2 km walk)', cost: '₹1,800-2,500' },
      { name: 'Battery Car', mode: 'cable-car', distance: 'Partial', duration: '15 minutes', difficulty: 'easy', description: 'From Tarakote Marg to Bhawan', cost: '₹200-400' }
    ],
    highlights: ['Holy Cave with three Pindis', 'Ardhkuwari Cave (halfway)', 'Banganga River', 'Charan Paduka', 'Bhairon Temple (1.5 km above Bhawan)'],
    essentials: ['Yatra slip (free registration at shrine board)', 'Comfortable walking shoes', 'Rain jacket in monsoon', 'Warm clothes in winter', 'Water bottle', 'Light backpack'],
    warnings: ['Register at Shrine Board before starting', 'Carry warm clothes even in summer (cold at night)', 'Monsoon: landslide risk — check advisories', 'Keep Yatra Parchi always'],
    nearestAirport: 'Jammu Airport (48 km from Katra)', nearestRailway: 'Shri Mata Vaishno Devi Katra Station',
    category: 'sacred-trek'
  },
  {
    id: 'amarnath', name: 'Amarnath Yatra', location: 'Anantnag, Jammu & Kashmir', state: 'Jammu & Kashmir',
    deity: 'Lord Shiva (Ice Lingam)', difficulty: 'hard',
    description: 'The Amarnath Cave houses a naturally formed ice Shiva Lingam. The annual yatra (June-August) is one of the most challenging and sacred pilgrimages in India.',
    distance: '36 km via Pahalgam / 14 km via Baltal', elevation: '3,888 m (12,756 ft)', duration: '3-5 days (Pahalgam) / 1-2 days (Baltal)',
    bestMonths: ['June', 'July', 'August'], startPoint: 'Pahalgam or Baltal', endPoint: 'Amarnath Cave',
    routes: [
      { name: 'Pahalgam Route (Traditional)', mode: 'trek', distance: '36 km', duration: '3-5 days', difficulty: 'hard', description: 'Scenic route through Chandanwari, Sheshnag, Panchtarni. Longer but gradual ascent.', cost: 'Registration ₹150' },
      { name: 'Baltal Route (Shorter)', mode: 'trek', distance: '14 km', duration: '1-2 days', difficulty: 'hard', description: 'Steeper but shorter. Base camp at Baltal.', cost: 'Registration ₹150' },
      { name: 'Helicopter', mode: 'helicopter', distance: 'Direct to Panchtarni', duration: '10 minutes', difficulty: 'moderate', description: 'From Pahalgam/Baltal to Panchtarni (then 6 km walk to cave)', cost: '₹5,000-8,000' },
      { name: 'Pony', mode: 'pony', distance: 'Full route', duration: '2-3 days', difficulty: 'moderate', description: 'Available on Pahalgam route', cost: '₹3,000-5,000' }
    ],
    highlights: ['Ice Shiva Lingam', 'Sheshnag Lake', 'Panchtarni meadows', 'Mahagunas Pass (14,000 ft)', 'Amarnath Cave'],
    essentials: ['Compulsory registration card', 'Medical fitness certificate', 'Oxygen cylinder (recommended)', 'Cold weather gear', 'Trekking poles', 'Rain protection'],
    warnings: ['Mandatory health certificate required', 'Altitude sickness risk above 12,000 ft', 'Limited yatra period (June-August only)', 'Security forces escort required', 'Weather can change rapidly'],
    nearestAirport: 'Srinagar Airport', nearestRailway: 'Jammu Tawi',
    category: 'sacred-trek'
  },
  {
    id: 'hemkund-sahib', name: 'Hemkund Sahib', location: 'Chamoli, Uttarakhand', state: 'Uttarakhand',
    deity: 'Guru Gobind Singh Ji (Sikh) & Lakshmana (Hindu)', difficulty: 'hard',
    description: 'A high-altitude Sikh pilgrimage site at 4,632m, surrounded by seven snow-capped peaks. The glacial lake is one of the highest in India.',
    distance: '19 km from Govindghat', elevation: '4,632 m (15,197 ft)', duration: '2 days (via Ghangaria)',
    bestMonths: ['June', 'July', 'August', 'September'], startPoint: 'Govindghat', endPoint: 'Hemkund Sahib',
    routes: [
      { name: 'Trek via Ghangaria', mode: 'trek', distance: '19 km (13+6)', duration: '2 days', difficulty: 'hard', description: 'Day 1: Govindghat to Ghangaria (13 km), Day 2: Ghangaria to Hemkund (6 km steep climb)', cost: 'Free' },
      { name: 'Helicopter to Ghangaria', mode: 'helicopter', distance: 'Partial', duration: '5 min', difficulty: 'moderate', description: 'Helicopter to Ghangaria, then 6 km trek', cost: '₹3,000-5,000' },
      { name: 'Pony to Ghangaria', mode: 'pony', distance: '13 km', duration: '5-6 hours', difficulty: 'moderate', description: 'From Govindghat to Ghangaria only', cost: '₹1,500-2,500' }
    ],
    highlights: ['Hemkund Lake (glacial)', 'Valley of Flowers (nearby, UNESCO site)', 'Seven snow peaks', 'Gurudwara at 15,000 ft', 'Lakshman Temple'],
    essentials: ['Warm waterproof clothing', 'Trekking shoes', 'Water purification', 'Energy food', 'Rain gear', 'Altitude medicine'],
    warnings: ['Very high altitude — acclimatize first', 'Open only June to October', 'Weather unpredictable', 'No accommodation at Hemkund — stay at Ghangaria'],
    nearestAirport: 'Jolly Grant Airport, Dehradun', nearestRailway: 'Rishikesh',
    category: 'sacred-trek'
  },
  {
    id: 'kailash-mansarovar', name: 'Kailash Mansarovar Yatra', location: 'Mount Kailash, Tibet (China)', state: 'Tibet (via Uttarakhand/Nepal)',
    deity: 'Lord Shiva & Parvati', difficulty: 'extreme',
    description: 'The ultimate Hindu pilgrimage. Mount Kailash (6,638m) is believed to be the abode of Lord Shiva. The 52 km parikrama around Kailash at extreme altitude is a once-in-a-lifetime spiritual experience.',
    distance: '52 km parikrama', elevation: '5,636 m Dolma La Pass (18,471 ft)', duration: '22-28 days total',
    bestMonths: ['June', 'July', 'August', 'September'], startPoint: 'Delhi (via Lipulekh/Nathu La/Kathmandu)', endPoint: 'Mount Kailash, Mansarovar Lake',
    routes: [
      { name: 'Lipulekh Pass (MEA Route)', mode: 'trek', distance: 'Delhi-Dharchula-Lipulekh-Kailash', duration: '22-24 days', difficulty: 'extreme', description: 'Government organized via Ministry of External Affairs. Through Uttarakhand. Most traditional route.', cost: '₹2,00,000 approx' },
      { name: 'Nathu La (Sikkim Route)', mode: 'car', distance: 'Delhi-Gangtok-Nathu La-Kailash', duration: '22 days', difficulty: 'hard', description: 'Partially motorable route via Sikkim. Less walking. Government organized.', cost: '₹2,50,000 approx' },
      { name: 'Via Kathmandu (Nepal Route)', mode: 'trek', distance: 'Kathmandu-Simikot/Hilsa-Kailash', duration: '14-16 days', difficulty: 'extreme', description: 'Private operators via Nepal. Requires Chinese visa.', cost: '₹3,00,000-5,00,000' },
      { name: 'Helicopter (from Nepal)', mode: 'helicopter', distance: 'Partial assistance', duration: '10-12 days', difficulty: 'hard', description: 'Helicopter segments reduce trekking', cost: '₹4,00,000+' }
    ],
    highlights: ['Mount Kailash darshan', 'Mansarovar Lake holy dip', 'Rakshas Tal', 'Dolma La Pass crossing', 'Gauri Kund', 'Dirapuk & Zuthulpuk monasteries'],
    essentials: ['Indian passport & Chinese visa', 'Medical fitness certificate', 'High altitude gear', 'Oxygen cylinders', 'Anti-altitude sickness medicine', 'Sleeping bag rated -20°C'],
    warnings: ['Extreme altitude — serious health risk', 'Limited medical facilities', 'Apply months in advance (govt lottery for MEA route)', 'Physical fitness mandatory', 'Age limit 18-70 years', 'No rescue helicopters in Tibet side'],
    nearestAirport: 'Delhi / Kathmandu', nearestRailway: 'Delhi / Kathgodam',
    category: 'sacred-trek'
  },
  {
    id: 'kedarnath-trek', name: 'Kedarnath Trek', location: 'Rudraprayag, Uttarakhand', state: 'Uttarakhand',
    deity: 'Lord Shiva', difficulty: 'hard',
    description: 'The 16 km trek from Gaurikund to Kedarnath Temple through breathtaking Himalayan landscapes. Part of the Char Dham Yatra.',
    distance: '16 km one way', elevation: '3,583 m (11,755 ft)', duration: '6-8 hours one way',
    bestMonths: ['May', 'June', 'September', 'October'], startPoint: 'Gaurikund', endPoint: 'Kedarnath Temple',
    routes: [
      { name: 'Walking Trek', mode: 'trek', distance: '16 km', duration: '6-8 hours', difficulty: 'hard', description: 'Well-marked path but steep in places. Gradual ascent through forests and meadows.', cost: 'Free' },
      { name: 'Pony/Horse', mode: 'pony', distance: '16 km', duration: '5-6 hours', difficulty: 'moderate', description: 'Ponies available from Gaurikund', cost: '₹2,500-4,000' },
      { name: 'Palki (Palanquin)', mode: 'palki', distance: '16 km', duration: '8-10 hours', difficulty: 'easy', description: 'Carried by 4 porters', cost: '₹6,000-10,000' },
      { name: 'Helicopter', mode: 'helicopter', distance: 'Direct', duration: '10 minutes', difficulty: 'easy', description: 'From Phata/Guptkashi/Sirsi to Kedarnath', cost: '₹5,000-8,000' }
    ],
    highlights: ['Gaurikund hot springs', 'Rambara stopover', 'Linchauli meadows', 'Kedarnath Temple', 'Chorabari Glacier', 'Bhairon Temple'],
    essentials: ['Warm clothes', 'Rain jacket', 'Trekking shoes', 'Walking stick', 'Water bottle', 'Energy bars', 'Torch/headlamp'],
    warnings: ['Weather changes rapidly — carry rain protection', 'Altitude sickness possible', 'Avoid monsoon peak (July-Aug) due to landslides', 'Start early morning for comfortable trek'],
    nearestAirport: 'Jolly Grant Airport, Dehradun', nearestRailway: 'Rishikesh',
    category: 'sacred-trek'
  }
];
