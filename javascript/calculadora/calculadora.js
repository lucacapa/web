const bnum = document.querySelectorAll('.numero');
const pantalla = document.getElementById('pantalla');
const blimpiar = document.getElementById('C')
  bnum.forEach(button => {
    button.addEventListener('click', () => {
      if (pantalla.textContent === '0') {
        pantalla.textContent = button.textContent;
      } else {
        pantalla.textContent += button.textContent;
      }
    });
});

blimpiar.addEventListener('click', () => {
    pantalla.textContent = '0';
});


