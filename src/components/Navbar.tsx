import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__text'>Pati URL</div>
                <div className='navbar__buttons'>
                    <button>login</button>
                </div>
            </div>
        </nav>
    );
}