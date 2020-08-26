import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from "react-router-dom";
import { initConfig } from 'stores/config/actions';
import GlobalFont from 'assets/fonts/Poppins';

import 'helpers/fontAwesomeLibrary';

import Header from 'components/Header'
import PopularMovies from 'routes/PopularMovies'
import TopRatedMovies from 'routes/TopRatedMovies'
import NowPlayingMovies from 'routes/NowPlayingMovies'
// import Movie from 'routes/Movie'

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }
    body {
        background-color: #2c3949;
        font-family: 'Poppins';
        margin: 0;
    }
`

const theme = {
    primary: '#2c3949',
    secondary: '#fff'
}

const App = ({ location, history, initConfigRx }) => {

    useEffect(() => {
        initConfigRx();
    }, [])

    return (
        <>
            <GlobalFont />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <Switch location={location}>
                <Route exact={true} path="/" component={PopularMovies} />
                <Route exact={true} path="/top" component={TopRatedMovies} />
                <Route exact={true} path="/now-playing" component={NowPlayingMovies} />
                {/* <Route
                    path="/movie/:id"
                    render={props => (
                        <Movie id={props.match.params.id} />
                    )}
                /> */}
                </Switch>
            </ThemeProvider>
        </>
    );
}

const mapStateToProps = state => {
    return {
        config: state.config
    }
}

const mapDispatchToProps = dispatch => ({
    initConfigRx: () => dispatch(initConfig()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)