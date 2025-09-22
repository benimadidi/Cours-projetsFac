
import { useMemo, useState } from "react";

{/*
⚡ Hook useMemo

👉 Définition :
- Le hook useMemo permet de mémoriser le **résultat d’un calcul** afin d’éviter de le recalculer à chaque rendu du composant.
- Il est utilisé pour **optimiser les performances**, surtout si le calcul est lourd (tri, filtre, opérations complexes…).

👉 Syntaxe :
const valeurMémorisée = useMemo(() => {
    // calcul coûteux
    return resultat;
}, [dépendances]);

    - 1er argument : fonction de calcul qui retourne une valeur.
    - 2ème argument : tableau de dépendances.
        - []  → calcul exécuté une seule fois au montage.
        - [var] → recalcul uniquement si "var" change.
        - rien → recalcul à chaque rendu (inutile → pas d’optimisation).

👉 Bonnes pratiques :
- Utiliser useMemo uniquement pour les calculs **lourds**.
- Éviter d’en abuser, car ça complique le code sans gain réel si le calcul est léger.
*/}


function LeHookUseMemo() {

    const [firstName, setFirstName] = useState("John")
    const [password, setPassword] = useState("MotDePasse")
    const security = useMemo(() => {
        return passwordSecurity(password)
    }, [password])
    

    return (
        <div className="container my-3 vstack gap-2">
            <Input label="Nom d'utilisateur" value={firstName} onChange={setFirstName} placeholder={firstName} />
            <div>
                <Input label="Password" type="password" value={password} onChange={setPassword} placeholder={password} />
                Sécurité : {security}
            </div>
        </div>
    )
}

/*-------------------------------------------------------------------------*/
function passwordSecurity(password) {
    if (password.length < 3){
        return "Faible"
    }
    else if (password.length < 6) {
        return "Moyen"
    }
    return "Fort"
}

function Input ({placeholder, value, onChange, label}) {
    return <div>
        <label className="form-label" htmlFor={label}>{label}</label>
        <input id={label} type="text" className="form-control" value={value} placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}} />
    </div>
}

export default LeHookUseMemo