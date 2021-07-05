function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
!(function (e) {
  'function' == typeof define && define.amd ? define([], e) : 'object' == typeof exports ? (module.exports = e()) : (window.wNumb = e());
})(function () {
  'use strict';
  var o = ['decimals', 'thousand', 'mark', 'prefix', 'suffix', 'encoder', 'decoder', 'negativeBefore', 'negative', 'edit', 'undo'];
  function w(e) {
    return e.split('').reverse().join('');
  }
  function h(e, t) {
    return e.substring(0, t.length) === t;
  }
  function f(e, t, n) {
    if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t);
  }
  function x(e) {
    return 'number' == typeof e && isFinite(e);
  }
  function n(e, t, n, r, i, o, f, u, s, c, a, p) {
    var d,
      l,
      h,
      g = p,
      v = '',
      m = '';
    return (
      o && (p = o(p)),
      !!x(p) &&
        (!1 !== e && 0 === parseFloat(p.toFixed(e)) && (p = 0),
        p < 0 && ((d = !0), (p = Math.abs(p))),
        !1 !== e &&
          (p = (function (e, t) {
            return (
              (e = e.toString().split('e')),
              (+((e = (e = Math.round(+(e[0] + 'e' + (e[1] ? +e[1] + t : t)))).toString().split('e'))[0] + 'e' + (e[1] ? e[1] - t : -t))).toFixed(t)
            );
          })(p, e)),
        -1 !== (p = p.toString()).indexOf('.') ? ((h = (l = p.split('.'))[0]), n && (v = n + l[1])) : (h = p),
        t && (h = w((h = w(h).match(/.{1,3}/g)).join(w(t)))),
        d && u && (m += u),
        r && (m += r),
        d && s && (m += s),
        (m += h),
        (m += v),
        i && (m += i),
        c && (m = c(m, g)),
        m)
    );
  }
  function r(e, t, n, r, i, o, f, u, s, c, a, p) {
    var d,
      l = '';
    return (
      a && (p = a(p)),
      !(!p || 'string' != typeof p) &&
        (u && h(p, u) && ((p = p.replace(u, '')), (d = !0)),
        r && h(p, r) && (p = p.replace(r, '')),
        s && h(p, s) && ((p = p.replace(s, '')), (d = !0)),
        i &&
          (function (e, t) {
            return e.slice(-1 * t.length) === t;
          })(p, i) &&
          (p = p.slice(0, -1 * i.length)),
        t && (p = p.split(t).join('')),
        n && (p = p.replace(n, '.')),
        d && (l += '-'),
        '' !== (l = (l += p).replace(/[^0-9\.\-.]/g, '')) && ((l = Number(l)), f && (l = f(l)), !!x(l) && l))
    );
  }
  function i(e, t, n) {
    var r,
      i = [];
    for (r = 0; r < o.length; r += 1) i.push(e[o[r]]);
    return i.push(n), t.apply('', i);
  }
  return function e(t) {
    if (!(this instanceof e)) return new e(t);
    'object' == typeof t &&
      ((t = (function (e) {
        var t,
          n,
          r,
          i = {};
        for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1)
          if (void 0 === (r = e[(n = o[t])]))
            'negative' !== n || i.negativeBefore ? ('mark' === n && '.' !== i.thousand ? (i[n] = '.') : (i[n] = !1)) : (i[n] = '-');
          else if ('decimals' === n) {
            if (!(0 <= r && r < 8)) throw new Error(n);
            i[n] = r;
          } else if ('encoder' === n || 'decoder' === n || 'edit' === n || 'undo' === n) {
            if ('function' != typeof r) throw new Error(n);
            i[n] = r;
          } else {
            if ('string' != typeof r) throw new Error(n);
            i[n] = r;
          }
        return f(i, 'mark', 'thousand'), f(i, 'prefix', 'negative'), f(i, 'prefix', 'negativeBefore'), i;
      })(t)),
      (this.to = function (e) {
        return i(t, n, e);
      }),
      (this.from = function (e) {
        return i(t, r, e);
      }));
  };
});
;
// 'use strict';
function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = '_dynamic_adapt_';
  // массив DOM-элементов
  this.nodes = document.querySelectorAll('[data-da]');

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(',');
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
    оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(
    this.оbjects,
    function (item) {
      return '(' + this.type + '-width: ' + item.breakpoint + 'px),' + item.breakpoint;
    },
    this
  );
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
};

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
};

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === 'min') {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === 'first' || b.place === 'last') {
          return -1;
        }

        if (a.place === 'last' || b.place === 'first') {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === 'first' || b.place === 'last') {
          return 1;
        }

        if (a.place === 'last' || b.place === 'first') {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt('max');
da.init();
;
const body = document.querySelector('body');
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelector('.lock-padding');

let unlock = true;

const timeOut = 800;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const curentEl = popupCloseIcon[i];
    curentEl.addEventListener('click', function (e) {
      popupClose(curentEl.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPaddingValue.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeOut);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeOut);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
;
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
;
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

if (isMobile.any()) {
  body.classList.add('touch');

  let manuArrows = document.querySelectorAll('.manu__arrow');

  if (manuArrows.length > 0) {
    for (let i = 0; i < manuArrows.length; i++) {
      const manuArrow = manuArrows[i];
      manuArrow.addEventListener('click', (e) => {
        manuArrow.parentElement.classList.toggle('active');
      });
    }
  }
} else {
  body.classList.add('mouse');
}
;
const welcomeSlider = new Swiper('.welcome-slider__container', {
  pagination: {
    el: '.welcome-slider__pagination',
    clickable: true,
    dynamicBullets: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 800,
});

const welcomeCatalogSlider = new Swiper('.catalog-slider__container', {
  navigation: {
    nextEl: '.catalog-slider__button-next',
    prevEl: '.catalog-slider__button-prev',
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 800,
});

const productMiniSlider = new Swiper('.product-mini-slider__container', {
  slidesPerView: 5,
  direction: 'vertical',
  freeMode: true,
  spaceBetween: 15,
  freeMode: true,
});

const productMainSlider = new Swiper('.product-main-slider__container', {
  direction: 'vertical',
  slidesPerView: 1,

  thumbs: {
    swiper: {
      el: '.product-mini-slider__container',
    },
  },
});

const relatedProductsSlider = new Swiper('.related-products-slider__container', {
  pagination: {
    el: '.related-products-slider__pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    470: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      dynamicBullets: false,
    },
    767: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});
;
const manuLinks = document.querySelectorAll('.manu__link[data-goto]');
if (manuLinks.length > 0) {
  manuLinks.forEach((manuLink) => {
    manuLink.addEventListener('click', onMnauLinkClick);
  });

  function onMnauLinkClick(e) {
    const manuLink = e.target;
    if (manuLink.dataset.goto && document.querySelector(manuLink.dataset.goto)) {
      const gotoEl = document.querySelector(manuLink.dataset.goto);
      const gotoElValue = gotoEl.getBoundingClientRect().top + pageYOffset - document.querySelector('.manu').offsetHeight;

      if (manuIcon.classList.contains('active')) {
        manuIcon.classList.remove('active');
        manuBody.classList.remove('active');
        body.classList.remove('lock');
      }

      window.scrollTo({
        top: gotoElValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
;
const marketingCard = document.querySelector('.marketing-card');
const marketingCancelBtn = document.querySelector('.marketing-card__cancel-icon');

if (marketingCard) {
  setTimeout((e) => {
    marketingCard.classList.add('marketing-card_open');
  }, 2000);
  marketingCancelBtn.addEventListener('click', (e) => {
    marketingCard.classList.remove('marketing-card_open');
  });
}
;
let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsContent = document.querySelectorAll('.tabs__item');

if (tabsBtn) {
  tabsBtn.forEach((el) => {
    el.addEventListener('click', () => {
      let currentEl = el;
      let tabId = currentEl.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentEl.classList.contains('active')) {
        tabsBtn.forEach((el) => {
          el.classList.remove('active');
        });
        tabsContent.forEach((el) => {
          el.classList.remove('active');
        });
      }

      currentEl.classList.add('active');
      currentTab.classList.add('active');
    });
  });
}
;
let spoilerBtn = document.querySelectorAll('.spoiler-open-btn');

if (spoilerBtn) {
  for (let i = 0; i < spoilerBtn.length; i++) {
    spoilerBtn[i].addEventListener('click', () => {
      let thisSpoilerParrent = spoilerBtn[i].parentElement;
      thisSpoilerParrent.classList.toggle('active');
      let content = thisSpoilerParrent.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
}

let spoilerBtnMain = document.querySelectorAll('.spoiler-open-btn-main');

if (spoilerBtnMain) {
  for (let i = 0; i < spoilerBtnMain.length; i++) {
    spoilerBtnMain[i].addEventListener('click', () => {
      let thisSpoilerParrent = spoilerBtnMain[i].parentElement;
      thisSpoilerParrent.classList.toggle('active');
      let content = thisSpoilerParrent.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = 100 + '%';
      }
    });
  }
}
;
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
; 
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
; 
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}
function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }
}

function initRating(rating) {
  initRatingVars(rating);
  satRatingActiveWidth();
}

function initRatingVars(rating) {
  ratingActive = rating.querySelector('.rating__active');
  ratingValue = rating.querySelector('.rating__value');
}

function satRatingActiveWidth(index = ratingValue.innerHTML) {
  const ratingActiveWidth = index / 0.05;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}
; 
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
; 
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
; 

