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

/*window.computeUsersStats = (users, progress, courses) => {
  let user = [];
  users = users.map(progreso => { // cada dato dentro del arreglo
    progreso.stats = { 
      exercises: {}, 
      reads: {}, 
      quizzes: {}, 
      percent: 0 };
    // asignar valores a los objetos exercises
    progreso.stats.exercises.total = exercises.total;
    progreso.stats.exercises.completed = exercises.completed;
    progreso.stats.exercises.percent = parseInt((exercises.completed / exercises.total) * 100);
    // Asignar valores a los objetos reads
    progreso.stats.reads.total = reads.total;
    progreso.stats.reads.completed = reads.completed;
    progreso.stats.reads.percent = parseInt((reads.completed / reads.total) * 100);
    // Asignar valores a los objetos quizzes
    progreso.stats.quizzes.total = quizzes.total;
    progreso.stats.quizzes.completed = quizzes.completed;
    progreso.stats.quizzes.percent = parseInt((quizzes.completed / quizzes.total) * 100);
    progreso.stats.quizzes.scoreSum = quizzes.scoreSum;
    progreso.stats.quizzes.scoreAvg = parseInt(quizzes.scoreSum / quizzes.scoreUnit) // sacará promedio de score


    if (progress[progreso.id].intro) { // obtener datos de cada id dentro de intro
      progreso.stats.percent = progress[progreso.id].intro.percent;
      let units = progress[progreso.id].intro.units; // variable que con el contenido de units
      let exercises = { total: 0,
        completed: 0, 
        percent: 0 };
      let reads = { total: 0, 
        completed: 0, 
        percent: 0 };
      let quizzes = { total: 0, 
        completed: 0, 
        percent: 0, 
        scoreSum: 0, 
        scoreAvg: 0, 
        scoreUnit: 0 };
      // obtener datos de progress.json
      for (let x in units) { // solicitar info recorriendo datos de units
        for (let y in units[x].parts) {
          let part = units[x].parts[y];// variable con datos de parts
          if (part.type === 'quiz') {
            quizzes.total++; // cuenta la cantidad de quizzes
            if (part.score) {
              quizzes.scoreUnit++; // cuenta score de cada unidad
              quizzes.scoreSum = quizzes.scoreSum + part.score; // se sumarán todos los score de unidades y sus partes
            }
            if (part.completed === 1) { // 1 son lo completado
              quizzes.completed++; // sumará los quizzes completados
            }
            if (part.type === 'read') {
              reads.total++; // sumará a las lecturas
              if (part.completed === 1) {
                reads.completed++; // sumará las lecturas completadas
              }
            }
            if (part.type === 'practice') {
              exercises.total++; // sumará a los ejercicios
              if (part.completed === 1) {
                exercises.completed++; // sumaŕa los ejercicios completados
              }
            }
          } // fin de solicitud de datos
          if (quizzes.scoreSum === 0) {
            quizzes.scoreAvg = 0;
          } else {
            quizzes.scoreAvg;
            percent = 0;
            exercises.total = 0;
            exercises.completed = 0;
            exercises.percent = 0;
            reads.total = 0;
            reads.completed = 0;
            reads.percent = 0;
            quizzes.total = 0;
            quizzes.completed = 0;
            quizzes.scoreSum = 0;
            quizzes.scoreAvg = 0;
          }
        }
      }
      return progreso; // entregará los valores de user
    }
    return user; 
  });
};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {
  let newUserNames = [];
  return users.filter(element => {
    return element.name.toUpperCase().indexOf(search.toUpperCase()) >= 0;
  });
  return newUserNames;
};

window.processCohortData = (options) => {

};*/