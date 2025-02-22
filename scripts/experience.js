function sampleClicked (element) {
  const detail = element.querySelector('.detail');
  const year = element.querySelector('.year');

  if (element.classList.contains('toggle')) {
    year.style.flex = '1';
    year.style.color = 'var(--fg)';
    year.style.marginLeft = 'none';

    detail.style.height = '0px';

    element.classList.remove('toggle')
  } else {
    year.style.flex = '0';
    year.style.color = 'var(--t2)';
    year.style.marginLeft = 'auto';

    detail.style.height = 'calc-size(max-content, size)';

    element.classList.add('toggle')
  }
}
const experiences = document.querySelectorAll('.experience');
experiences.forEach(element => {
  element.addEventListener('click', () => sampleClicked(element))
  }
)