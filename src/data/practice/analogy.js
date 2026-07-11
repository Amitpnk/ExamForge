export const analogy = {
  id: 'analogy',
  title: 'Analogy (Word Relationships)',
  icon: '🔗',
  color: '#7c3aed',
  category: 'Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `TOOL / WORKER : FUNCTION
The first word is a tool, instrument, or worker and the second is what it does or measures (e.g. Pen : Write, Thermometer : Temperature).

SYNONYM / ANTONYM PAIRS
Both pairs mean the same thing, or both pairs mean opposite things (e.g. Diligent : Hardworking, Optimistic : Pessimistic).

CREATOR : CREATION
The first word is a person/thing that produces the second (e.g. Author : Book, Sculptor : Statue).

YOUNG : ADULT / IMMATURE : MATURE FORM
The first word is the juvenile or early stage of the second (e.g. Cub : Lion, Tadpole : Frog).

ANIMAL : DWELLING / GROUP NAME
The first word is an animal and the second is where it lives or what a group of them is called (e.g. Bird : Nest, Wolf : Pack).

PART-TO-WHOLE / CLASS-MEMBER
One word is a part, member, or example of the other (e.g. Page : Book, Petal : Flower).

WORKER : PERSON SERVED
The first word is a professional and the second is who they act on or for (e.g. Doctor : Patient, Teacher : Student).`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Build a precise sentence linking the first pair (e.g. "A pen is used to WRITE"), not just a vague topic connection.
2. Keep the sentence as specific as possible — "a knife is used to cut" is better than "a knife is sharp," which is a property, not the core relationship.
3. Apply the EXACT same sentence structure to each option, substituting the given word: "A knife is used to ___?"
4. Check the ORDER of the relationship matches — if the given pair is Tool : Function, the answer must also be Tool : Function, not Function : Tool.
5. If two options both seem plausible, pick the one that mirrors the ORIGINAL pair's relationship most exactly, not just the same general category.
6. For synonym/antonym pairs, confirm both words in each pair share the same degree of meaning (a mild word shouldn't be paired with an extreme one).`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• Reversed-order trap: an option may state the correct words but in the wrong sequence (e.g. giving "Function : Tool" when the question needs "Tool : Function") — always re-check direction.
• Same-category, wrong-relation trap: an option word may belong to the same topic as the correct answer but express a different link (e.g. "Blade" is knife-related but is a PART of a knife, not its function).
• Distractors reflecting the tool used rather than the actual relationship (e.g. "Chisel" for Sculptor : Statue) are common — the creator makes the OUTCOME, not the instrument.
• For young–adult analogies, remember not every animal's baby shares a generic name — a young horse is a "foal," a young goat is a "kid," not "calf" or "cub."
• Write the core relationship as a short sentence before glancing at the options — this stops you from being pulled toward a merely "related-sounding" word.
• Double-check antonym pairs aren't secretly synonyms of a different intensity (e.g. "Generous" is opposite to "Miserly," not merely different from "Wealthy").`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'Pen : Write :: Knife : ?',
      options: ['Cut', 'Sharp', 'Blade', 'Kitchen'],
      correct: 0,
      explanation: 'A pen is a tool used to write; a knife is a tool used to cut. The relationship is TOOL : FUNCTION.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'Doctor : Patient :: Teacher : ?',
      options: ['Student', 'School', 'Blackboard', 'Lesson'],
      correct: 0,
      explanation: 'A doctor treats a patient; a teacher instructs a student. The relationship is WORKER : PERSON SERVED.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'Diligent : Hardworking :: Frugal : ?',
      options: ['Thrifty', 'Wasteful', 'Rich', 'Careless'],
      correct: 0,
      explanation: 'Diligent and Hardworking are synonyms; Frugal and Thrifty are also synonyms (both mean careful with resources).'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'Cub : Lion :: Calf : ?',
      options: ['Elephant', 'Horse', 'Dog', 'Goat'],
      correct: 0,
      explanation: 'A Cub is the young of a Lion; a Calf is the young of an Elephant (also cattle and whales). A young horse is a "foal," a young dog a "puppy," and a young goat a "kid" — not "calf."'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'Bird : Nest :: Bee : ?',
      options: ['Hive', 'Honey', 'Sting', 'Flower'],
      correct: 0,
      explanation: 'A bird lives in a nest; a bee lives in a hive. The relationship is ANIMAL : DWELLING.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Author : Book :: Sculptor : ?',
      options: ['Statue', 'Chisel', 'Marble', 'Museum'],
      correct: 0,
      explanation: 'An author creates a book; a sculptor creates a statue. The relationship is CREATOR : CREATION, not the tool used ("Chisel") or the raw material ("Marble").'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Cow : Herd :: Wolf : ?',
      options: ['Pack', 'Den', 'Howl', 'Cub'],
      correct: 0,
      explanation: 'A group of cows is called a herd; a group of wolves is called a pack. The relationship is ANIMAL : COLLECTIVE NOUN FOR ITS GROUP.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'Optimistic : Pessimistic :: Generous : ?',
      options: ['Miserly', 'Kind', 'Charitable', 'Wealthy'],
      correct: 0,
      explanation: 'Optimistic and Pessimistic are antonyms; Generous and Miserly are also antonyms. "Wealthy" is unrelated to generosity in meaning.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'Thermometer : Temperature :: Speedometer : ?',
      options: ['Speed', 'Distance', 'Time', 'Fuel'],
      correct: 0,
      explanation: 'A thermometer measures temperature; a speedometer measures speed. The relationship is INSTRUMENT : QUANTITY MEASURED.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Tadpole : Frog :: Caterpillar : ?',
      options: ['Butterfly', 'Cocoon', 'Moth', 'Larva'],
      correct: 0,
      explanation: 'A tadpole is the immature form that matures into a frog; a caterpillar is the immature form that matures into a butterfly. "Cocoon" is the pupal casing, not the adult insect, and "Larva" is the caterpillar\'s own stage name, not what it becomes.'
    }
  ]
}
