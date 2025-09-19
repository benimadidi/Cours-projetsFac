

/*

    Le principe des portails
Permet de "téléporter" des éléments React dans un endroit spécifique du DOM,
en dehors de la hiérarchie habituelle du composant parent.

- createPortal(element, container)
    → Permet de rendre un élément dans un nœud DOM différent.
    → S'importe depuis la bibliothèque 'react-dom'.

    - element   : le contenu JSX ou React que l'on veut téléporter.
    - container : l'élément DOM cible (ex : document.getElementById('modal-root')).

        Points importants :
- Le composant garde toute la logique React (state, props, contexte, events).
- Seul son rendu est déplacé ailleurs dans le DOM.
- Utilisé surtout pour :
    - Les modales (popup)
    - Les tooltips
    - Les notifications (toast)
    - Les menus contextuels

*/


import {createPortal} from 'react-dom'


function LesPortails() {

    return <div style={{
        height: 300,
        overflowY: 'scroll',
        background: '#EEE',
        margin: 20,
        position: 'relative'
    }}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eaque repellendus voluptate mollitia nostrum, consequatur incidunt unde quas facilis nesciunt repudiandae porro perspiciatis minus delectus distinctio similique sed architecto ipsa?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eaque repellendus voluptate mollitia nostrum, consequatur incidunt unde quas facilis nesciunt repudiandae porro perspiciatis minus delectus distinctio similique sed architecto ipsa?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eaque repellendus voluptate mollitia nostrum, consequatur incidunt unde quas facilis nesciunt repudiandae porro perspiciatis minus delectus distinctio similique sed architecto ipsa?
        </p>
        <Modal /> 
    </div>

}

function Modal(){
    return createPortal(<div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
        border: 'solid 1px grey',
        background: '#FFF'
    }}>
        Je suis une modale
    </div>, document.body)
}

export default LesPortails