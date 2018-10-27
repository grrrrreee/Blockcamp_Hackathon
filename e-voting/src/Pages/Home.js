import React, { Component } from 'react';
//import axios from 'axios';
import sha256 from 'sha256';
import '../App.css'
import Board from './Board'

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
    
        this.state = {
          name : "",
          number : "",
          birth : "",
          auth : false,
          hash1 : 0,
          pin : "",
          publicKey : "",
          depart : ""
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

      _inputDepart(e){
        let _depart = e.target.value;

        this.setState({
          depart : _depart
        })
      }
    
      _handlePIN() {
        let _public = sha256(this.state.hash1 + this.state.pin);
        
        this.setState({
          publicKey : _public
        })
      }

      render() {
        if(this.state.auth === false){
          return (
            <div>
                <div className="input1">
                <div>
                  <p className="h3" style={{position: "absolute", left: 550, top: 225}} >Name</p>
                  <p className="h3" style={{position: "absolute", left: 550, top: 325}} >Student ID</p>
                  <p className="h3" style={{position: "absolute", left: 550, top: 425}} >Birth</p>
                    <input type="text" class="form-control" placeholder="ENG" style={{position: "absolute", left: 760, top: 235}}onChange={(e)=> {this._inputName(e)}}/>
                    <input type="text" class="form-control" placeholder="number" style={{position: "absolute", left: 760, top: 335}} onChange={(e) => {this._inputNumber(e)}}/>
                    <input type="text" class="form-control" placeholder="YYYYMMDD" style={{position: "absolute", left: 760, top: 435}} onChange={(e)=>{this._inputBirth(e)}}/>
                    <input type="button" value="Submit" className= "btn btn-primary btn-lg" onClick={this._handleSubmit} style={{position: "absolute", left: 765, top: 570}}/>
                </div>
                </div>
                
            </div>
          );
        } else if(this.state.auth === true && this.state.publicKey === ""){
          return (
            <div className="input2">
                <div>
                    <p className="h3" style={{position: "absolute", left: 420, top: 175}} >You are certified!</p>
                </div>
                <div>
                <p className="h3" style={{position: "absolute", left: 420, top: 205}} >Your first hash: {this.state.hash1}</p>
                </div>
                <div>
                    <p className="h3" style={{position: "absolute", left: 420, top: 365}} >please input PIN number : </p>
                    <input type="text" class="form-control" placeholder="4 digits" onChange={(e)=>{this._inputPIN(e)}} style={{position: "absolute", left: 885, top: 380}} />
                    <p className="h3" style={{position: "absolute", left: 420, top: 450}} >Depart : </p>
                    <input type="text" class="form-control" placeholder="Depart" onChange={(e)=>{this._inputDepart(e)}} style={{position: "absolute", left: 885, top: 455}} />
                    <input type="button" className= "btn btn-primary btn-lg" value="Submit" style={{position: "absolute", left: 765, top: 570}} onClick={this._handleSubmit}/>
                </div>
            </div>
          );
        } else if(this.state.publicKey !== "") {
          return(
            <Board publicKey={this.state.publicKey} depart={this.state.depart} />
          )
        }
      }
}

export default Home;