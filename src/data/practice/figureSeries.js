export const figureSeries = {
  id: 'figure-series',
  title: 'Figure Series',
  icon: '🔷',
  color: '#be185d',
  category: 'Non-Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `ROTATION SERIES
A single figure (arrow, shape) rotates by a fixed angle at every step; you must predict the next orientation.

SHADING / FILL SERIES
A shape alternates or progresses through different shading states (filled, half-filled, unfilled) as the series continues.

COUNT-BASED SERIES
The number of elements inside or alongside a figure increases or decreases by a fixed amount at each step.

SHAPE-CYCLE SERIES
A sequence of different shapes repeats in a fixed cycle (e.g. triangle, square, circle, triangle, square, circle...).

COMBINED (MULTI-RULE) SERIES
Two or more independent rules run at the same time on the same series — for example, the shape cycles AND the shading alternates simultaneously.

GRID / MATRIX SERIES
Figures are arranged in a 3×3 grid where a rule (rotation, count, or combined) applies while reading left-to-right and top-to-bottom.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Compare consecutive terms one pair at a time and describe in words exactly what changed (rotation angle, shading, count, or shape).
2. Check if a single rule explains EVERY step in the series, not just the first couple of terms.
3. If no single rule fits, look for two or more INDEPENDENT rules running in parallel — track each visual attribute (shape, shading, count, rotation) as its own separate mini-series.
4. For rotation series, determine the direction (clockwise or anticlockwise) and the exact angle from the first two terms before predicting further ones.
5. For grid/matrix series, read the figures in the stated order (usually left-to-right, top-to-bottom) and treat it exactly like a 1-dimensional series once you've fixed the reading order.
6. Once you have a rule, test it against every given term (not just the first two) before applying it to find the missing one.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• A series with a repeating cycle (e.g. shapes cycling every 3 terms) requires you to find the correct position within the cycle (using remainders), not just continue the visible pattern by eye.
• Combined series (two rules at once) are the most common source of error — always double-check each attribute (shape, shading, count, rotation) separately rather than only the most obvious one.
• Rotation direction matters: confusing clockwise with anticlockwise reverses your entire prediction — verify the direction using at least the first three terms, not just two.
• Distractor options often get ONE attribute right and another wrong (e.g. correct shape but wrong shading) — check every attribute of the answer you pick.
• Don't assume symmetry where none is stated — a series that looks like it "should" repeat back to the start may not, if the underlying rule is a steady increase rather than a cycle.
• When in doubt, write out the rule as a short sentence before scanning the options — this prevents being pulled toward a visually similar but rule-inconsistent choice.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'Find the next figure in the series: → ↓ ← ↑ → ?',
      options: ['↓', '←', '↑', '→'],
      correct: 0,
      explanation: 'Each arrow rotates 90° clockwise from the previous one (→, ↓, ←, ↑, repeating), so after → the next is ↓.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'Find the next figure in the series: ● ○ ● ○ ● ?',
      options: ['○', '●', '◐', '◯'],
      correct: 0,
      explanation: 'The pattern strictly alternates between filled (●) and unfilled (○) circles, so after ● comes ○.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'A square contains an increasing number of dots at each step: 1 dot, 2 dots, 3 dots, 4 dots, ? What comes next?',
      options: ['A square with 5 dots', 'A square with 4 dots', 'A square with 3 dots', 'A square with 6 dots'],
      correct: 0,
      explanation: 'The number of dots inside the square increases by exactly 1 at each step (1, 2, 3, 4...), so the next figure has 5 dots.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'A single hand on a clock face points to 12, then 3, then 6, then 9. Which position comes next?',
      options: ['12', '9', '6', '3'],
      correct: 0,
      explanation: 'The hand moves 90° clockwise (3 hours) at each step: 12 → 3 → 6 → 9 → 12. So it returns to 12 next.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'Find the next figure: ▲(filled) ■(unfilled) ●(filled) ▲(unfilled) ■(filled) ?',
      options: ['○ (unfilled circle)', '● (filled circle)', '△ (unfilled triangle)', '■ (filled square)'],
      correct: 0,
      explanation: 'The shapes cycle in a repeating pattern of triangle→square→circle (so position 6 is a circle), while the shading alternates filled/unfilled at every step starting with filled (so position 6, the 6th term, is unfilled). Combining both rules gives an unfilled circle.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Find the next figure in the series: Triangle (3 sides), Square (4 sides), Pentagon (5 sides), Hexagon (6 sides), ?',
      options: ['Heptagon (7 sides)', 'Octagon (8 sides)', 'Hexagon (6 sides)', 'Pentagon (5 sides)'],
      correct: 0,
      explanation: 'The number of sides increases by 1 at each step (3, 4, 5, 6...), so the next shape is a heptagon with 7 sides.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Find the next figure in the series: ↑ ↖ ← ↙ ↓ ?',
      options: ['↘', '↗', '→', '↙'],
      correct: 0,
      explanation: 'Each arrow rotates 45° further anticlockwise than the last: ↑ → ↖ → ← → ↙ → ↓ → ↘, so the next arrow points down-right (↘).'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'A 3×3 grid of shapes reads:\nRow 1: ▲ ▲▲ ▲▲▲\nRow 2: ■ ■■ ■■■\nRow 3: ● ●● ?\nWhat fits the missing cell?',
      options: ['●●●', '●●', '●', '●●●●'],
      correct: 0,
      explanation: 'In each row, the shape stays the same while the count increases by 1 across the row (1, 2, 3). The third row uses circles, so the missing cell should contain 3 circles (●●●).'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'A 3×3 grid of arrows, read left-to-right and top-to-bottom, follows one continuous 90° clockwise rotation:\nRow 1: → ↓ ←\nRow 2: ↑ → ↓\nRow 3: ← ↑ ?\nWhat fits the missing cell?',
      options: ['→', '↓', '←', '↑'],
      correct: 0,
      explanation: 'Reading the grid left-to-right, top-to-bottom, each arrow rotates 90° clockwise from the one before it, cycling through →, ↓, ←, ↑ repeatedly. The 9th (final) position in this cycle lands back on →.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Find the next figure in the series: 1 filled triangle, 2 unfilled squares, 3 filled pentagons, 4 unfilled hexagons, ?',
      options: ['5 filled heptagons', '5 unfilled heptagons', '5 filled hexagons', '4 filled heptagons'],
      correct: 0,
      explanation: 'Three rules run in parallel: the count increases by 1 each term (1,2,3,4,5), the shape gains one more side each term (triangle→square→pentagon→hexagon→heptagon), and the shading alternates filled/unfilled starting with filled (filled, unfilled, filled, unfilled, filled). Combining all three gives "5 filled heptagons."'
    }
  ]
}
