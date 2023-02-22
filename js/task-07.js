const input = document.querySelector('input');
const text = document.getElementById('text');

input.addEventListener('input', () => {
  text.style.fontSize = `${input.value}px`;
});
