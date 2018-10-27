import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sha256 from 'sha256';

class App extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._isAuthed = this._isAuthed.bind(this);
    this._inputName = this._inputName.bind(this);
    this._inputNumber = this._inputNumber.bind(this);
    this._inputBirth = this._inputBirth.bind(this);
    this._inputPIN = this._inputPIN.bind(this);
    this._handlePIN = this._handlePIN.bind(this);

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

  _inputBirth(e){
    let _birth = e.target.value;
    this.setState({
      birth : _birth
    })
  }

  _handleSubmit(){
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

  render() {
    if(this.state.auth === false){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              C-Link
            </p>
          </header>
          <div>
            Eng Name : <input type="text" placeholder="ENG" onChange={(e)=> {this._inputName(e)}}/>
            ID Number : <input type="text" onChange={(e) => {this._inputNumber(e)}}/>
            birth : <input type="text" placeholder="19960318" onChange={(e)=>{this._inputBirth(e)}}/>
            <input type="button" value="Submit" onClick={this._handleSubmit} />
          </div>
        </div>
      );
    } else if(this.state.auth === true){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              C-Link
            </p>
          </header>
          <div>
            You are certified!
          </div>
          <div>
            Your first hash : {this.state.hash1}
          </div>
          <div>
            please input PIN number : <input type="text" placeholder="4 digits" onChange={(e)=>{this._inputPIN(e)}} />
            <input type="button" value="Submit" onClick={this._handleSubmit} />
          </div>
        </div>
      );
    }
  }
}

export default App;
