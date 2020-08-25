import axios from 'axios';

export default async id => {
    try {
        if(!id){
            throw new Error('Movie ID cannot be undefined')
        }
        const { data } = await axios.get(`/movie/${id}`)
        return data;
    }catch(e){
        throw (e)
    }
}