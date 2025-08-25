import React, { useState } from 'react'

export type NotificationType = {
  id: string
  message: string
}

const NotificationsManager: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([])
  const [newMessage, setNewMessage] = useState('')

  const addNotification = () => {
    if (!newMessage.trim()) return
    const newNotification: NotificationType = {
      id: Date.now().toString(),
      message: newMessage
    }
    setNotifications(prev => [...prev, newNotification])
    setNewMessage('')
  }

  const removeNotification = (notificationId: string) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId))
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Gestion des notifications</h2>
      <input
        type='text'
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        placeholder='Message de notification'
      />
      <button onClick={addNotification} style={{ marginLeft: 8 }}>
        Ajouter
      </button>
      <ul>
        {notifications.map(n => (
          <li
            key={n.id}
            style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}
          >
            <span>{n.message}</span>
            <button
              onClick={() => removeNotification(n.id)}
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

export default NotificationsManager
