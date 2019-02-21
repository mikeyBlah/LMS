  let app = document.querySelector('#root');

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76', true);

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      function compare(a,b) {
        if (a.points > b.points) return -1;
        if (a.points < b.points) return 1;
        return 0;
      }
    data.sort(compare);
    data.forEach(standings => {
    console.log(standings);

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const pteam = document.createElement('p');
    pteam.setAttribute('class', 'teamName');
    pteam.textContent = standings.team_name;

    const ppoints = document.createElement('p');
    ppoints.setAttribute('class', 'pPoints');
    ppoints.textContent = standings.points;

      container.appendChild(card);
      card.appendChild(pteam);
      card.appendChild(ppoints);
  // Log each movie's title
  console.log(standings.team_name);
});
} else{
  console.log('error');
}
}
  // Send request
  request.send();
