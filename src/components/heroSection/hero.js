import React, { Component } from 'react';
import './hero.css';
import videoBackground from '../../videos/67358-521707474_medium.mp4';

export default class Hero extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    this.animationName=this.animationName.bind(this);
/*     this.animationDisapear=this.animationDisapear.bind(this); */
  }

  componentDidMount(){
    var container1 = document.getElementsByClassName("namesUp")[0];
    var container2 = document.getElementsByClassName("namesDown")[0];
    this.animationName(container1,"Up");
    this.animationName(container2,"Down");

    /* var videoSize=document.getElementById("heroVideo").offsetHeight;
    var heroSection = document.getElementById("hero");
    heroSection.style.height=videoSize+"px"; */
  }

  animationName(container,direction){
    let setUpDirection=undefined
     
    if(direction==="Up"){
      setUpDirection="marginRight";
    }else{
      setUpDirection="marginLeft";
    }
    let childWidth = container.offsetWidth;
    let nameStay = document.getElementsByClassName("heroName")[0].offsetWidth;
    let nameLogo = document.getElementsByClassName("logoCircle")[0];
    container.style.opacity=0;
    container.style[setUpDirection]=((childWidth)*-1)+"px";
    setTimeout(()=>{
      nameLogo.style.opacity=1;
    },5000)
   
  }

  render() {
    return (        
        <div id="hero">
            <video autoPlay muted loop id="heroVideo">
              <source src={videoBackground} type="video/webm"/>
            </video>
          <div className="namesBothlWrap">
            <div className="namesDownWrap">
              <div className="namesDown">
                  
                  <h1 className="heroName">Alberto Nuñez</h1>
                  <h1 className="heroName">Alberto Nuñez</h1>
                  <h1 className="heroName">Alberto Nuñez</h1>
              </div>
            </div>
            <div className="namesUpWrap">
              <div className="namesUp">
                  
                  <h1 className="heroName">Alberto Nuñez</h1>
                  <h1 className="heroName">Alberto Nuñez</h1>
                  <h1 className="heroName">Alberto Nuñez</h1>
              </div>
            </div>
          </div>
          <div className="logoCircle"><h1>Alberto Nuñez</h1></div>
          
        </div>
    )
  }
}