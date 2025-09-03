
/*

  - Le hook useEffect permet de générer les effets de bord dans un composant fonctionnel lorsqu'il est monté ou mis à jour.
  - Il permet d'effectuer des actions lorsque le composant est monté ou mis à jour.
  - Pour utiliser useEffect, il faut l'importer depuis React.
  - useEffect prend deux arguments : une fonction et un tableau de dépendances.
        1. La fonction est exécutée après chaque rendu du composant.
        2. Le tableau de dépendances permet de s'assurer que la fonction soit exécutée seulement lorsque certaines valeurs changent.
        3. Mettre une fonction de nettoyage (cleanup) dans le return de la fonction passée à useEffect pour éviter les fuites de mémoire.

  - Si le tableau de dépendances est vide, la fonction sera exécutée seulement une fois, lors du montage du composant.
  - Si le tableau de dépendances contient des variables, la fonction sera exécutée à chaque fois que l'une de ces variables change.
  - Si le tableau de dépendances n'est pas fourni, la fonction sera exécutée après chaque rendu du composant.

  - Ne pas mettre dans une condition l'appel au hook useEffect, sinon React ne pourra pas suivre correctement l'état du composant.

*/

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