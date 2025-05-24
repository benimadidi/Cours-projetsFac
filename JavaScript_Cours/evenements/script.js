/*
Gestion des événements :

    - onclick : Definit une action au clic sur l'element 
    - onmouseover : Definit une action au survol de l'element
    - onmouleave : Definit une action au sortir de l'element
    - keydown : Definit une action au clic sur une touche du clavier
        event.key : Permet de savoir quelle touche a ete appuyée

    - addEventListener : Méthode moderne pour attacher un ou plusieurs événements à un élément.
        Syntaxe : element.addEventListener(event, callback);
        - event : Type d'événement (ex. "click", "mouseover", "keydown",...).
        - callback : Fonction à exécuter lorsque l'événement est déclenché.


    - event.stopPropagation() : Empeche la propagation de l'événement vers les éléments parent
    Cas utile : Quand on clique sur un bouton, on veut qu'il ne soit pas envoyé vers le formulaire
    - event.preventDefault() : Empeche la propagation de l'événement vers les éléments parent
    Cas utile : Quand on clique sur un bouton, on veut qu'il ne soit pas envoyé vers le formulaire


*/


let someButton = document.querySelector('button');
// console.log(someButton);

someButton.addEventListener('click', (event) =>{
    console.log(event);
    console.log("Clic sur le bouton");
});

/*----------------------------------------------------------------*/
someForm = document.querySelector('form');

// someForm.addEventListener('mouseover', (event) =>{
//     console.log(event);
//     console.log("Survol du formulaire");
// });

// someForm.addEventListener('mouseleave', (event) =>{
//     console.log(event);
//     console.log("Sortie du formulaire");
// });

/*----------------------------------------------------------------*/
window.addEventListener('keydown', (event) =>{
    if(event.key == "g")
        console.log("Tu as gagné !!");
    else
        console.log(event.key);

});