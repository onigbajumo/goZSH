import React, {Component} from 'react';
import Direction from './component/Direction';
import City from './component/City';
import State from './component/State';
import Travel from './component/Travel';

import {BrowserRouter, Route, Switch} from 'react-router-dom';



const Router = ()=> (
    <BrowserRouter>
    <div>
        <switch>
            <Route path= "/" component={Direction} exact={true} />
            <Route path= "/city" component={City} />
            <Route path= "/state" component={State} />
            <Route path= "/travel" component={Travel} />
        </switch>
    </div>
    
    </BrowserRouter>
)
export default Router;