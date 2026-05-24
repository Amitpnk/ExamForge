export default function Header() {
  return (
    <header className="app-header">
      <div className="header-emblem">
        <div className="emblem-circle">
          <span className="emblem-text">TA</span>
        </div>
         <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
          INDIA
        </span>
      </div>

      <div className="header-title-block">
        <h1 className="header-title">EXAMFORGE</h1>
         <p className="header-subtitle">OFFICER SELECTION · EXAM PREPARATION</p>
      </div>

      <div className="header-badge">
        <span className="badge-line">2026 Pattern</span>
        <span className="badge-line bold">CBT · 100 Marks</span>
      </div>
    </header>
  )
}
