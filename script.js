let textSize = 100;

const increaseBtn = document.getElementById('increaseText');
const decreaseBtn = document.getElementById('decreaseText');
const contrastBtn = document.getElementById('toggleContrast');

increaseBtn.addEventListener('click', () => {
  if (textSize < 200) {
    textSize += 10;
    document.body.style.fontSize = textSize + '%';
  }
});

decreaseBtn.addEventListener('click', () => {
  if (textSize > 70) {
    textSize -= 10;
    document.body.style.fontSize = textSize + '%';
  }
});

contrastBtn.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});
