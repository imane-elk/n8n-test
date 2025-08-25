export default function ProductsList() {
  return (
    <div className='p-6'>
      <h1 className='mb-4 text-3xl'>Liste des produits</h1>
      <table className='min-w-full border'>
        <thead>
          <tr className='border-b'>
            <th className='px-4 py-2 text-left'>Nom</th>
            <th className='px-4 py-2 text-left'>Catégorie</th>
            <th className='px-4 py-2 text-left'>Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='px-4 py-2'>Produit 1</td>
            <td className='px-4 py-2'>Catégorie A</td>
            <td className='px-4 py-2'>100 €</td>
          </tr>
          <tr className='border-b'>
            <td className='px-4 py-2'>Produit 2</td>
            <td className='px-4 py-2'>Catégorie B</td>
            <td className='px-4 py-2'>50 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
