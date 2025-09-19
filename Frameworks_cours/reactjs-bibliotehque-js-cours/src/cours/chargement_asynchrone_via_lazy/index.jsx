/* 
    Chargement asynchrone avec React.lazy

👉 Problème :
- Quand on importe un composant normalement (import MonComposant from "..."),
  son code est directement chargé dans le paquet principal.
- Si l’app devient grande → bundle trop lourd → chargement plus lent.

👉 Solution : React.lazy()
- Permet d’importer un composant de façon ASYNCHRONE.
- Le code est téléchargé uniquement si on utilise le composant.
- C’est du "code splitting" → améliore les performances.

👉 Syntaxe :
const MonComposant = React.lazy(() => import("./MonComposant"));

⚠️ Important : il faut toujours utiliser <Suspense> autour du composant
pour afficher une interface de secours (fallback) pendant le chargement.

*/

import { Suspense } from "react";
import { lazy } from "react";




// Exemple d'import asynchrone :
const MonComposant = lazy(() => import('../les_formulaires'));

function ChargementAsynchroneViaLazy() {
  return (
    <div>
        <h1>Bienvenue dans mon app 🚀</h1>

        {/* Suspense affiche un fallback tant que le composant n’est pas prêt */}  
        <Suspense fallback={<p>Chargement du composant...</p>}>
            <MonComposant />
        </Suspense>

    </div>
  );
}

export default ChargementAsynchroneViaLazy;


/* 
👉 Cas d’usage typique :
- Chargement de pages dans un routeur (React Router)
- Composants lourds (graphique, carte, éditeur de texte)
- Tout ce qui n’est pas nécessaire dès le premier rendu

*/
