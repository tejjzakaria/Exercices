// Traitement d'une fonction qui explique la base fondamentale des fonctions javascript

// f=x**2+y+z



function calcul(f,x,y,z){
    f=x**2+y+z; // declaration des parametres de la fonction f
    return f; 
}

// la declaration des arguments de la fonction qui vont etre appele

X=parseInt(prompt("Donnez la valeur de X :"));
Y=parseInt(prompt("Donnez la valeur de Y :"));
Z=parseInt(prompt("Donnez la valeur de Z :"));

F=X**2+Y+Z;

// appel de la fonction calcul

console.log("La valeur de X est : "+X);
console.log("La valeur de Y est : "+Y);
console.log("La valeur de Z est : "+Z);
console.log("La valeur de F est : "+F); 

