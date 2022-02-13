import Cell from './Cell';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Post = () => {
    const { searchResult } = useContext(DataContext);

    return(
        <>
            {
                searchResult.map(post => (
                        (<Cell post={ post } key={ post.id } />)
                    )
                )
            }
        </>
    )
}

export default Post;