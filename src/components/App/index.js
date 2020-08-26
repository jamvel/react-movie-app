import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from "react-router-dom";

import { initConfig } from 'stores/config/actions';
import GlobalFont from 'assets/fonts/Poppins';

import 'helpers/fontAwesomeLibrary';
import theme from 'helpers/theme';

import Header from 'components/Header';
import Menu from 'components/Menu';
import GenreList from 'components/GenreList'

import routeMap from 'helpers/routeMap';
import PopularMovies from 'routes/PopularMovies';
import TopRatedMovies from 'routes/TopRatedMovies';
import NowPlayingMovies from 'routes/NowPlayingMovies';
import MoviesByGenre from 'routes/MoviesByGenre';
import Movie from 'routes/Movie';

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }
    body {
        background-color: #2c3949;
        font-family: 'Poppins';
        margin: 0;
        overflow-x: hidden;
    }
`

const App = ({ location, history, initConfigRx, config, showMenu }) => {

    useEffect(() => {
        initConfigRx();
    }, [initConfigRx])

    return (
        <>
            <GlobalFont />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <Menu open={showMenu} items={routeMap} />
                <Switch location={location}>
                    <Route exact={true} path="/" component={PopularMovies} />
                    <Route exact={true} path="/top" component={TopRatedMovies} />
                    <Route exact={true} path="/now-playing" component={NowPlayingMovies} />
                    <Route
                            path="/genre/:id"
                            render={props => (
                                <>
                                    <GenreList />
                                    <MoviesByGenre id={props.match.params.id} />
                                </>
                            )}
                        />
                    <Route
                        path="/movie/:id"
                        render={props => (
                            <Movie id={props.match.params.id} />
                        )}
                    />
                    {/* <Route render={() => (<div>not found</div>)} /> */}

                </Switch>
            </ThemeProvider>
        </>
    );
}

const mapStateToProps = state => {
    return {
        config: state.config,
        showMenu: state.ui.showMenu 
    }
}

const mapDispatchToProps = dispatch => ({
    initConfigRx: () => dispatch(initConfig()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)