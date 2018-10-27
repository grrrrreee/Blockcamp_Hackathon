import React, { Component } from 'react';
//import axios from 'axios';

class Create extends Component {
    constructor(props){
        super(props);
        this._inputTitle = this._inputTitle.bind(this);

        this.state = {

        }
    }

    _inputTitle(){

    }
    render(){
        return(
            <div>
                <p>Create Page</p>
                <input type="text" value="Vote Title" onChange={this._inputTitle} />
            </div>
        )
    }
}

export default Create