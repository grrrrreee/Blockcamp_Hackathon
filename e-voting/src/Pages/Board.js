import React, { Component } from 'react';
import 'react-table/react-table.css'
import axios from 'axios';

class Board extends Component {
    constructor(props) {
        super(props);

        this._toCreate = this._toCreate.bind(this);
        this._inputTitle = this._inputTitle.bind(this);
        this._inputCand = this._inputCand.bind(this);
        this._inputCandArr = this._inputCandArr.bind(this);
        this._createSubmit = this._createSubmit.bind(this);
        
        this.state = {
            clicked : false,
            title : "",
            candTemp : "",
            candidate : [],
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

    _inputTitle(e){
        let _title = e.target.value;

        this.setState({
            title : _title
        })
    }

    _inputCand(e){
        let _cand = e.target.value;
        
        this.setState({
            candTemp : _cand
        })
    }

    _inputCandArr(){
        let _candArr = this.state.candidate;
        _candArr.push(this.state.candTemp);

        this.setState({
            candidate : _candArr
        })
    }

    _createSubmit(){
        let _title = this.state.title;
        let _candidate = this.state.candidate;

        axios({
            method: 'post',
            url: '/user/12345',
            data: {
              creator: "manager",
              title : _title,
              candidate : _candidate
            }
          }).then((res) => {
            console.log(res);
        });
        
        this.setState({
            title : "",
            candidate : [],
            clicked : false
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
                <div>
                    <p>Create Page</p>
                    <input type="text" placeholder="Vote Title" onChange={this._inputTitle} />
                    <input type="text" placeholder="new cadidate" onChange={this._inputCand} />
                    <input type="button" value="ADD" onClick={this._inputCandArr}/>
                    <p>
                        {this.state.candidate.map((cand) =>
                            <li key={cand}>{cand}</li> 
                        )}
                    </p>
                    <p>
                        <input type="button" value="Create!" onClick={this._createSubmit}/>
                    </p>
                </div>
            )
        }
    }
}

export default Board;