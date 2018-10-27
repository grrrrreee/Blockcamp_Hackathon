import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-table/react-table.css'

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
                <p className="h3" style={{position: "absolute", left: 410, top: 120}} >Hello It's Board</p> 
                <p className="h3" style={{position: "absolute", left: 410, top: 150}}>{this.props.publicKey}</p>
            </div>
        )
        }
    }
    

export default Board;