import { useState } from 'react'
import { practiceTopics } from '../data/practice'

const DIFFICULTY_COLORS = { easy: '#16a34a', medium: '#e08040', hard: '#dc2626' }

export default function TopicPractice() {
  const [activeTopicId, setActiveTopicId] = useState(practiceTopics[0].id)
  const [expandedTips, setExpandedTips] = useState({})
  const [selected, setSelected] = useState({})

  const topic = practiceTopics.find(t => t.id === activeTopicId)

  const topicGroups = practiceTopics.reduce((groups, t) => {
    let group = groups.find(g => g.category === t.category)
    if (!group) {
      group = { category: t.category, topics: [] }
      groups.push(group)
    }
    group.topics.push(t)
    return groups
  }, [])

  function toggleTip(idx) {
    setExpandedTips(s => ({ ...s, [`${activeTopicId}-${idx}`]: !s[`${activeTopicId}-${idx}`] }))
  }

  function selectAnswer(qId, optIdx) {
    if (selected[qId] !== undefined) return
    setSelected(s => ({ ...s, [qId]: optIdx }))
  }

  function resetPractice() {
    setSelected({})
  }

  const attempted = topic.questions.filter(q => selected[q.id] !== undefined).length
  const correctCount = topic.questions.filter(q => selected[q.id] === q.correct).length

  return (
    <div className="study-page">
      <div className="study-sidebar">
        <div className="study-sidebar-title">Topic Practice</div>
        {topicGroups.map(group => (
          <div key={group.category} className="study-nav-group">
            <div className="study-nav-group-title">{group.category}</div>
            {group.topics.map(t => (
              <button
                key={t.id}
                className={`study-nav-btn ${activeTopicId === t.id ? 'active' : ''}`}
                style={{ borderLeftColor: activeTopicId === t.id ? t.color : 'transparent' }}
                onClick={() => { setActiveTopicId(t.id); setSelected({}) }}
              >
                <span className="study-nav-icon">{t.icon}</span>
                <span>{t.title}</span>
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="study-content">
        <div className="study-content-header" style={{ borderLeftColor: topic.color }}>
          <span className="study-topic-icon">{topic.icon}</span>
          <h2>{topic.title}</h2>
        </div>

        {topic.tips.map((tip, idx) => {
          const key = `${activeTopicId}-${idx}`
          const isOpen = expandedTips[key] !== false
          return (
            <div key={idx} className="study-section-card">
              <button
                className="study-section-toggle"
                onClick={() => toggleTip(idx)}
                style={{ borderLeftColor: topic.color }}
              >
                <span>💡 {tip.title}</span>
                <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
              </button>
              {isOpen && (
                <div className="study-section-body">
                  <pre className="study-text">{tip.content}</pre>
                </div>
              )}
            </div>
          )
        })}

        <div className="practice-score-bar">
          <span className="practice-score-stat">Attempted: <strong>{attempted}/{topic.questions.length}</strong></span>
          <span className="practice-score-stat">Correct: <strong>{correctCount}</strong></span>
          <button className="practice-reset-btn" onClick={resetPractice}>↻ Reset Practice</button>
        </div>

        <div className="practice-question-list">
          {topic.questions.map((q, i) => {
            const userAns = selected[q.id]
            const isAnswered = userAns !== undefined
            const isCorrect = userAns === q.correct

            return (
              <div key={q.id} className="study-section-card practice-question-card">
                <div className="practice-question-header">
                  <span className="practice-qnum">Q{i + 1}</span>
                  <span className="practice-difficulty" style={{ background: DIFFICULTY_COLORS[q.difficulty] }}>
                    {q.difficulty}
                  </span>
                </div>
                <div className="question-text">
                  {q.question.split('\n').map((line, j) => <p key={j}>{line}</p>)}
                </div>
                <div className="options-grid">
                  {q.options.map((opt, oi) => {
                    let cls = 'option-btn'
                    if (isAnswered) {
                      if (oi === q.correct) cls += ' correct'
                      else if (oi === userAns) cls += ' wrong'
                    }
                    return (
                      <button
                        key={oi}
                        className={cls}
                        onClick={() => selectAnswer(q.id, oi)}
                        disabled={isAnswered}
                      >
                        <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                        <span className="option-text">{opt}</span>
                      </button>
                    )
                  })}
                </div>
                {isAnswered && (
                  <div className="review-explanation">
                    <span className="exp-label">{isCorrect ? '✔ Correct! ' : '✘ Incorrect. '}💡 Explanation: </span>{q.explanation}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
