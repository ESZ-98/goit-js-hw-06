function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackground = document.querySelector('body');
const buttonChangeColor = document.querySelector('change-color');
const spanColor = document.querySelector('color');

buttonChangeColor.addEventListener('click', () => {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
