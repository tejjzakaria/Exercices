/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


/* creation d'une fonction qui gere le onfocus et le onblur pointeur */

function search(chaine){
    console.log("Vous recherchez : "+ " " +chaine);
}    

function etudiant(){
    /* traitement des notes etudiant de classe */
    /* Declaration des variables programme javascript */
    var nom=prompt("Donner le nom de l'etudiant :");
    var prenom=prompt("Donner le prenom de l'etudiant :");
    var datenaissance=parseInt(prompt("Donner la date de naissance de l'etudiant :"));
    var note1=parseFloat(prompt("Donner la note n°1 :"));
    var note2=parseFloat(prompt("Donner la note n°2 :"));
    var note3=parseFloat(prompt("Donner la note n°3 :"));
    var note4=parseFloat(prompt("Donner la note n°4 :"));

    /* Affichage des donnees dans la console */
    console.log("Nom........ : "+nom);
    console.log("Prenom........ : "+prenom);
    console.log("Date de naissance........ : "+datenaissance);
    console.log("La note 1........ : "+note1);
    console.log("La note 2........ : "+note2);
    console.log("La note 3........ : "+note3);
    console.log("La note 4........ : "+note4);
} 

// traitement de la fonction javascript qui gere les deux bouttons manuels et automatique 
// Declaration des variables de la fonction slider
// Initialisation de la variable compteurImage a 1

var compteurImage=1;
var totalImage=25;

// Declaration de la fonction slider
function slider(x){
    // le x est un parametre de la fonction qui compte les images
    var image=document.getElementById("img");
    // incrementation du compteur avec x
    compteurImage=compteurImage+x;
    // appel de l'image
    image.src="fichiers02/clinique"+compteurImage+".jpg"
    // Test conditionel sur le compteur des images
    if(compteurImage>=totalImage){
        compteurImage=1;
    }
    if(compteurImage<1){
        compteurImage=totalImage;
    }
}


//traitement automatique de la fonction slider
function sliderAuto(){
    // le x est un parametre de la fonction qui compte les images
    var image=document.getElementById("img");
    // incrementation du compteur avec x
    compteurImage=compteurImage+1;
    // appel de l'image
    image.src="fichiers02/clinique"+compteurImage+".jpg"
    // Test conditionel sur le compteur des images
    if(compteurImage>=totalImage){
        compteurImage=1;
    }
    if(compteurImage<1){
        compteurImage=totalImage;
    }
}

// fonction automatique
window.setInterval(sliderAuto,2000);