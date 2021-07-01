import { useHistory } from 'react-router-dom';
import './Search.scss';

const Search = () => {

    const history = useHistory();

    const handleOnSubmit = (e) => {
        const pokemonName = e.target.pokemon.value;

        e.preventDefault();

        history.push(`/${pokemonName}/general`);      
    }

    return (<div id='Container-Search'>
        <div id='top-background'>
            <h1>Oak's Library</h1>
            <p>All the Pokémon data you would like to know is here.</p>
        </div>
        <div id='center-background'>
            <form action='http://localhost:9000/pokedex' method='GET' onSubmit={ handleOnSubmit }>
                <input type='text' name='pokemon' placeholder='Enter pokémon name.' autoComplete='off'/>
                <input type='submit' value='Search'/>
            </form>
        </div>
        <div id='bottom-background'></div>
    </div>);
}

export default Search;