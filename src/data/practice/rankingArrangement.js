export const rankingArrangement = {
  id: 'ranking-arrangement',
  title: 'Ranking & Arrangement',
  icon: '🏆',
  color: '#c026d3',
  category: 'Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `LINEAR RANK / ORDER PUZZLES
Comparisons of height, marks, or age are given (e.g. "A is taller than B but shorter than C") and you must build a single ordered chain.

POSITION-FROM-TOP-AND-BOTTOM PUZZLES
In a queue or rank list, a person's position from the top and from the bottom is given, and you must find the total number of people.

COMPARATIVE (RELATIVE) RANKING FROM CLUES
Multiple comparison clues are combined to build one master ranking of several people.

BEFORE/AFTER RANK-CHANGE PUZZLES
A person's rank changes between two events (e.g. two tests), and you must work with the old rank, new rank, and the size of the change.

MIXED-CRITERIA RANKING
People are ranked by more than one attribute (e.g. height and weight), and the tallest person need not be the heaviest.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Convert every comparison clue into a single symbol chain (use > for "taller/older/more" and < for the opposite), e.g. "A is taller than B" → A > B.
2. Combine all the individual chains into ONE master ranking by matching common names between clues — merge chains that share a person.
3. Where a clue says "X is the tallest/shortest," anchor that person at the very top/bottom of your master chain first, then place everyone else relative to it.
4. For "position from top and bottom" puzzles, use the formula: Total people = (Position from top) + (Position from bottom) − 1.
5. To find how many people are between two ranks, subtract their positions and subtract 1 (not the raw difference) — count the people strictly between them, not including either end.
6. Read comparison words carefully: "taller than" is strict (no ties), while "at least as tall as" allows equality — don't treat them the same unless the question says so.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• "A is taller than B" tells you nothing about how A compares to C unless a clue directly or indirectly links them — don't assume a full order from partial information.
• Position from top/bottom questions are a classic off-by-one trap — always use (top + bottom − 1), not simple addition, to find the total.
• When a rank "improves," the new rank NUMBER gets smaller (closer to 1st), not larger — don't confuse "better rank" with "higher number."
• Watch for whether the ranking is ascending (e.g. shortest to tallest) or descending (tallest to shortest) — re-read the question's framing before placing anyone at "the top."
• If multiple valid orderings satisfy all the clues, the question is asking for something that must be the same in every valid ordering (e.g. total count or a specific comparison), not a full unique sequence.
• Don't confuse "more than" with "more than or equal to" — some questions rely on this exact distinction to eliminate an option.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'In a class, Rohan is taller than Meena but shorter than Kiran. Who is the tallest among the three?',
      options: ['Kiran', 'Rohan', 'Meena', 'Cannot be determined'],
      correct: 0,
      explanation: 'Meena < Rohan < Kiran, so Kiran is the tallest of the three.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'In a row of students, Aman is 7th from the left and 12th from the right. How many students are there in the row?',
      options: ['18', '19', '17', '20'],
      correct: 0,
      explanation: 'Total = position from left + position from right − 1 = 7 + 12 − 1 = 18.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'Five friends A, B, C, D and E are standing in a queue. A is ahead of B, B is ahead of C, C is ahead of D, and D is ahead of E. Who is at the front of the queue?',
      options: ['A', 'B', 'E', 'D'],
      correct: 0,
      explanation: 'The order from front to back is A, B, C, D, E, so A is at the front.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: "In a rank list of 30 students, Priya's rank from the top is 12th. What is her rank from the bottom?",
      options: ['19', '18', '20', '17'],
      correct: 0,
      explanation: 'Rank from bottom = Total − Rank from top + 1 = 30 − 12 + 1 = 19.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'Ramesh scored more than Suresh but less than Naresh. Naresh scored less than Mahesh. Who scored the highest?',
      options: ['Mahesh', 'Naresh', 'Ramesh', 'Cannot be determined'],
      correct: 0,
      explanation: 'Suresh < Ramesh < Naresh < Mahesh, so Mahesh scored the highest.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: "In an examination, Ajay's rank improved from 15th in the first test to 9th in the second test. By how many places did his rank improve?",
      options: ['6', '9', '15', '24'],
      correct: 0,
      explanation: 'A rank improves as the number gets smaller: 15th to 9th is an improvement of 15 − 9 = 6 places.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: "Six students are ranked based on their marks. Neha is ranked 3rd from the top, and there are 2 students between Neha and Farah, who is ranked below her. What is Farah's rank from the top?",
      options: ['6th', '5th', '4th', 'Cannot be determined'],
      correct: 0,
      explanation: "Neha is 3rd from the top; with exactly 2 students between Neha and Farah (below her), Farah's rank is 3 + 2 + 1 = 6th from the top."
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'In a row of students arranged by height (tallest first), Vikram is 14th from the top and Sana is 9th from the bottom. If there are 6 students between Vikram and Sana, how many students are there in the row?',
      options: ['29', '30', '28', '31'],
      correct: 0,
      explanation: "Sana's position from the top = Total − 9 + 1 = Total − 8. Students between her and Vikram (14th from top) = (Total − 8) − 14 − 1 = Total − 23. Setting this equal to 6 gives Total = 29."
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'A, B, C, D, and E are ranked based on their weight. B is heavier than only D. C is heavier than B. A is heavier than C but lighter than E. Who is the heaviest?',
      options: ['E', 'A', 'C', 'B'],
      correct: 0,
      explanation: 'From the clues: E > A > C > B > D (since B is heavier than only D, C is heavier than B, and A is heavier than C but lighter than E). So E is the heaviest.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'In a race of five runners, Vijay finishes before Tarun, Tarun finishes before Rahul, and Rahul finishes before Sameer. Karan finishes last. Who finishes first?',
      options: ['Vijay', 'Tarun', 'Rahul', 'Karan'],
      correct: 0,
      explanation: 'The order deduced from the clues is Vijay, Tarun, Rahul, Sameer, and Karan (who finishes last) — so Vijay finishes first.'
    }
  ]
}
