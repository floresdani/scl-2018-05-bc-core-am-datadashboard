window.onload = () => {
  resultsGeneral();
  infoGeneral();
  users();
  stats();
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
function users() {

  const btn = document.getElementById('generalData');
  const container = document.getElementById('nameBox');

  const usersJSONS = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  fetch(usersJSONS)
    .then(response => response.json())
    .then(info => {
      renderUsers(info);
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
function progress() {
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
}

//se declara la funcion para darle funcionalidad al boton toggler y que cambie al darle click
function onToggleSort() {
  const direction = toggleSort.innerText;
  if (direction == "ASC") {
    toggleSort.innerText = "DESC";
  } else {
    toggleSort.innerText = "ASC";
  }
  //llamamos a la funcion de ordenamiento para que que ordene los usuarios
  const sortedUsers = window.sortUsers(usersStats, "name", direction);
  //no se hace el getElementById por que en JS todo lo declarado en el html con un id queda como variable global :O
  studentContainer.innerHTML = "";
  for (let student of sortedUsers) {
    studentContainer.innerHTML += `
    <p>${student.name}</p>
  `;
  }
}