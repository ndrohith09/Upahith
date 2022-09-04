import logo from './assets/logo.png';

const Navbar = () => {
    return(
        <nav className="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/story-generator">Text to Image</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Paint to Image</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://127.0.0.1:5500/">Speech to text</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;