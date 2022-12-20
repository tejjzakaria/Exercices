// LE DOM A POUR OBJECTIF DE FAIRE APPEL A TOUS LES ELEMENTS HTML POUR SAVOIR LEURS TYPE EXACT,
// POUR AFFICHER LE CONTENU DE L'ID APPELE, POUR MODIFIER LE CONTENU D'UNE BALISE (TAG) SANS AVOIR RECOURS A LA PAGE HTML
// PARMI LES METHODES UTILISEES NOUS AVONS : 
// - le GetElementById - le GetElementsByTagName (une balise HTML)
// - le innerHTML pour afficher le contenu de d'ID ou de la TAG.

var dom = document.getElementById('para1')[0];
alert("le type de notre ID : "+dom);
console.log("le type de notre ID : "+dom);
document.writeln("le type de notre ID : "+dom);