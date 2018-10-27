import React, { Component } from 'react';
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
                    <p className="h3" style={{position: "absolute", left: 410, top: 150}}>{this.props.publicKey}</p>
                    <p>This is your Voting List</p>
                    <div>
                        List
                    </div>
                    <p><input type="button" value="Create Vote" onClick={this._toCreate}/></p>
                </div>
            )
        } else if(this.state.clicked === true) {
            return(
                <Create />
            )
        }
    }
    

export default Board;