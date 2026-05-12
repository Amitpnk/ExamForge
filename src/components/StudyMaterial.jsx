import { useState } from 'react'

const topics = [
  {
    id: 'overview',
    title: 'Exam Overview',
    icon: '📋',
    color: '#2e7d32',
    sections: [
      {
        title: 'Exam Pattern 2026',
        content: `The Territorial Army Officer Written Exam follows a Computer Based Test (CBT) format with the following pattern:

• Total Questions: 100
• Total Marks: 100 (1 mark each)
• Duration: 2 Hours
• Mode: Computer Based Test (CBT)
• Negative Marking: –0.33 per wrong answer
• Standard: Graduate Level`
      },
      {
        title: 'Subject-wise Distribution',
        table: {
          headers: ['Subject', 'Questions', 'Marks', 'Target Score'],
          rows: [
            ['Reasoning & Intelligence', '40', '40', '30+'],
            ['General Knowledge', '30', '30', '22+'],
            ['English Language', '30', '30', '24+'],
            ['TOTAL', '100', '100', '76+'],
          ]
        }
      },
      {
        title: 'Expected Safe Score',
        content: `• 70+ marks → Very strong chance of selection
• 60–70 marks → Competitive; depends on cut-off
• Below 50 marks → High risk of failing written test

⚠ Accuracy matters more than number of attempts due to –0.33 negative marking. Attempt a question only when you are at least 60–65% confident.`
      }
    ]
  },
  {
    id: 'reasoning',
    title: 'Reasoning',
    icon: '🧩',
    color: '#2e7d32',
    sections: [
      {
        title: 'Important Topics',
        content: `VERBAL REASONING
• Analogy (Word Relationships)
• Coding–Decoding
• Number & Letter Series
• Blood Relations
• Direction Sense
• Syllogism
• Statement & Conclusion / Assumption
• Ranking & Arrangement
• Seating Arrangement
• Puzzle Solving

NON-VERBAL REASONING
• Pattern Completion
• Mirror Images
• Embedded Figures
• Figure Series
• Paper Folding/Cutting

LOGICAL REASONING
• Cause and Effect
• Assumptions
• Logical Deductions
• Data Sufficiency`
      },
      {
        title: 'Key Formulas & Rules',
        content: `RANKING:
Total = Rank from top + Rank from bottom – 1

DIRECTION:
North→East→South→West→North (clockwise rotation)
Mirror image: clock showing H:MM → mirror shows (11:60 – H:MM)

CIRCULAR ARRANGEMENT:
Distinct arrangements of n items in a circle = (n–1)!

HANDSHAKES:
n persons → C(n,2) = n(n–1)/2 handshakes

CLOCK ANGLES:
Minute hand: 6° per minute
Hour hand: 0.5° per minute
Angle at H:M = |30H – 5.5M|`
      },
      {
        title: 'Syllogism Quick Rules',
        content: `A (All X are Y) + A (All Y are Z) → A (All X are Z) ✔
A (All X are Y) + E (No Y is Z) → E (No X is Z) ✔
A (All X are Y) + I (Some Y are Z) → I (Some X are Z) ✗ — DOES NOT FOLLOW
I (Some X are Y) + A (All Y are Z) → I (Some X are Z) ✔
I (Some X are Y) + E (No Y is Z) → O (Some X are not Z) ✔

Key: You CANNOT draw a universal conclusion from a particular premise alone.`
      },
      {
        title: 'Best Books',
        content: `📚 R.S. Aggarwal — Verbal & Non-Verbal Reasoning (Must Have)
📚 Arihant — Logical Reasoning
📚 M.K. Pandey — Analytical Reasoning

Practice 20–25 questions daily. Focus on speed after accuracy.`
      }
    ]
  },
  {
    id: 'gk',
    title: 'General Knowledge',
    icon: '🌏',
    color: '#e65100',
    sections: [
      {
        title: 'Indian Polity (High Priority)',
        content: `• President: Supreme Commander of Armed Forces (Art. 53)
• Parliament = President + Lok Sabha + Rajya Sabha (Art. 79)
• Rajya Sabha Chairman = Vice President
• Six Fundamental Rights (Art. 12–35)
• Article 17 – Abolishes Untouchability
• Article 21 – Right to Life and Personal Liberty
• Article 32 – Right to Constitutional Remedies (Heart of Constitution)
• Article 370 – Abrogated in August 2019 (J&K special status)
• Emergency Provisions: Art. 352 (National), 356 (State), 360 (Financial)`
      },
      {
        title: 'Indian History (Key Events)',
        content: `• 1757 – Battle of Plassey (British dominance in Bengal begins)
• 1857 – First War of Independence (Sepoy Mutiny)
• 1885 – Indian National Congress founded
• 1905 – Partition of Bengal (by Lord Curzon)
• 1915 – Gandhi returns to India
• 1930 – Dandi March (Salt Satyagraha)
• 1931 – Gandhi–Irwin Pact
• 1942 – Quit India Movement (8 August)
• 1947 – Independence (15 August)
• 1949 – Constitution adopted (26 November)
• 1950 – Constitution enacted (26 January)`
      },
      {
        title: 'Defence Awareness (Critical for TA)',
        content: `ARMY COMMANDS (7 total):
• Northern Command — HQ: Udhampur
• Western Command — HQ: Chandimandir
• South Western Command — HQ: Jaipur
• Southern Command — HQ: Pune
• Eastern Command — HQ: Kolkata
• Central Command — HQ: Lucknow
• Training Command — HQ: Shimla

IMPORTANT OPERATIONS:
• 1947: Operation Polo (Hyderabad), Operation Vijay (Goa, 1961)
• 1965: Operation Riddle (Indo-Pak War)
• 1971: Operation Cactus Lily / Liberation of Bangladesh
• 1984: Operation Blue Star (Golden Temple)
• 1987: Operation Pawan (Sri Lanka)
• 1999: Operation Vijay (Kargil)

GALLANTRY AWARDS (in order):
Wartime: Param Vir Chakra > Maha Vir Chakra > Vir Chakra
Peacetime: Ashoka Chakra > Kirti Chakra > Shaurya Chakra`
      },
      {
        title: 'Missiles & Defence Systems',
        content: `SURFACE-TO-SURFACE:
• Agni Series (I to V+): Short to ICBM range
• Prithvi I, II, III: Short range ballistic
• BrahMos (India–Russia): Supersonic cruise missile

SURFACE-TO-AIR:
• Akash: Medium range SAM
• Trishul: Short range SAM (retired)
• MRSAM/Barak-8: India–Israel joint

AIR-TO-AIR:
• Astra: BVR, all-weather, indigenously developed

ANTI-TANK:
• Nag: India's ATGM (helicopter & ground launched)
• Milan: France-origin (being replaced)

DRDO Major Projects:
• TEJAS (LCA) — Light Combat Aircraft
• ARJUN MBT — Main Battle Tank
• PINAKA — Multi-barrel rocket launcher`
      },
      {
        title: 'Indian Geography',
        content: `RIVERS (Himalayan origin): Ganga, Yamuna, Brahmaputra, Indus, Sutlej, Chenab, Jhelum, Ravi, Beas
RIVERS (Peninsular): Godavari, Krishna, Kaveri, Mahanadi, Narmada, Tapti

MOUNTAIN PASSES:
• Rohtang, Baralacha La (HP) | Zoji La (J&K/Ladakh) | Nathu La (Sikkim) | Bomdi La (AP)

PEAKS:
• Kangchenjunga — highest in Indian territory (8,586 m)
• K2 — highest overall including PoK (8,611 m)
• Nanda Devi — highest fully within India

BORDERS:
• Land: Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar
• No land border: Sri Lanka (Palk Strait), Maldives

TROPIC OF CANCER passes through 8 states:
Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram`
      },
      {
        title: 'Science & Technology',
        content: `SPACE (ISRO):
• Aryabhata (1975) — first Indian satellite (Soviet launch)
• Rohini (1980) — first satellite by Indian SLV
• Chandrayaan-1 (2008), Chandrayaan-2 (2019), Chandrayaan-3 (2023)
• Mangalyaan/MOM (2013) — Mars Orbiter (first Asian nation to reach Mars)
• Aditya-L1 (2023) — Solar mission

BASIC SCIENCE:
• Newton's Laws of Motion
• Sound travels faster in solids than in air
• Light travels at ~3×10⁸ m/s in vacuum
• DNA carries genetic information
• Photosynthesis: CO₂ + H₂O → Glucose + O₂
• Acids have pH < 7, Bases have pH > 7`
      }
    ]
  },
  {
    id: 'english',
    title: 'English',
    icon: '📝',
    color: '#1565c0',
    sections: [
      {
        title: 'Grammar — Key Rules',
        content: `SUBJECT-VERB AGREEMENT:
• Each, Every, Either, Neither → singular verb
• "News," "Mathematics," "Economics," "Physics" → singular verb
• Collective nouns (army, committee) → singular in Indian exams
• "Neither A nor B" / "Either A or B" → verb agrees with B (nearer subject)
• "A as well as B" → verb agrees with A (main subject)

TENSES:
• Since + point of time, For + duration → Perfect/Perfect Continuous
• "Yesterday," "Last week," "Ago" → Simple Past
• "By the time [past], [Past Perfect]" — e.g., "By the time he arrived, she had left"
• If + Simple Present → will (first conditional)
• If + Simple Past → would (second conditional — hypothetical)
• If + Past Perfect → would have (third conditional)

ARTICLES:
• "an" before vowel sounds: an hour, an honest man, an MBA
• "the" with superlatives, unique objects, specific references`
      },
      {
        title: 'Important Vocabulary',
        content: `WORDS COMMONLY TESTED:

Military/Strength: Valiant, Indomitable, Dauntless, Intrepid, Gallant, Tenacious, Stoic, Fortitude, Resilient

Leadership: Sagacious, Exemplary, Vigilant, Perseverance

Antonym pairs:
• Belligerent ↔ Peaceful
• Verbose ↔ Concise
• Aggravate ↔ Alleviate
• Indolent ↔ Industrious
• Pacifist ↔ Warmonger
• Indigenous ↔ Foreign
• Exemplary ↔ Inferior
• Tenacious ↔ Weak

ONE-WORD SUBSTITUTIONS:
• Bilingual — speaks two languages
• Garrison — place where soldiers are stationed
• Deserter — leaves army without permission
• Crusader — fights for a cause
• Massacre — killing of large number of people`
      },
      {
        title: 'Idioms & Phrases',
        content: `✦ Cross the Rubicon — Take an irrevocable decision
✦ Bite the bullet — Endure a painful situation stoically
✦ Burn the midnight oil — Work or study late at night
✦ Burn bridges — Permanently damage a relationship/cut retreat
✦ In the line of duty — While performing official responsibilities
✦ Keep one's powder dry — Be ready and prepared for action
✦ Bite more than one can chew — Take on more than manageable
✦ Blow one's own trumpet — Boast about oneself
✦ Rain on someone's parade — Spoil someone's plans
✦ The ball is in your court — It's your decision/responsibility`
      },
      {
        title: 'Figures of Speech',
        content: `SIMILE: Comparison using "like" or "as"
→ "The announcement fell like a bombshell."

METAPHOR: Direct comparison without "like/as"
→ "The brave soldiers were lions on the battlefield."

PERSONIFICATION: Giving human qualities to non-human things
→ "The wind whispered through the trees."

HYPERBOLE: Extreme exaggeration
→ "I've told you a million times."

ALLITERATION: Repetition of consonant sounds
→ "The brave, bold battalion marched bravely."

ONOMATOPOEIA: Word imitates sound
→ "The guns boomed in the distance."

KEY TEST POINT: "The pen is mightier than the sword" = METAPHOR (not simile)`
      },
      {
        title: 'Comprehension Strategy',
        content: `APPROACH:
1. Read questions FIRST before reading the passage
2. Underline key words in each question
3. Look for direct answers — avoid inference unless asked
4. Words like "according to," "as stated," "mentioned" → look for direct statement
5. "Inferred," "can be concluded," "implied" → need inference

COMMON TRAP: Don't choose options that are TRUE in general but NOT mentioned in the passage. Comprehension answers must be supported by text.

SPELLINGS OFTEN CONFUSED:
Accommodate (double c, double m)
Receive (i before e after c)
Manoeuvre (British spelling used in India)
Sergeant, Parliament, Conscientious
Millennium, Committee, Correspondence`
      },
      {
        title: 'Recommended Books',
        content: `📚 SP Bakshi — Objective General English (Best for grammar + vocabulary)
📚 Wren & Martin — High School English Grammar (Fundamentals)
📚 Norman Lewis — Word Power Made Easy (Vocabulary)
📚 Previous year question papers (Most important!)

DAILY PRACTICE:
• Read one editorial from The Hindu or Indian Express
• Learn 10 new words daily with usage
• Practice one comprehension passage daily
• Revise grammar rules weekly`
      }
    ]
  },
  {
    id: 'plan',
    title: 'Study Plan',
    icon: '🗓',
    color: '#6a1b9a',
    sections: [
      {
        title: 'Preparation Plan for Working Professionals',
        content: `WEEKDAY SCHEDULE (2 hrs/day):
• 45 min — Reasoning practice
• 30 min — English (alternate grammar & vocabulary)
• 30 min — GK/Current Affairs
• 15 min — Revision of previous day

WEEKEND:
• Full-length mock test (Sat morning, 2 hrs)
• Analyse mock test results (Sat afternoon)
• PIB/defence news review
• Current affairs revision
• Weak area focus`
      },
      {
        title: 'Month-wise Strategy',
        table: {
          headers: ['Month', 'Focus Area', 'Target'],
          rows: [
            ['Month 1', 'Reasoning basics + English grammar + Static GK', 'Build foundation'],
            ['Month 2', 'Mock tests + Speed improvement + Current affairs', 'Hit 60+ in mocks'],
            ['Month 3', 'Full CBT practice + SSB prep + Revision', 'Aim 75+ accuracy'],
          ]
        }
      },
      {
        title: 'Section-wise Priority',
        content: `PRIORITY ORDER:
1. 🧩 Reasoning — Highest weight (40 marks). Learn all types; practice speed.
2. 📝 English — Consistent scoring section. Grammar rules + vocabulary = easy marks.
3. 🌏 GK — Daily consistency required. Defence GK is a differentiator for TA.

TARGET SCORES:
• Reasoning: 30+ out of 40
• English: 24+ out of 30
• GK: 22+ out of 30
• Overall: 76+ out of 100`
      },
      {
        title: 'SSB Interview Preparation',
        content: `Many candidates clear the written exam but fail SSB. Your technical career helps!

YOUR ADVANTAGE (as a software professional):
✔ Leadership — Tech Lead experience = team handling + decision-making
✔ Communication — Client and team interaction skills
✔ Problem-solving — Analytical thinking under pressure

WHAT TO DEVELOP:
• WAT (Word Association Test) — practise associating positive words
• PPDT/TAT — narrate stories with socially positive themes
• GD (Group Discussion) — express views clearly, don't dominate
• PIB (Personal Interview) — know your form thoroughly
• GTO (Group Tasks) — demonstrate leadership naturally

READ REGULARLY:
• The Hindu / Indian Express (editorials)
• PIB (Press Information Bureau)
• Defence news portals`
      }
    ]
  }
]

