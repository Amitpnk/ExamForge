export const statementConclusion = {
  id: 'statement-conclusion-assumption',
  title: 'Statement & Conclusion / Assumption',
  icon: '💬',
  color: '#65a30d',
  tips: [
    {
      title: 'Types You Will See',
      content: `STATEMENT & CONCLUSION (INFERENCE) QUESTIONS
A short passage or fact is given; you must judge whether each conclusion definitely follows from ONLY the information stated, without using outside knowledge or assumptions.

STATEMENT & ASSUMPTION QUESTIONS
A statement (often an advertisement, notice, or argument) is given; you must identify what is implicitly taken for granted for the statement to make sense, even though it isn't said directly.

COURSE OF ACTION QUESTIONS
A problem is described and you must judge whether each suggested action is a practical, logical step to address it.

CAUSE AND EFFECT QUESTIONS
Two statements describing events are given; you must determine whether one is the cause of the other, an independent cause, or an effect of a common cause.

STRONG / WEAK ARGUMENT QUESTIONS
An argument or question of policy is given with "for/against" statements; you must judge which arguments are strong (relevant, factual, significant) versus weak (irrelevant, superficial, emotional).`
    },
    {
      title: 'Step-by-Step Approach',
      content: `1. Treat the statement as the ONLY source of truth — do not bring in outside general knowledge, even if it's factually correct in the real world.
2. For inference/conclusion questions, a conclusion is valid ONLY if it must be true given the statement; if it merely COULD be true or requires an extra unstated fact, it does not follow.
3. For assumption questions, use the "negation test": negate the assumption (assume it is false) — if the statement/argument then falls apart or makes no sense, it IS a necessary assumption.
4. For course-of-action questions, check that the action is a direct, practical, and immediate response to the specific problem — not a vague, long-term, or unrelated policy suggestion.
5. For cause-effect questions, check the timing: the cause must occur before (or at the same time as) the effect — an event that happens AFTER cannot be the cause of an earlier one.
6. For strong/weak arguments, a strong argument must be both FACTUAL/RELEVANT to the specific issue AND significant — vague, general, or emotionally-loaded statements are weak even if true.`
    },
    {
      title: 'Common Traps & Speed Tips',
      content: `• Don't import real-world knowledge into inference questions — a statement about "all employees must wear ID cards" doesn't let you conclude anything about security guards unless they are mentioned.
• A conclusion that is merely "probable" or "likely" is NOT the same as one that "definitely follows" — inference questions require certainty from the given text alone.
• Assumptions are always UNSTATED — if the passage says it directly, it's not an assumption, it's a given fact.
• Every statement someone makes assumes the statement itself is meaningful and worth making — this is a very common valid assumption type (e.g. an advertisement assumes at least some people will be influenced by it).
• In course-of-action questions, "further investigate the matter" is often a safe, valid action when the root cause isn't yet clear — but a drastic action (ban, shut down) is usually too extreme unless clearly justified.
• Weak arguments often use absolute words ("all," "never," "only") or appeal to emotion rather than facts — flag these quickly.`
    }
  ],
  questions: [
    {
      id: 1,
      difficulty: 'easy',
      question: 'Statement: "All employees of XYZ Ltd. must submit their annual report by 31st March, failing which a penalty will be charged."\nWhich of the following can be validly concluded from the statement above?',
      options: [
        'The company charges a penalty for late submission of the annual report.',
        'All employees submit their reports well before 31st March.',
        'No employee has ever been penalised.',
        'The annual report takes a full year to prepare.'
      ],
      correct: 0,
      explanation: 'The statement directly states a penalty exists for late submission — this is a direct restatement of the given fact, so it definitely follows. The other options assume facts not stated.'
    },
    {
      id: 2,
      difficulty: 'easy',
      question: 'Statement: "The XYZ mobile app can only be downloaded on smartphones running Android version 8 or higher."\nWhich conclusion definitely follows?',
      options: [
        'The app cannot be downloaded on a smartphone running Android version 6.',
        'The app works better on Android than on iOS.',
        'Most smartphone users have Android version 8 or higher.',
        'The app was designed only for Android users.'
      ],
      correct: 0,
      explanation: "Since the app requires Android 8+, a phone on Android 6 (which is lower) cannot run it — a direct logical consequence of the stated requirement. The others introduce facts not given."
    },
    {
      id: 3,
      difficulty: 'easy',
      question: 'Statement (advertisement): "Buy our new detergent — because your family deserves the best!"\nWhich of the following is an implicit assumption in this advertisement?',
      options: [
        'The advertiser believes at least some readers will be influenced by an appeal to family well-being.',
        'The detergent is scientifically proven to be the best in the market.',
        'No other detergent brand uses similar advertising.',
        'All families currently use an inferior detergent.'
      ],
      correct: 0,
      explanation: "Every advertisement assumes it can persuade at least some of its audience — this is the necessary, unstated assumption behind making the appeal at all. Negating it (\"no reader will be influenced\") would make placing the ad pointless."
    },
    {
      id: 4,
      difficulty: 'medium',
      question: 'Problem: "The number of road accidents at a particular junction has increased sharply over the last six months."\nCourses of Action:\nI. The traffic police should investigate the junction and install proper signals/signage if found necessary.\nII. All traffic at that junction should be permanently banned.',
      options: ['Only I is an appropriate action', 'Only II is an appropriate action', 'Both I and II are appropriate', 'Neither I nor II is appropriate'],
      correct: 0,
      explanation: 'Investigating and fixing the specific cause (signals/signage) is a practical, proportionate response. Permanently banning all traffic (II) is an extreme, impractical overreaction to the stated problem.'
    },
    {
      id: 5,
      difficulty: 'medium',
      question: 'Statement I: The sales of umbrellas increased sharply this week.\nStatement II: The region received unusually heavy rainfall this week.\nWhat is the relationship between the two statements?',
      options: [
        'Statement II is the cause and Statement I is its effect',
        'Statement I is the cause and Statement II is its effect',
        'Both are independent causes of a third, unrelated event',
        'Both are effects of unrelated causes'
      ],
      correct: 0,
      explanation: 'Heavy rainfall (II) logically precedes and explains increased demand for umbrellas (I) — II is the cause, I is the effect.'
    },
    {
      id: 6,
      difficulty: 'medium',
      question: 'Statement: "Only candidates who scored above 60% in the written exam were called for the interview."\nWhich conclusion definitely follows?',
      options: [
        'No candidate who scored 60% or below was called for an interview.',
        'Every candidate who scored above 60% was selected for the job.',
        'The interview round is easier than the written exam.',
        'Candidates who scored above 60% were automatically hired.'
      ],
      correct: 0,
      explanation: '"Only candidates above 60% were called" directly and logically excludes everyone at or below 60% from being called — this follows with certainty; the other options add unstated claims about selection or difficulty.'
    },
    {
      id: 7,
      difficulty: 'medium',
      question: 'Statement (office notice): "Please switch off the lights when not in use to save electricity."\nWhich assumption is implicit in this notice?',
      options: [
        'At least some employees currently leave lights on when they are not needed.',
        'Electricity is free for the office.',
        'All employees will ignore the notice.',
        'The office has no other way to save electricity.'
      ],
      correct: 0,
      explanation: 'Putting up such a notice only makes sense if the issue (lights left on unnecessarily) is actually happening or expected to happen — this is the necessary, unstated assumption behind the notice.'
    },
    {
      id: 8,
      difficulty: 'hard',
      question: 'Question of policy: "Should smoking be banned in all public places?"\nArgument I: Yes, because passive smoking harms the health of non-smokers around the smoker.\nArgument II: No, because some people simply enjoy smoking.',
      options: ['Only Argument I is strong', 'Only Argument II is strong', 'Both arguments are strong', 'Neither argument is strong'],
      correct: 0,
      explanation: "Argument I cites a specific, factual, and significant harm (passive smoking affecting others) directly relevant to public policy. Argument II is a weak, self-centred preference that doesn't address the public-health concern."
    },
    {
      id: 9,
      difficulty: 'hard',
      question: 'Statement: "In the last five years, the number of students opting for online courses at ABC University has grown every single year."\nWhich of the following can be validly concluded?',
      options: [
        'The number of students opting for online courses this year is higher than it was five years ago.',
        'Online courses at ABC University are of higher quality than in-person courses.',
        'In-person course enrolment at ABC University has decreased every year.',
        'Next year, the number of students opting for online courses will grow again.'
      ],
      correct: 0,
      explanation: '"Grown every year for five years" directly and necessarily means this year\'s number is higher than it was five years ago — a simple restatement of the given trend. The other options predict the future or introduce comparisons not stated.'
    },
    {
      id: 10,
      difficulty: 'hard',
      question: 'Statement: "The management has decided to install CCTV cameras in the office to improve security."\nWhich of the following is an implicit assumption in this decision?',
      options: [
        'CCTV cameras can help improve security in the office.',
        'The office has never experienced any security issue before.',
        'Employees will not object to being monitored.',
        'CCTV cameras are the cheapest security option available.'
      ],
      correct: 0,
      explanation: 'The decision to install cameras "to improve security" only makes sense if the management believes cameras are actually capable of improving security — this is the direct, necessary assumption behind the stated purpose. The other options are not required for the decision to make sense.'
    }
  ]
}
