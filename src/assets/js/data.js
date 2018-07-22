window.computeUsersStats = (users, progress, courses) => {
  for (let i = 0; i < users.length; i++) {//Para recorrer el arreglo de usuarias.
    let userID = users[i].id;//Rescata el ID de las usuarias.
    //Puedo acceder 
    let userProgress = progress[userID];//Para unir el progreso con los users a través de los ID.
    for (let j = 0; j < userProgress.length; j++) {
      if (JSON.stringify(userProgress[j]) === '{}') {//En el caso que la usuaria no tuviera datos.
        user[i].stats = {
          percent: 0,
          exercises: { percent: 0 },
          reads: { percent: 0 },
          quizzes: {
            percent: 0,
            scoreAvg: 0
          }
        };
      } else {
        let percentGral;
        let lectures = 0;
        let lecturesCompleted = 0;
        let lecturesPercent;
        let quizzes = 0;
        let quizzesCompleted = 0;
        let quizzesPercent;
        let exercises = 0;
        let exercisesCompleted = 0;
        let exercisesPercent;

        let i;
        for (i in userProgress) {
          let element = userProgress[i];//Nos metemos al primer item del objeto UserProgress que es "intro".
          for (let unit of Object.values(elements.units)) {
            //El object.value depende del JS, a veces no lo necesita 
            //For of nunca va a fallar, no da error en el i de índice
            for (let part of Object.values(unit.parts)) {
              if (part.type === 'read') {
                lectures++;
              } if (part.length === 0) {
                lectures = 0;
                percentGral = 0;
                //Acá verifica si completó progresos.
                //Ésto es para un curso o tema en particular.
              } if (part.type === 'read' && part.completed === 1) {//Colocar el 1 para no obtener % erroneos.
                lecturesCompleted++;
              }
              //En ésta parte se calcula el resultado del porcentaje.
              //Math.round para redondear el resultado.
              //El math.round tb sirve para que no obtener decimales.
              //Sacar el % fuera del for para evitar recalcular.
              lecturesPercent = Math.round((lecturesCompleted * 100 / lectures));

              if (part.type === 'quiz') {
                quizzes++;
              } if (part.type === 'quiz' && part.completed === 1) {
                quizzesCompleted++;
              } if (part.length == 0) {
                quizzes = 0;
                percentGral = 0;
                exercises = 0;
                lectures = 0;
              } if (part.type === 'practice') {
                excercises++;
              } if (part.type === 'practice' && part.completed === 1) {
                exercisesCompleted++;
              }
            }
          }
        }
      }
    }
  }
};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};