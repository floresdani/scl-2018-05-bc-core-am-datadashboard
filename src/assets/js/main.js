
window.onload = () => {
  dataFull();
  myFunction();
};
/*
const btn = document.querySelector('input');
const container = document.getElementById('dataResult');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  });

const renderUsers = data => {
  btn.addEventListener('click', () => { // si fuera objeto: for in (recorre objetos)
    const render = data.forEach(element => {
      // element.name === arreglo[i].name
      return container.innerHTML += `<p>${element.name}</p>`
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
