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