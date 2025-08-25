export default function SignUp() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-80 rounded border p-8 text-center shadow-md'>
        <h1 className='mb-4 text-2xl'>Sign Up</h1>
        <input
          className='mb-2 w-full border p-2'
          placeholder='Nom'
          type='text'
        />
        <input
          className='mb-2 w-full border p-2'
          placeholder='Email'
          type='email'
        />
        <input
          className='mb-4 w-full border p-2'
          placeholder='Mot de passe'
          type='password'
        />
        <button className='w-full rounded bg-green-500 px-4 py-2 text-white'>
          S’inscrire
        </button>
      </div>
    </div>
  )
}
