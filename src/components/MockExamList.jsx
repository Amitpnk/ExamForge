import { exam1 } from '../data/exam1'
import { exam2 } from '../data/exam2'
import { exam3 } from '../data/exam3'

const exams = [exam1, exam2, exam3]

const sectionColors = { reasoning: '#56ae4a', gk: '#ff8f00', english: '#4285f4' }
const sectionLabels = { reasoning: 'Reasoning', gk: 'General Knowledge', english: 'English' }

export default function MockExamList({ onStart }) {
  return (
    <div className="exam-list-page">
      <div className="exam-list-header">
        <h2>Select a Mock Exam</h2>
        <div className="exam-pattern-banner">
          <div className="pattern-item"><span className="pattern-num">40</span><span className="pattern-label">Reasoning</span></div>
          <div className="pattern-sep">+</div>
          <div className="pattern-item"><span className="pattern-num">30</span><span className="pattern-label">Gen. Knowledge</span></div>
          <div className="pattern-sep">+</div>
          <div className="pattern-item"><span className="pattern-num">30</span><span className="pattern-label">English</span></div>
          <div className="pattern-sep">=</div>
          <div className="pattern-item total"><span className="pattern-num">100</span><span className="pattern-label">Total Marks</span></div>
        </div>
        <div className="exam-rules">
          <span>⏱ 2 Hours</span>
          <span>❌ –0.33 Negative Marking</span>
          <span>🎯 Graduate Standard</span>
          <span>💻 Computer Based Test</span>
        </div>
      </div>

      <div className="exam-cards-grid">
        {exams.map((exam, i) => (
          <div key={exam.id} className="exam-card">
            <div className="exam-card-header">
              <div className="exam-number">EXAM {exam.id}</div>
              <div className="exam-difficulty">
                {i === 0 ? '🟢 Beginner' : i === 1 ? '🟡 Intermediate' : '🔴 Advanced'}
              </div>
            </div>
            <h3 className="exam-card-title">{exam.title}</h3>
            <div className="exam-card-meta">
              <div className="meta-item">
                <span className="meta-icon">📝</span>
                <span>{exam.totalQuestions} Questions</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⏱</span>
                <span>{exam.duration} Minutes</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">💯</span>
                <span>{exam.totalQuestions} Marks</span>
              </div>
            </div>
            <div className="section-breakdown">
              {Object.entries(exam.sections).map(([sec, count]) => (
                <div key={sec} className="section-bar-item">
                  <div className="section-bar-label">
                    <span>{sectionLabels[sec]}</span>
                    <span>{count}</span>
                  </div>
                  <div className="section-bar-track">
                    <div
                      className="section-bar-fill"
                      style={{ width: `${(count / exam.totalQuestions) * 100}%`, background: sectionColors[sec] }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="start-exam-btn" onClick={() => onStart(exam)}>
              ▶ START EXAM
            </button>
          </div>
        ))}
      </div>

      <div className="tips-section">
        <h3 className="tips-title">⚡ Quick Strategy Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🧩</div>
            <div className="tip-content">
              <strong>Reasoning First</strong>
              <p>Highest weight (40 marks). Attempt easy analogy and series questions first.</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🎯</div>
            <div className="tip-content">
              <strong>Accuracy over Attempts</strong>
              <p>Negative marking of –0.33. Skip if less than 60% confident.</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">📖</div>
            <div className="tip-content">
              <strong>English is Scoring</strong>
              <p>Grammar rules are fixed. Vocabulary and comprehension are easy marks.</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🪖</div>
            <div className="tip-content">
              <strong>Defence GK is Key</strong>
              <p>TA-specific topics: Army commands, ranks, missiles, and operations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
