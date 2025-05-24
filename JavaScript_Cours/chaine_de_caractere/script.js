/*
str.charAt(index) : Retourne le caractère situé à la position indiquée.
str.length : Retourne la longueur de la chaîne.
str.concat(str2) : Concaténe deux chaînes.
str.starwith("caractere") : Retourne vrai si la chaîne commence par la chaîne indiquée.
str.endwith("caractere") : Retourne vrai si la chaîne finit par la chaîne indiquée.
str.padStart() : Ajoute des espaces ou des caractères devant la chaîne.
str.padEnd(indice, caractere de remplissage) : Ajoute des espaces ou des caractères derriere la chaîne.
str.trim() : Enlève les espaces devant et derriere la chaîne.
str.trimStart() : Enlève les espaces devant la chaîne.
str.trimEnd() : Enlève les espaces derriere la chaîne.
str.indexOf() : Retourne la position du premier caractère indiqué.
str.lastIndexOf() : Retourne la position du dernier caractère indiqué.
str.includes() : Retourne vrai si la chaîne contient la chaîne indiquée.

str.repeat() : Pour repeter une chaîne.
str.replace(search_value, replace_value) : Remplace la premiere occurencee d'un caractère.
str.replaceAll(search_value, replace_value) : Remplace toutes les occurences d'un mot.
str.slice() : Retourne une partie de la chaîne.
    (debut, fin)
str.substring(indice) : Retourne une partie de la chaîne.

str.toLowercase : Pour mettre en minuscule 
str.toUpperCase : Pour mettre en majuscule

str.split( separateur, limite[opt]) : Retourne un tableau de chaîne de caractères.

utiliser les gabarits de chaine de caractere => `` 
    On peut : 
        - mettre des variables, fonctions (${_})
        - mettre des chaines sur plusieurs lignes
*/

let nom = "Bonjour à tous !";
let chaine = nom.split(" ") ;

document.writeln(`[${chaine}]`) ;
