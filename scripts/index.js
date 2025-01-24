const circles = document.querySelectorAll('.js-2-circle')

circles.forEach(e => {
  e.addEventListener('click', () => {
    e.style.animation = 'circle-clicked 6s ease 1'; 
    e.style.animationFillMode = 'forwards';

    const cd = document.querySelector(`.js-cd-${e.dataset.cNumber}`);
    setTimeout(() => {
      cd.classList.add('cd-appeared')
    }, 5500)
      }
    )
  }
)