/*
    =======================
    🔧 OPÉRATEURS ET CONDITIONS EN JS
    =======================

    📏 Opérateurs de comparaison :
        ==  // Égal à
        === // Strictement égal (valeur et type)
        !=  // Différent de
        !== // Retourne vrai si l'une des deux valeurs est différente
        <   // Plus petit que
        >   // Plus grand que
        <=  // Plus petit ou égal à
        >=  // Plus grand ou égal à

    📌 Opérateurs logiques :
        &&  // ET logique
        ||  // OU logique

    🔑 Mots clés des conditions :
        if / else if / else
            // Structure conditionnelle
            // if (condition) { code }
            // else if (condition) { code }
            // else { code }

        switch / case / default
            // Structure de commutation
            // switch (expression) {
            //     case valeur1:
            //         code
            //         break;
            //     default:
            //         code
            // }

        Terniaire : (<condition>) ? <cas_vrai> : <cas_faux>;
*/

let name = "moi";
 
if(name === "Lexas") {
    console.log("Il s'appelle Lexas");
}
else if(name === "Jonathan"){
    console.log("Il s'appelle Jonathan");
}
else{
    console.log("Il a un autre nom") ;
}
/*---------------------------------------------------*/
let number = 6 ;

switch(number){
    case 0:
        document.writeln("Le nombre est 0");
        break;
    case 6:
        document.writeln("Le nombre est 6");
        break;
    default:
        alert("Le nombre n'est pas 0 ou 6");
}
/*---------------------------------------------------*/
let age = 18;
console.log((age === 18) ? "Tu es majeur" : "Tu n'es pas majeur");

