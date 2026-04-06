import { PilgrimageCircuit, PilgrimagePlace } from '../pilgrimage-types';

export const saptaPuriCircuit: PilgrimageCircuit = {
  id: 'sapta-puri',
  name: 'Sapta Puri',
  description: 'The Seven Holy Cities of liberation (Moksha) in Hinduism.',
  longDescription: 'Sapta Puri refers to the seven holiest cities in India. It is believed that a pilgrimage to these seven sites, or even bathing in their sacred waters, leads to Moksha (liberation from the cycle of birth and death). The cities are: Ayodhya (Rama), Mathura (Krishna), Haridwar (Ganga), Varanasi/Kashi (Shiva), Kanchipuram (Parvati/Shiva), Ujjain/Avantika (Shiva), and Dwarka (Krishna).',
  icon: '🛕',
  region: 'Pan-India',
  estimatedDays: 'Multiple separate trips',
  estimatedBudget: 'Variable depending on location',
  bestSeason: 'Varies generally October to March is best',
  significance: [
    'Provides Moksha (liberation)',
    'Connected to the greatest avatars of Vishnu (Rama, Krishna)',
    'Important centers of ancient learning, culture, and theology',
    'Holds profound importance in Hindu epics'
  ]
};

export const saptaPuriPlaces: PilgrimagePlace[] = [
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    location: 'Uttar Pradesh',
    state: 'Uttar Pradesh',
    deity: 'Lord Rama',
    significance: 'Birthplace of Lord Rama (Ram Janmabhoomi).',
    description: 'Ayodhya, situated on the banks of the Sarayu river, is the ancient capital of the Kosala Kingdom and the birthplace of Lord Rama, the seventh avatar of Vishnu.',
    history: 'A central setting of the epic Ramayana. It is historically one of the most important pilgrimage sites for Vaishnavites.',
    bestTimeToVisit: 'October to March (especially during Diwali or Ram Navami)',
    timings: '6:00 AM - 12:00 PM / 4:00 PM - 9:00 PM',
    howToReach: [
      { mode: 'flight', description: 'Maharishi Valmiki International Airport, Ayodhya.' },
      { mode: 'train', description: 'Ayodhya Junction or Faizabad Junction.' }
    ],
    tags: ['Sapta Puri', 'Lord Rama', 'Uttar Pradesh']
  },
  {
    id: 'mathura',
    name: 'Mathura',
    location: 'Uttar Pradesh',
    state: 'Uttar Pradesh',
    deity: 'Lord Krishna',
    significance: 'Birthplace of Lord Krishna.',
    description: 'Mathura, located on the banks of the Yamuna River, is the epicenter of Braj Bhoomi and the birthplace of Krishna. It is surrounded by other holy sites like Vrindavan and Govardhan.',
    history: 'The Krishna Janmasthan Temple complex marks the prison cell where Krishna was born to Devaki and Vasudeva.',
    bestTimeToVisit: 'August/September (Janmashtami) or February/March (Holi)',
    timings: '5:00 AM - 12:00 PM / 4:00 PM - 8:30 PM',
    howToReach: [
      { mode: 'flight', description: 'Agra Airport (50 km away) or Delhi IGI (150 km).' },
      { mode: 'train', description: 'Mathura Junction is a major railway hub.' }
    ],
    tags: ['Sapta Puri', 'Lord Krishna', 'Yamuna']
  },
  {
    id: 'haridwar',
    name: 'Haridwar (Maya)',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    deity: 'Ganga Mata, Shiva, Vishnu',
    significance: 'Gateway to the Gods; River Ganga enters the plains here.',
    description: 'Haridwar (Gateway to God) is where the sacred Ganges emerges from the Himalayas into the plains. The Har Ki Pauri ghat is globally celebrated for the evening Ganga Aarti.',
    history: 'It is one of the four sites for the Kumbh Mela, occurring every 12 years.',
    bestTimeToVisit: 'February to March / August to October',
    timings: 'Open 24 hours, Evening Aarti at sunset (~6:00 PM - 7:30 PM)',
    howToReach: [
      { mode: 'flight', description: 'Jolly Grant Airport, Dehradun (40 km away).' },
      { mode: 'train', description: 'Haridwar Junction has excellent rail connectivity.' }
    ],
    tags: ['Sapta Puri', 'Ganga', 'Kumbh Mela']
  },
  {
    id: 'varanasi',
    name: 'Varanasi (Kashi)',
    location: 'Uttar Pradesh',
    state: 'Uttar Pradesh',
    deity: 'Lord Shiva',
    significance: 'The City of Light; dying here brings liberation.',
    description: 'Varanasi, also known as Kashi or Banaras, is the oldest living city in the world. It is the spiritual capital of India, revered for its immense network of ghats along the Ganges.',
    history: 'Legend says it was founded by Lord Shiva himself. It contains one of the 12 Jyotirlingas (Kashi Vishwanath).',
    bestTimeToVisit: 'October to March',
    timings: 'Open 24 hours (Ghats). Temples have specific timings.',
    howToReach: [
      { mode: 'flight', description: 'Lal Bahadur Shastri International Airport.' },
      { mode: 'train', description: 'Varanasi Junction.' }
    ],
    tags: ['Sapta Puri', 'Lord Shiva', 'Ganga', 'Ghats']
  },
  {
    id: 'kanchipuram',
    name: 'Kanchipuram (Kanchi)',
    location: 'Tamil Nadu',
    state: 'Tamil Nadu',
    deity: 'Shiva & Vishnu',
    significance: 'City of Thousand Temples.',
    description: 'Kanchi is a major pilgrimage center for both Shaivites and Vaishnavites. It is famous for its grand Dravidian architecture and the Ekambareswarar Temple (representing Earth element).',
    history: 'Capital of the Pallava dynasty, it was a major seat of Tamil learning and culture.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM - 12:30 PM / 4:00 PM - 8:30 PM',
    howToReach: [
      { mode: 'flight', description: 'Chennai International Airport (75 km away).' },
      { mode: 'train', description: 'Kanchipuram Railway Station or nearby Arakkonam.' }
    ],
    tags: ['Sapta Puri', 'South India', 'Shiva', 'Vishnu']
  },
  {
    id: 'ujjain',
    name: 'Ujjain (Avantika)',
    location: 'Madhya Pradesh',
    state: 'Madhya Pradesh',
    deity: 'Lord Shiva (Mahakaleshwar)',
    significance: 'Home to Mahakaleshwar Jyotirlinga; located on river Shipra.',
    description: 'Ujjain is an ancient city situated on the eastern bank of the Kshipra River. It is famous for the Mahakaleshwar Jyotirlinga, the only south-facing (Dakshinamukhi) Shiva lingam.',
    history: 'Also renowned as the prime meridian for ancient Hindu astronomers and one of the sites for the Kumbh Mela.',
    bestTimeToVisit: 'October to March',
    timings: '4:00 AM (Bhasma Aarti) to 11:00 PM',
    howToReach: [
      { mode: 'flight', description: 'Devi Ahilya Bai Holkar Airport, Indore (55 km away).' },
      { mode: 'train', description: 'Ujjain Junction.' }
    ],
    tags: ['Sapta Puri', 'Jyotirlinga', 'Madhya Pradesh']
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    location: 'Gujarat',
    state: 'Gujarat',
    deity: 'Lord Krishna (Dwarkadhish)',
    significance: 'The ancient kingdom of Lord Krishna.',
    description: 'Dwarka is located in the westernmost peninsula of Gujarat on the Arabian Sea coast. It is part of the Char Dham yatra as well as Sapta Puri.',
    history: 'According to the Mahabharata, the ancient city was built by Krishna and later submerged under the sea after he departed the mortal world.',
    bestTimeToVisit: 'October to March',
    timings: '6:30 AM - 1:00 PM / 5:00 PM - 9:30 PM',
    howToReach: [
      { mode: 'flight', description: 'Jamnagar Airport (137 km) or Porbandar.' },
      { mode: 'train', description: 'Dwarka Railway Station.' }
    ],
    tags: ['Sapta Puri', 'Char Dham', 'Lord Krishna']
  }
];
