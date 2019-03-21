var fixRequest = new XMLHttpRequest();
const fixCont = document.querySelector('#fixCont');
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
let todaysDate = dd + '.' + mm + '.' + yyyy;
// Open a new connection, using the GET request on the URL endpoint
fixRequest.open('GET', 'http://api.football-api.com/2.0/matches?comp_id=1204&from_date='+ todaysDate + '&to_date=10-04-2019&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76', true);

fixRequest.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (fixRequest.status >= 200 && fixRequest.status < 400) {
    //function compare(a,b) {
      //if (a.week < b.week) return -1;
      //if (a.week > b.week) return 1;
      //return 0;
    //}
//data.sort(compare);
    const compare = (a, b) => {
    let aa = a.formatted_date.split('.').reverse().join(),
        bb = b.formatted_date.split('.').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
};
  data.sort(compare);
  data.forEach(matches => {
  if((matches.status !== "FT") && (matches.week === "32")){
  console.log(matches);

  const fixtureCard = document.createElement('div');
  fixtureCard.setAttribute('class', 'fixtureCard');

  const homeTeam = document.createElement('p');
  homeTeam.setAttribute('class', 'fixtureTeam');
  homeTeam.textContent = matches.localteam_name;

  const awayTeam = document.createElement('p');
  awayTeam.setAttribute('class', 'fixtureTeam');
  awayTeam.textContent = matches.visitorteam_name;

  const fixHead = document.createElement('div');
  fixHead.setAttribute('class', 'fixHead');
  fixHead.textContent = matches.formatted_date + " - " + matches.time;

  const homeTeamBadge = document.createElement('img');
  homeTeamBadge.setAttribute('class', 'teamBadge');
  homeTeamBadge.src = "./img/" + matches.localteam_name + " Logo.png";

  const awayTeamBadge = document.createElement('img');
  awayTeamBadge.setAttribute('class', 'teamBadge');
  awayTeamBadge.src = "./img/" + matches.visitorteam_name + " Logo.png";

  const fixMain = document.createElement('div');
  fixMain.setAttribute('class', 'fixMain');

    fixCont.appendChild(fixtureCard);
    fixtureCard.appendChild(fixHead);
    fixtureCard.appendChild(fixMain);
    fixMain.appendChild(homeTeamBadge);
    fixMain.appendChild(homeTeam);
    fixMain.appendChild(awayTeam);
    fixMain.appendChild(awayTeamBadge);
}
});
} else{
console.log('error');
}
}
// Send request
fixRequest.send();
