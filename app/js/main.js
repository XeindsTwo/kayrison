document.addEventListener('DOMContentLoaded', () => {
  const faqHeads = document.querySelectorAll('.faq__head');

  faqHeads.forEach(head => {
    head.addEventListener('click', () => {
      const faqItem = head.closest('.faq__item');
      const faqText = faqItem.querySelector('.faq__text');
      const isOpen = faqText.classList.contains('open');

      if (isOpen) {
        faqText.style.maxHeight = null;
        faqText.classList.remove('open');

        const faqButton = faqItem.querySelector('.faq__btn');
        faqButton.classList.remove('open');
      } else {
        const openFaqItem = document.querySelector('.faq__item .faq__text.open');
        if (openFaqItem) {
          const openFaqButton = openFaqItem.closest('.faq__item').querySelector('.faq__btn');
          openFaqItem.style.maxHeight = null;
          openFaqItem.classList.remove('open');
          openFaqButton.classList.remove('open');
        }

        faqText.style.maxHeight = `${faqText.scrollHeight}px`;
        faqText.classList.add('open');
        const faqButton = faqItem.querySelector('.faq__btn');
        faqButton.classList.add('open');
      }
    });
  });

  const firstFaqButton = document.querySelector('.faq__btn');
  firstFaqButton.classList.add('open');

  const defaultQuestion = document.querySelector('.faq__item:first-of-type .faq__text');
  defaultQuestion.style.maxHeight = `${defaultQuestion.scrollHeight}px`;
  defaultQuestion.classList.add('open');

  const faqButtons = document.querySelectorAll('.faq__btn');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.blur();
    });
  });
});

const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header__mobile');
const anchors = document.querySelectorAll('a[href*="#"]');

menuBtn.addEventListener('click', (event) => {
  event.preventDefault();
  body.classList.toggle('body--active');
  header.classList.toggle('active');
  menuBtn.classList.toggle('active');
  menuBtn.blur();
});

/*window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const home = document.querySelector('.home');
  const statisticsSection = document.getElementById('statistics');
  const scrollY = window.scrollY || window.pageYOffset;
  const minWidth = 910;

  if (window.innerWidth >= minWidth && statisticsSection) {
    if (scrollY >= statisticsSection.offsetTop) {
      header.style.position = 'static';
      home.style.position = 'static';
    } else {
      header.style.position = 'sticky';
      home.style.position = 'sticky';
    }
  }
});*/


//Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.querySelectorAll('*').forEach(element => {
    element.setAttribute('data-theme', currentTheme);
  });
}

const switchBtn = document.querySelector('.switch');

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('dark');
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  document.querySelectorAll('*').forEach(element => {
    element.setAttribute('data-theme', newTheme);
  });
});