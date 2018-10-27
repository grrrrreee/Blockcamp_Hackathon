import React, { Component } from 'react';
import 'react-table/react-table.css'
import axios from 'axios';
import Create from './Create'

class Board extends Component {
    constructor(props) {
        super(props);

        this._toCreate = this._toCreate.bind(this);
        
        this.state = {
            clicked : false
        };
    }

    componentDidMount(){
        let pk = this.props.publicKey;
        let _depart = this.props.depart;

        axios({
            method: 'post',
            url: '/user/12345',
            data: {
              publicKey: pk,
              depart: _depart
            }
          }).then((res) => {
            console.log(res);
        });
    }

    _toCreate(){
        this.setState({
            clicked : true
        })
    }

    render() {
        if(this.state.clicked === false){
            return(
                <div>
                    <p className="h3" style={{position: "absolute", left: 410, top: 120}} >Hello It's Board</p> 
                    <p className="h3" style={{position: "absolute", left: 410, top: 180}}>{this.props.publicKey}</p>
                    <p className="h3" style={{position: "absolute", left: 410, top: 270}} >This is your Voting List</p>
                    <div className="h3" style={{position: "absolute", left: 410, top: 350}}>
                        List
                    </div>
                    <p><input type="button" className= "btn btn-option btn-sm" style={{position: "absolute", left: 1100, top: 130}} value="Create Vote" onClick={this._toCreate} required/></p>
                </div>
            )
        } else if(this.state.clicked === true) {
            return(
                <Create />
            )
        }
    }
}

export default Board;