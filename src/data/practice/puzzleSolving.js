export const puzzleSolving = {
  id: 'puzzle-solving',
  title: 'Puzzle Solving',
  icon: '🧩',
  color: '#4338ca',
  category: 'Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `FLOOR-BASED PUZZLES
People live on different floors of a multi-storey building; clues describe relative floor positions ("above," "below," "immediately above," etc.).

BOX / STACK ARRANGEMENT PUZZLES
Boxes or items are stacked one above another; clues describe relative stacking position, using the same logic as floor puzzles.

SCHEDULING PUZZLES (DAYS / MONTHS / YEARS)
Events, people, or activities are assigned to specific days of the week, dates, or months based on given clues.

MATRIX / ATTRIBUTE-MATCHING PUZZLES
Several people are each matched to multiple independent attributes (e.g. fruit, city, colour, profession) using a grid of clues.

AGE-BASED PUZZLES
Clues describe relative or exact ages/age differences between people, sometimes tied to a birth year or a future/past point in time.

COMPARISON / QUANTITY PUZZLES
Clues compare quantities (money, marks, distance, weight) among several people or items without a fixed seating/rank framing.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Identify the puzzle "axis" first (floors, days, boxes, attributes) and sketch a simple table or vertical/horizontal line for it before reading the clues in detail.
2. Place the most absolute/specific clues first (e.g. "lives on the topmost floor," "is scheduled on Monday") to anchor the structure.
3. Process relative clues next ("immediately above," "two days after," "one box below"), adding to the sketch step by step, same as in seating/ranking puzzles.
4. For matrix/attribute puzzles, build a grid with people as rows and each attribute type as a column, and cross off impossible combinations as you resolve each clue — don't try to hold multiple attributes in your head at once.
5. For scheduling puzzles, write out the days/months in order in the margin first, so you can count "two days after Monday" etc. without recalculating each time.
6. After placing all the clues, do one final pass through EVERY clue against your completed structure to confirm nothing was contradicted — puzzle questions often include one clue that only matters for this final verification.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• "Immediately above" fixes an exact one-floor gap, while "above" alone only means somewhere higher — don't treat them as equally strict.
• In floor puzzles, check whether floor 1 is the ground/lowest floor or the top floor — the wording ("lives on the lowest floor" vs "topmost") tells you which end is which.
• Box-stacking puzzles use the same logic as floor puzzles, but "top of the stack" and "bottom of the stack" can be easy to flip under time pressure — double check which end each clue refers to.
• In matrix puzzles, an attribute can only be assigned to ONE person — once a fruit/colour/city is used, immediately eliminate it from every other person's remaining options.
• For day/month puzzles, "immediately before" a day near the start or end of the week can wrap around (e.g. immediately before Monday is Sunday) — watch for these edge cases.
• When a puzzle gives more clues than seem necessary, the extra clue is usually there to resolve a genuine ambiguity left by the others — don't skip verifying the final arrangement against every clue.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'A building has 5 floors, numbered 1 (bottom) to 5 (top). Aman lives on floor 3. Bela lives immediately above Aman. Which floor does Bela live on?',
      options: ['4', '5', '2', '3'],
      correct: 0,
      explanation: '"Immediately above" floor 3 is floor 4.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'Five boxes P, Q, R, S, T are stacked one above another. P is at the very bottom. Q is immediately above P. Which box is at the second position from the bottom?',
      options: ['Q', 'P', 'R', 'T'],
      correct: 0,
      explanation: 'P is at the bottom (1st position), and Q, immediately above P, is at the 2nd position from the bottom.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'A meeting is scheduled two days after Monday. On which day is the meeting scheduled?',
      options: ['Wednesday', 'Tuesday', 'Thursday', 'Sunday'],
      correct: 0,
      explanation: 'Counting two days after Monday: Tuesday (1 day), Wednesday (2 days) — the meeting is on Wednesday.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'In a 6-storey building (floor 1 at the bottom, floor 6 at the top), Karan lives on an even-numbered floor and does not live on the topmost floor. Only one floor separates Karan and Leela, who lives on floor 4. Which floor does Karan live on?',
      options: ['2', '6', '3', '5'],
      correct: 0,
      explanation: '"Only one floor separates them" means a gap of exactly one floor (a difference of 2) from floor 4, giving floor 2 or floor 6. Since Karan does not live on the topmost floor (6), he must live on floor 2.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: "Five friends A, B, C, D, E have their birthdays in five different months — January, March, May, July, and September (not necessarily in this order). B's birthday is in the month that comes immediately after A's in this list. C's birthday is in July. A's birthday is in March. Which month is B's birthday in?",
      options: ['May', 'July', 'September', 'January'],
      correct: 0,
      explanation: "Among the given months in calendar order (Jan, Mar, May, Jul, Sep), the one immediately after March (A's month) is May, so B's birthday is in May."
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Four friends bought fruits of different colours from red, yellow, green, and orange. Priya bought a red fruit, Sonal bought a yellow fruit, the last fruit is green, and Aman bought a fruit that is not yellow or green. What colour fruit did Aman buy?',
      options: ['Orange', 'Red', 'Yellow', 'Green'],
      correct: 0,
      explanation: "Red and yellow are already taken by Priya and Sonal. Since Aman's fruit is not yellow or green, and red is taken, the only colour left for Aman is orange."
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'A is younger than B but older than C. D is older than B. Who is the oldest among the four?',
      options: ['D', 'B', 'A', 'C'],
      correct: 0,
      explanation: 'From the clues: C < A < B < D, so D is the oldest.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'Six people P, Q, R, S, T, U live on six different floors of a building (floor 1 at the bottom to floor 6 at the top). Q lives on floor 5. Only two people live between Q and R (R below Q). S lives immediately above R. T lives immediately below Q. Only one person lives between T and U. Which floor does U live on?',
      options: ['6', '2', '1', '3'],
      correct: 0,
      explanation: 'R is three floors from Q (two people between them): R = floor 2. S, immediately above R, is floor 3. T, immediately below Q, is floor 4. U, with exactly one person between it and T, must be floor 6 (floor 2 is already taken by R), so U lives on floor 6.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'Five people A, B, C, D, E scored different marks in a test, with no ties. B scored more than D but less than A. C scored the least. E scored more than A. Who scored the second-highest?',
      options: ['A', 'B', 'E', 'D'],
      correct: 0,
      explanation: 'From the clues, E > A > B > D > C (C being the least). So A holds the second-highest score, right after E.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Seven friends P, Q, R, S, T, U, and V are ranked by the marks they scored, from highest to lowest, with no ties. U scored the highest. T scored more than S but less than U. S scored more than P. P scored more than Q but less than T. Q scored more than R, and R scored more than only V. Where does V rank?',
      options: ['7th (lowest)', '6th', '5th', '1st'],
      correct: 0,
      explanation: 'Combining all the clues gives the order U > T > S > P > Q > R > V from highest to lowest scorer, so V ranks 7th — the lowest.'
    }
  ]
}
