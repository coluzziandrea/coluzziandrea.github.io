const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  ul.classList.toggle('show');
});

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    ul.classList.remove('show');
  })
);

function localize(language) {
  let myLang = 'en-US';

  if (language === 'it-IT') {
    myLang = 'it-IT';
  }

  let lang = ':lang(' + myLang + ')';

  let hide = '[lang]:not(' + lang + ')';
  let show = '[lang]' + lang;

  document.querySelectorAll(hide).forEach(function (node) {
    node.style.display = 'none';
  });

  document.querySelectorAll(show).forEach(function (node) {
    node.style.display = 'unset';
  });
}

$(document).ready(function () {
  localize(window.navigator.language);
});
