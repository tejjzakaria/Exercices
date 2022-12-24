


// BUTTON CALCULER
function global(){
    var salaire_base;
    var nbjt=document.getElementById('nbjt').value;
    var cj=document.getElementById('cj').value;

    salaire_base = nbjt*cj;

    document.getElementById('sb').value=salaire_base;
    

    var anc;
    var nb_annee_travaillee=document.getElementById('nbat').value;
    if(nb_annee_travaillee>=0 && nb_annee_travaillee<=1.99){
        taux_anc="0";
    }
    else if(nb_annee_travaillee>=2 && nb_annee_travaillee<=4.99){
        taux_anc="5";
    }
    else if(nb_annee_travaillee>=5 && nb_annee_travaillee<=9.99){
        taux_anc="10";
    }
    else if(nb_annee_travaillee>=10 && nb_annee_travaillee<=14.99){
        taux_anc="15";
    }
    else{
        taux_anc="20";
    }

    document.getElementById('txanc').value=taux_anc+"%";
    

    anc = (salaire_base*taux_anc)/100;

    document.getElementById('anc').value=anc;

    var salaire_brut;
    var prime_imposable=document.getElementById('pi').value;

    if(prime_imposable===""){
        salaire_brut = parseFloat(salaire_base+anc);
    }else{
        salaire_brut = salaire_base+anc+parseFloat(prime_imposable);
    }
    
    document.getElementById('s_brut').value=salaire_brut;

    var cnss_calculee;
    if(salaire_brut<6000){
        cnss_calculee=salaire_brut*0.0629;
    }
    else{
        cnss_calculee=6000*0.0629;
    }

    document.getElementById('cnss').value=cnss_calculee;

    var net_a_payer;
    var prime_non_imposable=document.getElementById('pni').value;

    if(prime_non_imposable===""){
        net_a_payer = salaire_brut+cnss_calculee;
    }
    else{
        net_a_payer = salaire_brut+cnss_calculee+parseFloat(prime_non_imposable);
    }

    document.getElementById('net').value=net_a_payer;


    // No required fields go empty validation

    if(nb_annee_travaillee==="" || nbjt==="" || cj===""){
        alert("un ou plusieurs des champs obligatoires sont laissés vides");
        document.getElementById('txanc').value="";
        document.getElementById('sb').value="";
        document.getElementById('anc').value="";
        document.getElementById('s_brut').value="";
        document.getElementById('cnss').value="";
        document.getElementById('net').value="";
    }
}


// BUTTON INITIALISER

function clearInput(){
    document.getElementById('mat').value="";
    document.getElementById('np').value="";
    document.getElementById('adr').value="";
    document.getElementById('num_cnss').value="";
    document.getElementById('num_cinr').value="";
    document.getElementById('echelle').value="";
    document.getElementById('service').value="";
    document.getElementById('dep').value="";
    document.getElementById('dt').value="";
    document.getElementById('nbjt').value="";
    document.getElementById('nbat').value="";
    document.getElementById('cj').value="";
    document.getElementById('pi').value="";
    document.getElementById('pni').value="";
    document.getElementById('txanc').value="";
    document.getElementById('sb').value="";
    document.getElementById('anc').value="";
    document.getElementById('s_brut').value="";
    document.getElementById('cnss').value="";
    document.getElementById('net').value="";
}