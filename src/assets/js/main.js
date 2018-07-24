let users = null;
let progress = null;
let cohorts = null; // null == false => true
let usersStats = null;

fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(usersJSONS => {
    users = usersJSONS;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error('No pudimos obtener usuarios');
    // console.error indica un mensaje de error, indica una alerta grave
    console.error('ERROR > ' + error.stack); // error.stack muestra donde falló el codigo, imprime donde esta el error
  });

fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(progressJSON => {
    progress = progressJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error('No se puede obetener el progreso');
    console.error('ERROR ' + error.stack);
  });


/* Función para buscar alumna por nombre */
searchStudent = () => {
  const search = studentSearch.value;
  const filteredUsers = window.filterUsers(usersStats, search);
  nameList.innerHTML = '';
  filteredUsers.forEach(student => {
    nameList.innerHTML += `
      <p>${student.name.toUpperCase()}</p>
    `;
  });
}
