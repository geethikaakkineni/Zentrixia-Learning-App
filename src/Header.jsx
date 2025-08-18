function Header(){
    const logo='./src/assets/logo.png';
    return(
        <header>
            <img id="headerlogo" src={logo}></img>
            <h1 id="headercompany">Zentrixia</h1>
            <h3 id="headertagline">Learn Fast. Learn Smart.</h3>
        </header>
    );
}

export default Header