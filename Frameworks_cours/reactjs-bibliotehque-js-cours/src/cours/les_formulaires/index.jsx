{/*
    
    Les Formulaires en React

📌 État contrôlé (Controlled Component)
- Un formulaire est "contrôlé" quand sa valeur est gérée par le state (via useState).
- L’input ne gère pas sa valeur tout seul, il dépend du state → value={state}.
- On utilise un onChange pour mettre à jour le state quand l’utilisateur tape.

Exemple :
    const [name, setName] = useState("");
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

📌 État non contrôlé (Uncontrolled Component)
- L’input garde sa propre valeur (DOM gère directement).
- On accède à la valeur via une ref (useRef).
- Moins utilisé en React car plus difficile à synchroniser.

Exemple :
    const inputRef = useRef();
    <input type="text" ref={inputRef} />
    // valeur obtenue avec inputRef.current.value

📌 Points importants :
- Toujours donner un attribut `name` aux champs (utile pour identification).
- On peut afficher en direct la valeur du state → {state}.
- Pour les cases à cocher, utiliser `checked={state}` et onChange avec `e.target.checked`.
- Pour désactiver un bouton, on peut conditionner avec le state → disabled={!state}.
    
*/}


import { useState } from "react";

function LesFormulaires() {

    const [firstame, setFirstname] = useState('John doe');


    const handleChange = (e) => {
        setFirstname(e.target.value);
    }

    const reset = () => {
        setFirstname('');
    }

    return <>
        <form>
            <input type="text" name="firstame" value={firstame} onChange={handleChange} />
            {firstame} <br />
            <button onClick={reset} type="button" >vider le champ</button>
        </form>
    </>
}

export default LesFormulaires;