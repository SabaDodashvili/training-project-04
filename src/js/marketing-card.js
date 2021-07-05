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
