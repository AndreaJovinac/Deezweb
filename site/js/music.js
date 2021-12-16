/********************************************************/
/********************************************************/
/* DECLARATION DES VARIABLES des variables */
/********************************************************/
/********************************************************/
// const trackId = window.location.search;
// const trackIdNum = trackId.slice(1 + 3);
// const url = `https://api.deezer.com/track/` + trackId;
// console.log(trackId);
// console.log(trackIdNum);
// console.log(url);
/********************************************************/
/********************************************************/
/* TESTER L'API : Tu vas chercher dans l'API tous les résultats de Deezer */
/********************************************************/
/********************************************************/

function VaChercherDanslAPI() {
  const trackId = window.location.search;
  const trackIdNum = trackId.slice(1 + 3);
  const url = "https://api.deezer.com/track/" + trackIdNum;
  console.log(trackId);
  console.log(trackIdNum);
  // console.log(url);
  fetch(url)
    // https://api.deezer.com/track/3135556    https://api.deezer.com/track/${trackIdNum}
    .then((response) => response.json())
    .then((data) => console.log(data)); // Tu mets la réponse dans la variable : resultats
  // On teste le fetch pour voir si ça fonctionne
}

// // document.getElementById("wrap-article").innerHTML =
// //   "Page hostname is " + window.location;
// console.log(trackId);
VaChercherDanslAPI();
