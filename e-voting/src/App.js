import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CertID extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        이름 : <input type="text"/>
        학번 : <input type="text"/>
        단과대학 : <input type="text"/>
        <input type="button"/>
      </div>
    )
  }

}

class Index extends Component {
  constructor(props) {
    super(props);
  }

  /*
  handleMouseMove(event) {
  }
  */
  
    render() {
      if(this.props.auth == false){
        return(
          <div>
            <CertID />
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
//{this.props.render(this.state)}

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
  
  _isAuthed() {
    let isCert = false;

    if(isCert == true) {
      this.setState({
        auth: true
      });
    } else {
      this.setState({
        auth: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            C-Link
          </p>
        </header>
        <body>
          <Index name="C-Link" auth={this.state.auth} />
        </body>
      </div>
    );
  }
}

export default App;
