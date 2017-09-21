import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import BaseLayout from './components/BaseLayout';
import Contacts from './components/Contacts';
import References from './components/References';
import './styles/App.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
     <Switch>
       <Route exact path="/" component={App} />
       <Route path="/home" component={Home} />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/about" component={About} />
       <Route path="/contacts" component={Contacts} />
       <Route path="/references" component={References} />
     </Switch>
     </BaseLayout>
   </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
