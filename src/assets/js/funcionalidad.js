/* funcionalidad boton select */
const btnDash = document.getElementById('dataDash');
btnDash.addEventListener('click', () => {
  document.getElementById('search').style.display = 'block';
  document.getElementById('generalResults').style.display = 'none';
});


/* funcionalidad boton continuar*/
const generalInfo = document.getElementById('generalData');
generalInfo.addEventListener('click', () => {
  document.getElementById('search').style.display = 'none';
  document.getElementById('generalResults').style.display = 'block';
});

/* Aqui va el listados de  nombres */
function usersList() {

  const btn = document.getElementById('generalData');
  const container = document.getElementById('nameList');

  const renderUsers = info => {
    btn.addEventListener('click', () => {
      const render = info.forEach(student => {
        return container.innerHTML += `<ul><b>NOMBRE:</b> ${student.name.toUpperCase()}<br><b>ID:</b> ${student.id}</ul>`;
      });
      return render;
    });
  };