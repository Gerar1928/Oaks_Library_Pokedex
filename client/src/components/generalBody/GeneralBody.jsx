import PokemonCard from '../pokemonCard/PokemonCard';
import Evolution from '../evolution/Evolution';
import './GeneralBody.scss';

const GeneralBody = ({ pokemonInfo }) => {

    const { generalInfo, speciesInfo, evolutionInfo } = pokemonInfo

    return (
        <div id='general-body'>
            <PokemonCard generalInfo={ generalInfo }/>
            <Evolution evolutionInfo={ evolutionInfo }/>
        </div>
    );
};

export default GeneralBody;