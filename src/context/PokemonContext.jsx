import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const BASE_API_URL = `https://pokeapi.co/api/v2/pokemon/`;

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);
    const value = { pokemon, setPokemon };

    useEffect(() => {
        axios.get(BASE_API_URL)
            .then(response => {
                setPokemon(response.data.results);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return pokemon && <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;


};

export const usePokemon = () => useContext(PokemonContext);