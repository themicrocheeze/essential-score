const team1nameRep = nodecg.Replicant('team1name');
const team2nameRep = nodecg.Replicant('team2name');

const team1nameEl = document.getElementById('blue_team_name');
const team2nameEl = document.getElementById('red_team_name');

team1nameRep.on('change', (newVal) => {
	team1nameEl.innerHTML = newVal;
})

team2nameRep.on('change', (newVal) => {
	team2nameEl.innerHTML = newVal;
})