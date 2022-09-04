const Footer = () => {
    return(
        <div className="footer">
            <div className="top-foot">
                <div>
                    <h5 style={{'color': 'white'}}>Quick links</h5>
                    <ul className="foot-lists">
                        <li><a href="/Stratify">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#stack">Stack</a></li>
                    </ul>
                </div>
                <div style={{ 'justify-content': 'center', 'display': 'block' }}>
                    <h5 style={{ 'color': 'white' }}>Get to us on</h5>
                    <ul className="social" style={{ 'list-style': 'none', 'display': 'flex', 'padding': '20px' }}>
                        <a href="/Stratify">
                            <li><i className="fa fa-instagram"></i></li>
                        </a><a href="/Stratify">
                            <li><i className="fa fa-snapchat"></i></li>
                        </a><a href="/Stratify">
                            <li><i className="fa fa-twitter"></i></li>
                        </a>
                    </ul>
                </div>
            </div>
            <h6 style={{ 'color': 'white', 'text-align': 'center' }}>Copyrights©2021.All Rights Reserved</h6>
        </div>
    );

}

export default Footer;