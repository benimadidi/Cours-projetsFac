
/*

    React.memo()
- Permet de "mémoriser" un composant afin d'éviter qu'il soit re-rendu inutilement.
- On l'entoure autour de la définition d'un composant.
- Si les props n'ont pas changé, le composant ne se re-render pas.
- Exemple :
    const Child = React.memo(function Child({ value }) {
        return <p>{value}</p>;
    });

⚠️ Utile quand un parent se re-render souvent, mais que l'enfant n'a pas besoin
de se mettre à jour à chaque fois.

---

    useCallback()
- C'est un hook qui mémorise une fonction (au lieu d'une valeur comme useMemo).
- Il retourne directement la fonction mémorisée.
- Syntaxe :
    const add = useCallback((a, b) => a + b, []);
- Les dépendances dans le tableau [] déterminent quand recréer la fonction.

⚠️ À utiliser pour :
- Passer des fonctions en props à des composants enfants (évite leur re-render).
- Éviter de recréer des fonctions identiques à chaque rendu.

---

    Différences rapides :
- React.memo → évite de re-render un composant si ses props n'ont pas changé.
- useCallback → évite de recréer une fonction tant que ses dépendances n'ont pas changé.

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