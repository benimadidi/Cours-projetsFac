
/*

📌 React Router DOM 

- React Router DOM est une bibliothèque qui permet de gérer la navigation (routing) 
  dans une application React côté client (Single Page Application).

⚡ Concepts de base :
  - createBrowserRouter() :
      Permet de créer la configuration des routes sous forme d’un tableau d’objets.
      Chaque objet contient au minimum :
        • path : le chemin de la route (ex: '/', '/contact')
            En faisant : /path/:id : le chemin de la route peut contenir des paramètres dynamiques.
        • element : le composant React à afficher

  - RouterProvider :
      Permet de rendre disponible la configuration des routes dans l’application.
      On lui passe la constante "router" créée avec createBrowserRouter.

  - Link :
      Composant qui permet de naviguer entre les pages sans recharger la page.
      Ex : <Link to="/contact">Aller à la page contact</Link>

- <NavLink> est une extension du composant <Link> qui permet de naviguer entre les pages.
    - Il ajoute automatiquement une indication de l'état "actif" lorsque l'URL correspond à la route du lien.
    - On peut utiliser la prop `className` ou `style` pour changer le style du lien actif.
    - Pratique pour créer des menus où l'on veut montrer quelle page est en cours.

- Outlet : utilisé avec des routes imbriquées, permet de rendre les composants enfants dans une route parente.


  - useParams() :
      Hook qui permet de récupérer les paramètres dynamiques dans l’URL.
      Exemple : path="/blog/:id" → const { id } = useParams()

  - useRouteError() :
      Hook qui permet de recuperer l'erreur depuis un route

  - useNavigation() :
      Hook qui permet de recuperer l'etat de navigation
      Retourne un objet avec des informations comme :
        • state : "idle" | "loading" | "submitting"
        • location : la route en cours de navigation
        • formData : données envoyées si un formulaire est soumis
    

  - errorElement :
      Permet de définir un composant affiché en cas d’erreur (ex: page 404).

  - loader, prend une fonction :
      Permet de précharger des données avant d’afficher un composant.
      Exemple : récupérer une liste d’articles avant de rendre une page Blog.

⚡ Exemple simple :
  import { createBrowserRouter, RouterProvider } from "react-router-dom";

  const router = createBrowserRouter([
    { path: "/", element: <div>Accueil</div> },
    { path: "/blog", element: <div>Blog</div> },
    { path: "/contact", element: <div>Contact</div> }
  ]);

  export default function App() {
    return <RouterProvider router={router} />;
  }

⚠️ Important :
  - Le RouterProvider doit envelopper ton application principale.
  - Les routes sont rendues côté client → pas de rechargement complet de la page.
  - Toujours utiliser <Link> pour la navigation interne, jamais <a> (sinon reload complet).

*/



import { createBrowserRouter, Link, NavLink, RouterProvider, Outlet, useRouteError, useNavigation } from 'react-router-dom';
import { Single } from './pages/Single';
import { Blog } from './pages/Blog';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root  />,
        errorElement: <PageError />,
        children: [
            {
                path:'blog',
                element: <div className='row'>
                    <aside className='col-3'>
                        <h2>Sidebar</h2>
                    </aside>
                    <main className='col-9'>
                        <Outlet />
                    </main> 
                </div>,
                children: [
                    {
                        path: '',
                        element: <Blog/> ,
                        loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                    },
                    {
                        path: ':id',
                        element: <Single />
                    }
                ]
                
            },
            {
                path:'contact',
                element: <div>Contact</div>
            }
        ]
    }, 
])

function PageError () {
    const error = useRouteError();
    console.log(error)
    return <>
        <h1>Une erreur est survenue</h1>
    </>
}

function Root () {
    const {state} = useNavigation()

    return <>
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink> <br />
                <NavLink to='/blog'>Blog</NavLink> <br />
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
        <div className='container my-4'>
            {state === 'loading' && <div>Chargement...</div>} 
            {<Outlet />}
        </div>
    </>
}

export default function ReactRouterDom() {

    return <RouterProvider router={router}/>

}

