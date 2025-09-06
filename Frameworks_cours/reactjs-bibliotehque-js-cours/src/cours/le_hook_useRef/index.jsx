

/*

  - Le hook useRef permet de créer une référence mutable qui persiste entre les re-renders d’un composant.
  - Contrairement à useState, la mise à jour d’une ref ne provoque pas le re-render du composant.
  - useRef est souvent utilisé pour :
        1. Accéder directement à un élément du DOM (par exemple un <input>).
        2. Stocker une valeur qui doit survivre aux re-renders mais qui n’a pas besoin de déclencher un nouveau rendu.
  
  - Pour utiliser useRef, il faut l’importer depuis React.
  - useRef retourne un objet avec une seule propriété : `.current`.
        • `ref.current` contient la valeur stockée.
        • On peut lire et modifier `ref.current` librement, sans re-render.

  - Exemple 1 : garder une référence sur un input
        const inputRef = useRef(null);
        <input ref={inputRef} />
        inputRef.current.focus();  // met le focus sur l’input

  - Exemple 2 : stocker une valeur persistante sans re-render
        const count = useRef(0);
        count.current += 1;
        console.log("Nombre de renders :", count.current);

  - useRef est très utile pour gérer le DOM ou mémoriser des valeurs
    sans passer par un state (ce qui évite des re-renders inutiles).

  - InputRef est une prop qui permet de passer une ref au composant enfant.
  - forwardRef est une fonction de React qui permet de transmettre une ref à un composant enfant.
  


*/

import { useState, useRef, forwardRef } from "react"
// import { useEffect } from "react"


function LeHookUseRef() {

    // const prefixRef = useRef(null);
    // const [prefix, setPrefix] = useState('')
    // prefixRef.current = prefix
    
    // useEffect(() => {
    //     const timer  = setInterval(() => {
    //         console.log(prefixRef.current);
    //     }, 1000)
    //     return () => clearInterval(timer)
    // }, [prefix])

    // return <div>
    //     <Input label='Prefix' value={prefix} onChange={setPrefix}/>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint harum id in sit quod corporis natus eveniet labore ipsam consectetur, delectus consequuntur aliquam, quae facere, numquam amet. Ratione, eligendi magnam!
    // </div>

    const ref = useRef(null);
    console.log('App', ref);

    const [prefix, setPrefix] = useState('')

    return <div>
        <Input ref={ref} label="Prefix" value={prefix} onChange={setPrefix} />
        {prefix.length === 0 && <div ref={ref}>hello</div>}
    </div>

}

/*---------------------------------------------------------------------------*/
// function Input ({placeholder, value, onChange, label, InputRef}) {

//     console.log('Input', InputRef);

//     return <div>
//         <label className="form-label" htmlFor={label}>{label}</label>
//         <input ref={InputRef} id={label} type="text" className="form-control" value={value} placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}} />
//     </div>
// }
const Input = forwardRef(function Input ({placeholder, value, onChange, label}, ref) {
        console.log(ref)

    return <div>
        <label className="form-label" htmlFor={label}>{label}</label>
        <input ref={ref} id={label} type="text" className="form-control" value={value} placeholder={placeholder} onChange={(e) => {onChange?.(e.target.value)}} />
    </div>
})

Input.displayName = 'Input'

export default LeHookUseRef