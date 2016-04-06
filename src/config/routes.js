import React from 'react';
import {RouteHandler, Link, Route, Router, browserHistory} from 'react-router';
import App from '../components/app';
import Audience from '../components/audience';
import Board from '../components/board';
import Speaker from '../components/speaker';
import Meeting from '../components/meeting';

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="audience" component={Audience} />
            <Route path="board" component={Board} />
            <Route path="speaker" component={Speaker} />
            <Route path="meeting" component={Meeting} />
        </Route>
    </Router>
)


export default Routes;