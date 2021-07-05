let quantityMinusBtn = document.querySelector('.quantity__minus-btn');
let quantityPlusBtn = document.querySelector('.quantity__plus-btn');
let quantityInputWrapper = document.querySelector('.quantity__input');

if (quantityInputWrapper) {
  let quantityInput = quantityInputWrapper.firstElementChild;

  quantityMinusBtn.addEventListener('click', (e) => {
    if (quantityInput.value > 0) {
      quantityInput.value -= 1;
    } else {
      quantityMinusBtn.setAttribute('disabled', 'disabled');
    }
  });

  quantityPlusBtn.addEventListener('click', (e) => {
    quantityInput.value = +quantityInput.value + 1;
    quantityMinusBtn.removeAttribute('disabled');
  });
}
