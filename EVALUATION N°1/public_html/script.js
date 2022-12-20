

function Verif(){
    var input_np = document.getElementById('input1');
    var input_cin = document.getElementById('input2');


    if(input_np == ""){
        console.log("Champ de Nom et Prenom ne doit pas etre vide");
    }
    else if(input_cin == ""){
        console.log("Champ du CIN doit pas etre vide");
    }
    else{
        console.log("Inscription achevée !!");
    }
}