/**
 * ==============================================================================
 * Vinit Patel - Student Developer Portfolio Script
 * Pure Vanilla JavaScript (No external libraries, zero dependencies)
 * Features:
 *  1. Responsive Mobile Navigation (Toggle, Click-away, Escape key)
 *  2. Scrollspy (Active navigation link indicator on scroll)
 *  3. Header elevation on scroll
 *  4. Floating "Back to Top" button with smooth scroll
 *  5. Copy Email Address to Clipboard with feedback
 *  6. Accessible Project Details Modal Dialog
 *  7. Client-side Contact Form Validation with Mailto support
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Mobile Navigation Menu Toggle
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileNav() {
    navMenu.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          closeMobileNav();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('open')) {
        const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInside) {
          closeMobileNav();
        }
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileNav();
        navToggle.focus();
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Header Elevation & Back to Top Button on Scroll
     -------------------------------------------------------------------------- */
  const header = document.querySelector('.header');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Sticky header shadow
    if (header) {
      if (scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. Scrollspy: Active Navigation Link Indicator
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120; // Offset for sticky header
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
     4. Copy Email to Clipboard
     -------------------------------------------------------------------------- */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const emailTextEl = document.getElementById('email-address-text');

  if (copyEmailBtn && copyBtnText && emailTextEl) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailToCopy = emailTextEl.textContent.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers or non-https environments
          const tempInput = document.createElement('textarea');
          tempInput.value = emailToCopy;
          tempInput.style.position = 'fixed';
          tempInput.style.left = '-9999px';
          document.body.appendChild(tempInput);
          tempInput.focus();
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied!';
        copyEmailBtn.style.color = '#065f46';
        copyEmailBtn.style.borderColor = '#10b981';

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyEmailBtn.style.color = '';
          copyEmailBtn.style.borderColor = '';
        }, 2200);

      } catch (err) {
        console.error('Could not copy email: ', err);
        copyBtnText.textContent = 'Failed to copy';
        setTimeout(() => {
          copyBtnText.textContent = 'Copy Email';
        }, 2000);
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. Project Details Modal (Accessible Dialog)
     -------------------------------------------------------------------------- */
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  // Project Information Data
  const projectData = {
    'college-homepage': {
      title: 'Acropolis College Homepage',
      content: `
        <p><strong>Project Nature:</strong> Academic Web Fundamentals Coursework</p>
        <p>
          This project was developed as part of coursework at Acropolis Institute of Technology & Research to gain hands-on proficiency in core web building blocks.
        </p>
        <h4>Key Technical Features:</h4>
        <ul>
          <li><strong>Semantic HTML5 Markup:</strong> Utilized header, nav, section, article, and footer tags for clean document hierarchy.</li>
          <li><strong>Academic Portal Layout:</strong> Designed sections for college departments, admissions information, announcements, and campus updates.</li>
          <li><strong>Responsive Styling:</strong> Employed standard CSS box models, custom flex containers, and fluid media queries to ensure proper layout across screen widths.</li>
          <li><strong>Zero Dependency:</strong> Crafted purely with vanilla HTML and CSS without relying on external UI frameworks.</li>
        </ul>
        <h4>Key Learnings:</h4>
        <p>
          Understanding CSS positioning, layout structuring, responsive typography, and how to write clean, maintainable HTML templates without framework bloat.
        </p>
      `
    },
    'onion-grading': {
      title: 'Onion Quality Assessment & Grading (Concept)',
      content: `
        <div class="concept-callout" style="margin-bottom: 1rem;">
          <span class="callout-icon" aria-hidden="true">⚠️</span>
          <div class="callout-text">
            <strong>Honest Status Notice:</strong> This project is a <em>concept proposal</em> developed for the Smart India Hackathon (SIH). It is currently in the ideation and architectural design stage, and is <strong>not</strong> a fully deployed physical sorting machine.
          </div>
        </div>
        <p><strong>Hackathon Domain:</strong> Smart Agriculture & Supply Chain Automation</p>
        <p>
          In traditional agricultural markets, onion sorting and quality inspection is conducted manually. This manual grading is labor-intensive, slow, subjective, and prone to sorting inconsistencies that affect fair farmer compensation.
        </p>
        <h4>Proposed System Architecture & Objectives:</h4>
        <ul>
          <li><strong>Physical Inspection Dimensions:</strong> Measuring diameter calibration to separate produce into standard market size classes.</li>
          <li><strong>Surface & Peel Analysis:</strong> Inspecting outer skin integrity, identifying peel discoloration, dry rot, and surface abrasions.</li>
          <li><strong>Grading Output:</strong> Categorizing produce into Grade A (Export/Premium), Grade B (Standard Retail), and Grade C (Local/Processing) classifications.</li>
          <li><strong>Impact Goal:</strong> Standardizing grading parameters to empower farmers with fair pricing and streamline wholesale mandi distribution.</li>
        </ul>
        <h4>Current Stage:</h4>
        <p>
          Problem statement formulation, requirement gathering, and conceptual system workflow. Future iterations will explore integrating computer vision models and physical conveyor sorting mechanisms.
        </p>
      `
    }
  };

  let lastActiveElement = null;

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data || !modal) return;

    lastActiveElement = document.activeElement;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.content;

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Focus close button for accessibility
    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = ''; // Restore scrolling

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalDismissBtn) {
    modalDismissBtn.addEventListener('click', closeModal);
  }

  // Close when clicking modal backdrop
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  /* --------------------------------------------------------------------------
     6. Client-Side Contact Form Handling
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('sender-name');
  const emailInput = document.getElementById('sender-email');
  const subjectInput = document.getElementById('sender-subject');
  const messageInput = document.getElementById('sender-message');
  const formFeedback = document.getElementById('form-feedback');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  function clearErrors() {
    [nameError, emailError, subjectError, messageError].forEach(el => {
      if (el) el.textContent = '';
    });
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (input) input.classList.remove('has-error');
    });
    if (formFeedback) {
      formFeedback.hidden = true;
      formFeedback.textContent = '';
      formFeedback.className = 'form-feedback';
    }
  }

  function isValidEmail(email) {
    // Simple RFC2822-compliant pattern check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors();

      let hasError = false;

      // Validate Name
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal) {
        nameError.textContent = 'Please enter your name.';
        nameInput.classList.add('has-error');
        hasError = true;
      }

      // Validate Email
      const emailVal = emailInput ? emailInput.value.trim() : '';
      if (!emailVal) {
        emailError.textContent = 'Please enter your email address.';
        emailInput.classList.add('has-error');
        hasError = true;
      } else if (!isValidEmail(emailVal)) {
        emailError.textContent = 'Please enter a valid email format (e.g. name@example.com).';
        emailInput.classList.add('has-error');
        hasError = true;
      }

      // Validate Subject
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      if (!subjectVal) {
        subjectError.textContent = 'Please provide a subject.';
        subjectInput.classList.add('has-error');
        hasError = true;
      }

      // Validate Message
      const messageVal = messageInput ? messageInput.value.trim() : '';
      if (!messageVal) {
        messageError.textContent = 'Please write your message.';
        messageInput.classList.add('has-error');
        hasError = true;
      } else if (messageVal.length < 10) {
        messageError.textContent = 'Please enter a message of at least 10 characters.';
        messageInput.classList.add('has-error');
        hasError = true;
      }

      if (hasError) {
        return;
      }

      // Prepare mailto link to open client's default email client
      const recipient = 'vinit.patel@example.com';
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectVal}`);
      const mailtoBody = encodeURIComponent(
        `Hi Vinit,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}\n\n--- Sent from your portfolio website.`
      );
      const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Show success feedback
      formFeedback.hidden = false;
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `
        <strong>Thank you, ${escapeHtml(nameVal)}!</strong><br>
        Your message has been validated. Opening your email app to send directly to Vinit Patel.<br>
        <span style="display:inline-block; margin-top:0.5rem; font-size:0.85rem;">
          If your email application did not launch automatically, <a href="${mailtoUrl}" style="color:#047857; text-decoration:underline; font-weight:600;">click here to send via mailto</a>.
        </span>
      `;

      // Trigger mailto client
      window.location.href = mailtoUrl;

      // Reset form fields
      contactForm.reset();
    });
  }

  // Simple HTML escaping helper for safe inline feedback rendering
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
