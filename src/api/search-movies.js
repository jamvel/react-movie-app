import axios from 'axios';

let tokenSource;
export default async query => {
    try {
        if (typeof tokenSource !== typeof undefined) {
            tokenSource.cancel('Operation canceled due to new request.');
        }
        // save the new request for cancellation
        tokenSource = axios.CancelToken.source();
    
        const { data } = await axios.get('/search/movie', {
            params: {
                query
            },
            cancelToken: tokenSource.token
        });
    
        return { data };
    } catch (e) {
        if (axios.isCancel(e)){
            return { 
                cancelPrevQuery: true 
            };
        }
        throw e;
    }
}