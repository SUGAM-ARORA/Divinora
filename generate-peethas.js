const fs = require('fs');
const shaktiPeethas = [];
const peethasData = [
  {name: 'Amarnath', loc: 'Kashmir', body: 'Throat', deity: 'Mahamaya'},
  {name: 'Attahas', loc: 'West Bengal', body: 'Lips', deity: 'Phullara'},
  {name: 'Bahula', loc: 'West Bengal', body: 'Left Arm', deity: 'Bahula'},
  {name: 'Bhairavparvat', loc: 'Madhya Pradesh', body: 'Upper Lip', deity: 'Avanti'},
  {name: 'Bhavanipur', loc: 'Bangladesh', body: 'Left Anklet', deity: 'Aparna'},
  {name: 'Chhinnamastika', loc: 'Jharkhand', body: 'Right Foot', deity: 'Chhinnamastika'},
  {name: 'Chandrabhaga', loc: 'Gujarat', body: 'Stomach', deity: 'Chandrabhaga'},
  {name: 'Danteshwari', loc: 'Chhattisgarh', body: 'Teeth', deity: 'Danteshwari'},
  {name: 'Gandaki Chandi', loc: 'Nepal', body: 'Temple', deity: 'Gandaki'},
  {name: 'Goddavari Tir', loc: 'Andhra Pradesh', body: 'Left Cheek', deity: 'Viswamatuka'},
  {name: 'Guhyeshwari', loc: 'Nepal', body: 'Both Knees', deity: 'Mahashira'},
  {name: 'Hinglaj Mata', loc: 'Pakistan', body: 'Brahmarandhra', deity: 'Kottari'},
  {name: 'Jayanti', loc: 'Meghalaya', body: 'Left Thigh', deity: 'Jayanti'},
  {name: 'Jwala Ji', loc: 'Himachal Pradesh', body: 'Tongue', deity: 'Siddhida'},
  {name: 'Kalighat', loc: 'West Bengal', body: 'Right Toes', deity: 'Kalika'},
  {name: 'Kalmadhava', loc: 'Madhya Pradesh', body: 'Left Buttock', deity: 'Kali'},
  {name: 'Kamakhya', loc: 'Assam', body: 'Genitals', deity: 'Kamakhya'},
  {name: 'Kankalitala', loc: 'West Bengal', body: 'Pelvis', deity: 'Devgarbha'},
  {name: 'Kanyakumari', loc: 'Tamil Nadu', body: 'Back', deity: 'Sarvani'},
  {name: 'Karnat', loc: 'Himachal Pradesh', body: 'Both Ears', deity: 'Jayadurga'},
  {name: 'Kireet', loc: 'West Bengal', body: 'Crown', deity: 'Vimala'},
  {name: 'Kurukshetra', loc: 'Haryana', body: 'Ankle Bone', deity: 'Savitri'},
  {name: 'Manibandh', loc: 'Rajasthan', body: 'Wrists', deity: 'Gayatri'},
  {name: 'Mithila', loc: 'Bihar/Nepal', body: 'Left Shoulder', deity: 'Uma'},
  {name: 'Nainativu', loc: 'Sri Lanka', body: 'Silambu', deity: 'Indrakshi'},
  {name: 'Nalhati', loc: 'West Bengal', body: 'Vocal Cord', deity: 'Kalika Tarini'},
  {name: 'Panch Sagar', loc: 'Uttar Pradesh', body: 'Lower Teeth', deity: 'Varahi'},
  {name: 'Prabhas', loc: 'Gujarat', body: 'Stomach', deity: 'Chandrabhaga'},
  {name: 'Prayag', loc: 'Uttar Pradesh', body: 'Fingers', deity: 'Alopi Mata'},
  {name: 'Puri', loc: 'Odisha', body: 'Navel', deity: 'Vimala'},
  {name: 'Ramgiri', loc: 'Uttar Pradesh', body: 'Right Breast', deity: 'Shivaani'},
  {name: 'Ratnavali', loc: 'West Bengal', body: 'Right Shoulder', deity: 'Kumari'},
  {name: 'Shikarpur', loc: 'Bangladesh', body: 'Nose', deity: 'Sugandha'},
  {name: 'Sri Parvat', loc: 'Andhra/Ladakh', body: 'Right Anklet', deity: 'Shri Sundari'},
  {name: 'Sri Sailam', loc: 'Andhra Pradesh', body: 'Neck', deity: 'Mahalaxmi'},
  {name: 'Suchindram', loc: 'Tamil Nadu', body: 'Upper Teeth', deity: 'Narayani'},
  {name: 'Sugandha', loc: 'Bangladesh', body: 'Nose', deity: 'Sunanda'},
  {name: 'Tripura Sundari', loc: 'Tripura', body: 'Right Foot', deity: 'Tripura Sundari'},
  {name: 'Ujjain', loc: 'Madhya Pradesh', body: 'Elbow', deity: 'Mangal Chandi'},
  {name: 'Varanasi', loc: 'Uttar Pradesh', body: 'Earring', deity: 'Vishalakshi'},
  {name: 'Vibhashh', loc: 'West Bengal', body: 'Left Ankle', deity: 'Kapalini'},
  {name: 'Viraja', loc: 'Odisha', body: 'Navel', deity: 'Vimala'},
  {name: 'Vrindavan', loc: 'Uttar Pradesh', body: 'Ringlets of hair', deity: 'Uma'},
  {name: 'Trisrota', loc: 'West Bengal', body: 'Left Leg', deity: 'Bhraamari'},
  {name: 'Jalandhar', loc: 'Punjab', body: 'Left Breast', deity: 'Tripurmalini'},
  {name: 'Vaishno Devi', loc: 'Jammu-Kashmir', body: 'Head', deity: 'Vaishnavi'},
  {name: 'Baidyanath', loc: 'Jharkhand', body: 'Heart', deity: 'Jaya Durga'},
  {name: 'Birbhum', loc: 'West Bengal', body: 'Bone', deity: 'Kalika'},
  {name: 'Kolhapur', loc: 'Maharashtra', body: 'Eyes', deity: 'Mahalakshmi'},
  {name: 'Ambaji', loc: 'Gujarat', body: 'Heart', deity: 'Amba'},
  {name: 'Chamundeshwari', loc: 'Karnataka', body: 'Hair', deity: 'Chamundeshwari'},
  {name: 'Chandi Mandir', loc: 'Chandigarh', body: 'Skin', deity: 'Chandi'}
];

