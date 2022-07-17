import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Provider from "react-redux/lib/components/Provider";
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

    ,
    document.getElementById('root')
);
