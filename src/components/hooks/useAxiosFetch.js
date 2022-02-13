import { useState, useEffect } from 'react';
import axios from 'axios';


const useAxiosFetch = (apiUrl) => {
    const [data, setData] = useState([]);    
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);

            try{
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if(isMounted){
                    setData(response.data);
                    setFetchError(null);
                }

            }catch(err){
                if(isMounted){
                    setData([]);
                    setFetchError(err.message);
                }
            }finally{
                isMounted && setIsLoading(false);
            }
        }
        
        //Call fetch data
        fetchData(apiUrl);

        //Clean up
        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [apiUrl])

    

    return { data, fetchError, isLoading };
    

}


export default useAxiosFetch;