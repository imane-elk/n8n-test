import React, { useState } from 'react'

export type ClientType = {
  id: string
  name: string
}

const ClientsList: React.FC = () => {
  const [clients, setClients] = useState<ClientType[]>([])
  const [newClientName, setNewClientName] = useState('')

  const addClient = () => {
    if (!newClientName.trim()) return
    const newClient: ClientType = {
      id: Date.now().toString(),
      name: newClientName
    }
    setClients(prev => [...prev, newClient])
    setNewClientName('')
  }

  const removeClient = (clientId: string) => {
    setClients(prev => prev.filter(client => client.id !== clientId))
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Liste des clients</h2>
      <input
        type='text'
        value={newClientName}
        onChange={e => setNewClientName(e.target.value)}
        placeholder='Nom du client'
      />
      <button onClick={addClient} style={{ marginLeft: 8 }}>
        Ajouter
      </button>
      <ul>
        {clients.map(client => (
          <li
            key={client.id}
            style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}
          >
            <span>{client.name}</span>
            <button
              onClick={() => removeClient(client.id)}
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

export default ClientsList
