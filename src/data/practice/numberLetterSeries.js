export const numberLetterSeries = {
  id: 'number-letter-series',
  title: 'Number & Letter Series',
  icon: '🔢',
  color: '#1d4ed8',
  tips: [
    {
      title: 'Types You Will See',
      content: `ARITHMETIC SERIES
Each term differs from the next by a constant amount (e.g. +3 every time).

GEOMETRIC SERIES
Each term is obtained by multiplying/dividing the previous one by a constant ratio (e.g. ×2 every time).

SQUARE / CUBE SERIES
Terms are perfect squares (1,4,9,16...) or cubes (1,8,27,64...), sometimes with an offset added.

SECOND-ORDER (DIFFERENCE OF DIFFERENCES) SERIES
The first differences aren't constant, but the differences of THOSE differences are (e.g. 2,6,12,20,30 → diffs 4,6,8,10 → second diffs all +2).

TWO-LINE / INTERLEAVED SERIES
Two separate series are merged term-by-term (odd positions follow one rule, even positions follow another).

LETTER SERIES
Letters move by a fixed or growing number of alphabet positions, sometimes skipping letters in a pattern.

MIXED NUMBER-LETTER / FIBONACCI-TYPE SERIES
Each term is built from the previous one or two terms using addition or multiplication (e.g. term = sum of previous two terms).`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Write down the first differences between consecutive terms.
2. If the differences are constant → simple arithmetic series, just add that constant.
3. If the differences change but each term's RATIO to the previous is constant → geometric series.
4. If the differences themselves form a clean pattern (e.g. increasing by a fixed amount) → find the SECOND difference and extend it.
5. If nothing above fits, split the series into odd-position and even-position terms and check each half separately — it is very likely two interleaved series.
6. For letter series, convert each letter to its alphabet position (A=1...Z=26) and treat it exactly like a number series.
7. Once you spot a rule, TEST IT AGAINST EVERY GIVEN TERM (not just the first two) before using it to predict the answer.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• A series combining two operations alternately (e.g. +2, ×2, +2, ×2...) is common — don't assume a single constant rule too early.
• If a 6-8 term series doesn't fit one clean rule, check for an interleaved (two-line) series first — it's the most common "trick" pattern.
• Memorize squares up to 20² and cubes up to 12² — instant recognition saves the most time here.
• Write A-Z with position numbers 1-26 in the margin before starting letter series questions, same as for Coding–Decoding.
• Double-check every gap in the series, not just the first one — some questions insert a single deliberate break in an otherwise obvious pattern.
• If the answer options include a value that fits a "nearby" but wrong rule (off by one), it's usually a deliberate distractor — recompute rather than pattern-matching by eye.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'Find the next number in the series: 2, 5, 8, 11, 14, ?',
      options: ['17', '16', '18', '15'],
      correct: 0,
      explanation: 'Each term increases by a constant 3: 14 + 3 = 17.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'Find the next number in the series: 4, 9, 16, 25, 36, ?',
      options: ['49', '48', '45', '42'],
      correct: 0,
      explanation: 'These are squares of consecutive integers (2²,3²,4²,5²,6²), so the next is 7² = 49.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'Find the missing letter in the series: A, C, E, G, I, ?',
      options: ['K', 'J', 'H', 'L'],
      correct: 0,
      explanation: 'Every alternate letter is skipped (+2 positions each time): I(9) + 2 = K(11).'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'Find the next number in the series: 3, 6, 12, 24, 48, ?',
      options: ['96', '86', '108', '72'],
      correct: 0,
      explanation: 'Each term is double the previous one (×2): 48 × 2 = 96.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'Find the next letter in the series: B, E, H, K, N, ?',
      options: ['Q', 'P', 'R', 'O'],
      correct: 0,
      explanation: 'Each letter moves forward by a constant 3 positions: N(14) + 3 = Q(17).'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
      options: ['42', '40', '44', '36'],
      correct: 0,
      explanation: 'First differences are 4, 6, 8, 10 (increasing by 2 each time), so the next difference is 12: 30 + 12 = 42. (These are n×(n+1): 1×2, 2×3, 3×4...)'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Find the missing number: 5, 10, 8, 13, 11, 16, 14, ?',
      options: ['19', '17', '20', '18'],
      correct: 0,
      explanation: 'This is two interleaved series. Odd positions: 5, 8, 11, 14 (+3). Even positions: 10, 13, 16, ? (+3) → 16 + 3 = 19.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'Find the next number in the series: 3, 8, 15, 24, 35, ?',
      options: ['48', '46', '49', '45'],
      correct: 0,
      explanation: 'First differences are 5, 7, 9, 11 (increasing by 2), so the next difference is 13: 35 + 13 = 48. (These are n×(n+2): 1×3, 2×4, 3×5...)'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'Find the next letter in the series: D, F, I, M, R, ?',
      options: ['X', 'W', 'Y', 'V'],
      correct: 0,
      explanation: 'The gap between letters grows by 1 each time (+2, +3, +4, +5, +6): R(18) + 6 = X(24).'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Find the next number in the series: 4, 5, 9, 14, 23, ?',
      options: ['37', '36', '38', '35'],
      correct: 0,
      explanation: 'Each term is the sum of the two preceding terms (Fibonacci-style): 14 + 23 = 37.'
    }
  ]
}
