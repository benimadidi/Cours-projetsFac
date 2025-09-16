
import { useState } from "react"

/*Creer un hook qui permet de passer la valeur d'un élément de true a false*/
export function useToggle(initial = false){
    const [state, setState] = useState(initial)
    const toggle = () => {setState( v => !v)}
    return [state, toggle]

}