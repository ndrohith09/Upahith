const Header = () => {
    return (
        <header className="header">
            <div className="overlay">
                <h1 className="subtitle">Creativity is seeing what others see and thinking what no one else ever thought.</h1>
            </div>
            <div className="shape">
                <svg viewBox="0 0 1500 200">
                    <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
                </svg>
            </div>
            <div className="mouse-icon"><div className="wheel"></div></div>
        </header>
    );
 
}

export default Header;