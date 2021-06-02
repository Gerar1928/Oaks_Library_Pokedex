import _ from 'lodash';

const GeneralInfo = ({ generalInfo }) => {
    console.log(generalInfo);

    return (<div  id='general-info'>
        <div className='piece-of-info'>
            <p>Name: {generalInfo.name}</p>
        </div>
        <div className='piece-of-info'>
            <p>Index: <span>{generalInfo.index}</span></p>
        </div>
        <div className='piece-of-info'>
            <p>Types: <span>{generalInfo.types.map((type => `${type} `))}</span></p>
        </div>
        <div className='piece-of-info'>
            <p>Height: <span>{generalInfo.height}</span></p>
        </div>
        <div className='piece-of-info'>
            <p>Weight: <span>{generalInfo.weight}</span></p>
        </div>
        <div className='piece-of-info'>
            <p>Abilities: <span>{generalInfo.abilities.map(ability => ability.is_hidden ? `${_.capitalize(ability.ability.name)} (Hidden) ` : `${_.capitalize(ability.ability.name)}, ` )}</span></p>
        </div>
    </div>);
};

export default GeneralInfo;