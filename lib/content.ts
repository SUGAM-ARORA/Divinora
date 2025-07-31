import { type Religion } from './types';

// Enhanced Universal Religious Content

// Holy Books from All Traditions
export const holyBooks = [
  // Hindu Scriptures
  {
    id: 1,
    name: "Bhagavad Gita",
    religion: "Hinduism" as Religion,
    description: "The sacred dialogue between Prince Arjuna and Lord Krishna, containing profound spiritual wisdom and the essence of dharma.",
    category: "Epic Scripture",
    language: "Sanskrit",
    verses: 700,
    chapters: 18
  },
  {
    id: 2,
    name: "Rigveda",
    religion: "Hinduism" as Religion,
    description: "The oldest of the four Vedas, containing hymns and mantras dedicated to various deities and cosmic principles.",
    category: "Vedic Literature",
    language: "Sanskrit",
    verses: 1028,
    chapters: 10
  },
  {
    id: 3,
    name: "Upanishads",
    religion: "Hinduism" as Religion,
    description: "Philosophical texts that explore the nature of reality, consciousness, and the relationship between the individual soul and universal spirit.",
    category: "Philosophical",
    language: "Sanskrit",
    verses: "Various",
    chapters: "108 texts"
  },

  // Christian Scriptures
  {
    id: 4,
    name: "The Holy Bible",
    religion: "Christianity" as Religion,
    description: "The sacred text of Christianity, containing the Old and New Testaments with teachings of Jesus Christ and divine guidance.",
    category: "Sacred Scripture",
    language: "Hebrew/Greek/Aramaic",
    verses: 31102,
    chapters: 1189
  },
  {
    id: 5,
    name: "Gospel of Matthew",
    religion: "Christianity" as Religion,
    description: "The first Gospel in the New Testament, presenting Jesus as the promised Messiah and King of the Jews.",
    category: "Gospel",
    language: "Greek",
    verses: 1071,
    chapters: 28
  },

  // Islamic Scriptures
  {
    id: 6,
    name: "The Holy Quran",
    religion: "Islam" as Religion,
    description: "The central religious text of Islam, believed to be the direct word of Allah as revealed to Prophet Muhammad (PBUH).",
    category: "Divine Revelation",
    language: "Arabic",
    verses: 6236,
    chapters: 114
  },
  {
    id: 7,
    name: "Sahih Bukhari",
    religion: "Islam" as Religion,
    description: "One of the most authentic collections of Hadith (sayings and actions of Prophet Muhammad PBUH).",
    category: "Hadith Collection",
    language: "Arabic",
    verses: 7563,
    chapters: 97
  },

  // Buddhist Scriptures
  {
    id: 8,
    name: "Tripitaka",
    religion: "Buddhism" as Religion,
    description: "The traditional term for the Buddhist scriptures, the earliest collection of Buddha's teachings on the path to enlightenment.",
    category: "Buddhist Canon",
    language: "Pali/Sanskrit",
    verses: "Extensive",
    chapters: "Three Baskets"
  },
  {
    id: 9,
    name: "Dhammapada",
    religion: "Buddhism" as Religion,
    description: "A collection of sayings of the Buddha in verse form, one of the most widely read Buddhist scriptures.",
    category: "Wisdom Literature",
    language: "Pali",
    verses: 423,
    chapters: 26
  },

  // Jewish Scriptures
  {
    id: 10,
    name: "Torah",
    religion: "Judaism" as Religion,
    description: "The central text of Judaism, comprising the first five books of the Hebrew Bible and containing 613 commandments.",
    category: "Sacred Law",
    language: "Hebrew",
    verses: 5845,
    chapters: 187
  },
  {
    id: 11,
    name: "Talmud",
    religion: "Judaism" as Religion,
    description: "A vast collection of rabbinical discussions and interpretations of the Torah, Jewish law, ethics, and customs.",
    category: "Rabbinical Literature",
    language: "Hebrew/Aramaic",
    verses: "Extensive",
    chapters: "63 Tractates"
  },

  // Sikh Scriptures
  {
    id: 12,
    name: "Guru Granth Sahib",
    religion: "Sikhism" as Religion,
    description: "The central religious scripture of Sikhism, regarded as the final, sovereign guru containing hymns and teachings.",
    category: "Living Guru",
    language: "Gurmukhi",
    verses: 5894,
    chapters: 1430
  }
];

