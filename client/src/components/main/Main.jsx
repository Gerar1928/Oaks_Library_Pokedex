import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import General from '../general/General';
import './Main.scss'

const Main = () => {
    const { pokemonName } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:9000/pokedex?pokemon=${ pokemonName }`)
            .then(response => setPokemonInfo(response.data))
            .catch(err => console.log(err.message));
    }, [pokemonName]);

    return (<div id='Container-Main'>
        <Navbar />
        { pokemonInfo ? <General pokemonInfo = { pokemonInfo } /> : 'Loading...' }
    </div>);
}

export default Main;