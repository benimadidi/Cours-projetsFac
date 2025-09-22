import {useState} from "react";

{/*
⚡ Hook useState

👉 Définition :
- Le hook useState permet de gérer l’**état local** d’un composant fonctionnel.
- Il crée une variable d’état qui survit aux re-renders et qui, quand elle change, déclenche un nouveau rendu.

👉 Syntaxe :
const [state, setState] = useState(valeurInitiale);

    - state : la valeur actuelle de l’état
    - setState : fonction pour mettre à jour l’état
    - valeurInitiale : valeur de départ (string, number, object, array…)

👉 Points importants :
- À chaque appel de setState, React re-render le composant avec la nouvelle valeur.
- Pour des états complexes (objets/arrays), il faut **créer une nouvelle référence** 
  (ex: via l’opérateur spread `...`) afin que React détecte le changement.
- useState fournit un espace mémoire conservé entre chaque re-render.
- ⚠️ Ne jamais appeler useState dans une condition, une boucle ou une fonction imbriquée → 
  il doit toujours être au niveau supérieur du composant.
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