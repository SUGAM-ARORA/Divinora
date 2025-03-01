import { type Religion } from './types';

// Holy Books
export const holyBooks = [
  {
    id: 1,
    name: "The Holy Bible",
    description: "The sacred text of Christianity, containing the Old and New Testaments.",
  },
  {
    id: 2,
    name: "The Holy Quran",
    description: "The central religious text of Islam, believed to be a revelation from Allah.",
  },
  {
    id: 3,
    name: "Bhagavad Gita",
    description: "A 700-verse Hindu scripture that is part of the epic Mahabharata.",
  },
  {
    id: 4,
    name: "Torah",
    description: "The central text of Judaism, comprising the first five books of the Hebrew Bible.",
  },
  {
    id: 5,
    name: "Tripitaka",
    description: "The traditional term for the Buddhist scriptures, the earliest collection of Buddhist teachings.",
  },
  {
    id: 6,
    name: "Guru Granth Sahib",
    description: "The central religious scripture of Sikhism, regarded as the final, sovereign guru.",
  },
];

// Deities
export const deities = [
  {
    id: "shiva",
    name: "Lord Shiva",
    description: "The destroyer and transformer in the Trimurti, known for cosmic dance and deep meditation.",
    attributes: ["Destroyer", "Transformer", "Ascetic", "Yogi", "Nataraja"],
    iconography: "Third eye, crescent moon, Ganga, snake, trishul",
    stories: [
      "Shiva drank the deadly poison Halahala during the churning of the cosmic ocean to save the universe, earning him the name Neelakantha (blue-throated one).",
      "Shiva married Parvati after she performed intense penance to win his love and attention.",
      "Shiva allowed the sacred river Ganga to descend from the heavens through his matted locks to prevent the earth from being destroyed by her force."
    ],
    temples: [
      { name: "Kedarnath Temple", location: "Uttarakhand, India" },
      { name: "Kashi Vishwanath", location: "Varanasi, India" },
      { name: "Brihadeeswara Temple", location: "Thanjavur, India" }
    ],
    mantras: [
      "Om Namah Shivaya",
      "Mahamrityunjaya Mantra",
      "Shiva Panchakshara Stotram"
    ]
  },
  {
    id: "vishnu",
    name: "Lord Vishnu",
    description: "The preserver and protector of the universe, known for his various avatars.",
    attributes: ["Preserver", "Protector", "Sustainer", "All-pervading"],
    iconography: "Four arms, Chakra, Conch, Lotus, Mace",
    incarnations: ["Krishna", "Rama", "Narasimha", "Vamana"],
    stories: [
      "Vishnu took the form of a giant tortoise (Kurma) to support Mount Mandara during the churning of the ocean.",
      "As Vamana, Vishnu reclaimed the three worlds from the demon king Bali with just three steps.",
      "Vishnu sleeps on the cosmic serpent Shesha in the cosmic ocean between cycles of creation."
    ],
    temples: [
      { name: "Tirupati Balaji", location: "Andhra Pradesh, India" },
      { name: "Srirangam Temple", location: "Tamil Nadu, India" },
      { name: "Badrinath Temple", location: "Uttarakhand, India" }
    ],
    mantras: [
      "Om Namo Narayanaya",
      "Vishnu Sahasranamam",
      "Achyutam Keshavam"
    ]
  },
  {
    id: "brahma",
    name: "Lord Brahma",
    description: "The creator of the universe and all beings, master of the Vedas and knowledge.",
    attributes: ["Creator", "Knowledge", "Wisdom", "Vedas"],
    iconography: "Four heads, Four Vedas, Swan vehicle",
    stories: [
      "Brahma emerged from a lotus that grew from Lord Vishnu's navel, hence called Nabhija (navel-born).",
      "Brahma created his daughter Saraswati from his own body, who became the goddess of knowledge and arts.",
      "Brahma lost one of his five heads when he lied to Lord Shiva about seeing the top of a cosmic pillar of light."
    ],
    temples: [
      { name: "Brahma Temple", location: "Pushkar, India" },
      { name: "Brahma Temple", location: "Kumbakonam, India" },
      { name: "Brahma Temple", location: "Khedbrahma, India" }
    ],
    mantras: [
      "Om Brahma Namah",
      "Brahma Gayatri Mantra",
      "Chaturmukha Brahma Stotram"
    ]
  },
  {
    id: "ganesh",
    name: "Lord Ganesha",
    description: "The remover of obstacles and patron of arts and sciences.",
    attributes: ["Wisdom", "Success", "New Beginnings", "Arts"],
    iconography: "Elephant head, Mouse vehicle, Modak",
    stories: [
      "Ganesha was created by Goddess Parvati from turmeric paste to guard her chambers.",
      "Ganesha lost his head in a battle with Lord Shiva, who later replaced it with an elephant's head.",
      "Ganesha wrote the Mahabharata as dictated by sage Vyasa, using his broken tusk as a pen."
    ],
    temples: [
      { name: "Siddhivinayak Temple", location: "Mumbai, India" },
      { name: "Dagdusheth Halwai Ganpati Temple", location: "Pune, India" },
      { name: "Ashtavinayak Temples", location: "Maharashtra, India" }
    ],
    mantras: [
      "Om Gam Ganapataye Namaha",
      "Vakratunda Mahakaya",
      "Ganesha Ashtakam"
    ]
  },
  {
    id: "krishna",
    name: "Lord Krishna",
    description: "The divine incarnation of Vishnu, known for the Bhagavad Gita and his divine play.",
    attributes: ["Divine Love", "Wisdom", "Protection", "Dharma"],
    iconography: "Flute, Peacock feather, Blue complexion",
    stories: [
      "Krishna lifted the Govardhan mountain on his little finger to protect the villagers from Indra's wrath.",
      "Krishna delivered the Bhagavad Gita to Arjuna on the battlefield of Kurukshetra.",
      "As a child, Krishna defeated the serpent Kaliya who was poisoning the waters of the Yamuna river."
    ],
    temples: [
      { name: "Banke Bihari Temple", location: "Vrindavan, India" },
      { name: "Dwarkadhish Temple", location: "Dwarka, India" },
      { name: "ISKCON Temple", location: "Multiple locations worldwide" }
    ],
    mantras: [
      "Hare Krishna Mahamantra",
      "Om Namo Bhagavate Vasudevaya",
      "Govinda Damodara Stotram"
    ]
  },
  {
    id: "hanuman",
    name: "Lord Hanuman",
    description: "The mighty devotee of Lord Rama, symbol of strength and devotion.",
    attributes: ["Devotion", "Strength", "Service", "Celibacy"],
    iconography: "Monkey form, Mace, Mountain",
    stories: [
      "Hanuman leaped across the ocean to Lanka in search of Sita, demonstrating his extraordinary abilities.",
      "Hanuman tore open his chest to show that Rama and Sita resided in his heart, symbolizing his devotion.",
      "Hanuman carried an entire mountain to bring the Sanjeevani herb to save Lakshmana's life."
    ],
    temples: [
      { name: "Hanuman Dhara", location: "Chitrakoot, India" },
      { name: "Sankat Mochan Hanuman Temple", location: "Varanasi, India" },
      { name: "Jakhu Temple", location: "Shimla, India" }
    ],
    mantras: [
      "Hanuman Chalisa",
      "Om Hanumate Namaha",
      "Bajrang Baan"
    ]
  },
];

