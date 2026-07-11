export const embeddedFigures = {
  id: 'embedded-figures',
  title: 'Embedded Figures',
  icon: '👁️',
  color: '#475569',
  category: 'Non-Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `SPOT THE HIDDEN SHAPE
A simple figure (a triangle, a specific letter shape) is hidden inside a more complex, cluttered figure, and you must locate it among the lines.

FIGURE COUNTING (TRIANGLES / SQUARES / RECTANGLES)
A composite figure is built from overlapping lines or shapes (e.g. a square with both diagonals drawn), and you must count every distinct shape of a given type "embedded" within it, including ones made of combined smaller pieces.

POLYGON DIAGONAL COUNTING
Diagonals are drawn from a single vertex of a polygon, splitting it into a fixed number of embedded triangles.

GRID SQUARE/RECTANGLE COUNTING
A larger square or rectangle is divided into a grid of smaller unit cells, and you must count every square or rectangle of every possible size hidden within the grid, not just the smallest units.

STAR / COMPOUND FIGURE COUNTING
Figures like a five-pointed star are built from several overlapping triangles, and you must count every triangle embedded in the overall shape.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Start by counting only the SMALLEST, most obvious shapes first (the ones with no lines crossing through them).
2. Then look for shapes made by COMBINING two or more of the smallest pieces together — these are easy to miss because your eye stops at the first, smallest shape it spots.
3. For grid counting, count layer by layer: first all 1×1 shapes, then all 2×2 shapes, then all 3×3 shapes, and so on, adding up the totals rather than trying to spot every one visually at once.
4. For polygon diagonal counting, use the standard rule: drawing all diagonals from ONE vertex of a convex n-sided polygon splits it into exactly (n − 2) triangles.
5. For symmetric compound figures (like a square with both diagonals, or a star), look for the pattern of "small pieces" plus "small pieces combined in pairs" — most such figures follow a clean, countable structure rather than a random one.
6. Recount your final total methodically (by category: smallest shapes, then combined shapes) rather than trusting a single visual scan — it is very easy to double-count or miss one shape in a cluttered figure.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• The most common mistake is stopping after counting only the smallest, most visible shapes and forgetting the larger shapes formed by combining them.
• In a square with both diagonals drawn, there are 4 small triangles AND 4 larger triangles (each made of 2 small ones) — 8 in total, not 4.
• For grid square-counting, don't forget to count every SIZE of square (1×1, 2×2, 3×3...), not just the smallest unit cells.
• The "(n − 2) triangles from one vertex" rule only applies when diagonals are drawn from a SINGLE vertex — a different diagonal pattern gives a different count.
• Star/compound figure counts (like the 10 triangles in a five-pointed star) are standard, well-known results worth memorising rather than re-deriving under time pressure.
• When answer options are close together (e.g. 8, 9, 10), recount methodically by category instead of guessing from a quick glance — these are deliberately designed to catch undercounting.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'A rectangle has one diagonal drawn from corner to corner. How many triangles are there in the figure in total?',
      options: ['2', '1', '4', '3'],
      correct: 0,
      explanation: 'A single diagonal splits the rectangle into exactly 2 triangles.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'A triangle has one median drawn (a line from one vertex to the midpoint of the opposite side). How many triangles are there in the figure in total?',
      options: ['3', '2', '4', '1'],
      correct: 0,
      explanation: 'The median splits the triangle into 2 smaller triangles; counting the original triangle as well gives 2 + 1 = 3 triangles in total.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'A square is divided into 2 equal rectangles by a single line through its centre. How many rectangles are there in the figure in total (of any size, including the square itself)?',
      options: ['3', '2', '4', '1'],
      correct: 0,
      explanation: 'There are 2 small rectangles plus the original square (which is also a rectangle), giving 2 + 1 = 3 rectangles in total.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'A square is divided into 4 equal smaller squares by one horizontal and one vertical line through its centre. How many squares are there in the figure in total (of any size)?',
      options: ['5', '4', '8', '9'],
      correct: 0,
      explanation: 'There are 4 small squares plus the original large square, giving 4 + 1 = 5 squares in total.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'A square is divided into 9 equal smaller unit squares by 2 evenly spaced horizontal lines and 2 evenly spaced vertical lines. How many squares of any size are there in total?',
      options: ['14', '9', '13', '16'],
      correct: 0,
      explanation: 'Count squares by size: 9 of size 1×1, 4 of size 2×2, and 1 of size 3×3 → 9 + 4 + 1 = 14 total.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'A square has both of its diagonals drawn, intersecting at the centre. How many triangles are there in the figure in total?',
      options: ['8', '4', '6', '12'],
      correct: 0,
      explanation: 'There are 4 small triangles formed at the centre, plus 4 larger triangles each made of 2 adjacent small triangles combined with one full diagonal — giving 4 + 4 = 8 triangles in total.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'A convex pentagon (5-sided figure) has all its diagonals drawn from a single vertex. How many triangles are formed?',
      options: ['3', '5', '4', '2'],
      correct: 0,
      explanation: 'Drawing diagonals from one vertex of a convex polygon splits it into (n − 2) triangles. For a pentagon (n = 5), this gives 5 − 2 = 3 triangles.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'A regular hexagon (6-sided figure) has all its diagonals drawn from a single vertex. How many triangles are formed?',
      options: ['4', '6', '5', '3'],
      correct: 0,
      explanation: 'Using the (n − 2) rule for an n-sided convex polygon, a hexagon (n = 6) divided from one vertex gives 6 − 2 = 4 triangles.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'A regular five-pointed star (pentagram) is drawn. How many triangles are there in the figure in total?',
      options: ['10', '5', '15', '8'],
      correct: 0,
      explanation: 'A regular five-pointed star contains 5 small "point" triangles and 5 larger triangles formed by extending pairs of adjacent points across the central pentagon — 10 triangles in total.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'A square is divided into 16 equal smaller unit squares by 3 evenly spaced horizontal lines and 3 evenly spaced vertical lines (a 4×4 grid). How many squares of any size are there in total?',
      options: ['30', '16', '20', '25'],
      correct: 0,
      explanation: 'Count squares by size in a 4×4 unit grid: 16 of size 1×1, 9 of size 2×2, 4 of size 3×3, and 1 of size 4×4 → 16 + 9 + 4 + 1 = 30 total.'
    }
  ]
}
