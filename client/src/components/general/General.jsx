import Navbar from '../navbar/Navbar';
import GeneralBody from '../generalBody/GeneralBody';
import './General.scss';

const General = ({ pokemonInfo }) => {
    console.log(pokemonInfo)
    return (<div id='container-general'>
        <Navbar />
        {pokemonInfo 
            ? <GeneralBody pokemonInfo={ pokemonInfo } /> 
            : <img src={ `${ process.env.PUBLIC_URL }/images/pokeball-background.png` } alt='pokeball' id='pokeball-loading-animation'/>}
        </div>);
};


export default General;