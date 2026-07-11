export const directionSense = {
  id: 'direction-sense',
  title: 'Direction Sense',
  icon: '🧭',
  color: '#ea580c',
  tips: [
    {
      title: 'Types You Will See',
      content: `STRAIGHT-LINE MOVEMENT PUZZLES
A person moves in a sequence of directions and distances; you must find the final direction and/or straight-line distance from the starting point.

LEFT-RIGHT TURN PUZZLES
A person changes direction via "turn left" / "turn right" instructions rather than named directions — you must track the new facing direction after each turn.

SHADOW-BASED DIRECTION PUZZLES
The direction is inferred from where a shadow falls at a given time of day, based on the sun's position (rises in the East, sets in the West).

MULTI-POINT / TOWN-RELATION PUZZLES
Several locations are related to each other by direction (e.g. "A is north of B, C is east of B") and you must work out the direction or distance between two of them.

BEARING / ANGLE-TURN PUZZLES
A person's facing direction is rotated by a specific angle (e.g. 45°, 90°, 135°) clockwise or anticlockwise, and you must find the final direction faced.

RETURN-TO-START / NET DISPLACEMENT PUZZLES
A closed or partially closed path is walked; opposite-direction legs cancel out, and you find the net straight-line distance from the start.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Draw a compass rose first (N up, S down, E right, W left) and mark the starting point as the origin.
2. Plot each leg of the journey as a short vector from the previous point, labelling the distance.
3. For "turn left / turn right" instructions, rotate 90° from the CURRENT facing direction, not a fixed compass direction — build a mental rotation table (facing North: left→West, right→East; facing East: left→North, right→South, and so on).
4. Track net displacement separately along the North-South axis and the East-West axis by adding/subtracting distances, rather than trying to hold the whole path in your head.
5. Use Pythagoras' theorem (distance = √(North-South net² + East-West net²)) to find the straight-line distance between start and end points once both axis totals are known.
6. For shadow questions, anchor your reasoning to a known fact: in the morning the sun is in the East, so shadows fall toward the West; in the evening shadows fall toward the East.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• Left/right turns are relative to the direction you are CURRENTLY facing, not fixed compass directions — re-derive the new heading every time, don't assume "right = East".
• The question may ask for the distance walked in total (rare) versus the straight-line/shortest distance from start (common) — read carefully, as these are very different numbers.
• Some puzzles ask "in which direction is X from Y" versus "in which direction is Y from X" — these are opposite answers; double-check which point is the reference.
• When legs of a journey run in exactly opposite directions (e.g. North then South), they cancel out in the net displacement — don't add their distances together.
• For angle/bearing turns, add up all clockwise rotations (and subtract anticlockwise ones) before mapping the final angle back to a compass direction.
• Diagonal directions (North-East, South-West, etc.) sit exactly 45° between the two named directions — treat them as their own direction, not as "somewhere between."`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'A man walks 5 km towards North, then turns right and walks 5 km. In which direction is he from his starting point?',
      options: ['North-East', 'North-West', 'South-East', 'South-West'],
      correct: 0,
      explanation: 'Facing North, a right turn makes him face East. His net position is 5 km North and 5 km East of the start, which is the North-East direction.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'A man walks 3 km to the East, then turns right and walks 4 km. How far is he from his starting point?',
      options: ['5 km', '7 km', '4 km', '3 km'],
      correct: 0,
      explanation: 'Facing East, a right turn makes him face South, so he ends up 3 km East and 4 km South of the start. Straight-line distance = √(3² + 4²) = √25 = 5 km.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'One morning, Rahul was walking such that his shadow fell exactly to his left. Which direction was he facing?',
      options: ['North', 'South', 'East', 'West'],
      correct: 0,
      explanation: 'In the morning the sun is in the East, so shadows fall toward the West. If his shadow (West) is on his left side, he must be facing North.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'A man starts walking, goes 10 km North, then turns left and walks 6 km, then turns left again and walks 10 km. How far and in which direction is he from his starting point?',
      options: ['6 km, West', '6 km, East', '10 km, West', '16 km, West'],
      correct: 0,
      explanation: 'North 10 km, then left turn (North→West) 6 km West, then left turn (West→South) 10 km South. The two North-South legs cancel out (10 km North, 10 km South), leaving only 6 km West of the start.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'Point A is 8 km to the North of Point B. Point C is 6 km to the East of Point A. What is the distance between Point B and Point C?',
      options: ['10 km', '14 km', '8 km', '6 km'],
      correct: 0,
      explanation: 'Taking B as the origin, A is at (0, 8) and C is at (6, 8). Distance BC = √(6² + 8²) = √100 = 10 km.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Ravi walks 7 km towards South, then turns left and walks 5 km, then turns left again and walks 7 km. How far and in which direction is he from his starting point?',
      options: ['5 km, East', '5 km, West', '12 km, East', '7 km, East'],
      correct: 0,
      explanation: 'South 7 km, then left turn (South→East) 5 km East, then left turn (East→North) 7 km North. The two North-South legs cancel out, leaving only 5 km East of the start.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Town A is to the North of Town B. Town C is to the East of Town B. Town D is to the South of Town C. In which direction is Town D from Town A?',
      options: ['South-East', 'South-West', 'North-East', 'North-West'],
      correct: 0,
      explanation: 'Placing B at the origin, A is North of B and C is East of B; D is South of C, so D sits East of A (from C\'s eastward offset) and South of A (since D is below the level of B, while A is above it) — overall South-East.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'A man walks 4 km North, turns right and walks 3 km, turns right again and walks 4 km, then turns right again and walks 3 km. How far is he from his starting point?',
      options: ['0 km (back at start)', '3 km', '4 km', '7 km'],
      correct: 0,
      explanation: 'The turns trace a closed rectangle: North 4 km is cancelled by South 4 km, and East 3 km is cancelled by West 3 km. He ends up exactly back at the starting point.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'A man is facing South. He turns 45° clockwise, and then turns a further 135° clockwise. Which direction is he facing now?',
      options: ['North', 'South', 'East', 'West'],
      correct: 0,
      explanation: 'Starting at South (180°) and turning a total of 45° + 135° = 180° clockwise lands him at 360°, which is exactly North.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Neha walks 6 km towards East, then turns South and walks 8 km, then turns West and walks 6 km. How far and in which direction is she from her starting point?',
      options: ['8 km, South', '8 km, North', '10 km, South-West', '6 km, South'],
      correct: 0,
      explanation: 'The two East-West legs (6 km East, then 6 km West) cancel out completely, leaving only the 8 km South leg. She ends up 8 km due South of her starting point.'
    }
  ]
}
