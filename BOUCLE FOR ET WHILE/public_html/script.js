// RAPPEL DE LA BOUCLE FOR
/*
var n = parseInt(prompt("Entrez la valeur du nombre d'iteration : "));


console.log("Execution de la boucle FOR :");

for(var i=1;i<=n;i++){
    console.log("Data", i);
}


console.log("Execution de la boucle WHILE :");

var i = 1;
while(i<=n){
    console.log("Data", i);
    i++;
}
*/


/*
var n = parseInt(prompt("Entrez la valeur du nombre d'iteration : "));
var s=0; */
/*
console.log("Calcul de la somme a l'interieur du boucle FOR :");

for(var i=1;i<=n;i++){
    s=s+i;
}
console.log("LA SOMME CALCULEE EST EN UTILISANT LA BOUCLE FOR: ", s);
*/

/*
console.log("Calcul de la somme a l'interieur du boucle WHILE :");
var i = 1;
while(i<=n){
    s=s+i;
    i++;
}
console.log("LA SOMME CALCULEE EN UTILISANT LA BOUCLE WHILE EST :", s);
*/


/*
console.log("Calcul de la somme des nombres pairs et impairs");

var n = parseInt(prompt("Entrez n :"));

sompair = 0;
somimpair = 0;
i = 1;

while(i<=n){
    if(i%2!=0){
        somimpair=somimpair+i;
    }
    else{
        sompair=sompair+i;
    }
    i++;
}
console.log("Somme Impair = ", somimpair);
console.log("Somme Pair :", sompair);
somtotal=somimpair+sompair;
console.log("Somme general = ", somtotal);

*/
/*
var n = parseInt(prompt("Entrez n :"));

s1=0;

for(i=1; i<=n; i++){
    s1=s1+i/n;
}
console.log("LA SOMME N°1 = ", s1.toPrecision(2));

console.log("-------------------deuxieme boucle-------------------");

s2=0;

for(i=0; i<=n; i++){
    s2=10**i;
}
console.log("LA SOMME N°2 = ", s2.toPrecision(2));
*/

/*
var n = parseInt(prompt("Entrez n :"));

s1=0;
i=1;
while(i<=n){
    s1=s1+i/n;
    i++;
    console.log("LA SOMME N°1 = ", s1.toPrecision(2));
}


console.log("------------------- deuxieme boucle -------------------");

s2=0;
i=0;
while(i<=n){
    s2=10**i;
    i++;
    console.log("LA SOMME N°2 = ", s2);
}
*/

/*
function triangle(){

    console.log("---------------------------- imbrication de boucle ----------------------------");

    var number=20;
    var output="";

    for(i=1;i<=number;i++){
        for(j=1;j<=i;j++){
            output+=j+"    ";
        }
        console.log(output);
        output="";
    }
}

triangle(10);

*/

// UTILISATION DE LA BOUCLE FOR ET WHILE POUR TRAITER LES BULLETINS DE NOTES

console.log("Traitement Bulletin de note eleve");
var n=parseInt(prompt("Entrez le nombre de note eleve :"));

// INITIALISATION DE LA VARIABLE SOMME NOTES
var somnote=0;
// DECLARATION DE LA BOUCLE FOR
for(i=1;i<=n;i++){
    var code=prompt("Entrez le code de l'eleve :");
    var np=prompt("Entrez le nom et prenom de l'eleve :");
    var adr=prompt("Entrez l'adresse de l'eleve :");
    var note=parseFloat(prompt("Entrez la note de l'eleve"));
    // LA TOTALISATION DES NOTES CONCERNANT LE PREMIER ELEVE
    somnote=somnote+note;
}

// AFFICHAGE DE SOMME DES NOTES