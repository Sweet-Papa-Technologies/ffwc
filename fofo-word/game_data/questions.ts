import { WordChallenge } from "src/ts/models"

export const questions1 = [
    // Spot the Odd Word Out
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Hard",
        "question": "The artist's work was praised for its originality, audacity, and unconventional style.",
        "options": ["originality", "audacity", "unconventional", "familiar"],
        "correctAnswer": 3  // Index of "familiar"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Hard",
        "question": "The diplomat's speech was eloquent, measured, and carefully crafted.",
        "options": ["eloquent", "measured", "crafted", "impulsive"],
        "correctAnswer": 3  // Index of "impulsive"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Hard",
        "question": "The old manuscript was filled with archaic language and obscure references.",
        "options": ["archaic", "obscure", "references", "modern"],
        "correctAnswer": 3  // Index of "modern"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Hard",
        "question": "His argument was based on a fallacy, making his conclusions questionable.",
        "options": ["fallacy", "argument", "conclusions", "sound"],
        "correctAnswer": 3  // Index of "sound"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Hard",
        "question": "The landscape was stark, desolate, and utterly devoid of life.",
        "options": ["stark", "desolate", "devoid", "thriving"],
        "correctAnswer": 3  // Index of "thriving"
    },

    // Meaning Master
    {
        "category": "Meaning Master",
        "difficulty": "Hard",
        "question": "Ephemeral",
        "options": [ "Lasting", "Brief", "Important",  "Happy" ],
        "correctAnswer": 1 // Index of "Brief"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Hard",
        "question": "Disdain",
        "options": [ "Respect", "Contempt", "Fear", "Joy" ],
        "correctAnswer": 1 // Index of "Contempt"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Hard",
        "question": "Pragmatic",
        "options": [ "Practical",  "Idealistic", "Emotional", "Loud" ],
        "correctAnswer": 0 // Index of "Practical"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Hard",
        "question": "Labyrinthine",
        "options": [ "Complex", "Simple", "Bright", "Dirty" ],
        "correctAnswer": 0 // Index of "Complex"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Hard",
        "question": "Egregious",
        "options": [ "Outstanding", "Minor", "Shiny", "Fast" ],
        "correctAnswer": 0 // Index of "Outstanding" (in a negative sense)
    },

     // Context is Key
    {
        "category": "Context is Key",
        "difficulty": "Hard",
        "question": "The scholar's ______ analysis revealed hidden meanings within the text. ",
        "options": ["astute", "superficial", "brief", "angry"],
        "correctAnswer": 0 // Index of "astute" (insightful)
    },
    {
        "category": "Context is Key",
        "difficulty": "Hard",
        "question": "Her ______ remarks cut through the polite conversation.",
        "options": ["incisive", "gentle", "unrelated", "large"],
        "correctAnswer": 0 // Index of "incisive" (sharp, direct)
    },
    {
        "category": "Context is Key",
        "difficulty": "Hard",
        "question": "The silence in the room was ______, filled with unspoken tension.",
        "options": ["palpable", "quiet", "happy", "confusing"],
        "correctAnswer": 0 // Index of "palpable" (almost tangible)
    },
    {
        "category": "Context is Key",
        "difficulty": "Hard",
        "question": "The politician's apology seemed ______ and lacked sincerity.",
        "options": ["heartfelt", "perfunctory", "long", "loud" ],
        "correctAnswer": 1 // Index of "perfunctory" (done out of duty, not genuine)
    },
    {
        "category": "Context is Key",
        "difficulty": "Hard",
        "question": "Despite his ______ appearance, he possessed a sharp and analytical mind.",
        "options": ["disheveled", "neat",  "angry", "lazy" ],
        "correctAnswer": 0 // Index of "disheveled" (contrasting with expectations)
    }
]

