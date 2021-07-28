import PokemonCard from '../pokemonCard/PokemonCard';
import Evolution from '../evolution/Evolution';

const General = ({ pokemonInfo }) => {
    console.log(pokemonInfo)
    return (<div id='Container-General'>
        <PokemonCard generalInfo = { pokemonInfo.generalInfo.general }/>
        <Evolution />
        </div>);
};


export default General;