# React Movie App
A React Application that displays and queries data from the [TMDB API](https://developers.themoviedb.org/3).

Some of the technologies used in this project:
- React
- React Router
- Redux
- Redux Thunk
- Axios
- Styled Components

The React application connects to the TMDB API via a serverless proxy running on Vercel

## Local Setup
To setup locally you can either request data from the TMDB API directly by changing `REACT_APP_TMDB_API_BASE_URL` and `REACT_APP_TMDB_API_KEY` in the .env file

### Local Vercel Proxy
You can also setup a local serverless server by using the Vercel TMDB Proxy submodule in the project. To do this simply pull the submodule and set it up as indicated by the README
