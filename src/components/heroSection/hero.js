import React, { Component } from 'react';
import './hero.css';
import videoBackground from '../../videos/67358-521707474_medium.webm';

export default class Hero extends Component {
  constructor(props){
    super(props);
    this.state={
      up:0,
      down:0
    }
    this.time=20;
    this.speed=10;
    this.animationName=this.animationName.bind(this);
    this.animationDisapear=this.animationDisapear.bind(this);
  }

  componentDidMount(){
    var container1 = document.getElementsByClassName("namesUp")[0];
    var container2 = document.getElementsByClassName("namesDown")[0];
    this.animationName(true,container1,"left");
    this.animationName(true,container2,"right");

    var videoSize=document.getElementById("heroVideo").offsetHeight;
    var heroSection = document.getElementById("hero");
    heroSection.style.height=videoSize+"px";
  }
  componentWillUnmount(){
    var container1 = document.getElementsByClassName("namesUp")[0];
    var container2 = document.getElementsByClassName("namesDown")[0];
    this.animationName(false,container1,"left");
    this.animationName(false,container2,"right");
  }

  animationName(onOff,container,direction){
    
    if(direction==="left"){
      direction="marginRight";
    }else{
      direction="marginLeft";
    }
  
    let childWidth = container.offsetWidth;
    let speed=this.speed;
    container.style[direction]=((childWidth)*-1)+"px";
    let secondAnimation = this.animationDisapear;

    function upAnimation(){
      let actualMargin =Number(getComputedStyle(container)[direction].replace('px',''));
      let newMargin = (actualMargin+speed)+ "px";
        if((actualMargin-20 >= 0)||!onOff){
          clearInterval(id)
          secondAnimation();
        }else{
          container.style[direction]=newMargin;
        }
    }

    if(onOff===true){
      var id= setInterval(upAnimation,this.time);
    }else{
      clearInterval(id)
    }
  }

  animationDisapear(){
    var containerArray = document.getElementsByClassName("heroName2");
    for(let i=0;i<containerArray.length;i++){
      containerArray[i].classList.add("nameDisapear");
    }
  }

  render() {
    return (        
        <div id="hero">
          <video autoPlay muted loop id="heroVideo">
            <source src={videoBackground} type="video/webm"/>
          </video>
          <div className="namesBothlWrap">
            <div className="namesUpWrap">
              <div className="namesUp">
                  <h1 className="heroName2">Alberto Nuñez</h1>
                  <h1 className="heroName2">Alberto Nuñez</h1>
                  <h1 className="heroName1">Alberto Nuñez</h1>
              </div>
            </div>
            
            <div className="namesDownWrap">
              <div className="namesDown">
                  <h1 className="heroName1">Alberto Nuñez</h1>
                  <h1 className="heroName2">Alberto Nuñez</h1>
                  <h1 className="heroName2">Alberto Nuñez</h1>
              </div>
            </div>
          </div>
          
          
        </div>
    )
  }
}