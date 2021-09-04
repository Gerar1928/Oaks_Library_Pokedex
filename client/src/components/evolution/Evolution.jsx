import Unevolved from './evolution-lines/Unevolved';
import FirstEvolution from './evolution-lines/FirstEvolution';
import './Evolution.scss';

const Evolution = ({ evolutionInfo }) => {

    console.log(evolutionInfo);
    return (<div id='evolution-container'>
        <div className='evolution-container-header-box'>
            <h2 className='evolution-container-header'>Evolution</h2>
        </div>
        <FirstEvolution evolutionInfo={ evolutionInfo }/>
    </div>);
};

export default Evolution;