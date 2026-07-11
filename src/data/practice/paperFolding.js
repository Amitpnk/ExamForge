export const paperFolding = {
  id: 'paper-folding-cutting',
  title: 'Paper Folding/Cutting',
  icon: '✂️',
  color: '#78350f',
  category: 'Non-Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `HOLE-PUNCH AFTER FOLDING
A paper is folded one or more times, a hole is punched through all the layers at once, and you must find how many holes appear once fully unfolded.

CORNER / EDGE CUTTING PUZZLES
A folded paper has a corner or edge snipped off, and you must visualise where the resulting notches or holes appear on the unfolded sheet.

FOLD-LINE VS OFF-FOLD-LINE PUNCHES
The punched point may lie exactly ON a crease (fold line) or away from it — this changes whether the resulting holes merge into one or stay separate.

REPEATED-FOLD LAYER COUNTING
A paper is folded multiple times in a row, and you must track how the number of layers doubles with each fold.

DIAGONAL / TRIANGULAR FOLD PUZZLES
A square or rectangular paper is folded along a diagonal, and you must reason about symmetry across that diagonal rather than a straight edge.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Count the number of folds first, and remember that EACH fold doubles the number of paper layers (1 fold → 2 layers, 2 folds → 4 layers, 3 folds → 8 layers, and so on).
2. Decide whether the punch/cut point lies exactly ON a fold line (crease) or away from every fold line — this single detail changes the whole answer.
3. If the point is away from every crease, it reproduces once in every layer — so the number of holes equals the number of layers.
4. If the point lies exactly ON a single fold line, the hole straddles both halves at that crease and appears as ONE hole spanning the line, not two separate ones.
5. For multiple folds meeting at a single corner, identify whether a cut is at the corner WHERE the folds meet (which maps to the centre of the original sheet) or at the FREE outer corner (which maps to a distinct original corner in every layer) — these produce very different results.
6. Mentally "unfold" one fold at a time, from the last fold made back to the first, tracking how each single hole/notch duplicates at each unfolding step.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• The layer count always doubles with each fold — 2, 4, 8, 16... — memorise this progression rather than recalculating it from scratch each time.
• A punch exactly on a fold line does NOT double into two holes — it stays as a single hole straddling the crease.
• When folds meet at one corner, the corner where they meet corresponds to the CENTRE of the original sheet, while the diagonally opposite free corner corresponds to a DIFFERENT original corner in every layer — don't treat these as interchangeable.
• Folding along a diagonal still only creates 2 layers throughout the resulting triangle (like any single fold) — the diagonal doesn't add extra layers by itself.
• When two separate cuts are made on the same folded paper, work out each cut's effect independently and then simply add the resulting hole counts together.
• Re-read whether the question asks for the number of HOLES or the number of LAYERS — these numbers can look deceptively similar but answer different questions.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'A square paper is folded once in half. A hole is punched near a corner of the folded paper, away from the fold line. How many holes will appear when the paper is unfolded?',
      options: ['2', '1', '4', '3'],
      correct: 0,
      explanation: 'One fold creates one layer of symmetry; a hole punched away from the fold line appears on both halves once unfolded, giving 2 holes.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'A square paper is folded in half twice (first left-to-right, then top-to-bottom), and a hole is punched near the folded corner where both folds meet. How many holes will appear when unfolded?',
      options: ['4', '2', '8', '1'],
      correct: 0,
      explanation: 'Folding twice creates 4 layers of paper; a hole punched through all 4 layers appears once in each of the 4 quadrants when unfolded, giving 4 holes.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'A rectangular paper is folded in half three times (each fold halving it again), and a single hole is punched through all the layers, away from every fold line. How many holes will appear when fully unfolded?',
      options: ['8', '6', '4', '3'],
      correct: 0,
      explanation: 'Each fold doubles the number of layers (2, 4, 8 after three folds), and a hole punched through all layers reproduces once per layer — giving 8 holes when unfolded.'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'A square paper is folded along its diagonal, forming a triangle. A hole is punched through both layers, away from the fold edge itself. How many holes will appear when the paper is unfolded?',
      options: ['2', '1', '4', '3'],
      correct: 0,
      explanation: 'Folding along the diagonal creates 2 overlapping layers throughout the triangle; a hole punched through both layers (away from the fold edge itself) produces 2 holes symmetric about the diagonal when unfolded.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'A rectangular paper is folded in half (left to right) once. A hole is punched exactly on the fold line (the crease) near the top edge. How many separate holes will be visible when the paper is unfolded?',
      options: ['1', '2', '4', '0'],
      correct: 0,
      explanation: 'A hole punched exactly on the fold line straddles both halves at once — when unfolded, this appears as a single hole centred on the crease, not two separate holes.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'A square sheet of paper is folded in half twice, forming a smaller square where all the fold lines meet at one corner. If the corner where the fold lines meet is snipped off, what will the unfolded paper look like?',
      options: [
        'A single diamond-shaped hole in the exact centre of the sheet',
        'Four separate holes, one near each corner of the sheet',
        'A hole exactly in the middle of each edge of the sheet',
        'No hole at all'
      ],
      correct: 0,
      explanation: 'The corner where all the fold lines meet corresponds to the centre of the original sheet. Snipping it cuts through all 4 layers at that single point, producing one combined diamond-shaped hole exactly at the centre when unfolded.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Using the same twice-folded square sheet (folds meeting at one corner), if instead the outer free corner (made only of original paper edges, diagonally opposite to where the folds meet) is snipped off, what will the unfolded paper look like?',
      options: [
        'Four separate holes, one near each corner of the sheet',
        'A single diamond-shaped hole in the exact centre of the sheet',
        'A hole in the middle of each edge of the sheet',
        'No hole at all'
      ],
      correct: 0,
      explanation: 'The outer free corner is a distinct point in each of the 4 layers, corresponding to each of the 4 original corners of the sheet. Snipping it removes a notch from every corner, so unfolding reveals four separate holes, one near each corner.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'A square paper is folded in half vertically, then in half horizontally, and finally folded diagonally to form a small triangle (3 folds total). A hole is punched through the resulting triangle at a point away from all fold lines. How many holes will appear when the paper is fully unfolded?',
      options: ['8', '4', '6', '16'],
      correct: 0,
      explanation: 'Each of the 3 folds doubles the number of layers (2 → 4 → 8), and a hole punched through all 8 layers, away from every crease, reproduces once per layer — giving 8 holes when fully unfolded.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'A long strip of paper is folded in half repeatedly, always in the same direction, a total of 4 times. A hole is punched through all the layers at a point away from every fold line. How many holes will appear when the strip is fully unfolded?',
      options: ['16', '8', '12', '4'],
      correct: 0,
      explanation: 'Each fold doubles the number of layers: after 4 folds there are 2⁴ = 16 layers. A hole punched through all of them, away from every crease, gives 16 holes once fully unfolded.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'A square paper is folded in half twice to form a smaller square (folds meeting at one corner). Two cuts are made: a small triangular snip at the corner where the folds meet, and another small triangular snip at the diagonally opposite (outer free) corner. How many separate holes will the fully unfolded sheet have in total?',
      options: ['5', '4', '1', '8'],
      correct: 0,
      explanation: 'Snipping the corner where the folds meet produces a single hole at the very centre of the sheet, while snipping the outer free corner produces one hole near each of the 4 original corners. Combined, the fully unfolded sheet has 1 + 4 = 5 separate holes.'
    }
  ]
}
