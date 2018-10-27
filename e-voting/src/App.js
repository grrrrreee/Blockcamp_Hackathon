import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CertID extends Component {
  constructor(props) {
    super(props);
    //this._isAuthed = this._isAuthed.bind(this);
    this.state = {
      name = "",
      number = "",
      depart = "",
    }
  }

  _inputName(event){
    let _name = event.target.value;
    this.setState({
      name = _name
    })
  }

  _inputNumber(event){
    let _number = event.target.value;
    this.setState({
      number = _number
    })
  }

  _inputDepart(event){
    let _depart = event.target.value;
    this.setState({
      depart = _depart
    })
  }

  render() {
    return(
      <div>
        이름 : <input type="text" onChange={this._inputName()}/>
        학번 : <input type="text" onChange={this._inputNumber()}/>
        단과대학 : <input type="text" onChange={this._inputDepart()}/>
        <input type="button" onClick={this.props._isAuthed(this.state.name, this.state.number, this.state.depart)}> Submit </input>
      </div>
    )
  }
}

class Index extends Component {
  constructor(props) {
    super(props);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this._isAuthed = this._isAuthed.bind(this);
    this.state = {
      auth : false,
    };
  }

  componentDidMount() {
    //data fetch
  }
  
  _isAuthed(name, number, depart) {
    let isCert = false;

    if(name!="" && number!="" && depart!=""){
      isCert = true;
    } else {
      alert("hey missed any part!");
    }

    if(isCert == true) {
      this.setState({
        auth: true
      });
    } else {
      this.setState({
        auth: false
      });
    }
  }

  render() {
    if(this.state.auth == false){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              C-Link
            </p>
          </header>
          <body>
            <CertID _isAuthed={this._isAuthed()}/>
          </body>
        </div>
      );
    } else {

    }
  }

  render() {
    if(this.props.auth == false) {
      return(
        <div>
          <CertID _isAuthed={this.props._isAuthed()}/>
        </div>
      )
    } else {
      return(
        <div>
          auth-ed 이후 화면
        </div>
      )
    }
  }
}

export default App;
