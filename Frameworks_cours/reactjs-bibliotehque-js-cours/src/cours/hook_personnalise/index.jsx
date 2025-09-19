
/*

    Les Hooks personnalisés (Custom Hooks)

📌 Définition :
- Un hook personnalisé permet de regrouper une logique basée sur des hooks React (useState, useEffect, etc.).
- Cette logique devient réutilisable dans plusieurs composants.
- Toute fonction qui utilise un hook doit obligatoirement commencer par "use" (ex : useFetch, useForm).

📌 Avantages :
- Réutilisation du code (ne pas dupliquer la même logique dans plusieurs composants).
- Meilleure lisibilité et organisation.
- Facilité de test unitaire (logique isolée).

📌 Exemple :
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

function App() {
    const width = useWindowWidth();
    return <p>Largeur de la fenêtre : {width}px</p>;
}

📌 Ressources de hooks personnalisés :
- https://usehooks.com
- https://usehooks-ts.com pour Typescript
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