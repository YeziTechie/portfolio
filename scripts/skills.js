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
  const techContents = tech.querySelectorAll('.tech');

  tech.style.visibility = 'hidden';
  tech.style.opacity = '0';
  techDetail.style.transform = 'scale(0.1, 0.1) rotate(360deg)';
  techContents.forEach(element => {
    const h4 = element.querySelector('h4')
    if (h4.classList.contains('toggle')) {
      techShrink(h4);
    }
  })

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

  const skill = tech.dataset.skill;
  const number = tech.dataset.number;
  const skillDiv = document.getElementById(skill);
  const techDetail = skillDiv.querySelector(`.js-tech-detail-${number}`);
  const techContent = techDetail.querySelector('.tech-content');

  techDetail.classList.add('tech-detail-expanded');
  techContent.style.display = 'block';
  setTimeout(() => {
    techContent.style.opacity = '1'; 
    techContent.style.fontSize = '1rem'; 
    techContent.style.padding = '10px'; 
  }, 1)
}

function techShrink(tech) {
  tech.classList.remove('toggle');

  const skill = tech.dataset.skill;
  const number = tech.dataset.number;
  const skillDiv = document.getElementById(skill);
  const techDetail = skillDiv.querySelector(`.js-tech-detail-${number}`);
  const techContent = techDetail.querySelector('.tech-content');

  techDetail.classList.remove('tech-detail-expanded');
  techContent.style.opacity = '0'; 
  techContent.style.fontSize = '1px'; 
  techContent.style.padding = '0'; 
  setTimeout(() => {
    techContent.style.display = 'none';
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
    techShrink(tech);
  } else {
    techExpand(tech);
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