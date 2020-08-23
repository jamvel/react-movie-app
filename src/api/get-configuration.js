import axios from 'axios';

export default async () => {
    try {
        const { data } = await axios.get('/configuration')
        return data;
    }catch(e){
        throw (e)
    }
}