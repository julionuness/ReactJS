import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './login';
import Dashboard from './dashboard';
import Contact from './contact';

const Main = () => 
(
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;