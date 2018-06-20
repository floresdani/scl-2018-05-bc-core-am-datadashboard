window.onload = () => {
  resultsGeneral();
  infoGeneral();
  nameUser();
  searchStudent();
};

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
function nameUser() {
  let name = [];

  const btn = document.getElementById('generalData');
  const container = document.getElementById('table');

  const usersJSONS = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  fetch(usersJSONS)
    .then(response => response.json())
    .then(info => {
      renderUsers(info);
    });
  const renderUsers = info => {
    btn.addEventListener('click', () => {
      const render = info.forEach(element => {
        return contenedor.innerHTML += `<p>${element.name}</p>`;
      });
      return render;
    });
  };
}
/*Aquí va la funcionalidad de buscar por alumna */

function searchStudent() {
  let user = [];

  const input = document.getElementById('studentSearch').value;
  const users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
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

}



/*
function demo() {
  let result = "";
  for (let i in progress) {
    let
  }
}
*/