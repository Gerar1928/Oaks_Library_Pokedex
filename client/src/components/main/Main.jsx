import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import General from '../general/General';

const Main = () => {
    const { pokemonName } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [showErr, setShowErr] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:9000/pokedex?pokemon=${ pokemonName }`)
            .then(response => response.data.err ? setShowErr(response.data.err) : setPokemonInfo(response.data))
            .catch(err => console.log(err.message));
    }, [pokemonName]);

    return (<div id='container-main'>
        {showErr ? `Could not find pokemon under the name of ${pokemonName}` : <General pokemonInfo = { pokemonInfo } />}
    </div>);
}

export default Main;