// Festivals
export const festivals = [
  {
    id: 1,
    name: "Diwali",
    date: "October-November",
    description: "The festival of lights celebrating the victory of light over darkness and good over evil.",
    significance: [
      "Celebrates Lord Rama's return to Ayodhya after defeating Ravana",
      "Honors Goddess Lakshmi, the deity of wealth and prosperity",
      "Symbolizes the spiritual victory of light over darkness"
    ],
    rituals: [
      "Lighting oil lamps and candles",
      "Creating rangoli designs",
      "Exchanging gifts and sweets",
      "Performing Lakshmi Puja"
    ]
  },
  {
    id: 2,
    name: "Holi",
    date: "February-March",
    description: "The festival of colors celebrating the arrival of spring and the triumph of good over evil.",
    significance: [
      "Celebrates the victory of devotee Prahlada over the demoness Holika",
      "Marks the beginning of spring season",
      "Symbolizes the playful love between Radha and Krishna"
    ],
    rituals: [
      "Playing with colored powders and water",
      "Lighting bonfires (Holika Dahan)",
      "Singing and dancing",
      "Sharing special foods like gujiya and thandai"
    ]
  },
  {
    id: 3,
    name: "Navratri",
    date: "September-October",
    description: "Nine nights dedicated to the worship of the divine feminine energy in the form of Goddess Durga.",
    significance: [
      "Honors the nine forms of Goddess Durga",
      "Celebrates the victory of Goddess Durga over the demon Mahishasura",
      "Represents the triumph of good over evil"
    ],
    rituals: [
      "Fasting for nine days",
      "Performing Garba and Dandiya Raas dances",
      "Reciting prayers and mantras",
      "Creating elaborate altars for the goddess"
    ]
  }
];

