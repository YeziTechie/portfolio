const key = document.querySelector('.key');
const door = document.querySelector('.door');
const language = document.querySelector('.language');

key.addEventListener('click', () => {
  door.classList.toggle('toggle')
  key.classList.toggle('toggle')
  setTimeout(() => {
    language.classList.toggle('toggle')
  }, 2000);
})

function languageClicked () {
  const door = document.querySelector('.door');
  const language = document.querySelector('.language');
  door.classList.toggle('entered')
  language.classList.toggle('clicked')
}

const langauges = document.querySelectorAll('.l');
langauges.forEach((l) => {
  l.addEventListener('click', languageClicked)
})