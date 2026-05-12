export const exam2 = {
  id: 2,
  title: 'Mock Exam 2',
  duration: 120,
  totalQuestions: 100,
  sections: { reasoning: 40, gk: 30, english: 30 },
  questions: [
    // ─── REASONING (Q1–Q40) ───────────────────────────────────────────────
    {
      id: 1, section: 'reasoning',
      question: 'Find the next number in the series: 2, 5, 10, 17, 26, ?',
      options: ['37', '35', '38', '36'],
      correct: 0,
      explanation: 'Differences are 3, 5, 7, 9, 11 (odd numbers). 26 + 11 = 37.'
    },
    {
      id: 2, section: 'reasoning',
      question: 'NATION : FLAG :: ARMY : ?',
      options: ['Soldier', 'War', 'Emblem', 'Rank'],
      correct: 2,
      explanation: 'A flag is the symbol of a nation; an emblem is the symbol of the Army.'
    },
    {
      id: 3, section: 'reasoning',
      question: 'What is the next number: 3, 9, 27, 81, ?',
      options: ['162', '243', '256', '271'],
      correct: 1,
      explanation: 'Each term is multiplied by 3. 81 × 3 = 243.'
    },
    {
      id: 4, section: 'reasoning',
      question: 'A man walks 4 km North and then 3 km East. What is the shortest distance from the starting point?',
      options: ['5 km', '7 km', '4 km', '3 km'],
      correct: 0,
      explanation: 'By Pythagoras: √(4² + 3²) = √(16 + 9) = √25 = 5 km.'
    },
    {
      id: 5, section: 'reasoning',
      question: 'A is 3 years older than B. B is 5 years younger than C. If C is 25, how old is A?',
      options: ['23', '22', '24', '21'],
      correct: 0,
      explanation: 'C = 25, B = 25 – 5 = 20, A = 20 + 3 = 23.'
    },
    {
      id: 6, section: 'reasoning',
      question: 'BOOK : AUTHOR :: FILM : ?',
      options: ['Actor', 'Director', 'Producer', 'Screenplay'],
      correct: 1,
      explanation: 'A book is created by its author; a film is created by its director.'
    },
    {
      id: 7, section: 'reasoning',
      question: 'Sunita > Priya > Anita. Reena is shorter than Priya. Who is the shortest?',
      options: ['Anita', 'Reena', 'Cannot be determined', 'Priya'],
      correct: 2,
      explanation: 'We know Anita and Reena are both shorter than Priya but their relative heights are unknown.'
    },
    {
      id: 8, section: 'reasoning',
      question: 'SWORD : SHEATH :: ARROW : ?',
      options: ['Bow', 'Target', 'Quiver', 'Archer'],
      correct: 2,
      explanation: 'A sheath holds/protects a sword; a quiver holds/protects arrows.'
    },
    {
      id: 9, section: 'reasoning',
      question: 'Complete the series: AZ, BY, CX, DW, ?',
      options: ['EV', 'EU', 'FV', 'EW'],
      correct: 0,
      explanation: 'First letter advances (A,B,C,D,E); second letter retreats from Z (Z,Y,X,W,V). Answer: EV.'
    },
    {
      id: 10, section: 'reasoning',
      question: 'Ravi is heavier than Suresh. Suresh is heavier than Mohan. Priya is lighter than Mohan. Who is the lightest?',
      options: ['Suresh', 'Mohan', 'Priya', 'Ravi'],
      correct: 2,
      explanation: 'Order: Ravi > Suresh > Mohan > Priya. Priya is lightest.'
    },
    {
      id: 11, section: 'reasoning',
      question: 'In a group of 5 soldiers, each shakes hands with every other soldier exactly once. How many handshakes in total?',
      options: ['10', '12', '8', '15'],
      correct: 0,
      explanation: 'Number of handshakes = C(5,2) = 5×4/2 = 10.'
    },
    {
      id: 12, section: 'reasoning',
      question: 'If SOLDIER is coded as TPMEJFS, how is OFFICER coded? (each letter +1)',
      options: ['PGGJDFS', 'QHHJEFS', 'PGGJDFT', 'PGGIEFS'],
      correct: 0,
      explanation: 'O→P, F→G, F→G, I→J, C→D, E→F, R→S = PGGJDFS.'
    },
    {
      id: 13, section: 'reasoning',
      question: 'All soldiers are brave. Aman is brave. Conclusion: Aman is a soldier.',
      options: ['Definitely true', 'Definitely false', 'Uncertain', 'Partially true'],
      correct: 2,
      explanation: 'Being brave is necessary but not sufficient for being a soldier. Others can also be brave.'
    },
    {
      id: 14, section: 'reasoning',
      question: 'Find the next group: BDF, GIK, LNP, ?',
      options: ['QSU', 'QRS', 'RST', 'OQS'],
      correct: 0,
      explanation: 'Each group consists of alternate letters starting at the next unused letter: Q, S, U.'
    },
    {
      id: 15, section: 'reasoning',
      question: 'Complete the series: 1, 4, 9, ?, 25, 36',
      options: ['12', '15', '16', '18'],
      correct: 2,
      explanation: 'Series of perfect squares: 1², 2², 3², 4²=16, 5², 6².'
    },
    {
      id: 16, section: 'reasoning',
      question: 'A man starts at A facing East. He turns 90° clockwise, then 180° counterclockwise, then 90° clockwise. He is now facing:',
      options: ['East', 'West', 'North', 'South'],
      correct: 0,
      explanation: 'East → 90° CW → South → 180° CCW → North → 90° CW → East.'
    },
    {
      id: 17, section: 'reasoning',
      question: 'If 1st January 2023 is Sunday, what day is 1st March 2023?',
      options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      correct: 2,
      explanation: 'Jan: 31 days, Feb 2023: 28 days = 59 days total. 59 mod 7 = 3. Sunday + 3 = Wednesday.'
    },
    {
      id: 18, section: 'reasoning',
      question: '6 people sit around a circular table. How many distinct seating arrangements are possible?',
      options: ['720', '120', '24', '360'],
      correct: 1,
      explanation: 'Circular arrangements = (n–1)! = 5! = 120.'
    },
    {
      id: 19, section: 'reasoning',
      question: 'Pointing to a man, a woman says "His mother is the only daughter of my mother." How is the woman related to the man?',
      options: ['Sister', 'Aunt', 'Mother', 'Grandmother'],
      correct: 2,
      explanation: '"Only daughter of my mother" = the woman herself. So the man\'s mother is the woman → she is his mother.'
    },
    {
      id: 20, section: 'reasoning',
      question: 'Find the odd one out: 8, 27, 64, 100, 125, 216',
      options: ['8', '27', '100', '125'],
      correct: 2,
      explanation: '8=2³, 27=3³, 64=4³, 125=5³, 216=6³ are perfect cubes. 100=10² is only a perfect square.'
    },
    {
      id: 21, section: 'reasoning',
      question: 'In a queue, Ramesh is 12th from the front and 18th from the back. How many are in the queue?',
      options: ['28', '29', '30', '31'],
      correct: 1,
      explanation: 'Total = 12 + 18 – 1 = 29.'
    },
    {
      id: 22, section: 'reasoning',
      question: 'All apples are fruits. Some fruits are sweet. Conclusion: Some sweet things are fruits.',
      options: ['Definitely follows', 'Does not follow', 'Uncertain', 'Partially follows'],
      correct: 0,
      explanation: '"Some fruits are sweet" directly implies "some sweet things are fruits" (converting the I-type proposition).'
    },
    {
      id: 23, section: 'reasoning',
      question: 'Complete: J, F, M, A, M, J, J, A, ?',
      options: ['S', 'O', 'N', 'D'],
      correct: 0,
      explanation: 'First letters of months: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep → S.'
    },
    {
      id: 24, section: 'reasoning',
      question: 'A is the father of B. B is the sister of C. D is the husband of C. How is A related to D?',
      options: ['Uncle', 'Father-in-law', 'Brother-in-law', 'Father'],
      correct: 1,
      explanation: 'C is A\'s child (sister of B, A\'s child). D married A\'s child C → A is D\'s father-in-law.'
    },
    {
      id: 25, section: 'reasoning',
      question: 'Find the next prime: 2, 3, 5, 7, 11, 13, ?',
      options: ['15', '17', '14', '16'],
      correct: 1,
      explanation: 'The series lists consecutive prime numbers. After 13, the next prime is 17.'
    },
    {
      id: 26, section: 'reasoning',
      question: 'Sanjay drives 20 km North, 20 km East, 20 km South, 20 km West. Where is he relative to his start?',
      options: ['20 km North', 'Back at start', '20 km East', '20 km West'],
      correct: 1,
      explanation: 'He forms a square and returns exactly to the starting point.'
    },
    {
      id: 27, section: 'reasoning',
      question: 'No cats are dogs. All dogs are animals. Conclusion: Some animals are not cats.',
      options: ['Definitely follows', 'Does not follow', 'Cannot determine', 'Partially follows'],
      correct: 0,
      explanation: 'Dogs are animals but not cats. Since there are dogs, there exist animals (the dogs) that are not cats.'
    },
    {
      id: 28, section: 'reasoning',
      question: 'A 3×3×3 cube is painted red on all sides and cut into 27 smaller cubes. How many smaller cubes have exactly 2 red faces?',
      options: ['8', '12', '6', '24'],
      correct: 1,
      explanation: 'Edge cubes (not corner) have exactly 2 painted faces. A 3×3×3 cube has 12 edges × 1 middle cube each = 12.'
    },
    {
      id: 29, section: 'reasoning',
      question: 'Which pair shares the same relationship as VICTORY : DEFEAT?',
      options: ['War : Battle', 'Victory : Retreat', 'Success : Failure', 'Courage : Bravery'],
      correct: 2,
      explanation: 'Victory and Defeat are direct antonyms. Similarly, Success and Failure are direct antonyms in the same domain.'
    },
    {
      id: 30, section: 'reasoning',
      question: 'What comes next: 2, 3, 5, 7, 11, 13, 17, 19, ?',
      options: ['20', '21', '22', '23'],
      correct: 3,
      explanation: 'Sequence of prime numbers. The next prime after 19 is 23.'
    },
    {
      id: 31, section: 'reasoning',
      question: 'If × means +, ÷ means –, + means ×, – means ÷, then evaluate: 5 × 3 + 2 ÷ 4 – 1',
      options: ['12', '10', '14', '8'],
      correct: 0,
      explanation: 'Replace operators: 5+3 = 8, then ×2 = 16, then –4 = 12, then ÷1 = 12.'
    },
    {
      id: 32, section: 'reasoning',
      question: 'Complete the series: 1, 8, 27, 64, ?',
      options: ['100', '125', '144', '81'],
      correct: 1,
      explanation: 'Cubes of natural numbers: 1³, 2³, 3³, 4³, 5³ = 125.'
    },
    {
      id: 33, section: 'reasoning',
      question: 'A coin is tossed three times. What is the probability of getting at least 2 heads?',
      options: ['1/2', '3/8', '1/4', '5/8'],
      correct: 0,
      explanation: 'P(2H) = 3/8, P(3H) = 1/8. At least 2H = 3/8 + 1/8 = 4/8 = 1/2.'
    },
    {
      id: 34, section: 'reasoning',
      question: 'Find the missing: 1, 2, 6, 24, 120, ?',
      options: ['600', '720', '840', '660'],
      correct: 1,
      explanation: 'Factorials: 1!, 2!, 3!, 4!, 5!, 6! = 720.'
    },
    {
      id: 35, section: 'reasoning',
      question: 'Statement: "All officers must pass the physical fitness test."\nConclusion: "Aman, who is an officer, must have passed the physical fitness test."',
      options: ['Conclusion follows', 'Conclusion does not follow', 'Uncertain', 'Partially follows'],
      correct: 0,
      explanation: 'The universal statement "All officers must pass" directly applies to Aman as an officer → conclusion follows.'
    },
    {
      id: 36, section: 'reasoning',
      question: 'Choose the odd one: Rifle, Pistol, AK-47, Tank',
      options: ['Rifle', 'Pistol', 'AK-47', 'Tank'],
      correct: 3,
      explanation: 'Rifle, Pistol, and AK-47 are personal firearms. A Tank is a full armoured vehicle, not a personal weapon.'
    },
    {
      id: 37, section: 'reasoning',
      question: 'The ratio of officers to jawans in a unit is 1:10. If the total is 110, how many officers are there?',
      options: ['10', '11', '100', '9'],
      correct: 0,
      explanation: 'Ratio total = 11 parts. 110 ÷ 11 = 10 per part. Officers = 1 × 10 = 10.'
    },
    {
      id: 38, section: 'reasoning',
      question: 'Complete: ACE, BDF, CEG, DFH, EGI, ?',
      options: ['FHJ', 'FGH', 'GHI', 'EGJ'],
      correct: 0,
      explanation: 'Each group starts one letter ahead: F, then skip one: H, then skip one: J → FHJ.'
    },
    {
      id: 39, section: 'reasoning',
      question: 'Decode: If INDIA = 9-14-4-9-1, what is ARMY?',
      options: ['1-18-13-25', '1-17-13-25', '2-18-13-25', '1-18-14-25'],
      correct: 0,
      explanation: 'A=1, R=18, M=13, Y=25 → 1-18-13-25.'
    },
    {
      id: 40, section: 'reasoning',
      question: 'A clock shows 6:30. What will its mirror image show?',
      options: ['5:30', '6:30', '12:30', '5:00'],
      correct: 0,
      explanation: 'Mirror of a clock: actual time = 11:60 – given time. 11:60 – 6:30 = 5:30.'
    },

    // ─── GENERAL KNOWLEDGE (Q41–Q70) ──────────────────────────────────────
    {
      id: 41, section: 'gk',
      question: 'The Indian Parliament consists of:',
      options: ['Lok Sabha only', 'Lok Sabha and Rajya Sabha', 'Lok Sabha, Rajya Sabha and President', 'Lok Sabha and State Assemblies'],
      correct: 2,
      explanation: 'Article 79 states Parliament consists of the President and two Houses — Lok Sabha and Rajya Sabha.'
    },
    {
      id: 42, section: 'gk',
      question: 'Which is the oldest mountain range in India?',
      options: ['Himalayas', 'Western Ghats', 'Aravalli', 'Vindhyas'],
      correct: 2,
      explanation: 'The Aravalli Range, running through Rajasthan and Gujarat, is one of the world\'s oldest fold mountains, approximately 350 million years old.'
    },
    {
      id: 43, section: 'gk',
      question: 'Param Vir Chakra was first awarded to:',
      options: ['Abdul Hamid', 'Somnath Sharma', 'Dhan Singh Thapa', 'Joginder Singh'],
      correct: 1,
      explanation: 'Major Somnath Sharma was the first recipient of the Param Vir Chakra for his action in Badgam, Kashmir in 1947 (awarded posthumously).'
    },
    {
      id: 44, section: 'gk',
      question: 'The Simla Agreement (1972) was signed between:',
      options: ['India and China', 'India and Pakistan', 'India and Bangladesh', 'India and Nepal'],
      correct: 1,
      explanation: 'The Simla Agreement was signed on 2 July 1972 between Prime Minister Indira Gandhi and President Zulfikar Ali Bhutto of Pakistan.'
    },
    {
      id: 45, section: 'gk',
      question: 'Which body is the highest decision-making body for defence in India?',
      options: ['Ministry of Defence', 'Chief of Defence Staff', 'Cabinet Committee on Security (CCS)', 'National Security Council'],
      correct: 2,
      explanation: 'The Cabinet Committee on Security (CCS) chaired by the Prime Minister is the apex body for all defence-related decisions.'
    },
    {
      id: 46, section: 'gk',
      question: 'The Chipko Movement was related to:',
      options: ['Environment and forest conservation', 'Women\'s rights', 'Against untouchability', 'Land rights of farmers'],
      correct: 0,
      explanation: 'The Chipko Movement (1973) was a forest conservation movement in Uttarakhand where villagers hugged trees to prevent felling.'
    },
    {
      id: 47, section: 'gk',
      question: 'Prithvi is a class of:',
      options: ['Surface-to-air missile', 'Surface-to-surface ballistic missile', 'Air-to-air missile', 'Anti-tank missile'],
      correct: 1,
      explanation: 'Prithvi is India\'s first indigenously developed surface-to-surface short-range ballistic missile, developed by DRDO.'
    },
    {
      id: 48, section: 'gk',
      question: 'The Palk Strait separates India from:',
      options: ['Bangladesh', 'Pakistan', 'Sri Lanka', 'Myanmar'],
      correct: 2,
      explanation: 'The Palk Strait is a strait between the Indian state of Tamil Nadu and the Mannar district of northern Sri Lanka.'
    },
    {
      id: 49, section: 'gk',
      question: 'The Western Command Headquarters of the Indian Army is at:',
      options: ['Pune', 'Chandimandir', 'Lucknow', 'Jaipur'],
      correct: 1,
      explanation: 'Western Command Headquarters is at Chandimandir (Chandigarh area), responsible for the western border with Pakistan.'
    },
    {
      id: 50, section: 'gk',
      question: 'Operation Blue Star (1984) was conducted to:',
      options: ['Flush out militants from the Golden Temple', 'Counter infiltration from Pakistan', 'Assist earthquake victims', 'Rescue hostages from a hijacked aircraft'],
      correct: 0,
      explanation: 'Operation Blue Star in June 1984 was the Indian military operation to remove Sikh militants led by Jarnail Singh Bhindranwale from the Golden Temple complex in Amritsar.'
    },
    {
      id: 51, section: 'gk',
      question: 'The "Quit India Movement" was launched in:',
      options: ['1940', '1942', '1944', '1946'],
      correct: 1,
      explanation: 'The Quit India Movement was launched by Mahatma Gandhi on 8 August 1942, demanding an end to British rule in India.'
    },
    {
      id: 52, section: 'gk',
      question: 'Which Article of the Constitution abolishes untouchability?',
      options: ['Article 14', 'Article 15', 'Article 17', 'Article 21'],
      correct: 2,
      explanation: 'Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form.'
    },
    {
      id: 53, section: 'gk',
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Jupiter', 'Venus', 'Mars', 'Saturn'],
      correct: 2,
      explanation: 'Mars is called the Red Planet because of the reddish appearance given by iron oxide (rust) on its surface.'
    },
    {
      id: 54, section: 'gk',
      question: 'India\'s first nuclear submarine is:',
      options: ['INS Sindhuraj', 'INS Arihant', 'INS Chakra', 'INS Sindhushastra'],
      correct: 1,
      explanation: 'INS Arihant is India\'s first indigenously built nuclear-powered ballistic missile submarine, commissioned in 2016.'
    },
    {
      id: 55, section: 'gk',
      question: 'The Rajya Sabha is chaired by:',
      options: ['President of India', 'Prime Minister', 'Vice President of India', 'Speaker of Lok Sabha'],
      correct: 2,
      explanation: 'The Vice President of India is the ex-officio Chairman of the Rajya Sabha (Article 64).'
    },
    {
      id: 56, section: 'gk',
      question: 'What is the full form of "LOC" in military context?',
      options: ['Line of Control', 'Line of Command', 'Limit of Combat', 'Line of Communication'],
      correct: 0,
      explanation: 'LOC stands for Line of Control, the de facto border between India and Pakistan in Jammu & Kashmir.'
    },
    {
      id: 57, section: 'gk',
      question: 'The Dihang, Dibang, and Lohit are tributaries of which river?',
      options: ['Ganga', 'Godavari', 'Brahmaputra', 'Indus'],
      correct: 2,
      explanation: 'Dihang (the main channel), Dibang, and Lohit are the three major tributaries that merge to form the Brahmaputra in Assam.'
    },
    {
      id: 58, section: 'gk',
      question: 'Doctrine of "First Use" and "No First Use" applies to:',
      options: ['Conventional warfare', 'Nuclear weapons', 'Chemical weapons', 'Cyber warfare'],
      correct: 1,
      explanation: 'India officially maintains a "No First Use" (NFU) nuclear doctrine, meaning it will not use nuclear weapons first in any conflict.'
    },
    {
      id: 59, section: 'gk',
      question: 'The Galwan Valley clash (June 2020) occurred along the border with:',
      options: ['Pakistan', 'Nepal', 'China', 'Bangladesh'],
      correct: 2,
      explanation: 'The Galwan Valley clash on 15–16 June 2020 was a violent confrontation between Indian and Chinese troops along the Line of Actual Control (LAC) in Ladakh.'
    },
    {
      id: 60, section: 'gk',
      question: 'Which defence exercise is conducted jointly by India and the United States?',
      options: ['Shakti', 'Malabar', 'Vajra Prahar', 'Sampriti'],
      correct: 2,
      explanation: 'Vajra Prahar is a joint military exercise between India (Army Special Forces) and the United States (US Army Special Forces).'
    },
    {
      id: 61, section: 'gk',
      question: 'The National Defence Academy (NDA) is located at:',
      options: ['Pune', 'Khadakwasla', 'Dehradun', 'Nashik'],
      correct: 1,
      explanation: 'The National Defence Academy is located at Khadakwasla, near Pune, Maharashtra.'
    },
    {
      id: 62, section: 'gk',
      question: 'INA stands for:',
      options: ['Indian National Association', 'Indian National Army', 'Indo-Nepal Alliance', 'Indian Naval Academy'],
      correct: 1,
      explanation: 'INA stands for Indian National Army, formed by Subhas Chandra Bose during World War II to fight British rule in India.'
    },
    {
      id: 63, section: 'gk',
      question: 'The "Green Revolution" in India was associated with:',
      options: ['Environmental conservation', 'Increased agricultural production through HYV seeds', 'Forestation drive', 'Renewable energy'],
      correct: 1,
      explanation: 'The Green Revolution (late 1960s) introduced high-yielding variety (HYV) seeds, irrigation, and fertilisers to dramatically increase India\'s food grain production.'
    },
    {
      id: 64, section: 'gk',
      question: 'Where is the Indian Military Academy (IMA) located?',
      options: ['Pune', 'Khadakwasla', 'Dehradun', 'Nashik'],
      correct: 2,
      explanation: 'The Indian Military Academy (IMA), which trains officers for the Indian Army, is located in Dehradun, Uttarakhand.'
    },
    {
      id: 65, section: 'gk',
      question: 'Which of the following is India\'s main battle tank?',
      options: ['Arjun', 'T-90', 'Prithvi', 'BMP-2'],
      correct: 0,
      explanation: 'Arjun is the main battle tank designed and developed in India by DRDO. T-90 (Bhishma) is also used but is of Russian origin.'
    },
    {
      id: 66, section: 'gk',
      question: 'The "Tropic of Cancer" latitude is:',
      options: ['23½° South', '23½° North', '66½° North', '0°'],
      correct: 1,
      explanation: 'The Tropic of Cancer is at approximately 23.5° North latitude. It passes through central India.'
    },
    {
      id: 67, section: 'gk',
      question: 'Article 370 of the Indian Constitution, before its abrogation, was related to:',
      options: ['Fundamental Rights', 'Special status of Jammu & Kashmir', 'Emergency powers', 'Protection of minorities'],
      correct: 1,
      explanation: 'Article 370 granted special autonomous status to the state of Jammu & Kashmir. It was abrogated on 5 August 2019.'
    },
    {
      id: 68, section: 'gk',
      question: 'The instrument of surrender in the 1971 war was signed by Lt. Gen. A.A.K. Niazi on behalf of:',
      options: ['India', 'Bangladesh', 'East Pakistan/Pakistan', 'UN forces'],
      correct: 2,
      explanation: 'Lt. Gen. A.A.K. Niazi signed the instrument of surrender on 16 December 1971 on behalf of Pakistani forces, surrendering to India\'s Lt. Gen. Jagjit Singh Aurora.'
    },
    {
      id: 69, section: 'gk',
      question: 'How many commands does the Indian Army have?',
      options: ['5', '6', '7', '8'],
      correct: 2,
      explanation: 'The Indian Army has 7 Commands: Northern, Western, South Western, Southern, Eastern, Central, and Training Command.'
    },
    {
      id: 70, section: 'gk',
      question: 'ISRO\'s Mars Orbiter Mission is also known as:',
      options: ['Chandrayaan', 'Mangalyaan', 'Aditya', 'Astrosat'],
      correct: 1,
      explanation: 'India\'s Mars Orbiter Mission, launched in 2013, is popularly known as Mangalyaan. It made India the first Asian nation to reach Mars orbit.'
    },

    // ─── ENGLISH (Q71–Q100) ───────────────────────────────────────────────
    {
      id: 71, section: 'english',
      question: 'Select the correctly spelled word:',
      options: ['Recieve', 'Receive', 'Receve', 'Recieve'],
      correct: 1,
      explanation: '"Receive" follows the rule "i before e except after c." The correct spelling is R-E-C-E-I-V-E.'
    },
    {
      id: 72, section: 'english',
      question: 'Find the error: "He did not went to the parade yesterday."',
      options: ['He did not', 'went', 'to the parade', 'yesterday'],
      correct: 1,
      explanation: 'After "did not," use the base form of the verb → "go," not "went." Correct: "He did not go to the parade."'
    },
    {
      id: 73, section: 'english',
      question: 'Choose the synonym of PERSEVERANCE:',
      options: ['Laziness', 'Persistence', 'Ignorance', 'Negligence'],
      correct: 1,
      explanation: 'PERSEVERANCE means continued effort despite difficulty. Its synonym is PERSISTENCE.'
    },
    {
      id: 74, section: 'english',
      question: 'Choose the antonym of INDOLENT:',
      options: ['Lazy', 'Idle', 'Industrious', 'Lethargic'],
      correct: 2,
      explanation: 'INDOLENT means lazy or avoiding exertion. Its antonym is INDUSTRIOUS (hardworking).'
    },
    {
      id: 75, section: 'english',
      question: 'One-word substitution for "one who deserts his/her country for another":',
      options: ['Exile', 'Immigrant', 'Emigrant', 'Renegade'],
      correct: 3,
      explanation: 'A RENEGADE is a person who deserts and betrays their country, cause, or principles. (An emigrant simply moves abroad.)'
    },
    {
      id: 76, section: 'english',
      question: 'Meaning of the phrase "In the line of duty":',
      options: ['Off duty', 'While performing official responsibilities', 'Refusing orders', 'On leave'],
      correct: 1,
      explanation: '"In the line of duty" means while performing one\'s official duties or responsibilities.'
    },
    {
      id: 77, section: 'english',
      question: 'Fill in the blank (passive voice): "The order _____ by the Commanding Officer."',
      options: ['given', 'was given', 'has give', 'is give'],
      correct: 1,
      explanation: 'Passive voice structure: Subject + was/were + past participle + by + agent → "was given."'
    },
    {
      id: 78, section: 'english',
      question: 'Choose the correct reported speech: He said, "I am ready for the mission."',
      options: ['He said that he is ready for the mission.', 'He said that he was ready for the mission.', 'He said that he will be ready for the mission.', 'He said that he had been ready for the mission.'],
      correct: 1,
      explanation: 'In reported speech with past reporting verb, "am" changes to "was" → "He said that he was ready for the mission."'
    },
    {
      id: 79, section: 'english',
      question: 'Passage: "The Indian Army has a rich tradition of service and valour. Officers and soldiers alike have demonstrated extraordinary courage in the most challenging conditions. This spirit of sacrifice is the backbone of the nation\'s security."\n\nWhat is described as the backbone of national security?',
      options: ['Rich tradition', 'Extraordinary courage', 'Spirit of sacrifice', 'Challenging conditions'],
      correct: 2,
      explanation: 'The passage directly states: "This spirit of sacrifice is the backbone of the nation\'s security."'
    },
    {
      id: 80, section: 'english',
      question: 'Based on the same passage, which quality is mentioned of soldiers?',
      options: ['Intelligence', 'Extraordinary courage', 'Physical strength', 'Political awareness'],
      correct: 1,
      explanation: 'The passage states "Officers and soldiers alike have demonstrated extraordinary courage."'
    },
    {
      id: 81, section: 'english',
      question: 'Choose the correct word: "He has a natural _____ for leadership."',
      options: ['aptitude', 'attitude', 'altitude', 'aptness'],
      correct: 0,
      explanation: 'APTITUDE means a natural ability or talent. The phrase "aptitude for" is the standard collocation.'
    },
    {
      id: 82, section: 'english',
      question: 'Identify the figure of speech: "The announcement fell like a bombshell."',
      options: ['Metaphor', 'Simile', 'Alliteration', 'Hyperbole'],
      correct: 1,
      explanation: 'A SIMILE makes a comparison using "like" or "as." Here, the announcement is compared to a bombshell using "like."'
    },
    {
      id: 83, section: 'english',
      question: 'Fill in the blank: "The troops, as well as the commander, _____ praised for their bravery."',
      options: ['were', 'was', 'are', 'is'],
      correct: 0,
      explanation: '"As well as" does not change the number of the subject. But here "troops" (plural) is the subject → "were praised."'
    },
    {
      id: 84, section: 'english',
      question: 'Choose the correct sentence:',
      options: ['She has less friends than me.', 'She has fewer friends than me.', 'She has lesser friends than me.', 'She has fewest friends than me.'],
      correct: 1,
      explanation: 'Use FEWER for countable nouns (friends). LESS is for uncountable nouns (less water, less money).'
    },
    {
      id: 85, section: 'english',
      question: 'Cloze test: "The soldier _____ (was/is/had/have) injured during the patrol but continued with the mission."',
      options: ['is', 'was', 'had', 'have'],
      correct: 1,
      explanation: 'Past tense "was injured" fits the context of a past event described in the sentence.'
    },
    {
      id: 86, section: 'english',
      question: 'Synonym of TENACIOUS:',
      options: ['Stubborn', 'Persistent', 'Weak', 'Careless'],
      correct: 1,
      explanation: 'TENACIOUS means holding firmly to something. Its closest synonym is PERSISTENT (continuing despite difficulty).'
    },
    {
      id: 87, section: 'english',
      question: 'Choose the correct interrogative: The officer has completed the mission. (Make it a question)',
      options: ['Did the officer complete the mission?', 'Has the officer completed the mission?', 'Is the officer completing the mission?', 'Was the officer completing the mission?'],
      correct: 1,
      explanation: 'Present Perfect "has completed" becomes "Has the officer completed the mission?" (auxiliary verb moved to front).'
    },
    {
      id: 88, section: 'english',
      question: 'One-word substitution for "one who fights for a cause":',
      options: ['Crusader', 'Pacifist', 'Coward', 'Anarchist'],
      correct: 0,
      explanation: 'A CRUSADER is a person who campaigns vigorously for a cause.'
    },
    {
      id: 89, section: 'english',
      question: 'Arrange to form a correct sentence:\n1-in / 2-the / 3-are / 4-jawans / 5-posted / 6-mountains',
      options: ['4-3-5-1-2-6', '2-4-1-6-3-5', '4-5-3-1-2-6', '4-3-1-5-2-6'],
      correct: 0,
      explanation: '"Jawans are posted in the mountains." = 4-3-5-1-2-6.'
    },
    {
      id: 90, section: 'english',
      question: 'The word STOIC means:',
      options: ['Easily emotional', 'Enduring pain without complaint', 'Very talkative', 'Short-tempered'],
      correct: 1,
      explanation: 'A STOIC person endures pain or hardship without showing their feelings or complaining.'
    },
    {
      id: 91, section: 'english',
      question: 'Find the error: "The commanding officer, with his troops, are ready to march."',
      options: ['The commanding officer', 'with his troops', 'are ready', 'to march'],
      correct: 2,
      explanation: '"With his troops" is parenthetical; the main subject is "commanding officer" (singular) → "is ready."'
    },
    {
      id: 92, section: 'english',
      question: 'Fill in the blank: "He is _____ best soldier in the regiment."',
      options: ['a', 'an', 'the', 'no article'],
      correct: 2,
      explanation: '"The" is used for superlatives and unique references: "the best soldier."'
    },
    {
      id: 93, section: 'english',
      question: 'Meaning of the idiom "Burn the midnight oil":',
      options: ['Set something on fire', 'Work or study late into the night', 'Waste fuel resources', 'Celebrate with lights'],
      correct: 1,
      explanation: '"Burn the midnight oil" means to work or study until late at night.'
    },
    {
      id: 94, section: 'english',
      question: 'Choose the correct degree of comparison: "This is _____ mountain I have ever climbed."',
      options: ['the higher', 'the highest', 'higher', 'more high'],
      correct: 1,
      explanation: 'Superlative degree with "ever" and "the": "the highest mountain I have ever climbed."'
    },
    {
      id: 95, section: 'english',
      question: 'What does VIGILANT mean?',
      options: ['Careless', 'Watchful and alert', 'Aggressive', 'Indifferent'],
      correct: 1,
      explanation: 'VIGILANT means keeping careful watch for possible danger or difficulties; alert and watchful.'
    },
    {
      id: 96, section: 'english',
      question: 'Choose the sentence with correct punctuation:',
      options: ["The general said, \"Advance!\"", "The general said \"Advance!\"", "The general said, 'Advance!'", 'The general said "Advance"'],
      correct: 0,
      explanation: 'Direct speech requires a comma after the reporting verb, inverted commas around the speech, and punctuation inside the closing quote.'
    },
    {
      id: 97, section: 'english',
      question: 'Choose the antonym of AGGRAVATE:',
      options: ['Worsen', 'Intensify', 'Alleviate', 'Provoke'],
      correct: 2,
      explanation: 'AGGRAVATE means to make worse. Its antonym is ALLEVIATE (to lessen or relieve).'
    },
    {
      id: 98, section: 'english',
      question: 'Fill in the blank: "The army _____ protecting the borders for decades."',
      options: ['is', 'was', 'has been', 'had been'],
      correct: 2,
      explanation: '"For decades" indicates a duration continuing to the present → Present Perfect Continuous: "has been protecting."'
    },
    {
      id: 99, section: 'english',
      question: 'Identify the type of sentence: "What a great sacrifice the soldiers made!"',
      options: ['Declarative', 'Interrogative', 'Exclamatory', 'Imperative'],
      correct: 2,
      explanation: 'An EXCLAMATORY sentence expresses strong emotion and ends with an exclamation mark.'
    },
    {
      id: 100, section: 'english',
      question: 'One-word substitution for "killing of a large number of people":',
      options: ['Homicide', 'Fratricide', 'Massacre', 'Suicide'],
      correct: 2,
      explanation: 'A MASSACRE is the deliberate and indiscriminate killing of a large number of people.'
    }
  ]
}
