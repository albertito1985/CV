import React, {Component } from 'react';
import './experienceSlider.css';

export default class ExperienceSlider extends Component {
  constructor(props){
    super(props);
    this.state={
      actualPicture:0,
      scrollPosition:undefined,
      scrollDirection:undefined
    };
    this.show=false;
    this.createContent=this.createContent.bind(this);
    this.assignPics=this.assignPics.bind(this);
    this.createDots=this.createDots.bind(this);
    this.resetAnimation=this.resetAnimation.bind(this);
    this.animatePictures=this.animatePictures.bind(this);
    this.calculateDirection=this.calculateDirection.bind(this);
  }

  static getDerivedStateFromProps(props,state){
    state.scrollDirection = (state.scrollPosition>props.scrollposition)?"up":"down";
    state.scrollPosition = props.scrollposition;
    return null;
  }

  componentDidMount(){
    this.assignPics();
  }

  resetAnimation(){

  }

  componentDidUpdate(){
/*     this.animateText();
    this.animatePictures(); */
  }

  calculateDirection(){

  }

  animatePictures(){
    console.log("animate");
    let length=this.props.pics.length;
    let middlepoint=(this.props.pics.length-2)/2;
    let oddMiddle=(middlepoint%2)?true:false;
    let left= oddMiddle?middlepoint+0.5:middlepoint;
    let orderedArray=[]
    let processingPictureNumber=this.state.actualPicture-left;
    if(processingPictureNumber<0)processingPictureNumber=length+processingPictureNumber;
    let AnimationDirection = "rightToLeft";

    for(let i=0; i<length;i++){
      if(processingPictureNumber===length){
        processingPictureNumber=0;
      };
      orderedArray.push(processingPictureNumber);
      
      processingPictureNumber++;
    }
    /** Aquí me quedé */
    for(let i=0; i<orderedArray.length-1;i++){
      
      let animationLeft=(this.state.direction==="up")?"experienceBackgroundAnimateLeft":"experienceBackgroundAnimateRight";
      let animationRight=(this.state.direction==="up")?"experienceBackgroundAnimateRight":"experienceBackgroundAnimateLeft";

      if(orderedArray[i]===this.state.actualPicture){
        let pic = document.getElementById(`${this.props.name}Back${orderedArray[i]}`);
        pic.classList.add("experienceBackgroundAnimateActual");
      }
      if(orderedArray[i+1]===this.state.actualPicture){
        let pic = document.getElementById(`${this.props.name}Back${orderedArray[i+1]}`);
        pic.classList.add(animationLeft);
      }
      if(orderedArray[i-1]===this.state.actualPicture){
        let pic = document.getElementById(`${this.props.name}Back${orderedArray[i-1]}`);
        pic.classList.add(animationRight);
      }
    }

    /* let pic = document.getElementById(`${this.props.name}Back${processingPictureNumber}`);      
    if(processingPictureNumber===this.state.actualPicture){
      pic.classList.add("experienceBackgroundAnimateActual");
    }else if(processingPictureNumber>this.state.actualPicture){
      pic.classList.add("experienceBackgroundAnimateRight")
    }else if(processingPictureNumber<this.state.actualPicture){
      pic.classList.add("experienceBackgroundAnimateLeft")
    } */
    
  }

  animateText(){
    animation=animation.bind(this);
    if(this.props.show!==this.show){
      animation();
      this.show=!this.show;
    };

    function animation(){
      let experienceSlider=document.getElementById(`experienceSlider${this.props.name}`);
      setTimeout(()=>{
        experienceSlider.classList.toggle("experienceSlideranimate");
      },1000);
      this.setState({showing:!this.props.showing});
    }
  }



  assignPics(){
    let name=this.props.name;
    for(let i=0;i<this.props.pics.length;i++){
      let backgroundObject= this.props.pics[i].background;
      let foregroundObject= this.props.pics[i].foreground;
      let background= document.getElementById(`${name}Back${i}`);
      let foreground= document.getElementById(`${name}Fore${i}`);
      
      background.style.backgroundImage = `url(${backgroundObject.pic})`;
      if(backgroundObject.style){
        for(let x=0;x<backgroundObject.style.length;x++){
          background.style[backgroundObject.style[x].name]=backgroundObject.style[x].value;
        }
      };
      foreground.style.backgroundImage = `url(${foregroundObject.pic})`;
      if(foregroundObject.style){
        for(let x=0;x<foregroundObject.style.length;x++){
          foreground.style[foregroundObject.style[x].name]=foregroundObject.style[x].value;
        }
      }
    }
    /*Start position */
    let counter = this.props.pics.length-1;
    let assigning = "left";
    for(let i=0;i<this.props.pics.length;i++){
      if(counter===this.props.pics.length){
        counter=0;
        assigning="right";
      };
      let pic = document.getElementById(`${this.props.name}Back${counter}`);
      console.log(pic.style);
      if(counter=== 0){
        /**Do nothing */
      }else if(assigning==="left"){
        pic.style.visibility = "hidden";
        pic.style.left="-100%";
      }else if(assigning==="right"){
        pic.style.visibility = "hidden";
        pic.style.left="100%";
      }
      counter++;
    }


  }

  createContent(){
    let name=this.props.name;
    let content= [];
    for(let i=0;i<this.props.pics.length;i++){
      content.push(<div className="experienceBackground" id={`${name}Back${i}`} key={`${name}Back${i}`}>
        <div className="experienceForeground" id={`${name}Fore${i}`}>
          {(this.props.pics[i].foreground.type === "component")? this.props.pics[i].foreground.pic:false }
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
      <div className="experienceSlider" id={`experienceSlider${this.props.name}`}>
        <div className="dotsContainer">{this.createDots()}</div>
        {this.createContent()}
      </div>
    )
  }
}
