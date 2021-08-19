import _ from 'lodash';
import TypeIcon from './typeIcon/TypeIcon';
import GeneralInfo from './generalInfo/GeneralInfo';
import './PokemonCard.scss';

const PokemonCard = ({ generalInfo }) => {

    const piecesOfGeneralInfo = {
        name: _.upperFirst(generalInfo.name.replace(/-/g, ' ')),
        index: generalInfo.index,
        types: generalInfo.types.map(type => _.capitalize(type.type.name)), 
        height: `${ +generalInfo.height / 10 } m`,
        weight: `${ +generalInfo.weight / 10 } kg`,
        abilities: generalInfo.abilities.map(ability => ability)
    }

    return (<div id='pokemon_card'>
        <div id='main-images'>
            <div id='card-image' >
                <img src={ generalInfo.images } alt={ generalInfo.name } id='pokemon-image' />
                <img src={ `${ process.env.PUBLIC_URL }/images/pokeball-background.png` } alt='pokeball' />
            </div>
            <div id='types'>
                {piecesOfGeneralInfo.types.map( (type, index) => <TypeIcon type={ type.toLowerCase() } key={ index } />)}
            </div>
        </div>
        <GeneralInfo generalInfo={ piecesOfGeneralInfo } />
    </div>);
};

export default PokemonCard