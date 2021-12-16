/********************************************************/
/********************************************************/
/* DECLARATION DES VARIABLES des variables */
/********************************************************/
/********************************************************/
// const trackId = window.location.search;
// const trackIdNum = trackId.slice(1 + 2);
// console.log(trackId);
// console.log(window.location.search);
/********************************************************/
/********************************************************/
/* TESTER L'API : Tu vas chercher dans l'API tous les résultats de Deezer */
/********************************************************/
/********************************************************/

async function VaChercherDanslAPI() {
  await fetch(`https://api.deezer.com/track/${trackId}`)
    // https://api.deezer.com/track/3135556
    .then((reponse) => reponse.json())
    .then((reponse) => console.log(reponse)); // Tu mets la réponse dans la variable : resultats
  // On teste le fetch pour voir si ça fonctionne
}

// // document.getElementById("wrap-article").innerHTML =
// //   "Page hostname is " + window.location;
// console.log(trackId);
VaChercherDanslAPI();
