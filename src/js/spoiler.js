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
