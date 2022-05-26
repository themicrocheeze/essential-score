//Blue
const team1player1Rep = nodecg.Replicant('team1player1');
const team1player2Rep = nodecg.Replicant('team1player2');
const team1player3Rep = nodecg.Replicant('team1player3');
const team1player4Rep = nodecg.Replicant('team1player4');
const team1player5Rep = nodecg.Replicant('team1player5');
const team1player6Rep = nodecg.Replicant('team1player6');
//red Team
const team2player1Rep = nodecg.Replicant('team2player1');
const team2player2Rep = nodecg.Replicant('team2player2');
const team2player3Rep = nodecg.Replicant('team2player3');
const team2player4Rep = nodecg.Replicant('team2player4');
const team2player5Rep = nodecg.Replicant('team2player5');
const team2player6Rep = nodecg.Replicant('team2player6');

//Elements
const team1player1El = document.getElementById("blue_player_1");
const team1player2El = document.getElementById("blue_player_2");
const team1player3El = document.getElementById("blue_player_3");
const team1player4El = document.getElementById("blue_player_4");
const team1player5El = document.getElementById("blue_player_5");
const team1player6El = document.getElementById("blue_player_6");

const team2player1El = document.getElementById("red_player_1");
const team2player2El = document.getElementById("red_player_2");
const team2player3El = document.getElementById("red_player_3");
const team2player4El = document.getElementById("red_player_4");
const team2player5El = document.getElementById("red_player_5");
const team2player6El = document.getElementById("red_player_6");

//updater

team1player1Rep.on('change', (newVal) => {
	team1player1El.innerHTML = newVal;
})
team1player2Rep.on('change', (newVal) => {
	team1player2El.innerHTML = newVal;
})
team1player3Rep.on('change', (newVal) => {
	team1player3El.innerHTML = newVal;
})
team1player4Rep.on('change', (newVal) => {
	team1player4El.innerHTML = newVal;
})
team1player5Rep.on('change', (newVal) => {
	team1player5El.innerHTML = newVal;
})
team1player6Rep.on('change', (newVal) => {
	team1player6El.innerHTML = newVal;
})


team2player1Rep.on('change', (newVal) => {
	team2player1El.innerHTML = newVal;
})
team2player2Rep.on('change', (newVal) => {
	team2player2El.innerHTML = newVal;
})
team2player3Rep.on('change', (newVal) => {
	team2player3El.innerHTML = newVal;
})
team2player4Rep.on('change', (newVal) => {
	team2player4El.innerHTML = newVal;
})
team2player5Rep.on('change', (newVal) => {
	team2player5El.innerHTML = newVal;
})
team2player6Rep.on('change', (newVal) => {
	team2player6El.innerHTML = newVal;
})