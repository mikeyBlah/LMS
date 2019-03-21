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

    const pPosition = document.createElement('p');
    pPosition.setAttribute('class', 'tableItem');
    pPosition.textContent = standings.position;

    const pteam = document.createElement('p');
    pteam.setAttribute('class', 'tableClub');
    pteam.textContent = standings.team_name;

    const matchesPlayed = document.createElement('p');
    matchesPlayed.setAttribute('class', 'tableItem');
    matchesPlayed.textContent = standings.overall_gp;

    const matchesWon = document.createElement('p');
    matchesWon.setAttribute('class', 'tableItem');
    matchesWon.textContent = standings.overall_w;

    const matchesDrawn = document.createElement('p');
    matchesDrawn.setAttribute('class', 'tableItem');
    matchesDrawn.textContent = standings.overall_d;

    const matchesLost = document.createElement('p');
    matchesLost.setAttribute('class', 'tableItem');
    matchesLost.textContent = standings.overall_l;

    const goalsFor = document.createElement('p');
    goalsFor.setAttribute('class', 'tableItem');
    goalsFor.textContent = standings.overall_gs;

    const goalsAgainst = document.createElement('p');
    goalsAgainst.setAttribute('class', 'tableItem');
    goalsAgainst.textContent = standings.overall_ga;

    const goalDiff = document.createElement('p');
    goalDiff.setAttribute('class', 'tableItem');
    goalDiff.textContent = standings.gd;

    const pPoints = document.createElement('p');
    pPoints.setAttribute('class', 'tableItem');
    pPoints.textContent = standings.points;

      container.appendChild(card);
      card.appendChild(pPosition);
      card.appendChild(pteam);
      card.appendChild(matchesPlayed);
      card.appendChild(matchesWon);
      card.appendChild(matchesDrawn);
      card.appendChild(matchesLost);
      card.appendChild(goalsFor);
      card.appendChild(goalsAgainst);
      card.appendChild(goalDiff);
      card.appendChild(pPoints);
  // Log each team
  console.log(standings.team_name);
});
} else{
  console.log('error');
}
}
  // Send request
  request.send();