export const questions2 = [

    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Medium",
        "question": "The writer's prose was clear, concise, and eloquent.",
        "options": ["prose", "clear", "eloquent", "lengthy"],
        "correctAnswer": 3  // Index of "lengthy"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Medium",
        "question": "Her smile was radiant, infectious, and filled with warmth. ",
        "options": ["radiant", "infectious", "warmth", "timid"],
        "correctAnswer": 3  // Index of "timid"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Medium",
        "question": "The investigation was thorough, meticulous, and left no stone unturned.",
        "options": ["thorough", "meticulous", "careless", "unturned"],
        "correctAnswer": 2  // Index of "careless"
    },
     {
        "category": "Spot the Odd Word Out",
        "difficulty": "Medium",
        "question": "The old painting was faded, delicate, and showed signs of its age",
        "options": ["faded", "delicate", "age", "pristine" ],
        "correctAnswer": 3  // Index of "pristine"
    },
     {
        "category": "Spot the Odd Word Out",
        "difficulty": "Medium",
        "question": "The speaker's argument was persuasive, logical, and well-supported.",
        "options": ["persuasive", "logical", "supported", "flawed" ],
        "correctAnswer": 3  // Index of "flawed"
    },

    // Meaning Master
    {
        "category": "Meaning Master",
        "difficulty": "Medium",
        "question": "Ambiguous",
        "options": [ "Clear", "Unclear", "Loud",  "Happy" ],
        "correctAnswer": 1 // Index of "Unclear"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Medium",
        "question": "Flourish",
        "options": [ "Succeed", "Wither", "Hide", "Change" ],
        "correctAnswer": 0 // Index of "Succeed"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Medium",
        "question": "Intrepid",
        "options": [ "Fearless",  "Cowardly", "Bright", "Dirty" ],
        "correctAnswer": 0 // Index of "Fearless"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Medium",
        "question": "Obsolete",
        "options": [ "Outdated", "New", "Shiny","Loud" ],
        "correctAnswer": 0 // Index of "Outdated"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Medium",
        "question": "Negligent",
        "options": [ "Lazy", "Careful", "Shiny", "Fast" ],
        "correctAnswer": 0 // Index of "Lazy" (careless is a close synonym)
    },

     // Context is Key
    {
        "category": "Context is Key",
        "difficulty": "Medium",
        "question": "The storm raged outside, creating a ______ atmosphere within the cozy house.",
        "options": ["peaceful", "chaotic", "bright", "quiet"],
        "correctAnswer": 0 // Index of "peaceful" (contrast with the storm)
    },
    {
        "category": "Context is Key",
        "difficulty": "Medium",
        "question": "The museum exhibit was filled with ______ artifacts from ancient civilizations..",
        "options": ["fascinating", "boring", "modern", "large"],
        "correctAnswer": 0 // Index of "fascinating"
    },
    {
        "category": "Context is Key",
        "difficulty": "Medium",
        "question": "His ______ response to the difficult question surprised everyone.",
        "options": ["thoughtful", "quick", "angry", "confusing"],
        "correctAnswer": 0 // Index of "thoughtful"
    },
    {
        "category": "Context is Key",
        "difficulty": "Medium",
        "question": "The recipe called for a ______ amount of spices to create a complex flavor profile.",
        "options": ["generous", "small", "plain", "spicy" ],
        "correctAnswer": 0 // Index of "generous"
    },
    {
        "category": "Context is Key",
        "difficulty": "Medium",
        "question": "Despite the challenge, she remained ______  and determined to succeed.",
        "options": ["optimistic", "discouraged",  "angry", "lazy" ],
        "correctAnswer": 0 // Index of "optimistic"
    }
]

export const questions3 = [
    // Spot the Odd Word Out
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "The children played in the park on a sunny afternoon.",
        "options": ["park", "children", "played", "cold"],
        "correctAnswer": 3  // Index of "cold"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "She carefully wrapped the present in colorful paper.",
        "options": ["wrapped", "present", "paper", "dull"],
        "correctAnswer": 3  // Index of "dull"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "The birds sang sweetly in the branches of the tree.",
        "options": ["sang", "sweetly", "tree", "loudly"],
        "correctAnswer": 3  // Index of "loudly"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "The audience cheered enthusiastically as the singer took the stage.",
        "options": ["audience",  "cheered", "singer", "quietly"],
        "correctAnswer": 3 // Index of "quietly"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "The old book had a musty smell from years of storage.",
        "options": ["book", "smell",  "musty", "new"],
        "correctAnswer": 3 // Index of "new"
    },


    // Meaning Master
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Friendly",
        "options": [ "Amicable", "Loud", "Angry", "Shy" ],
        "correctAnswer": 0 // Index of "Amicable"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Generous",
        "options": [ "Giving", "Mean", "Careful", "Quiet" ],
        "correctAnswer": 0 // Index of "Giving"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Temporary",
        "options": [ "Brief",   "Long", "Important", "Clean" ],
        "correctAnswer": 0 // Index of "Brief"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Clumsy",
        "options": [ "Awkward",  "Happy", "Graceful","Loud" ],
        "correctAnswer": 0 // Index of "Awkward"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Fragile",
        "options": [ "Delicate",  "Strong", "Shiny", "Fast" ],
        "correctAnswer": 0 // Index of "Delicate"
    },

     // Context is Key
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "The old clock ticked ______ in the quiet room.",
        "options": ["loudly", "brightly", "quickly", "silently"],
        "correctAnswer": 0 // Index of "loudly"
    },
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "The flowers in the vase had a ______ fragrance.",
        "options": ["sweet", "terrible", "spicy", "large"],
        "correctAnswer": 0 // Index of "sweet"
    },
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "Her laughter was ______ and filled the room.",
        "options": ["joyful","quiet","sad", "angry"],
        "correctAnswer": 0 // Index of "joyful"
    },
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "After a long day, all he wanted was a ______ meal.",
        "options": ["delicious", "quick", "cold", "healthy"],
        "correctAnswer": 1 // Index of "quick"
    },
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "The ocean waves crashed ______ against the shore.",
        "options": ["loudly","gently","slowly", "happily"],
        "correctAnswer": 0 // Index of "loudly"
    }
]

