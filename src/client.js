
import React from 'react';
import ReactDOM from 'react-dom';
import {RouteHandler, Link, Route, Router} from 'react-router';
import App from './components/app';
import Audience from './components/audience';
import Board from './components/board';
import Speaker from './components/speaker';
import Meeting from './components/meeting';

import routes from './config/routes';

const app = document.getElementById('app');


ReactDOM.render((routes), app);






