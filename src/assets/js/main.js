window.onload = () => {
  const btnDash = document.getElementById('dataDash');
  btnDash.addEventListener('click', () => {
    document.getElementById('search').style.display = 'block';
    document.getElementById('generalResults').style.display = 'none';
  });

  const generalInfo = document.getElementById('generalData');
  generalInfo.addEventListener('click', () => {
    document.getElementById('search').style.display = 'none';
    document.getElementById('generalResults').style.display = 'block';
  });
};

const btn = document.getElementById('generalData');
const container = document.getElementById('nombres');

const usersJSONS = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
fetch(usersJSONS)
  .then(response => response.json())
  .then(data => {
    renderUsers(data);
  });
const renderUsers = info => {
  btn.addEventListener('click', () => {
    const render = info.forEach(element => {
      return contenedor.innerHTML += `<p>${element.name}</p>`;
    });
    return render;
  });
};