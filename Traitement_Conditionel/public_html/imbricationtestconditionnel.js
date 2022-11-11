

// LE TRAITMENT CONDITIONNEL IMBRIQUE PEUT ETRE DANS DES CAS PLUS LONG

// C'EST LA REASON POUR LAQUELLE ON PEUT AVOIR RECOURS AUX INSTRUCTIONS DE SWITCH

// QUI VONT NOUS PERMETTRE DE REDUIRE LE NOMBRE DE BRANCHEMENT CONDITIONNEL

// VOIR L'EXEMPLE DES MOIS DE L'ANNEE


var mois=parseInt(prompt("Veuillez Entrez le numero du mois en cours"));
/*
// TEST DES CONDITIONS IMBRIQUEES

if(mois===1){
    console.log("Mois de Janvier");
}
else if(mois===2){
    console.log("Mois de Fevrier");
}
else if(mois===3){
    console.log("Mois de Mars");
}
else if(mois===4){
    console.log("Mois de Avril");
}
else if(mois===5){
    console.log("Mois de May");
}
else if(mois===6){
    console.log("Mois de Juin");
}
else if(mois===7){
    console.log("Mois de Juillet");
}
else if(mois===8){
    console.log("Mois de Aout");
}
else if(mois===9){
    console.log("Mois de Septembre");
}
else if(mois===10){
    console.log("Mois de Octobre");
}
else if(mois===11){
    console.log("Mois de Novembre");
}
else if(mois===12){
    console.log("Mois de Decembre");
}
else{
    console.log("Aucun mois correspond au nombre saisie");
} */

// LE TRAITEMENT CONDITIONNEL IMBRIQUE A BASE DE L'INSTRUCTION SWITCH

// OUVRIR LE BLOC DE SWITCH ; LEUR ROLE FONDAMENTALE EST GERER TOUS LES SORTES DE MENUS

switch(mois){
    case 1:
        console.log("Mois de Janvier");
        break;
    case 2:
        console.log("Mois de Fevrier");
        break;
    case 3:
        console.log("Mois de Mars");
        break;
    case 4:
        console.log("Mois de Avril");
        break;
    case 5:
        console.log("Mois de May");
        break;
    case 6:
        console.log("Mois de Juin");
        break;
    case 7:
        console.log("Mois de Juillet");
        break;
    case 8:
        console.log("Mois de Aout");
        break;
    case 9:
        console.log("Mois de Septembre");
        break;
    case 10:
        console.log("Mois de Octobre");
        break;
    case 11:
        console.log("Mois de Novembre");
        break;
    case 12:
        console.log("Mois de Decembre");
        break;
    default:
        console.log("Mois hors intervalle");
}