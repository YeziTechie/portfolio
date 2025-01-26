function chaoticBoxShadow () {
  const ran1 = '#' + Math.floor(Math.random()*16777215).toString(16);
  const ran2 = '#' + Math.floor(Math.random()*16777215).toString(16);

  let data = `
  0px 0px 100px ${ran1},
  0px 0px 250px ${ran2}
  `;

  return data;
}

function mainCircleClicked() {
  const mainCircle = document.querySelector('.js-main-circle');

  mainCircle.addEventListener('click', () => {
  mainCircle.classList.add('main-circle-clicked');

  setTimeout(() => {
    const circle = document.querySelector('.circle-container-js');
    circle.style.display = 'grid';
    setTimeout(() => {circle.style.opacity = '1';}, 1);
    }, 1);
  })
};

function circlesClicked() {
  const circles = document.querySelectorAll('.js-2-circle');

  circles.forEach(e => {
    e.addEventListener('click', () => {
      e.style.animation = 'circle-clicked 1s ease 1'; 
      e.style.animationFillMode = 'forwards';

      const cd = document.querySelector(`.js-cd-${e.dataset.cNumber}`);
      setTimeout(() => {
        cd.classList.add('cd-appeared');
        setTimeout(() => {cd.classList.add('cd-clicked')}, 0);
      }, 500)
        }
      )
    }
  )
};

function cdClicked(event) {
const cd = event.currentTarget;
const content = cd.querySelector('.cd-content');
const previousCd = document.querySelector('.cd-preview');

if (cd === previousCd) {
  console.log('same cd');
} else {
  cd.classList.add('cd-clicked');
  cd.classList.add('cd-preview');    

  cd.style.boxShadow = chaoticBoxShadow();

  content.style.display = 'block';
  setTimeout(() => {
    content.style.opacity = '1';
    content.style.transform = 'rotate(-315deg)';
  }, 1);

  if (previousCd) {
    previousCd.classList.remove('cd-preview');
    const preContent = previousCd.querySelector('.cd-content');
    
    preContent.style.opacity = '0';
    preContent.style.transform = 'rotate(0deg) scale(0.4, 0.4)';

    previousCd.style.boxShadow = '0px 0px 100px var(--t1), 0px 0px 200px var(--t2)';
  }
}
}

document.querySelectorAll('.cd').forEach(e => {
e.addEventListener('click', cdClicked);
});

mainCircleClicked();
circlesClicked();

