//Map Score
const team1Rep = nodecg.Replicant('team1', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2', {defaultValue: 0});
//Series Score
const team1seriesRep = nodecg.Replicant('team1series', {defaultValue: 0});
const team2seriesRep = nodecg.Replicant('team2series', {defaultValue: 0});

//Score Reseters for both maps and series
function resetScoreboard(){
    team1Rep.value = 0;
    team2Rep.value = 0;
}

function resetSeries(){
    team1seriesRep.value = 0;
    team2seriesRep.value = 0;
}

//Functions for score controls
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

//Functions for series controls
function seriesTeam1(){
	team1seriesRep.value++;
}

function minusSeriesTeam1(){
    if (team1Rep.value > 0){
	team1seriesRep.value--;
    }
    else{
        return;
    }

}

function seriesTeam2(){
	team2seriesRep.value++;
}

function minusSeriesTeam2(){
    if (team2Rep.value > 0){
	team2seriesRep.value--;
    }
    else{
        return;
    }

}