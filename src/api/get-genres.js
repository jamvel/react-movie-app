import axios from 'axios';

export default async () => {
    try {
       const { data } = await axios.get('/genre/movie/list')
       return data;
    }catch(e){
        throw (e)
    }
}