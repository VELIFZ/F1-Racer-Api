// let getData = async function (season, round) {
//     let response = await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
//     let data = await response.json();
//     return await data;
// }

// let getData = async (season, round) => {
//     let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
//     if (response.status == 200) {
//         return response.data
//     }
//     return null
// }

function getData() {
    let season = document.querySelector("#season").value;
    let round = document.querySelector("#round").value;
    console.log(season, round)
    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(fdata => {
        console.log(fdata)
        for(let i = 0; i < 7; i++) {
            let position = fdata["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][i]["position"];
            document.querySelector(`#position-${i}`).innerHTML=position;
            let fname = fdata["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][i]["Driver"]["givenName"];
            let lname = fdata["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][i]["Driver"]["familyName"]
            let name = `${fname} ${lname}`
            document.querySelector(`#name-${i}`).innerHTML=name;
            let nationality = fdata["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][i]["Driver"]["nationality"];
            document.querySelector(`#nationality-${i}`).innerHTML=nationality;
            let sponsor = fdata["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][i]["Constructors"][0]["name"];
            document.querySelector(`#sponsor-${i}`).innerHTML=sponsor;
            let points= fdata["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][i]["points"];
            document.querySelector(`#points-${i}`).innerHTML= points;
        }
    })
}
