// const axios = require("axios").default;
import axios, { AxiosError, AxiosResponse } from 'axios';

const NUM_POKEMON_LIMIT = 386;
const rootURL = "https://pokeapi.co/api/v2";

const getListOfPokemon = (onSuccess: Function, onFailure: Function) => {
    axios.get(`${rootURL}/pokemon/?limit=${NUM_POKEMON_LIMIT}`)
        .then((response: AxiosResponse) => {
            onSuccess(response.data.results);
            console.log(response.data.results);
        })
        .catch((error: AxiosError) => {
            onFailure(error.message);
        })
}

export { getListOfPokemon };