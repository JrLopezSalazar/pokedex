import { useParams } from "react-router-dom"
import { getPokemonById } from "../services/pokemons"
import { useEffect, useState } from "react"

const PokemonDetail = () => {

  const [pokemonData, setPokemonData] = useState(null)

  const {pokemonId} = useParams()
  
  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err))
  
    
  }, [])
  

  return (
    <main>
        <article>
          <header>
            <div>
              <img src={pokemonData?.image} alt="" />
            </div>
          </header>
          <section>
            <span> #{pokemonData?.id}</span>
          </section>
        </article>
    </main>
  )
}

export default PokemonDetail