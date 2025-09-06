
import { useMemo, useState } from "react";

/*

  - Le hook useMemo permet de mémoriser le résultat d’un calcul pour éviter de le recalculer à chaque rendu du composant.
  - Il sert à optimiser les performances quand un calcul est coûteux (par ex. un tri, un filtre, une opération lourde).
  - Pour utiliser useMemo, il faut l'importer depuis React.

  - useMemo prend deux arguments : une fonction de calcul et un tableau de dépendances.
        1. La fonction de calcul retourne la valeur à mémoriser.
        2. Le tableau de dépendances indique quand recalculer la valeur.
        3. Si aucune dépendance ne change, React réutilise directement la valeur mémorisée.

  - Si le tableau de dépendances est vide, le calcul sera exécuté une seule fois lors du montage, et la même valeur sera toujours réutilisée.
  - Si le tableau contient des variables, le calcul sera relancé uniquement quand une de ces variables change.
  - Si on ne met pas de tableau de dépendances, le calcul sera refait à chaque rendu (ce qui annule l’intérêt de useMemo).

  - Exemple d’utilisation :
        const sortedList = useMemo(() => {
            return list.sort((a, b) => a - b);
        }, [list]);
        
        Ici, le tri n’est refait que lorsque `list` change.

  - Attention à ne pas abuser de useMemo : il est utile uniquement pour les calculs lourds ou pour éviter de recréer des objets/fonctions à chaque rendu.

*/


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