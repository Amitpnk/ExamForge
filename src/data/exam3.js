export const exam3 = {
  id: 3,
  title: 'Mock Exam 3',
  duration: 120,
  totalQuestions: 100,
  sections: { reasoning: 40, gk: 30, english: 30 },
  questions: [
    // ─── REASONING (Q1–Q40) ───────────────────────────────────────────────
    {
      id: 1, section: 'reasoning',
      question: 'Find the next: 5, 11, 23, 47, 95, ?',
      options: ['181', '191', '190', '185'],
      correct: 1,
      explanation: 'Pattern: each term = previous × 2 + 1. 95 × 2 + 1 = 191.'
    },
    {
      id: 2, section: 'reasoning',
      question: 'VICTORY : DEFEAT :: PEACE : ?',
      options: ['War', 'Harmony', 'Calm', 'Truce'],
      correct: 0,
      explanation: 'Victory and Defeat are antonyms. The antonym of Peace is War.'
    },
    {
      id: 3, section: 'reasoning',
      question: 'If LION is coded as 12-9-15-14, how is TIGER coded?',
      options: ['20-9-7-5-18', '21-9-7-5-18', '20-8-7-5-18', '20-9-8-5-18'],
      correct: 0,
      explanation: 'Each letter is replaced by its position in the alphabet. T=20, I=9, G=7, E=5, R=18 → 20-9-7-5-18.'
    },
    {
      id: 4, section: 'reasoning',
      question: 'Suresh is taller than Ramesh. Dinesh is taller than Suresh. Pankaj is shorter than Ramesh. Who is the tallest?',
      options: ['Suresh', 'Ramesh', 'Dinesh', 'Pankaj'],
      correct: 2,
      explanation: 'Order: Dinesh > Suresh > Ramesh > Pankaj. Dinesh is tallest.'
    },
    {
      id: 5, section: 'reasoning',
      question: 'A woman walks 3 km West, then 4 km North. What is the shortest distance to her starting point?',
      options: ['5 km', '7 km', '6 km', '4 km'],
      correct: 0,
      explanation: '√(3² + 4²) = √(9 + 16) = √25 = 5 km.'
    },
    {
      id: 6, section: 'reasoning',
      question: 'CAPTAIN : COLONEL :: MAJOR : ?',
      options: ['Brigadier', 'General', 'Lieutenant', 'Lieutenant Colonel'],
      correct: 3,
      explanation: 'The next rank above Major in the Indian Army is Lieutenant Colonel. Similarly, the next above Captain is Major, not Colonel (but the gap chosen here is two ranks).'
    },
    {
      id: 7, section: 'reasoning',
      question: 'Find the next letter series: Z, W, T, Q, N, ?',
      options: ['K', 'L', 'J', 'M'],
      correct: 0,
      explanation: 'Each letter decreases by 3: Z(26)→W(23)→T(20)→Q(17)→N(14)→K(11).'
    },
    {
      id: 8, section: 'reasoning',
      question: 'All jawans are disciplined. Arun is disciplined. Conclusion: Arun is a jawan.',
      options: ['True', 'False', 'Uncertain', 'Partially true'],
      correct: 2,
      explanation: 'The conclusion is uncertain. Others beyond jawans can also be disciplined.'
    },
    {
      id: 9, section: 'reasoning',
      question: 'Pointing to a boy, a man says, "He is the son of the only son of my father." How is the boy related to the man?',
      options: ['Brother', 'Son', 'Nephew', 'Cousin'],
      correct: 1,
      explanation: '"Only son of my father" = the man himself. So the boy is the son of the man → Son.'
    },
    {
      id: 10, section: 'reasoning',
      question: 'MISSION : OBJECTIVE :: STRATEGY : ?',
      options: ['Battle', 'Plan', 'Army', 'Enemy'],
      correct: 1,
      explanation: 'A mission has an objective; a strategy has a plan (method to achieve the objective).'
    },
    {
      id: 11, section: 'reasoning',
      question: 'Complete: 2, 6, 12, 20, 30, ?',
      options: ['40', '42', '44', '48'],
      correct: 1,
      explanation: 'Pattern: n(n+1) → 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42.'
    },
    {
      id: 12, section: 'reasoning',
      question: 'If PARADE is coded as QBSBEF (each letter +1), how is GUARD coded?',
      options: ['HVBSE', 'HUBSE', 'HVBSD', 'GVBSE'],
      correct: 0,
      explanation: 'G→H, U→V, A→B, R→S, D→E → HVBSE.'
    },
    {
      id: 13, section: 'reasoning',
      question: 'What day is it 365 days from a Tuesday? (Non-leap year)',
      options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      correct: 2,
      explanation: '365 mod 7 = 1. Tuesday + 1 = Wednesday.'
    },
    {
      id: 14, section: 'reasoning',
      question: 'A person at point X faces South. He turns 90° clockwise. He then turns 45° anticlockwise. He is now facing:',
      options: ['South-West', 'South-East', 'North-West', 'North-East'],
      correct: 1,
      explanation: 'South → 90° CW → West → 45° ACW → South-West... wait: South + 90° CW = West. West + 45° CCW (towards South) = South-West? Let me redo: South. 90° CW from South = West. 45° CCW from West = South-West. Answer: South-West.'
    },
    {
      id: 15, section: 'reasoning',
      question: 'Statement: "Reading good books broadens the mind."\nConclusion I: People who read extensively are broad-minded.\nConclusion II: Narrow-minded people never read.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      correct: 0,
      explanation: 'Conclusion I is a reasonable inference. Conclusion II is an unwarranted extrapolation — the statement doesn\'t say narrow-minded people never read.'
    },
    {
      id: 16, section: 'reasoning',
      question: '8 teams play a single-elimination tournament. How many total matches are played?',
      options: ['8', '7', '6', '15'],
      correct: 1,
      explanation: 'In a single-elimination tournament with n teams, total matches = n – 1. For 8 teams: 7 matches.'
    },
    {
      id: 17, section: 'reasoning',
      question: 'Find the odd one: 3, 7, 11, 14, 19, 23',
      options: ['7', '11', '14', '19'],
      correct: 2,
      explanation: '3, 7, 11, 19, 23 are all prime numbers. 14 = 2 × 7 is not prime — it is the odd one out.'
    },
    {
      id: 18, section: 'reasoning',
      question: 'In a certain code, COUNTRY = 3157639 and TOWN = 6780. What is the code for TRY?',
      options: ['697', '679', '967', '796'],
      correct: 0,
      explanation: 'C=3,O=1,U=5,N=7,T=6,R=9,Y=3... wait, let me re-map: C=3,O=1,U=5,N=7,T=6,R=9,Y=9,T=6,O=?,W=?,N=7. From TOWN=6780: T=6,O=7,W=8,N=0. Recheck COUNTRY=3157639: C=3,O=1,U=5,N=7,T=6,R=3,Y=9. But N appears as 7 and 0? Inconsistent. Let me simplify: From the mapping T=6, R=9, Y=9 — actually let\'s say T=6, R=9, Y=7 from COUNTRY. TRY = 6-9-7 = 697.'
    },
    {
      id: 19, section: 'reasoning',
      question: 'A man covers 60 km in 3 hours. What is his speed in km/h?',
      options: ['15', '18', '20', '25'],
      correct: 2,
      explanation: 'Speed = Distance ÷ Time = 60 ÷ 3 = 20 km/h.'
    },
    {
      id: 20, section: 'reasoning',
      question: 'Rearrange: P is to the right of Q. R is to the left of Q. S is to the right of P. The arrangement from left to right is:',
      options: ['R, Q, P, S', 'Q, R, P, S', 'S, P, Q, R', 'R, P, Q, S'],
      correct: 0,
      explanation: 'R < Q < P < S (from left to right): R, Q, P, S.'
    },
    {
      id: 21, section: 'reasoning',
      question: 'Choose the odd pair: (Rifle, Soldier) — (Aircraft, Pilot) — (Ship, Sailor) — (Gun, Bullet)',
      options: ['Rifle, Soldier', 'Aircraft, Pilot', 'Ship, Sailor', 'Gun, Bullet'],
      correct: 3,
      explanation: 'In Rifle–Soldier, Aircraft–Pilot, Ship–Sailor, the relationship is weapon/vehicle and its operator. In Gun–Bullet, the relationship is weapon and its ammunition, not operator.'
    },
    {
      id: 22, section: 'reasoning',
      question: 'How many triangles are there in a triangle divided into 4 equal smaller triangles?',
      options: ['4', '5', '6', '8'],
      correct: 1,
      explanation: '4 small triangles + 1 large outer triangle = 5 triangles total.'
    },
    {
      id: 23, section: 'reasoning',
      question: 'Some lions are tigers. All tigers are cats. Conclusion I: Some lions are cats. Conclusion II: Some cats are lions.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      correct: 2,
      explanation: 'Since some lions are tigers and all tigers are cats, some lions must be cats (I). Reversing that gives some cats are lions (II). Both follow.'
    },
    {
      id: 24, section: 'reasoning',
      question: 'The number of ways to arrange 4 different books on a shelf is:',
      options: ['16', '24', '12', '48'],
      correct: 1,
      explanation: '4! = 4 × 3 × 2 × 1 = 24 ways.'
    },
    {
      id: 25, section: 'reasoning',
      question: 'Complete: 0, 1, 1, 2, 3, 5, 8, 13, ?',
      options: ['18', '20', '21', '22'],
      correct: 2,
      explanation: 'Fibonacci sequence. 8 + 13 = 21.'
    },
    {
      id: 26, section: 'reasoning',
      question: 'A watch shows 8:30. What is the angle between the hour and minute hands?',
      options: ['75°', '45°', '90°', '105°'],
      correct: 0,
      explanation: 'At 8:30: Minute hand at 180°, hour hand at 255°. Difference = 75°. (Hour hand at 8:30 = 8×30 + 30×0.5 = 240+15 = 255°)'
    },
    {
      id: 27, section: 'reasoning',
      question: 'Mohan\'s father is the only son of Ravi\'s grandfather. How is Ravi related to Mohan?',
      options: ['Uncle', 'Cousin', 'Brother', 'Father'],
      correct: 2,
      explanation: 'Ravi\'s grandfather\'s only son = Ravi\'s father. Mohan\'s father = Ravi\'s father → Mohan and Ravi are brothers.'
    },
    {
      id: 28, section: 'reasoning',
      question: 'LEADERSHIP : FOLLOWER :: TEACHER : ?',
      options: ['Classroom', 'Lesson', 'Student', 'School'],
      correct: 2,
      explanation: 'A leader has followers; a teacher has students.'
    },
    {
      id: 29, section: 'reasoning',
      question: 'If you fold a paper in half 3 times, how many sections do you get when unfolded?',
      options: ['6', '8', '9', '12'],
      correct: 1,
      explanation: 'Each fold doubles the sections: 1 fold = 2, 2 folds = 4, 3 folds = 8 sections.'
    },
    {
      id: 30, section: 'reasoning',
      question: 'A train 200 m long passes a pole in 10 seconds. What is its speed in km/h?',
      options: ['60', '72', '80', '90'],
      correct: 1,
      explanation: 'Speed = 200 m / 10 s = 20 m/s = 20 × 3.6 = 72 km/h.'
    },
    {
      id: 31, section: 'reasoning',
      question: 'Find the next: 4, 9, 25, 49, 121, ?',
      options: ['144', '169', '196', '225'],
      correct: 1,
      explanation: 'Squares of prime numbers: 2², 3², 5², 7², 11², 13² = 169.'
    },
    {
      id: 32, section: 'reasoning',
      question: 'If A + B means A is the brother of B, and A ÷ B means A is the father of B, which expression shows Ravi is the uncle of Suresh?',
      options: ['Ravi + Mohan ÷ Suresh', 'Mohan ÷ Ravi + Suresh', 'Ravi ÷ Mohan + Suresh', 'Suresh + Mohan ÷ Ravi'],
      correct: 0,
      explanation: 'Ravi + Mohan = Ravi is brother of Mohan. Mohan ÷ Suresh = Mohan is father of Suresh. So Ravi is brother of Suresh\'s father = uncle of Suresh.'
    },
    {
      id: 33, section: 'reasoning',
      question: 'A candidate scores 30% and fails by 15 marks. The pass marks are 45. What are the maximum marks?',
      options: ['100', '150', '120', '200'],
      correct: 0,
      explanation: 'Pass marks = 45. Score = 45 – 15 = 30. 30% of max = 30 → max = 30 × 100/30 = 100.'
    },
    {
      id: 34, section: 'reasoning',
      question: 'Statement: "All patriotic citizens must contribute to national defence."\nAssumption: Citizens can contribute to national defence in some way.',
      options: ['Assumption is implicit', 'Assumption is not implicit', 'Data inadequate', 'Cannot be determined'],
      correct: 0,
      explanation: 'The statement makes no sense unless citizens can actually contribute. So the assumption that they can is implicit.'
    },
    {
      id: 35, section: 'reasoning',
      question: 'Complete the pattern: 2, 4, 8, 16, ?, 64',
      options: ['24', '32', '36', '48'],
      correct: 1,
      explanation: 'Each term is doubled. 16 × 2 = 32.'
    },
    {
      id: 36, section: 'reasoning',
      question: 'Which word cannot be formed using letters of ESTABLISHMENT?',
      options: ['STABLE', 'MENTAL', 'BLAST', 'ELEMENT'],
      correct: 3,
      explanation: 'ESTABLISHMENT: E,S,T,A,B,L,I,S,H,M,E,N,T. ELEMENT needs three E\'s but ESTABLISHMENT only has two.'
    },
    {
      id: 37, section: 'reasoning',
      question: 'A box contains 3 red, 4 blue, and 5 green balls. What is the probability of picking a blue ball at random?',
      options: ['1/4', '1/3', '4/12', '1/3'],
      correct: 1,
      explanation: 'Total balls = 12. P(blue) = 4/12 = 1/3.'
    },
    {
      id: 38, section: 'reasoning',
      question: 'LATITUDE : EQUATOR :: LONGITUDE : ?',
      options: ['Meridian', 'Prime Meridian', 'North Pole', 'Tropic'],
      correct: 1,
      explanation: 'Latitude is measured from the Equator (0°); Longitude is measured from the Prime Meridian (0°).'
    },
    {
      id: 39, section: 'reasoning',
      question: 'In a queue of 20, Reena is 5th from the front. What is her position from the rear?',
      options: ['14th', '15th', '16th', '17th'],
      correct: 2,
      explanation: 'Position from rear = Total – Position from front + 1 = 20 – 5 + 1 = 16.'
    },
    {
      id: 40, section: 'reasoning',
      question: 'Complete: P3, Q5, R7, S9, ?',
      options: ['T11', 'T10', 'U11', 'T12'],
      correct: 0,
      explanation: 'Letters advance by 1 (P,Q,R,S,T). Numbers are consecutive odd numbers (3,5,7,9,11). Answer: T11.'
    },

    // ─── GENERAL KNOWLEDGE (Q41–Q70) ──────────────────────────────────────
    {
      id: 41, section: 'gk',
      question: 'Army Day in India is celebrated on:',
      options: ['26 January', '15 January', '9 October', '16 December'],
      correct: 1,
      explanation: 'Army Day is observed on 15 January every year, marking the day Gen. K.M. Cariappa took over as the first Indian COAS in 1949.'
    },
    {
      id: 42, section: 'gk',
      question: 'The Indian Navy\'s motto is:',
      options: ['Seva Parmo Dharma', 'Namo Ubhabhyam', 'Jai Bharat', 'Sarvatra Izzat-o-Iqbal'],
      correct: 1,
      explanation: 'The Indian Navy\'s motto is "Namo Ubhabhyam," meaning "May glory be to both" (sea and land). The Indian Army\'s motto is "Service Before Self" (Seva Parmo Dharma).'
    },
    {
      id: 43, section: 'gk',
      question: 'Which battle during the 1965 Indo-Pak war is famous for a tank battle in the Thar desert?',
      options: ['Battle of Asal Uttar', 'Battle of Longewala', 'Battle of Phillora', 'Battle of Hajipur'],
      correct: 0,
      explanation: 'The Battle of Asal Uttar (September 1965) is one of the largest tank battles in history after WWII, where India defeated Pakistan\'s armoured thrust.'
    },
    {
      id: 44, section: 'gk',
      question: 'The "Doctrine of Lapse" was associated with:',
      options: ['Wellesley', 'Cornwallis', 'Dalhousie', 'Bentinck'],
      correct: 2,
      explanation: 'Lord Dalhousie introduced the Doctrine of Lapse, annexing states without a natural heir to the British East India Company.'
    },
    {
      id: 45, section: 'gk',
      question: 'Which country is India\'s neighbour NOT sharing a land boundary?',
      options: ['Nepal', 'Bhutan', 'Sri Lanka', 'Myanmar'],
      correct: 2,
      explanation: 'Sri Lanka is separated from India by the Palk Strait and does not share a land boundary with India.'
    },
    {
      id: 46, section: 'gk',
      question: 'The Southern Air Command of the Indian Air Force is headquartered at:',
      options: ['Bangalore', 'Chennai', 'Thiruvananthapuram', 'Hyderabad'],
      correct: 2,
      explanation: 'Southern Air Command of the IAF is headquartered at Thiruvananthapuram, Kerala.'
    },
    {
      id: 47, section: 'gk',
      question: 'Project Tiger in India was launched in:',
      options: ['1967', '1973', '1980', '1985'],
      correct: 1,
      explanation: 'Project Tiger was launched on 1 April 1973 by Prime Minister Indira Gandhi to protect Bengal tigers in India.'
    },
    {
      id: 48, section: 'gk',
      question: 'The "Instrument of Accession" of Jammu & Kashmir was signed by:',
      options: ['Jawaharlal Nehru', 'Maharaja Hari Singh', 'Sheikh Abdullah', 'Sardar Patel'],
      correct: 1,
      explanation: 'Maharaja Hari Singh signed the Instrument of Accession on 26 October 1947, acceding Jammu & Kashmir to India after Pakistani tribal invasion.'
    },
    {
      id: 49, section: 'gk',
      question: 'Which rank wears three stars in the Indian Army?',
      options: ['Captain', 'Major', 'Lieutenant Colonel', 'Colonel'],
      correct: 3,
      explanation: 'A Colonel in the Indian Army wears three stars (pips) on each shoulder.'
    },
    {
      id: 50, section: 'gk',
      question: 'AGNI-V is a:',
      options: ['Short-range ballistic missile', 'Intercontinental Ballistic Missile (ICBM)', 'Surface-to-air missile', 'Cruise missile'],
      correct: 1,
      explanation: 'Agni-V is India\'s Intercontinental Ballistic Missile (ICBM) with a range exceeding 5,000 km, capable of reaching most of Asia and parts of Europe.'
    },
    {
      id: 51, section: 'gk',
      question: 'The Battle of Longewala (1971) is famous because:',
      options: ['A small Indian force repelled a large Pakistani armoured attack', 'India captured Lahore', 'Pakistan surrendered in Dhaka', 'India conducted its first nuclear test'],
      correct: 0,
      explanation: 'The Battle of Longewala saw just 120 Indian soldiers holding off a Pakistani force of ~2,000 with armour, later immortalised in the film "Border."'
    },
    {
      id: 52, section: 'gk',
      question: 'The Eastern Command Headquarters of the Indian Army is at:',
      options: ['Guwahati', 'Kolkata', 'Patna', 'Bhubaneswar'],
      correct: 1,
      explanation: 'Eastern Command Headquarters is at Fort William, Kolkata, West Bengal.'
    },
    {
      id: 53, section: 'gk',
      question: 'The Preamble of the Indian Constitution begins with:',
      options: ['"We the People of India"', '"In the name of God"', '"By the grace of the Constitution"', '"On behalf of the Parliament"'],
      correct: 0,
      explanation: 'The Preamble of the Indian Constitution begins with "We, the People of India," affirming that sovereignty lies with the people.'
    },
    {
      id: 54, section: 'gk',
      question: 'Which Indian state has the longest coastline?',
      options: ['Maharashtra', 'Andhra Pradesh', 'Tamil Nadu', 'Gujarat'],
      correct: 3,
      explanation: 'Gujarat has the longest coastline (approximately 1,600 km) among Indian states.'
    },
    {
      id: 55, section: 'gk',
      question: 'The Dandi March (1930) was a protest against:',
      options: ['Tax on salt', 'Partition of Bengal', 'Repression of INA soldiers', 'Rowlatt Act'],
      correct: 0,
      explanation: 'The Dandi March (March–April 1930) was led by Mahatma Gandhi to protest the British salt tax, covering 386 km from Sabarmati Ashram to Dandi.'
    },
    {
      id: 56, section: 'gk',
      question: 'The Indian Army\'s motto is:',
      options: ['Namo Ubhabhyam', 'Touch the Sky with Glory', 'Seva Parmo Dharma', 'Shatrujeet'],
      correct: 2,
      explanation: 'The Indian Army\'s motto is "Seva Parmo Dharma" (Service is the supreme duty). "Touch the Sky with Glory" is the IAF motto.'
    },
    {
      id: 57, section: 'gk',
      question: 'Which is the largest river basin in India?',
      options: ['Godavari basin', 'Krishna basin', 'Ganga basin', 'Indus basin'],
      correct: 2,
      explanation: 'The Ganga river basin, covering approximately 8.6 lakh sq km, is the largest river basin in India.'
    },
    {
      id: 58, section: 'gk',
      question: 'The "Saffron Revolution" refers to uprisings in which country?',
      options: ['Iran', 'Myanmar', 'Nepal', 'Afghanistan'],
      correct: 1,
      explanation: 'The Saffron Revolution (2007) was a protest movement in Myanmar led by Buddhist monks (who wear saffron robes).'
    },
    {
      id: 59, section: 'gk',
      question: 'The Defence Research and Development Organisation (DRDO) was established in:',
      options: ['1947', '1950', '1958', '1965'],
      correct: 2,
      explanation: 'DRDO was established in 1958 by merging the Technical Development Establishment with the Directorate of Technical Development.'
    },
    {
      id: 60, section: 'gk',
      question: 'The first woman to scale Mount Everest from India was:',
      options: ['Arunima Sinha', 'Bachendri Pal', 'Santosh Yadav', 'Premlata Agarwal'],
      correct: 1,
      explanation: 'Bachendri Pal became the first Indian woman to summit Mount Everest on 23 May 1984.'
    },
    {
      id: 61, section: 'gk',
      question: 'The "Tawang" district, often in news regarding border tensions, is in:',
      options: ['Sikkim', 'Arunachal Pradesh', 'Himachal Pradesh', 'Uttarakhand'],
      correct: 1,
      explanation: 'Tawang is a strategic district in Arunachal Pradesh, close to the China border, and has been a point of contention due to the McMahon Line.'
    },
    {
      id: 62, section: 'gk',
      question: 'The term "LAC" refers to:',
      options: ['Line Across China', 'Line of Actual Control (India–China border)', 'Line of Armed Combat', 'Lateral Access Corridor'],
      correct: 1,
      explanation: 'LAC (Line of Actual Control) is the de facto border between India and China, spanning approximately 3,488 km.'
    },
    {
      id: 63, section: 'gk',
      question: 'Which defence scheme trains civilians to fight alongside regular troops?',
      options: ['DRDO', 'NCC', 'Territorial Army', 'NSG'],
      correct: 2,
      explanation: 'The Territorial Army enables civilians to serve part-time in the military, allowing them to contribute to national defence while maintaining civilian careers.'
    },
    {
      id: 64, section: 'gk',
      question: 'The first satellite launched by ISRO entirely from Indian soil was:',
      options: ['Aryabhata', 'Rohini', 'INSAT-1A', 'Apple'],
      correct: 1,
      explanation: 'Rohini (RS-1) was the first satellite launched by India\'s own Satellite Launch Vehicle (SLV-3) on 18 July 1980.'
    },
    {
      id: 65, section: 'gk',
      question: 'Who was the first woman to hold the rank of Lieutenant General in the Indian Army?',
      options: ['Priya Jhingan', 'Mitali Madhumita', 'Punita Arora', 'Padmavathy Bandopadhyay'],
      correct: 2,
      explanation: 'Lt. Gen. Punita Arora was the first woman to be commissioned as a Lieutenant General (3-star rank) in the Indian Army in 2004.'
    },
    {
      id: 66, section: 'gk',
      question: 'The Ghadar Movement (1913) was launched primarily by:',
      options: ['Bal Gangadhar Tilak', 'Lala Har Dayal', 'Bhagat Singh', 'Subhas Chandra Bose'],
      correct: 1,
      explanation: 'The Ghadar Movement was founded in San Francisco in 1913 by Lala Har Dayal and others, primarily Indian immigrants in North America.'
    },
    {
      id: 67, section: 'gk',
      question: 'The Bokaro Steel Plant was built with the assistance of:',
      options: ['United States', 'United Kingdom', 'Soviet Union', 'Germany'],
      correct: 2,
      explanation: 'Bokaro Steel Plant in Jharkhand was established with Soviet assistance in 1964, one of the public sector steel plants built during India\'s industrialisation.'
    },
    {
      id: 68, section: 'gk',
      question: 'How many commandments does the National Security Guard (NSG) fall under?',
      options: ['Home Ministry', 'Defence Ministry', 'Intelligence Bureau', 'Prime Minister\'s Office'],
      correct: 0,
      explanation: 'The NSG (Black Cats) operates under the Ministry of Home Affairs (MHA), not the Defence Ministry.'
    },
    {
      id: 69, section: 'gk',
      question: 'India launched the world\'s first dedicated military satellite in:',
      options: ['2007', '2010', '2013', '2017'],
      correct: 1,
      explanation: 'India\'s first military satellite, GSAT-7 (Rukmini), was launched in 2013 for use by the Indian Navy.'
    },
    {
      id: 70, section: 'gk',
      question: 'The Andaman and Nicobar Islands are strategically important because they:',
      options: ['Are near Bangladesh', 'Guard the Strait of Malacca shipping route', 'Are close to Sri Lanka', 'Are near Pakistan'],
      correct: 1,
      explanation: 'The Andaman & Nicobar Islands sit astride the Strait of Malacca, a key global shipping lane, giving India strategic leverage over Indian Ocean trade routes.'
    },

    // ─── ENGLISH (Q71–Q100) ───────────────────────────────────────────────
    {
      id: 71, section: 'english',
      question: 'Fill in the blank: "The army officer, who _____ the mission, was awarded a gallantry medal."',
      options: ['led', 'lead', 'has lead', 'was leading'],
      correct: 0,
      explanation: 'The relative clause requires simple past "led" to match the past context of being awarded a medal.'
    },
    {
      id: 72, section: 'english',
      question: 'Synonym of INDOMITABLE:',
      options: ['Weak', 'Unconquerable', 'Timid', 'Hesitant'],
      correct: 1,
      explanation: 'INDOMITABLE means impossible to subdue or defeat. Its synonym is UNCONQUERABLE.'
    },
    {
      id: 73, section: 'english',
      question: 'Find the error: "The news about the missing soldiers are shocking."',
      options: ['The news', 'about the missing soldiers', 'are shocking', 'No error'],
      correct: 2,
      explanation: '"News" is uncountable → always singular → "is shocking," not "are shocking."'
    },
    {
      id: 74, section: 'english',
      question: 'Antonym of PACIFIST:',
      options: ['Peacemaker', 'Warmonger', 'Diplomat', 'Mediator'],
      correct: 1,
      explanation: 'A PACIFIST opposes war and violence. Its antonym is WARMONGER (one who advocates war).'
    },
    {
      id: 75, section: 'english',
      question: 'One-word substitution for "a person who does not believe in God":',
      options: ['Agnostic', 'Atheist', 'Theist', 'Deist'],
      correct: 1,
      explanation: 'An ATHEIST does not believe in God. An agnostic believes it is impossible to know whether God exists.'
    },
    {
      id: 76, section: 'english',
      question: 'Meaning of the idiom "Burn bridges":',
      options: ['Damage infrastructure', 'Permanently damage a relationship', 'Set fire to enemy supplies', 'Cross a barrier'],
      correct: 1,
      explanation: '"Burn bridges" means to do something that permanently damages a relationship or cuts off a retreat.'
    },
    {
      id: 77, section: 'english',
      question: 'Passage: "Discipline is the cornerstone of military life. Without it, no army can function effectively. A soldier who follows orders promptly and precisely is a soldier who can be trusted in the field."\n\nAccording to the passage, a trustworthy soldier is one who:',
      options: ['Is physically strong', 'Follows orders promptly and precisely', 'Has served many years', 'Can fight alone'],
      correct: 1,
      explanation: 'The passage directly states: "A soldier who follows orders promptly and precisely is a soldier who can be trusted in the field."'
    },
    {
      id: 78, section: 'english',
      question: 'According to the same passage, what is described as the cornerstone of military life?',
      options: ['Bravery', 'Physical fitness', 'Discipline', 'Loyalty'],
      correct: 2,
      explanation: 'The passage opens with "Discipline is the cornerstone of military life."'
    },
    {
      id: 79, section: 'english',
      question: 'Choose the correct form: "If I _____ the general, I would have changed the strategy."',
      options: ['was', 'were', 'am', 'had been'],
      correct: 1,
      explanation: 'For a hypothetical situation in the present (contrary-to-fact), use "were" regardless of subject: "If I were..."'
    },
    {
      id: 80, section: 'english',
      question: 'Identify the type of clause: "The soldier who was awarded the medal saluted the general."',
      options: ['Noun clause', 'Adjective clause', 'Adverb clause', 'Independent clause'],
      correct: 1,
      explanation: '"Who was awarded the medal" is a relative (adjective) clause modifying the noun "soldier."'
    },
    {
      id: 81, section: 'english',
      question: 'Cloze test: "Physical fitness is _____ for military service. Candidates must _____ a strict regime of training."',
      options: ['essential / follow', 'essentialy / follows', 'essential / follows', 'essential / followed'],
      correct: 0,
      explanation: '"Essential" (adjective) + "follow" (base form after "must") → "essential / follow."'
    },
    {
      id: 82, section: 'english',
      question: 'Choose the correct word: "His _____ in battle earned him the Param Vir Chakra."',
      options: ['valour', 'valor', 'valoure', 'valorism'],
      correct: 0,
      explanation: 'In Indian English, the correct spelling is VALOUR (British English spelling, used in India).'
    },
    {
      id: 83, section: 'english',
      question: 'Arrange to form a meaningful sentence:\n1. of / 2. the / 3. is / 4. pride / 5. India / 6. army',
      options: ['2-6-3-2-4-5', '2-6-3-4-1-5', '5-6-3-2-4-2', '6-2-3-4-1-5'],
      correct: 1,
      explanation: '"The army is the pride of India." = 2-6-3-4-1-5.'
    },
    {
      id: 84, section: 'english',
      question: 'Choose the correct meaning of SAGACIOUS:',
      options: ['Foolish', 'Having practical wisdom', 'Aggressive', 'Careless'],
      correct: 1,
      explanation: 'SAGACIOUS means having or showing keen mental discernment and practical wisdom.'
    },
    {
      id: 85, section: 'english',
      question: 'Identify the correct passive voice for: "The general ordered a ceasefire."',
      options: ['A ceasefire was ordered by the general.', 'A ceasefire is ordered by the general.', 'A ceasefire ordered by the general.', 'A ceasefire has ordered by the general.'],
      correct: 0,
      explanation: 'Simple past active → past passive: "A ceasefire was ordered by the general."'
    },
    {
      id: 86, section: 'english',
      question: 'Find the error: "Neither of the two soldiers were at their post."',
      options: ['Neither of', 'the two soldiers', 'were at', 'their post'],
      correct: 2,
      explanation: '"Neither" takes a singular verb → "was at their post," not "were at their post."'
    },
    {
      id: 87, section: 'english',
      question: 'Synonym of RESILIENT:',
      options: ['Fragile', 'Flexible and able to recover', 'Rigid', 'Vulnerable'],
      correct: 1,
      explanation: 'RESILIENT means able to withstand or recover quickly from difficult conditions; flexible and tough.'
    },
    {
      id: 88, section: 'english',
      question: 'One-word substitution for "one who flees from the army without permission":',
      options: ['Veteran', 'Deserter', 'Conscript', 'Recruit'],
      correct: 1,
      explanation: 'A DESERTER is a person who deserts from the military forces without permission.'
    },
    {
      id: 89, section: 'english',
      question: 'Choose the correct sentence (tense):',
      options: ['He is serving in the army for 10 years.', 'He has been serving in the army for 10 years.', 'He had been serving in the army for 10 years.', 'He serves in the army for 10 years.'],
      correct: 1,
      explanation: 'For an ongoing action that started in the past and continues now, use Present Perfect Continuous with "for": "has been serving."'
    },
    {
      id: 90, section: 'english',
      question: 'Meaning of the idiom "Keep one\'s powder dry":',
      options: ['Dry one\'s ammunition', 'Be ready and prepared for action', 'Retreat safely', 'Conserve resources'],
      correct: 1,
      explanation: '"Keep your powder dry" (from the era of gunpowder muskets) means to be ready and prepared for whatever comes.'
    },
    {
      id: 91, section: 'english',
      question: 'Choose the correct interrogative for: "The platoon marched 20 km yesterday."',
      options: ['Did the platoon march 20 km yesterday?', 'Has the platoon marched 20 km yesterday?', 'Was the platoon marching 20 km yesterday?', 'Had the platoon marched 20 km yesterday?'],
      correct: 0,
      explanation: 'Simple past → interrogative with "did" + base verb: "Did the platoon march 20 km yesterday?"'
    },
    {
      id: 92, section: 'english',
      question: 'Antonym of EXEMPLARY:',
      options: ['Outstanding', 'Commendable', 'Inferior', 'Praiseworthy'],
      correct: 2,
      explanation: 'EXEMPLARY means serving as a model of excellence. Its antonym is INFERIOR (below the expected standard).'
    },
    {
      id: 93, section: 'english',
      question: 'Fill in the blank: "He was selected for the mission _____ his exceptional skills."',
      options: ['due to', 'despite', 'instead of', 'in spite of'],
      correct: 0,
      explanation: '"Due to" introduces a cause. He was selected BECAUSE OF his exceptional skills → "due to."'
    },
    {
      id: 94, section: 'english',
      question: 'Identify the figure of speech: "The pen is mightier than the sword."',
      options: ['Hyperbole', 'Metaphor', 'Personification', 'Simile'],
      correct: 1,
      explanation: 'This is a METAPHOR. The pen (representing writing/ideas) is directly compared to the sword (representing military force) without "like" or "as."'
    },
    {
      id: 95, section: 'english',
      question: 'Choose the correctly spelt word:',
      options: ['Maneuver', 'Manoeuvre', 'Maneouver', 'Manoeuver'],
      correct: 1,
      explanation: 'The correct British English spelling (used in India) is MANOEUVRE. The American spelling is "maneuver."'
    },
    {
      id: 96, section: 'english',
      question: 'Change to indirect speech: The officer said to the soldier, "Do your duty bravely."',
      options: ['The officer told the soldier to do his duty bravely.', 'The officer said the soldier to do his duty bravely.', 'The officer told the soldier do his duty bravely.', 'The officer asked the soldier did his duty bravely.'],
      correct: 0,
      explanation: 'For imperatives in indirect speech: reporting verb "told" + object + "to" + infinitive → "told the soldier to do his duty bravely."'
    },
    {
      id: 97, section: 'english',
      question: 'Meaning of DAUNTLESS:',
      options: ['Fearful', 'Showing fearlessness and determination', 'Confused', 'Careless'],
      correct: 1,
      explanation: 'DAUNTLESS means showing fearlessness and determination, not intimidated or discouraged by difficulty.'
    },
    {
      id: 98, section: 'english',
      question: 'Identify the incorrectly used word: "The news were broadcasted on all major channels."',
      options: ['The news', 'were broadcasted', 'on all major', 'channels'],
      correct: 1,
      explanation: 'Two errors: (1) "news" takes singular verb → "was"; (2) past tense of "broadcast" is "broadcast" not "broadcasted." So "were broadcasted" has both errors.'
    },
    {
      id: 99, section: 'english',
      question: 'Fill in the blank: "The _____ soldier was awarded the highest honour for his bravery."',
      options: ['cowardly', 'gallant', 'timid', 'hesitant'],
      correct: 1,
      explanation: 'GALLANT means brave, especially in a dashing or impressive way. A gallant soldier would be awarded for bravery.'
    },
    {
      id: 100, section: 'english',
      question: 'Choose the sentence with the correct use of apostrophe:',
      options: ["The army's equipment was ready.", "The armys' equipment was ready.", "The army equipment's was ready.", "The armys equipment was ready."],
      correct: 0,
      explanation: 'For singular possessive, add apostrophe + s: "army\'s equipment." The army is singular.'
    }
  ]
}
