window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const home = document.querySelector('.home');
  const statisticsSection = document.getElementById('statistics');
  const scrollY = window.scrollY || window.pageYOffset;
  const minHeight = 850;
  const minWidth = 880;

  if (header && home && statisticsSection) {
    if (window.innerWidth > minWidth || window.innerHeight > minHeight) {
      if (scrollY >= statisticsSection.offsetTop) {
        header.style.position = 'static';
        home.style.position = 'static';
      } else {
        header.style.position = 'sticky';
        home.style.position = 'sticky';
      }
    }
  }
});