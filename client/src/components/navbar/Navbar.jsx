import './Navbar.scss'

const Navbar = () => {
    return <div id='Navbar'>
        <div id='navbar-brand'>
            <div className='brand'>
                <h1>Oak's Library</h1>
            </div>
        </div>
        <div id='navbar-items'>
            <div className="navbar-item">
                <p>General</p>
            </div>
            <div className="navbar-item">
                <p>Moves</p>
            </div>
            <div className="navbar-item">
                <p>Location</p>
            </div>
        </div>
    </div>
}

export default Navbar;