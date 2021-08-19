import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Search.scss';

const Search = () => {

    const [searchBtn, setSearchBtn] = useState(false);

    const history = useHistory();

    const handleOnSubmit = (e) => {
        const pokemonName = e.target.pokemon.value.trim();
        e.preventDefault();
        
        if (pokemonName.length > 0) {
            history.push(`/${pokemonName}/general`);   
        }   
    }

    const handleOnChange = (e) => {
        const input = e.target.value.trim();
        input.length > 0 ? setSearchBtn(true) : setSearchBtn(false);
    };

    return (<div id='container-search'>
        <div id='top-background'>
            <h1>Oak's Library</h1>
            <p>All the Pokémon data you would like to know is here.</p>
        </div>
        <div id='center-background'>
            <form action='http://localhost:9000/pokedex' method='GET' onSubmit={ handleOnSubmit }>
                <input type='text' name='pokemon' placeholder='Enter pokémon name.' autoComplete='off' onChange={ handleOnChange }/>
                <input type='submit' value='Search' className={ searchBtn ? 'active' : 'off' }/>
            </form>
        </div>
        <div id='bottom-background'></div>
    </div>);
}

export default Search;