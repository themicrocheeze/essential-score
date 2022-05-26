//Replicants for roster lineups

//Red Team
const team1player1Rep = nodecg.Replicant('team1player1', {defaultValue: "BLU 1"});
const team1player2Rep = nodecg.Replicant('team1player2', {defaultValue: "BLU 2"});
const team1player3Rep = nodecg.Replicant('team1player3', {defaultValue: "BLU 3"});
const team1player4Rep = nodecg.Replicant('team1player4', {defaultValue: "BLU 4"});
const team1player5Rep = nodecg.Replicant('team1player5', {defaultValue: "BLU 5"});
const team1player6Rep = nodecg.Replicant('team1player6', {defaultValue: "BLU 6"});
//red Team
const team2player1Rep = nodecg.Replicant('team2player1', {defaultValue: "RED 1"});
const team2player2Rep = nodecg.Replicant('team2player2', {defaultValue: "RED 2"});
const team2player3Rep = nodecg.Replicant('team2player3', {defaultValue: "RED 3"});
const team2player4Rep = nodecg.Replicant('team2player4', {defaultValue: "RED 4"});
const team2player5Rep = nodecg.Replicant('team2player5', {defaultValue: "RED 5"});
const team2player6Rep = nodecg.Replicant('team2player6', {defaultValue: "RED 6"});

function setTeamRosters(){
    team1player1Rep.value = document.getElementById('bluePlayer1').value;
    team1player2Rep.value = document.getElementById('bluePlayer2').value;
    team1player3Rep.value = document.getElementById('bluePlayer3').value;
    team1player4Rep.value = document.getElementById('bluePlayer4').value;
    team1player5Rep.value = document.getElementById('bluePlayer5').value;
    team1player6Rep.value = document.getElementById('bluePlayer6').value;

    team2player1Rep.value = document.getElementById('redPlayer1').value;
    team2player2Rep.value = document.getElementById('redPlayer2').value;
    team2player3Rep.value = document.getElementById('redPlayer3').value;
    team2player4Rep.value = document.getElementById('redPlayer4').value;
    team2player5Rep.value = document.getElementById('redPlayer5').value;
    team2player6Rep.value = document.getElementById('redPlayer6').value;
}