
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
  title: '151 Pokemons',
  description: 'Pagina de pókemons',
};


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  //throw new Error('Error que no se espera');

  return pokemons;
}


export default async function PokemonPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="felx flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small>estático</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          <PokemonGrid pokemons={pokemons} />
        }
      </div>

    </div>
  );
}