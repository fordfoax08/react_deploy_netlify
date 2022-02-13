import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';


const EditPage = () => {
    const { posts,handleUpdate,editTitle,setEditTitle,editBody,setEditBody } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(item => (item.id).toString() == id);
    useEffect(() => {
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [posts, setEditTitle, setEditBody])

    return(
        <main className="newpost-main" >
            {post && 
            <>
                <h2>Edit item</h2>
                <form className="newpost-form" onSubmit={ (e) => e.preventDefault() }>
                    <label htmlFor="title"></label>
                    <input 
                        input="text"
                        placeholder="Title"
                        required
                        value={ editTitle }
                        onChange={ (e) => setEditTitle(e.target.value) }
                    />
                    <textarea 
                        placeholder="Post"
                        rows="17"
                        required
                        value={ editBody }
                        onChange={ (e) => setEditBody(e.target.value) }
                    />
                    <input 
                        type="button"
                        value="POST"
                        onClick={ () => handleUpdate(id) }
                    />
                    
                </form>
            </>
            }

        </main>
    )
}

export default EditPage;