const bnum = document.querySelectorAll('.numero');
const pantalla = document.getElementById('pantalla');
const blimpiar = document.getElementById('C');
const boperacion = document.querySelectorAll('.operacion');

let valorAnterior = '';
let seleccionado = '';

bnum.forEach(button => {
  button.addEventListener('click', () => {
    if (pantalla.textContent === '0' || pantalla.textContent === valorAnterior) {
      pantalla.textContent = button.textContent;
    } else {
      pantalla.textContent += button.textContent;
    }
  });
});

blimpiar.addEventListener('click', () => {
  pantalla.textContent = '0';
  valorAnterior = '';
  seleccionado = '';
});

boperacion.forEach(button => {
  button.addEventListener('click', () => {
    const operacion = button.textContent;

    if (operacion === '=') {
      const valorActual = pantalla.textContent;
      let resultat = 0;

      if (seleccionado === '+') {
        resultat = parseFloat(valorAnterior) + parseFloat(valorActual);
      } else if (seleccionado === '-') {
        resultat = parseFloat(valorAnterior) - parseFloat(valorActual);
      } else if (seleccionado === '*') {
        resultat = parseFloat(valorAnterior) * parseFloat(valorActual);
      } else if (seleccionado === '/') {
        resultat = parseFloat(valorAnterior) / parseFloat(valorActual);
      }

      pantalla.textContent = resultat;
      valorAnterior = '';
      seleccionado = '';
    } else if (operacion === 'DEL') {
      pantalla.textContent = pantalla.textContent.slice(0, -1) || '0';
    } else if (operacion === '.') {
      if (!pantalla.textContent.includes('.')) {
        pantalla.textContent += '.';
      }
    } else {
      valorAnterior = pantalla.textContent;
      seleccionado = operacion;
      pantalla.textContent = '';
    }
  });
});
