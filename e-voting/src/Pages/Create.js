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
                <p className="h3" style={{position: "absolute", left: 410, top: 120}}>Create Page</p>
                <input type="text" class="form-control" value="Vote Title" onChange={(e)=>{this._inputPIN(e)}} style={{position: "absolute", left: 410, top: 220}} />
            </div>
        )
    }
}

export default Create