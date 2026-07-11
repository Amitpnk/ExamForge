export const bloodRelations = {
  id: 'blood-relations',
  title: 'Blood Relations',
  icon: '👪',
  color: '#9d174d',
  category: 'Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `DIRECT STATEMENT PUZZLES
A chain of relations is given directly (e.g. "A is B's brother, B is C's mother") and you trace the final relationship.

"POINTING TO A PHOTOGRAPH" PUZZLES
A person describes someone in a photo using a nested relation (e.g. "His mother is the only daughter of my mother"). These almost always collapse to a simple relation once decoded.

CODED / SYMBOL-BASED PUZZLES
Symbols stand for relations (e.g. A+B = A is father of B, A–B = A is wife of B, A×B = A is brother of B, A÷B = A is mother of B). You must decode each symbol before combining them.

MULTI-PERSON / FAMILY TREE PUZZLES
Several people and relations are given together (often 5-6 people) and you must draw a full family tree to answer one or more questions about it.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Draw a simple family tree as you read — don't try to hold the relations in your head. Use "+" for male, "○" for female, and a line down for parent→child.
2. Resolve the relations ONE AT A TIME, in the order given, adding each new person to your tree as you go.
3. For "only son" / "only daughter" phrases, remember these usually resolve to a SPECIFIC known person in the chain (often the speaker or a person already named) — resolve this piece first.
4. For coded/symbol puzzles, write out a small legend for every symbol BEFORE combining them (e.g. "+ = father, – = wife, × = brother, ÷ = mother"), then substitute step by step from the innermost relation outward.
5. Note gender carefully. "Sister/brother/father/mother/husband/wife" fix gender; "child/sibling/parent/cousin" do not — track ambiguity rather than guessing.
6. Once the tree is complete, find the two people the question actually asks about and count the generations between them to name the exact relation (sibling, parent, grandparent, aunt/uncle, etc).`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• "My mother's only daughter" (said by a woman) = the speaker herself. "My father's only son" (said by a man) = the speaker himself. Spot this shortcut immediately — it collapses the whole puzzle.
• Siblings normally share BOTH parents unless the question explicitly says "step" or "half" — don't assume otherwise.
• Watch for red-herring information: some puzzles name a person (e.g. "E is D's mother") that isn't needed to answer the actual question — don't let it distract you from the tree you've already built.
• If a puzzle appears to give a person two different fathers/mothers through two separate chains, check whether the puzzle intends those two chains to point to the SAME person — this is a deliberate consistency-check trap.
• In coded puzzles, resolve strictly left to right in the order the symbols chain the people together — decoding out of order is the most common mistake.
• When the final answer could be male or female, check every clue again for a gender-fixing word before choosing an option like "sibling" over "brother/sister".`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      options: ['Mother', 'Aunt', 'Sister', 'Grandmother'],
      correct: 0,
      explanation: "\"The only daughter of my mother\" is the woman herself. So the man's mother is the woman — she is his Mother."
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?',
      options: ['Uncle', 'Father', 'Brother', 'Grandfather'],
      correct: 0,
      explanation: 'A, B and C are siblings (A is male, B is female, and B-C are siblings). C is the father of D, so C\'s brother A is D\'s Uncle.'
    },
    {
      id: 3,
      difficulty: 'medium',
      question: "Introducing a man, a woman said, \"His wife is the only daughter of my father.\" How is the woman related to the man?",
      options: ['Wife', 'Sister', 'Mother', 'Daughter'],
      correct: 0,
      explanation: "\"The only daughter of my father\" is the woman herself, so the man's wife is the woman — she is his Wife."
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'If A+B means A is the father of B, A–B means A is the wife of B, A×B means A is the brother of B, and A÷B means A is the mother of B, how is P related to R in the expression P÷Q+R?',
      options: ['Grandmother', 'Grandfather', 'Mother', 'Aunt'],
      correct: 0,
      explanation: 'P÷Q means P is the mother of Q; Q+R means Q is the father of R. So P is the mother of R\'s father — P is R\'s (paternal) Grandmother.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'If A+B means A is the son of B, A–B means A is the daughter of B, and A×B means A is the husband of B, how is P related to R in the expression P+Q–R?',
      options: ['Grandson', 'Grandfather', 'Nephew', 'Son'],
      correct: 0,
      explanation: 'P+Q means P is the son of Q; Q–R means Q is the daughter of R. So Q is R\'s child and P is Q\'s child — P is R\'s Grandson.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: "Introducing a boy, a girl said, \"His father is the only son of my grandfather.\" How is the girl related to the boy?",
      options: ['Sister', 'Cousin', 'Aunt', 'Niece'],
      correct: 0,
      explanation: "\"The only son of my grandfather\" is the girl's own father. So the boy's father = the girl's father — they are siblings, making her his Sister."
    },
    {
      id: 7,
      difficulty: 'hard',
      question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
      options: ['Granddaughter', 'Grandmother', 'Daughter', 'Niece'],
      correct: 0,
      explanation: "Since A is B's sister, C (B's mother) is also A's mother. D is C's father, making D A's maternal grandfather — so A is D's Granddaughter. (E is extra information not needed for this question.)"
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'In a family: R is the mother of Q. U is the sister of Q. V is the father of R. S is the daughter of V. How is U related to V?',
      options: ['Granddaughter', 'Daughter', 'Niece', 'Sister'],
      correct: 0,
      explanation: "U is Q's sister, so U is also R's daughter (same mother as Q). V is R's father, making V the grandfather of both Q and U — so U is V's Granddaughter. (S, V's daughter, is R's sibling and just an aunt to Q and U.)"
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'If P@Q means P is the sister of Q, P#Q means P is the husband of Q, and P%Q means P is the mother of Q, how is D related to A given D@B, B#C, and C%A?',
      options: ['Aunt', 'Mother', 'Sister', 'Grandmother'],
      correct: 0,
      explanation: "C%A means C is A's mother. B#C means B is C's husband, so B is A's father. D@B means D is B's sister — so D is A's (paternal) Aunt."
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'P is the father of Q. Q is the brother of R. S is the father of R. How is P related to S?',
      options: ['They are the same person', 'Brothers', 'Father and son', 'Cannot be determined'],
      correct: 0,
      explanation: "Q and R are siblings, so they share the same father. P is given as Q's father and S is given as R's father — since a person has only one father, P and S must be the same person."
    }
  ]
}
