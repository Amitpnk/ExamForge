import { useState, useEffect, useCallback } from 'react'

const SECTION_LABELS = { reasoning: 'Reasoning', gk: 'General Knowledge', english: 'English' }
const SECTION_COLORS = { reasoning: '#2e7d32', gk: '#e65100', english: '#1565c0' }
const SECTION_BAR_COLORS = { reasoning: '#56ae4a', gk: '#ff8f00', english: '#4285f4' }

export default function MockExamRunner({ exam, onSubmit, onExit }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [marked, setMarked] = useState({})
  const [timeLeft, setTimeLeft] = useState(exam.duration * 60)
  const [showConfirm, setShowConfirm] = useState(false)
  const [section, setSection] = useState('reasoning')
  const [showNav, setShowNav] = useState(false)

  const questions = exam.questions

  const handleSubmit = useCallback(() => {
    onSubmit(answers)
  }, [answers, onSubmit])

  useEffect(() => {
    if (timeLeft <= 0) { handleSubmit(); return }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [timeLeft, handleSubmit])

  function selectAnswer(qIdx, optIdx) {
    setAnswers(a => ({ ...a, [qIdx]: optIdx }))
  }

  function toggleMark(qIdx) {
    setMarked(m => ({ ...m, [qIdx]: !m[qIdx] }))
  }

  function goTo(idx) {
    setCurrent(idx)
    setShowNav(false)
    setSection(questions[idx].section)
  }

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const secs = String(timeLeft % 60).padStart(2, '0')
  const isUrgent = timeLeft <= 300

  const answered = Object.keys(answers).length
  const sectionQuestions = {
    reasoning: questions.filter(q => q.section === 'reasoning'),
    gk: questions.filter(q => q.section === 'gk'),
    english: questions.filter(q => q.section === 'english'),
  }

  const q = questions[current]
  const sectionStart = questions.findIndex(x => x.section === section)

  function getQStatus(idx) {
    if (answers[idx] !== undefined && marked[idx]) return 'marked-answered'
    if (answers[idx] !== undefined) return 'answered'
    if (marked[idx]) return 'marked'
    if (idx === current) return 'current'
    return 'unanswered'
  }

  return (
    <div className="exam-runner">
      {/* Top bar */}
      <div className="runner-topbar">
        <div className="runner-exam-title">{exam.title}</div>
        <div className="runner-stats">
          <span className="stat-badge">Q {current + 1}/{questions.length}</span>
          <span className="stat-badge">{answered} Answered</span>
          <span className="stat-badge">{Object.values(marked).filter(Boolean).length} Marked</span>
        </div>
        <div className={`runner-timer ${isUrgent ? 'urgent' : ''}`}>
          ⏱ {mins}:{secs}
        </div>
      </div>

      {/* Section tabs */}
      <div className="section-tabs">
        {Object.entries(SECTION_LABELS).map(([sec, label]) => {
          const secQs = sectionQuestions[sec]
          const secAnswered = secQs.filter((_, i) => {
            const globalIdx = questions.indexOf(secQs[i])
            return answers[globalIdx] !== undefined
          }).length
          return (
            <button
              key={sec}
              className={`section-tab ${section === sec ? 'active' : ''}`}
              style={{ borderBottomColor: section === sec ? SECTION_BAR_COLORS[sec] : 'transparent' }}
              onClick={() => {
                const firstIdx = questions.findIndex(x => x.section === sec)
                goTo(firstIdx)
                setSection(sec)
              }}
            >
              <span>{label}</span>
              <span className="section-tab-count">{secAnswered}/{secQs.length}</span>
            </button>
          )
        })}
        <button className="nav-toggle-btn" onClick={() => setShowNav(n => !n)}>
          {showNav ? '✕ Close' : '⊞ Navigator'}
        </button>
      </div>

      <div className="runner-body">
        {/* Question panel */}
        <div className="question-panel">
          <div className="question-header">
            <div className="question-section-tag" style={{ background: SECTION_COLORS[q.section] }}>
              {SECTION_LABELS[q.section]}
            </div>
            <div className="question-number">Question {current + 1}</div>
            <button
              className={`mark-btn ${marked[current] ? 'marked' : ''}`}
              onClick={() => toggleMark(current)}
            >
              {marked[current] ? '🔖 Marked' : '🏷 Mark for Review'}
            </button>
          </div>

          <div className="question-text">
            {q.question.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="options-grid">
            {q.options.map((opt, i) => (
              <button
                key={i}
                className={`option-btn ${answers[current] === i ? 'selected' : ''}`}
                onClick={() => selectAnswer(current, i)}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt}</span>
              </button>
            ))}
          </div>

          <div className="question-nav-btns">
            <button
              className="nav-btn secondary"
              onClick={() => { if (current > 0) goTo(current - 1) }}
              disabled={current === 0}
            >
              ← Previous
            </button>
            <button
              className="nav-btn secondary"
              onClick={() => selectAnswer(current, undefined) || setAnswers(a => { const n = { ...a }; delete n[current]; return n })}
              disabled={answers[current] === undefined}
            >
              ✕ Clear
            </button>
            <button
              className="nav-btn primary"
              onClick={() => { if (current < questions.length - 1) goTo(current + 1) }}
              disabled={current === questions.length - 1}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Navigator panel */}
        {showNav && (
          <div className="question-navigator">
            <div className="nav-legend">
              <span className="legend-item"><span className="dot answered" /> Answered</span>
              <span className="legend-item"><span className="dot marked" /> Marked</span>
              <span className="legend-item"><span className="dot unanswered" /> Not Attempted</span>
            </div>
            {Object.entries(SECTION_LABELS).map(([sec, label]) => (
              <div key={sec} className="nav-section">
                <div className="nav-section-title" style={{ color: SECTION_COLORS[sec] }}>{label}</div>
                <div className="nav-grid">
                  {questions.map((sq, idx) => {
                    if (sq.section !== sec) return null
                    const status = getQStatus(idx)
                    return (
                      <button
                        key={idx}
                        className={`nav-q-btn ${status} ${idx === current ? 'current' : ''}`}
                        onClick={() => goTo(idx)}
                      >
                        {idx + 1}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
            <button className="submit-btn" onClick={() => setShowConfirm(true)}>
              ✔ SUBMIT EXAM
            </button>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="runner-bottom-bar">
        <button className="exit-btn" onClick={onExit}>✕ Exit</button>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${(answered / questions.length) * 100}%` }} />
        </div>
        <button className="submit-btn-bottom" onClick={() => setShowConfirm(true)}>
          ✔ SUBMIT EXAM
        </button>
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">⚠ Confirm Submission</h3>
            <div className="modal-stats">
              <div className="modal-stat"><strong>{answered}</strong><span>Answered</span></div>
              <div className="modal-stat"><strong>{questions.length - answered}</strong><span>Skipped</span></div>
              <div className="modal-stat"><strong>{mins}:{secs}</strong><span>Time Left</span></div>
            </div>
            <p className="modal-text">Are you sure you want to submit? You cannot change answers after submission.</p>
            <div className="modal-actions">
              <button className="modal-btn secondary" onClick={() => setShowConfirm(false)}>Back to Exam</button>
              <button className="modal-btn primary" onClick={handleSubmit}>Submit Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
