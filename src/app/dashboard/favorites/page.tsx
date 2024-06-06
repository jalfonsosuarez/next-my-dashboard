
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
  title: 'Favoritos',
  description: 'Pagina de pókemons',
};




export default async function PokemonPage() {


  return (
    <div className="felx flex-col">
      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global state</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          <PokemonGrid pokemons={[]} />
        }
      </div>

    </div>
  );
}