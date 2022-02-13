import PostPage from './PostPage';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';


const Cell = ({ post }) => {
    const {id,title, datetime, body, editdatetime} = post;
   
    return(
        <div className="cell-post">
            <Link to={ `/post/${ id }` }>
                <h2>{ 
                    (title).length <= 25 ? title : `${(title).slice(0, 25)}`
                }</h2>
                <i>{ editdatetime ? `${editdatetime} (edited)` : datetime }</i>
            </Link>
            <p>{ 
                (body).length <= 75 ? body : `${(body).slice(0, 75)}....`
            }</p>
        </div>
    )
}

export default Cell;
