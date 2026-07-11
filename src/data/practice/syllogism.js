export const syllogism = {
  id: 'syllogism',
  title: 'Syllogism',
  icon: '⚖️',
  color: '#0891b2',
  category: 'Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `UNIVERSAL AFFIRMATIVE ("ALL A ARE B")
Every member of class A also belongs to class B — draw circle A completely inside circle B.

UNIVERSAL NEGATIVE ("NO A IS B")
Classes A and B share no members at all — draw circles A and B completely separate.

PARTICULAR AFFIRMATIVE ("SOME A ARE B")
At least one member is common to both A and B — draw circles A and B overlapping.

PARTICULAR NEGATIVE ("SOME A ARE NOT B")
At least one member of A definitely lies outside B — part of circle A must sit outside circle B.

COMPLEMENTARY PAIR (EITHER-OR) CONCLUSIONS
Neither conclusion follows on its own, but together the two conclusions cover every possible case, so "either...or" is the valid conclusion.

CHAIN SYLLOGISMS
Three or more statements link a chain of classes (A→B→C) and the conclusion connects the two end classes.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. List every class named in the statements and draw one Venn circle per class.
2. Translate each statement into its diagram rule: All A are B → A inside B. No A is B → A and B separate. Some A are B → A and B overlap. Some A are not B → part of A outside B.
3. Combine the statements into ONE diagram that satisfies every given statement simultaneously.
4. For each conclusion, check whether it is TRUE IN EVERY POSSIBLE diagram that satisfies the statements — not just the one you happened to draw first. If you can draw even one valid diagram where the conclusion fails, it does not follow.
5. If neither conclusion follows alone, check whether they form a complementary pair (e.g. "All A are B" vs "Some A are not B") that together must cover every case — if so, the answer is "Either I or II follows."
6. For chains of three or more statements, only trust conclusions linking classes through an unbroken "All" or consistent chain — a "Some" anywhere in the chain usually breaks a universal conclusion.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• Never upgrade a "Some" premise into an "All" conclusion — particular premises can only yield particular conclusions.
• Two "Some" (particular) premises together give NO valid conclusion at all — this is one of the fastest eliminations you can make.
• Two negative premises (No / Some...not) together also give NO valid conclusion.
• A conclusion that is merely POSSIBLE (true in some diagrams but not all) is not the same as one that DEFINITELY FOLLOWS — syllogism answers require certainty, not possibility.
• The middle term (the class common to both statements) must be distributed (used as "All" or "No") in at least one premise, or no definite conclusion can be drawn.
• Re-read the conclusion statements carefully — "Some A are B" and "Some B are A" mean the same thing and both follow together, but "All A are B" does NOT imply "All B are A."`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'Statements: All pens are pencils. All pencils are erasers.\nConclusions: I. All pens are erasers. II. Some erasers are pens.',
      options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
      correct: 0,
      explanation: 'Chaining "All pens are pencils" with "All pencils are erasers" gives "All pens are erasers" (I). Since all pens are erasers, at least some erasers must be pens (II).'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'Statements: All cats are dogs. No dog is a horse.\nConclusions: I. No cat is a horse. II. Some dogs are cats.',
      options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
      correct: 0,
      explanation: 'Since all cats are dogs and no dog is a horse, no cat can be a horse (I). Also, since all cats are dogs, some dogs are definitely cats (II).'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'Statements: Some books are pens. All pens are tables.\nConclusions: I. Some books are tables. II. Some tables are books.',
      options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
      correct: 0,
      explanation: '"Some books are pens" and "All pens are tables" combine to give "Some books are tables" (I), which converts validly to "Some tables are books" (II).'
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'Statements: All rivers are lakes. Some lakes are oceans.\nConclusions: I. Some rivers are oceans. II. Some oceans are rivers.',
      options: ['Neither follows', 'Only I follows', 'Only II follows', 'Both I and II follow'],
      correct: 0,
      explanation: 'The "some" lakes that are oceans need not include any river at all, so no definite relationship between rivers and oceans can be drawn from these two statements.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'Statements: No teacher is a student. All students are learners.\nConclusions: I. No teacher is a learner. II. Some learners are students.',
      options: ['Only II follows', 'Only I follows', 'Both I and II follow', 'Neither follows'],
      correct: 0,
      explanation: '"No teacher is a student" says nothing about learners in general (some learners could still be teachers), so I does not follow. But since all students are learners, some learners are definitely students (II).'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Statements: Some doctors are engineers. Some engineers are artists.\nConclusions: I. Some doctors are artists. II. Some artists are doctors.',
      options: ['Neither follows', 'Only I follows', 'Only II follows', 'Both I and II follow'],
      correct: 0,
      explanation: 'Two "Some" (particular) premises never yield a definite conclusion — the engineers who are artists need not overlap at all with the engineers who are doctors.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Statements: All squares are rectangles. No rectangle is a triangle.\nConclusions: I. No square is a triangle. II. No triangle is a square.',
      options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
      correct: 0,
      explanation: 'Since all squares are rectangles and no rectangle is a triangle, no square can be a triangle (I); this negative relationship holds in both directions, so no triangle is a square either (II).'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'Statements: All coins are metals. Some metals are not gold.\nConclusions: I. Some coins are not gold. II. No coin is gold.',
      options: ['Neither follows', 'Only I follows', 'Only II follows', 'Either I or II follows'],
      correct: 0,
      explanation: '"Some metals are not gold" does not guarantee that any of those non-gold metals are coins, so neither conclusion can be definitely drawn from the given statements.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'Statements: All benches are chairs. All chairs are tables.\nConclusions: I. All tables are benches. II. Some tables are not benches.',
      options: ['Either I or II follows', 'Only I follows', 'Only II follows', 'Neither follows'],
      correct: 0,
      explanation: "We only know tables contain all chairs (which contain all benches) — we don't know if tables equal that set exactly. Either every table is a bench, or else some table is not a bench; one of these two extremes must be true, giving \"Either I or II follows.\""
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Statements: All flowers are plants. Some plants are trees. All trees are green.\nConclusions: I. Some plants are green. II. Some flowers are trees.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither follows'],
      correct: 0,
      explanation: '"Some plants are trees" combined with "All trees are green" gives "Some plants are green" (I, valid since the middle term "trees" is fully distributed by "All trees are green"). But "All flowers are plants" only places flowers within the plants set — it doesn\'t guarantee any overlap with the specific "trees" subset of plants, so II does not follow.'
    }
  ]
}
