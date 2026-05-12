export default function Header() {
  return (
    <header className="app-header">
      <div className="header-emblem">
        <div className="star-cluster">★ ★ ★</div>
        <div className="emblem-circle">
          <span className="emblem-text">TA</span>
        </div>
        <div className="star-cluster">★ ★ ★</div>
      </div>
      <div className="header-title-block">
        <h1 className="header-title">TERRITORIAL ARMY</h1>
        <p className="header-subtitle">OFFICER SELECTION — EXAM PREPARATION PORTAL</p>
        <div className="header-divider"><span>✦ SERVICE BEFORE SELF ✦</span></div>
      </div>
      <div className="header-badge">
        <div className="badge-inner">
          <div className="badge-line">Written Exam</div>
          <div className="badge-line">2026 Pattern</div>
          <div className="badge-line bold">CBT Mode</div>
        </div>
      </div>
    </header>
  )
}
