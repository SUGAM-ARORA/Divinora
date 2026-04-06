import { PilgrimagePlace } from '../pilgrimage-types';

export const jyotirlingaPlaces: PilgrimagePlace[] = [
  {
    id: 'somnath', name: 'Somnath', location: 'Veraval, Gujarat', state: 'Gujarat',
    coordinates: { lat: 20.8880, lng: 70.4014 }, deity: 'Lord Shiva (Somnath)',
    significance: 'First among the 12 Jyotirlingas. Mentioned in Rigveda. Rebuilt 17 times after invasions, symbolizing eternal resilience.',
    description: 'The Somnath Temple, meaning "Lord of the Moon", stands majestically on the western coast of Gujarat at the confluence of three rivers. It is the first of the twelve Jyotirlingas and represents the beginning of the sacred Jyotirlinga pilgrimage.',
    history: 'Legend says the Moon God (Soma) built the original temple in gold after being cursed by Daksha. It was rebuilt in silver by Ravana, wood by Krishna, and stone by Bhimadeva. The temple was destroyed and rebuilt many times. The current structure was rebuilt in 1951 under Sardar Vallabhbhai Patel.',
    bestTimeToVisit: 'October to March', timings: '6:00 AM - 9:00 PM',
    howToReach: [
      { mode: 'flight', description: 'Nearest airport Diu (63 km) or Rajkot (164 km)', from: 'Diu/Rajkot' },
      { mode: 'train', description: 'Veraval Railway Station (6 km)', from: 'Veraval', duration: '15 min' },
      { mode: 'bus', description: 'Well connected by road from Ahmedabad, Rajkot', from: 'Ahmedabad', duration: '7 hours' }
    ],
    nearbyPlaces: ['Triveni Sangam', 'Bhalka Tirth', 'Prabhas Patan Museum', 'Gir National Park'],
    photoKeywords: ['somnath-temple', 'gujarat-coast'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Gujarat', 'Coastal Temple']
  },
  {
    id: 'mallikarjuna', name: 'Mallikarjuna', location: 'Srisailam, Andhra Pradesh', state: 'Andhra Pradesh',
    coordinates: { lat: 15.8525, lng: 78.8685 }, deity: 'Lord Shiva (Mallikarjuna)',
    significance: 'Second Jyotirlinga. Also a Shakti Peetha. One of the rare temples that is both a Jyotirlinga and Shakti Peetha.',
    description: 'Situated on Srisailam hill on the banks of River Krishna in the Nallamala Hills. One of the few temples combining both Jyotirlinga and Shakti Peetha.',
    history: 'Associated with the story of Lord Shiva and Parvati visiting their son Kartikeya on Srisailam. The Shiva Purana mentions it as the second Jyotirlinga.',
    bestTimeToVisit: 'October to February', timings: '4:30 AM - 10:00 PM',
    howToReach: [
      { mode: 'bus', description: 'Buses from Hyderabad (213 km)', from: 'Hyderabad', duration: '4-5 hours' },
      { mode: 'car', description: 'Well connected by road through Nallamala Forest', from: 'Hyderabad' }
    ],
    nearbyPlaces: ['Srisailam Dam', 'Akka Mahadevi Caves', 'Patalaganga', 'Nallamala Hills'],
    photoKeywords: ['srisailam-temple', 'nallamala-hills'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Shakti Peetha', 'Andhra Pradesh']
  },
  {
    id: 'mahakaleshwar', name: 'Mahakaleshwar', location: 'Ujjain, Madhya Pradesh', state: 'Madhya Pradesh',
    coordinates: { lat: 23.1828, lng: 75.7682 }, deity: 'Lord Shiva (Mahakal)',
    significance: 'Third Jyotirlinga. Only south-facing (Dakshinamurti) Jyotirlinga. Famous for daily Bhasma Aarti performed with ash from funeral pyres.',
    description: 'Located in the ancient city of Ujjain, Mahakaleshwar is one of the most revered Shiva temples. It is unique as the only Jyotirlinga facing south and is renowned for its powerful Bhasma Aarti at dawn.',
    history: 'Ujjain was one of the seven sacred cities. The temple is mentioned in Meghaduta by Kalidasa. The Bhasma Aarti tradition is centuries old, using sacred ash.',
    bestTimeToVisit: 'October to March, Maha Shivaratri', timings: '4:00 AM - 11:00 PM',
    howToReach: [
      { mode: 'train', description: 'Ujjain Junction is well connected to major cities', from: 'Major cities' },
      { mode: 'flight', description: 'Nearest airport Indore (55 km)', from: 'Indore', duration: '1 hour' }
    ],
    nearbyPlaces: ['Kal Bhairav Temple', 'Ram Ghat', 'Vedh Shala (Observatory)', 'Harsiddhi Temple'],
    photoKeywords: ['mahakaleshwar-ujjain', 'bhasma-aarti'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Bhasma Aarti', 'Ujjain', 'Madhya Pradesh']
  },
  {
    id: 'omkareshwar', name: 'Omkareshwar', location: 'Khandwa, Madhya Pradesh', state: 'Madhya Pradesh',
    coordinates: { lat: 22.2457, lng: 76.1512 }, deity: 'Lord Shiva (Omkareshwar)',
    significance: 'Fourth Jyotirlinga. The island is naturally shaped like the Hindu Om symbol.',
    description: 'Located on Mandhata Island in the Narmada River, which is naturally shaped like the sacred Om (ॐ) symbol. The island has two main temples — Omkareshwar and Amareshwar.',
    history: 'Legend says the Vindhya mountain performed penance here to Lord Shiva. Pleased, Shiva appeared in two forms — Omkareshwar and Amareshwar.',
    bestTimeToVisit: 'October to March', timings: '5:00 AM - 10:00 PM',
    howToReach: [
      { mode: 'train', description: 'Omkareshwar Road station (12 km)', from: 'Omkareshwar Road' },
      { mode: 'bus', description: 'Buses from Indore (77 km) and Khandwa', from: 'Indore', duration: '2.5 hours' }
    ],
    nearbyPlaces: ['Amareshwar Temple', 'Narmada River', 'Siddhanath Temple'],
    photoKeywords: ['omkareshwar-temple', 'narmada-river', 'om-island'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Narmada', 'Madhya Pradesh']
  },
  {
    id: 'kedarnath-jl', name: 'Kedarnath', location: 'Rudraprayag, Uttarakhand', state: 'Uttarakhand',
    coordinates: { lat: 30.7352, lng: 79.0669 }, deity: 'Lord Shiva (Kedareshwar)',
    significance: 'Fifth Jyotirlinga and part of Char Dham. Highest among all Jyotirlingas at 3,583m.',
    description: 'The highest of all 12 Jyotirlingas, also part of the Char Dham circuit. See the Char Dham section for complete details.',
    history: 'Built by the Pandavas. The linga represents the hump of the bull form of Shiva.',
    bestTimeToVisit: 'May to June, September to October', timings: '4:00 AM - 9:00 PM',
    howToReach: [
      { mode: 'trek', description: '16 km trek from Gaurikund', from: 'Gaurikund', duration: '6-8 hours' },
      { mode: 'helicopter', description: 'From Phata/Guptkashi', from: 'Phata', duration: '10 min', cost: '₹5,000-8,000' }
    ],
    photoKeywords: ['kedarnath-temple', 'himalaya'], category: 'jyotirlinga', difficulty: 'hard',
    elevation: '3,583 m', tags: ['Shiva', 'Jyotirlinga', 'Char Dham', 'Trek', 'Uttarakhand']
  },
  {
    id: 'bhimashankar', name: 'Bhimashankar', location: 'Pune, Maharashtra', state: 'Maharashtra',
    coordinates: { lat: 19.0726, lng: 73.5359 }, deity: 'Lord Shiva (Bhimashankar)',
    significance: 'Sixth Jyotirlinga. Source of River Bhima. Located in the Sahyadri ranges amidst dense forests.',
    description: 'Nestled in the Sahyadri hills near Pune, Bhimashankar is surrounded by dense forests that are now a wildlife sanctuary. The Nagara-style architecture and the surrounding biodiversity make it unique.',
    history: 'Legend says demon Bhima, son of Kumbhakarna, battled Shiva here. When defeated, Bhima\'s sweat formed the Bhima River.',
    bestTimeToVisit: 'July to March (monsoon adds beauty)', timings: '5:00 AM - 9:30 PM',
    howToReach: [
      { mode: 'car', description: 'From Pune (110 km) via Manchar', from: 'Pune', duration: '3 hours' },
      { mode: 'trek', description: 'Trekking routes from Khandas village', from: 'Khandas' }
    ],
    nearbyPlaces: ['Bhimashankar Wildlife Sanctuary', 'Gupt Bhimashankar', 'Hanuman Lake'],
    photoKeywords: ['bhimashankar-temple', 'sahyadri'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Maharashtra', 'Sahyadri', 'Wildlife']
  },
  {
    id: 'kashi-vishwanath', name: 'Kashi Vishwanath', location: 'Varanasi, Uttar Pradesh', state: 'Uttar Pradesh',
    coordinates: { lat: 25.3109, lng: 83.0107 }, deity: 'Lord Shiva (Vishwanath)',
    significance: 'Seventh Jyotirlinga. Located in the holiest city Varanasi on the banks of Ganga. The Kashi Vishwanath Corridor was recently rebuilt as a grand temple complex.',
    description: 'The Kashi Vishwanath Temple in Varanasi is one of the most famous Hindu temples. The city of Varanasi (Kashi) itself is considered the spiritual capital of India, and dying here is believed to grant moksha.',
    history: 'The temple has been destroyed and rebuilt multiple times. The current structure was built by Ahilyabai Holkar of Indore in 1780. The iconic gold dome was donated by Maharaja Ranjit Singh in 1835.',
    bestTimeToVisit: 'October to March, Maha Shivaratri, Dev Deepawali', timings: '3:00 AM - 11:00 PM',
    howToReach: [
      { mode: 'flight', description: 'Lal Bahadur Shastri Airport, Varanasi', from: 'Major cities' },
      { mode: 'train', description: 'Varanasi Junction/Varanasi City stations', from: 'Major cities' }
    ],
    nearbyPlaces: ['Ganga Ghats', 'Ganga Aarti at Dashashwamedh', 'Sarnath', 'Manikarnika Ghat', 'Ramnagar Fort'],
    photoKeywords: ['kashi-vishwanath', 'varanasi-ghats', 'ganga-aarti'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Varanasi', 'Ganga', 'Uttar Pradesh']
  },
  {
    id: 'trimbakeshwar', name: 'Trimbakeshwar', location: 'Nashik, Maharashtra', state: 'Maharashtra',
    coordinates: { lat: 19.9400, lng: 73.5300 }, deity: 'Lord Shiva (Trimbakeshwar)',
    significance: 'Eighth Jyotirlinga. Unique linga with three faces representing Brahma, Vishnu, and Shiva. Source of River Godavari.',
    description: 'Located near Nashik at the source of the Godavari River, Trimbakeshwar has a unique Jyotirlinga with three faces representing the Trimurti.',
    history: 'Lord Shiva appeared here to free the area from a drought caused by Sage Gautama\'s curse.',
    bestTimeToVisit: 'October to February, Kumbh Mela (every 12 years)', timings: '5:30 AM - 9:00 PM',
    howToReach: [
      { mode: 'car', description: 'From Nashik (28 km)', from: 'Nashik', duration: '45 min' },
      { mode: 'train', description: 'Nashik Road station (40 km)', from: 'Nashik Road' }
    ],
    nearbyPlaces: ['Brahmagiri Hill', 'Kushavarta Kund', 'Anjaneri Hill', 'Panchavati (Nashik)'],
    photoKeywords: ['trimbakeshwar-temple', 'godavari-source'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Maharashtra', 'Godavari', 'Trimurti']
  },
  {
    id: 'vaidyanath', name: 'Vaidyanath (Baidyanath)', location: 'Deoghar, Jharkhand', state: 'Jharkhand',
    coordinates: { lat: 24.4922, lng: 86.6994 }, deity: 'Lord Shiva (Vaidyanath)',
    significance: 'Ninth Jyotirlinga. Known as the "Lord of Physicians". Also a Shakti Peetha where Sati\'s heart fell.',
    description: 'Baidyanath Dham houses one of the twelve Jyotirlingas and is also a Shakti Peetha. The temple complex has 22 temples.',
    history: 'Ravana is said to have worshipped Lord Shiva here. It is believed that Shiva cured Ravana\'s severed heads here, earning the name Vaidyanath (Lord of Physicians).',
    bestTimeToVisit: 'July-August (Shravan), Maha Shivaratri', timings: '4:00 AM - 9:00 PM',
    howToReach: [
      { mode: 'train', description: 'Baidyanath Dham (Deoghar) station', from: 'Major cities' },
      { mode: 'flight', description: 'Deoghar Airport', from: 'Kolkata/Delhi' }
    ],
    nearbyPlaces: ['Basukinath Temple', 'Naulakha Temple', 'Tapovan', 'Trikut Hills'],
    photoKeywords: ['vaidyanath-temple', 'deoghar'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Shakti Peetha', 'Jharkhand']
  },
  {
    id: 'nageshwar', name: 'Nageshwar', location: 'Dwarka, Gujarat', state: 'Gujarat',
    coordinates: { lat: 22.3378, lng: 68.9679 }, deity: 'Lord Shiva (Nageshwar)',
    significance: 'Tenth Jyotirlinga. Known as "Lord of Serpents". Features one of the tallest Shiva statues (25m).',
    description: 'Located between Dwarka and the Bet Dwarka island, Nageshwar houses a 25-meter tall Shiva statue that is visible from a distance.',
    history: 'Legend says devotee Supriya, imprisoned by demon Daruka, chanted Om Namah Shivaya. Lord Shiva appeared, defeated the demon, and established the Jyotirlinga here.',
    bestTimeToVisit: 'October to March', timings: '6:00 AM - 9:00 PM',
    howToReach: [
      { mode: 'car', description: 'From Dwarka (18 km)', from: 'Dwarka', duration: '30 min' },
      { mode: 'bus', description: 'Buses from Dwarka', from: 'Dwarka' }
    ],
    nearbyPlaces: ['Dwarkadhish Temple', 'Bet Dwarka', 'Rukmini Temple', 'Gomti Ghat'],
    photoKeywords: ['nageshwar-temple', 'dwarka'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Gujarat', 'Dwarka']
  },
  {
    id: 'rameshwaram', name: 'Rameshwaram', location: 'Rameswaram, Tamil Nadu', state: 'Tamil Nadu',
    coordinates: { lat: 9.2876, lng: 79.3129 }, deity: 'Lord Shiva (Ramanathaswamy)',
    significance: 'Eleventh Jyotirlinga. Lord Rama worshipped Shiva here before crossing to Lanka. Also one of the Char Dhams of India.',
    description: 'On Pamban Island, connected by the Pamban Bridge, Rameshwaram\'s Ramanathaswamy Temple is famous for its 1,000-pillar corridor (the longest in India) and 22 sacred wells (theerthams) within the temple.',
    history: 'Lord Rama established this Jyotirlinga to seek blessings before his battle with Ravana in Lanka. Sita made the lingam from sand, and Hanuman brought one from Kailash.',
    bestTimeToVisit: 'October to April', timings: '5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM',
    howToReach: [
      { mode: 'train', description: 'Rameswaram railway station (well connected via Pamban Bridge)', from: 'Chennai/Madurai' },
      { mode: 'flight', description: 'Nearest airport Madurai (163 km)', from: 'Madurai', duration: '3 hours' },
      { mode: 'bus', description: 'Buses from Madurai, Chennai', from: 'Madurai', duration: '4 hours' }
    ],
    nearbyPlaces: ['Adam\'s Bridge (Ram Setu)', 'Dhanushkodi', 'Pamban Bridge', 'Gandhamadhana Parvatham', 'Agni Theertham'],
    photoKeywords: ['rameshwaram-temple', 'pamban-bridge', 'ram-setu'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Rama', 'Tamil Nadu', 'Char Dham']
  },
  {
    id: 'grishneshwar', name: 'Grishneshwar', location: 'Verul, Maharashtra', state: 'Maharashtra',
    coordinates: { lat: 20.0236, lng: 75.1797 }, deity: 'Lord Shiva (Grishneshwar)',
    significance: 'Twelfth and last Jyotirlinga. Located near the world-famous Ellora Caves (UNESCO site).',
    description: 'The smallest of the 12 Jyotirlingas, Grishneshwar is located near the Ellora Caves. The temple showcases exquisite red stone architecture with beautiful carvings.',
    history: 'Named after devotee Ghushmeshwar (or Kusuma). His wife\'s devotion led Lord Shiva to appear as a Jyotirlinga here.',
    bestTimeToVisit: 'October to March', timings: '5:30 AM - 9:30 PM',
    howToReach: [
      { mode: 'car', description: 'From Aurangabad (30 km)', from: 'Aurangabad', duration: '45 min' },
      { mode: 'flight', description: 'Aurangabad Airport (35 km)', from: 'Major cities' },
      { mode: 'train', description: 'Aurangabad railway station (30 km)', from: 'Major cities' }
    ],
    nearbyPlaces: ['Ellora Caves', 'Ajanta Caves', 'Daulatabad Fort', 'Bibi Ka Maqbara'],
    photoKeywords: ['grishneshwar-temple', 'ellora-caves'], category: 'jyotirlinga',
    tags: ['Shiva', 'Jyotirlinga', 'Maharashtra', 'Ellora', 'UNESCO']
  }
];

export const jyotirlingaCircuit = {
  id: 'jyotirlingas',
  name: '12 Jyotirlingas',
  description: 'The twelve sacred self-manifested lingams of Lord Shiva across India.',
  longDescription: 'The 12 Jyotirlingas are the most sacred abodes of Lord Shiva, where he is believed to have appeared as an infinite column of light (Jyoti). These temples are spread across India — from Gujarat to Jharkhand, from Uttarakhand to Tamil Nadu. Visiting all 12 is considered one of the most meritorious pilgrimages in Shaivism.',
  totalPlaces: 12,
  places: jyotirlingaPlaces,
  category: 'jyotirlinga' as const,
  icon: '🔱',
  color: 'from-blue-600 to-indigo-700',
  gradient: 'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
  significance: [
    'Lord Shiva manifested as an infinite column of light at these 12 locations',
    'Covers temples across 8 Indian states',
    'Maharashtra has the most Jyotirlingas (5)',
    'Kedarnath is the highest, Rameshwaram the southernmost',
    'Visiting all 12 is among the holiest pilgrimages in Hinduism'
  ],
  bestSeason: 'October to March (varies by location)',
  estimatedDays: '20-30 days (all 12)',
  estimatedBudget: '₹40,000 - ₹1,00,000 per person'
};
