import React, { useState } from 'react'

// Type du produit
export type ProductType = {
  id: string
  name: string
}

// Composant principal
const ProductsManager: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [newProductName, setNewProductName] = useState('')

  // Ajouter un produit
  const addProduct = () => {
    if (!newProductName.trim()) return
    const newProduct: ProductType = {
      id: Date.now().toString(),
      name: newProductName
    }
    setProducts(prev => [...prev, newProduct])
    setNewProductName('')
  }

  // Supprimer un produit
  const removeProduct = (productId: string) => {
    setProducts(prev => prev.filter(product => product.id !== productId))
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Gestion des produits</h2>
      <input
        type='text'
        value={newProductName}
        onChange={e => setNewProductName(e.target.value)}
        placeholder='Nom du produit'
      />
      <button onClick={addProduct} style={{ marginLeft: 8 }}>
        Ajouter
      </button>
      <ul>
        {products.map(product => (
          <li
            key={product.id}
            style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}
          >
            <span>{product.name}</span>
            <button
              onClick={() => removeProduct(product.id)}
              style={{ marginLeft: 8 }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsManager
