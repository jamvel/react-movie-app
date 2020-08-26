import axios from 'axios';

const defaultParams = {
    appendToResponse: 'videos,similar'
}

export default async (id, { appendToResponse } = defaultParams) => {
    try {
        if(!id){
            throw new Error('Movie ID cannot be undefined')
        }
        const { data } = await axios.get(`/movie/${id}`, {
            params: {
                append_to_response: appendToResponse
            }
        })
        return data;
    }catch(e){
        throw (e)
    }
}