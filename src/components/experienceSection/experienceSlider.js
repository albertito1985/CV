import React, {Component } from 'react';
import './experienceSlider.css';

export default class ExperienceSlider extends Component {
  constructor(props){
    super(props);
    this.state={
      previousPicture:0,
      actualPicture:0,
      scrollPosition:undefined,
      scrollDirection:0
    };
    this.show=false;
    this.createContent=this.createContent.bind(this);
    this.assignPics=this.assignPics.bind(this);
    this.createDots=this.createDots.bind(this);
    this.animatePictures=this.animatePictures.bind(this);
    this.nextPicture=this.nextPicture.bind(this);
    this.previousPicture=this.previousPicture.bind(this);
  }

  static getDerivedStateFromProps(props,state){
    if(state.scrollPosition!==props.scrollPosition){
      state.scrollDirection = (state.scrollPosition>props.scrollPosition)?"up":"down";
      state.scrollPosition = props.scrollPosition;
    }
    return null;
  }

  componentDidMount(){
    this.assignPics();
  }

  componentDidUpdate(){
    (!isNaN(this.state.actualPicture)) && this.animatePictures();
  }

  animatePictures(){
    if(this.state.previousPicture===this.state.actualPicture){
      return null;
    }
    console.log({previous:this.state.previousPicture,actual:this.state.actualPicture});
    let length=this.props.pics.length;
    /**Animate actual picture to the middle */
    let actualPicture= document.getElementById(`${this.props.name}Back${this.state.actualPicture}`);
    let previousPicture= document.getElementById(`${this.props.name}Back${this.state.previousPicture}`);

    /**Observar */
    actualPicture.style.visibility="visible";
    actualPicture.classList.remove("experienceBackgroundAnimateLeft");
    actualPicture.classList.remove("experienceBackgroundAnimateRight");

    /**Animate the other pictures depending on the direction of the scrolling*/
      let leftIndex = (this.state.actualPicture-1<0)?length-1:this.state.actualPicture-1;
      let rightIndex = (this.state.actualPicture+1>=length)?0:this.state.actualPicture+1;
      let LeftContainer= document.getElementById(`${this.props.name}Back${leftIndex}`);
      let rightContainer= document.getElementById(`${this.props.name}Back${rightIndex}`);
      
    if(this.state.scrollDirection==="up"){
      previousPicture.classList.add("experienceBackgroundAnimateRight");
      /* previousPicture.style.visibility="hidden"; */
      /* LeftContainer.style.visibility="hidden"; */
      LeftContainer.classList.remove("experienceBackgroundAnimateRight");
      LeftContainer.classList.add("experienceBackgroundAnimateLeft");
    }else{
      previousPicture.classList.add("experienceBackgroundAnimateLeft");
      /* rightContainer.style.visibility="hidden"; */
      rightContainer.classList.remove("experienceBackgroundAnimateLeft");
      rightContainer.classList.add("experienceBackgroundAnimateRight");
    }
    this.setState({previousPicture:this.state.actualPicture});
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
      if(counter=== 0){
        /**Do nothing */
      }else if(assigning==="left"){
        /* pic.style.visibility = "hidden"; */
        pic.classList.add("experienceBackgroundAnimateLeft");
        /* pic.style.left="-100%"; */
      }else if(assigning==="right"){
        /* pic.style.visibility = "hidden"; */
        pic.classList.add("experienceBackgroundAnimateRight");
       /*  pic.style.left="100%"; */
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

  nextPicture(){
    let nextPicture=undefined;
    if(this.state.scrollDirection==="up"){
      nextPicture= ((this.state.previousPicture-1)<0)?this.props.pics.length-1:this.state.previousPicture-1;
    }else{
      nextPicture= ((this.state.previousPicture+1)>this.props.pics.length-1)?0:this.state.previousPicture+1;
    }
    this.setState({actualPicture:nextPicture});
  }

  previousPicture(){
    let nextPicture= ((this.state.previousPicture-1)<0)?this.props.pics.length-1:this.state.previousPicture-1;
    /* let nextPicture= ((this.state.previousPicture+1)>this.props.pics.length-1)?0:this.state.previousPicture+1; */
    this.setState({actualPicture:nextPicture});
  }

  createDots(){
    let name=this.props.name;
    let dots = [];
    for(let i=0;i<this.props.pics.length;i++){
      let extraClass=`experienceDots${(this.state.actualPicture===i)? ' actualDot':''}`;
      dots.push(<div className={extraClass} id={`${name}dot${i}`} onClick={this.nextPicture} key={`${name}dot${i}`}></div>)
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
