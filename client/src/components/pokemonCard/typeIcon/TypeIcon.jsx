const TypeIcon = ({ type }) => {
    return (<div className='type'>
        <img src={`${ process.env.PUBLIC_URL }/images/types/${ type }.png`} alt='Pokemon Type' />
    </div>)
};

export default TypeIcon;