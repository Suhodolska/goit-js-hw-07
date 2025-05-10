const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');


textInput.addEventListener('input', () => {
  const name = textInput.value.trim();
  textOutput.textContent = name || 'Anonymous';
});
