import React, { Component } from 'react';
import './hero.css';
import videoBackground from '../../videos/67358-521707474_medium.mp4';
import { BsPhoneVibrate } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default class Hero extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    this.animationName=this.animationName.bind(this);
  }

  componentDidMount(){
    var container1 = document.getElementsByClassName("namesUp")[0];
    var container2 = document.getElementsByClassName("namesDown")[0];
    this.animationName(container1,"Up");
    this.animationName(container2,"Down");
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
          <div className="heroVideoContainer">
            <video autoPlay muted loop id="heroVideo">
              <source src={videoBackground} type="video/webm"/>
            </video>
          </div>
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
          <div className="card">
            {/* <div className="contactMeTittle"><span className="spanLetsTalk" id="lets"><h1>Let's</h1></span><span className="spanLetsTalk" id="talk"><h1>talk</h1></span></div> */}
            <div className="contactInformation">
                <div className="contactItems telephone">
                    <BsPhoneVibrate/><a href="tel:0737296127">073 72 96 127</a>
                </div>
                <div className="contactItems email">
                    <MdEmail/><a href="mailto:anulo@live.se">anulo@live.se</a>
                </div>
                <div className="contactItems linkedin">
                    <FaLinkedin /><a target="_blank" href="https://www.linkedin.com/in/albertonunezloayza/">/albertonunezloayza</a>
                </div>
            </div>
          </div>
        </div>
    )
  }
}