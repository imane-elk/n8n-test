import { useAuth } from '@/context/auth/authContext'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { dispatch } = useAuth()

  const handleLogin = () => {
    if (!email || !password) return

    const payload = {
      token: 'fake-token',
      user: { email, username: email.split('@')[0] || 'user' }
    }

    localStorage.setItem('auth', JSON.stringify(payload))
    dispatch({ type: 'login', payload })
    navigate('/dashboard')
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-80 rounded border p-8 text-center shadow-md'>
        <h1 className='mb-4 text-2xl'>Login</h1>
        <input
          className='mb-2 w-full border p-2'
          placeholder='Email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className='mb-4 w-full border p-2'
          placeholder='Password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className='w-full rounded bg-blue-500 px-4 py-2 text-white'
        >
          Se connecter
        </button>
      </div>
    </div>
  )
}
