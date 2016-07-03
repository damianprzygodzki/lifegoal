import React from 'react';
import { Router, Route, IndexRoute, NoMatch } from 'react-router';

import Main from './containers/Main.js';

export const getRoutes = (store) => {
    return (
        <Route path="/">
            <IndexRoute component={Main} />
            <Route path="*" component={NoMatch} />
        </Route>
    )
}
