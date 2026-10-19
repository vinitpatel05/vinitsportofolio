# Vinit Patel - Student Developer Portfolio

A clean, modern, and minimal personal developer portfolio website designed for **Vinit Patel**, an IMCA (Integrated Master of Computer Applications) student at **Acropolis Institute of Technology & Research, Indore**.

Built exclusively using **pure semantic HTML5, modern CSS3, and vanilla JavaScript** with zero third-party dependencies, external libraries, or backend setup required.

---

## 🌟 Features & Design Highlights

- **Minimalist & Professional Aesthetic:** Crisp off-white background (`#f8fafc`), deep navy text (`#0f172a`), and a subtle blue accent (`#2563eb`).
- **Clean Whitespace & Typography:** Engineered for readability using modern system UI fonts, high contrast ratios, and organized content hierarchy.
- **100% Responsive Design:** Smooth and robust layouts optimized for mobile phones (< 480px), tablets (768px), laptops, and large desktop monitors.
- **Accessible & Semantic (WCAG friendly):**
  - Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Screen-reader accessible "Skip to main content" link.
  - Interactive ARIA attributes for mobile menu toggle and modal dialogs.
  - Keyboard navigation friendly with visible `:focus-visible` focus rings.
- **Honest Academic Presentation:**
  - Clearly highlights **C Programming** and **Data Structures & Algorithms (DSA)** as current learning strengths.
  - Showcases the **Acropolis College Homepage** academic project.
  - Transparently labels the **Smart India Hackathon Onion Quality Assessment & Grading** project as a **Concept / Work in Progress** (no overstated claims).
  - Accurate education details without invented graduation dates or fake metrics.
- **Convenience Features:**
  - Responsive mobile navigation drawer with click-outside and `Escape` key close.
  - Smooth scrolling navigation and dynamic scrollspy (nav link highlight as you scroll).
  - Accessible interactive modals for detailed project breakdowns.
  - One-click "Copy Email" button with instant visual feedback.
  - Floating "Back to Top" button that appears automatically when scrolled down.
  - Zero-backend contact form that validates input and prepares a pre-filled `mailto:` email.

---

## 📁 File Structure

```text
vinit-protofolio/
│
├── index.html        # Main semantic markup and page structure
├── style.css         # Modern styling, responsive rules, and CSS variables
├── script.js         # Vanilla JavaScript (nav toggle, modal, scrollspy, form)
└── README.md         # Documentation and guide for editing
```

---

## 🚀 How to Run the Website Locally

Since this website is built with pure web standards (HTML/CSS/JS), **no compilation, node modules, or server setup is required**.

### Method 1: Direct File Opening (Simplest)
1. Open the project folder: `c:\Users\Vinit\OneDrive\Desktop\vinit-protofolio`
2. Double-click **`index.html`** or right-click `index.html` → **Open with** → your favorite browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave).
3. The portfolio will load instantly!

### Method 2: Using VS Code Live Server (Recommended for Development)
1. Open the folder in **Visual Studio Code**.
2. Install the **"Live Server"** extension (by Ritwick Dey) if not already installed.
3. Right-click `index.html` and click **"Open with Live Server"**.
4. Any changes you save in HTML, CSS, or JS will refresh automatically in your browser.

---

## ✏️ How to Customize & Edit the Portfolio

All customizable sections are clearly commented inside `index.html`. Here is a quick step-by-step guide:

### 1. Updating Your Contact Details & Replacing Placeholders
Open `index.html` and search for the `<section id="contact">` section (around line 300):
- **Email:** Replace `vinit.patel@example.com` with your actual email address in both the `<a>` tag and the `href="mailto:..."`.
- **GitHub:** Replace `https://github.com/vinitpatel-placeholder` with your real GitHub profile link (e.g., `https://github.com/your-username`).
- **LinkedIn:** Replace `https://linkedin.com/in/vinitpatel-placeholder` with your real LinkedIn profile link.
- In `script.js` (around line 290), update the `const recipient = 'vinit.patel@example.com';` variable to your email address so the contact form directs to you.

### 2. How to Add a New Skill (e.g. Python, Java, or SQL)
In `index.html`, locate `<section id="skills">`. Simply copy and paste the following template card into `<div class="skills-grid">`:

```html
<!-- Example New Skill Card -->
<div class="card skill-card">
  <div class="skill-card-header">
    <div class="skill-icon-wrap" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    </div>
    <div>
      <span class="skill-level-badge">Currently Learning</span>
      <h3 class="skill-card-title">Python Programming</h3>
    </div>
  </div>
  <p class="skill-description">
    Core syntax, object-oriented concepts, and basic scripting.
  </p>
  <ul class="skill-topics-list">
    <li>Data Types, Lists, Tuples &amp; Dictionaries</li>
    <li>Functions &amp; Recursion</li>
    <li>Object-Oriented Programming (Classes &amp; Objects)</li>
    <li>File Handling &amp; Standard Libraries</li>
  </ul>
</div>
```

### 3. How to Add a New Project
In `index.html`, locate `<section id="projects">`. Add a new `<article class="card project-card">` inside `<div class="projects-grid">`. You can follow the pattern of the existing two cards.

---

## 🌐 How to Publish for Free (GitHub Pages)

You can host this portfolio online for free on GitHub Pages in under 3 minutes:

1. Create a free account at [GitHub](https://github.com) if you haven't already.
2. Create a new repository named `vinit-portfolio` (or `<your-username>.github.io`).
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` to this repository.
4. Go to **Settings** in your repository → Click on **Pages** (in the left sidebar).
5. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
6. Click **Save**.
7. In a minute, GitHub will give you a live URL like:  
   `https://<your-username>.github.io/vinit-portfolio/`
8. Share this link on your resume, LinkedIn profile, or with internship recruiters!

---

## 📄 License & Credits

- **Author:** Vinit Patel (IMCA Student, Acropolis Institute of Technology & Research, Indore)
- **Year:** 2026
- Built with pure HTML5, CSS3, and vanilla JavaScript.
