export const seatingArrangement = {
  id: 'seating-arrangement',
  title: 'Seating Arrangement',
  icon: '🪑',
  color: '#b45309',
  tips: [
    {
      title: 'Types You Will See',
      content: `LINEAR SEATING (SINGLE ROW)
People are seated in a straight row facing the same direction, and clues describe who sits where relative to others.

LINEAR SEATING WITH MIXED FACING DIRECTIONS
Some people face north and others face south in the same row — left/right must be interpreted relative to each person's own facing direction.

CIRCULAR / SQUARE TABLE SEATING (FACING CENTRE OR OUTWARD)
People sit around a circular or square table, either all facing the centre or all facing outward (or a mix) — left/right and clockwise/anticlockwise must be tracked carefully.

DOUBLE-ROW SEATING (FACING EACH OTHER)
Two parallel rows of people face each other, and clues describe both same-row and opposite-row (facing) relationships.

CONDITION-BASED / LINKED SEATING
Seating clues are combined with extra conditions (occupation, blood relation, month/day) that must all be satisfied together.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. First decide the total number of seats/people and sketch the layout (row, circle, or two rows) before touching any clue.
2. Place the most SPECIFIC clues first — an exact position (e.g. "sits at one end," "sits at position 4") anchors your diagram fastest.
3. Process relative clues ("immediately to the right of," "second to the left of," "between X and Y") one at a time, adding each new person to the sketch as you resolve them.
4. For circular arrangements facing the CENTRE, left/right is the OPPOSITE of what it would be if facing outward — always confirm which way people are facing before deciding direction.
5. If a clue can be satisfied in more than one way (e.g. two possible seats), keep both possibilities open and use the NEXT clue to eliminate one — don't guess.
6. Once every clue is placed, verify the completed diagram satisfies ALL the given clues simultaneously before reading off the answer — a single skipped clue can silently produce a wrong arrangement.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• In circular arrangements facing the centre, "immediate left" and "immediate right" are reversed compared to what your instinct says facing outward — re-derive this every single time.
• "A sits second to the right of B" means exactly 2 seats away in the rightward direction — it's easy to miscount this as "2 people away" or the wrong direction.
• In mixed-facing-direction rows, two people's "left" can point in physically opposite real-world directions — always work from each person's own perspective, not a fixed row direction.
• "Immediately between" (X is immediately between Y and Z) fixes X's position exactly, while "between" alone can allow other people in between too — don't treat them as identical.
• At a circular table, moving clockwise vs anticlockwise from the same seat gives different results — always match the direction stated in the clue exactly.
• When two arrangements both seem to satisfy the clues, re-check for a default assumption (e.g. "all face the centre unless mentioned") — many puzzles rely on this default going unnoticed.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'Six friends A, B, C, D, E, F are sitting in a row facing North. B is at the extreme left, and F is at the extreme right. C sits immediately to the right of B. Where does C sit?',
      options: ['Second from the left', 'Second from the right', 'Third from the left', 'At the extreme right'],
      correct: 0,
      explanation: 'B is at position 1 (extreme left); "immediately to the right of B" places C at position 2, i.e. second from the left.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'Five people are sitting around a circular table, all facing the centre. Raj is sitting to the immediate right of Simran. In which direction is Simran sitting relative to Raj?',
      options: ['Immediate left', 'Immediate right', 'Directly opposite', 'Two seats away'],
      correct: 0,
      explanation: "If Raj is to the immediate right of Simran, then from Raj's perspective, Simran must be sitting to his immediate left."
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'In a row of 7 people facing North, Meera sits exactly in the middle. How many people sit on each side of her?',
      options: ['3', '4', '2', '5'],
      correct: 0,
      explanation: 'With 7 people and Meera in the exact middle (4th position), 3 people sit on her left and 3 on her right.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'Four friends P, Q, R, and S sit around a square table, one on each side, all facing the centre. P sits opposite Q. R sits to the immediate right of P. Where does S sit relative to Q?',
      options: ['Immediate right of Q', 'Immediate left of Q', 'Opposite Q', 'Same side as Q'],
      correct: 0,
      explanation: 'Going clockwise starting at P: P → R → Q → S → back to P. So S sits immediately to the right of Q (and opposite R).'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'In a row of 10 students facing North, Anil is 4th from the left and Bina is 3rd from the right. How many students sit between Anil and Bina?',
      options: ['3', '4', '2', '5'],
      correct: 0,
      explanation: "Bina's position from the left = 10 − 3 + 1 = 8th. The number of students strictly between the 4th and 8th positions is 8 − 4 − 1 = 3."
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Six people A–F sit in a row. C sits third from the left. Two people sit between C and F. F sits to the right of C. How many people sit to the right of F?',
      options: ['0', '1', '2', '3'],
      correct: 0,
      explanation: 'With C at position 3 and exactly two people between C and F (F to the right), F sits at position 3 + 2 + 1 = 6 — the last seat, so no one sits to F\'s right.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Five people sit around a circular table facing the centre. Y is seated, Z sits immediately to the right of Y, X sits second to the left of Y, and W sits between X and Z. Who sits immediately to the left of X?',
      options: ['W', 'V', 'Z', 'Y'],
      correct: 0,
      explanation: 'Placing Y, Z (immediate right of Y), W (between X and Z), and X (second to the left of Y) clockwise gives the order Y, Z, W, X, and the remaining person V. So W sits immediately to X\'s left.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'Seven people sit in a row facing North. S is third from the left. Exactly two people sit between S and T, with T to the right of S. U sits immediately to the right of T. If V sits immediately to the left of S, what is V\'s position from the right end?',
      options: ['6th from the right', '5th from the right', '7th from the right', '4th from the right'],
      correct: 0,
      explanation: 'S is at position 3 from the left, T (two seats after S) is at position 6, and U (immediately right of T) is at position 7. V, immediately to the left of S, is at position 2 from the left, which is the 6th position from the right (7 − 2 + 1 = 6).'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'Eight people sit around a circular table, four facing the centre and four facing outward, alternately (no two adjacent people face the same way). If A faces the centre, how many of the people sitting immediately next to A face outward?',
      options: ['2', '0', '1', 'Cannot be determined'],
      correct: 0,
      explanation: 'Since directions alternate with every adjacent seat, both people sitting immediately next to A (who faces the centre) must face outward.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Six people A, B, C, D, E, F sit around a circular table facing the centre. A sits between B and C. E sits second to the right of A. D sits immediately to the right of E. F is the only person left. Where does F sit relative to B?',
      options: ['Immediately to the left of B', 'Immediately to the right of B', 'Opposite B', 'Two seats to the right of B'],
      correct: 0,
      explanation: 'Placing A, then B and C on either side, E second to A\'s right, D immediately right of E, and F in the one remaining seat gives the clockwise order A, C, E, D, F, B — so F sits immediately to the left of B.'
    }
  ]
}
