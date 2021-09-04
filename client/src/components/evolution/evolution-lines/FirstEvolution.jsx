import _ from 'lodash';

const FirtsEvolution = ({ evolutionInfo }) => {

    const { evolution_chain, pokemon_types_and_images } = evolutionInfo;

    return(<div id='firts-evolution'>
        <div className='pokemon-mini-card box-one'>
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
            <div className='types'>
                { pokemon_types_and_images[0].types.map((type, index) => <span key={ index } className={ type.type.name }>{ `${ _.upperFirst(type.type.name) }` }</span>) }
            </div>
        </div>
        <div className='evolution-trigger box-three'>
            <p>{ _.capitalize(evolution_chain[1].evolution_details[0].trigger.name).replace(/[$-/:-?{-~!"^_`\[\]]/, ' ') }</p>
            <p>→</p>
        </div>
        <div className='pokemon-mini-card box-two'>
            <div className='pokemon-image'>
                <img src={ pokemon_types_and_images[1].image } alt={ evolution_chain[1].name } className='front-image' />
                <img src={ `${ process.env.PUBLIC_URL }/images/pokeball-background.png` } alt='pokeball' className='back-image' />
            </div>
            <div className="stage">
                <p>Unevolved</p>
            </div>
            <div className='pokemon-name'>
                <p>{ _.upperFirst(evolution_chain[1].species.name.replace(/-/g, ' ')) }</p>
            </div>
            <div className='types'>
                { pokemon_types_and_images[1].types.map((type, index) => <span key={ index } className={ type.type.name }>{ `${ _.upperFirst(type.type.name) }` }</span>) }
            </div>
        </div>
    </div>);
};

export default FirtsEvolution;