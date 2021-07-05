let filterCheckboxs = document.querySelectorAll('.filter-body__checkbox');
let catalogChosen = document.querySelector('.catalog-sorting__chosen');
let chosenClearBtn = document.querySelector('.sorting-chosen__clear-btn');
let filterQuantitys = document.querySelectorAll('.filter-header__quantity');

if (catalogChosen) {
  chosenClearBtn.addEventListener('click', (e) => {
    chosenClearBtn.parentElement.style.display = 'none';
    for (let i = 0; i < filterCheckboxs.length; i++) {
      if (filterCheckboxs[i].classList.contains('active')) {
        filterCheckboxs[i].classList.remove('active');
        filterCheckboxs[i].checked = false;
        for (let k = 0; k < filterQuantitys.length; k++) {
          if (filterQuantitys.textContent != 0) {
            filterQuantitys[k].textContent = '0';
          }
        }
        let catalogChosenChildrens = catalogChosen.children;
        for (let k = 0; k < catalogChosenChildrens.length - 1; k++) {
          catalogChosenChildrens[k].remove();
        }
      }
    }
  });

  for (let i = 0; i < filterCheckboxs.length; i++) {
    filterCheckboxs[i].addEventListener('click', (e) => {
      let filterCheckbox = filterCheckboxs[i];
      filterCheckbox.classList.toggle('active');
      let dataName = filterCheckbox.getAttribute('data-name');
      let activeFilterCheckboxs = document.querySelectorAll('.filter-body__checkbox.active');
      let checkboxСategoryText = filterCheckbox.nextElementSibling.nextElementSibling.textContent;
      let counter = 0;

      if (filterCheckbox.classList.contains('active')) {
        catalogChosen.insertAdjacentHTML(
          'afterbegin',
          `<button class="sorting-chosen__btn" data-name="${checkboxСategoryText}">
								${checkboxСategoryText}
								<svg><use xlink:href="images/icons/icons.svg#cancel"></use></svg>
						 </button>`
        );
        let chosenBtns = document.querySelectorAll('.sorting-chosen__btn');

        for (let k = 0; k < chosenBtns.length; k++) {
          let chosenBtn = chosenBtns[k];
          let chosenBtnAtribut = chosenBtn.getAttribute('data-name');
          if (chosenBtnAtribut == checkboxСategoryText) {
            let chosenBtnCancelBtn = chosenBtn.lastElementChild;
            chosenBtnCancelBtn.addEventListener('click', (e) => {
              chosenBtn.remove();
              filterCheckbox.checked = false;
              filterCheckbox.classList.remove('active');
              for (let q = 0; q < filterQuantitys.length; q++) {
                let filterQuantityAttribute = filterQuantitys[q].getAttribute('data-name');
                if (filterQuantityAttribute == dataName) {
                  filterQuantitys[q].textContent = +filterQuantitys[q].textContent - 1;
                }
              }
              if (catalogChosen.children.length > 1) {
                catalogChosen.style.display = 'flex';
              } else {
                catalogChosen.style.display = 'none';
              }
            });
          }
        }
      } else {
        let chosenBtns = document.querySelectorAll('.sorting-chosen__btn');

        for (let k = 0; k < chosenBtns.length; k++) {
          let chosenBtn = chosenBtns[k];
          let chosenBtnAtribut = chosenBtns[k].getAttribute('data-name');
          if (chosenBtnAtribut == checkboxСategoryText) {
            chosenBtn.remove();
          }
        }
      }

      for (let k = 0; k < filterQuantitys.length; k++) {
        let filterQuantityAttribute = filterQuantitys[k].getAttribute('data-name');
        if (filterQuantityAttribute == dataName) {
          for (let q = 0; q < activeFilterCheckboxs.length; q++) {
            if (activeFilterCheckboxs[q].getAttribute('data-name') == dataName) {
              counter += 1;
            }
          }
          filterQuantitys[k].textContent = counter;
        }
      }

      if (catalogChosen.children.length > 1) {
        catalogChosen.style.display = 'flex';
      } else {
        catalogChosen.style.display = 'none';
      }
    });
  }
}
