import axios from 'axios';

const defaultRegion = process.env.REACT_APP_TMDB_DEFAULT_REGION || 'US';
const defaultLanguage = process.env.REACT_APP_TMDB_DEFAULT_LANGUAGE || 'en-US';

const defaultParams = {
    pageIndex: 1,
    region: defaultRegion,
    language: defaultLanguage
}

export default async ({ genre, pageIndex, region, language } = defaultParams) => {
    try {
        const { data } = await axios.get('/discover/movie', {
            params: {
                page: pageIndex,
                region,
                language,
                with_genres: genre
            }
        })
        return data;
    }catch(e){
        throw (e)
    }
}