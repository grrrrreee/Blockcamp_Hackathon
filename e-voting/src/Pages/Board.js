import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class Board extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }

    componentDidMount(){
        
    }

    render() {
        return(
            <div>
                <p>Hello It's Board</p> 
                {this.props.publicKey}
            </div>
        )
    }
}

export default Board;