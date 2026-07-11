export const mirrorImages = {
  id: 'mirror-images',
  title: 'Mirror Images',
  icon: '🪞',
  color: '#0284c7',
  category: 'Non-Verbal Reasoning',
  tips: [
    {
      title: 'Types You Will See',
      content: `MIRROR IMAGE OF CLOCK TIME
Given a time shown on a normal clock, find what the same clock face would show when reflected in a mirror placed vertically beside it.

MIRROR IMAGE OF WORDS AND LETTERS
A word or letter is reflected in a vertical mirror; you must judge how the letters reorder and how each individual letter's shape flips.

MIRROR IMAGE OF NUMBERS
Digits are reflected in a mirror; some digits (0, 1, 8) look unchanged, while others become unrecognisable or resemble a different character.

MIRROR IMAGE OF DIRECTIONS
A reflection swaps left and right relative to the mirror but leaves up and down unchanged — direction-based questions test this specific asymmetry.

WATER IMAGES (HORIZONTAL REFLECTION)
Similar to mirror images but reflected as if in still water below the object (a horizontal mirror), flipping top and bottom instead of left and right.`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. For a VERTICAL mirror (the everyday kind, standing upright), remember the golden rule: LEFT and RIGHT get swapped, but UP and DOWN stay exactly the same.
2. For a clock mirror image, use the shortcut formula: Mirror time = 11 hours 60 minutes − actual time (i.e., subtract the given time from 11:60), then simplify.
3. For a word or letter reflected in a vertical mirror placed to its right, the ORDER of the letters reverses (the last letter appears first) AND each individual letter is itself flipped horizontally.
4. For WATER images (horizontal mirror, as in a reflection in a pond), it is the reverse of the vertical-mirror rule: UP and DOWN swap, but LEFT and RIGHT stay the same, and the whole image flips vertically (upside down).
5. For digits, memorise which ones look identical in a mirror (0, 1, 8) versus which become a different recognisable digit or an unrecognisable shape.
6. Always double-check which TYPE of mirror (vertical, placed to the right/left, or horizontal/water) the question specifies — the swap rule is completely different for each.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• Don't assume a mirror simply "reverses everything" — vertical mirrors only swap left-right, never up-down, and water images only swap up-down, never left-right.
• For clock mirror questions, always use the 11:60 formula rather than trying to visualise the clock face directly — it's faster and avoids errors near 12 o'clock.
• When reflecting a word, do BOTH steps: reverse the letter order AND flip each letter — doing only one of the two is the most common mistake.
• Digits 2, 3, 4, 5, 6, 7, 9 all look distorted or like different characters in a mirror; only 0, 1, and 8 are mirror-symmetric — memorise this short list rather than re-deriving it each time.
• A "water image" (reflection in water) is NOT the same as a mirror image — water images flip vertically (up-down), while everyday vertical mirror images flip horizontally (left-right).
• When a clock's mirror-time calculation gives an answer with 60 minutes or more, or a negative value, re-check the subtraction — the correct format is always minutes between 00 and 59 with a valid hour.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'A clock shows 3:15. What time will its mirror image show?',
      options: ['8:45', '9:45', '8:15', '3:45'],
      correct: 0,
      explanation: 'Mirror time = 11:60 − actual time = 11:60 − 3:15 = 8:45.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'A clock shows 6:00. What time will its mirror image show?',
      options: ['6:00', '12:00', '5:00', '7:00'],
      correct: 0,
      explanation: 'Mirror time = 11:60 − 6:00 = 5:60 = 6:00. At exactly 6:00, the hands are vertically aligned (12 and 6), so the mirror image looks identical to the original.'
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'In a standard vertical mirror, which of the following correctly describes what happens to a reflected person?',
      options: [
        "The person's right hand appears on the left side of the mirror image; up and down remain unchanged.",
        "The person's right hand still appears on the right side; up and down are swapped instead.",
        'Both left-right and up-down are swapped.',
        'Neither left-right nor up-down changes in a mirror.'
      ],
      correct: 0,
      explanation: "A standard (vertical) mirror swaps left and right — a person's right hand appears on the left in the reflection — while up and down remain exactly as they are."
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'A clock shows 8:20. What time will its mirror image show?',
      options: ['3:40', '4:20', '3:20', '4:40'],
      correct: 0,
      explanation: 'Mirror time = 11:60 − 8:20 = 3:40.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'A clock shows 10:50. What time will its mirror image show?',
      options: ['1:10', '1:50', '2:10', '12:10'],
      correct: 0,
      explanation: 'Mirror time = 11:60 − 10:50 = 1:10.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Which of the following digits looks exactly the same when reflected in a vertical mirror?',
      options: ['8', '2', '5', '7'],
      correct: 0,
      explanation: 'Among common digits, 0, 1, and 8 are symmetric and look unchanged in a mirror; 8 is the one listed here. Digits like 2, 5, and 7 look distorted or unrecognisable when mirrored.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'The word "TIME" is reflected in a vertical mirror placed to its right. Which of the following correctly describes the mirror image?',
      options: [
        'The letters appear in the reverse order E-M-I-T, with each individual letter also flipped horizontally.',
        'The letters appear in the same order T-I-M-E, with each letter flipped horizontally.',
        'The letters appear in the reverse order E-M-I-T, but each letter looks unchanged.',
        'The word looks completely unchanged in the mirror.'
      ],
      correct: 0,
      explanation: 'A vertical mirror to the right of a word both reverses the order of the letters (last letter appears first) AND flips each individual letter horizontally — both effects happen together.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'A clock shows 4:35. What time will its mirror image show?',
      options: ['7:25', '7:35', '6:25', '8:25'],
      correct: 0,
      explanation: 'Mirror time = 11:60 − 4:35 = 7:25.'
    },
    {
      id: 9,
      difficulty: 'hard',
      question: "A clock's mirror image shows 9:40. What was the actual time on the clock?",
      options: ['2:20', '2:40', '1:20', '3:20'],
      correct: 0,
      explanation: 'The mirror-time formula is its own inverse: Actual time = 11:60 − Mirror time = 11:60 − 9:40 = 2:20.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: "Besides 12:00 and 6:00, is there any other single time of day where a clock's mirror image looks identical to the actual time?",
      options: [
        'No — 12:00 and 6:00 are the only two times where this happens',
        'Yes — 3:00 also matches',
        'Yes — 9:00 also matches',
        'Yes — every hour mark (1:00, 2:00, 3:00...) matches'
      ],
      correct: 0,
      explanation: 'A time matches its own mirror image only when Actual time = 11:60 − Actual time, i.e. 2 × Actual time = 12:00. This equation has exactly two solutions on a 12-hour face: 12:00 and 6:00 — no other time satisfies it.'
    }
  ]
}
