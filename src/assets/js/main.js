window.onload = () => {
  const btnDash = document.getElementById('dataDash');
  btnDash.addEventListener('click', () => {
    document.getElementById('search').style.display = 'block';
    document.getElementById('generalResults').style.display = 'none';
  });

  const generalInfo = document.getElementById('goGeneral');
  generalInfo.addEventListener('click', () => {
    document.getElementById('search').style.display = 'none';
    document.getElementById('generalResults').style.display = 'block';
  });
};

const btn = document.getElementById('goGeneral');
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
*/


function myFunction() {
  studentSearch.addEventListener('keypress', (event) => {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";

      }
  }



function dataFull() {
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
}