export const questions4 = [
    // Spot the Odd Word Out
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "The cat purred happily, sitting in the warm sunlight.",
        "options": ["cat", "happily", "warm", "purred"],
        "correctAnswer": 2  // Index of "warm"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "He ate his breakfast slowly, enjoying each bite.",
        "options": ["breakfast", "enjoying", "bite", "quickly"],
        "correctAnswer": 3  // Index of "quickly"
    },
    {
        "category": "Spot the Odd Word Out",
        "difficulty": "Easy",
        "question": "The bright flowers bloomed beautifully in the garden.",
        "options": ["bloomed", "bright", "garden", "ugly"],
        "correctAnswer": 3  // Index of "ugly"
    },
    // ... Add 7 more "Spot the Odd Word Out" Questions

    // Meaning Master
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Brave",
        "options": [ "Fearless", "Loud", "Weak", "Happy" ],
        "correctAnswer": 0 // Index of "Fearless"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Thrive",
        "options": [ "Wither", "Hide", "Grow", "Disappear" ],
        "correctAnswer": 2 // Index of "Grow"
    },
    {
        "category": "Meaning Master",
        "difficulty": "Easy",
        "question": "Spacious",
        "options": [ "Roomy", "Cramped", "Bright", "Dirty" ],
        "correctAnswer": 0 // Index of "Roomy"
    },
    // ... Add 7 more "Meaning Master" Questions

    // Context is Key
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "The dog let out a loud ______ as the stranger approached.",
        "options": [ "purr", "bark", "chirp", "meow" ],
        "correctAnswer": 1 // Index of "bark"
    },
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "The campfire burned with a ______ glow.",
        "options": [ "bright", "dull", "blue", "cold" ],
        "correctAnswer": 0 // Index of "bright"
    },
    {
        "category": "Context is Key",
        "difficulty": "Easy",
        "question": "The chef's latest dish was absolutely ______.",
        "options": [ "delicious",  "terrible", "large", "green" ],
        "correctAnswer": 0 // Index of "delicious"
    },
]


export const word_questions = questions1.concat(questions2, questions3, questions4) as WordChallenge[]

