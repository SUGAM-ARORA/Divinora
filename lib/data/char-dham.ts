import { PilgrimagePlace } from '../pilgrimage-types';

export const charDhamPlaces: PilgrimagePlace[] = [
  {
    id: 'badrinath',
    name: 'Badrinath',
    alternateName: 'Badrinarayan Temple',
    location: 'Chamoli, Uttarakhand',
    state: 'Uttarakhand',
    coordinates: { lat: 30.7433, lng: 79.4938 },
    deity: 'Lord Vishnu (as Badrinarayan)',
    significance: 'One of the Char Dhams and one of the 108 Divya Desams. Lord Vishnu meditated here in the form of Badrinarayan.',
    description: 'Nestled between the Nar and Narayana mountain ranges at 3,133m elevation, Badrinath is one of the holiest Hindu temples dedicated to Lord Vishnu. The temple stands on the banks of the Alaknanda River surrounded by snow-capped Himalayan peaks.',
    history: 'According to legend, Adi Shankaracharya discovered the idol of Badrinarayan in the Alaknanda River in the 8th century and enshrined it in a cave near the Tapt Kund hot springs. The current temple was built by the kings of Garhwal.',
    bestTimeToVisit: 'May to June, September to October (temple opens April/May, closes November)',
    timings: '6:00 AM - 9:00 PM (varies by season)',
    howToReach: [
      { mode: 'flight', description: 'Nearest airport is Jolly Grant Airport, Dehradun (317 km)', from: 'Dehradun', duration: '10-12 hours by road' },
      { mode: 'train', description: 'Nearest railway station is Rishikesh (297 km)', from: 'Rishikesh', duration: '10 hours by road' },
      { mode: 'bus', description: 'Regular buses from Rishikesh, Haridwar, and Joshimath', from: 'Rishikesh' },
      { mode: 'helicopter', description: 'Helicopter services available from Dehradun to Badrinath (seasonal)', from: 'Dehradun', duration: '1 hour' }
    ],
    nearbyPlaces: ['Mana Village', 'Vasudhara Falls', 'Tapt Kund', 'Neelkanth Peak', 'Vyas Gufa'],
    photoKeywords: ['badrinath-temple', 'himalaya', 'snow-mountains'],
    category: 'char-dham',
    elevation: '3,133 m (10,279 ft)',
    tags: ['Vishnu', 'Char Dham', 'Uttarakhand', 'Himalaya', 'Divya Desam']
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    alternateName: 'Kedareshwar Temple',
    location: 'Rudraprayag, Uttarakhand',
    state: 'Uttarakhand',
    coordinates: { lat: 30.7352, lng: 79.0669 },
    deity: 'Lord Shiva (as Kedareshwar)',
    significance: 'One of the 12 Jyotirlingas and Char Dhams. Highest among the 12 Jyotirlingas. Built by the Pandavas to seek Lord Shiva\'s blessings.',
    description: 'Located at 3,583m near the head of the Mandakini River, Kedarnath is one of the most revered Shiva temples. The massive stone temple stands against the backdrop of the majestic Kedarnath range, surviving devastating floods in 2013.',
    history: 'Legend says the Pandavas sought Lord Shiva to atone for killing their kin in the Mahabharata war. Shiva hid as a bull, but when caught by Bhima, he dove into the ground. The hump appeared at Kedarnath, while other body parts appeared at the Panch Kedar sites.',
    bestTimeToVisit: 'May to June, September to October',
    timings: '4:00 AM - 9:00 PM',
    howToReach: [
      { mode: 'trek', description: '16 km trek from Gaurikund through scenic mountain trail', from: 'Gaurikund', duration: '6-8 hours', cost: 'Free' },
      { mode: 'helicopter', description: 'Helicopter from Phata, Guptkashi, or Sirsi helipads', from: 'Phata/Guptkashi', duration: '10 minutes', cost: '₹5,000-8,000' },
      { mode: 'pony', description: 'Pony/horse ride from Gaurikund to Kedarnath', from: 'Gaurikund', duration: '5-6 hours', cost: '₹2,500-4,000' },
      { mode: 'palki', description: 'Palki (palanquin) service by local carriers', from: 'Gaurikund', duration: '8-10 hours', cost: '₹6,000-10,000' }
    ],
    nearbyPlaces: ['Gaurikund', 'Chorabari Tal', 'Vasuki Tal', 'Shankaracharya Samadhi', 'Bhairon Temple'],
    photoKeywords: ['kedarnath-temple', 'himalaya-trek', 'shiva-temple'],
    category: 'char-dham',
    difficulty: 'hard',
    elevation: '3,583 m (11,755 ft)',
    tags: ['Shiva', 'Char Dham', 'Jyotirlinga', 'Trek', 'Uttarakhand']
  },
  {
    id: 'gangotri',
    name: 'Gangotri',
    alternateName: 'Gangotri Temple',
    location: 'Uttarkashi, Uttarakhand',
    state: 'Uttarakhand',
    coordinates: { lat: 30.9946, lng: 78.9398 },
    deity: 'Goddess Ganga',
    significance: 'Origin of the sacred River Ganga. One of the Char Dhams. King Bhagirath meditated here to bring Ganga from heaven to earth.',
    description: 'At 3,100m altitude, Gangotri is where King Bhagirath is believed to have worshipped Lord Shiva to release the River Ganga from his matted locks. The 18th-century temple built by Gorkha General Amar Singh Thapa sits on the banks of the Bhagirathi River.',
    history: 'According to mythology, King Bhagirath performed severe penance here for thousands of years to bring Goddess Ganga to Earth to liberate the souls of his ancestors. Lord Shiva caught Ganga in his locks to prevent Earth from being destroyed by her force.',
    bestTimeToVisit: 'May to June, September to October',
    timings: '6:15 AM - 2:00 PM, 3:00 PM - 9:30 PM',
    howToReach: [
      { mode: 'bus', description: 'Regular buses from Rishikesh and Uttarkashi', from: 'Uttarkashi', duration: '5 hours' },
      { mode: 'car', description: 'By road from Rishikesh (265 km) via Uttarkashi', from: 'Rishikesh', duration: '10 hours' },
      { mode: 'train', description: 'Nearest railway station is Rishikesh (265 km)', from: 'Rishikesh' }
    ],
    nearbyPlaces: ['Gaumukh (Gangotri Glacier)', 'Tapovan', 'Pandava Gufa', 'Surya Kund', 'Submerged Shivling'],
    photoKeywords: ['gangotri-temple', 'ganga-river', 'himalaya'],
    category: 'char-dham',
    elevation: '3,100 m (10,170 ft)',
    tags: ['Ganga', 'Char Dham', 'Sacred River', 'Uttarakhand']
  },
  {
    id: 'yamunotri',
    name: 'Yamunotri',
    alternateName: 'Yamunotri Temple',
    location: 'Uttarkashi, Uttarakhand',
    state: 'Uttarakhand',
    coordinates: { lat: 31.0180, lng: 78.4635 },
    deity: 'Goddess Yamuna',
    significance: 'Source of the Yamuna River. First stop on the traditional Char Dham Yatra. Dedicated to Goddess Yamuna, daughter of Surya Dev.',
    description: 'Yamunotri is the westernmost shrine in the Char Dham and sits at 3,291m. The temple is dedicated to Goddess Yamuna and features the sacred Divya Shila rock and Surya Kund hot spring where pilgrims cook rice and potatoes as prasad.',
    history: 'The temple was built by Maharaja Pratap Shah of Tehri Garhwal in the 19th century. It has been rebuilt several times due to natural calamities. The original shrine was built by Asit Muni, a sage who resided here.',
    bestTimeToVisit: 'May to June, September to October',
    timings: '6:00 AM - 8:00 PM',
    howToReach: [
      { mode: 'trek', description: '5 km trek from Janki Chatti to the temple', from: 'Janki Chatti', duration: '2-3 hours' },
      { mode: 'pony', description: 'Pony ride available from Janki Chatti', from: 'Janki Chatti', duration: '2 hours', cost: '₹1,500-2,500' },
      { mode: 'palki', description: 'Palki service from Janki Chatti', from: 'Janki Chatti', cost: '₹3,000-5,000' },
      { mode: 'bus', description: 'Buses available from Rishikesh to Janki Chatti', from: 'Rishikesh', duration: '10 hours' }
    ],
    nearbyPlaces: ['Surya Kund', 'Divya Shila', 'Saptrishi Kund', 'Hanuman Chatti'],
    photoKeywords: ['yamunotri-temple', 'yamuna-river', 'himalaya'],
    category: 'char-dham',
    difficulty: 'moderate',
    elevation: '3,291 m (10,797 ft)',
    tags: ['Yamuna', 'Char Dham', 'Sacred River', 'Uttarakhand']
  }
];

