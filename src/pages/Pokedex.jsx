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
    <main className=" ">
      <section className="justify-between px-6 gap-6  text-3xl">
        <p className="my-7">
          <span className="text-red-500 capitalize">Welcome {name}, </span> <span>here you can find your favorite pokemon</span>
        </p>
        <form className="md:flex md:justify-between md:items-center">
          <div className="mb-5 border-4">
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
            {/* <button>Search</button> */}
          </div>

          <select className="flex border-4 ml-12"
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
            name=""
            id=""
          >
            <option className="flex " value="">All pokemons</option>

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
