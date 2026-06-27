# LinkTree Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dark professional LinkTree-style portfolio page for Muhamad Carlo Muzaqi.

**Architecture:** Single static HTML page with external CSS. No JavaScript framework needed. Flexbox for layout. Mobile-first responsive design.

**Tech Stack:** HTML5, CSS3 (Flexbox, Custom Properties, Media Queries), Google Fonts (Space Grotesk + Inter)

---

### Task 1: Create index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html with semantic structure**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Muhamad Carlo Muzaqi — Game Developer & Network Engineer" />
  <title>Muhamad Carlo Muzaqi</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main class="container">
    <div class="card">
      <div class="profile">
        <div class="avatar">
          <img src="https://carlomuzaqi.my.id/assets/profile.jpg" alt="Muhamad Carlo Muzaqi" />
        </div>
        <h1>Muhamad Carlo Muzaqi</h1>
        <p class="title">Game Developer & Network Engineer</p>
        <p class="bio">Informatics graduate from Sultan Ageng Tirtayasa University. Passionate about network engineering and game development in Unity Engine.</p>
      </div>

      <div class="links">
        <a href="https://carlomuzaqi.my.id" target="_blank" rel="noopener noreferrer" class="link-btn">
          <span class="link-icon">🌐</span>
          <span class="link-label">Portfolio</span>
          <span class="link-arrow">→</span>
        </a>
        <a href="https://www.linkedin.com/in/muhamad-carlo-muzaqi-8905422b0" target="_blank" rel="noopener noreferrer" class="link-btn">
          <span class="link-icon">💼</span>
          <span class="link-label">LinkedIn</span>
          <span class="link-arrow">→</span>
        </a>
        <a href="https://carlo-muzaqi.itch.io" target="_blank" rel="noopener noreferrer" class="link-btn">
          <span class="link-icon">🎮</span>
          <span class="link-label">Itch.io</span>
          <span class="link-arrow">→</span>
        </a>
        <a href="https://id.jobstreet.com/id/profiles/carlo-muzaqi-0v2mtwkKww" target="_blank" rel="noopener noreferrer" class="link-btn">
          <span class="link-icon">📋</span>
          <span class="link-label">Jobstreet</span>
          <span class="link-arrow">→</span>
        </a>
        <a href="mailto:carlomuzaqi66@gmail.com" class="link-btn">
          <span class="link-icon">✉️</span>
          <span class="link-label">Email</span>
          <span class="link-arrow">→</span>
        </a>
      </div>

      <footer class="footer">
        <p>&copy; 2026 Carlo</p>
      </footer>
    </div>
  </main>
</body>
</html>
```

- [ ] **Step 2: Verify file created**

Run: `Test-Path -Path "index.html"`
Expected: True

---

### Task 2: Create style.css

**Files:**
- Create: `style.css`

- [ ] **Step 1: Create style.css with dark professional theme**

```css
/* ========== RESET & BASE ========== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #0a0a0b;
  color: #e4e4e7;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  -webkit-font-smoothing: antialiased;
}

/* ========== CONTAINER ========== */
.container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}

/* ========== CARD ========== */
.card {
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 24px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

/* ========== PROFILE ========== */
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #3f3f46;
  overflow: hidden;
  margin-bottom: 4px;
  position: relative;
}
.avatar::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  z-index: -1;
  opacity: 0.6;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fafafa;
  line-height: 1.2;
}

.title {
  font-size: 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.bio {
  font-size: 0.875rem;
  color: #a1a1aa;
  line-height: 1.6;
  max-width: 380px;
}

/* ========== LINKS ========== */
.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: #1f1f23;
  border: 1px solid #2a2a2e;
  border-radius: 14px;
  text-decoration: none;
  color: #e4e4e7;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
}
.link-btn:hover {
  background: #27272b;
  border-color: #3b3b3f;
  transform: translateY(-1px);
}
.link-btn:active {
  transform: translateY(0);
  scale: 0.99;
}
.link-btn:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.link-icon { font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.link-label { flex: 1; }
.link-arrow {
  font-size: 1rem;
  color: #52525b;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.link-btn:hover .link-arrow {
  transform: translateX(3px);
}

/* ========== FOOTER ========== */
.footer {
  text-align: center;
}
.footer p {
  font-size: 0.75rem;
  color: #52525b;
}

/* ========== RESPONSIVE ========== */
@media (max-width: 480px) {
  body { padding: 16px; }
  .card { padding: 32px 20px; border-radius: 20px; gap: 28px; }
  .avatar { width: 88px; height: 88px; }
  h1 { font-size: 1.375rem; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

@media (prefers-color-scheme: light) {
  body { background: #f4f4f5; color: #18181b; }
  .card { background: #fafafa; border-color: #e4e4e7; }
  h1 { color: #09090b; }
  .title, .bio { color: #71717a; }
  .link-btn { background: #f4f4f5; border-color: #e4e4e7; color: #18181b; }
  .link-btn:hover { background: #e4e4e7; border-color: #d4d4d8; }
  .link-arrow { color: #a1a1aa; }
  .footer p { color: #a1a1aa; }
}
```

- [ ] **Step 2: Verify file created**

Run: `Test-Path -Path "style.css"`
Expected: True

---

### Task 3: Git Add, Commit, and Push

**Files:**
- Modify: `.gitignore` (create if needed)

- [ ] **Step 1: Create .gitignore**

```
node_modules/
.DS_Store
*.log
```

- [ ] **Step 2: Stage and commit**

```bash
git add index.html style.css .gitignore docs/
git commit -m "feat: add LinkTree portfolio page"
```

- [ ] **Step 3: Push to GitHub**

```bash
git push -u origin main
```
