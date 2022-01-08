const team1Rep = nodecg.Replicant('team1', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2', {defaultValue: 0});



function resetScoreboard(){
    team1Rep.value = 0;
    team2Rep.value = 0;
}

function scoreTeam1(){
	team1Rep.value++;
}

function minusScoreTeam1(){
    if (team1Rep.value > 0){
	team1Rep.value--;
    }
    else{
        return;
    }

}

function scoreTeam2(){
	team2Rep.value++;
}

function minusScoreTeam2(){
    if (team2Rep.value > 0){
        team2Rep.value--;
        }
        else{
            return;
        }
}