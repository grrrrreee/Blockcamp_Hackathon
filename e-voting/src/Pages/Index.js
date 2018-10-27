import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import sha256 from 'sha256';
import { Route } from 'react-router-dom';
import Home from './Home';
import Board from './Board';

class Index extends Component {
    render() {
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/board" component={Board}/>
            </div>
        )
    }
}

export default Index;

