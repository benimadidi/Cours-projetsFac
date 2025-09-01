
{/*
   
    Le jsx est une extension de syntaxe pour JavaScript.
    Il permet d'écrire du HTML dans du JavaScript.

    - On peut mettre directement du contenu HTML dans le return d'un composant React.
        h1, div, p, span, ul, li, etc.
    - On peut aussi utiliser l'id comme en HTML.
        <div id="mon-id"></div>
    - On peut utiliser les classes CSS avec className au lieu de class.
        <div className="ma-classe"></div>
       
        
    - Tous les attributs HTML sont en camelCase en JSX a l'exception de aria-* et data-*.

    - dans le retrun, on ne peut mettre qu'un seul élément parent.
        <div>
            <h1></h1>
            <p></p>
        </div>
    Si on ne veut pas : <Fragment></Fragment> ou <></>
    
    - On peut insérer du JavaScript dans le JSX avec les accolades {}.
        <h1>{2 + 2}</h1> => 4
        <h1>{maVariable}</h1> => valeur de maVariable
        <h1>{maFonction()}</h1> => valeur de retour de maFonction()
        si on ne veut pas  que le contenu soit interprété comme du HTML : 
            On utilise l'attribut dangerouslySetInnerHTML
            ☣️ <div dangerouslySetInnerHTML={{__html: maVariable}}></div>

    - Pour styliser un élément, il fonctionne comme un objet JavaScript.:
        style={{propriété: 'valeur'}}

    - Rendu conditionnel :
        - Ternaire : {condition ? <Composant1 /> : <Composant2 />}
        - AND logique : {condition && <Composant />}
        - IF classique : ne fonctionne pas dans le return, il faut le faire avant.
            if(condition){
                return <Composant />
            } else {
                return <AutreComposant />
            }

    - Pour separer les composants, on peut créer des fonctions qui retournent du JSX (ils doivent etre en PascalCase).
    En les utilisant par : <NomDeLaFonction />
        - On peut passer des props (propriétés) aux composants.
        
    - Appliquer plusiers attributs a un élément :
        On utilise l'opérateur de décomposition ...
        const props = {
            id: 'mon-id',
            className: 'ma-classe'
        }
        <div {...props}></div>
        Peut aussi le passer en paramètre d'un composant : <Composant {...props} />
      
*/}

const titre = "Comment vas tu ? "
const style = {
    color: 'yellow', 
    backgroundColor: 'green'
};
const showTitle = false
const todos = [
    'Apprendre le JSX', 
    'Apprendre React', 
    'Créer des composants'
]

{/*Affichage*/}
function LaSyntaxeJsx(){

    return <>

        <Title color="red" id="mon-id" className="ma-classe"/>

        {showTitle ? <h1 style={style}>{titre}</h1> : <h1 style={style}>Pas de suite</h1>}

        <input type="text" />

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellendus itaque voluptatem sequi velit perferendis illum repellat voluptatum placeat incidunt officia minima illo vero animi odit r epudiandae, consequuntur, tempore adipisci.
        </p>

        <ul>
            {todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>

    </>
}

function Title ({color, hidden, ...props}){
    if (hidden){
        return null
    }

    return <h1 style={{color : color}} {...props}>Bonjour tout le monde !</h1>
}

export default LaSyntaxeJsx