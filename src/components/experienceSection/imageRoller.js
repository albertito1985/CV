import React, { Component } from 'react';
import './imageRoller.css';

export default class ImageRoller extends Component {
    constructor(props){
        super(props);
        this.state={
        };
        this.animateRoller=this.animateRoller.bind(this);
        this.animation = false
        
    }
    componentDidMount(){
      console.log("RollerMounted");
      
        let fixed= document.getElementById(`${this.props.name}${this.props.number}Fixed`);
        let moving= document.getElementById(`${this.props.name}${this.props.number}Moving`);
        fixed.style.backgroundImage = `url(${this.props.fixed})`;
        moving.style.backgroundImage = `url(${this.props.moving})`;

      console.log(this.props)
        /**Option 2 */
        /* this.animateRoller();     */    
    }


    animateRoller(){
      
        var moving= document.getElementById(`${this.props.name}${this.props.number}Moving`);        
        if(this.animation===false){
          this.animation=true;
          var interval= setInterval(()=>{
            console.log(moving.classList.toggle("movingImageAnimate"));
            console.log("runned");
          },5000)
        }
    }
  render() {
    return (
      <div className="imageRoller" >
        <div className={`movingImage ${this.props.name}${this.props.number}Moving`} id={`${this.props.name}${this.props.number}Moving`}></div>

        <div className="fixedImage" id={`${this.props.name}${this.props.number}Fixed`}>
        </div>
      </div>
    )
  }
}
