function mainCircleClicked(event) {
  const mainCircle = event.currentTarget
  mainCircle.classList.add('main-circle-clicked');

  setTimeout(() => {
    const circle = document.querySelector('.circle-container-js');
    circle.style.visibility = 'visible';
    setTimeout(() => {
      circle.style.opacity = '1';
    }, 4000);
  }, 1);
};


function circlesClicked(event) {
  const circle = event.currentTarget;
  circle.style.animation = 'circle-clicked 4s ease forwards'; 
  circle.style.animationFillMode = 'forwards';

  const cd = document.querySelector(`.js-cd-${circle.dataset.cNumber}`);
  setTimeout(() => {
    cd.classList.add('cd-appeared');
    setTimeout(() => {cd.classList.add('cd-clicked')}, 2499);
  }, 3500)
};

function cdClicked(event) {
  const cd = event.currentTarget;
  const content = cd.querySelector('.cd-content');
  const previousCd = document.querySelector('.cd-preview');
  const circleContainer = document.querySelector('.circle-container');

    
  const cdWrapperContainer = document.querySelector('.cd-wrapper-container');
  cdWrapperContainer.addEventListener('click', () => {
    if (cdWrapperContainer.classList.contains('js-cd-wrapper-container-shrink')) {
      cdWrapperContainerExpand()
    }
  })

  if (cd === previousCd) {
    cdWrapperContainerShrink();
    contentExpand(cd.dataset.cdNumber);
    circleContainer.style.display = 'none';
  } else {
    cd.classList.add('cd-clicked');
    cd.classList.add('cd-preview');    

    cd.style.border = 'solid 1px var(--t1)';
    cd.style.boxShadow = '0px 0px 70px var(--t2)';
    circleContainer.style.transform = 'rotate(45deg) scale(0.6, 0.6)';

    content.style.display = 'block';
    setTimeout(() => {
      content.style.color = 'var(--fg)';
      content.style.opacity = '1';
      content.style.transform = 'rotate(-315deg)';
    }, 1);

    if (previousCd) {
      previousCd.classList.remove('cd-preview');
      const preContent = previousCd.querySelector('.cd-content');
      
      preContent.style.color = 'var(--t1)';
      preContent.style.opacity = '0';
      preContent.style.transform = 'rotate(0deg) scale(0.4, 0.4)';

      previousCd.style.border = '1px solid var(--t2)';
      previousCd.style.boxShadow = 'none';
    }
  }
}

function contentExpand(number) {
  const content = document.querySelector(`.js-content-${number}`);

  content.style.animationName = 'content-expansion';
  content.classList.add('content-expanded');
  setTimeout( () => {content.querySelector('.content-div').style.opacity = '1'}, 1000);
}

function contentShrink(number) {
  const content = document.querySelector(`.js-content-${number}`);
  content.querySelector('.content-div').style.opacity = '0';
  
  content.style.animationName = 'content-shrink';
  setTimeout(() => {
    content.classList.remove('content-expanded');
    content.style.animationName = 'content-expansion';
   }, 2000);

}

function cdWrapperContainerShrink() {
  const wrapperContainer = document.querySelector('.cd-wrapper-container');
  const cds = document.querySelectorAll('.cd-clicked');
  const clickedCd = document.querySelector('.cd-preview');

  wrapperContainer.classList.add('cd-wrapper-container-shrink');
  wrapperContainer.style.pointerEvents = 'none';
  setTimeout(() => {wrapperContainer.classList.add('js-cd-wrapper-container-shrink')}, 1);
  setTimeout(() => {wrapperContainer.style.pointerEvents = 'auto'}, 3000);

  cds.forEach(e => {
    e.style.boxShadow = 'none';
    e.style.backgroundColor = 'var(--fg)';
    e.style.pointerEvents = 'none';
  })

  clickedCd.style.backgroundColor = 'var(--bg)';
  clickedCd.style.color = 'transparent';
}

function cdWrapperContainerExpand() {
  const wrapperContainer = document.querySelector('.cd-wrapper-container');
  const cds = document.querySelectorAll('.cd-clicked');
  const contentNumber = document.querySelector('.content-expanded').dataset.contentNumber;

  wrapperContainer.style.pointerEvents = 'none';
  setTimeout(() => {wrapperContainer.style.pointerEvents = 'auto'}, 3000);

  wrapperContainer.classList.remove('cd-wrapper-container-shrink');
  wrapperContainer.classList.remove('js-cd-wrapper-container-shrink');
  contentShrink(contentNumber)

  cds.forEach(e => {
    e.style.backgroundColor = 'var(--bg)';
    e.style.color = 'var(--fg)';
    e.style.pointerEvents = 'auto';
  })

}

const mainCircle = document.querySelector('.js-main-circle');
mainCircle.addEventListener('click', mainCircleClicked)

const cd = document.querySelectorAll('.cd');
cd.forEach(e => {e.addEventListener('click', cdClicked);});

const circles = document.querySelectorAll('.js-2-circle');
circles.forEach(e => {e.addEventListener('click', circlesClicked)});

