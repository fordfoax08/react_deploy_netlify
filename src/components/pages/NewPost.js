import { useContext } from 'react';
import DataContext from '../context/DataContext';

const NewPost = () => {
    const { postTitle,setPostTitle,postBody,setPostBody,handleSubmit } = useContext(DataContext);

    return(
        <main className="newpost-main">
            <h2>New post</h2>
            <form className="newpost-form" onSubmit={ handleSubmit }>
                <label htmlFor="title"></label>
                <input 
                    input="text"
                    placeholder="Title"
                    required
                    value={ postTitle }
                    onChange={ (e) => setPostTitle(e.target.value) }
                />
                <textarea 
                    placeholder="Post"
                    rows="17"
                    required
                    value={ postBody }
                    onChange={ (e) => setPostBody(e.target.value) }
                />
                <input 
                    type="submit"
                    value="POST"
                    
                />
                
            </form>
        </main>
    )
}

export default NewPost;