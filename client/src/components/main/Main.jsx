import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import General from '../general/General';
import './Main.scss';

export const GlobalContext = React.createContext()

// Main component where info is displayed.
const Main = () => {
    const { pokemonName } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState(null);
    /* TODO - Workout this logic */
    const [showErr, setShowErr] = useState(null);

    //Sets either pokemonInfo or showErr.
    useEffect(() => {
        axios.get(`http://localhost:9000/pokedex?pokemon=${ pokemonName }`)
            .then(response => response.data.err ? setShowErr(response.data.err) : setPokemonInfo(response.data))
            .catch(err => console.log(err.message));
    }, [pokemonName]);

    return (<div id='container-main'>
        <Navbar />
        <GlobalContext.Provider value={ pokemonInfo } >
            <General />
        </GlobalContext.Provider>
    </div>);
}

export default Main;