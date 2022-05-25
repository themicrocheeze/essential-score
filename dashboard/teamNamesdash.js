//Sets values entere on the dashboard into replicants used for the project


//Team Name Values
const team1nameRep = nodecg.Replicant('team1name', {defaultValue: "BLU"});
const team2nameRep = nodecg.Replicant('team2name', {defaultValue: "RED"});


//Team Styling, specifically background colors and text colors
const team1style1Rep = nodecg.Replicant('team1style1', {defaultValue: "black"});
const team1style2Rep = nodecg.Replicant('team1style2', {defaultValue: "black"});

const team2style1Rep = nodecg.Replicant('team2style1', {defaultValue: "white"});
const team2style2Rep = nodecg.Replicant('team2style2', {defaultValue: "black"});


//Functions that set them based in the variables listed above and from the inputs in masterOverlay.html
function setTeamNames(){
    team1nameRep.value = document.getElementById('team1nameinput').value;
    team2nameRep.value = document.getElementById('team2nameinput').value;
}

function setTeamColors(){
    team1style1Rep.value = document.getElementById('team1color').value;
    team1style2Rep.value = document.getElementById('team1textcolor').value;
    team2style1Rep.value = document.getElementById('team2color').value;
    team2style2Rep.value = document.getElementById('team2textcolor').value;
}