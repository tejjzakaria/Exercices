// traitement du questionnaire

function verif()
{
    if(document.f.nom.value===""){ alert("La saisie du Nom & Prenom est obligatoire !"); return false;}
    if(document.f.cin.value===""){ alert("La saisie du CIN est obligatoire !"); return false;}
    
    if(document.f.email.value===""){ alert("La saisie de l'adresse Email est obligatoire !"); return false;}
    
    if(document.f.cin.value.length !== 8 || document.f.cin.value < "0"){ alert("CIN faut etre 8 chiffres"); return false;}

    if(document.f.email.value.indexOf("@") == -1){ alert("Adresse email doit contenir @"); return false}
    

    var n=0;
    var taille=document.f.list.options.length;

    for(i=0;i<taille;i++){
        if(document.f.list[i].selected){
            n+=1;
        }
    }
    if(n>2){
        alert("Max 2 selections"); return false;
    }
    if(n===0){
        alert("Aucune selection faite"); return false;
    }
    /*
    if(document.f.email.value.match("@")){
        return true;
    }else{
        alert("Adresse email doit contenir @");
    }
    */

/* -------------------------------------------------------------------------------------------------------------------------------------------------------- */     
    
    /*
    var v=1;
    var taille=document.f.cin.value.length;

    for(i=0;i<taille;i++){
        if(document.f.cin.value.charAt(i)<"0" || document.f.cin.value.charAt(i)>"9" || taille!==8){ v=-1;}
    }
    if(v===-1){alert("Le numero CIN que vous avez taper est incorrect"); return false;}
    */

}
    
