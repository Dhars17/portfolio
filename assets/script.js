// Theme toggle with persistence
(function() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const KEY = 'portfolio-theme';
  const saved = localStorage.getItem(KEY);
  if (saved) root.setAttribute('data-theme', saved);
  updateIcon();

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(KEY, next);
    updateIcon();
  });

  function updateIcon() {
    const isDark = (root.getAttribute('data-theme') || 'dark') === 'dark';
    btn.textContent = isDark ? '🌙' : '☀️';
  }
})();

// Mobile nav
(function() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
})();

// Footer year
(function() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// AOS init
(function() {
  if (window.AOS) {
    AOS.init({ duration: 650, easing: 'ease-out-quart', once: true });
  }
})();

// Tilt init for project cards
(function() {
  const cards = document.querySelectorAll('.tilt');
  if (window.VanillaTilt && cards.length) {
    VanillaTilt.init(cards, { max: 8, speed: 600, glare: true, 'max-glare': 0.18 });
  }
})();
