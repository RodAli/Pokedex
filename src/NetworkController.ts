// const axios = require("axios").default;
import axios from 'axios';
import { CleanName, GetDisplayId } from "./Util";
import { PokemonDetail } from './Types';

const NUM_POKEMON_LIMIT = 1017;
const POKEMON_LIST_KEY = "pokemon_list_data";
const POKEMON_KEY = "pokemon_data_";
const rootURL = "https://pokeapi.co/api/v2";
const rootSpriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export const getListOfPokemon = async () => {
    // Check if data is in localStorage, if so, get from there
    const localStorageData = JSON.parse(localStorage.getItem(POKEMON_LIST_KEY) || "null");
    if (localStorageData) {
        return localStorageData;
    }

    try {
        // Fetch the data
        const response = await axios.get(`${rootURL}/pokemon/?limit=${NUM_POKEMON_LIMIT}`);
        
        // Massage the data
        const resultData = response.data.results.map((p: any, idx: number) => { 
            return {
                ...p,
                displayName: CleanName(p.name),
                displayId: GetDisplayId(idx + 1),
                id: idx + 1,
                sprite: `${rootSpriteURL}/${idx + 1}.png`
            }
        });

        // Store in local storage
        localStorage.setItem(POKEMON_LIST_KEY, JSON.stringify(resultData));

        return resultData;

    } catch (error) {
        console.error(error);
    }
    
}

export const getPokemon = async (pokemonId: number) => {
    // Check if data is in localStorage, if so, get from there
    const localStorageKey = POKEMON_KEY + pokemonId;
    const localStorageData = JSON.parse(localStorage.getItem(localStorageKey) || "null");
    if (localStorageData) {
        return localStorageData;
    }

    try {
        // Fetch the data
        const response = await axios.get(`${rootURL}/pokemon/${pokemonId}`);

        // Massage data
        const data: PokemonDetail = {
            ...response.data,
            displayName: CleanName(response.data.name),
            displayId: GetDisplayId(response.data.id),
        }

        // Set in localStorage
        localStorage.setItem(localStorageKey, JSON.stringify(data));

        return data;
    } catch (error) {
        console.error(error);
    }
}
