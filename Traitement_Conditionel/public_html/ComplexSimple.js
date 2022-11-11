

// DECLARATION DU SCRIPT QUI VA PRENDRE EN CHARGE LE CALCUL AUTOMATIQUE + - / *

function calc(){

var n1=parseFloat(document.getElementById("n1").value);
var n2=parseFloat(document.getElementById("n2").value);

// IL FAUT PENSER A DECLARER UNE OPERATION COMBOBOX

oper = document.getElementById("operateur").value;

// LE TEST CONDTIONNEL EST BASEE SUR LES OPERATEURS ARITHMETIQUES

if(oper==="+"){
    document.getElementById("result").value=n1+n2;
}
else if(oper==="-"){
    document.getElementById("result").value=n1-n2;

}
else if(oper==="/"){
    document.getElementById("result").value=n1/n2;

}
else if(oper==="x"){
    document.getElementById("result").value=n1*n2;

}
}
