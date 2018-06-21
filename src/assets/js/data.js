window.computeUsersStats = (users, progress, courses) => {
  let result = "";
  for (let i in progress) {

  }
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

};