export const charDhamCircuit = {
  id: 'char-dham',
  name: 'Char Dham Yatra',
  description: 'The four sacred abodes in the Himalayas — the holiest Hindu pilgrimage circuit in Uttarakhand.',
  longDescription: 'The Char Dham Yatra is one of the most sacred Hindu pilgrimages, covering four divine temples nestled in the Garhwal Himalayas of Uttarakhand. The traditional route follows Yamunotri → Gangotri → Kedarnath → Badrinath, moving from west to east. This yatra is believed to wash away all sins and pave the path to moksha (salvation). Every devout Hindu aspires to complete this journey at least once in their lifetime.',
  totalPlaces: 4,
  places: charDhamPlaces,
  category: 'char-dham' as const,
  icon: '🏔️',
  color: 'from-orange-500 to-amber-600',
  gradient: 'from-orange-500/10 via-amber-500/10 to-yellow-500/10',
  significance: [
    'Believed to wash away all sins and grant moksha (salvation)',
    'Covers the sacred origins of River Ganga and Yamuna',
    'Includes one of the 12 Jyotirlingas (Kedarnath)',
    'Includes one of the 108 Divya Desams (Badrinath)',
    'Revived by Adi Shankaracharya in the 8th century'
  ],
  bestSeason: 'May to June, September to October',
  estimatedDays: '10-12 days',
  estimatedBudget: '₹15,000 - ₹50,000 per person'
};
