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
    stories: ["Drinking of poison", "Marriage to Parvati", "Ganga's descent"],
  },
  {
    id: "vishnu",
    name: "Lord Vishnu",
    description: "The preserver and protector of the universe, known for his various avatars.",
    attributes: ["Preserver", "Protector", "Sustainer", "All-pervading"],
    iconography: "Four arms, Chakra, Conch, Lotus, Mace",
    incarnations: ["Krishna", "Rama", "Narasimha", "Vamana"],
  },
  {
    id: "brahma",
    name: "Lord Brahma",
    description: "The creator of the universe and all beings, master of the Vedas and knowledge.",
    attributes: ["Creator", "Knowledge", "Wisdom", "Vedas"],
    iconography: "Four heads, Four Vedas, Swan vehicle",
  },
  {
    id: "ganesh",
    name: "Lord Ganesha",
    description: "The remover of obstacles and patron of arts and sciences.",
    attributes: ["Wisdom", "Success", "New Beginnings", "Arts"],
    iconography: "Elephant head, Mouse vehicle, Modak",
  },
  {
    id: "krishna",
    name: "Lord Krishna",
    description: "The divine incarnation of Vishnu, known for the Bhagavad Gita and his divine play.",
    attributes: ["Divine Love", "Wisdom", "Protection", "Dharma"],
    iconography: "Flute, Peacock feather, Blue complexion",
  },
  {
    id: "hanuman",
    name: "Lord Hanuman",
    description: "The mighty devotee of Lord Rama, symbol of strength and devotion.",
    attributes: ["Devotion", "Strength", "Service", "Celibacy"],
    iconography: "Monkey form, Mace, Mountain",
  },
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
  },
  {
    id: 2,
    title: "Krishna's Rasleela",
    description: "The divine dance of Lord Krishna with the gopis, symbolizing the soul's longing for divine union.",
    tradition: "Hinduism",
    era: "Dwapara Yuga",
    category: "Divine Play",
  },
  {
    id: 3,
    title: "Rama's Exile",
    description: "The story of Lord Rama's 14-year exile and the events leading to the defeat of Ravana.",
    tradition: "Hinduism",
    era: "Treta Yuga",
    category: "Epic",
  },
  {
    id: 4,
    title: "Moses and the Exodus",
    description: "The liberation of the Israelites from Egyptian slavery through divine intervention.",
    tradition: "Judaism",
    era: "Ancient",
    category: "Liberation",
  },
  {
    id: 5,
    title: "The Night Journey",
    description: "Prophet Muhammad's miraculous journey from Mecca to Jerusalem and ascension to heaven.",
    tradition: "Islam",
    era: "7th Century CE",
    category: "Miraculous Journey",
  },
  {
    id: 6,
    title: "Buddha's Enlightenment",
    description: "Siddhartha Gautama's journey to enlightenment under the Bodhi tree.",
    tradition: "Buddhism",
    era: "5th Century BCE",
    category: "Enlightenment",
  },
];

// Teachings
export const teachings = [
  {
    id: 1,
    title: "Compassion",
    description: "Explore how different religions teach and practice compassion towards all beings.",
  },
  {
    id: 2,
    title: "Peace",
    description: "Discover teachings about inner peace and harmony across religious traditions.",
  },
  {
    id: 3,
    title: "Wisdom",
    description: "Learn about the pursuit of wisdom and enlightenment in various faiths.",
  },
  {
    id: 4,
    title: "Love",
    description: "Understanding divine love and its expression in different religious contexts.",
  },
  {
    id: 5,
    title: "Justice",
    description: "Explore religious perspectives on justice, fairness, and moral conduct.",
  },
  {
    id: 6,
    title: "Service",
    description: "Learn about the importance of serving others in various religious traditions.",
  },
];

