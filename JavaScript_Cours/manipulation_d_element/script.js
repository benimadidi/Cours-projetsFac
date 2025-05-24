/*
    Collections DOM :
        - HTMLCollection : Contient uniquement des éléments HTML.
        - NodeList : Contient tout type de nœud (éléments, texte, commentaires...).
 
    Accès aux éléments HTML :
        - document.getElementById('<id>') : Par identifiant.
        - document.getElementsByName('<name>') : Par attribut "name" -> NodeList.
        - document.getElementsByTagName('<tagname>') : Par balise -> HTMLCollection.
        - document.getElementsByClassName('<class>') : Par classe -> HTMLCollection.
        - document.querySelector('<selector>') : Premier élément via un sélecteur CSS.
        - document.querySelectorAll('<selector>') : Tous les éléments via un sélecteur CSS.

    Modification du contenu :
        - innerHTML : Contenu HTML interne (inclut les balises).
        - innerText : Texte visible interne (exclut les balises).
        - outerHTML : Élément complet + contenu (inclut les balises).
        - outerText : Texte brut remplaçant l'élément.

    Gestion des attributs :
        - getAttribute('<name>') : Récupère la valeur d'un attribut.
        - setAttribute('<name>', '<value>') : Ajoute ou modifie un attribut.
        - hasAttribute('<name>') : Vérifie si un attribut existe.
        - setAveAttribute('<name>') : Supprime un attribut.
        - removeAttribute('<name>') : Supprime un attribut.
        - dataset : Accède aux attributs `data-<name>`.
        
    Création et manipulation d'éléments :
        - document.createElement('<tagname>') : Crée un nouvel élément.
        - append(element) : Ajoute à la fin d'un nœud.
        - prepend(element) : Ajoute au début d'un nœud.
        - replaceWith(element) : Remplace un nœud par un autre.
        - insertAdjacentHTML('<position>', '<html>') : Ajoute du HTML autour d'un élément.
            Positions possibles :
                - "beforebegin" : Avant l'élément.
                - "afterbegin" : Au début de l'élément.
                - "beforeend" : Avant la fin de l'élément.
                - "afterend" : Après l'élément.


    Class :
        - <element>.className = '<valeur>' : Modifie ou ajoute une classe 
        - <element>.classList.add('<valeur>') : Ajoute une classe
        - <element>.classList.remove('<valeur>') : Supprime une classe
        - <element>.classList.contains('<valeur>') : Vérifie si une classe existe
        - <element>.classList.replace('<valeur1>', '<valeur2>') : Remplace une classe
        - <element>.classList.toggle('<valeur>', condition) : Ajoute ou supprime une classe
*/

const element = document.getElementsByClassName('blue')[0];

// const someParagraph = document.createElement("p");
// someParagraph.innerHTML = "Hello world";
// someParagraph.className = "red";

document.getElementById('slt').insertAdjacentHTML("afterbegin", "Bonjour à tous ");

