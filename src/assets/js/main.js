let users = null;
let progress = null;
let cohorts = null; // null == false => true
let usersStats = null;

window.onload = () => {
  resultsGeneral();
  infoGeneral();
  usersList();
  /* searchStudent();*/
  progressUsers();
};

/* funcionalidad boton select */
function resultsGeneral() {
  const btnDash = document.getElementById('dataDash');
  btnDash.addEventListener('click', () => {
    document.getElementById('search').style.display = 'block';
    document.getElementById('generalResults').style.display = 'none';
  });
}

/* funcionalidad boton continuar*/
function infoGeneral() {
  const generalInfo = document.getElementById('generalData');
  generalInfo.addEventListener('click', () => {
    document.getElementById('search').style.display = 'none';
    document.getElementById('generalResults').style.display = 'block';
  });
}

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
      const render = info.forEach(element => {
        return container.innerHTML += `<div><td>${element.name.toUpperCase()}</td></div>`;
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
};

function areWeFinishedYet() { // ¿hemos terminado?
  // se llama desde todas las promesas para que tome los tome en cuenta sin importar cual de ellos se ejecute primero
  // vemos si users progress y cohorts ya tienen datos en su interior sino no se ejecuta
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw'); // busca el cohort que tiene ese id ya que este es el unico cohort que esta en los json
    const courses = Object.keys(cohort.coursesIndex);
    // guardamos el resultado de llamar a la funcion en una variable global    
    usersStats = window.computeUsersStats(users, progress, courses);// recibe users, progress y el listado de los cursos del cohort
  }
}
