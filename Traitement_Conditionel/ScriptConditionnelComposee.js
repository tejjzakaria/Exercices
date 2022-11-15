// TRAITEMENT CONDITIONNEL COMPOSEE AVEC LES OPERATEURS DE LOGIQUE "AND" ET "OR"

/*
var x,y;




x=parseInt(prompt("Entrez la valeur de x :"));
y=parseInt(prompt("Entrez la valeur de y :"));


// TEST CONDITONNEL AVEC L'OPERATEUR LOGIQUE "AND"

if(x===10 && y===10){
    console.log("True = 1");
}
else{
    console.log("False = 0");
}
*/

/*
var a,b,c,delta,x,x1,x2;

a = parseInt(prompt("Entrez la valeur a : "));
b = parseInt(prompt("Entrez la valeur b : "));
c = parseInt(prompt("Entrez la valeur c : "));

console.log(+a+"x²"+"+"+b+"x"+"+"+c);

delta = (b*b)-(4*a*c);

console.log("DELTA = "+delta);


// PREMIER CAS
if(delta < 0){
    console.log("Cette equation n'a pas de solution");
}

// DEUXIEME CAS
else if(delta === 0){
    x = -b/2*a;
    console.log("L'equation a une seule solution : x = "+x);
}

// TROISIEME CAS
else if(delta > 0){
    x1 = (-b-Math.sqrt(delta))/2*a;
    x2 = (-b+Math.sqrt(delta))/2*a;
    console.log("L'eqaution a deux solutions : x1 = "+x1.toPrecision(2)+" | "+"x2 = "+x2.toPrecision(2));
}
*/

function calc(){

    var sexe,age;

    sexe = document.getElementById("sexe").value;
    age = document.getElementById("age").value;

    

    if(sexe==="H" && age >= "20" || sexe==="F" && age >= "18" && age <= "35"){
        console.log("imposable");
    }
    else {
        console.log("non imposable");
    }


}