import './header.css'

function Header(){

    return(
        <div>
            <header className="header">
                <nav className="navbar">
                    <a href="/" className="nav-logo">WebDev.</a>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header