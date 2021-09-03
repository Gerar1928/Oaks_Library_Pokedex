import './Evolution.scss';
import Unevolved from './evolution-lines/Unevolved';

const Evolution = ({ evolutionInfo }) => {

    console.log(evolutionInfo);
    return <div id='evolution-container'>
        <div>
            <h2>Evolution</h2>
        </div>
        <Unevolved evolutionInfo={ evolutionInfo }/>
    </div>
};

export default Evolution;