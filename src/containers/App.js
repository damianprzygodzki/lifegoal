import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import { getRoutes } from '../routes.js';
import config from '../config.js';

import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={getRoutes(store)} />
            </Provider>
        )
    }
}

export default App;
