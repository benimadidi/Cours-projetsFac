
/*

Le hook personnalisé vont nous permettre de regrouper une logique de hook que l'on va pouvoir réutiliser dans plusieurs composants.
Dès qu'une fonction utilise un hook, il devient un hook personnalisé(doit donc commencer par use)

On peut aussi aller sur des sites qui fournissent des hooks personnalisés comme :   
    - https://usehooks.com
    - https://usehooks-ts.com
    - https://github.com/streamich/react-use


*/

import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

/*Creer un hook qui permet de passer la valeur d'un élément de true a false*/
function useToggle(initial = false){
    const [state, setState] = useState(initial)
    const toggle = () => {setState( v => !v)}
    return [state, toggle]

} 




function HookPersonnalise() {

    const [loading, data, errors] = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&delay=2000')

    return <div className="container my-2">
        {loading && <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>}
        {errors && <div className="alert alert-danger">{errors.toString()}</div>}
        {data && <div>
                <ul>
                    {data.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            </div>}
    </div>

    // const [checked, toggleChecked] = useToggle()

    // return <div>
    //     <input type="checkbox" checked={checked} onChange={toggleChecked}/>
    //     <p>{checked ? "Je suis coché" : "je ne suis pas coché" }</p>
    // </div>





}

export default HookPersonnalise