// Navagrahas
export const navagrahas = [
  {
    id: "surya",
    name: "Surya (Sun)",
    description: "The solar deity, representing the visible form of the divine.",
    ruling_day: "Sunday",
    mantras: ["Om Suryaya Namaha", "Aditya Hridayam"],
    significance: "Represents soul, health, fame, and power.",
    gemstone: "Ruby"
  },
  {
    id: "chandra",
    name: "Chandra (Moon)",
    description: "The lunar deity, governing mind, emotions, and motherhood.",
    ruling_day: "Monday",
    mantras: ["Om Chandraya Namaha", "Chandra Kavacham"],
    significance: "Represents mind, emotions, and nurturing qualities.",
    gemstone: "Pearl"
  },
  {
    id: "mangala",
    name: "Mangala (Mars)",
    description: "The deity of war and guardian of the celestial world.",
    ruling_day: "Tuesday",
    mantras: ["Om Angarakaya Namaha", "Mangala Stotram"],
    significance: "Represents courage, confidence, and energy.",
    gemstone: "Red Coral"
  }
];

// Sacred Stories
export const sacredStories = [
  {
    id: 1,
    title: "Samudra Manthan",
    description: "The churning of the cosmic ocean by devas and asuras, revealing divine treasures and amrita.",
    tradition: "Hinduism",
    era: "Ancient",
    category: "Creation Myths",
    content: [
      "Long ago, the devas (gods) and asuras (demons) decided to churn the cosmic ocean to obtain amrita, the nectar of immortality.",
      "They used Mount Mandara as the churning rod and the serpent Vasuki as the rope. Lord Vishnu took the form of a tortoise (Kurma) to support the mountain.",
      "As they churned, many divine treasures emerged, including Lakshmi (goddess of wealth), Ucchaihshravas (the divine horse), Airavata (the divine elephant), Kamadhenu (the wish-fulfilling cow), and finally, Dhanvantari with the pot of amrita.",
      "When the amrita appeared, the asuras seized it. To prevent them from becoming immortal, Lord Vishnu took the form of Mohini, a beautiful woman, and tricked the asuras into giving her the amrita, which she then distributed only to the devas."
    ],
    morals: [
      "Even opposing forces must sometimes cooperate to achieve great goals",
      "The universe contains both poison and nectar, destruction and creation",
      "Divine intervention maintains cosmic balance and dharma"
    ],
    relatedStories: [
      { title: "The Birth of Goddess Lakshmi", description: "How the goddess of wealth emerged from the churning ocean" },
      { title: "Lord Shiva and Halahala", description: "How Shiva saved the universe by consuming the deadly poison" }
    ]
  },
  {
    id: 2,
    title: "Krishna's Rasleela",
    description: "The divine dance of Lord Krishna with the gopis, symbolizing the soul's longing for divine union.",
    tradition: "Hinduism",
    era: "Dwapara Yuga",
    category: "Divine Play",
    content: [
      "In the beautiful forests of Vrindavan, Lord Krishna would play his enchanting flute under the full moon. The sound was so divine that the gopis (cowherd women) would leave their homes and duties to join him.",
      "Krishna would engage in a divine dance called Rasleela with the gopis. During this dance, each gopi felt that Krishna was dancing with her alone, though he multiplied himself to dance with all of them simultaneously.",
      "This divine play represents the highest form of devotion (bhakti) where the soul (gopi) yearns to unite with the divine (Krishna).",
      "The Rasleela transcends physical attraction and represents the spiritual journey of the individual soul seeking union with the supreme consciousness."
    ],
    morals: [
      "True devotion means surrendering all worldly attachments for divine love",
      "The divine relationship transcends conventional understanding",
      "Spiritual love is the highest form of human experience"
    ],
    relatedStories: [
      { title: "The Hiding of the Gopis' Clothes", description: "Krishna's playful lesson about pride and surrender" },
      { title: "The Story of Radha", description: "The greatest devotee whose love for Krishna exemplifies divine devotion" }
    ]
  },
  {
    id: 3,
    title: "Rama's Exile",
    description: "The story of Lord Rama's 14-year exile and the events leading to the defeat of Ravana.",
    tradition: "Hinduism",
    era: "Treta Yuga",
    category: "Epic",
    content: [
      "King Dasharatha of Ayodhya had four sons: Rama, Lakshmana, Bharata, and Shatrughna. When it was time to crown Rama as the heir, Queen Kaikeyi, influenced by her maid Manthara, asked the king to fulfill two boons he had once promised her.",
      "She demanded that her son Bharata be crowned instead of Rama, and that Rama be exiled to the forest for fourteen years. Bound by his word, the heartbroken king had to agree.",
      "Rama accepted his father's decision without complaint, exemplifying dharma (righteous duty). His wife Sita and brother Lakshmana insisted on accompanying him to the forest.",
      "During their exile, Sita was abducted by the demon king Ravana. With the help of Hanuman and the monkey army, Rama defeated Ravana and rescued Sita, before returning to Ayodhya after completing the fourteen years of exile."
    ],
    morals: [
      "Upholding one's dharma (duty) even in difficult circumstances",
      "The importance of keeping one's word and promises",
      "Victory of good over evil through perseverance and righteous action"
    ],
    relatedStories: [
      { title: "Hanuman's Journey to Lanka", description: "The devotion and bravery of Lord Rama's greatest devotee" },
      { title: "Bharata's Devotion", description: "How Bharata ruled Ayodhya as a regent, keeping Rama's sandals on the throne" }
    ]
  }
];

