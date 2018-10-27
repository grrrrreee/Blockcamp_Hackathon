import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import sha256 from 'sha256';
import '../App.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this._handleSubmit = this._handleSubmit.bind(this);
        this._isAuthed = this._isAuthed.bind(this);
        this._inputName = this._inputName.bind(this);
        this._inputNumber = this._inputNumber.bind(this);
        this._inputBirth = this._inputBirth.bind(this);
        this._inputPIN = this._inputPIN.bind(this);
        this._handlePIN = this._handlePIN.bind(this);
        //this._redirect = this
    
        this.state = {
          name : "",
          number : "",
          birth : "",
          auth : false,
          hash1 : 0,
          pin : "",
          privateKey : ""
        };
      }
    
      componentDidMount() {
        //data fetch
      }
    
      _inputName(e){
        let _name = e.target.value;
        this.setState({
          name : _name
        })
      }
    
      _inputNumber(e){
        let _number = e.target.value;
        this.setState({
          number : _number
        })
      }
    
      _inputBirth(e) {
        let _birth = e.target.value;
        this.setState({
          birth : _birth
        })
      }
    
      _handleSubmit() {
        if(this.state.auth===false) {
          this._isAuthed(this.state.name, this.state.number, this.state.birth);
        } else {
          this._handlePIN()
        }
      }
      
      _isAuthed(name, number, birth) {
        let isCert = false;
    
        if(name!=="" && number!=="" && birth!=="") {
          isCert = true;
        } else if(name==="" || number==="") {
          alert("hey missed any part!");
        }
    
        if(isCert === true) {
          let shaed = sha256(this.state.name + this.state.number + this.state.birth)
          this.setState({
            auth : true,
            hash1 : shaed,
          });
        } else {
          console.log("error");
        }
      }
    
      _inputPIN(e) {
        let _pin = e.target.value;
    
        this.setState({
          pin : _pin
        })
      }
    
      _handlePIN() {
        let _private = sha256(this.state.hash1 + this.state.pin);
        alert("Your PrivateKey : " + _private + " \n Be Safe!");
        
        this.setState({
          privateKey : _private
        })
        // state 비동기 문제 잔존
    
        console.log(this.state)
      }

      _redirect() {
          return 
      }
    
      render() {
        if(this.state.auth === false){
          return (
            <div>
                <div className="input1">
                <div>
                  <p style={{position: "absolute", left: 700, top: 285}} >Name</p>
                  <p style={{position: "absolute", left: 700, top: 310}} >Student ID</p>
                  <p style={{position: "absolute", left: 700, top: 335}} >Birth</p>
                    <input type="text" placeholder="ENG" style={{position: "absolute", right: 740, top: 300}}onChange={(e)=> {this._inputName(e)}}/>
                    <input type="text" placeholder="number" style={{position: "absolute", right: 740, top: 325}} onChange={(e) => {this._inputNumber(e)}}/>
                    <input type="text" placeholder="YYYYMMDD" style={{position: "absolute", right: 740, top: 350}} onChange={(e)=>{this._inputBirth(e)}}/>
                    <input type="button" value="Submit" className= "btn btn-primary btn-lg" onClick={this._handleSubmit} style={{position: "absolute", right: 755, top: 380}}/>
                </div>
                </div>
            </div>
          );
        } else if(this.state.auth === true){
          return (
            <div className="input2">
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/board">Board</Link></li>
                    </ul>
                    <hr/>
                </div>
                <div>
                    <p style={{position: "absolute", left: 700, top: 255}} >You are certified!</p>
                </div>
                <div>
                <p style={{position: "absolute", left: 700, top: 285}} >Your first hash: {this.state.hash1}</p>
                </div>
                <div>
                    <p style={{position: "absolute", left: 700, top: 310}} >please input PIN number : </p>
                    <input type="text" placeholder="4 digits" onChange={(e)=>{this._inputPIN(e)}} style={{position: "absolute", left: 900, top: 325}} />
                    <input type="button" value="Submit" onClick={this._handleSubmit}/>
                </div>
            </div>
          );
        }
      }
}

export default Home;