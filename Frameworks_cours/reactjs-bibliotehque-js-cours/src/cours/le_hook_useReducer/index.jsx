
import { useTodos } from "../hooks/useTodos"

{/* 
⚡ Hook useReducer

👉 Définition :
- useReducer est un hook qui sert à gérer un état complexe avec une logique claire.
- Alternative à useState quand :
    - L’état a plusieurs sous-valeurs (objet, tableau…).
    - Il y a plusieurs façons de le modifier (ajouter, supprimer, mettre à jour…).
    - On veut centraliser la logique dans une fonction "reducer".

👉 Syntaxe :
const [state, dispatch] = useReducer(reducer, étatInitial);

    - state : la valeur actuelle de l’état
    - dispatch : une fonction qui envoie une "action" au reducer
    - reducer : fonction (state, action) => newState
    - étatInitial : valeur par défaut de l’état

👉 Fonction reducer :
- C’est une fonction pure qui reçoit :
    1. l’état actuel
    2. une action (souvent un objet { type: "...", payload: ... })
        type : le type de l’action
        payload : le contenu de l’action
- Elle retourne le nouvel état.

⚠️ Bonnes pratiques :
- Toujours retourner un nouvel état (pas modifier directement l’ancien).
- Bien nommer les types d’actions (ex: "INCREMENT", "DECREMENT").
- Ne pas appeler useReducer dans une condition → même règle que useState/useEffect.

*/}



function LeHookUseReducer() {

    const {visibleTodos, showCompleted, toggleFilter, toggleTodo, removeTodo, removeAllTodo} = useTodos()

    return <div>
        <p>
            <input type="checkbox" checked={showCompleted} onChange={toggleFilter}/>
            Afficher les tâches accomplies
        </p>
        <ul>
            {visibleTodos.map(todo => (<li 
                key={todo.name}
            >
                <input type="checkbox" onChange={() => toggleTodo(todo)} checked={todo.checked}/>
                {todo.name}
                <button onClick={() => removeTodo(todo)}>Supprimer</button>
            </li>))}
        </ul>
        <button onClick={removeAllTodo}>Supprimer les taches accomplies</button>
    </div>


}

export default LeHookUseReducer