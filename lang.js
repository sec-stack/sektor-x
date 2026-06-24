// SEKTOR_X — Language Switcher
// Reads/writes localStorage key 'sx_lang' ('pl' or 'en')
// Call switchLang(lang) to switch, or initLang() on page load

const LANG_KEY = 'sx_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'pl';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

function applyLang(lang) {
  // Update all [data-pl] / [data-en] elements
  document.querySelectorAll('[data-pl]').forEach(el => {
    el.innerHTML = lang === 'en' ? (el.getAttribute('data-en') || el.innerHTML) : el.getAttribute('data-pl');
  });
  // Update all [data-pl-href] / [data-en-href] links
  document.querySelectorAll('[data-pl-href]').forEach(el => {
    el.href = lang === 'en' ? (el.getAttribute('data-en-href') || el.href) : el.getAttribute('data-pl-href');
  });
  // Toggle lang-specific show/hide blocks
  document.querySelectorAll('.lang-pl').forEach(el => el.style.display = lang === 'pl' ? '' : 'none');
  document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
  // Update switcher button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update html lang attribute
  document.documentElement.lang = lang;
}

function switchLang(lang) {
  setLang(lang);
  applyLang(lang);
}

function initLang() {
  applyLang(getLang());
}
