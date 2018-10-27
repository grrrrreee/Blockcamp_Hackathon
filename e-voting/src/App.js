import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Index extends Component {
  constructor(props) {
    super(props);

  }

  /*
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  */

  /*
    Instead of providing a static representation of what <Mouse> renders,
    use the `render` prop to dynamically determine what to render.
  */

  render(){
    return(
      <div>
        초기화면 컴포넌트 구성중
        ?? == {this.props.name}
        
      </div>
    )
  }
}

//{this.props.render(this.state)}

class App extends Component {
  constructor(props) {
    super(props);
    //this.handleMouseMove = this.handleMouseMove.bind(this);
    //this.state = { x: 0, y: 0 };
  }

  //life cycle
  //data fetch
  //function to network with back
  
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
          <Index name="C-Link"/>
        </body>
      </div>
    );
  }
}

export default App;

/*
<Index render={mouse => (
  <Cat mouse={mouse} />
)}/>
*/
