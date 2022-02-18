//team map scores
const team1Rep = nodecg.Replicant("team1");
const team2Rep = nodecg.Replicant("team2");
//team series scores
const team1seriesRep = nodecg.Replicant("team1series");
const team2seriesRep = nodecg.Replicant("team2series");


//element ID references
const team1El = document.getElementById("blueScore");
const team2El = document.getElementById("redScore");

const team1sEl = document.getElementById("blueSeries")
const team2sEl = document.getElementById("redSeries")

team1Rep.on("change", (newVal) => {
  team1El.innerHTML = newVal;
});

team2Rep.on("change", (newVal) => {
  team2El.innerHTML = newVal;
});

team1seriesRep.on("change", (newVal) => {
  team1sEl.innerHTML = newVal;
});

team2seriesRep.on("change", (newVal) => {
  team2sEl.innerHTML = newVal;
});