// declaration de la fonction print   


function Print(){
    // declaration des variables programmes

    var mdp,sb,anc,prime,sbrut,cnss,net;

    var mat = document.getElementById("mat").value;
    var np = document.getElementById("np").value;
    var adr = document.getElementById("adr").value;
    var ncnss = document.getElementById("ncnss").value;
    var cj = document.getElementById("cj").value;
    var nbjt = document.getElementById("nbjt").value;
    var nbat = document.getElementById("nbat").value;
    
    // affichage des resultats dans la console

    console.log(mat);
    console.log(np);
    console.log(adr);
    console.log(ncnss);
    console.log(cj);
    console.log(nbjt);
    console.log(nbat);

    // affichage des resultats dans une page HTML
    document.writeln("<body style='background-color: grey;'>");
    document.writeln("<h1 style='text-align: center;'>Bulletin des salaires"+'</h1>'+'<br></br>');
    document.writeln('<fieldset>');
    document.writeln("<h3 style='text-align: center;'>Matricule :"+mat+'</h3>'+'<br></br>');
    document.writeln("<h3 style='text-align: center;'>Nom & Prenom :"+np+'</h3>'+'<br></br>');
    document.writeln("<h3 style='text-align: center;'>Adresse :"+adr+'</h3>'+'<br></br>');
    document.writeln("<h3 style='text-align: center;'>N° CNSS :"+ncnss+'</h3>'+'<br></br>');
    document.writeln("<h3 style='text-align: center;'>Cout Journalier :"+cj+'</h3>'+'<br></br>');
    document.writeln("<h3 style='text-align: center;'>Nombre des jours travaillees :"+nbjt+'</h3>'+'<br></br>');
    document.writeln("<h3 style='text-align: center;'>Numero d'annees travaillees"+nbat+'</h3>'+'<br></br>');
    document.writeln('</fieldset>');
    document.writeln("</body>");
    
    /*
    // test de connexion au salaires

    if(mdp=="12345@"){
        alert("Mot de passe correcte");
    }
    else{
        alert("Mot de passe est incorrecte");
    }
    */
}