export default function StudyMaterial() {
  const [activeTopic, setActiveTopic] = useState('overview')
  const [expandedSections, setExpandedSections] = useState({})

  const topic = topics.find(t => t.id === activeTopic)

  function toggleSection(idx) {
    setExpandedSections(s => ({ ...s, [`${activeTopic}-${idx}`]: !s[`${activeTopic}-${idx}`] }))
  }

  return (
    <div className="study-page">
      <div className="study-sidebar">
        <div className="study-sidebar-title">Study Material</div>
        {topics.map(t => (
          <button
            key={t.id}
            className={`study-nav-btn ${activeTopic === t.id ? 'active' : ''}`}
            style={{ borderLeftColor: activeTopic === t.id ? t.color : 'transparent' }}
            onClick={() => setActiveTopic(t.id)}
          >
            <span className="study-nav-icon">{t.icon}</span>
            <span>{t.title}</span>
          </button>
        ))}
      </div>

      <div className="study-content">
        <div className="study-content-header" style={{ borderLeftColor: topic.color }}>
          <span className="study-topic-icon">{topic.icon}</span>
          <h2>{topic.title}</h2>
        </div>

        {topic.sections.map((sec, idx) => {
          const key = `${activeTopic}-${idx}`
          const isOpen = expandedSections[key] !== false

          return (
            <div key={idx} className="study-section-card">
              <button
                className="study-section-toggle"
                onClick={() => toggleSection(idx)}
                style={{ borderLeftColor: topic.color }}
              >
                <span>{sec.title}</span>
                <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
              </button>
              {isOpen && (
                <div className="study-section-body">
                  {sec.content && (
                    <pre className="study-text">{sec.content}</pre>
                  )}
                  {sec.table && (
                    <table className="study-table">
                      <thead>
                        <tr>{sec.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, i) => (
                          <tr key={i} className={i === sec.table.rows.length - 1 && row[0] === 'TOTAL' ? 'total-row' : ''}>
                            {row.map((cell, j) => <td key={j}>{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
