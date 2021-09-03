import _ from 'lodash';

const Unevolved = ({ evolutionInfo }) => {
    const { evolution_chain, pokemon_types_and_images } = evolutionInfo;

    return(<div id='unevolved'>
        <div className="pokemon-mini-card">
            <div className='pokemon-image'>
                <img src={ pokemon_types_and_images[0].image } alt={ evolution_chain[0].name } className='front-image' />
                <img src={ `${ process.env.PUBLIC_URL }/images/pokeball-background.png` } alt='pokeball' className='back-image' />
            </div>
            <div className="stage">
                <p>Unevolved</p>
            </div>
            <div className='pokemon-name'>
                <p>{ _.upperFirst(evolution_chain[0].species.name.replace(/-/g, ' ')) }</p>
            </div>
            <div className="types">
                { pokemon_types_and_images[0].types.map(type => <span className={type.type.name}>{ `${ _.upperFirst(type.type.name) }` }</span>) }
            </div>
        </div>
    </div>);
};

export default Unevolved;