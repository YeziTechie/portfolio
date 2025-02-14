function skillExpand(skill) {
  skill.classList.add('toggle');

  const number = skill.dataset.number
  const tech = document.querySelector(`.js-technologies-${number}`);
  const techDetail = document.querySelector(`.js-tech-detail-container-${number}`);

  tech.style.visibility = 'visible';
  tech.style.opacity = '1';
  techDetail.style.transform = 'scale(1, 1) rotate(0deg)';
}

function skillShrink(skill) {
  skill.classList.remove('toggle');

  const number = skill.dataset.number
  const tech = document.querySelector(`.js-technologies-${number}`);
  const techDetail = document.querySelector(`.js-tech-detail-container-${number}`);

  tech.style.visibility = 'hidden';
  tech.style.opacity = '0';
  techDetail.style.transform = 'scale(0.1, 0.1) rotate(360deg)';
}

function skillToggle (skill) {
  if (skill.classList.contains('toggle')) {
    skillShrink(skill);
  } else {
    skillExpand(skill);
  }
}




function techExpand(tech) {
  tech.classList.add('toggle');

  const number = tech.dataset.number
  const techDetail = document.querySelector(`.js-tech-detail-${number}`);
  const techContent = techDetail.querySelector('.tech-content');

  techDetail.classList.add('tech-detail-expanded');
  techContent.style.display = 'block';
  setTimeout(() => {
    techContent.style.opacity = '1'; 
    techContent.style.fontSize = '1rem'; 
    techContent.style.padding = '10px'; 
  }, 1)
}

// function skillShrink(skill) {
//   skill.classList.remove('toggle');

//   const number = skill.dataset.number
//   const tech = document.querySelector(`.js-technologies-${number}`);
//   const techDetail = document.querySelector(`.js-tech-detail-container-${number}`);

//   tech.style.visibility = 'hidden';
//   tech.style.opacity = '0';
//   techDetail.style.transform = 'scale(0.1, 0.1) rotate(360deg)';
// }

function techToggle (tech) {
  if (tech.classList.contains('toggle')) {
    // techShrink(tech);
    console.log('master your mind')
  } else {
    techExpand(tech);
    console.log('master your heart')
  }
}



const skills = document.querySelectorAll('.skill');

skills.forEach(element => {
  const h2 = element.querySelector('.name').querySelector('h2');
  h2.addEventListener('click', () => skillToggle(h2))
});

skills.forEach(element => {
  element.querySelectorAll('.tech').forEach(tech => {
    const h4 = tech.querySelector('h4');
    h4.addEventListener('click', () => techToggle(h4));
  })
});