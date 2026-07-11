export const codingDecoding = {
  id: 'coding-decoding',
  title: 'Coding–Decoding',
  icon: '🔐',
  color: '#0f766e',
  category: 'Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `LETTER SHIFTING
Each letter of the word is moved forward or backward by a fixed number of steps in the alphabet (e.g. +1, –2, +3).

ANALOGY / PATTERN CODING
A word-to-code pair is given; find the rule it follows (shift, reverse, position sum) and apply the same rule to a new word.

NUMBER CODING
Letters are replaced by their alphabet position (A=1 ... Z=26), either individually or as a summed/combined value.

SUBSTITUTION CODING
Everyday words are swapped for other words (e.g. "if red is called blue..."). You must substitute consistently, not use real-world meaning.

REVERSE / MIRROR CODING
The word is reversed, or each letter is replaced by its mirror position from the other end of the alphabet (A↔Z, B↔Y, C↔X...).

VOWEL/CONSONANT SPECIFIC CODING
Only vowels (or only consonants) follow a rule while the rest of the letters stay unchanged.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Write the alphabet with position numbers above it (A1 B2 C3 ... Z26) in the margin before you start — this makes shift/position lookups instant.
2. Compare the given word and its code LETTER BY LETTER. Note the difference for each position (e.g. C→D is +1, A→C is +2).
3. Check if the shift is CONSTANT (same for every letter) or VARIABLE (increases/decreases by position, e.g. +2,+3,+4...).
4. If the letters don't shift by a simple number, check for REVERSAL or MIRRORING (first letter of code = last letter of word, or A↔Z pairing).
5. If a number code is given, test whether it matches the SUM of alphabet positions or the individual two-digit positions strung together.
6. Once you've found the rule, apply it to the new word ONE LETTER AT A TIME rather than guessing the whole answer — this avoids careless mistakes.
7. Sanity-check your answer against just the first and last letter of the options before picking — it eliminates 2-3 options instantly.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• Watch for wrap-around: after Z, shifting continues from A again (Z+1 = A).
• A "reverse alphabet" code (A=Z, B=Y...) can be found quickly using the rule: code letter position = 27 − original position.
• In substitution coding, ignore real-world logic completely — follow only the chain of substitutions given in the question.
• Don't assume the shift is always +1; TA papers frequently use variable shifts (+1,+2,+3...) or negative shifts.
• Practice writing A-Z / 1-26 quickly from memory — this single skill saves the most time in this topic.
• Attempt Coding–Decoding questions early in the Reasoning section; they are formula-based and low-risk once the rule is spotted.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'In a code, each letter of a word is shifted forward by 1 place. If CAT is written as DBU, how is DOG written?',
      options: ['EPH', 'EPI', 'FPH', 'EQH'],
      correct: 0,
      explanation: 'Each letter shifts +1: D→E, O→P, G→H, giving EPH.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'If PENCIL is coded as ODMBHK (each letter shifted back by 1), how is TIGER coded?',
      options: ['SHFDQ', 'SHFQD', 'RHFDQ', 'SHEDQ'],
      correct: 0,
      explanation: 'Each letter shifts –1: T→S, I→H, G→F, E→D, R→Q, giving SHFDQ.'
    },
    {
      id: 3,
      difficulty: 'medium',
      question: "In a certain code language, 'book' is called 'pen', 'pen' is called 'chair', and 'chair' is called 'table'. What do you write with?",
      options: ['Pen', 'Chair', 'Table', 'Book'],
      correct: 1,
      explanation: "You write with a 'pen', but in this code 'pen' is called 'chair' — so the coded answer is Chair.",
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'If MANGO is coded as OGNAM (the letters are simply reversed), how is ORANGE coded?',
      options: ['EGNARO', 'EGNRAO', 'GENARO', 'EGANRO'],
      correct: 0,
      explanation: 'Reversing ORANGE letter by letter gives EGNARO.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'If TABLE is coded as 40 (sum of alphabet positions: T=20, A=1, B=2, L=12, E=5), what is the code for CHAIR?',
      options: ['39', '40', '41', '38'],
      correct: 0,
      explanation: 'C=3, H=8, A=1, I=9, R=18. Sum = 3+8+1+9+18 = 39.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: "If SUN is written as '192114' (each letter replaced by its two-digit alphabet position), how is MOON written?",
      options: ['13151514', '13151415', '13141514', '12151514'],
      correct: 0,
      explanation: 'M=13, O=15, O=15, N=14. Strung together: 13-15-15-14 = 13151514.'
    },
    {
      id: 7,
      difficulty: 'hard',
      question: 'In a code, A is written as Z, B as Y, C as X, and so on (mirror of the alphabet). How is HELLO written?',
      options: ['SVOOL', 'SVOLO', 'TVOOL', 'SVPOL'],
      correct: 0,
      explanation: 'Mirror rule: code position = 27 − original position. H(8)→S(19), E(5)→V(22), L(12)→O(15), L(12)→O(15), O(15)→L(12), giving SVOOL.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'If SCHOOL is coded as UEJQQN (every letter shifted forward by 2), how is COLLEGE coded?',
      options: ['EQNNGIG', 'EQNNGIF', 'DQNNGIG', 'EQMNGIG'],
      correct: 0,
      explanation: 'Each letter shifts +2: C→E, O→Q, L→N, L→N, E→G, G→I, E→G, giving EQNNGIG.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: "In a code, each vowel in a word is replaced by the next vowel in the sequence A,E,I,O,U (U loops back to A); consonants stay unchanged. How is TIGER written?",
      options: ['TOGIR', 'TIGOR', 'TAGIR', 'TOGER'],
      correct: 0,
      explanation: 'Vowels only shift: I→O, E→I. Consonants T, G, R stay the same, giving TOGIR.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'If FRIEND is coded as HUMJTK (the 1st letter shifts +2, 2nd +3, 3rd +4, 4th +5, 5th +6, 6th +7), how is CANDLE coded?',
      options: ['EDRIRL', 'EDQIRL', 'EDRIRK', 'FDRIRL'],
      correct: 0,
      explanation: 'C+2=E, A+3=D, N+4=R, D+5=I, L+6=R, E+7=L, giving EDRIRL.'
    }
  ]
}
