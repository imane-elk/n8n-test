import React, { useState } from 'react'

export type LivraisonType = {
  id: string
  adresse: string
}

const LivraisonManager: React.FC = () => {
  const [livraisons, setLivraisons] = useState<LivraisonType[]>([])
  const [newAdresse, setNewAdresse] = useState('')

  const addLivraison = () => {
    if (!newAdresse.trim()) return
    const newLivraison: LivraisonType = {
      id: Date.now().toString(),
      adresse: newAdresse
    }
    setLivraisons(prev => [...prev, newLivraison])
    setNewAdresse('')
  }

  const removeLivraison = (livraisonId: string) => {
    setLivraisons(prev =>
      prev.filter(livraison => livraison.id !== livraisonId)
    )
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Gestion des livraisons</h2>
      <input
        type='text'
        value={newAdresse}
        onChange={e => setNewAdresse(e.target.value)}
        placeholder='Adresse de livraison'
      />
      <button onClick={addLivraison} style={{ marginLeft: 8 }}>
        Ajouter
      </button>
      <ul>
        {livraisons.map(livraison => (
          <li
            key={livraison.id}
            style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}
          >
            <span>{livraison.adresse}</span>
            <button
              onClick={() => removeLivraison(livraison.id)}
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

export default LivraisonManager
