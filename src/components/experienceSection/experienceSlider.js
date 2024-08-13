import React, { Component } from 'react';
import './experienceSlider.css';

export default class ExperienceSlider extends Component {
  constructor(props){
    super(props);
    this.state={
      actualPicture:undefined
    };
    this.createContent=this.createContent.bind(this);
    this.assignPics=this.assignPics.bind(this);
    this.createDots=this.createDots.bind(this);
  }

  static getDerivedStateFromProps(props,state) {
    
    return null;
  }
  
  componentDidMount(){
    this.assignPics();
  }
  assignPics(){
    let name=this.props.name;
    for(let i=0;i<this.props.pics.length;i++){
      let backgroundObject= this.props.pics[i].background;
      let foregroundObject= this.props.pics[i].foreground;
      let background= document.getElementById(`${name}Back${i}`);
      let foreground= document.getElementById(`${name}Fore${i}`);
      background.style.backgroundImage = `url(${backgroundObject.pic})`;
      foreground.style.backgroundImage = `url(${foregroundObject.pic})`;
      if(backgroundObject.style){
        for(let x=0;x<backgroundObject.style.length;x++){
          background.style[backgroundObject.style[x].name]=backgroundObject.style[x].value;
        }
      };
      if(foregroundObject.style){
        for(let x=0;x<foregroundObject.style.length;x++){
          foreground.style[foregroundObject.style[x].name]=foregroundObject.style[x].value;
        }
      }
    }
  }

  createContent(){
    let name=this.props.name;
    let content= [];
    for(let i=0;i<this.props.pics.length;i++){
      content.push(<div className="experienceBackground" id={`${name}Back${i}`} key={`${name}Back${i}`}>
        <div className="experienceForeground" id={`${name}Fore${i}`}>
        </div>
      </div>)
    }
    return content;
  }

  createDots(){
    let name=this.props.name;
    let dots = [];
    for(let i=0;i<this.props.pics.length;i++){
      dots.push(<div className="experienceDots" id={`${name}dot${i}`} key={`${name}dot${i}`}></div>)
    }
    return (dots);
  }

  calculateSection(scrollPosition){
    let actualSection = (Math.floor(scrollPosition/this.vh));
    let validatedSection = ((actualSection-this.sectionsCofee)>-1 && (actualSection-this.sectionsCofee)<this.sectionsProcess+1)?actualSection-this.sectionsCofee:false;
    return validatedSection;
  }

  render() {
    return (
      <div className="experienceSlider">
        <div className="dotsContainer">{this.createDots()}</div>
        {this.createContent()}
      </div>
    )
  }
}
