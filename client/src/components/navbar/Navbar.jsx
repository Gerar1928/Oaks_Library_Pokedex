import './Navbar.scss';

const Navbar = () => {
    return <div id='Navbar'>
        <div id='navbar-brand'>
            <div className='brand'>
                <h2>Oak's Library</h2>
            </div>
        </div>
        <div id='navbar-items'>
            <div className='navbar-item'>
                <p>General</p>
            </div>
            <div className='navbar-item'>
                <p>Moves</p>
            </div>
            <div className='navbar-item'>
                <p>Location</p>
            </div>
        </div>
    </div>
}

export default Navbar;