// Teachings
export const teachings = [
  {
    id: 1,
    title: "Compassion",
    description: "Explore how different religions teach and practice compassion towards all beings.",
    keyPoints: [
      "Compassion as the foundation of spiritual practice",
      "Extending kindness to all living beings",
      "Practical ways to cultivate compassion in daily life",
      "Overcoming obstacles to compassionate action"
    ],
    references: [
      { text: "Karuna (compassion) is the spontaneous feeling of identification with all beings.", source: "Buddhist Teachings" },
      { text: "The wise ones who are compassionate and who observe the law of help, become free from the bonds of rebirth.", source: "Bhagavad Gita 12:3-4" }
    ],
    applications: [
      "Practice of ahimsa (non-violence) in thoughts, words, and actions",
      "Seva (selfless service) to those in need",
      "Meditation practices to develop loving-kindness",
      "Vegetarianism as an expression of compassion for animals"
    ]
  },
  {
    id: 2,
    title: "Peace",
    description: "Discover teachings about inner peace and harmony across religious traditions.",
    keyPoints: [
      "Peace as the natural state of the soul",
      "Practices for cultivating inner tranquility",
      "The relationship between inner peace and world peace",
      "Overcoming mental agitation and restlessness"
    ],
    references: [
      { text: "Peace comes from within. Do not seek it without.", source: "Buddha" },
      { text: "The mind is restless and difficult to restrain, but it is subdued by practice.", source: "Bhagavad Gita 6:35" }
    ],
    applications: [
      "Regular meditation practice",
      "Simplifying one's lifestyle",
      "Practicing contentment and gratitude",
      "Creating peaceful environments in home and community"
    ]
  },
  {
    id: 3,
    title: "Wisdom",
    description: "Learn about the pursuit of wisdom and enlightenment in various faiths.",
    keyPoints: [
      "The distinction between knowledge and wisdom",
      "Paths to spiritual insight and enlightenment",
      "Removing the veils of ignorance",
      "The role of teachers and scriptures in gaining wisdom"
    ],
    references: [
      { text: "Knowledge is knowing that a tomato is a fruit; wisdom is not putting it in a fruit salad.", source: "Common Proverb" },
      { text: "The supreme wisdom is seeing the eternal in the transient.", source: "Upanishads" }
    ],
    applications: [
      "Study of sacred texts with reflection",
      "Seeking guidance from spiritual teachers",
      "Practicing discernment in daily decisions",
      "Contemplative practices to develop insight"
    ]
  }
];

