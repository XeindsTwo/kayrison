export const theme = () => {
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
}