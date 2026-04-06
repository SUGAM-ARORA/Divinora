export type Deity = {
  id: string;
  name: string;
  avatarUrl: string; // the 3d model image
  domain: string; // e.g. "Preserver", "Destroyer"
  mantra: string; // sacred chant
  description: string;
  forms: string[];
  vehicle: string;
  associatedTemples: string[];
  festivals: string[];
};

export const hinduDeities: Deity[] = [
  {
    id: "shiva",
    name: "Lord Shiva",
    avatarUrl: "/deities/shiva.png",
    domain: "The Destroyer & Transformer",
    mantra: "Om Namah Shivaya",
    description: "Shiva is the Supreme Being in Shaivism. He is the cosmic dancer (Nataraja) who destroys the universe to recreate it. Meditating on Kailash, he is the ultimate ascetic and the patron of yoga and arts.",
    forms: ["Mahadeva", "Nataraja", "Bhairava", "Dakshinamurthy", "Ardhanarishvara"],
    vehicle: "Nandi (The Bull)",
    associatedTemples: ["12 Jyotirlingas", "Kedarnath", "Kashi Vishwanath", "Amarnath"],
    festivals: ["Maha Shivaratri", "Shravan Maad"]
  },
  {
    id: "vishnu",
    name: "Lord Vishnu",
    avatarUrl: "/deities/vishnu.png",
    domain: "The Preserver & Protector",
    mantra: "Om Namo Bhagavate Vasudevaya",
    description: "Vishnu is the preserver of the universe, balancing the cosmic forces of creation and destruction. He descends to earth in various avatars (Dashavatara) whenever dharma is threatened by adharma (evil).",
    forms: ["Rama", "Krishna", "Narasimha", "Venkateshwara", "Jagannatha"],
    vehicle: "Garuda (The Divine Eagle)",
    associatedTemples: ["Badrinath", "Jagannath Puri", "Tirupati Balaji", "Ranganathaswamy"],
    festivals: ["Janmashtami", "Ram Navami", "Diwali", "Vaikuntha Ekadashi"]
  },
  {
    id: "durga",
    name: "Goddess Durga / Shakti",
    avatarUrl: "/deities/durga.png",
    domain: "The Divine Mother & Warrior",
    mantra: "Om Dum Durgayei Namaha",
    description: "Durga is the principal form of the Mother Goddess. She represents the divine radiant energy (Shakti) that overcomes evil and protects the righteous. She was created by the combined anger of all the gods to slay the demon Mahishasura.",
    forms: ["Kali", "Parvati", "Saraswati", "Lakshmi", "Navadurga", "Mahakali"],
    vehicle: "Dawon (The Lion / Tiger)",
    associatedTemples: ["52 Shakti Peethas", "Vaishno Devi", "Kamakhya Temple", "Kalighat"],
    festivals: ["Navaratri", "Durga Puja", "Vasant Navaratri"]
  },
  {
    id: "ganesha",
    name: "Lord Ganesha",
    avatarUrl: "/deities/ganesha.png",
    domain: "Remover of Obstacles",
    mantra: "Om Gam Ganapataye Namaha",
    description: "Ganesha is the elephant-headed deity widely revered as the remover of obstacles, the patron of arts and sciences, and the deva of intellect and wisdom. He is honored at the beginning of rites and ceremonies.",
    forms: ["Vighnaharta", "Vinayaka", "Ganapati", "Ekadanta", "Lambodara"],
    vehicle: "Mooshika (The Mouse)",
    associatedTemples: ["Ashtavinayaka Temples", "Siddhivinayak Temple", "Dagdusheth Halwai"],
    festivals: ["Ganesh Chaturthi", "Ganesh Jayanti"]
  },
  {
    id: "krishna",
    name: "Lord Krishna",
    avatarUrl: "/deities/krishna.png",
    domain: "The Supreme Lord of Love & Compassion",
    mantra: "Om Namo Bhagavate Vasudevaya",
    description: "Krishna is the eighth avatar of Vishnu and a supreme deity in his own right. He is the central figure of the Mahabharata, the Bhagavad Gita, and the Bhagavata Purana. Known for his divine flute, love for Radha, and philosophical teachings.",
    forms: ["Bala Krishna", "Gopala", "Madhava", "Govinda", "Jagannatha"],
    vehicle: "Garuda (as Vishnu)",
    associatedTemples: ["Dwarkadhish Temple", "Banke Bihari, Vrindavan", "Prem Mandir", "Sri Krishna Janmabhoomi"],
    festivals: ["Janmashtami", "Holi", "Govardhan Puja"]
  },
  {
    id: "hanuman",
    name: "Lord Hanuman",
    avatarUrl: "/deities/hanuman.png",
    domain: "God of Devotion & Strength",
    mantra: "Om Hanumate Namaha",
    description: "Hanuman is a Vanara companion of Lord Rama, known for his unwavering devotion, immense strength, and celibacy. He is the central figure in the Ramayana and is revered as a symbol of strength and energy.",
    forms: ["Panchamukhi", "Maruti", "Bajrangbali", "Anjaneya"],
    vehicle: "No specific vehicle (He flies)",
    associatedTemples: ["Sankat Mochan, Varanasi", "Hanumangarhi, Ayodhya", "Salasar Balaji", "Mehandipur Balaji"],
    festivals: ["Hanuman Jayanti", "Diwali (Choti)"]
  },
  {
    id: "lakshmi",
    name: "Goddess Lakshmi",
    avatarUrl: "/deities/lakshmi.png",
    domain: "Goddess of Wealth & Prosperity",
    mantra: "Om Shreem Mahalakshmiyei Namaha",
    description: "Lakshmi is the Goddess of wealth, fortune, power, beauty, and prosperity. She is the consort of Lord Vishnu and accompanies him whenever he descends to earth in his avatar forms.",
    forms: ["Ashta Lakshmi (8 forms)", "Sita", "Radha", "Rukmini", "Padmavati"],
    vehicle: "Uluka (The White Owl)",
    associatedTemples: ["Mahalakshmi Temple, Kolhapur", "Ashtalakshmi Temple, Chennai", "Sripuram Golden Temple"],
    festivals: ["Diwali", "Sharad Purnima", "Varalakshmi Vratam"]
  },
  {
    id: "saraswati",
    name: "Goddess Saraswati",
    avatarUrl: "/deities/saraswati.png",
    domain: "Goddess of Knowledge & Arts",
    mantra: "Om Aim Saraswatyai Namaha",
    description: "Saraswati is the Goddess of knowledge, music, arts, wisdom, and learning. She is the consort of Lord Brahma and is revered by scholars, students, and artists. She is seen dressed in pure white, riding a swan.",
    forms: ["Savitri", "Gayatri", "Brahmani", "Vani"],
    vehicle: "Hamsa (The White Swan) & Peacock",
    associatedTemples: ["Saraswati Temple, Pushkar", "Basara Saraswati Temple", "Sharada Peeth"],
    festivals: ["Vasant Panchami", "Navaratri (Saraswati Puja)"]
  }
];
