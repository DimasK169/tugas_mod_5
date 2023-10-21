import axios from "axios";
import { useEffect } from "react";
import { usePokemon } from "../context/PokemonContext";
import { Link, useParams } from "react-router-dom";


const ReadPokemon = () => {
    const { pokemon } = usePokemon()
    let { page } = useParams()
    const filterPokemon =
        pokemon.filter((p, i) => {
            return page === "2" ? i < 10 : i >= 10
        })

    return (
        <div>
            {filterPokemon.map(p => (
                <div key={p.name}>
                    <h3>{p.name}</h3>
                </div>
            ))}
            <Link to="/1">Halaman 1 </Link>
            <span>||</span>
            <Link to="/2"> Halaman 2</Link>
        </div>
    );
};

export default ReadPokemon
