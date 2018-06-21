window.onload = () => {
  resultsGeneral();
  infoGeneral();
  users();
  searchStudent();
};
/*Definiendo variables null */
let namesUsers = null;


/*funcionalidad boton select */
function resultsGeneral() {
  const btnDash = document.getElementById('dataDash');
  btnDash.addEventListener('click', () => {
    document.getElementById('search').style.display = 'block';
    document.getElementById('generalResults').style.display = 'none';
  });
}
/* */
function infoGeneral() {
  const generalInfo = document.getElementById('generalData');
  generalInfo.addEventListener('click', () => {
    document.getElementById('search').style.display = 'none';
    document.getElementById('generalResults').style.display = 'block';
  });
}
/*Aqui va la funcionalidad de listados de  nombres */
function users() {
  const btn = document.getElementById('generalData');
  const container = document.getElementById('nameBox');
  const usersJSONS = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

  fetch(usersJSONS)
    .then(response => response.json())
    .then(info => {
      console.log(info);
      namesUsers = info;
      renderUsers(info);
    });
  const renderUsers = info => {
    btn.addEventListener('click', () => {
      const namesUsers = info.forEach(element => {
        return container.innerHTML += `<div><td>${element.name.toUpperCase()}</td></div>`;
      });
      return namesUsers;
    });
  };
}
/*Aquí va la funcionalidad de buscar por alumna */

function searchStudent() {
  const input = document.getElementById('studentSearch');
  const users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

  input.addEventListener('keypress', (event) => {
    let key = event.which || event.KeyCode;
    if (key === 13) { //código 13 = enter
      let nameUser = input.value;
      console.log(userNames);
      input.value = ''; //string vacío para limpiar input

      fetch(users)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          renderInfo(data);
        });
    };
  });

  //const renderInfo = (data) => {



  //} 


  /*

  fetch(users)
    .then(response => response.json())
    .then(info => {
      renderUsers(info);
    });
  const renderUsers = info => {
    input.addEventListener('keypress', (event) => {
      let key = event.which || event.keyCode;
      if (key === 13) { //código 13 es enter
        const render = info.forEach(element => {
          if (input === element.name) {
            return contenedor.innerHTML += `<p>${element.name}</p>`;
          }

        })
      };
      return render;
    });
  };
*/
}



/*
function demo() {
  let result = "";
  for (let i in progress) {
    let
  }
}
*/