import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._isAuthed = this._isAuthed.bind(this);
    this._inputName = this._inputName.bind(this);
    this._inputNumber = this._inputNumber.bind(this);
    this._inputDepart = this._inputDepart.bind(this);

    this.state = {
      name : "",
      number : "",
      depart : "",
      auth : false,
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

  _inputDepart(e){
    let _depart = e.target.value;
    this.setState({
      depart : _depart
    })
  }

  _handleSubmit(){
    this._isAuthed(this.state.name, this.state.number, this.state.depart);
  }
  
  _isAuthed(name, number, depart) {
    let isCert = false;

    if(name!=="" && number!=="" && depart!==""){
      isCert = true;
    } else if(name==="" || number==="") {
      alert("hey missed any part!");
    }

    if(isCert === true) {
      this.setState({
        auth: true
      });
    } else {
      console.log("false");
    }
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
            이름 : <input type="text" onChange={(e)=> {this._inputName(e)}}/>
            학번 : <input type="text" onChange={(e) => {this._inputNumber(e)}}/>
            단과대학 : <input type="text" onChange={(e)=>{this._inputDepart(e)}}/>
            <input type="button" value="Submit" onClick={this._handleSubmit} />
          </div>
        </div>
      );
    } else {
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
        </div>
      )
    }
  }
}

export default App;
