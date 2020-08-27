# Comments
## TMDB API
To connect to the TMDB API I created a Serverless proxy on Vercel. I chose to do this so that the TDMB API key is not exposed in the app when making requests to the API. The code for the serverless proxy is bundled with this application as a submodule and can be found [here](https://github.com/jamvel/vercel-tmdb-proxy).
## Redux Structure
The Redux store houses 3 different reducers:
- `config` : contains configuration obtained from TMDB
- `movies` : contains movie and movie list data
- `ui` : ui state information 
    
The `config` store is populated by a dispatch on App mount

### Lists
All Lists inside the application live inside `movies.lists`. These lists only contain the index of a movie. The actual data of a movie is stored in `movies.data`.

Data inside the `movies.data` is indexed by the `id` so that the data is easily accessible when going through a List.

A list is created dynamically when a dispatch occurs. This dispatch is created by the `getList` function which is found in the `movies/actions.js` file. This function generates the action thunks that will be disptached.

## Improvements
- Implement a smart redux cache where unused data is periodically cleared from the store to avoid having too much unnecessary data in the store. This can be possibly achieved by storing a TTL in the store which is checked periodically during a clean cyle
- Implement a Virtual Scroll: A virtual scroll will optimise the application as only elements that are visible are rendered in the DOM tree
