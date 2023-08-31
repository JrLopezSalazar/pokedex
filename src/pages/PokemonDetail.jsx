import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import { useEffect, useState } from "react";
import StatBarList from "../components/pokemonDetail/StatBarList";
import {bgStylePokemonType, borderStylePokemonByType, textStylePokemonByType } from "./../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <main className="flex justify-center items-center ">
    
      <article className=" w-[min(100%,_400px)] border-4 m-6 p-4">
        <header className={`flex justify-center h-[100px] ${
          bgStylePokemonType[pokemonData?.types[0]]
        } `}>
          <div className="">
            <img className="h-[80px] w-auto " src={pokemonData?.image} alt="" />
          </div>
        </header>

        <section className=" justify-center text-center mt-4 mb-10">
          <span className="border-2 p-1"> # {pokemonData?.id}</span>
          <h2 className={` text-center text-3xl my-1 capitalize ${
              textStylePokemonByType[pokemonData?.types[0]]
                } `} 
                >{pokemonData?.name}
        </h2>
          <ul className="flex flex-wrap justify-center gap-4 ">
            <li className="flex flex-col">Weight <span>{pokemonData?.weight}</span> </li>
            <li className="flex flex-col">Height <span>{pokemonData?.height}</span></li>
          </ul>
        </section>

        <section>
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
