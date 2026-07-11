export const patternCompletion = {
  id: 'pattern-completion',
  title: 'Pattern Completion',
  icon: '🔳',
  color: '#ca8a04',
  category: 'Non-Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `3×3 MATRIX / GRID COMPLETION
Eight cells of a 3×3 grid are filled with related figures, and you must identify the one figure that fits the missing (usually bottom-right) cell.

ROW-WISE PATTERN GRIDS
The rule connecting the three figures in each ROW is consistent (e.g. count or shading changes left to right), and each row follows the same underlying rule independently.

COLUMN-WISE PATTERN GRIDS
The rule connecting the three figures in each COLUMN is consistent, sometimes combined with a separate row-wise rule running at the same time.

ADDITION / SUBTRACTION OF ELEMENTS
Two figures are visually "combined" (elements added or common elements removed) to produce a third figure, and the pattern repeats across the grid.

ROTATION-BASED GRIDS
A single figure rotates by a fixed angle from one cell to the next, either moving left to right along a row or top to bottom down a column.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Scan across the FIRST ROW alone and try to state the rule connecting its three cells in one sentence (e.g. "the shape gains one more side each time").
2. Check whether the SAME rule also holds for the second row — if yes, you likely have a simple row-wise rule and can apply it directly to the third row to find the missing cell.
3. If the row rule doesn't hold, check columns instead using the same method — state the column rule in one sentence and verify it across all three columns.
4. If neither a pure row nor column rule works, look for a COMBINED rule (e.g. shape determined by row, shading/count determined by column) — treat each visual attribute (shape, size, shading, rotation, count) as its own independent mini-series.
5. For addition/subtraction grids, check whether the third figure in a row/column equals cell 1 "plus" cell 2 (all elements present in either) or "minus" (only the elements not common to both) — test both interpretations against a row you already understand.
6. Once you have a candidate rule, verify it against EVERY row and column simultaneously before selecting your answer — a rule that only works for one row is not the correct rule.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• Don't assume the pattern must run left-to-right — many grids are actually governed by a column rule, or by both a row and a column rule running together.
• A rule that fits 2 out of 3 rows/columns but not all 3 is not the correct rule — keep searching rather than settling early.
• Distractor options are often "half-right" — they get the shape correct but the count wrong, or the shading correct but the rotation wrong; verify EVERY attribute of your chosen answer, not just the first one you notice.
• Rotation-based grids can rotate in either direction (clockwise or anticlockwise) — determine the direction from the first two cells before predicting the third.
• When a grid mixes addition/subtraction of elements, always test your rule on the row/column you understand best first, then apply it to the row/column with the missing cell.
• Count carefully — grids that look like they follow a "shape" pattern often actually follow a "number of sides" or "number of elements" pattern instead; recount rather than pattern-matching by eye.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'A 3×3 grid follows a dot-count pattern:\nRow 1: Square-1dot, Square-2dots, Square-3dots\nRow 2: Triangle-1dot, Triangle-2dots, Triangle-3dots\nRow 3: Circle-1dot, Circle-2dots, ?\nWhat fits the missing cell?',
      options: ['Circle-3dots', 'Circle-2dots', 'Circle-1dot', 'Square-3dots'],
      correct: 0,
      explanation: 'In every row, the shape stays fixed while the number of dots increases 1, 2, 3 from left to right. Row 3 uses circles, so the missing cell is a circle with 3 dots.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'A 3×3 grid follows a shading pattern:\nRow 1: Filled triangle, Half-filled triangle, Unfilled triangle\nRow 2: Filled square, Half-filled square, Unfilled square\nRow 3: Filled circle, Half-filled circle, ?\nWhat fits the missing cell?',
      options: ['Unfilled circle', 'Filled circle', 'Half-filled circle', 'Unfilled square'],
      correct: 0,
      explanation: 'Each row keeps the same shape while the shading changes from filled → half-filled → unfilled, left to right. Row 3 uses circles, so the missing cell is an unfilled circle.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'A 3×3 grid of arrows, where each row rotates 90° clockwise independently, reads:\nRow 1: ↑ → ↓\nRow 2: ← ↑ →\nRow 3: ↓ ← ?\nWhat fits the missing cell?',
      options: ['↑', '→', '↓', '←'],
      correct: 0,
      explanation: 'Within each row, every arrow rotates 90° clockwise from the one before it, independent of the other rows. Row 3 begins with ↓, so the sequence is ↓ → ← → ↑, making the missing cell ↑.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'In a 3×3 grid, the shape is determined by the COLUMN (Triangle, Square, Circle) and the shading is determined by the ROW (filled, half-filled, unfilled):\nRow 1: Filled triangle, Filled square, Filled circle\nRow 2: Half-filled triangle, Half-filled square, Half-filled circle\nRow 3: Unfilled triangle, Unfilled square, ?\nWhat fits the missing cell?',
      options: ['Unfilled circle', 'Filled circle', 'Unfilled square', 'Half-filled circle'],
      correct: 0,
      explanation: 'The shape is determined by the column (triangle, square, circle) while the shading is determined by the row (filled, half-filled, unfilled). The missing cell is in the circle column and the unfilled row, so it must be an unfilled circle.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'A 3×3 grid adds one internal line per step across each row:\nRow 1: Plain square, Square with 1 internal line, Square with 2 internal lines\nRow 2: Plain circle, Circle with 1 internal line, Circle with 2 internal lines\nRow 3: Plain triangle, Triangle with 1 internal line, ?\nWhat fits the missing cell?',
      options: ['A triangle with 2 internal lines', 'A triangle with 1 internal line', 'A plain triangle', 'A triangle with 3 internal lines'],
      correct: 0,
      explanation: 'In every row, the number of internal lines through the shape increases from 0 to 1 to 2, left to right, while the shape itself stays fixed per row. Row 3 uses triangles, so the missing cell is a triangle with two internal lines.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'In a 3×3 grid, each COLUMN rotates 90° clockwise going down the rows:\nRow 1: ▲ ◀ ▽\nRow 2: ▷ ▲ ◀\nRow 3: ▽ ▷ ?\nWhat fits the missing cell?',
      options: ['▲', '▷', '▽', '◀'],
      correct: 0,
      explanation: 'Each column rotates independently 90° clockwise going down the rows (▲→▷→▽→◀→▲). Column 3 begins with ▽, then ◀, so the missing bottom cell is ▲.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'In a 3×3 grid, the number of sides in each cell equals 3 plus (row number − 1) plus (column number − 1):\nRow 1: Triangle(3), Square(4), Pentagon(5)\nRow 2: Square(4), Pentagon(5), Hexagon(6)\nRow 3: Pentagon(5), Hexagon(6), ?\nWhat fits the missing cell?',
      options: ['Heptagon (7 sides)', 'Hexagon (6 sides)', 'Octagon (8 sides)', 'Pentagon (5 sides)'],
      correct: 0,
      explanation: 'The number of sides in each cell equals 3 plus (row number − 1) plus (column number − 1). For the missing bottom-right cell (row 3, column 3): 3 + 2 + 2 = 7 sides, a heptagon.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'In a 3×3 grid: the COUNT of shapes equals the row number, the SHAPE is fixed per column (Triangle, Square, Circle), and the SHADING follows a checkerboard rule (filled when row+column is even, unfilled when odd):\nRow 1: 1 filled triangle, 1 unfilled square, 1 filled circle\nRow 2: 2 unfilled triangles, 2 filled squares, 2 unfilled circles\nRow 3: 3 filled triangles, 3 unfilled squares, ?\nWhat fits the missing cell?',
      options: ['3 filled circles', '3 unfilled circles', '2 filled circles', '3 filled squares'],
      correct: 0,
      explanation: 'Three rules run together: the count of shapes equals the row number, the shape is fixed per column (circles in column 3), and the shading follows a checkerboard pattern (filled when row+column is even). For the missing cell (row 3, column 3): count = 3, shape = circle, and 3+3=6 (even) → filled. So the answer is 3 filled circles.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'In a 3×3 grid, exactly 2 dots are removed at each step moving left to right within a row:\nRow 1: A shape with 5 dots, then 3 dots, then 1 dot\nRow 2: A shape with 6 dots, then 4 dots, then 2 dots\nRow 3: A shape with 7 dots, then 5 dots, then ?\nWhat fits the missing cell?',
      options: ['A shape with 3 dots', 'A shape with 4 dots', 'A shape with 2 dots', 'A shape with 5 dots'],
      correct: 0,
      explanation: 'In every row, exactly 2 dots are removed at each step moving left to right. Row 3 starts at 7 dots, then 5 dots, so the missing cell has 5 − 2 = 3 dots.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'In a 3×3 grid, the number of arrows equals the row number, and within each row the arrow direction rotates 90° clockwise at each step:\nRow 1: 1 arrow ↑, 1 arrow →, 1 arrow ↓\nRow 2: 2 arrows →, 2 arrows ↓, 2 arrows ←\nRow 3: 3 arrows ↓, 3 arrows ←, ?\nWhat fits the missing cell?',
      options: ['3 arrows pointing ↑', '3 arrows pointing →', '3 arrows pointing ↓', '3 arrows pointing ←'],
      correct: 0,
      explanation: 'Within each row, the arrow rotates 90° clockwise at each step, and the number of arrows equals the row number. Row 3 begins at ↓, rotates to ←, and would next rotate to ↑ — so the missing cell shows 3 arrows pointing ↑.'
    }
  ]
}
