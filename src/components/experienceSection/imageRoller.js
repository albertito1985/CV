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
        let fixed= document.getElementById(`${this.props.name}${this.props.number}Fixed`);
        let moving= document.getElementById(`${this.props.name}${this.props.number}Moving`);
        fixed.style.backgroundImage = `url(${this.props.fixed})`;
        moving.style.backgroundImage = `url(${this.props.moving})`;
        if(this.props.fixedStyle){
          this.applyStyle(fixed,this.props.fixedStyle);
        };
        if(this.props.movingStyle){
          this.applyStyle(moving,this.props.movingStyle);
        }
        /**Option 2 */
        this.animateRoller();
    }

    applyStyle(container,styles){
      let stylesKeys= Object.keys(styles);
      stylesKeys.forEach((key)=>{
          container.style[key]=styles[key];
      });
      
    }

    animateRoller(){
      var moving= document.getElementById(`${this.props.name}${this.props.number}Moving`);        
      if(this.animation===false){
        this.animation=true;
        moving.classList.toggle("movingImageAnimate");
        var interval= setInterval(()=>{
          moving.classList.toggle("movingImageAnimate");
        },this.props.time)
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
