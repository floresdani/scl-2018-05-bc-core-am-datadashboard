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
        }
      }
    })
  }
}


/* funcionalidad users*/
/*usersProgressCourses = () => {
  Promise.all([
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json'),
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  ]).then((responses) => {
    return Promise.all(
      responses.map(
        (response) => {
          return response.json();
        }
      )
    );
  }).then((data) => {
    console.log(JSON.stringify(data));
    dataUsers(data);
  }).catch((error) => {
    console.log('Error fatal al buscar la data');
  });

  const dataUsers = info => {
    const btn = document.getElementById('generalData');
    const container = document.getElementById('nameList');

    btn.addEventListener('click', () => {
      
      const names = info[0].forEach(element => {
        return container.innerHTML += `<ul>${element.name.toUpperCase()}</ul>`; 
      });
      return names; 
    });

    const btn = document.getElementById('generalData');
    const container = document.getElementById('nameCourses');

    btn.addEventListener('click', () => {

      const progress = info[1].forEach(element => {
        return container.innerHTML += `<li>${element.intro.percent}$</li>`;
      });
      return progress;
    });
  };
};*/

/* Aquí va el listado de el progreso*/
/* function progress() {

  const list = document.getElementById('nameCourses');

  const url = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
  fetch(url)
    .then(datas => datas.json())
    .then(info => {
      console.log(info);
      const renderUsers = info => {
        const render = info.forEach(element => {
          return list.innerHTML += `<li>${element}$</li>`;
        });
        return render;
      };
    });
}*/

/* Aquí va la funcionalidad de buscar por alumna */

/* function searchStudent() {
  let user = [];

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
    }
  });
}*/