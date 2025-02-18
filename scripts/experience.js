function sampleClicked (element) {
  const detail = element.querySelector('.detail');
  const year = element.querySelector('.year');

  if (element.classList.contains('toggle')) {
    year.style.flex = '1';
    year.style.color = 'var(--fg)';
    year.style.marginLeft = 'none';

    detail.style.height = '0px';

    element.style.boxShadow = '2px -2px 0px var(--t1)';
    element.style.fontSize = '1rem';
    element.classList.remove('toggle')
  } else {
    year.style.flex = '0';
    year.style.color = 'var(--t2)';
    year.style.marginLeft = 'auto';

    detail.style.height = 'calc-size(max-content, size)';

    element.classList.add('toggle')
    element.style.boxShadow = '-10px 10px 30px var(--t1)';
    element.style.fontSize = '1.2rem';
  }
}
const experiences = document.querySelectorAll('.experience');
experiences.forEach(element => {
  element.addEventListener('click', () => sampleClicked(element))
  }
)