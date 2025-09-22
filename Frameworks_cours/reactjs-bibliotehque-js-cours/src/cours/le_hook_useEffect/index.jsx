
{/*
⚡ Hook useEffect

👉 Définition :
- Le hook useEffect permet de gérer les effets de bord dans un composant fonctionnel.
- Un effet de bord (side effect) = toute opération en dehors du rendu pur de l’UI :
    - Récupérer des données depuis une API
    - Accéder au localStorage
    - Manipuler le DOM
    - Définir un intervalle ou un timer

👉 Syntaxe :
useEffect(() => {
    // code exécuté après le rendu
    return () => {
        // fonction de nettoyage (cleanup), exécutée avant le démontage
    }
}, [dépendances]);

    - 1er argument : une fonction (effet à exécuter).
    - 2ème argument : tableau de dépendances.
        - []  → exécute seulement au montage (comme componentDidMount).
        - [var] → exécute à chaque fois que "var" change.
        - rien → exécute après chaque rendu.

👉 Bonnes pratiques :
- Toujours préciser les dépendances pour éviter des bugs.
- Ne jamais mettre l’appel de useEffect dans une condition.
- Utiliser la fonction de nettoyage pour éviter les fuites de mémoire (ex : clearInterval).
*/}

import { useEffect } from "react"
import { useState } from "react"



function LeHookUseEffect() {

    const [showInput, setShowInput] = useState(true)

    return <div className="container my-3 stack">
            <Checkbox checked={showInput} onChange={setShowInput} id="titleshow" label="Afficher le champ titre"/>
            {showInput && <EditTitle />}
            <div style={{height: "300vh"}}></div>
        </div>
}

function EditTitle() {

    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")


    useEffect(() => {
        const OriginalTitle = document.title;
        return () => {
            document.title = OriginalTitle;
        }
    }, [])
    
    useEffect(() => {
        document.title = title ? title : "React App"
    }, [title])


    return <div className="vstack gap-2">
        <Input placeholder="Modifier le titre" value={title} onChange={setTitle} />
        <Input placeholder="Prénom" value={firstName} onChange={setFirstName} />
    </div>
}




/*-------------------------------------------------------------------------*/
function Input ({placeholder, value, onChange}) {
    return <div>
        <input type="text" className="form-control" value={value} placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}} />
    </div>
}

function Checkbox({checked, onChange, label, id}) {
    return <div className="form-check">
        <input id={id} type="checkbox" className="form-check-input" checked={checked} onChange={(e) => {onChange(e.target.checked)}}/>
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}

export default LeHookUseEffect