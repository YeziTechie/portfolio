function blackWhite() {
  const root = document.querySelector(':root');
  const wButton = document.querySelector('.js-white');
  const bButton = document.querySelector('.js-black');

  if (wButton.classList.contains('toggle')) {
    
    wButton.classList.remove('toggle');
    bButton.classList.add('toggle');
    root.style.setProperty('--bg', 'black');
    root.style.setProperty('--fg', 'rgb(216, 216, 216)');

  } else if (bButton.classList.contains('toggle')) {

    wButton.classList.add('toggle');
    bButton.classList.remove('toggle');
    root.style.setProperty('--bg', 'rgb(216, 216, 216)');
    root.style.setProperty('--fg', 'black');
  }
}

function changeTheme(theme) {
  const root = document.querySelector(':root');
  const rootStyle = getComputedStyle(root);

  const themeColor = theme.dataset.themeColor;
  const themeNumber = theme.dataset.themeNumber;

  const colorOne = rootStyle.getPropertyValue(`--${themeColor}-${themeNumber}-1`);
  const colorTwo = rootStyle.getPropertyValue(`--${themeColor}-${themeNumber}-2`);

  root.style.setProperty('--t1', colorOne);
  root.style.setProperty('--t2', colorTwo);
}

const button = document.querySelector('.black-white');
button.addEventListener('click', blackWhite);

const themes = document.querySelectorAll('.js-theme')
themes.forEach(theme => {
  theme.addEventListener('click', () => changeTheme(theme))
})
