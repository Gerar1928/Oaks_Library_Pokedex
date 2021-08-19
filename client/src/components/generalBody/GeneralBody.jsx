import PokemonCard from '../pokemonCard/PokemonCard';
import Evolution from '../evolution/Evolution';
import './GeneralBody.scss';

const GeneralBody = ({ pokemonInfo }) => {
    return (
        <div id='general-body'>
            <PokemonCard generalInfo={ pokemonInfo.generalInfo.general } />
            <Evolution evolution={ pokemonInfo.evolutionInfo } />
        </div>
    );
};

export default GeneralBody;