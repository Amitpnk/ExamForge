# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ExamForge** is a React SPA for Territorial Army Officer written exam preparation. It hosts timed mock exams (100 questions, 2-hour CBT format) with negative marking (−0.33 per wrong answer) and a study material reference section.

## Commands

```bash
npm run dev        # Start Vite dev server (localhost:5173)
npm run build      # Production build to dist/
npm run preview    # Preview the production build locally
npm run deploy     # Build then publish to GitHub Pages (gh-pages branch)
```

No linting or test tooling is configured.

## Architecture

The app is a single-file-per-concern React app with no router, no state management library, and all global styles in one file.

### State flow (`App.jsx`)

`App.jsx` owns all top-level state:
- `activeTab` — `'exams'` | `'study'`
- `examState.phase` — `'list'` → `'running'` → `'results'`

The exam flow is: `MockExamList` (pick exam) → `MockExamRunner` (timed session) → `Results` (score + answer review). Navigating to the "Mock Exams" tab always resets to the list phase.

### Data layer (`src/data/`)

Each exam file (`exam1.js`, `exam2.js`, `exam3.js`) exports a single object:

```js
{
  id: 1,
  title: 'Mock Exam 1',
  duration: 120,          // minutes
  totalQuestions: 100,
  sections: { reasoning: 40, gk: 30, english: 30 },
  questions: [
    {
      id: 1,
      section: 'reasoning',  // 'reasoning' | 'gk' | 'english'
      question: '...',
      options: ['A', 'B', 'C', 'D'],
      correct: 1,            // 0-based index into options[]
      explanation: '...'
    }
  ]
}
```

`MockExamList.jsx` statically imports all three exams and renders them as cards. To add a new exam, create `src/data/exam4.js` following the same structure and import it in `MockExamList.jsx`.

### Components

| Component | Responsibility |
|---|---|
| `Header.jsx` | Static branding bar |
| `MockExamList.jsx` | Exam picker cards + strategy tips |
| `MockExamRunner.jsx` | Timed exam session — timer, section tabs, question navigator, mark-for-review |
| `Results.jsx` | Score card (with grade), per-section breakdown, filterable answer review |
| `StudyMaterial.jsx` | Collapsible reference material; topic data is inlined in the component (not a separate data file) |

### Styling

All styles live in `src/App.css` — a single flat stylesheet with CSS classes. There is no CSS module system or utility framework. Montserrat is loaded from Google Fonts. Section colors are defined as constants inside each component (`SECTION_COLORS`, `SECTION_BAR_COLORS`) and applied via inline `style` props.

## Key Behaviour Details

- **Scoring**: `score = correct × 1 − wrong × 0.33`. Grade thresholds: 70+ = Very Strong, 60+ = Competitive, 50+ = Borderline, <50 = Needs Work.
- **Timer**: `MockExamRunner` runs a `setTimeout`-based countdown; auto-submits when it hits 0.
- **Question status in navigator**: `answered`, `marked`, `marked-answered`, `current`, `unanswered` — controlled by `answers` and `marked` state objects keyed by question index (not `q.id`).
- **Answer storage**: `answers` is `{ [questionIndex]: optionIndex }`. Clearing an answer deletes the key.

## Deployment

The app deploys to GitHub Pages under the path `/ExamForge/`. The `base` in `vite.config.js` must stay as `/ExamForge/` or asset paths will break in production. `npm run deploy` runs `gh-pages -d dist` to publish the built output.

## Known Issues

`App.jsx` has a duplicate "test" tab button (lines 41-46) that incorrectly mirrors the "Study Material" tab — it's a stale copy that was never wired up.
