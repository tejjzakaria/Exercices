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


/*

// UTILISATION DE LA BOUCLE FOR ET WHILE POUR TRAITER LES BULLETINS DE NOTES

console.log("Traitement Bulletin de note eleve N°1");
var n=parseInt(prompt("Entrez le nombre de note eleve :"));
var code=prompt("Entrez le code de l'eleve :");
var np=prompt("Entrez le nom et prenom de l'eleve :");
var adr=prompt("Entrez l'adresse de l'eleve :");
    
// INITIALISATION DE LA VARIABLE SOMME NOTES
var somnote=0;
// DECLARATION DE LA BOUCLE FOR
for(i=1;i<=n;i++){
    var note=parseFloat(prompt("Entrez la note de l'eleve"));
    // LA TOTALISATION DES NOTES CONCERNANT LE PREMIER ELEVE
    somnote=somnote+note;
}

// AFFICHAGE DE SOMME DES NOTES

console.log("Le code : ", code);
console.log("Le nom et prenom : ", np);
console.log("L'adresse' : ", adr);
console.log("La somme des notes = ", somnote);

// CALCUL DE L'ELEVE
var moy=somnote/n;

console.log("La moyenne de l'eleve est :", moy);

// TEST CONDITIONNEL POUR AFFICHER LA MENTION DE L'ELEVE

if(moy<10){
    console.log("ELEVE NON ADMIS");
}
else if(moy>=10 && moy<12){
    console.log("ELEVE ADMIS AVEC LA MENTION : PASSABLE");
}
else if(moy>=12 && moy<14){
    console.log("ELEVE ADMIS AVEC LA MENTION : ASSEZ BIEN");
}
else if(moy>=14 && moy<16){
    console.log("ELEVE ADMIS AVEC LA MENTION : BIEN");
}
else if(moy>=16 && moy<18){
    console.log("ELEVE ADMIS AVEC LA MENTION : T.BIEN");
}
else if(moy>=18 && moy<=20){
    console.log("ELEVE ADMIS AVEC LA MENTION : EXECELLENT");
}
else{
    console.log("UNE ERREUR EST SERVENUE");
}


*/









/*

console.log("Traitement Bulletin de note eleve N°2");
var n=parseInt(prompt("Entrez le nombre de note eleve :"));
var code=prompt("Entrez le code de l'eleve :");
var np=prompt("Entrez le nom et prenom de l'eleve :");
var adr=prompt("Entrez l'adresse de l'eleve :");
var men;
    
// INITIALISATION DE LA VARIABLE SOMME NOTES
var somnote=0;
// DECLARATION DE LA BOUCLE FOR
for(i=1;i<=n;i++){
    var note=parseFloat(prompt("Entrez la note de l'eleve"));
    // LA TOTALISATION DES NOTES CONCERNANT LE PREMIER ELEVE
    somnote=somnote+note;
}

// AFFICHAGE DE SOMME DES NOTES

console.log("Le code : ", code);
console.log("Le nom et prenom : ", np);
console.log("L'adresse' : ", adr);
console.log("La somme des notes = ", somnote);

// CALCUL DE L'ELEVE
var moy=somnote/n;

console.log("La moyenne de l'eleve est :", moy);

// TEST CONDITIONNEL POUR AFFICHER LA MENTION DE L'ELEVE

if(moy<10){
    men="ELEVE NON ADMIS";
}
else if(moy>=10 && moy<12){
    men="ELEVE ADMIS AVEC LA MENTION : PASSABLE";
}
else if(moy>=12 && moy<14){
    men="ELEVE ADMIS AVEC LA MENTION : ASSEZ BIEN";
}
else if(moy>=14 && moy<16){
    men="ELEVE ADMIS AVEC LA MENTION : BIEN";
}
else if(moy>=16 && moy<18){
    men="ELEVE ADMIS AVEC LA MENTION : T.BIEN";
}
else if(moy>=18 && moy<=20){
    men="ELEVE ADMIS AVEC LA MENTION : EXECELLENT";
}
else{
    men="UNE ERREUR EST SERVENUE";
}
// AFFICHAGE DES BULLETINS
console.log(code,np,adr,moy,men);
document.writeln('Code Eleve :'+''+code+'<br>','Nom et Prenom :'+''+np+'<br>','Adresse :'+''+adr+'<br>','Moyenne :'+''+moy+'<br>',"Mention :"+''+men);

*/











console.log("Traitement Bulletin de note eleve N°2");
var n=parseInt(prompt("Entrez le nombre de note eleve :"));
var code=prompt("Entrez le code de l'eleve :");
var np=prompt("Entrez le nom et prenom de l'eleve :");
var adr=prompt("Entrez l'adresse de l'eleve :");
var men;
    
// INITIALISATION DE LA VARIABLE SOMME NOTES
var somnote=0;
// DECLARATION DE LA BOUCLE WHILE
i=1;
while(i<=n){
    var note=parseFloat(prompt("Entrez la note de l'eleve"));
    // TEST CONDITIONNEL SUR LA NOTE SAISIE
    if(note>0 && note<=20){
        somnote=somnote+note;
    }
    else{
        console.log("NOTE SAISIE HORS INTERVALLE");
        break;
    }

    // LA TOTALISATION DES NOTES CONCERNANT LE PREMIER ELEVE
    
    i++;
}

// AFFICHAGE DE SOMME DES NOTES
console.log("Le code : ", code);
console.log("Le nom et prenom : ", np);
console.log("L'adresse' : ", adr);
if(note>0 && note<=20){
    console.log("La somme des notes = ", somnote);
}
else{
    console.log("NOTE SAISIE HORS INTERVALLE");
}
// CALCUL DE L'ELEVE
var moy=somnote/n;
if(note>0 && note<=20){
    console.log("La moyenne de l'eleve est :", moy);
}
else{
    console.log("NOTE SAISIE HORS INTERVALLE");
}
// TEST CONDITIONNEL POUR AFFICHER LA MENTION DE L'ELEVE

if(moy<10){
    men="ELEVE NON ADMIS";
}
else if(moy>=10 && moy<12){
    men="ELEVE ADMIS AVEC LA MENTION : PASSABLE";
}
else if(moy>=12 && moy<14){
    men="ELEVE ADMIS AVEC LA MENTION : ASSEZ BIEN";
}
else if(moy>=14 && moy<16){
    men="ELEVE ADMIS AVEC LA MENTION : BIEN";
}
else if(moy>=16 && moy<18){
    men="ELEVE ADMIS AVEC LA MENTION : T.BIEN";
}
else if(moy>=18 && moy<=20){
    men="ELEVE ADMIS AVEC LA MENTION : EXECELLENT";
}
else{
    men="UNE ERREUR EST SERVENUE";
}
// AFFICHAGE DES BULLETINS
if(note>0 && note<=20){
    console.log(code,np,adr,moy,men);
}
else{
    document.writeln("NOTE SAISIE HORS INTERVALLE");
}


if(note>0 && note<=20){
    document.writeln('Code Eleve :'+''+code+'<br>');
    document.writeln('Nom et Prenom :'+''+np+'<br>');
    document.writeln('Adresse :'+''+adr+'<br>');
    document.writeln('Moyenne :'+''+moy+'<br>');
    document.writeln('Mention :'+''+men+'<br>');
    
    
}
else{
    document.writeln("NOTE SAISIE HORS INTERVALLE");
}


