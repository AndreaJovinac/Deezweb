/********************************************************/
/********************************************************/
/* DECLARATION DES VARIABLES des variables */
/********************************************************/
/********************************************************/

// Etape 1 : On récupére l'ID du dans l'URL
const trackId = window.location.search; //  on stock dans une variable les informations de URL
const trackIdNum = trackId.slice(1 + 3); // on fais un retrait de vers la gauche pour pouvoir récupérer que le numero de l'ID
const url = "https://api.deezer.com/track/" + trackIdNum; // dans la variable url on stock

//--- On teste l'objet
// console.log(trackId);
// console.log(trackIdNum);

// Etape 2 : On cible des élements dans le DOM pour pouvoir les stocks dans la page HTML
const player = document.getElementById("player");
console.log(player);

// Etape 3 : On stock les données de l'api dans un tableau que l'on va  créer
let resultats = []; // La variable te permet de varier les choses tu définis quelque chose qui va changer aprés, cette variable est un tableau
// déclaration d'une variable tableau

/********************************************************/
/********************************************************/
/* TESTER L'API : Tu vas chercher dans l'API tous les résultats de Deezer */
/********************************************************/
/********************************************************/

async function VaChercherDanslAPI() {
  /* La déclaration async function définit une fonction asynchrone (qui ne se fait pas en même temps.) qui renvoie un objet AsyncFunction. Une fonction asynchrone est une fonction
  qui s'exécute de façon asynchrone grâce à la boucle d'évènement en utilisant une promesse (Promise) comme valeur de retour.*/
  await fetch(url)
    // https://api.deezer.com/track/3135556    https://api.deezer.com/track/${trackIdNum}
    .then((response) => response.json())
    .then((response) => (resultats = response)); // Tu mets la réponse dans la variable : resultats
  // On teste le fetch pour voir si ça fonctionne
  //resultats = response.data
  console.log(resultats);
}
function AfficherResultat() {
  player.innerHTML = `<a href="title.html?id=${resultats.id}">
        <article id="article">
            <div class="title">${resultats}
            sdsk
            </div>
            
            </div>
      </article>
    </a>`;

  // console.log(resultats.id);
  // console.log(data);
}

VaChercherDanslAPI();
AfficherResultat();
