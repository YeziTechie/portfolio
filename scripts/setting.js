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

const button = document.querySelector('.black-white');
button.addEventListener('click', blackWhite);