// Universal Deities and Spiritual Figures
export const deities = [
  // Hindu Deities
  {
    id: "shiva",
    name: "Lord Shiva",
    religion: "Hinduism" as Religion,
    description: "The destroyer and transformer in the Trimurti, known for cosmic dance and deep meditation. The lord of yoga and asceticism.",
    attributes: ["Destroyer", "Transformer", "Ascetic", "Yogi", "Nataraja", "Mahadeva"],
    iconography: "Third eye, crescent moon, Ganga, snake, trishul, damaru",
    significance: "Represents the cycle of destruction and regeneration, consciousness, and spiritual transformation",
    stories: [
      "Shiva drank the deadly poison Halahala during the churning of the cosmic ocean to save the universe, earning him the name Neelakantha (blue-throated one).",
      "Shiva married Parvati after she performed intense penance to win his love and attention, symbolizing the union of consciousness and energy.",
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
    ],
    modelEmbedCode: `<div className="sketchfab-embed-wrapper w-full flex flex-col items-center">
      <iframe
        title="Lord Shiva in Standing posture"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen
        webkitAllowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        className="w-full max-w-3xl h-[600px]"
        src="https://sketchfab.com/models/86f1bd1dcca841eca95ae062d54ee2b5/embed"
      ></iframe>
    </div>`
  },
  {
    id: "vishnu",
    name: "Lord Vishnu",
    religion: "Hinduism" as Religion,
    description: "The preserver and protector of the universe, known for his various avatars who restore dharma when it declines.",
    attributes: ["Preserver", "Protector", "Sustainer", "All-pervading", "Compassionate"],
    iconography: "Four arms, Chakra, Conch, Lotus, Mace, Garuda",
    significance: "Maintains cosmic order and appears as avatars to restore righteousness",
    incarnations: ["Krishna", "Rama", "Narasimha", "Vamana", "Matsya", "Kurma", "Varaha", "Parashurama", "Buddha", "Kalki"],
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
    ],
    modelEmbedCode: `<div className="sketchfab-embed-wrapper">
  <iframe
    title="Lord Vishnu standing"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; fullscreen; xr-spatial-tracking"
    src="https://sketchfab.com/models/e0b90160bff84614a50121d621f2ee76/embed"
    style={{ width: '100%', height: '480px' }}
    {...{
      mozallowfullscreen: 'true',
      webkitallowfullscreen: 'true',
    }}
  ></iframe>
</div>`
  },

  // Christian Figures
  {
    id: "jesus",
    name: "Jesus Christ",
    religion: "Christianity" as Religion,
    description: "The central figure of Christianity, believed to be the Son of God and savior of humanity who taught love, compassion, and forgiveness.",
    attributes: ["Savior", "Son of God", "Prince of Peace", "Good Shepherd", "Light of the World"],
    iconography: "Cross, Sacred Heart, Lamb, Fish, Crown of Thorns",
    significance: "Represents God's love for humanity and the path to eternal salvation",
    stories: [
      "Jesus was born in Bethlehem to the Virgin Mary, fulfilling ancient prophecies about the Messiah.",
      "Jesus performed miracles including healing the sick, feeding the multitudes, and raising the dead.",
      "Jesus sacrificed himself on the cross for humanity's sins and rose from the dead on the third day."
    ],
    churches: [
      { name: "Church of the Holy Sepulchre", location: "Jerusalem" },
      { name: "St. Peter's Basilica", location: "Vatican City" },
      { name: "Church of the Nativity", location: "Bethlehem" }
    ],
    prayers: [
      "The Lord's Prayer",
      "Hail Mary",
      "Jesus Prayer"
    ]
  },
  {
    id: "mary",
    name: "Virgin Mary",
    religion: "Christianity" as Religion,
    description: "The mother of Jesus Christ, revered for her faith, purity, and role in God's plan of salvation.",
    attributes: ["Mother of God", "Queen of Heaven", "Immaculate Conception", "Our Lady"],
    iconography: "Blue robes, roses, crown, rosary, lily",
    significance: "Model of faith and obedience to God's will",
    stories: [
      "Mary received the Annunciation from Angel Gabriel that she would bear the Son of God.",
      "Mary visited her cousin Elizabeth, who proclaimed her blessed among women.",
      "Mary stood by the cross during Jesus' crucifixion and was entrusted to John's care."
    ],
    shrines: [
      { name: "Our Lady of Lourdes", location: "France" },
      { name: "Our Lady of Fatima", location: "Portugal" },
      { name: "Our Lady of Guadalupe", location: "Mexico" }
    ],
    prayers: [
      "Hail Mary",
      "The Rosary",
      "Memorare"
    ]
  },

  // Islamic Figures
  {
    id: "muhammad",
    name: "Prophet Muhammad (PBUH)",
    religion: "Islam" as Religion,
    description: "The final messenger of Allah, who received the Quran and established the principles of Islam based on submission to Allah.",
    attributes: ["Seal of Prophets", "Messenger of Allah", "Al-Amin (The Trustworthy)", "Rahmat-ul-Alameen"],
    significance: "The final prophet who completed the message of monotheism",
    stories: [
      "Muhammad (PBUH) received his first revelation from Angel Jibril (Gabriel) in the cave of Hira.",
      "The Prophet (PBUH) led the migration (Hijra) from Mecca to Medina, marking the beginning of the Islamic calendar.",
      "Muhammad (PBUH) delivered his final sermon during his last pilgrimage, emphasizing equality and justice."
    ],
    mosques: [
      { name: "Masjid al-Haram", location: "Mecca, Saudi Arabia" },
      { name: "Masjid an-Nabawi", location: "Medina, Saudi Arabia" },
      { name: "Al-Aqsa Mosque", location: "Jerusalem" }
    ],
    prayers: [
      "Salawat (Blessings upon the Prophet)",
      "Istighfar (Seeking Forgiveness)",
      "Shahada (Declaration of Faith)"
    ]
  },

  // Buddhist Figures
  {
    id: "buddha",
    name: "Gautama Buddha",
    religion: "Buddhism" as Religion,
    description: "The enlightened one who discovered the path to liberation from suffering and founded Buddhism.",
    attributes: ["The Awakened One", "Tathagata", "Bhagavat", "Shakyamuni"],
    iconography: "Lotus position, Bodhi tree, Dharma wheel, begging bowl",
    significance: "Showed the path to enlightenment and liberation from the cycle of rebirth",
    stories: [
      "Prince Siddhartha left his palace after seeing the four sights: old age, sickness, death, and a monk.",
      "Buddha attained enlightenment under the Bodhi tree after defeating Mara's temptations.",
      "Buddha delivered his first sermon at Sarnath, setting in motion the Wheel of Dharma."
    ],
    temples: [
      { name: "Bodh Gaya", location: "Bihar, India" },
      { name: "Sarnath", location: "Uttar Pradesh, India" },
      { name: "Kushinagar", location: "Uttar Pradesh, India" }
    ],
    mantras: [
      "Om Mani Padme Hum",
      "Gate Gate Paragate",
      "Buddham Saranam Gacchami"
    ]
  },

  // Jewish Figures
  {
    id: "moses",
    name: "Moses (Moshe)",
    religion: "Judaism" as Religion,
    description: "The greatest prophet in Judaism who led the Israelites out of Egypt and received the Torah at Mount Sinai.",
    attributes: ["Lawgiver", "Prophet", "Leader", "Teacher"],
    iconography: "Tablets of Law, Staff, Burning Bush",
    significance: "Received the Torah and established the covenant between God and the Jewish people",
    stories: [
      "Moses was saved as a baby from Pharaoh's decree and raised in the Egyptian royal household.",
      "Moses encountered God in the burning bush and was commanded to lead the Israelites out of Egypt.",
      "Moses received the Ten Commandments and the Torah at Mount Sinai."
    ],
    sites: [
      { name: "Mount Sinai", location: "Egypt" },
      { name: "Western Wall", location: "Jerusalem" },
      { name: "Tomb of Moses", location: "Mount Nebo, Jordan" }
    ],
    prayers: [
      "Shema Yisrael",
      "Amidah",
      "Kaddish"
    ]
  },

  // Sikh Gurus
  {
    id: "guru-nanak",
    name: "Guru Nanak Dev Ji",
    religion: "Sikhism" as Religion,
    description: "The founder of Sikhism who preached the unity of God, equality of all humans, and the importance of honest living.",
    attributes: ["First Guru", "Founder", "Divine Teacher", "Baba Nanak"],
    iconography: "Turban, flowing beard, prayer beads, simple robes",
    significance: "Established Sikhism and the principles of one God, equality, and service",
    stories: [
      "Guru Nanak disappeared into a river for three days and emerged with the divine message 'There is no Hindu, no Muslim.'",
      "Guru Nanak undertook four major journeys (Udasis) to spread his teachings across different regions.",
      "Guru Nanak established the first Sikh community and appointed Guru Angad as his successor."
    ],
    gurdwaras: [
      { name: "Gurdwara Janam Asthan", location: "Nankana Sahib, Pakistan" },
      { name: "Gurdwara Dera Sahib", location: "Kartarpur, Pakistan" },
      { name: "Golden Temple", location: "Amritsar, India" }
    ],
    prayers: [
      "Japji Sahib",
      "Mool Mantar",
      "Ardas"
    ]
  }
];

