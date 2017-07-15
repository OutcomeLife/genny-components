import React from 'react';
import ReactDOM from 'react-dom';
import { Collection } from './examples';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
<Collection />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
