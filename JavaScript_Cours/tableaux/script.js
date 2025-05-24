/*
Declarations de tableaux : - []
                           - new Array() 
                           - Array.of()

Acceder a un element du tableau : tab[indice] || tab.at(indice)

Array : Pour les tableaux
    .isArray() : Retourne vrai si c'est un tableau.

for(valeur of tableau){instructions}
    valeur : valeur de chaque element du tableau
    of : retourne les valeurs
    in : retourne les indices

tab.forEach() : Permet de parcourir un tableau
    (fonction qui prend en parametre la valeur et l'index)
        Ex : tab.forEach(function(value, index){})

str.split() : Retourne une chaine en un tableau de chaîne de caractères
    (separeur, limite)

tab.concat() : Concaténe deux tableaux
tab.join() : Retourne un tableau en une chaîne de caractères
    (separateur)

tab.push() : Ajoute un element a la fin du tableau
tab.unshift() : Ajoute un element au debut du tableau
tab.pop() : Supprime le dernier element du tableau
tab.shift() : Supprime le premier element du tableau
tab.fill() : Remplit le tableau
    (valeur, debut, fin exclu)
tab.map() : Retourne un nouveau tableau avec une fonction

tab.indexOf() : Retourne la position du premier caractère indiqué.
tab.lastIndexOf() : Retourne la position du dernier caractère indiqué.
tab.includes() : Retourne vrai si la chaîne contient la chaîne indiquée.
tab.find() : Retourne la position de la premiere valeur indiquée.
tab.findIndex() : Retourne la position du premier indice indiqué.
    Ex : tab.findIndex(value => value.length > 1);

tab.sort() : Tri le tableau
    LocaleCompare() : permet de comparer deux chaines de caractères
        Ex : tab.sort((a, b) => a.localeCompare(b));
tab.reverse() : Inverse le tableau
tab.slice() : Retourne une partie du tableau
    (debut, fin)
tab.splice() : Ajoute ou supprime des elements dans le tableau
    (element_debut, nombre_element_a_supprimer, element_a_ajouter)

tab.filter() : Filtre le tableau (avec une fonction)

*/

let someArray = ["Yannis", "Lonathan", "Snel", "muluba", "mahenzi", "Lexas"];
let anotherArray = [-2, 14, 1, 2, 6, 5, 56, -23, -2, 0];

console.log(someArray.map(value => value = "Inconnu"));