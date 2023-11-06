// const axios = require("axios").default;
import axios, { AxiosError, AxiosResponse } from 'axios';

const NUM_POKEMON_LIMIT = 1017;
const LS_KEY = "pokemon_list_data";
const rootURL = "https://pokeapi.co/api/v2";
const rootSpriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const getListOfPokemon = (onSuccess: Function, onFailure: Function) => {
    // See if the data is in local storage
    const localStorageData = JSON.parse(localStorage.getItem(LS_KEY) || "null");
    if (localStorageData) {
        onSuccess(localStorageData);
    }

    // If not, make the network request
    axios.get(`${rootURL}/pokemon/?limit=${NUM_POKEMON_LIMIT}`)
        .then((response: AxiosResponse) => {
            // Massage the data
            const resultsArray = response.data.results.map((p: any, idx: number) => { 
                return {
                    ...p, 
                    id: idx + 1,
                    sprite: `${rootSpriteURL}/${idx + 1}.png`
                }
            });

            // Store in local storage
            localStorage.setItem(LS_KEY, JSON.stringify(resultsArray));
            
            // Call success callback
            onSuccess(resultsArray);
        })
        .catch((error: AxiosError) => {
            onFailure(error.message);
        })
}

export { getListOfPokemon };