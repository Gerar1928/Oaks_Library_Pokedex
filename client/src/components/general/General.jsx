import PokemonCard from '../pokemonCard/PokemonCard';

const General = ({ pokemonInfo }) => {
    return (<div id='Container-General'>
        <PokemonCard generalInfo = { pokemonInfo.generalInfo.general }/>
        </div>);
};


export default General;