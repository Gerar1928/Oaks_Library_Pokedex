import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const General = () => {
    const { pokemonName } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:9000/pokedex?pokemon=${ pokemonName }`)
            .then(response => setPokemonInfo(response.data))
            .catch(err => err.message);
    });

    console.log(pokemonInfo);

    return (<div id='Container-General'>
        <Navbar />
    </div>)
}

export default General;