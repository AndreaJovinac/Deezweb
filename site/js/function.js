/*************************************************************/
/*************************************************************/
/** Convertir le durée d'une musique
 ** **/
/*************************************************************/
/*************************************************************/
function convertTime(duration) {
  // la fonction convertTime prends en paramètre la variable "duration"
  duration = Number(duration);
  // La Number()méthode convertit une valeur en nombre.

  let min = Math.floor((duration % 3600) / 60);
  let sec = Math.floor((duration % 3600) % 60);

  return min + " min " + sec;
}
