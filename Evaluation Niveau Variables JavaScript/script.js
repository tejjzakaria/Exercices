

/* var a,b,c,d,e,j,k,l,X,Y,Z,E;

a=parseFloat(prompt("Entrez la valeur de a :"));
b=parseFloat(prompt("Entrez la valeur de b :"));
c=parseFloat(prompt("Entrez la valeur de c :"));
d=parseFloat(prompt("Entrez la valeur de d :"));
e=parseFloat(prompt("Entrez la valeur de e :"));
j=parseFloat(prompt("Entrez la valeur de j :"));
k=parseFloat(prompt("Entrez la valeur de k :"));
l=parseFloat(prompt("Entrez la valeur de l :"));

X=a+b-c;

Y=(d+e)*X;

Z=(j+k+l)/(X+Y);

E=(X*Y)/Z;

console.log("X = "+X);

console.log("Y = "+Y);

console.log("Z = "+Z);

console.log("E = "+E);

document.writeln("X = "+X+'<br><br>');
document.writeln("Y = "+Y+'<br><br>');
document.writeln("Z = "+Z+'<br><br>');
document.writeln("E = "+E+'<br><br>');  */


function calcul(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var d = parseFloat(document.getElementById("d").value);
    var e = parseFloat(document.getElementById("e").value);
    var j = parseFloat(document.getElementById("j").value);
    var k = parseFloat(document.getElementById("k").value);
    var l = parseFloat(document.getElementById("l").value);

    var X,Y,Z,E;

    X=a+b-c;

    Y=(d+e)*X;

    Z=(j+k+l)/(X+Y);

    E=(X*Y)/Z;


    document.writeln("<h1 style='font-family: Poppins; font-size: 40px; text-align: center; margin-top: 20%;'>Voici les resultats :"+'</h1>');
    
    document.writeln("<h1 style='margin: 0 auto; margin-bottom: 10px; border-radius: 10px; font-family: Poppins; font-size: 30px; color: #fff; background-color: rgb(29, 29, 29); padding: 10px; text-align: center; width: 350px'>X = "+X+'</h1>');
    document.writeln("<h1 style='margin: 0 auto; margin-bottom: 10px; border-radius: 10px; font-family: Poppins; font-size: 30px; color: #fff; background-color: rgb(29, 29, 29); padding: 10px; text-align: center; width: 350px'>Y = "+Y+'</h1>');
    document.writeln("<h1 style='margin: 0 auto; margin-bottom: 10px; border-radius: 10px; font-family: Poppins; font-size: 30px; color: #fff; background-color: rgb(29, 29, 29); padding: 10px; text-align: center; width: 350px'>Z = "+Z+'</h1>');
    document.writeln("<h1 style='margin: 0 auto; margin-bottom: 10px; border-radius: 10px; font-family: Poppins; font-size: 30px; color: #fff; background-color: rgb(29, 29, 29); padding: 10px; text-align: center; width: 350px'>E = "+E+'</h1>');
}





// change page color in javascript?
