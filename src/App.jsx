import { useState } from 'react'
import Header from './components/Header'
import MockExamList from './components/MockExamList'
import MockExamRunner from './components/MockExamRunner'
import Results from './components/Results'
import StudyMaterial from './components/StudyMaterial'

export default function App() {
  const [activeTab, setActiveTab] = useState('exams')
  const [examState, setExamState] = useState({ phase: 'list', exam: null, answers: {}, timeLeft: 0 })

  function startExam(exam) {
    setExamState({ phase: 'running', exam, answers: {}, timeLeft: exam.duration * 60 })
  }

  function submitExam(answers) {
    setExamState(s => ({ ...s, phase: 'results', answers }))
  }

  function backToList() {
    setExamState({ phase: 'list', exam: null, answers: {}, timeLeft: 0 })
  }

  return (
    <div className="app">
      <Header />

      <nav className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'exams' ? 'active' : ''}`}
          onClick={() => { setActiveTab('exams'); backToList() }}
        >
          <span className="tab-icon">◈</span> Mock Exams
        </button>
        <button
          className={`tab-btn ${activeTab === 'study' ? 'active' : ''}`}
          onClick={() => setActiveTab('study')}
        >
          <span className="tab-icon">◉</span> Study Material
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'exams' && (
          <>
            {examState.phase === 'list' && <MockExamList onStart={startExam} />}
            {examState.phase === 'running' && (
              <MockExamRunner
                exam={examState.exam}
                onSubmit={submitExam}
                onExit={backToList}
              />
            )}
            {examState.phase === 'results' && (
              <Results
                exam={examState.exam}
                answers={examState.answers}
                onBack={backToList}
              />
            )}
          </>
        )}
        {activeTab === 'study' && <StudyMaterial />}
      </main>

      <footer className="app-footer">
        <p>ExamForge — Exam Preparation Portal &nbsp;|&nbsp; Pattern 2026: Reasoning (40) + GK (30) + English (30) = 100 Marks &nbsp;|&nbsp; Duration: 2 Hours &nbsp;|&nbsp; Negative Marking: –0.33</p>
      </footer>
    </div>
  )
}
