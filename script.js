const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTop');
const yearEl = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('scroll', () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();

    if (formStatus) {
      formStatus.textContent = name
        ? `Thanks, ${name}! Your message has been drafted successfully.`
        : 'Thanks! Your message has been drafted successfully.';
    }

    contactForm.reset();
  });
}
