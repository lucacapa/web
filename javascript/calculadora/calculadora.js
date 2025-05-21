const bnum = document.querySelectorAll('.numero');
const pantalla = document.getElementById('pantalla');
<<<<<<< HEAD
const blimpiar = document.getElementById('C');
const boperacion = document.querySelectorAll('.operacion');

 bnum.forEach(button => {
=======
const blimpiar = document.getElementById('C')
  bnum.forEach(button => {
>>>>>>> 33540c347a23bc2acadc5ed75d41ef7f031e8f1c
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


<<<<<<< HEAD
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
=======
>>>>>>> 33540c347a23bc2acadc5ed75d41ef7f031e8f1c
