import React, { Component } from 'react';
import './Statful-timer.css'

function timert(){   var date = new Date();
    date.setHours(0,30,0,0); // Set hours, minutes and seconds and milliseconds
     var h = date.getTime();
     return h
}
var counter;
 
class Timer extends Component {
    constructor(props){
        super(props);
        this.state = 
             { status: false,
                 timer:timert()
            }
     this.incrementCount = this.incrementCount.bind(this)
     this.stopincrement = this.stopincrement.bind(this)
     this.resetfunction = this.resetfunction.bind(this)

    }
 incrementCount() { counter= setInterval(function(){
            this.setState({timer: this.state.timer + 1000}) }.bind(this), 1000);
            this.setState({
                status: !this.state.status
            })
        }
stopincrement(){
    clearInterval(counter)
    counter = null
    this.setState({
        status: !this.state.status
    })   
 }
 resetfunction(){ 
    clearInterval(counter)
    counter = null
    this.setState({timer: timert()})
 
 }
 millisecondtodate(){ 
 function addZ(n) {
    return (n<10? '0':'') + n;}
var dt = new Date(this.state.timer);
var hrs = dt.getHours();
var mins = dt.getMinutes();
var secs = dt.getSeconds();
var totaldate = addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs) ;
return totaldate;
 }
    render() {
        return (
        
            <div className="timer_element">
  

            <h1>{ this.millisecondtodate()}</h1>  

            <div className="designation"> 
            <div className="Hour">hours</div>     
             <div className="Minute">minutes</div> 
             <div className="Second" > seconds</div>   
             </div>
             <div className="buttons">
             <button className="start"  onClick={this.state.status ? this.stopincrement : this.incrementCount } >Start </button>
             <button className="reset" onClick={this.resetfunction}>Reset </button>
              </div>
            </div>

    );
  }
}

export default Timer;