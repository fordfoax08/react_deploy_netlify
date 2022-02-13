import { useParams,Link } from "react-router-dom";
import { useContext } from 'react';
import DataContext from "../context/DataContext";

const PostPage = () => {
    const { posts,handleDelete } = useContext(DataContext);

    const { id } = useParams();
    const post = posts.find(item => (item.id).toString() === id);
    return(
        <article className="postpage-main">
            {post &&
                (<>
                    <h1>{ post.title }</h1>
                    <i>{ post.editdatetime ? `${post.editdatetime} (edited)` : post.datetime }</i>
                    <p>{ post.body }</p>
                    <input 
                        className="postpage-delete-btn"
                        type="button"
                        value="delete"
                        onClick={() => handleDelete(post.id)}
                    />
                    <Link to={ `/post/edit/${post.id}` }>
                        <input 
                            className="postpage-update-btn"
                            type="button"
                            value="Update"
                        />
                    </Link>
                </>)
            }
            {!post &&
                (<>
                    <h2>File not found</h2>
                    <p>Were sorry to hear this from you</p>
                    <Link to="/">Back to homepage</Link>
                </>)
            }
        </article>
    )
}

export default PostPage;