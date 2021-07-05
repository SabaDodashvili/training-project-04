let sortingColumnsBtns = document.querySelectorAll('.sorting-top__btn');
let sortingItems = document.querySelectorAll('.products-item_catalog');

for (let i = 0; i < sortingColumnsBtns.length; i++) {
  sortingColumnsBtns[i].addEventListener('click', (e) => {
    sortingColumnsBtns.forEach((el) => {
      el.classList.remove('current');
    });
    sortingColumnsBtns[i].classList.add('current');
    let columNnumber = sortingColumnsBtns[i].textContent;
    sortingItems.forEach((el) => {
      el.style.flexGrow = '0';
      el.style.flexShrink = '0';
      if (columNnumber == 3) {
        el.style.flexBasis = '33%';
      } else if (columNnumber == 4) {
        el.style.flexBasis = '25%';
      } else if (columNnumber == 5) {
        el.style.flexBasis = '20%';
      } else if (columNnumber == 2) {
        el.style.flexBasis = '50%';
      } else if (columNnumber == 1) {
        el.style.flexBasis = '100%';
      }
    });
  });
}
