import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";
import { act } from "react";

/*
  favorites: { 
    "1": { id: "1", name: "bulbasaur" },
    "3": { id: "3", name: "venasaur" },
    "5": { id: "5", name: "charmeleon" },
  }
*/

interface PokemonState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonState = {
  favorites: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "3": { id: "3", name: "venasaur" },
  // "5": { id: "5", name: "charmeleon" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritesPokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
