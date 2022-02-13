const Header = ({ title }) =>{
    return(
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title : "EMPTY TITLE"
}


export default Header;