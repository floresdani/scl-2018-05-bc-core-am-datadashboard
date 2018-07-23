window.onload = () => {
  users();
  stats();
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
      const render = info.forEach(student => {
        return container.innerHTML += `<ul><b>NOMBRE:</b> ${student.name.toUpperCase()}<br><b>ID:</b> ${student.id}</ul>`;
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