// Universal Festivals and Celebrations
export const festivals = [
  // Hindu Festivals
  {
    id: 1,
    name: "Diwali",
    religion: "Hinduism" as Religion,
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
    ],
    universalMessage: "The triumph of good over evil and light over darkness"
  },
  {
    id: 2,
    name: "Holi",
    religion: "Hinduism" as Religion,
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
    ],
    universalMessage: "Joy, renewal, and the celebration of life's colors"
  },

  // Christian Festivals
  {
    id: 3,
    name: "Christmas",
    religion: "Christianity" as Religion,
    date: "December 25",
    description: "The celebration of the birth of Jesus Christ, emphasizing love, peace, and goodwill toward all.",
    significance: [
      "Commemorates the birth of Jesus Christ in Bethlehem",
      "Celebrates God's gift of salvation to humanity",
      "Emphasizes themes of love, peace, and hope"
    ],
    rituals: [
      "Attending midnight mass or church services",
      "Decorating Christmas trees and homes",
      "Exchanging gifts and cards",
      "Sharing meals with family and friends"
    ],
    universalMessage: "Love, peace, and goodwill toward all humanity"
  },
  {
    id: 4,
    name: "Easter",
    religion: "Christianity" as Religion,
    date: "March-April (varies)",
    description: "The celebration of Jesus Christ's resurrection from the dead, the cornerstone of Christian faith.",
    significance: [
      "Commemorates Jesus Christ's resurrection after crucifixion",
      "Represents victory over death and sin",
      "Symbolizes new life and spiritual rebirth"
    ],
    rituals: [
      "Attending Easter Sunday services",
      "Easter egg hunts and decorating eggs",
      "Special Easter meals and gatherings",
      "Sunrise services and processions"
    ],
    universalMessage: "Hope, renewal, and the triumph of life over death"
  },

  // Islamic Festivals
  {
    id: 5,
    name: "Eid al-Fitr",
    religion: "Islam" as Religion,
    date: "End of Ramadan (lunar calendar)",
    description: "The festival of breaking the fast, celebrating the completion of Ramadan with joy and gratitude.",
    significance: [
      "Marks the end of the holy month of Ramadan",
      "Celebrates spiritual purification and self-discipline",
      "Emphasizes charity, community, and gratitude to Allah"
    ],
    rituals: [
      "Special Eid prayers at mosques",
      "Giving Zakat al-Fitr (charity) to the poor",
      "Wearing new clothes and sharing meals",
      "Visiting family and friends"
    ],
    universalMessage: "Gratitude, charity, and community celebration"
  },
  {
    id: 6,
    name: "Eid al-Adha",
    religion: "Islam" as Religion,
    date: "10th of Dhul Hijjah (lunar calendar)",
    description: "The festival of sacrifice commemorating Abraham's willingness to sacrifice his son for Allah.",
    significance: [
      "Commemorates Prophet Ibrahim's (Abraham's) sacrifice",
      "Coincides with the Hajj pilgrimage to Mecca",
      "Emphasizes devotion, sacrifice, and obedience to Allah"
    ],
    rituals: [
      "Special Eid prayers and sermons",
      "Qurbani (ritual sacrifice) for those who can afford it",
      "Distributing meat to family, friends, and the poor",
      "Gathering with family and community"
    ],
    universalMessage: "Sacrifice, devotion, and sharing with those in need"
  },

  // Buddhist Festivals
  {
    id: 7,
    name: "Vesak Day",
    religion: "Buddhism" as Religion,
    date: "Full moon in May",
    description: "The most important Buddhist festival celebrating Buddha's birth, enlightenment, and death.",
    significance: [
      "Commemorates Buddha's birth, enlightenment, and parinirvana",
      "Celebrates the Three Jewels: Buddha, Dharma, and Sangha",
      "Emphasizes compassion, wisdom, and mindfulness"
    ],
    rituals: [
      "Visiting temples and offering flowers, incense, and candles",
      "Meditation and chanting sessions",
      "Acts of charity and kindness",
      "Releasing caged birds and fish"
    ],
    universalMessage: "Compassion, wisdom, and liberation from suffering"
  },

  // Jewish Festivals
  {
    id: 8,
    name: "Passover",
    religion: "Judaism" as Religion,
    date: "15th of Nisan (Hebrew calendar)",
    description: "The festival commemorating the Israelites' liberation from slavery in Egypt.",
    significance: [
      "Commemorates the Exodus from Egypt",
      "Celebrates freedom from oppression",
      "Remembers God's protection of the Israelites"
    ],
    rituals: [
      "Seder meal with symbolic foods",
      "Reading the Haggadah (Passover story)",
      "Eating matzah (unleavened bread)",
      "Four cups of wine representing redemption"
    ],
    universalMessage: "Freedom, liberation, and divine protection"
  },

  // Sikh Festivals
  {
    id: 9,
    name: "Vaisakhi",
    religion: "Sikhism" as Religion,
    date: "April 13-14",
    description: "Celebrates the formation of the Khalsa and the harvest season in Punjab.",
    significance: [
      "Commemorates the creation of the Khalsa by Guru Gobind Singh",
      "Celebrates the harvest season in Punjab",
      "Marks the Sikh New Year"
    ],
    rituals: [
      "Special prayers and processions",
      "Community service (seva) and langar",
      "Traditional Punjabi folk dances",
      "Reading from Guru Granth Sahib"
    ],
    universalMessage: "Service, equality, and community celebration"
  }
];

