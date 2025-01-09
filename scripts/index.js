const circles = document.querySelectorAll('.js-2-circle')

circles.forEach(e => {
  e.addEventListener('click', () => {
    e.style.animation = 'circle-clicked 8s ease 1'; 
    e.style.animationFillMode = 'forwards';
      }
    )
  }
)