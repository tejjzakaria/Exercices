
// L'EVENEMENT ONLOAD DE LA FENTRE WINDOW SE DECLANCHE AU CHARGEMENT DE LA FENETRE
// LA FONCTION FLECHE ASSOCIE A CET EVENEMENT SE DECLENCHE AVEC L'EVENEMENT
window.onload = ()=>{
    // ON VA ECOUTER UN EVENMENT SCROLL (DECLENCHER LE SCROLLE) AVEC LA FONCTION FLECHEE
    window.addEventListener("scroll", ()=>{
        // TRAITEMENT DU CONTENU DE NOTRE FONCTION FLECHE
        // CALCULER LA HAUTEUR DE LA PAGE EN FONCTION DE LA HAUTEUR DE LA FENETRE
        let hauteur=document.documentElement.scrollHeight - window.innerHeight;
        // CALCULER LA POSITION VERTICAL DE LA FENETRE SELON L'AXE DES Y
        let positon=window.scrollY;
        // CALCULER DE LA LARGEUR DU DOCUMENT EN COURS C'EST A DIRE NOTRE PAGE
        let largeur=document.documentElement.scrollWidth;
        // DONNER LA FORMULE DE CALCUL DE LA BARRE PROGRESSIVE
        let barre=positon/hauteur*largeur;
        document.getElementById("barre").style.width=barre +"px";
    })
} 