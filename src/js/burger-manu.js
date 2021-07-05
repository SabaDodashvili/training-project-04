const manuIcon = document.querySelector('.manu__icon');
const manuBody = document.querySelector('.manu__body');

if (manuIcon) {
  manuIcon.addEventListener('click', (e) => {
    manuIcon.classList.toggle('active');
    manuBody.classList.toggle('active');
    body.classList.toggle('lock');
  });
}

const filterCloseBtn = document.querySelectorAll('.filter-header__close-btn');

if (filterCloseBtn) {
  for (let i = 0; i < filterCloseBtn.length; i++) {
    filterCloseBtn[i].addEventListener('click', (e) => {
      filterCloseBtn[i].classList.toggle('active');
    });
  }
}
