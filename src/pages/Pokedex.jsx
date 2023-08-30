import { useState } from "react";
import Pagination from "../components/pokedex/Pagination";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    handleChange,
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    pokemonsByName,
    setPokemonType,
    types,
  } = usePokedex();

  const { itemsCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main>
      <section>
        <p>
          <span>Welcome {name}</span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
            <button>Search</button>
          </div>

          <select
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
            name=""
            id=""
          >
            <option value="">All pokemons</option>

            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitaliza">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <PokemonList pokemons={itemsCurrentPage} />
    </main>
  );
};

export default Pokedex;
