let colorBtns = document.querySelectorAll('.product-select__choose-btn-color');
let sizeBtns = document.querySelectorAll('.product-select__choose-btn-size');
let clearBtn = document.querySelector('.product-select__clear-btn');
let colorName = document.querySelector('.product-select__chosen-color');
let sizeName = document.querySelector('.product-select__chosen-size');

for (let i = 0; i < colorBtns.length; i++) {
  let colorBtn = colorBtns[i];
  colorBtn.addEventListener('click', (e) => {
    colorBtns.forEach((element) => {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    });

    colorBtn.classList.add('active');
    curentColor = colorBtn.getAttribute('data-color');
    colorName.textContent = curentColor;
  });
}

for (let i = 0; i < sizeBtns.length; i++) {
  let sizeBtn = sizeBtns[i];
  sizeBtn.addEventListener('click', (e) => {
    sizeBtns.forEach((element) => {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    });

    sizeBtn.classList.add('active');
    curentsize = sizeBtn.textContent;
    sizeName.textContent = curentsize;
  });
}

if (clearBtn) {
  clearBtn.addEventListener('click', (e) => {
    colorBtns.forEach((el) => {
      el.classList.remove('active');
    });
    sizeBtns.forEach((el) => {
      el.classList.remove('active');
    });
    colorName.textContent = 'select color';
    sizeName.textContent = 'select size';
  });
}