export const bible_questions = [
  {
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "Matthew quotes from which Old Testament book to show Jesus as the fulfillment of prophecy?",
    "options": ["Isaiah", "Daniel", "Jeremiah", "Micah"],
    "correctAnswer": 0
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "What unique metaphor does Matthew use to describe the Kingdom of Heaven in chapter 13?",
    "options": ["A mustard seed", "Leaven", "A treasure hidden in a field", "All of the above"],
    "correctAnswer": 3
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "In Matthew, which disciple's mother-in-law does Jesus heal?",
    "options": ["John's", "Peter's", "James's", "Thomas's"],
    "correctAnswer": 1
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "Matthew's account of the Sermon on the Mount begins in which chapter?",
    "options": ["Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6"],
    "correctAnswer": 2
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "Which event does Matthew uniquely report about Peter during Jesus' walking on water?",
    "options": ["Peter also walks on water", "Peter falls into the sea", "Peter refuses to step out", "Peter watches from the boat"],
    "correctAnswer": 0
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "Matthew notes that the guards at Jesus' tomb were placed at the request of whom?",
    "options": ["Pontius Pilate", "The Sanhedrin", "Caiaphas the High Priest", "Herod Antipas"],
    "correctAnswer": 1
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "Which parable unique to Matthew involves workers in a vineyard hired at different times of the day?",
    "options": ["The Parable of the Tenants", "The Parable of the Sower", "The Parable of the Weeds", "The Parable of the Workers in the Vineyard"],
    "correctAnswer": 3
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "In Matthew, Jesus' genealogy traces his lineage back to which patriarch?",
    "options": ["Abraham", "Adam", "Noah", "Moses"],
    "correctAnswer": 0
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "How does Matthew symbolically represent Jesus' authority to forgive sins through his miracles?",
    "options": ["Cleansing of a leper", "Healing a paralyzed man", "Restoring sight to the blind", "Casting out demons"],
    "correctAnswer": 1
},
{
    "category": "Biblical Mode",
    "difficulty": "Hard",
    "question": "Matthew concludes with the Great Commission. Where does this event take place?",
    "options": ["On a mountain in Galilee", "In the temple in Jerusalem", "On the shores of the Sea of Galilee", "In a house in Capernaum"],
    "correctAnswer": 0
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "What profession did Matthew have before he became a disciple of Jesus?",
  "options": ["Fisherman", "Tax Collector", "Carpenter", "Shepherd"],
  "correctAnswer": 1
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "Which term does Matthew use more than 50 times throughout his Gospel?",
  "options": ["Covenant", "Kingdom", "Messiah", "Temple"],
  "correctAnswer": 1
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "How does Matthew's Gospel primarily portray Jesus in its opening chapters?",
  "options": ["As a teacher", "As a healer", "As a king", "As a servant"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "Which parable is unique to the Gospel of Matthew?",
  "options": ["The Good Samaritan", "The Prodigal Son", "The Unmerciful Servant", "The Rich Fool"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "According to Matthew, what significant event does Jesus predict?",
  "options": ["The destruction of Jerusalem", "His own resurrection", "The coming of the Holy Spirit", "The conversion of Paul"],
  "correctAnswer": 0
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "What does the name 'Matthew' mean?",
  "options": ["God has heard", "Gift of Jehovah", "Asked of God", "God remembers"],
  "correctAnswer": 1
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "Which group of people is Matthew particularly addressing in his Gospel?",
  "options": ["Gentiles", "Romans", "Jews", "Egyptians"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "What unique aspect of Jesus' teachings is highlighted by Matthew through his use of a specific term over 50 times?",
  "options": ["The law", "Forgiveness", "The Kingdom of Heaven", "Sacrifice"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "What key theme does Matthew explore through the unique parables not found in other Gospels?",
  "options": ["Justice", "Judgment", "Love", "Kingdom of Heaven"],
  "correctAnswer": 3
},
{
  "category": "Biblical Mode",
  "difficulty": "Medium",
  "question": "Which action of Jesus is specifically highlighted by Matthew as fulfilling Hebrew prophecies?",
  "options": ["His birth in Bethlehem", "His baptism by John", "His miracles", "His sermons on the mount"],
  "correctAnswer": 0
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "Who wrote the Gospel of Matthew?",
  "options": ["John", "Mark", "Luke", "Matthew"],
  "correctAnswer": 3
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "What was Matthew's profession before following Jesus?",
  "options": ["Fisherman", "Tax Collector", "Carpenter", "Priest"],
  "correctAnswer": 1
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "Which language did Matthew originally write his Gospel in?",
  "options": ["Greek", "Aramaic", "Hebrew", "Latin"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "Approximately how many years after Jesus' death was the Gospel of Matthew written?",
  "options": ["8 years", "15 years", "23 years", "30 years"],
  "correctAnswer": 0
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "Which audience was Matthew's Gospel primarily written for?",
  "options": ["Gentiles", "Romans", "Jews", "Greeks"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "How does Matthew frequently refer to Jesus in his Gospel?",
  "options": ["King of Jews", "Son of David", "Lamb of God", "Messiah"],
  "correctAnswer": 1
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "What key theme does Matthew emphasize that Jesus preached about?",
  "options": ["Kingdom of God", "Law of Moses", "Judgment Day", "Love of Money"],
  "correctAnswer": 0
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "What unique aspect of Jesus' teachings is included only in Matthew's Gospel?",
  "options": ["Beatitudes", "Lord's Prayer", "Parables about the Kingdom", "Sermon on the Mount"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "What is a major purpose of Matthew's Gospel according to the PDF?",
  "options": ["To record the history of Jesus", "To convince skeptics about Jesus", "To link Jesus' teachings to Hebrew Scriptures", "To introduce new laws"],
  "correctAnswer": 2
},
{
  "category": "Biblical Mode",
  "difficulty": "Easy",
  "question": "Which key figure's genealogy does Matthew trace to establish Jesus' lineage?",
  "options": ["Moses", "Abraham", "Solomon", "David"],
  "correctAnswer": 3
}
] as WordChallenge[]
