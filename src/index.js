import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import BaseLayout from './components/BaseLayout';
import './styles/App.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
     <Switch>
       <Route path="/home" component={Home} />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/about" component={About} />
     </Switch>
     </BaseLayout>
   </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
