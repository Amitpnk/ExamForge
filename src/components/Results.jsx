import { useState } from 'react'

const SECTION_LABELS = { reasoning: 'Reasoning', gk: 'General Knowledge', english: 'English' }
const SECTION_COLORS = { reasoning: '#2e7d32', gk: '#e65100', english: '#1565c0' }
const SECTION_BAR = { reasoning: '#56ae4a', gk: '#ff8f00', english: '#4285f4' }
const NEGATIVE = 0.33

export default function Results({ exam, answers, onBack }) {
  const [view, setView] = useState('summary')
  const [filter, setFilter] = useState('all')

  const questions = exam.questions
  let correct = 0, wrong = 0, skipped = 0
  const sectionStats = { reasoning: { correct: 0, wrong: 0, skipped: 0, total: 0 }, gk: { correct: 0, wrong: 0, skipped: 0, total: 0 }, english: { correct: 0, wrong: 0, skipped: 0, total: 0 } }

  questions.forEach((q, i) => {
    const sec = q.section
    sectionStats[sec].total++
    if (answers[i] === undefined) {
      skipped++
      sectionStats[sec].skipped++
    } else if (answers[i] === q.correct) {
      correct++
      sectionStats[sec].correct++
    } else {
      wrong++
      sectionStats[sec].wrong++
    }
  })

  const rawScore = correct - wrong * NEGATIVE
  const score = Math.max(0, rawScore).toFixed(2)
  const pct = ((rawScore / questions.length) * 100).toFixed(1)

  function getGrade() {
    const s = parseFloat(score)
    if (s >= 70) return { label: 'VERY STRONG', color: '#7ec8a0', desc: 'Excellent! You have a very strong chance of qualifying.' }
    if (s >= 60) return { label: 'COMPETITIVE', color: '#f0c060', desc: 'Good score. Work on weak areas to be safer.' }
    if (s >= 50) return { label: 'BORDERLINE', color: '#e08040', desc: 'You need to improve. Focus on accuracy.' }
    return { label: 'NEEDS WORK', color: '#e05050', desc: 'Consistent preparation and mock tests will help.' }
  }
  const grade = getGrade()

  const filteredQs = questions.filter((q, i) => {
    if (filter === 'correct') return answers[i] === q.correct
    if (filter === 'wrong') return answers[i] !== undefined && answers[i] !== q.correct
    if (filter === 'skipped') return answers[i] === undefined
    return true
  })

  return (
    <div className="results-page">
      {/* Score Card */}
      <div className="score-card">
        <div className="score-card-header">
          <h2>{exam.title} — Result</h2>
        </div>
        <div className="score-display">
          <div className="score-circle" style={{ borderColor: grade.color }}>
            <div className="score-num">{score}</div>
            <div className="score-den">/{questions.length}</div>
          </div>
          <div className="score-info">
            <div className="grade-badge" style={{ background: grade.color }}>
              {grade.label}
            </div>
            <p className="grade-desc">{grade.desc}</p>
            <div className="score-breakdown-row">
              <span className="sb-item correct">✔ {correct} Correct (+{correct})</span>
              <span className="sb-item wrong">✘ {wrong} Wrong (–{(wrong * NEGATIVE).toFixed(2)})</span>
              <span className="sb-item skipped">– {skipped} Skipped</span>
            </div>
          </div>
        </div>

        <div className="section-results">
          {Object.entries(sectionStats).map(([sec, st]) => {
            const secScore = st.correct - st.wrong * NEGATIVE
            return (
              <div key={sec} className="section-result-card">
                <div className="sr-header" style={{ borderLeftColor: SECTION_COLORS[sec] }}>
                  <span className="sr-name">{SECTION_LABELS[sec]}</span>
                  <span className="sr-score" style={{ color: SECTION_COLORS[sec] }}>
                    {Math.max(0, secScore).toFixed(2)}/{st.total}
                  </span>
                </div>
                <div className="sr-bar-track">
                  <div className="sr-bar-fill" style={{ width: `${(st.correct / st.total) * 100}%`, background: SECTION_BAR[sec] }} />
                </div>
                <div className="sr-stats">
                  <span>✔ {st.correct}</span>
                  <span>✘ {st.wrong}</span>
                  <span>– {st.skipped}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="expected-range">
          <h4>Expected Qualification Benchmark</h4>
          <div className="benchmark-row">
            <div className="benchmark-item green"><span>70+</span><small>Very Strong</small></div>
            <div className="benchmark-item yellow"><span>60–70</span><small>Competitive</small></div>
            <div className="benchmark-item red"><span>Below 50</span><small>Risky</small></div>
          </div>
        </div>
      </div>

      {/* Answer Review */}
      <div className="answer-review">
        <div className="review-header">
          <h3>Answer Review</h3>
          <div className="filter-tabs">
            {[['all', 'All (100)'], ['correct', `Correct (${correct})`], ['wrong', `Wrong (${wrong})`], ['skipped', `Skipped (${skipped})`]].map(([f, l]) => (
              <button key={f} className={`filter-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{l}</button>
            ))}
          </div>
        </div>

        <div className="review-list">
          {filteredQs.map((q) => {
            const idx = questions.indexOf(q)
            const userAns = answers[idx]
            const isCorrect = userAns === q.correct
            const isSkipped = userAns === undefined
            let statusClass = isSkipped ? 'skipped' : isCorrect ? 'correct' : 'wrong'

            return (
              <div key={idx} className={`review-card ${statusClass}`}>
                <div className="review-q-header">
                  <span className={`review-badge ${statusClass}`}>
                    {isSkipped ? '—' : isCorrect ? '✔' : '✘'}
                  </span>
                  <span className="review-qnum">Q{idx + 1}</span>
                  <span className="review-section" style={{ color: SECTION_COLORS[q.section] }}>{SECTION_LABELS[q.section]}</span>
                  <span className="review-marks">
                    {isSkipped ? '0' : isCorrect ? '+1' : `–${NEGATIVE}`}
                  </span>
                </div>
                <div className="review-q-text">
                  {q.question.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                </div>
                <div className="review-options">
                  {q.options.map((opt, i) => {
                    let cls = 'review-opt'
                    if (i === q.correct) cls += ' correct-opt'
                    if (i === userAns && !isCorrect) cls += ' wrong-opt'
                    return (
                      <div key={i} className={cls}>
                        <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                        {opt}
                        {i === q.correct && <span className="correct-tag"> ✔ Correct</span>}
                        {i === userAns && !isCorrect && <span className="wrong-tag"> ✘ Your Answer</span>}
                      </div>
                    )
                  })}
                </div>
                <div className="review-explanation">
                  <span className="exp-label">💡 Explanation: </span>{q.explanation}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <button className="back-btn" onClick={onBack}>← Back to Exam List</button>
    </div>
  )
}
