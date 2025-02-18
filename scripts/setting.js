function blackWhite() {
  const root = document.querySelector(':root');
  const wButton = document.querySelector('.js-white');
  const bButton = document.querySelector('.js-black');
  const wColor = document.querySelector('.change-color-white');
  const bColor = document.querySelector('.change-color-black');

  if (wButton.classList.contains('toggle')) {
    
    wButton.classList.remove('toggle');
    bButton.classList.add('toggle');

    root.style.setProperty('--bg', 'black');
    root.style.setProperty('--fg', 'rgb(216, 216, 216)');

    wColor.style.opacity = '0';
    wColor.style.transform = 'scale(0)';
    setTimeout(() => {
      wColor.style.display = 'none';
    }, 2000);

    setTimeout(() => {
      bColor.style.display = 'flex';
      setTimeout(() => {
        bColor.style.opacity = '1';
        bColor.style.transform = 'scale(1)';
      }, 10);
    }, 2001);

  } else if (bButton.classList.contains('toggle')) {

    wButton.classList.add('toggle');
    bButton.classList.remove('toggle');

    root.style.setProperty('--bg', 'rgb(216, 216, 216)');
    root.style.setProperty('--fg', 'black');

    bColor.style.opacity = '0';
    bColor.style.transform = 'scale(0)';
    setTimeout(() => {
      bColor.style.display = 'none';
    }, 2000);

    setTimeout(() => {
      wColor.style.display = 'flex';
      setTimeout(() => {
        wColor.style.opacity = '1';
        wColor.style.transform = 'scale(1)';
      }, 10);
    }, 2001);
  }
}

function changeTheme(theme) {
  const root = document.querySelector(':root');
  const rootStyle = getComputedStyle(root);

  const themeColor = theme.dataset.themeColor;
  const themeNumber = theme.dataset.themeNumber;

  const colorOne = rootStyle.getPropertyValue(`--${themeColor}-${themeNumber}-1`);
  const colorTwo = rootStyle.getPropertyValue(`--${themeColor}-${themeNumber}-2`);

  theme.classList.add('theme-clicked-animation');
  setTimeout(() => {
    theme.classList.remove('theme-clicked-animation');
  }, 2000);

  root.style.setProperty('--t1', colorOne);
  root.style.setProperty('--t2', colorTwo);
}

const button = document.querySelector('.black-white');
button.addEventListener('click', () => {
  blackWhite();
  button.style.pointerEvents = 'none';
  setTimeout(() => {button.style.pointerEvents = 'auto'}, 2000);
});

const themes = document.querySelectorAll('.js-theme')
themes.forEach(theme => {
  theme.addEventListener('click', () => changeTheme(theme))
})
