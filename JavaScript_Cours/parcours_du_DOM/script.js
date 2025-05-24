/*
DOM : Interface pour manipuler le contenu d'une page web.

document : Accès aux éléments de la page.
    .cookie : Accès aux cookies.
    .images : Accès aux images.
    .links : Accès aux liens.
    .scripts : Accès aux scripts.
    .documentElement : Accède à <html>.
    .head : Accède à <head>.
    .body : Accède à <body>.
    .forms : Accède à tous les formulaires. (HTMLFormControlCollection)
        .nom_formulaire : Accede a un formulaire specifique 

    NOEUD :  
        .childNodes : Accède aux enfants -> nodeList (à parcourir avec for...of)
        .firstChild : Accède au premier enfant
        .lastChild : Accède au dernier enfant 
        .parentNode : Accède au parent
        .nextSibling : Accède au sibling(enfants) suivant
        .previousSibling : Accède au sibling(enfants) précedent

        .children : Accède aux elements enfants
        .firstElementChild : Accède au premier element enfant
        .lastElementChild : Accède au dernier element enfant
        .parentElement : Accède à l'élément parent
        .previousElementSibling : Accède à l'élément sibling(précedent)
        .nextElementSibling : Accède à l'élément sibling(suivant)

    Acceder a un noeud par son id : Ex : console.log(slt)

    TABLEAUX:
        id.rows : Accede aux lignes
        id.caption : Accede au titre du tableau  
        id.tHead : Accede à la partie en haut du tableau
        id.tBody : Accede au corps du tableau 
        id.tFoot : Accede au pied du tableau

        cells : Accede aux lignes d'un tableau (id.rows[0].cells[0])
            
    FORMULAIRES :
        document.forms.<name> : Accede a un formulaire specifique
            .elements : Accede a tous les champs du formulaire
                .nom_balise(Ex: name="user_name") : Accede a un champ specifique

                lorsqu'il y a des options (<select>) : 
                    .options
*/

const myForm = document.forms.infoform;

console.log(myForm.elements.user_lang.options[1]);
console.log(document.scripts)