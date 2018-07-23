/* funcionalidad boton select */
btnDash.addEventListener('click', () => {
  document.getElementById('search').style.display = 'block';
  document.getElementById('generalResults').style.display = 'none';
});


/* funcionalidad boton continuar*/
generalInfo.addEventListener('click', () => {
  document.getElementById('search').style.display = 'none';
  document.getElementById('generalResults').style.display = 'block';
});