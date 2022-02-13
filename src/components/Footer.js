const Footer = () => {
    const dateYear = new Date();

    return(
        <footer>
            <p>Copyrights &copy; { dateYear.getFullYear()} </p>
        </footer>
    )
}

export default Footer;