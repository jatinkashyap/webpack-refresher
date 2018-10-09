import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';

import Users from './container/Users';
//import Pizza from './container/Pizza';

import asyncComponent from './hoc/asyncComponent';

const asyncPizza = () => {
    return import ('./container/Pizza');
}


class App extends Component{
    render(){
        <div>
            <div>
                <Link to="/">Users</Link> |
                <Link to="/pizza">Pizza</Link>
            </div>
            <div>
                <Route path="/" exact component={Users}/>
                <Route path="/pizza"  component={asyncPizza}/>
            </div>
        </div>
    }
}