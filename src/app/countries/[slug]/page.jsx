async function continents(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    return data
}

export default async function page({params}) {
    const data = await continents()

    const africa = data.filter(country => country.region.includes('Africa'))
    const oceania = data.filter(country => country.region.includes('Oceania'))
    const asia = data.filter(country => country.region.includes('Asia'))
    const america = data.filter(country => country.region.includes('America'))
    const europe = data.filter(country => country.region.includes('Europe'))
  return (
    <section>
        {europe.map(one=> <h2 key={Math.random()}>{one.name.common}</h2>)}
    </section>
  )
}
