import Image from "next/image"
import image from './image.module.css'
import Link from "next/link"

//create an asynchronous fn
async function fakepr(){
    const res = await fetch('https://fakestoreapi.com/products')
    const data = res.json()
    return data
}

export default async function page() {
  const data = await fakepr()


  return (
    <main className="grid grid-cols-[repeat(3,250px)] gap-[50px] m-auto w-[70%]">
      {data.map(product => (
        <section key={product.id}>
          <Link href={`/product/${product.id}`}>
          <Image src={product.image} alt={product.name} width={200} height={200} className={image.img}/>
          <h2>{product.title}</h2>
          <h2>&#8358;{product.price}</h2>
          </Link>
        </section>
      ))}
    </main>
  )
}
