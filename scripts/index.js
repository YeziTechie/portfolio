function chaoticBoxShadow () {
  const ran1 = '#' + Math.floor(Math.random()*16777215).toString(16);
  const ran2 = '#' + Math.floor(Math.random()*16777215).toString(16);

  let data = `
  0px 0px 100px ${ran1},
  0px 0px 250px ${ran2}
  `;

  return data;
}

function mainCircleClicked(event) {
  event.currentTarget.classList.add('main-circle-clicked');

  setTimeout(() => {
    const circle = document.querySelector('.circle-container-js');
    circle.style.display = 'grid';
    setTimeout(() => {circle.style.opacity = '1';}, 1);
  }, 1);
};

function circlesClicked(event) {
  const circle = event.currentTarget;
  circle.style.animation = 'circle-clicked 1s ease 1'; 
  circle.style.animationFillMode = 'forwards';

  const cd = document.querySelector(`.js-cd-${circle.dataset.cNumber}`);
  setTimeout(() => {
    cd.classList.add('cd-appeared');
    setTimeout(() => {cd.classList.add('cd-clicked')}, 0);
  }, 500)
};

function cdClicked(event) {
  const cd = event.currentTarget;
  const content = cd.querySelector('.cd-content');
  const previousCd = document.querySelector('.cd-preview');
  const circleContainer = document.querySelector('.circle-container');

  if (cd === previousCd) {
    cdPreviewClicked();
  } else {
    cd.classList.add('cd-clicked');
    cd.classList.add('cd-preview');    

    cd.style.boxShadow = chaoticBoxShadow();
    circleContainer.style.transform = 'rotate(45deg) scale(0.6, 0.6)';

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

function cdPreviewClicked() {
  cdWrapperContainerShrink()
}

function cdWrapperContainerShrink() {
  const wrapperContainer = document.querySelector('.cd-wrapper-container');
  const cds = document.querySelectorAll('.cd-clicked');
  const clickedCd = document.querySelector('.cd-preview');

  wrapperContainer.classList.add('cd-wrapper-container-shrink');
  setTimeout(() => {wrapperContainer.classList.add('js-cd-wrapper-container-shrink')}, 10);

  cds.forEach(e => {
    e.style.boxShadow = 'none';
    e.style.backgroundColor = 'var(--fg)';
  })

  clickedCd.style.backgroundColor = 'var(--bg)';
  clickedCd.style.boxShadow = '0px 0px 200px var(--fg)';
  clickedCd.style.border = 'solid 2px var(--fg)';
  clickedCd.style.color = 'transparent';
}

function cdWrapperContainerExpand() {
  const wrapperContainer = document.querySelector('.cd-wrapper-container');
  const cds = document.querySelectorAll('.cd-clicked');
  const clickedCd = document.querySelector('.cd-preview');

  wrapperContainer.classList.remove('cd-wrapper-container-shrink');
  wrapperContainer.classList.remove('js-cd-wrapper-container-shrink');

  cds.forEach(e => {
    e.style.boxShadow = '0px 0px 100px var(--t1), 0px 0px 200px var(--t2)';
    e.style.backgroundColor = 'var(--bg)';
  })

  clickedCd.style.backgroundColor = 'var(--bg)';
  clickedCd.style.boxShadow = '0px 0px 100px var(--t1), 0px 0px 200px var(--t2)';
  clickedCd.style.border = 'solid 1px var(--t1)';
  clickedCd.style.color = 'var(--fg)';
}

const mainCircle = document.querySelector('.js-main-circle');
mainCircle.addEventListener('click', mainCircleClicked)

const cd = document.querySelectorAll('.cd');
cd.forEach(e => {e.addEventListener('click', cdClicked);});

const cdWrapperContainer = document.querySelector('.cd-wrapper-container');
cdWrapperContainer.addEventListener('click', () => {
  if (cdWrapperContainer.classList.contains('js-cd-wrapper-container-shrink')) {
    cdWrapperContainerExpand()
    console.log('asdf')
  }
})

const circles = document.querySelectorAll('.js-2-circle');
circles.forEach(e => {e.addEventListener('click', circlesClicked)});

