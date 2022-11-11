


// DECLARATION D'UNE FONCTION SIMPLE FAISANT LA COMPARAISON ENTRE DEUX VALEURS SAISIES PAR L'UTILISATEUR

var a = parseFloat(prompt("Veuillez Entrez La Valeur De A :"));
var b = parseFloat(prompt("Veuillez Entrez La Valeur De B :"));

// TEST CONDITIONNEL SIMPLE SUR LE SIGNE DE A ET B

if(a*b>=0){
    console.log("A = "+a);
    console.log("B = "+b);
    console.log("A et B sont de meme signe");
    console.log("PRODUIT = "+a*b);
}

// LE TRAITEMENT DU CAS CONTRAIRE

else{
    console.log("A = "+a);
    console.log("B = "+b);
    console.log("A et B ne sont pas de meme signe");
    console.log("PRODUIT = "+a*b);
}



