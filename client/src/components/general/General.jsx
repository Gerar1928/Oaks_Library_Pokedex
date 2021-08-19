import GeneralBody from '../generalBody/GeneralBody';
import './General.scss';

const General = ({ pokemonInfo }) => {
    return (<div id='container-general'>
        {pokemonInfo 
            ? <GeneralBody pokemonInfo={ pokemonInfo } /> 
            : <img src={ `${ process.env.PUBLIC_URL }/images/pokeball-background.png` } alt='pokeball' id='pokeball-loading-animation'/>}
        </div>);
};


export default General;