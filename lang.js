function setLang(lang){
  document.querySelectorAll('[data-de]').forEach(function(el){
    el.style.display = (lang === 'de') ? 'inline' : 'none';
  });
  document.querySelectorAll('[data-en]').forEach(function(el){
    el.style.display = (lang === 'en') ? 'inline' : 'none';
  });
  document.querySelectorAll('.lang-toggle button').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}
document.addEventListener('DOMContentLoaded', function(){ setLang('de'); });
