import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Nav = () => {
    const { searchItem,setSearchItem } = useContext(DataContext);
    return(
        <nav className="navig">
            <form className="navig-search-form">
                <label htmlFor="navig-search"></label>
                <input 
                    type="text" 
                    className="navig-search"
                    placeholder="Search post"
                    value={ searchItem }
                    onChange={ (e) => setSearchItem(e.target.value) }
                />
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="post">Post</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;