
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { FavouritePokemons } from "../../../pokemons/components/FavouritePokemons";
import { IoHeartOutline } from "react-icons/io5";


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
          <FavouritePokemons />
        }
      </div>

    </div>
  );
}