// Histories
export const histories = [
  {
    id: 1,
    title: "Origins",
    description: "Explore the historical origins and development of major world religions.",
  },
  {
    id: 2,
    title: "Sacred Places",
    description: "Discover the most important religious sites and their significance.",
  },
  {
    id: 3,
    title: "Prophets & Saints",
    description: "Learn about the lives and teachings of religious leaders throughout history.",
  },
  {
    id: 4,
    title: "Religious Art",
    description: "Explore the rich artistic traditions associated with different faiths.",
  },
  {
    id: 5,
    title: "Traditions",
    description: "Understanding the rituals and practices that shape religious life.",
  },
  {
    id: 6,
    title: "Modern Impact",
    description: "Examine the influence of religions on contemporary society and culture.",
  },
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

export const festivals = [
  {
    id: 1,
    name: "Diwali",
    date: "November 12, 2024",
    description: "The festival of lights, symbolizing the victory of light over darkness.",
    significance: [
      "Marks Lord Rama’s return to Ayodhya after defeating Ravana.",
      "Represents spiritual enlightenment and victory over ignorance.",
    ],
    rituals: [
      "Lighting diyas and candles in homes.",
      "Worship of Goddess Lakshmi for prosperity.",
      "Bursting fireworks to celebrate joy and victory.",
    ],
  },
  {
    id: 2,
    name: "Ramadan",
    date: "March 10 - April 9, 2024",
    description: "The holy month of fasting, prayer, and reflection in Islam.",
    significance: [
      "Commemorates the first revelation of the Quran to Prophet Muhammad.",
      "A time for spiritual reflection and increased devotion.",
    ],
    rituals: [
      "Fasting from dawn to sunset (Sawm).",
      "Offering special Taraweeh prayers.",
      "Breaking fast with dates and a meal (Iftar).",
    ],
  },
  {
    id: 3,
    name: "Christmas",
    date: "December 25, 2024",
    description: "Celebration of the birth of Jesus Christ in Christianity.",
    significance: [
      "Marks the birth of Jesus Christ, the Son of God.",
      "Symbolizes love, joy, and the spirit of giving.",
    ],
    rituals: [
      "Attending Midnight Mass at churches.",
      "Decorating Christmas trees and homes.",
      "Exchanging gifts and sharing festive meals.",
    ],
  },
  {
    id: 4,
    name: "Hanukkah",
    date: "December 25 - January 2, 2025",
    description: "The Jewish festival of lights celebrating the rededication of the Temple.",
    significance: [
      "Commemorates the miracle of the Temple’s oil lasting eight days.",
      "A celebration of faith and perseverance.",
    ],
    rituals: [
      "Lighting the menorah for eight nights.",
      "Reciting blessings and prayers.",
      "Eating fried foods like latkes and sufganiyot.",
    ],
  },
  {
    id: 5,
    name: "Vesak",
    date: "May 23, 2024",
    description: "The most important Buddhist festival, marking Buddha’s birth, enlightenment, and passing.",
    significance: [
      "Celebrates the life and teachings of Buddha.",
      "Encourages mindfulness, compassion, and charity.",
    ],
    rituals: [
      "Visiting temples and making offerings.",
      "Observing meditation and noble silence.",
      "Releasing caged birds and fish as a symbol of liberation.",
    ],
  },
];


export const navagrahas = [
  {
    id: 1,
    name: "Surya (Sun)",
    ruling_day: "Sunday",
    description: "Represents power, leadership, and self-expression.",
    mantras: ["Om Hrim Sum Suryaya Namah"],
    significance: "Gives energy, health, and success.",
    gemstone: "Ruby",
  },
  {
    id: 2,
    name: "Chandra (Moon)",
    ruling_day: "Monday",
    description: "Symbolizes emotions, intuition, and the mind.",
    mantras: ["Om Som Somaya Namah"],
    significance: "Improves mental peace and emotional balance.",
    gemstone: "Pearl",
  },
  {
    id: 3,
    name: "Mangala (Mars)",
    ruling_day: "Tuesday",
    description: "Represents energy, courage, and physical strength.",
    mantras: ["Om Ang Angarakaya Namah"],
    significance: "Enhances courage and determination.",
    gemstone: "Red Coral",
  },
  {
    id: 4,
    name: "Budha (Mercury)",
    ruling_day: "Wednesday",
    description: "Symbolizes intellect, communication, and logic.",
    mantras: ["Om Bum Budhaya Namah"],
    significance: "Improves intelligence and communication skills.",
    gemstone: "Emerald",
  },
  {
    id: 5,
    name: "Guru (Jupiter)",
    ruling_day: "Thursday",
    description: "Represents wisdom, knowledge, and spirituality.",
    mantras: ["Om Brim Brihaspataye Namah"],
    significance: "Brings wisdom, prosperity, and spiritual growth.",
    gemstone: "Yellow Sapphire",
  },
  {
    id: 6,
    name: "Shukra (Venus)",
    ruling_day: "Friday",
    description: "Symbolizes love, beauty, and material wealth.",
    mantras: ["Om Shum Shukraya Namah"],
    significance: "Enhances love, creativity, and artistic abilities.",
    gemstone: "Diamond",
  },
  {
    id: 7,
    name: "Shani (Saturn)",
    ruling_day: "Saturday",
    description: "Represents discipline, hard work, and justice.",
    mantras: ["Om Sham Shanicharaya Namah"],
    significance: "Provides patience, endurance, and karmic justice.",
    gemstone: "Blue Sapphire",
  },
  {
    id: 8,
    name: "Rahu (North Lunar Node)",
    ruling_day: "No specific day",
    description: "Symbolizes illusions, desires, and transformations.",
    mantras: ["Om Rah Rahave Namah"],
    significance: "Helps in overcoming obstacles and removes negativity.",
    gemstone: "Hessonite Garnet",
  },
  {
    id: 9,
    name: "Ketu (South Lunar Node)",
    ruling_day: "No specific day",
    description: "Represents spirituality, detachment, and past karma.",
    mantras: ["Om Ket Ketave Namah"],
    significance: "Encourages spiritual growth and self-realization.",
    gemstone: "Cat's Eye",
  },
];
