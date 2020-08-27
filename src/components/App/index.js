import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from "react-router-dom";

import { initConfig } from 'stores/config/actions';

import 'helpers/fontAwesomeLibrary';
import theme from 'helpers/theme';

import Header from 'components/Header';
import Menu from 'components/Menu';
import GenreList from 'components/GenreList'
import Error from 'components/Error';
import Suspend from 'components/Suspend';

const PopularMovies = React.lazy(() => import('routes/PopularMovies'));
const TopRatedMovies = React.lazy(() => import('routes/TopRatedMovies'));
const NowPlayingMovies = React.lazy(() => import('routes/NowPlayingMovies'));
const MoviesByGenre = React.lazy(() => import('routes/MoviesByGenre'));
const Movie = React.lazy(() => import('routes/Movie'));


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

const App = ({ location, initConfigRx }) => {

    useEffect(() => {
        initConfigRx();
    }, [initConfigRx])

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <Menu />
                <Switch location={location}>
                    <Route exact={true} path="/" component={Suspend(PopularMovies)} />
                    <Route exact={true} path="/top" component={Suspend(TopRatedMovies)}/>
                    <Route exact={true} path="/now-playing" component={Suspend(NowPlayingMovies)} />
                    <Route
                            path="/genre/:id"
                            render={Suspend(props => (
                                <>
                                    <GenreList />
                                    <MoviesByGenre id={props.match.params.id} />
                                </>
                            ))}
                        />
                    <Route
                        path="/movie/:id"
                        render={Suspend(props => (
                            <Movie id={props.match.params.id} />
                        ))}
                    />
                    <Route render={Suspend(() => (<Error text={'Page not found'} />))} />
                </Switch>
            </ThemeProvider>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    initConfigRx: () => dispatch(initConfig()),
})


export default connect(null, mapDispatchToProps)(App)