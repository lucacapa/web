const bnum = document.querySelectorAll('.numero');
const pantalla = document.getElementById('pantalla');
const blimpiar = document.getElementById('C');
const boperacion = document.querySelectorAll('.operacion');

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


boperacion.forEach(button => {
  button.addEventListener('click', () => {
    const operacion = button.textContent;

    if (operacion === '=') {
      const valorActual = pantalla.textContent;
      let resultat = 0;

      if (operadorSeleccionat === '+') {
        resultat = parseFloat(valorAnterior) + parseFloat(valorActual);
      } else if (operadorSeleccionat === '-') {
        resultat = parseFloat(valorAnterior) - parseFloat(valorActual);
      } else if (operadorSeleccionat === '*') {
        resultat = parseFloat(valorAnterior) * parseFloat(valorActual);
      } else if (operadorSeleccionat === '/') {
        resultat = parseFloat(valorAnterior) / parseFloat(valorActual);
      }

      pantalla.textContent = resultat;
    } else if (operacion === 'DEL') {
      pantalla.textContent = pantalla.textContent.slice(0, -1) || '0';
    } else if (operacion === '.') {
      if (!pantalla.textContent.includes('.')) {
        pantalla.textContent += '.';
      }
    } else {
      valorAnterior = pantalla.textContent;
      operadorSeleccionat = operacion;
      pantalla.textContent = '';
    }
  });
});