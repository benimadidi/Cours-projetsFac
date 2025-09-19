
/*
ErrorBoundary :
    - Composant React spécial qui intercepte les erreurs JavaScript survenues 
      dans ses enfants lors du rendu, dans les méthodes du cycle de vie 
      ou dans les constructeurs.
    - Il empêche l'erreur de casser tout l'arbre React, en isolant la zone défectueuse.
    - L'attribut `fallback` définit l'UI de repli (un message ou un composant) 
      qui sera affichée à la place de la section défaillante.

    🔹 Astuce : 
    On peut aussi utiliser une librairie comme `react-error-boundary` 
    (https://github.com/bvaughn/react-error-boundary), qui gère cette logique pour nous.
    Elle offre des props supplémentaires comme :
        - `onReset` : permet de remettre le composant à son état initial après une erreur.
*/



import { ErrorBoundary } from "react-error-boundary";
import { Checkbox } from '../../../../../../Exercices-prog/exercices-frameworks/ReactJS/liste_de_produit/components/forms/checkbox.jsx'
import { Input } from '../../../../../../Exercices-prog/exercices-frameworks/ReactJS/liste_de_produit/components/forms/input.jsx'
import { ProductCategoryRow } from '../../../../../../Exercices-prog/exercices-frameworks/ReactJS/liste_de_produit/products/productcategoryrow'
import { ProductRow } from '../../../../../../Exercices-prog/exercices-frameworks/ReactJS/liste_de_produit/products/productrow'
import { useState } from 'react'

const PRODUCTS = [
    {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'}, 
    {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
    {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
    {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
    {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'}
]

function CapturerLesErreursAvecErrorBoundary () {

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('')

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockedOnly && !product.stocked){
            return false
        }

        if (search && !product.name.toLowerCase().includes(search)){
            return false
        }

        return true
    })

    return <div>
       <SearchBar
        search={search}
        onSearchChange={setSearch} 
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly} /> 

        <ErrorBoundary 
            fallback={<p>Impossible d'afficher la liste produit</p>}
            onReset={() => console.log('reset')}>
                <ProductTable products={visibleProducts} />
        </ErrorBoundary>
       
    </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {

    return <div className='container my-3'>

        <div className="mb-3">

            <Input 
                value={search} 
                onChange={onSearchChange} 
                placeholder="Rechercher..."/>

            <Checkbox 
                checked={showStockedOnly} 
                onChange={onStockedOnlyChange} 
                label="N'afficher que les produits en stock" 
                id="stocked"/>

        </div>

    </div>
}

function ProductTable({products}) {

    const rows = []
    let lastCategory = null
    
    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow key={product.name} product={product} />)
    }

    return <table className='table'>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}


export default CapturerLesErreursAvecErrorBoundary