export const exam1 = {
  id: 1,
  title: 'Mock Exam 1',
  duration: 120,
  totalQuestions: 100,
  sections: { reasoning: 40, gk: 30, english: 30 },
  questions: [
    // ─── REASONING (Q1–Q40) ───────────────────────────────────────────────
    {
      id: 1, section: 'reasoning',
      question: 'ARMY : SOLDIER :: NAVY : ?',
      options: ['Pilot', 'Sailor', 'Jawan', 'Airman'],
      correct: 1,
      explanation: 'A soldier serves in the Army; a Sailor serves in the Navy.'
    },
    {
      id: 2, section: 'reasoning',
      question: 'Find the next number in the series: 1, 4, 9, 16, 25, ?',
      options: ['30', '36', '34', '32'],
      correct: 1,
      explanation: 'The series is squares of natural numbers: 1², 2², 3², 4², 5², 6² = 36.'
    },
    {
      id: 3, section: 'reasoning',
      question: 'If COLD is coded as DPME, how is HOT coded?',
      options: ['IPU', 'HOU', 'IPT', 'JOU'],
      correct: 0,
      explanation: 'Each letter is shifted +1: H→I, O→P, T→U = IPU.'
    },
    {
      id: 4, section: 'reasoning',
      question: 'Pointing to a photo, Rahul says "She is the daughter of my grandfather\'s only son." How is the girl related to Rahul?',
      options: ['Sister', 'Niece', 'Cousin', 'Daughter'],
      correct: 0,
      explanation: 'Grandfather\'s only son = Rahul\'s father. Father\'s daughter = Sister.'
    },
    {
      id: 5, section: 'reasoning',
      question: 'Ravi walks 10 km North, then 6 km East, then 10 km South. How far is he from his starting point?',
      options: ['6 km', '10 km', '16 km', '4 km'],
      correct: 0,
      explanation: '10 km N and 10 km S cancel out. He is 6 km East of start.'
    },
    {
      id: 6, section: 'reasoning',
      question: 'In a class of 40 students, Priya ranks 8th from the top. What is her rank from the bottom?',
      options: ['32nd', '33rd', '34th', '31st'],
      correct: 1,
      explanation: 'Rank from bottom = Total – Rank from top + 1 = 40 – 8 + 1 = 33.'
    },
    {
      id: 7, section: 'reasoning',
      question: 'All soldiers are brave. Some brave people are officers. Conclusion: Some soldiers are officers.',
      options: ['True', 'False', 'Uncertain', 'Cannot be determined'],
      correct: 3,
      explanation: 'From "all soldiers are brave" and "some brave are officers," we cannot conclude soldiers and officers overlap.'
    },
    {
      id: 8, section: 'reasoning',
      question: 'Find the next number: 3, 7, 13, 21, 31, ?',
      options: ['41', '43', '45', '47'],
      correct: 1,
      explanation: 'Differences are 4, 6, 8, 10, 12 (increasing by 2). 31 + 12 = 43.'
    },
    {
      id: 9, section: 'reasoning',
      question: 'BOOK : LIBRARY :: SOLDIER : ?',
      options: ['War', 'Weapon', 'Regiment', 'Battle'],
      correct: 2,
      explanation: 'Books are housed in a Library; Soldiers are organised in a Regiment.'
    },
    {
      id: 10, section: 'reasoning',
      question: 'Find the odd one out: Captain, Major, Colonel, Havildar',
      options: ['Captain', 'Major', 'Colonel', 'Havildar'],
      correct: 3,
      explanation: 'Captain, Major, Colonel are commissioned officer ranks. Havildar is a Junior Commissioned Officer / NCO rank.'
    },
    {
      id: 11, section: 'reasoning',
      question: '6 : 36 :: 8 : ?',
      options: ['48', '56', '64', '72'],
      correct: 2,
      explanation: 'The pattern is n : n². 6² = 36, 8² = 64.'
    },
    {
      id: 12, section: 'reasoning',
      question: 'Find the missing letter: A, C, F, J, O, ?',
      options: ['T', 'U', 'V', 'W'],
      correct: 1,
      explanation: 'Gaps increase by 1: +2, +3, +4, +5, +6. A(1)+6=U(21).'
    },
    {
      id: 13, section: 'reasoning',
      question: 'If 1=A, 2=B, 3=C … 26=Z, what word does 20-5-1-13 represent?',
      options: ['TEAM', 'SEAM', 'BEAM', 'REAM'],
      correct: 0,
      explanation: 'T=20, E=5, A=1, M=13 → TEAM.'
    },
    {
      id: 14, section: 'reasoning',
      question: 'If today is Monday, what day will it be after 100 days?',
      options: ['Monday', 'Tuesday', 'Wednesday', 'Saturday'],
      correct: 2,
      explanation: '100 ÷ 7 = 14 weeks + 2 days. Monday + 2 = Wednesday.'
    },
    {
      id: 15, section: 'reasoning',
      question: 'Statement: Regular exercise is essential for a healthy lifestyle.\nConclusion I: People who exercise regularly are healthy.\nConclusion II: Unhealthy people never exercise.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      correct: 0,
      explanation: 'Conclusion I is a direct inference. Conclusion II is an overstatement not supported by the statement.'
    },
    {
      id: 16, section: 'reasoning',
      question: 'A, B, C, D, E sit in a row. A is at extreme left, E is at extreme right, B is 2nd from left, D is 2nd from right. Who sits in the middle?',
      options: ['A', 'B', 'C', 'D'],
      correct: 2,
      explanation: 'Order: A – B – C – D – E. C occupies the middle position.'
    },
    {
      id: 17, section: 'reasoning',
      question: 'A clock shows 3:00. What time will its mirror image show?',
      options: ['9:00', '6:00', '12:00', '3:00'],
      correct: 0,
      explanation: 'Mirror image of a clock reverses left and right. 3 o\'clock becomes 9 o\'clock.'
    },
    {
      id: 18, section: 'reasoning',
      question: 'If REASON is written as NOASER, how is MOTHER written?',
      options: ['REHTOM', 'ROTHEM', 'REHMOT', 'REHTMO'],
      correct: 0,
      explanation: 'The word is reversed: MOTHER → REHTOM.'
    },
    {
      id: 19, section: 'reasoning',
      question: 'All officers wear badges. Suresh wears a badge. Conclusion: Suresh is an officer.',
      options: ['Definitely true', 'Definitely false', 'Uncertain', 'Partially true'],
      correct: 2,
      explanation: 'Others may also wear badges. Wearing a badge is necessary but not sufficient for being an officer.'
    },
    {
      id: 20, section: 'reasoning',
      question: 'What comes next in the Fibonacci series: 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '13', '12', '10'],
      correct: 1,
      explanation: 'Each term = sum of two preceding terms. 5 + 8 = 13.'
    },
    {
      id: 21, section: 'reasoning',
      question: 'A is the mother of B. C is the father of B. D is the brother of C. How is D related to B?',
      options: ['Uncle', 'Aunt', 'Cousin', 'Father'],
      correct: 0,
      explanation: 'D is the brother of B\'s father C, so D is B\'s uncle.'
    },
    {
      id: 22, section: 'reasoning',
      question: 'Facing North, turn right 90°, then turn left 180°, then turn right 90°. Which direction are you facing?',
      options: ['North', 'South', 'East', 'West'],
      correct: 0,
      explanation: 'N → Right 90° → East → Left 180° → West → Right 90° → North.'
    },
    {
      id: 23, section: 'reasoning',
      question: 'GENERAL : ARMY :: ADMIRAL : ?',
      options: ['Air Force', 'Navy', 'Coast Guard', 'Police'],
      correct: 1,
      explanation: 'A General commands an Army; an Admiral commands a Navy.'
    },
    {
      id: 24, section: 'reasoning',
      question: 'Find the next number: 144, 121, 100, 81, 64, ?',
      options: ['49', '48', '50', '51'],
      correct: 0,
      explanation: 'Series of perfect squares in descending order: 12², 11², 10², 9², 8², 7² = 49.'
    },
    {
      id: 25, section: 'reasoning',
      question: 'All cats are dogs. All dogs are animals.\nConclusion I: All cats are animals.\nConclusion II: Some animals are cats.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      correct: 2,
      explanation: 'By transitivity, all cats are animals (I). Since cats ⊆ animals, some animals are cats (II).'
    },
    {
      id: 26, section: 'reasoning',
      question: 'WOUND : BANDAGE :: FIRE : ?',
      options: ['Match', 'Smoke', 'Water', 'Ash'],
      correct: 2,
      explanation: 'A bandage treats a wound; water extinguishes fire.'
    },
    {
      id: 27, section: 'reasoning',
      question: '4 : 64 :: 3 : ?',
      options: ['27', '9', '81', '36'],
      correct: 0,
      explanation: 'The pattern is n : n³. 4³ = 64, 3³ = 27.'
    },
    {
      id: 28, section: 'reasoning',
      question: 'Amit stands 15th from the left and 10th from the right in a row. How many people are in the row?',
      options: ['24', '25', '26', '23'],
      correct: 0,
      explanation: 'Total = Left rank + Right rank – 1 = 15 + 10 – 1 = 24.'
    },
    {
      id: 29, section: 'reasoning',
      question: 'Find the odd one out: 8, 27, 64, 100, 125',
      options: ['8', '27', '100', '125'],
      correct: 2,
      explanation: '8=2³, 27=3³, 64=4³, 125=5³ are perfect cubes. 100=10² is only a perfect square.'
    },
    {
      id: 30, section: 'reasoning',
      question: 'A man walks 5 km East, 3 km South, 5 km West, 3 km North. Where is he relative to start?',
      options: ['At the same starting point', '3 km North', '5 km East', '3 km South'],
      correct: 0,
      explanation: 'He traces a rectangle and returns exactly to the starting point.'
    },
    {
      id: 31, section: 'reasoning',
      question: 'Statement: "The number of students appearing for Board exams has increased this year."\nConclusion I: More students are attending school.\nConclusion II: The passing percentage will increase.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      correct: 3,
      explanation: 'Both conclusions go beyond what the statement says. More appearing ≠ more attending school, and does not predict pass rate.'
    },
    {
      id: 32, section: 'reasoning',
      question: 'MAJOR : LIEUTENANT COLONEL :: CAPTAIN : ?',
      options: ['Colonel', 'Major', 'General', 'Brigadier'],
      correct: 1,
      explanation: 'In the Indian Army rank hierarchy, Captain is promoted to Major, and Major is promoted to Lieutenant Colonel.'
    },
    {
      id: 33, section: 'reasoning',
      question: 'Complete the series: A1, B2, D4, G7, K11, ?',
      options: ['O15', 'P16', 'Q17', 'N14'],
      correct: 1,
      explanation: 'Letters skip +1, +2, +3, +4, +5 positions (B, D, G, K, P). Numbers add +1, +2, +3, +4, +5 (1,2,4,7,11,16). Answer: P16.'
    },
    {
      id: 34, section: 'reasoning',
      question: 'If P × Q means "P is mother of Q" and Q + R means "Q is father of R," what does P × Q + R mean?',
      options: ['P is grandmother of R', 'P is mother of R', 'P is aunt of R', 'P is sister of R'],
      correct: 0,
      explanation: 'P is mother of Q; Q is father of R. So P is the paternal grandmother of R.'
    },
    {
      id: 35, section: 'reasoning',
      question: 'If 5 + 3 = 28 and 9 + 1 = 810, then 5 + 4 = ?',
      options: ['19', '91', '29', '18'],
      correct: 0,
      explanation: 'Pattern: (a–b)(a+b). 5–3=2, 5+3=8 → 28. 9–1=8, 9+1=10 → 810. 5–4=1, 5+4=9 → 19.'
    },
    {
      id: 36, section: 'reasoning',
      question: '15th August 2024 fell on which day?',
      options: ['Monday', 'Thursday', 'Friday', 'Wednesday'],
      correct: 1,
      explanation: 'India\'s Independence Day 2024 fell on Thursday, 15 August 2024.'
    },
    {
      id: 37, section: 'reasoning',
      question: 'DEFEND : ATTACK :: RETREAT : ?',
      options: ['Surrender', 'Advance', 'Escape', 'Fight'],
      correct: 1,
      explanation: 'Defend is the opposite of Attack; Retreat is the opposite of Advance.'
    },
    {
      id: 38, section: 'reasoning',
      question: 'Complete the analogy: SWORD : WEAPON :: SHIELD : ?',
      options: ['Metal', 'Defence equipment', 'Arrow', 'Armour'],
      correct: 1,
      explanation: 'A sword is a weapon (offensive); a shield is defence equipment (protective).'
    },
    {
      id: 39, section: 'reasoning',
      question: 'Find the next: ACE, BDF, CEG, DFH, ?',
      options: ['EGI', 'EGH', 'FGI', 'EHI'],
      correct: 0,
      explanation: 'Each group starts one letter ahead. E+2=G, G+2=I → EGI.'
    },
    {
      id: 40, section: 'reasoning',
      question: 'If today is Wednesday, what day was it 50 days ago?',
      options: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
      correct: 1,
      explanation: '50 mod 7 = 1. One day before Wednesday = Tuesday.'
    },

    // ─── GENERAL KNOWLEDGE (Q41–Q70) ──────────────────────────────────────
    {
      id: 41, section: 'gk',
      question: 'Who is the Supreme Commander of the Indian Armed Forces?',
      options: ['Prime Minister', 'Defence Minister', 'President of India', 'Chief of Defence Staff'],
      correct: 2,
      explanation: 'The President of India is the constitutional Supreme Commander of all three wings of the Armed Forces.'
    },
    {
      id: 42, section: 'gk',
      question: 'The Territorial Army was established on:',
      options: ['15 August 1947', '26 January 1950', '9 October 1949', '1 April 1948'],
      correct: 2,
      explanation: 'The Territorial Army was raised on 9 October 1949. This date is celebrated as Territorial Army Day.'
    },
    {
      id: 43, section: 'gk',
      question: 'The highest wartime gallantry award in India is:',
      options: ['Ashoka Chakra', 'Maha Vir Chakra', 'Param Vir Chakra', 'Vir Chakra'],
      correct: 2,
      explanation: 'The Param Vir Chakra (PVC) is the highest military honour awarded for the most conspicuous bravery in the presence of the enemy.'
    },
    {
      id: 44, section: 'gk',
      question: 'The Battle of Plassey was fought in:',
      options: ['1757', '1764', '1776', '1799'],
      correct: 0,
      explanation: 'The Battle of Plassey on 23 June 1757 established British dominance in Bengal and India.'
    },
    {
      id: 45, section: 'gk',
      question: 'How many Fundamental Rights are enshrined in the Indian Constitution?',
      options: ['5', '6', '7', '8'],
      correct: 1,
      explanation: 'Six Fundamental Rights: Equality, Freedom, Against Exploitation, Religion, Cultural & Educational, and Constitutional Remedies.'
    },
    {
      id: 46, section: 'gk',
      question: 'Which river is known as the "Sorrow of Bihar"?',
      options: ['Ganga', 'Kosi', 'Gandak', 'Son'],
      correct: 1,
      explanation: 'The Kosi river, due to its frequent devastating floods, is called the Sorrow of Bihar.'
    },
    {
      id: 47, section: 'gk',
      question: 'India\'s first nuclear test (Pokhran-I) was conducted in:',
      options: ['1968', '1974', '1984', '1998'],
      correct: 1,
      explanation: 'Pokhran-I (Operation Smiling Buddha) was India\'s first nuclear test conducted on 18 May 1974.'
    },
    {
      id: 48, section: 'gk',
      question: 'The Headquarters of the Indian Army is located at:',
      options: ['Mumbai', 'Pune', 'New Delhi', 'Shimla'],
      correct: 2,
      explanation: 'Army Headquarters (AHQ) is located at South Block, New Delhi.'
    },
    {
      id: 49, section: 'gk',
      question: 'Operation Vijay (1999) was conducted to:',
      options: ['Liberate Goa', 'Recapture Kargil from intruders', 'Counter terrorism in the Valley', 'Assist Bangladesh'],
      correct: 1,
      explanation: 'Operation Vijay was the Indian military operation to recapture positions in the Kargil district occupied by Pakistani forces in 1999.'
    },
    {
      id: 50, section: 'gk',
      question: 'Who was the first Field Marshal of independent India?',
      options: ['K.M. Cariappa', 'Sam Manekshaw', 'Arjan Singh', 'B.M. Kaul'],
      correct: 1,
      explanation: 'Field Marshal Sam Manekshaw was promoted to the rank on 1 January 1973, making him the first Field Marshal of India.'
    },
    {
      id: 51, section: 'gk',
      question: 'The highest peacetime gallantry award in India is:',
      options: ['Param Vir Chakra', 'Maha Vir Chakra', 'Ashoka Chakra', 'Vir Chakra'],
      correct: 2,
      explanation: 'The Ashoka Chakra is the highest peacetime gallantry award in India.'
    },
    {
      id: 52, section: 'gk',
      question: 'DRDO stands for:',
      options: ['Defence Research and Development Organisation', 'Department of Readiness in Defence Operations', 'Defence Readiness and Development Office', 'Director of Research in Defence Operations'],
      correct: 0,
      explanation: 'DRDO (Defence Research and Development Organisation) is responsible for developing advanced defence technologies for the Indian military.'
    },
    {
      id: 53, section: 'gk',
      question: 'The Indian National Flag\'s Ashoka Chakra has how many spokes?',
      options: ['20', '24', '28', '32'],
      correct: 1,
      explanation: 'The Ashoka Chakra in the centre of the Indian flag has 24 spokes, representing the 24 hours of a day.'
    },
    {
      id: 54, section: 'gk',
      question: 'The missile "BrahMos" is a joint venture between India and:',
      options: ['Israel', 'Russia', 'USA', 'France'],
      correct: 1,
      explanation: 'BrahMos is a joint venture between India\'s DRDO and Russia\'s NPO Mashinostroyeniya. The name combines Brahmaputra and Moscow rivers.'
    },
    {
      id: 55, section: 'gk',
      question: 'The "Tropic of Cancer" passes through how many Indian states?',
      options: ['6', '7', '8', '9'],
      correct: 2,
      explanation: 'It passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.'
    },
    {
      id: 56, section: 'gk',
      question: 'The Constitution of India was adopted on:',
      options: ['15 August 1947', '26 November 1949', '26 January 1950', '15 August 1949'],
      correct: 1,
      explanation: 'The Constituent Assembly adopted the Constitution on 26 November 1949. It came into force on 26 January 1950.'
    },
    {
      id: 57, section: 'gk',
      question: 'India\'s first indigenous aircraft carrier is:',
      options: ['INS Vikrant', 'INS Viraat', 'INS Vikramaditya', 'INS Vishal'],
      correct: 0,
      explanation: 'INS Vikrant (IAC-1), commissioned in September 2022, is India\'s first domestically built aircraft carrier.'
    },
    {
      id: 58, section: 'gk',
      question: '"Astra" is India\'s:',
      options: ['Main Battle Tank', 'Submarine', 'Beyond Visual Range Air-to-Air Missile', 'Frigate'],
      correct: 2,
      explanation: 'Astra is India\'s first indigenously developed Beyond Visual Range (BVR) air-to-air missile.'
    },
    {
      id: 59, section: 'gk',
      question: 'The Northern Command Headquarters of the Indian Army is at:',
      options: ['Shimla', 'Udhampur', 'Chandigarh', 'Jammu'],
      correct: 1,
      explanation: 'Northern Command Headquarters is located at Udhampur, Jammu & Kashmir.'
    },
    {
      id: 60, section: 'gk',
      question: 'Who wrote the book "Discovery of India"?',
      options: ['Mahatma Gandhi', 'B.R. Ambedkar', 'Jawaharlal Nehru', 'Subhas Chandra Bose'],
      correct: 2,
      explanation: '"Discovery of India" was written by Jawaharlal Nehru while he was imprisoned at Ahmednagar Fort (1944–1945).'
    },
    {
      id: 61, section: 'gk',
      question: 'The highest peak in India (within undisputed territory) is:',
      options: ['K2', 'Kangchenjunga', 'Nanda Devi', 'Kamet'],
      correct: 1,
      explanation: 'Kangchenjunga (8,586 m) is the highest peak within India\'s recognised territory, located on the Sikkim–Nepal border.'
    },
    {
      id: 62, section: 'gk',
      question: 'The Gandhi–Irwin Pact was signed in:',
      options: ['1929', '1931', '1933', '1942'],
      correct: 1,
      explanation: 'The Gandhi–Irwin Pact was signed on 5 March 1931 between Mahatma Gandhi and the Viceroy Lord Irwin, suspending the Civil Disobedience Movement.'
    },
    {
      id: 63, section: 'gk',
      question: 'Article 32 of the Indian Constitution deals with:',
      options: ['Right to Equality', 'Right to Freedom', 'Right to Constitutional Remedies', 'Right to Education'],
      correct: 2,
      explanation: 'Article 32 grants the Right to Constitutional Remedies, allowing citizens to approach the Supreme Court for enforcement of Fundamental Rights.'
    },
    {
      id: 64, section: 'gk',
      question: 'The first Chief of Army Staff of independent India was:',
      options: ['Gen. Roy Bucher', 'Gen. K.M. Cariappa', 'Gen. Sam Manekshaw', 'Gen. J.N. Chaudhuri'],
      correct: 1,
      explanation: 'Gen. K.M. Cariappa became India\'s first Indian COAS on 15 January 1949, succeeding General Roy Bucher. 15 January is celebrated as Army Day.'
    },
    {
      id: 65, section: 'gk',
      question: 'India\'s space agency ISRO launched its first satellite "Aryabhata" in:',
      options: ['1971', '1975', '1980', '1969'],
      correct: 1,
      explanation: 'Aryabhata, India\'s first satellite, was launched on 19 April 1975 by the Soviet Union\'s Kosmos-3M rocket.'
    },
    {
      id: 66, section: 'gk',
      question: 'The Chenab river originates from:',
      options: ['Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir', 'Punjab'],
      correct: 0,
      explanation: 'The Chenab river originates in the Lahaul and Spiti district of Himachal Pradesh from the confluence of the Chandra and Bhaga rivers.'
    },
    {
      id: 67, section: 'gk',
      question: 'The highest mountain peak of the Western Ghats is:',
      options: ['Anamudi', 'Doddabetta', 'Vavul Mala', 'Nilgiri'],
      correct: 0,
      explanation: 'Anamudi (2,695 m) in Kerala is the highest peak in the Western Ghats and South India.'
    },
    {
      id: 68, section: 'gk',
      question: 'Who among the following received the Bharat Ratna for contribution to India\'s defence?',
      options: ['Vikram Sarabhai', 'K.M. Cariappa', 'A.P.J. Abdul Kalam', 'Sam Manekshaw'],
      correct: 2,
      explanation: 'Dr A.P.J. Abdul Kalam received the Bharat Ratna in 1997 for his exceptional contributions to India\'s missile and space programmes.'
    },
    {
      id: 69, section: 'gk',
      question: 'Which Article of the Indian Constitution deals with the President\'s power as Supreme Commander?',
      options: ['Article 52', 'Article 53', 'Article 74', 'Article 79'],
      correct: 1,
      explanation: 'Article 53(2) vests the supreme command of the Defence Forces in the President of India.'
    },
    {
      id: 70, section: 'gk',
      question: 'The Indo-Pakistani War of 1971 resulted in:',
      options: ['Recapture of Kargil', 'Creation of Bangladesh', 'Ceasefire at Tashkent', 'Simla Agreement only'],
      correct: 1,
      explanation: 'The 1971 war ended with Pakistan\'s surrender and the liberation of East Pakistan, which became Bangladesh on 16 December 1971.'
    },

    // ─── ENGLISH (Q71–Q100) ───────────────────────────────────────────────
    {
      id: 71, section: 'english',
      question: 'Choose the correct tense: "She _____ here since 2020."',
      options: ['is living', 'has been living', 'was living', 'had been living'],
      correct: 1,
      explanation: 'For an action that started in the past and continues to the present, use Present Perfect Continuous: "has been living."'
    },
    {
      id: 72, section: 'english',
      question: 'Choose the synonym of VALIANT:',
      options: ['Cowardly', 'Brave', 'Weak', 'Timid'],
      correct: 1,
      explanation: 'VALIANT means possessing or showing courage or determination; Brave is the closest synonym.'
    },
    {
      id: 73, section: 'english',
      question: 'Identify the grammatical error: "Neither the soldiers nor the officer have completed the mission."',
      options: ['Neither the soldiers', 'nor the officer', 'have completed', 'the mission'],
      correct: 2,
      explanation: 'With "Neither … nor," the verb agrees with the subject closest to it. "officer" is singular → "has completed."'
    },
    {
      id: 74, section: 'english',
      question: 'Choose the antonym of BELLIGERENT:',
      options: ['Aggressive', 'Warlike', 'Peaceful', 'Hostile'],
      correct: 2,
      explanation: 'BELLIGERENT means hostile and aggressive; its antonym is PEACEFUL.'
    },
    {
      id: 75, section: 'english',
      question: 'One-word substitution for "a person who can speak two languages fluently":',
      options: ['Polyglot', 'Bilingual', 'Linguist', 'Interpreter'],
      correct: 1,
      explanation: 'A BILINGUAL person speaks two languages fluently. A polyglot speaks many languages.'
    },
    {
      id: 76, section: 'english',
      question: 'Fill in the blank: "The army _____ troops to the border last week."',
      options: ['deploy', 'deploys', 'deployed', 'has deployed'],
      correct: 2,
      explanation: '"Last week" signals the simple past tense → deployed.'
    },
    {
      id: 77, section: 'english',
      question: 'Choose the correctly spelled word:',
      options: ['Accomodate', 'Accommodate', 'Acommodate', 'Acomodate'],
      correct: 1,
      explanation: 'The correct spelling is ACCOMMODATE – double c and double m.'
    },
    {
      id: 78, section: 'english',
      question: 'Choose the correct meaning of the idiom "Cross the Rubicon":',
      options: ['Make a difficult journey', 'Take an irrevocable decision', 'Cross an obstacle boldly', 'Win a decisive battle'],
      correct: 1,
      explanation: '"Cross the Rubicon" means to take a decisive and irrevocable step, from Julius Caesar\'s crossing of the Rubicon river.'
    },
    {
      id: 79, section: 'english',
      question: 'Which sentence is in the passive voice?',
      options: ['The general led the army.', 'The army was led by the general.', 'The general commands respect.', 'Soldiers fight bravely.'],
      correct: 1,
      explanation: '"The army was led by the general" uses the passive construction: subject + was/were + past participle + by + agent.'
    },
    {
      id: 80, section: 'english',
      question: 'Passage: "The Territorial Army is a part-time volunteer force. It was established on 9 October 1949. Its primary role is to relieve the Regular Army from static duties and assist during natural calamities."\n\nWhen was the Territorial Army established?',
      options: ['15 August 1947', '26 January 1950', '9 October 1949', '1 April 1950'],
      correct: 2,
      explanation: 'The passage directly states: "It was established on 9 October 1949."'
    },
    {
      id: 81, section: 'english',
      question: 'Based on the passage above, what is NOT mentioned as a role of the Territorial Army?',
      options: ['Relieving Regular Army from static duties', 'Assisting during natural calamities', 'Leading combat operations abroad', 'Part-time volunteer service'],
      correct: 2,
      explanation: 'The passage does not mention "leading combat operations abroad" as a role.'
    },
    {
      id: 82, section: 'english',
      question: 'Find the error: "The committee have decided to postpone the meeting."',
      options: ['The committee', 'have decided', 'to postpone', 'the meeting'],
      correct: 1,
      explanation: '"Committee" is treated as a single collective noun → singular verb "has decided."'
    },
    {
      id: 83, section: 'english',
      question: 'Fill in the blank: "He is _____ honest man."',
      options: ['a', 'an', 'the', 'no article needed'],
      correct: 1,
      explanation: '"Honest" begins with a silent "h" and a vowel sound /ɒ/ → use "an" before it.'
    },
    {
      id: 84, section: 'english',
      question: 'Choose the sentence with the correct tense:',
      options: ['By the time reinforcements arrived, the battalion already withdrew.', 'By the time reinforcements arrived, the battalion had already withdrawn.', 'By the time reinforcements will arrive, the battalion has already withdrawn.', 'By the time reinforcements arrived, the battalion has already withdrawn.'],
      correct: 1,
      explanation: '"By the time + Simple Past, Past Perfect" is the correct construction for an action completed before another past action.'
    },
    {
      id: 85, section: 'english',
      question: 'Synonym of INDIGENOUS:',
      options: ['Foreign', 'Native', 'Imported', 'Alien'],
      correct: 1,
      explanation: 'INDIGENOUS means originating or occurring naturally in a particular place; its synonym is NATIVE.'
    },
    {
      id: 86, section: 'english',
      question: 'Identify the figure of speech: "The brave soldiers were lions on the battlefield."',
      options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
      correct: 1,
      explanation: 'A METAPHOR makes a direct comparison without "like" or "as." Here, soldiers are directly called lions.'
    },
    {
      id: 87, section: 'english',
      question: 'Fill in the blank (subject–verb agreement): "Neither the captain nor the soldiers _____ afraid."',
      options: ['was', 'were', 'is', 'has been'],
      correct: 1,
      explanation: 'With "neither…nor," the verb agrees with the nearer subject. "soldiers" is plural → "were."'
    },
    {
      id: 88, section: 'english',
      question: 'One-word substitution for "a place where soldiers are stationed":',
      options: ['Arsenal', 'Garrison', 'Bunker', 'Trench'],
      correct: 1,
      explanation: 'A GARRISON is a body of troops stationed in a fortified place, or the place itself.'
    },
    {
      id: 89, section: 'english',
      question: 'Choose the sentence with correct subject–verb agreement:',
      options: ['Each of the soldiers were given a medal.', 'Each of the soldiers was given a medal.', 'Each of the soldiers have been given a medal.', 'Each of the soldiers are given a medal.'],
      correct: 1,
      explanation: '"Each" is always singular → "Each of the soldiers was given a medal."'
    },
    {
      id: 90, section: 'english',
      question: 'The word FORTITUDE means:',
      options: ['Physical strength', 'Mental courage in adversity', 'Military strength', 'A strong fortress'],
      correct: 1,
      explanation: 'FORTITUDE means courage and endurance in the face of adversity or pain.'
    },
    {
      id: 91, section: 'english',
      question: 'Choose the correct preposition: "The soldier was promoted _____ the rank of Major."',
      options: ['to', 'at', 'in', 'by'],
      correct: 0,
      explanation: 'The correct phrase is "promoted to the rank of." "To" indicates the destination of advancement.'
    },
    {
      id: 92, section: 'english',
      question: 'Arrange the sentences to form a paragraph:\nP: The officer led the patrol into the jungle.\nQ: Despite difficult terrain, they pressed on.\nR: They returned safely after completing the mission.\nS: The route was dense and unmarked.',
      options: ['PSQR', 'SQPR', 'PRQS', 'QPSR'],
      correct: 0,
      explanation: 'Logical order: P (action starts) → S (describes conditions) → Q (response to conditions) → R (conclusion).'
    },
    {
      id: 93, section: 'english',
      question: 'Cloze test: "The Indian Army _____ one of the largest standing armies in the world."',
      options: ['are', 'is', 'were', 'was'],
      correct: 1,
      explanation: '"The Indian Army" is a singular collective noun → singular present tense "is."'
    },
    {
      id: 94, section: 'english',
      question: 'Choose the correct word: "The soldier showed great _____ in battle."',
      options: ['Bravery', 'Braverness', 'Braveness', 'Braving'],
      correct: 0,
      explanation: '"Bravery" is the correct noun form. "Braverness" and "braveness" are not standard English words.'
    },
    {
      id: 95, section: 'english',
      question: 'Identify the correct sentence:',
      options: ['The news are alarming.', 'The news is alarming.', 'The news were alarming.', 'The news have been alarming.'],
      correct: 1,
      explanation: '"News" is an uncountable noun that always takes a singular verb → "The news is alarming."'
    },
    {
      id: 96, section: 'english',
      question: 'Meaning of the idiom "Bite the bullet":',
      options: ['Load a rifle', 'Endure a difficult situation stoically', 'Shoot accurately', 'Surrender to the enemy'],
      correct: 1,
      explanation: '"Bite the bullet" means to endure a painful or difficult situation with courage, from the old practice of biting a bullet during surgery.'
    },
    {
      id: 97, section: 'english',
      question: 'Choose the antonym of VERBOSE:',
      options: ['Talkative', 'Concise', 'Lengthy', 'Elaborate'],
      correct: 1,
      explanation: 'VERBOSE means using more words than necessary; its antonym is CONCISE (brief and to the point).'
    },
    {
      id: 98, section: 'english',
      question: 'Fill in the blank: "The General, along with his officers, _____ the strategy."',
      options: ['plan', 'plans', 'planned', 'were planning'],
      correct: 1,
      explanation: '"Along with" is a parenthetical phrase; the verb agrees with the main subject "General" (singular) → "plans."'
    },
    {
      id: 99, section: 'english',
      question: 'Choose the word that best completes the sentence: "His _____ response to danger saved the platoon."',
      options: ['cowardly', 'timid', 'intrepid', 'hesitant'],
      correct: 2,
      explanation: 'INTREPID means fearless and adventurous, which best describes a response that saved a platoon in danger.'
    },
    {
      id: 100, section: 'english',
      question: 'Identify the grammatically correct sentence:',
      options: ['He is more braver than his brother.', 'He is braver than his brother.', 'He is more brave than his brother.', 'He is the most brave of the two.'],
      correct: 1,
      explanation: '"Braver" is the correct comparative form. Never use "more" with a one-syllable adjective\'s "-er" form.'
    }
  ]
}
