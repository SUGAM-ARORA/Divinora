import { IndianState } from '../pilgrimage-types';

export const indianStates: IndianState[] = [
  {
    id: 'uttarakhand', name: 'Uttarakhand', capital: 'Dehradun', region: 'north',
    description: 'Dev Bhoomi — Land of the Gods. Home to Char Dham, sacred rivers, and ancient temples in the Himalayas.',
    highlights: ['Char Dham Yatra', 'Haridwar & Rishikesh', 'Valley of Flowers', 'Panch Kedar', 'Panch Prayag'],
    famousTemples: [
      { name: 'Kedarnath', deity: 'Lord Shiva', type: 'Jyotirlinga / Char Dham', location: 'Rudraprayag' },
      { name: 'Badrinath', deity: 'Lord Vishnu', type: 'Char Dham / Divya Desam', location: 'Chamoli' },
      { name: 'Gangotri', deity: 'Goddess Ganga', type: 'Char Dham', location: 'Uttarkashi' },
      { name: 'Yamunotri', deity: 'Goddess Yamuna', type: 'Char Dham', location: 'Uttarkashi' },
      { name: 'Tungnath', deity: 'Lord Shiva', type: 'Highest Shiva Temple', location: 'Rudraprayag' }
    ],
    sacredRivers: ['Ganga', 'Yamuna', 'Alaknanda', 'Mandakini', 'Bhagirathi'],
    famousTreks: ['Kedarnath Trek', 'Valley of Flowers', 'Roopkund', 'Chopta-Tungnath', 'Hemkund Sahib']
  },
  {
    id: 'gujarat', name: 'Gujarat', capital: 'Gandhinagar', region: 'west',
    description: 'Land of legends — from Somnath to Dwarka, Gujarat houses ancient temples and the legacy of Lord Krishna.',
    highlights: ['Somnath Jyotirlinga', 'Dwarkadhish Temple', 'Ambaji Shakti Peetha', 'Girnar Hill', 'Palitana Jain Temples'],
    famousTemples: [
      { name: 'Somnath', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Veraval' },
      { name: 'Dwarkadhish', deity: 'Lord Krishna', type: 'Char Dham', location: 'Dwarka' },
      { name: 'Nageshwar', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Dwarka' },
      { name: 'Ambaji', deity: 'Goddess Amba', type: 'Shakti Peetha', location: 'Banaskantha' },
      { name: 'Akshardham', deity: 'Swaminarayan', type: 'Modern Temple', location: 'Gandhinagar' }
    ],
    sacredRivers: ['Sabarmati', 'Narmada', 'Tapi'],
    famousTreks: ['Girnar Parikrama', 'Pavagadh Hill']
  },
  {
    id: 'maharashtra', name: 'Maharashtra', capital: 'Mumbai', region: 'west',
    description: 'Home to 5 Jyotirlingas (most in any state), Ashtavinayak circuit, and UNESCO world heritage cave temples.',
    highlights: ['5 Jyotirlingas', 'Ashtavinayak Circuit', 'Shirdi Sai Baba', 'Ajanta-Ellora Caves', 'Pandharpur'],
    famousTemples: [
      { name: 'Trimbakeshwar', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Nashik' },
      { name: 'Bhimashankar', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Pune' },
      { name: 'Grishneshwar', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Aurangabad' },
      { name: 'Shirdi Sai Baba', deity: 'Sai Baba', type: 'Sacred Shrine', location: 'Shirdi' },
      { name: 'Siddhivinayak', deity: 'Lord Ganesh', type: 'Famous Ganesh Temple', location: 'Mumbai' },
      { name: 'Mahalakshmi Temple', deity: 'Goddess Lakshmi', type: 'Shakti Peetha', location: 'Kolhapur' }
    ],
    famousTreks: ['Bhimashankar Trek', 'Harishchandragad', 'Kalsubai Peak']
  },
  {
    id: 'tamil-nadu', name: 'Tamil Nadu', capital: 'Chennai', region: 'south',
    description: 'The temple heartland of India. Dravidian architecture, 108 Divya Desams, and ancient Chola temples.',
    highlights: ['Rameshwaram Jyotirlinga', 'Meenakshi Temple', 'Chola Temples (UNESCO)', 'Kanchipuram Temples', 'Tiruvannamalai'],
    famousTemples: [
      { name: 'Ramanathaswamy', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Rameswaram' },
      { name: 'Meenakshi Amman', deity: 'Goddess Meenakshi', type: 'Great Temple', location: 'Madurai' },
      { name: 'Brihadeeswara', deity: 'Lord Shiva', type: 'UNESCO / Chola Temple', location: 'Thanjavur' },
      { name: 'Ranganathaswamy', deity: 'Lord Vishnu', type: 'Largest Temple in India', location: 'Srirangam' },
      { name: 'Arunachaleswarar', deity: 'Lord Shiva', type: 'Pancha Bhuta Stalam', location: 'Tiruvannamalai' }
    ],
    sacredRivers: ['Kaveri', 'Vaigai', 'Tamiraparani']
  },
  {
    id: 'uttar-pradesh', name: 'Uttar Pradesh', capital: 'Lucknow', region: 'north',
    description: 'Spiritual capital of India. Home to Varanasi, Ayodhya, Mathura-Vrindavan, and Prayagraj (Kumbh Mela).',
    highlights: ['Kashi Vishwanath', 'Ayodhya Ram Mandir', 'Mathura-Vrindavan', 'Prayagraj Sangam', 'Vindhyachal Devi'],
    famousTemples: [
      { name: 'Kashi Vishwanath', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Varanasi' },
      { name: 'Ram Janmabhoomi', deity: 'Lord Rama', type: 'Sacred Birthplace', location: 'Ayodhya' },
      { name: 'Krishna Janmabhoomi', deity: 'Lord Krishna', type: 'Sacred Birthplace', location: 'Mathura' },
      { name: 'Banke Bihari', deity: 'Lord Krishna', type: 'Famous Temple', location: 'Vrindavan' },
      { name: 'Vindhyavasini Devi', deity: 'Goddess Vindhyavasini', type: 'Shakti Peetha', location: 'Mirzapur' }
    ],
    sacredRivers: ['Ganga', 'Yamuna', 'Saraswati (confluence at Prayagraj)']
  },
  {
    id: 'jammu-kashmir', name: 'Jammu & Kashmir', capital: 'Srinagar', region: 'north',
    description: 'Home to Vaishno Devi and Amarnath — two of the most visited sacred shrines. Crown of India\'s spiritual geography.',
    highlights: ['Vaishno Devi', 'Amarnath Yatra', 'Shankaracharya Temple', 'Kheer Bhawani', 'Raghunath Temple'],
    famousTemples: [
      { name: 'Vaishno Devi', deity: 'Mata Vaishno Devi', type: 'Sacred Cave / Shakti Peetha', location: 'Katra' },
      { name: 'Amarnath Cave', deity: 'Lord Shiva (Ice Lingam)', type: 'Sacred Cave', location: 'Anantnag' },
      { name: 'Shankaracharya Temple', deity: 'Lord Shiva', type: 'Ancient Hilltop Temple', location: 'Srinagar' },
      { name: 'Raghunath Temple', deity: 'Lord Rama', type: 'Historic Temple Complex', location: 'Jammu' }
    ],
    famousTreks: ['Vaishno Devi Trek', 'Amarnath Yatra', 'Great Lakes Trek']
  },
  {
    id: 'madhya-pradesh', name: 'Madhya Pradesh', capital: 'Bhopal', region: 'central',
    description: 'Heart of India with two Jyotirlingas, Khajuraho temples, and the sacred city of Ujjain.',
    highlights: ['Mahakaleshwar (Ujjain)', 'Omkareshwar', 'Khajuraho Temples', 'Sanchi Stupa', 'Orchha Temples'],
    famousTemples: [
      { name: 'Mahakaleshwar', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Ujjain' },
      { name: 'Omkareshwar', deity: 'Lord Shiva', type: 'Jyotirlinga', location: 'Khandwa' },
      { name: 'Khajuraho Temples', deity: 'Various', type: 'UNESCO Heritage', location: 'Chhatarpur' },
      { name: 'Sanchi Stupa', deity: 'Buddha', type: 'UNESCO / Buddhist Site', location: 'Raisen' }
    ],
    sacredRivers: ['Narmada', 'Shipra', 'Betwa']
  },
  {
    id: 'andhra-pradesh', name: 'Andhra Pradesh', capital: 'Amaravati', region: 'south',
    description: 'Home to the world\'s richest temple (Tirupati) and the Mallikarjuna Jyotirlinga.',
    highlights: ['Tirupati Balaji', 'Srisailam (Jyotirlinga + Shakti Peetha)', 'Amaravati Stupa', 'Simhachalam'],
    famousTemples: [
      { name: 'Tirumala Tirupati Balaji', deity: 'Lord Venkateswara', type: 'Richest Temple in the World', location: 'Tirupati' },
      { name: 'Mallikarjuna', deity: 'Lord Shiva', type: 'Jyotirlinga + Shakti Peetha', location: 'Srisailam' },
      { name: 'Simhachalam', deity: 'Lord Narasimha', type: 'Vishnu Temple', location: 'Visakhapatnam' }
    ]
  },
  {
    id: 'jharkhand', name: 'Jharkhand', capital: 'Ranchi', region: 'east',
    description: 'Home to Baidyanath Dham — one of the 12 Jyotirlingas and an important Shakti Peetha.',
    highlights: ['Baidyanath Dham', 'Parasnath Jain Temple', 'Deoghar Sacred City'],
    famousTemples: [
      { name: 'Baidyanath Dham', deity: 'Lord Shiva', type: 'Jyotirlinga + Shakti Peetha', location: 'Deoghar' },
      { name: 'Parasnath', deity: 'Parasnath', type: 'Jain Pilgrimage', location: 'Giridih' }
    ]
  },
  {
    id: 'rajasthan', name: 'Rajasthan', capital: 'Jaipur', region: 'west',
    description: 'Desert state with grand temples, the only Brahma temple at Pushkar, and Dilwara Jain temples.',
    highlights: ['Pushkar (only Brahma Temple)', 'Dilwara Jain Temples', 'Karni Mata (Deshnoke)', 'Eklingji', 'Ranakpur'],
    famousTemples: [
      { name: 'Brahma Temple', deity: 'Lord Brahma', type: 'Only Brahma Temple', location: 'Pushkar' },
      { name: 'Dilwara Temples', deity: 'Jain Tirthankaras', type: 'Jain Masterpiece', location: 'Mount Abu' },
      { name: 'Karni Mata', deity: 'Karni Mata', type: 'Rat Temple', location: 'Deshnoke' },
      { name: 'Eklingji Temple', deity: 'Lord Shiva', type: 'Royal Temple', location: 'Udaipur' }
    ]
  },
  {
    id: 'karnataka', name: 'Karnataka', capital: 'Bengaluru', region: 'south',
    description: 'Diverse spiritual heritage — from Murudeshwar Shiva to Dharmasthala, Hampi ruins to Shravanabelagola.',
    highlights: ['Hampi (UNESCO)', 'Murudeshwar', 'Dharmasthala', 'Kukke Subramanya', 'Gokarna'],
    famousTemples: [
      { name: 'Murudeshwar', deity: 'Lord Shiva', type: 'Tallest Shiva Statue', location: 'Uttara Kannada' },
      { name: 'Dharmasthala', deity: 'Lord Shiva/Manjunatha', type: 'Sacred Town', location: 'Dakshina Kannada' },
      { name: 'Hampi Virupaksha', deity: 'Lord Shiva', type: 'UNESCO Heritage', location: 'Hampi' },
      { name: 'Shravanabelagola', deity: 'Lord Bahubali', type: 'Jain Holy Site', location: 'Hassan' },
      { name: 'Kukke Subramanya', deity: 'Lord Subramanya', type: 'Serpent Worship', location: 'Dakshina Kannada' }
    ]
  },
  {
    id: 'kerala', name: 'Kerala', capital: 'Thiruvananthapuram', region: 'south',
    description: 'God\'s Own Country with Sabarimala, Padmanabhaswamy, and ancient temple traditions.',
    highlights: ['Sabarimala (Ayyappa)', 'Padmanabhaswamy', 'Guruvayur Krishna', 'Chottanikkara Devi'],
    famousTemples: [
      { name: 'Sabarimala', deity: 'Lord Ayyappa', type: 'Mountain Pilgrimage', location: 'Pathanamthitta' },
      { name: 'Padmanabhaswamy', deity: 'Lord Vishnu', type: 'Richest Temple (by treasure)', location: 'Thiruvananthapuram' },
      { name: 'Guruvayur', deity: 'Lord Krishna', type: 'Famous Krishna Temple', location: 'Thrissur' }
    ],
    famousTreks: ['Sabarimala Trek']
  },
  {
    id: 'west-bengal', name: 'West Bengal', capital: 'Kolkata', region: 'east',
    description: 'Spiritual seat of Shakti worship. Kalighat, Tarapith, Dakshineswar — the core of tantric traditions.',
    highlights: ['Kalighat Kali Temple', 'Dakshineswar', 'Tarapith', 'Belur Math', 'Mayapur ISKCON'],
    famousTemples: [
      { name: 'Kalighat', deity: 'Goddess Kali', type: 'Shakti Peetha', location: 'Kolkata' },
      { name: 'Dakshineswar', deity: 'Goddess Kali', type: 'Famous Temple / Ramakrishna', location: 'Kolkata' },
      { name: 'Tarapith', deity: 'Goddess Tara', type: 'Shakti Peetha / Tantric Center', location: 'Birbhum' },
      { name: 'Belur Math', deity: 'Ramakrishna', type: 'Spiritual HQ', location: 'Howrah' }
    ]
  },
  {
    id: 'odisha', name: 'Odisha', capital: 'Bhubaneswar', region: 'east',
    description: 'Temple city of India with Jagannath Puri (Char Dham), Konark Sun Temple (UNESCO), and Lingaraj.',
    highlights: ['Jagannath Puri', 'Konark Sun Temple', 'Lingaraj Temple', 'Chilika Lake'],
    famousTemples: [
      { name: 'Jagannath Temple', deity: 'Lord Jagannath', type: 'Char Dham', location: 'Puri' },
      { name: 'Konark Sun Temple', deity: 'Surya Dev', type: 'UNESCO Heritage', location: 'Konark' },
      { name: 'Lingaraj Temple', deity: 'Lord Shiva', type: 'Ancient Temple', location: 'Bhubaneswar' }
    ]
  }
];
