import './Evolution.scss';
import NoEvolution from './evolution-lines/NoEvolution';

const Evolution = ({ evolutionInfo }) => {

    console.log(evolutionInfo);
    return <div id='evolution-container'>
        <div>
            <h2>Evolution</h2>
        </div>
        <NoEvolution evolutionInfo={ evolutionInfo }/>
    </div>
};

export default Evolution;