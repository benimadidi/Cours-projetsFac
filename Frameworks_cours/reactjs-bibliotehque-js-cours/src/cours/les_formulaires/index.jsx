{/*
    
Les Formulaires en React

État contrôlé (Controlled Component)
   - Un formulaire en React est dit "contrôlé" quand sa valeur est gérée par le state (useState).
   - L’input ne garde pas sa valeur tout seul, il dépend du state → value={state}.


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