import Image from "next/image"

async function continents(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    return data
}

export default async function page() {
    const franc = await continents()

    const countries = franc.map(country => (
        <div key={Math.random()} >
            <Image src={country.coatOfArms.svg} alt={country.name.official} width={200} height={200}/>
            <h2>{country.name.official}</h2>
        </div>
    ))
  return (
    <aside className="grid grid-cols-2 gap-3">
        {countries}
    </aside>
  )
}
