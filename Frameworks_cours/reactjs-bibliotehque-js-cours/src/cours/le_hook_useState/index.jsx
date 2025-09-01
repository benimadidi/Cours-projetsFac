import {useState} from "react";

{/* 
Le hook useState

  - Le hook useState permet de gérer l'état d'un composant fonctionnel.
  - Il permet de créer des variables d'état qui, lorsqu'elles sont mises à jour, 
    provoquent le re-render (rafraîchissement) du composant.
  - Pour utiliser useState, il faut l'importer depuis React.
  - useState prend une valeur initiale en argument et retourne un tableau avec deux éléments :
      1. la valeur actuelle de l'état 
      2. une fonction pour mettre à jour cette valeur
  - Lorsqu'on appelle la fonction de mise à jour, React re-render le composant avec la nouvelle valeur d'état.
  -Lorsqu'on passe sur des elements complexes (objets, tableaux), il est important de créer une nouvelle référence
   (en utilisant par exemple l'opérateur de décomposition ... ) pour que React détecte le changement d'état.
  - useState fournit un espace mémoire qui sera partagé à chaque re-render du composant,
    évitant ainsi de perdre les données stockées.
    
  - Ne pas mettre dans une condition l'appel au hook useState, sinon React ne pourra pas suivre correctement l'état du composant.
  
*/}

function LeHookUseState (){

    const [person, setPerson ] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age : 18
    });

    const [count, setCount] = useState(0)

    console.log('render');

    const incrementAge = () => {
        setPerson({...person, age : person.age + 1});
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    return <>
        <p>Age de {person.firstName} : {person.age}</p>
        <button onClick={incrementAge}>Incrementer</button> <br /><br />
        <button onClick={incrementCount}>Incrementer : {count}</button>

    </>
}

export default LeHookUseState