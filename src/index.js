import React from 'react';
import ReactDOM from 'react-dom';
import { Collection } from './examples';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(
    <BrowserRouter>
        <Collection />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
