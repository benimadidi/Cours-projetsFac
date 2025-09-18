
/*

- memo() : permet de faire de la memorisation pour eviter de le rendre un composant plusieurs fois.
    Il faut le mettre autour de la fonction a memoriser.

- useCallback est un hook qui fonctionnne un peu comme le hookUsMemo, mais à la place, il retourne directement une fonction.
    Ex : const add = useCallback((a, b) => {
             a + b
         },[])
    
A utiliser dans le cadre des fonctions qui seront appelées plusieurs fois.

*/

import { useState, memo, useCallback } from "react"
import { Input } from "../../../../../../Exercices-prog/exercices-frameworks/ReactJS/liste_de_produit/components/forms/input"

function MemorisationEtUseCallback() {

    const [name, setName] = useState('')

    const handleClick = useCallback(() => {
        console.log(name.length)
    }, [name.length])

    return <div className="container my-2 vstack gap-2">
        <div>
            <Input placeholder="Prénom" value={name} onChange={setName} />
            <div>
                {name.toUpperCase()}
            </div>
        </div>
        <InfoMemo onClick={handleClick}/>
    </div>

}

const InfoMemo = memo(function Info({onClick}){
    return <div className="alert alert-info" onClick={onClick}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, sit facilis.
    </div>
})

export default MemorisationEtUseCallback