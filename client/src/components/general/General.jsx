import PokemonCard from '../pokemonCard/PokemonCard';

const General = ({ pokemonInfo }) => {
    console.log(pokemonInfo)
    return (<div id='Container-General'>
        <PokemonCard generalInfo = { pokemonInfo.generalInfo.general }/>
        </div>);
};


export default General;