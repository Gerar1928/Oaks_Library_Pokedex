import _ from 'lodash';
import TypeIcon from './typeIcon/TypeIcon';
import GeneralInfo from './generalInfo/GeneralInfo';
import './PokemonCard.scss';

const PokemonCard = ({ generalInfo }) => {

    //Retrive information from generalInfo and mofidied in order to place it on the UI.
    const piecesOfGeneralInfo = {
        name: _.upperFirst(generalInfo.general.name.replace(/-/g, ' ')),
        index: generalInfo.general.index,
        types: generalInfo.general.types.map(type => _.capitalize(type.type.name)), 
        height: `${ +generalInfo.general.height / 10 } m`,
        weight: `${ +generalInfo.general.weight / 10 } kg`,
        abilities: generalInfo.general.abilities.map(ability => ability)
    }

    return (<div id='pokemon_card'>
        <div id='main-images'>
            <div id='card-image' >
                <img src={ generalInfo.general.images } alt={ generalInfo.general.name } id='pokemon-image' />
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