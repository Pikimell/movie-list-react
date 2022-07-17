import React, {Component} from 'react';

import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import FilmDetails from "./components/FilmDetails/FilmDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<Body/>}/>
                        <Route path={'/popular'} element={<Body/>}/>
                        <Route path={'/home'} element={<Body/>}/>
                        <Route path={'/film/:id'} element={<FilmDetails/>}/>
                        <Route path={'*'} element={<ErrorPage/>}/>
                    </Routes>
                </Router>

            </div>
        );
    }
}

export default App;
