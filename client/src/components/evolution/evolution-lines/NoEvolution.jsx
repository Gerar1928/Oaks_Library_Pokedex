import _ from 'lodash';

const NoEvolution = ({ evolutionInfo }) => {
    const { evolution_chain, pokemon_types_and_images } = evolutionInfo;

    return(<div id='no-evolution'>
        <div className='pokemon-image'>
            <img src={ pokemon_types_and_images[0].image } alt={ evolution_chain[0].name } className='front-image' />
            <img src={ `${ process.env.PUBLIC_URL }/images/pokeball-background.png` } alt='pokeball' className='back-image' />
        </div>
        <div className='pokemon-name'>
            <p>Unevolved</p>
            <h2>{ _.upperFirst(evolution_chain[0].species.name.replace(/-/g, ' ')) }</h2>
            <div className="types">
                { pokemon_types_and_images[0].types.map(type => `${ _.upperFirst(type.type.name) }`) }
            </div>
        </div>
    </div>);
};

export default NoEvolution;