peethasData.forEach((p, i) => {
  shaktiPeethas.push({
    id: p.name.toLowerCase().replace(/ /g, '-').replace(/\//g, '-'),
    name: p.name,
    location: p.loc,
    state: p.loc.split('/')[0],
    deity: p.deity,
    significance: `Body part that fell: ${p.body}`,
    description: `${p.name} is a highly revered Shakti Peetha where Goddess Sati's ${p.body} fell. It is guarded by Lord Shiva in the form of Bhairava.`,
    history: `According to the legendary origin of the Shakti Peethas, Sati self-immolated at the yagna of Daksha. Her ${p.body} landed in ${p.loc}.`,
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM - 8:00 PM',
    howToReach: [
      { mode: 'flight', description: `Fly to the nearest major airport in ${p.loc.split('/')[0]}.` },
      { mode: 'train', description: `Take a train to the main junction near ${p.name}.` }
    ],
    tags: ['Shakti Peetha', 'Goddess', 'Sacred']
  });
});

const theContent = `import { PilgrimageCircuit, PilgrimagePlace } from '../pilgrimage-types';

export const shaktiPeethaPlaces: PilgrimagePlace[] = ${JSON.stringify(shaktiPeethas, null, 2)};

export const shaktiPeethaCircuit: PilgrimageCircuit = {
  id: 'shakti-peethas',
  name: '52 Shakti Peethas',
  description: 'The sacred seats of Adi Shakti where body parts of Goddess Sati fell.',
  longDescription: 'The Shakti Peethas are significant shrines and pilgrimage destinations in Shaktism, the goddess-focused Hindu tradition. According to legend, Goddess Sati self-immolated at her father Daksha\\'s yagna. Shiva carried her body in grief, and Vishnu cut it into 52 pieces with his Sudarshana Chakra to stop Shiva\\'s Tandava. Each spot where a body part or ornament fell became a Shakti Peetha.',
  icon: '🔥',
  region: 'Pan-India & Subcontinent',
  estimatedDays: 'Years (Multiple distinct trips)',
  estimatedBudget: 'Variable by location',
  totalPlaces: 52,
  category: 'shakti-peetha',
  color: 'from-red-500 to-pink-600',
  gradient: 'from-red-500/10 via-pink-500/10 to-rose-500/10',
  bestSeason: 'All year round (Check individual states)',
  significance: [
    'Ultimate pilgrimage for Shaktism',
    'Represents the cosmic power of the Divine Mother',
    'Each has a unique form of Goddess and a corresponding Bhairava (Shiva)',
    'Spans across India, Nepal, Bangladesh, Sri Lanka, and Pakistan'
  ]
};
`;

fs.writeFileSync('lib/data/shakti-peethas.ts', theContent);
console.log('Successfully wrote 52 Shakti Peethas');
