import Post from './Post';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Home = () => {
    const { searchResult, fetchError, isLoading } = useContext(DataContext);
    return(
        <main className="home-main">
            {isLoading && <p className="statusMsg">Loding post...</p> }
            {fetchError && <p className="statusMsg">{ fetchError }</p>}
            {!isLoading && !fetchError && (searchResult.length ? 
                (<Post />)
            :
                (<h2>No Item</h2>)
            )}
        </main>
    )
}

export default Home;