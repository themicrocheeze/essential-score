const team1Rep = nodecg.Replicant('team1name');
const team2Rep = nodecg.Replicant('team2name');

const team1El = document.getElementById('blueScore');
const team2El = document.getElementById('redScore');

team1Rep.on('change', (newVal) => {
	team1El.innerHTML = newVal;
})

team2Rep.on('change', (newVal) => {
	team2El.innerHTML = newVal;
})