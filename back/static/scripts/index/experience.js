const experiences = document.querySelectorAll('.experience');
experiences.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('toggle');
  });
});

const subDetails = document.querySelectorAll('.js-sub-detail');
subDetails.forEach(e => {
  e.addEventListener('click', (event) => {
    event.stopPropagation();
    e.classList.toggle('toggle');
  });
});
