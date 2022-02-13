import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/post';
import { format } from 'date-fns';
import useAxiosFetch from '../../components/hooks/useAxiosFetch';


const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [posts,setPosts] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const datenow = format(new Date(), "MMMM dd,yyyy pp");
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    //Load data
    useEffect(() => {
        setPosts(data);
    },[data])

    //SearchData
    useEffect(() => {
        const filteredResult = posts.filter(post =>  
        ((post.title).toLowerCase()).includes(searchItem.toLowerCase())
        ||
        ((post.body).toLowerCase()).includes(searchItem.toLowerCase())
        )

        setSearchResult(filteredResult.reverse());
    }, [posts,searchItem])

    //HandleUpdate
    const handleUpdate = async (id) => {
        if(!window.confirm("are you sure?")) return;
        //const post = posts.find(item => item.id == id);
        //const newPost = {...post, datetime: datenow, title: editTitle, body: editBody };
        
        try{
        const response = await api.patch(`/posts/${id}`, { title: editTitle, body: editBody, editdatetime: datenow });
        setPosts(posts.map(post => post.id == id ?  response.data : post));

        }catch(err){
        console.log(err.message);
        }
        
        


        setEditTitle('');
        setEditBody('');

        navigate('/')
    }

    //HandlePost
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const newPost = {userId: id, id: id, datetime: datenow, title: postTitle, body: postBody};

        try{
        const response = await api.post('/posts', newPost);
        // if(!response.ok) throw Error("INTERNAL PROBLEM");
        const updatePost = [...posts, response.data ];
        setPosts(updatePost);
        
        setPostTitle('');
        setPostBody('');
        }catch(err){
        console.log(err.message);
        }

        navigate('/');
    }
    
    //handeDelete
    const handleDelete = async (id) => {
        if(!window.confirm("Are you sure to delete?")) return;
        try{
        await api.delete(`/posts/${id}`);
        setPosts(posts.filter(item => item.id !== id));
        }catch(err){
        console.log("Impossible to delete");
        }
        navigate('/');
    }




    return(
        <DataContext.Provider value={{
            posts,handleUpdate,editTitle,setEditTitle,editBody,setEditBody,
            postTitle,setPostTitle,postBody,setPostBody,handleSubmit,handleDelete,
            fetchError,isLoading,searchResult,searchItem,setSearchItem
        }}>
            {children}
        </DataContext.Provider>
    )
}



export default DataContext;

