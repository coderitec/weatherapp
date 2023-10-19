async function fakepr(){
    const res = await fetch('https://fakestoreapi.com/products')
    const data = res.json()
    return data
}

export default async  function page({params}) {
    const data = await fakepr()
    const products = data.find(product => product.id == params.okay)
  return (
    <div>
        {products.title}
    </div>
  )
}