// Histories
export const histories = [
  {
    id: 1,
    title: "Origins",
    description: "Explore the historical origins and development of major world religions.",
    events: [
      { date: "c. 3000 BCE", description: "Early Vedic period begins in the Indian subcontinent" },
      { date: "c. 1500 BCE", description: "Composition of the Rigveda, oldest of the Vedic texts" },
      { date: "c. 800-500 BCE", description: "Upanishadic period, development of core Hindu philosophical concepts" },
      { date: "c. 563-483 BCE", description: "Life of Siddhartha Gautama (the Buddha)" }
    ],
    significance: [
      "Understanding religious origins helps contextualize modern practices",
      "Historical development reveals the evolution of spiritual thought",
      "Recognizing common roots promotes interfaith understanding"
    ],
    artifacts: [
      { name: "Indus Valley Seals", description: "Early artifacts showing possible proto-Shiva figures" },
      { name: "Vedic Manuscripts", description: "Ancient texts recording hymns and rituals" },
      { name: "Buddhist Stupas", description: "Early monuments marking important Buddhist sites" }
    ],
    references: [
      "Archaeological Survey of India findings at Harappa and Mohenjo-daro",
      "Max Müller's translations of the Sacred Books of the East",
      "Romila Thapar's 'Early India: From the Origins to AD 1300'"
    ]
  },
  {
    id: 2,
    title: "Sacred Places",
    description: "Discover the most important religious sites and their significance.",
    events: [
      { date: "c. 400 CE", description: "Construction of earliest surviving Hindu temples" },
      { date: "8th-9th century CE", description: "Building of Borobudur, world's largest Buddhist temple" },
      { date: "1653 CE", description: "Completion of the Taj Mahal, iconic Islamic mausoleum" }
    ],
    significance: [
      "Sacred sites serve as focal points for spiritual energy and devotion",
      "Architectural elements often symbolize cosmic and spiritual principles",
      "Pilgrimage to holy places is a transformative spiritual practice"
    ],
    artifacts: [
      { name: "Khajuraho Temples", description: "Medieval Hindu and Jain temples known for their architecture" },
      { name: "Golden Temple", description: "Holiest gurdwara of Sikhism in Amritsar" },
      { name: "Bodh Gaya", description: "Site of Buddha's enlightenment under the Bodhi tree" }
    ],
    references: [
      "Diana Eck's 'India: A Sacred Geography'",
      "UNESCO World Heritage Site documentation",
      "Stella Kramrisch's 'The Hindu Temple'"
    ]
  },
  {
    id: 3,
    title: "Prophets & Saints",
    description: "Learn about the lives and teachings of religious leaders throughout history.",
    events: [
      { date: "c. 1500 BCE", description: "Traditional period of Moses, prophet of Judaism" },
      { date: "c. 5th century BCE", description: "Life of Mahavira, 24th Tirthankara of Jainism" },
      { date: "1469-1539 CE", description: "Life of Guru Nanak, founder of Sikhism" }
    ],
    significance: [
      "Prophets and saints serve as bridges between humanity and the divine",
      "Their lives exemplify the spiritual ideals of their traditions",
      "Their teachings continue to guide millions of followers today"
    ],
    artifacts: [
      { name: "Guru Granth Sahib", description: "Sacred scripture containing teachings of Sikh Gurus" },
      { name: "Ramakrishna's Relics", description: "Personal items of the 19th century mystic" },
      { name: "Shirdi Sai Baba Temple", description: "Shrine dedicated to the saint revered by Hindus and Muslims" }
    ],
    references: [
      "Autobiography of a Yogi by Paramahansa Yogananda",
      "The Gospel of Sri Ramakrishna",
      "Lives of the Saints by Swami Sivananda"
    ]
  }
];

// Bhakti Videos
export const bhaktiVideos = [
  {
    id: 1,
    title: "Om Namah Shivaya Chanting",
    description: "Peaceful chanting of the sacred Shiva mantra for meditation and spiritual elevation.",
    youtubeId: "mPgMJ9c_GRg",
    channel: "Divine Bhakti",
  },
  {
    id: 2,
    title: "Krishna Bhajan Collection",
    description: "Beautiful collection of Krishna bhajans for devotional inspiration.",
    youtubeId: "u9FwN5GTUQ8",
    channel: "Spiritual Rhythms",
  },
  {
    id: 3,
    title: "Hanuman Chalisa",
    description: "The powerful Hanuman Chalisa recitation with lyrics and meaning.",
    youtubeId: "AETFvQonfV8",
    channel: "Sacred Chants",
  },
];