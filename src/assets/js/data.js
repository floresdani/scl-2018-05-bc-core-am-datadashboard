window.computeUsersStats = (
  users, // Arreglo de usuarios directo desde users.json.
  progress, // Objeto de progreso directo desde progress.json.
  courses // Arreglo de índices de cursos desde el cohort seleccionado.
) => {
  // Accedo a la información de la usuaria a través de su ID.
  for (let i = 0; i < users.length; i++) {
    let userId = users[i].id;
    userProgress = progress[userId];
    if (JSON.stringify(userProgress) === '{}') { // Se escribe ésto para evitar que salga undefined (en caso de alguna alumna que no tenga datos) y para poder setear el número base en 0. 
      users[i].stats = {
        percent: 0,
        exercises: { percent: 0, },
        reads: { percent: 0, },
        quizzes: {
          percent: 0,
          scoreAvg: 0,
        }
      };
    } else {
      // Setea el contador en 0.
      let percentGral = 0;
      let lectures = 0;
      let lecturesCompleted = 0;
      let lecturesPercent = 0;
      let quizzes = 0;
      let quizzesCompleted = 0;
      let quizzesPercent = 0;
      let exercises = 0;
      let exercisesCompleted = 0;
      let exercisesPercent = 0;
      let scoreSum = 0;
      let scoreAvg = 0;

      // Éste for recorre cada ID de curso.
      for (let i in userProgress) {
        let element = userProgress[i];
        if (courses.indexOf(i) < 0) {
          continue;
        }
        // Acá se calcula el porcentaje general de completitud.
        percentGral += element.percent / Object.keys(userProgress).length;
        for (let unit of Object.values(element.units)) {
          for (let part of Object.values(unit.parts)) {
            if (part.length === 0) {
              quizzes = 0;
              exercises = 0;
              lectures = 0;
              quizzesPercent = 0;
              exercisesPercent = 0;
              lecturesPercent = 0;
            }
            // Acá se verifica si tuvo lecturas.   
            if (part.type === 'read') {
              lectures++;
            }
            // Acá verifica si las completó. Si part.type es igual a 'read' y el valor de completed es 1, entonces se incrementa el contador de lecturas. 
            if (part.type === 'read' && part.completed === 1) {
              lecturesCompleted++;
            }
            // Aquí se calcula el resultado del porcentaje de lecturas
            lecturesPercent = Math.round((lecturesCompleted * 100) / lectures);
            if (part.type === 'quiz') {
              quizzes++;
            }
            if (part.type === 'quiz' && part.completed === 1) {
              quizzesCompleted++;
              scoreSum += part.score;
            }
            quizzesPercent = Math.round((quizzesCompleted * 100 * 10 / quizzes)) / 10;
            if (part.type === 'practice') {
              exercises++;
            }
            if (part.type === 'practice' && part.completed === 1) {
              exercisesCompleted++;
            }
            exercisesPercent = Math.round((exercisesCompleted * 100 * 10) / (exercises || 1)) / 10;
            // Exercises no puede ser 0 o si no da un valor de NaN, así que se divide en 1 para que de 0.
          }
        }
      }
      // Sacar promedio de los quizes.
      scoreAvg = scoreSum / quizzes;

      users[i].stats = {
        percent: percentGral,
        reads: {
          percent: lecturesPercent,
          total: lectures,
          completed: lecturesCompleted
        },
        exercises: {
          percent: exercisesPercent,
          total: exercises,
          completed: exercisesCompleted
        },
        quizzes: {
          percent: quizzesPercent,
          total: quizzes,
          completed: quizzesCompleted,
          scoreAvg: scoreAvg,
          scoreSum: scoreSum
        }
      };
    }
  }
  // Aquí se retornan los resultados.
  return users;
};


// Ésta función ordena por orden alfabetico a las alumnas.
window.sortUsers = (users, orderBy, orderDirection) => {
  if (orderBy === 'name') {
    return users.sort((a, b) => {
      if (orderDirection == 'ASC') {
        return a.name.localeCompare(b.name);
      } else {
        return a.name.localeCompare(b.name) * -1;
      }
    });
  }

  if (orderBy === 'percent') {
    return users.sort((a, b) => {
      if (orderDirection == 'ASC') {
        return a.stats.percent - b.stats.percent;
      } else {
        return (a.stats.percent - b.stats.percent) * -1;
      }
    });
  }
};

window.filterUsers = (users, search) => {
  if (search) {
    if (users) {
      search = search.toLowerCase();
      return users.filter(user => user &&
        user.name &&
        user.name.toUpperCase().indexOf(search) >= 0);
    }
  }
  return users;
};

window.processCohortData = (options) => {
  computeUsersStats();
  sortUsers();
  filterUsers();
};