// Universal Sacred Stories
export const sacredStories = [
  // Hindu Stories
  {
    id: 1,
    title: "Samudra Manthan",
    religion: "Hinduism" as Religion,
    description: "The churning of the cosmic ocean by devas and asuras, revealing divine treasures and amrita.",
    tradition: "Hindu Puranas",
    era: "Ancient",
    category: "Creation Myths",
    universalTheme: "Cooperation between opposing forces for greater good",
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

  // Christian Stories
  {
    id: 2,
    title: "The Good Samaritan",
    religion: "Christianity" as Religion,
    description: "Jesus' parable about compassion and loving one's neighbor, regardless of social or ethnic differences.",
    tradition: "New Testament",
    era: "1st Century CE",
    category: "Parable",
    universalTheme: "Compassion transcends all boundaries",
    content: [
      "A man was traveling from Jerusalem to Jericho when he was attacked by robbers who stripped him, beat him, and left him half dead.",
      "A priest came down the road, saw the wounded man, but passed by on the other side without helping.",
      "A Levite also came to the place, looked at the man, but also passed by on the other side.",
      "But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him. He bandaged his wounds, put him on his own donkey, brought him to an inn, and took care of him.",
      "The next day, the Samaritan gave the innkeeper money and said, 'Look after him, and when I return, I will reimburse you for any extra expense you may have.'"
    ],
    morals: [
      "True neighborliness transcends ethnic and religious boundaries",
      "Compassion is shown through actions, not just words",
      "We are called to help those in need, regardless of who they are"
    ],
    relatedStories: [
      { title: "The Prodigal Son", description: "A story of forgiveness and unconditional love" },
      { title: "The Sermon on the Mount", description: "Jesus' teachings on love, mercy, and righteousness" }
    ]
  },

  // Islamic Stories
  {
    id: 3,
    title: "The Night Journey (Isra and Mi'raj)",
    religion: "Islam" as Religion,
    description: "Prophet Muhammad's miraculous night journey from Mecca to Jerusalem and ascension to heaven.",
    tradition: "Islamic Tradition",
    era: "7th Century CE",
    category: "Prophetic Miracle",
    universalTheme: "Spiritual transcendence and divine connection",
    content: [
      "One night, the Angel Jibril (Gabriel) came to Prophet Muhammad (PBUH) while he was sleeping near the Kaaba in Mecca.",
      "The Prophet was taken on a miraculous journey on a winged creature called Buraq from Mecca to Al-Aqsa Mosque in Jerusalem.",
      "At Al-Aqsa Mosque, the Prophet led all the previous prophets in prayer, symbolizing the unity of all divine messages.",
      "From Jerusalem, the Prophet ascended through the seven heavens, meeting various prophets including Adam, Jesus, Moses, and Abraham.",
      "The Prophet reached the highest level where he received the command for Muslims to pray five times daily, and experienced the divine presence of Allah."
    ],
    morals: [
      "The unity and continuity of all divine messages",
      "The importance of prayer as a direct connection to the Divine",
      "Spiritual experiences transcend physical limitations"
    ],
    relatedStories: [
      { title: "The First Revelation", description: "How Prophet Muhammad received his first divine message" },
      { title: "The Hijra", description: "The migration from Mecca to Medina" }
    ]
  },

  // Buddhist Stories
  {
    id: 4,
    title: "The Four Sights",
    religion: "Buddhism" as Religion,
    description: "Prince Siddhartha's encounters that led him to seek enlightenment and become the Buddha.",
    tradition: "Buddhist Canon",
    era: "6th Century BCE",
    category: "Enlightenment Story",
    universalTheme: "Awakening to life's realities leads to spiritual seeking",
    content: [
      "Prince Siddhartha lived a sheltered life in his father's palace, protected from all suffering and hardship.",
      "On his first venture outside the palace, he encountered an old man, bent with age and frailty, which shocked him as he had never seen aging before.",
      "On his second journey, he saw a sick person, suffering from disease, which introduced him to the reality of illness.",
      "On his third trip, he witnessed a funeral procession and learned about death for the first time.",
      "On his fourth and final journey, he met a wandering monk who had renounced worldly life in search of spiritual truth, inspiring Siddhartha to leave his palace and seek enlightenment."
    ],
    morals: [
      "Awareness of suffering is the beginning of wisdom",
      "Sheltering from reality prevents spiritual growth",
      "The search for truth requires courage to face difficult realities"
    ],
    relatedStories: [
      { title: "The Enlightenment Under the Bodhi Tree", description: "How Siddhartha became the Buddha" },
      { title: "The First Sermon at Sarnath", description: "Buddha's first teaching of the Four Noble Truths" }
    ]
  },

  // Jewish Stories
  {
    id: 5,
    title: "The Binding of Isaac",
    religion: "Judaism" as Religion,
    description: "Abraham's test of faith when God commanded him to sacrifice his son Isaac.",
    tradition: "Torah",
    era: "Ancient",
    category: "Test of Faith",
    universalTheme: "Faith and obedience to divine will",
    content: [
      "God tested Abraham by commanding him to take his beloved son Isaac to Mount Moriah and offer him as a burnt offering.",
      "Abraham rose early in the morning, saddled his donkey, and took Isaac and two servants with him to the place God had designated.",
      "On the third day, Abraham saw the place from afar and told his servants to wait while he and Isaac went to worship.",
      "Isaac asked his father, 'Where is the lamb for the burnt offering?' Abraham replied, 'God will provide the lamb, my son.'",
      "When they reached the place, Abraham built an altar, bound Isaac, and raised the knife. But an angel of the Lord called out, 'Do not harm the boy!' Abraham looked up and saw a ram caught in a thicket, which he sacrificed instead."
    ],
    morals: [
      "Ultimate faith requires complete trust in divine wisdom",
      "God provides for those who trust in Him",
      "Tests of faith strengthen our relationship with the Divine"
    ],
    relatedStories: [
      { title: "The Exodus from Egypt", description: "Moses leads the Israelites to freedom" },
      { title: "David and Goliath", description: "Faith conquers seemingly impossible challenges" }
    ]
  },

  // Sikh Stories
  {
    id: 6,
    title: "Guru Nanak and the Boulder",
    religion: "Sikhism" as Religion,
    description: "How Guru Nanak demonstrated that sincere devotion matters more than physical strength or ritual.",
    tradition: "Sikh Tradition",
    era: "16th Century CE",
    category: "Teaching Story",
    universalTheme: "Sincere devotion transcends physical limitations",
    content: [
      "During his travels, Guru Nanak came to a place where people were trying to move a large boulder that was blocking a path.",
      "Many strong men had tried to move the boulder but failed. The local people were frustrated and didn't know what to do.",
      "Some people suggested that they needed to perform elaborate rituals or make offerings to move the boulder.",
      "Guru Nanak quietly approached the boulder and, with sincere prayer and devotion to the One God, gently touched it.",
      "The boulder moved easily, clearing the path. The people were amazed and asked how this was possible.",
      "Guru Nanak explained that sincere devotion and faith in the One God can accomplish what physical strength and empty rituals cannot."
    ],
    morals: [
      "Sincere devotion is more powerful than physical strength",
      "Faith in the One God can overcome any obstacle",
      "Simple, heartfelt prayer is more effective than elaborate rituals"
    ],
    relatedStories: [
      { title: "Guru Nanak and Bhai Lalo", description: "The importance of honest living and sharing" },
      { title: "The Three Pillars of Sikhism", description: "Meditation, honest work, and sharing with others" }
    ]
  }
];

// Universal Spiritual Teachings
export const teachings = [
  {
    id: 1,
    title: "Universal Compassion",
    description: "Explore how different religions teach and practice compassion towards all beings.",
    religions: ["Hinduism", "Christianity", "Islam", "Buddhism", "Judaism", "Sikhism"],
    keyPoints: [
      "Compassion as the foundation of spiritual practice across all traditions",
      "Extending kindness to all living beings regardless of differences",
      "Practical ways to cultivate compassion in daily life",
      "Overcoming obstacles to compassionate action"
    ],
    references: [
      { text: "Karuna (compassion) is the spontaneous feeling of identification with all beings.", source: "Buddhist Teachings" },
      { text: "The wise ones who are compassionate and who observe the law of help, become free from the bonds of rebirth.", source: "Bhagavad Gita 12:3-4" },
      { text: "Blessed are the merciful, for they will be shown mercy.", source: "Matthew 5:7" },
      { text: "The believers in their mutual kindness, compassion, and sympathy are just one body.", source: "Hadith - Sahih Bukhari" },
      { text: "You shall love your neighbor as yourself.", source: "Leviticus 19:18" },
      { text: "Compassion is the basis of all morality.", source: "Guru Granth Sahib" }
    ],
    applications: [
      "Practice of ahimsa (non-violence) in thoughts, words, and actions",
      "Seva (selfless service) to those in need",
      "Meditation practices to develop loving-kindness",
      "Charitable giving and community service",
      "Forgiveness and understanding in relationships",
      "Environmental stewardship and care for creation"
    ]
  },
  {
    id: 2,
    title: "Inner Peace and Harmony",
    description: "Discover teachings about inner peace and harmony across religious traditions.",
    religions: ["Hinduism", "Christianity", "Islam", "Buddhism", "Judaism", "Sikhism"],
    keyPoints: [
      "Peace as the natural state of the soul",
      "Practices for cultivating inner tranquility",
      "The relationship between inner peace and world peace",
      "Overcoming mental agitation and restlessness"
    ],
    references: [
      { text: "Peace comes from within. Do not seek it without.", source: "Buddha" },
      { text: "The mind is restless and difficult to restrain, but it is subdued by practice.", source: "Bhagavad Gita 6:35" },
      { text: "Peace I leave with you; my peace I give you.", source: "John 14:27" },
      { text: "And it is in the remembrance of Allah that hearts find rest.", source: "Quran 13:28" },
      { text: "The Lord will give strength to His people; the Lord will bless His people with peace.", source: "Psalm 29:11" },
      { text: "Where there is forgiveness, there is God himself.", source: "Guru Granth Sahib" }
    ],
    applications: [
      "Regular meditation and prayer practice",
      "Simplifying one's lifestyle and reducing attachments",
      "Practicing contentment and gratitude",
      "Creating peaceful environments in home and community",
      "Conflict resolution through dialogue and understanding",
      "Mindful breathing and stress reduction techniques"
    ]
  },
  {
    id: 3,
    title: "Divine Wisdom and Knowledge",
    description: "Learn about the pursuit of wisdom and enlightenment in various faiths.",
    religions: ["Hinduism", "Christianity", "Islam", "Buddhism", "Judaism", "Sikhism"],
    keyPoints: [
      "The distinction between worldly knowledge and divine wisdom",
      "Paths to spiritual insight and enlightenment",
      "Removing the veils of ignorance and illusion",
      "The role of teachers and scriptures in gaining wisdom"
    ],
    references: [
      { text: "The supreme wisdom is seeing the eternal in the transient.", source: "Upanishads" },
      { text: "The fear of the Lord is the beginning of wisdom.", source: "Proverbs 9:10" },
      { text: "And Allah teaches you what you did not know.", source: "Quran 2:282" },
      { text: "Wisdom is the highest perfection of consciousness.", source: "Buddhist Teachings" },
      { text: "Get wisdom, get understanding; do not forget my words or turn away from them.", source: "Proverbs 4:5" },
      { text: "He alone is wise who contemplates the Name of the Lord.", source: "Guru Granth Sahib" }
    ],
    applications: [
      "Study of sacred texts with reflection and contemplation",
      "Seeking guidance from spiritual teachers and mentors",
      "Practicing discernment in daily decisions",
      "Contemplative practices to develop insight",
      "Questioning and examining one's beliefs and assumptions",
      "Applying spiritual principles to practical life situations"
    ]
  },
  {
    id: 4,
    title: "Unity in Diversity",
    description: "Understanding how different paths lead to the same divine truth.",
    religions: ["Hinduism", "Christianity", "Islam", "Buddhism", "Judaism", "Sikhism"],
    keyPoints: [
      "The universal nature of divine truth",
      "Respecting different spiritual paths and traditions",
      "Finding common ground while honoring differences",
      "The role of interfaith dialogue in promoting understanding"
    ],
    references: [
      { text: "Truth is one, sages call it by many names.", source: "Rigveda 1.164.46" },
      { text: "In my Father's house are many rooms.", source: "John 14:2" },
      { text: "To each among you, We have prescribed a law and a method.", source: "Quran 5:48" },
      { text: "Just as a mother would protect her only child with her life, even so let one cultivate a boundless love towards all beings.", source: "Buddha" },
      { text: "Have we not all one Father? Has not one God created us?", source: "Malachi 2:10" },
      { text: "God is one, but His names are many.", source: "Guru Granth Sahib" }
    ],
    applications: [
      "Participating in interfaith dialogue and events",
      "Learning about other religious traditions with respect",
      "Finding universal principles in different teachings",
      "Building bridges between communities",
      "Practicing tolerance and acceptance",
      "Celebrating diversity as a reflection of divine creativity"
    ]
  }
];

// Universal Spiritual Histories
export const histories = [
  {
    id: 1,
    title: "Origins of World Religions",
    description: "Explore the historical origins and development of major world religions.",
    events: [
      { date: "c. 3000 BCE", description: "Early Vedic period begins in the Indian subcontinent" },
      { date: "c. 2000 BCE", description: "Abraham's covenant with God, foundation of monotheistic traditions" },
      { date: "c. 1500 BCE", description: "Composition of the Rigveda, oldest of the Vedic texts" },
      { date: "c. 1300 BCE", description: "Moses receives the Torah at Mount Sinai" },
      { date: "c. 800-500 BCE", description: "Upanishadic period, development of core Hindu philosophical concepts" },
      { date: "c. 563-483 BCE", description: "Life of Siddhartha Gautama (the Buddha)" },
      { date: "c. 6th century BCE", description: "Life of Mahavira, 24th Tirthankara of Jainism" },
      { date: "c. 4 BCE - 30 CE", description: "Life of Jesus Christ" },
      { date: "570-632 CE", description: "Life of Prophet Muhammad (PBUH)" },
      { date: "1469-1539 CE", description: "Life of Guru Nanak, founder of Sikhism" }
    ],
    significance: [
      "Understanding religious origins helps contextualize modern practices",
      "Historical development reveals the evolution of spiritual thought",
      "Recognizing common roots promotes interfaith understanding",
      "Ancient wisdom traditions continue to guide billions today"
    ],
    artifacts: [
      { name: "Indus Valley Seals", description: "Early artifacts showing possible proto-religious figures" },
      { name: "Dead Sea Scrolls", description: "Ancient Jewish texts providing insight into early Judaism" },
      { name: "Vedic Manuscripts", description: "Ancient texts recording hymns and rituals" },
      { name: "Buddhist Stupas", description: "Early monuments marking important Buddhist sites" },
      { name: "Early Christian Manuscripts", description: "Papyrus fragments of New Testament texts" },
      { name: "Quranic Manuscripts", description: "Early copies of the Quran from the 7th century" }
    ],
    references: [
      "Archaeological Survey findings at various religious sites",
      "Comparative Religion studies by scholars like Mircea Eliade",
      "Historical analyses by Karen Armstrong and others",
      "UNESCO World Heritage Site documentation"
    ]
  },
  {
    id: 2,
    title: "Sacred Places and Pilgrimage",
    description: "Discover the most important religious sites and their significance across traditions.",
    events: [
      { date: "c. 1000 BCE", description: "Construction of Solomon's Temple in Jerusalem" },
      { date: "c. 400 CE", description: "Construction of earliest surviving Hindu temples" },
      { date: "8th-9th century CE", description: "Building of Borobudur, world's largest Buddhist temple" },
      { date: "1096-1291 CE", description: "The Crusades and their impact on Christian holy sites" },
      { date: "1653 CE", description: "Completion of the Taj Mahal, iconic Islamic mausoleum" }
    ],
    significance: [
      "Sacred sites serve as focal points for spiritual energy and devotion",
      "Architectural elements often symbolize cosmic and spiritual principles",
      "Pilgrimage to holy places is a transformative spiritual practice",
      "These sites preserve religious history and cultural heritage"
    ],
    artifacts: [
      { name: "Western Wall", description: "Remnant of the Second Temple, holiest prayer site in Judaism" },
      { name: "Church of the Holy Sepulchre", description: "Site of Jesus' crucifixion and resurrection" },
      { name: "Kaaba", description: "Most sacred site in Islam, direction of prayer for Muslims" },
      { name: "Bodh Gaya", description: "Site of Buddha's enlightenment under the Bodhi tree" },
      { name: "Golden Temple", description: "Holiest gurdwara of Sikhism in Amritsar" },
      { name: "Khajuraho Temples", description: "Medieval Hindu and Jain temples known for their architecture" }
    ],
    references: [
      "Diana Eck's 'India: A Sacred Geography'",
      "UNESCO World Heritage Site documentation",
      "Stella Kramrisch's 'The Hindu Temple'",
      "Studies on Islamic architecture and sacred spaces"
    ]
  }
];

// Devotional Videos from Multiple Traditions
export const bhaktiVideos = [
  // Hindu Devotional
  {
    id: 1,
    title: "Om Namah Shivaya Chanting",
    religion: "Hinduism" as Religion,
    description: "Peaceful chanting of the sacred Shiva mantra for meditation and spiritual elevation.",
    youtubeId: "mPgMJ9c_GRg",
    channel: "Divine Bhakti",
    category: "Mantra Chanting"
  },
  {
    id: 2,
    title: "Krishna Bhajan Collection",
    religion: "Hinduism" as Religion,
    description: "Beautiful collection of Krishna bhajans for devotional inspiration.",
    youtubeId: "u9FwN5GTUQ8",
    channel: "Spiritual Rhythms",
    category: "Devotional Songs"
  },
  {
    id: 3,
    title: "Hanuman Chalisa",
    religion: "Hinduism" as Religion,
    description: "The powerful Hanuman Chalisa recitation with lyrics and meaning.",
    youtubeId: "AETFvQonfV8",
    channel: "Sacred Chants",
    category: "Prayer Recitation"
  },

  // Christian Devotional
  {
    id: 4,
    title: "Amazing Grace - Traditional Hymn",
    religion: "Christianity" as Religion,
    description: "The beloved Christian hymn Amazing Grace performed in traditional style.",
    youtubeId: "CDdvReNKKuk",
    channel: "Christian Worship",
    category: "Hymns"
  },
  {
    id: 5,
    title: "The Lord's Prayer - Sung",
    religion: "Christianity" as Religion,
    description: "Beautiful musical rendition of the Lord's Prayer taught by Jesus.",
    youtubeId: "Mb8sSzNlOOE",
    channel: "Sacred Music",
    category: "Prayer Songs"
  },

  // Islamic Devotional
  {
    id: 6,
    title: "Beautiful Quran Recitation",
    religion: "Islam" as Religion,
    description: "Peaceful and melodious recitation of selected verses from the Holy Quran.",
    youtubeId: "JkVXwqLEc5M",
    channel: "Quran Recitation",
    category: "Quranic Recitation"
  },
  {
    id: 7,
    title: "Nasheed - La ilaha illa Allah",
    religion: "Islam" as Religion,
    description: "Beautiful Islamic nasheed (religious song) praising Allah.",
    youtubeId: "GOz5OBE1v4I",
    channel: "Islamic Nasheeds",
    category: "Religious Songs"
  },

  // Buddhist Devotional
  {
    id: 8,
    title: "Om Mani Padme Hum Chanting",
    religion: "Buddhism" as Religion,
    description: "Meditative chanting of the sacred Buddhist mantra Om Mani Padme Hum.",
    youtubeId: "hz4NMwAWXkE",
    channel: "Buddhist Meditation",
    category: "Mantra Meditation"
  },

  // Sikh Devotional
  {
    id: 9,
    title: "Japji Sahib - Morning Prayer",
    religion: "Sikhism" as Religion,
    description: "The morning prayer composed by Guru Nanak, foundation of Sikh daily worship.",
    youtubeId: "VqZY2zatqDg",
    channel: "Gurbani Kirtan",
    category: "Daily Prayers"
  },

  // Universal/Interfaith
  {
    id: 10,
    title: "Peace Prayer from All Traditions",
    religion: "Universal" as Religion,
    description: "A beautiful compilation of peace prayers from different world religions.",
    youtubeId: "kTcRRaXV-fg",
    channel: "Interfaith Harmony",
    category: "Universal Prayers"
  }
];

// Navagrahas (keeping the existing structure)
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
  },
  {
    id: "budha",
    name: "Budha (Mercury)",
    description: "The deity of wisdom, communication, and learning.",
    ruling_day: "Wednesday",
    mantras: ["Om Budhaya Namaha", "Budha Stotram"],
    significance: "Represents intelligence, communication, and business.",
    gemstone: "Emerald"
  },
  {
    id: "brihaspati",
    name: "Brihaspati (Jupiter)",
    description: "The guru of the gods, representing wisdom and spirituality.",
    ruling_day: "Thursday",
    mantras: ["Om Brihaspataye Namaha", "Guru Stotram"],
    significance: "Represents wisdom, knowledge, and spiritual growth.",
    gemstone: "Yellow Sapphire"
  },
  {
    id: "shukra",
    name: "Shukra (Venus)",
    description: "The deity of love, beauty, and material pleasures.",
    ruling_day: "Friday",
    mantras: ["Om Shukraya Namaha", "Shukra Stotram"],
    significance: "Represents love, beauty, and artistic talents.",
    gemstone: "Diamond"
  },
  {
    id: "shani",
    name: "Shani (Saturn)",
    description: "The deity of justice, discipline, and karmic lessons.",
    ruling_day: "Saturday",
    mantras: ["Om Shanaye Namaha", "Shani Stotram"],
    significance: "Represents discipline, hard work, and life lessons.",
    gemstone: "Blue Sapphire"
  },
  {
    id: "rahu",
    name: "Rahu (North Lunar Node)",
    description: "The shadow planet representing desires and material pursuits.",
    ruling_day: "No specific day",
    mantras: ["Om Rahave Namaha", "Rahu Stotram"],
    significance: "Represents ambition, illusion, and transformation.",
    gemstone: "Hessonite Garnet"
  },
  {
    id: "ketu",
    name: "Ketu (South Lunar Node)",
    description: "The shadow planet representing spirituality and detachment.",
    ruling_day: "No specific day",
    mantras: ["Om Ketave Namaha", "Ketu Stotram"],
    significance: "Represents spirituality, moksha, and past-life karma.",
    gemstone: "Cat's Eye"
  }
];