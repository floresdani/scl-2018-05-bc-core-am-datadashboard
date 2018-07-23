window.onload = () => {
  resultsGeneral();
  infoGeneral();
  /*usersProgressCourses();*/
  users();
  stats();
  /* searchStudent(); */
  /* progress(); */
};

/* funcionalidad boton select */
resultsGeneral = () => {
  const btnDash = document.getElementById('dataDash');
  btnDash.addEventListener('click', () => {
    document.getElementById('search').style.display = 'block';
    document.getElementById('generalResults').style.display = 'none';
  });
};

/* funcionalidad boton continuar*/
infoGeneral = () => {
  const generalInfo = document.getElementById('generalData');

  generalInfo.addEventListener('click', () => {
    document.getElementById('search').style.display = 'none';
    document.getElementById('generalResults').style.display = 'block';
  });
};

/* Aqui va el listados de  nombres */
users = () => {
  const btn = document.getElementById('generalData');
  const container = document.getElementById('nameList');

  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then(response => response.json())
    .then(info => {
      renderUsers(info);
    });
  const renderUsers = info => {
    btn.addEventListener('click', () => {
      const render = info.forEach(element => {
        return container.innerHTML += `<ul><b>NOMBRE:</b> ${element.name.toUpperCase()}<br><b>ID:</b> ${element.id}</ul>`;
      });
      return render;
    });
  };
};

/* Aquí van los stats*/
stats = () => {

  fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
    .then(response => response.json())
    .then(info => {
      progress(info);
    });
  const progress = info => {
    console.log(info);
  };
};

/* Aquí van los cursos*/
courses = () => {
  const cohortCourses = document.getElementById('generalCourses');

  fetch('../data/cohorts.json')
    .then(response => response.json())
    .then(info => {
      courses(info);
    });
  const courses = info => {
    cohortCourses.addEventListener('click', () => {
      let courses = ' ';
      for (x in info) {
        if (id === 'lim-2017-09-bc-core-am') {
          courses += courses;
        };
      };
    });
  };
};

// Función para buscar alumna por nombre
function searchStudent() {
  const search = searchStudent.value;
  const filteredUsers = window.filterUsers(usersStats, search);
  nameList.innerHTML = '';
  filteredUsers.forEach(element => {
    nameList.innerHTML += `
      <p>${element.name}</p>
    `;
  });
}