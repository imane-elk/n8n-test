export default function Dashboard() {
  return (
    <div className='p-6'>
      <h1 className='mb-6 text-3xl'>Bienvenue sur le Dashboard</h1>
      <div className='grid grid-cols-3 gap-4'>
        <div className='rounded border p-4 shadow'>Stat 1</div>
        <div className='rounded border p-4 shadow'>Stat 2</div>
        <div className='rounded border p-4 shadow'>Stat 3</div>
      </div>
    </div>
  )
}
