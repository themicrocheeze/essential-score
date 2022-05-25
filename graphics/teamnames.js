const team1nameRep = nodecg.Replicant('team1name');
const team2nameRep = nodecg.Replicant('team2name');

const team1nameEl = document.getElementById('blue_team_name');
const team2nameEl = document.getElementById('red_team_name');


const team1style1Rep = nodecg.Replicant('team1style1');
const team1style2Rep = nodecg.Replicant('team1style2');

const team2style1Rep = nodecg.Replicant('team2style1');
const team2style2Rep = nodecg.Replicant('team2style2');

const team1style1El = document.getElementById("blue_team_name");
const team1style2El = document.getElementById("blue_team_name");

const team2style1El = document.getElementById("red_team_name");
const team2style2El = document.getElementById("red_team_name");


//Updates team Names
team1nameRep.on('change', (newVal) => {
	team1nameEl.innerHTML = newVal;
})

team2nameRep.on('change', (newVal) => {
	team2nameEl.innerHTML = newVal;
})


//Updates team 1 styles

team1style1Rep.on('change', (newVal) => {
	team1style1El.style.backgroundColor = newVal;
})

team1style2Rep.on('change', (newVal) => {
	team1style2El.style.color = newVal;
})

//updates team 2 styles
team2style1Rep.on('change', (newVal) => {
	team2style1El.style.backgroundColor = newVal;
})

team2style2Rep.on('change', (newVal) => {
	team2style2El.style.color = newVal;
})