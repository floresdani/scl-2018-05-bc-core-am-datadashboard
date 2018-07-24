let users = null;
let progress = null;
let cohorts = null; // null == false => true
let usersStats = null;

/* window.onload = () => {
  users();
  stats();
};*/
/* Aqui va el listados de  nombres */
function usersList() {

  const btn = document.getElementById('generalData');
  const container = document.getElementById('nameList');

  const usersJSONS = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  fetch(usersJSONS)
    .then(response => response.json())
    .then(info => {
      renderUsers(info);
      areWeFinishedYet();
    })
    .catch(error => {
      console.error('No pudimos obtener usuarios');
      // console.error indica un mensaje de error, indica una alerta grave
      console.error('ERROR > ' + error.stack); // error.stack muestra donde falló el codigo, imprime donde esta el error
    });

  const renderUsers = info => {
    btn.addEventListener('click', () => {
      const render = info.forEach(student => {
        return container.innerHTML += `<ul><b>NOMBRE:</b> ${student.name.toUpperCase()}<br><b>ID:</b> ${student.id}</ul>`;
      });
      return render;
    });
  };
}

/* Aquí va el listado de el progreso*/
function progressUsers() {
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
    .then((datas) => {
      if (datas.ok) {
        return datas.json();
      } else {
        throw new Error('No se pudo procesar la información');
      }
    }).then((info) => {
      console.log((info));
    })
    .catch((error) => {
      console.error('Ha ocurrido un error: ' + error);
    });
  const progress = info => {
    console.log(info);
  };
};

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
