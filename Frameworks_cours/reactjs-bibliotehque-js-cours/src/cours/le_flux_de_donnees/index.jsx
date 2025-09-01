
{/*
📌 Flux de données - Formulaires en React

1. Concept clé : “Data Flow” (flux de données)
   - React fonctionne avec un **flux de données unidirectionnel** : du parent vers l’enfant via props.
   - Le parent possède le **state** (la “source de vérité”) et l’enfant reçoit ce state pour l’afficher ou le manipuler.

2. Exemple concret :
   const [isTermAccepted, setIsTermAccepted] = useState(false);

   - isTermAccepted = état du parent (true/false si l’utilisateur accepte les conditions)
   - setIsTermAccepted = fonction pour mettre à jour cet état

3. Passage au composant enfant :
   <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />

   - checked = valeur actuelle du parent
   - onCheck = fonction que l’enfant peut appeler pour demander au parent de mettre à jour son state

4. Dans le composant enfant :
   function CGUCheckbox({checked, onCheck}) {
       <input 
           type="checkbox"
           checked={checked}               // affichage selon le parent
           onChange={(e) => onCheck(e.target.checked)} // mise à jour du parent
       />
   }

   - e.target.checked = nouvelle valeur de la case (true/false)
   - onCheck(e.target.checked) → appelle setIsTermAccepted du parent
   - Le parent met à jour son state → le composant re-render → bouton activé/désactivé


*/}


import { useState } from "react";

function LefluxDeDonnees() {

    const [isTermAccepted, setIsTermAccepted] = useState(false);

    return <form>
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted}/>
        <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
    </form>
}

function CGUCheckbox({checked, onCheck}) {
    return  <div>
        <label>
            <input 
                type="checkbox" 
                onChange={(e) => {onCheck(e.target.checked)}} 
                checked={checked} />
            Accepter les conditions d'utilisation
        </label>
    </div>
}

export default LefluxDeDonnees