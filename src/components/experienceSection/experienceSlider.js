import React, {Component } from 'react';
import './experienceSlider.css';

export default class ExperienceSlider extends Component {
  constructor(props){
    super(props);
    this.state={
      previousPicture:0,
      actualPicture:0,
      scrollPosition:undefined,
    };
    this.show=false;
    this.createContent=this.createContent.bind(this);
    this.assignPics=this.assignPics.bind(this);
    this.createDots=this.createDots.bind(this);
    this.animateSlider=this.animateSlider.bind(this);
    this.nextPicture=this.nextPicture.bind(this);
    this.animateSection=this.animateSection.bind(this);
    this.startPosition=this.startPosition.bind(this);
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

    /* this.interval = setInterval(()=>{
      this.nextPicture()
    },3000); */
  }

  componentWillUnmount(){
    /* clearInterval(this.interval); */
  }

  componentDidUpdate(){
    this.animateSlider();
    this.animateSection();
  }

  animateSection(){
    animation=animation.bind(this);
    if(this.props.show!==this.show){
      animation();
      this.show=!this.show;
    };

    function animation(){
      let experienceSliser=document.getElementById(`experienceSlider${this.props.name}`);
      experienceSliser.classList.toggle("experienceSliderSectionAnimation");
      if(this.props.show){
        this.interval = setInterval(()=>{
          this.nextPicture()
        },3000); 
      }else{
        clearInterval(this.interval);
        this.startPosition();
        this.setState({
          previousPicture:0,
          actualPicture:0,
        })
      }
    }  
  }

  animateSlider(){
    if(this.state.previousPicture===this.state.actualPicture){
      return null;
    }
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
    let rightContainer= document.getElementById(`${this.props.name}Back${rightIndex}`);
      
      previousPicture.classList.add("experienceBackgroundAnimateLeft");
      rightContainer.classList.remove("experienceBackgroundAnimateLeft");
      rightContainer.classList.add("experienceBackgroundAnimateRight");
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
    this.startPosition();
  }

  startPosition(){
    /*Start position */
    let counter = this.props.pics.length-1;
    let assigning = "left";
    for(let i=0;i<this.props.pics.length;i++){
      let pic = document.getElementById(`${this.props.name}Back${i}`);
      pic.classList.remove("experienceBackgroundAnimateLeft");
      pic.classList.remove("experienceBackgroundAnimateRight");
    }

    for(let i=0;i<this.props.pics.length;i++){
      if(counter===this.props.pics.length){
        counter=0;
        assigning="right";
      };
      let pic = document.getElementById(`${this.props.name}Back${counter}`);
      if(counter=== 0){
        /**Do nothing */
      }else if(assigning==="left"){
        pic.classList.add("experienceBackgroundAnimateLeft");
        pic.classList.add("experienceBackgroundNoTransition");
        setTimeout(()=>{
          pic.classList.remove("experienceBackgroundNoTransition");
        },1)
      }else if(assigning==="right"){
        pic.classList.add("experienceBackgroundAnimateRight");
        pic.classList.add("experienceBackgroundNoTransition");
        setTimeout(()=>{
          pic.classList.remove("experienceBackgroundNoTransition");
        },1)
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
    let nextPicture= ((this.state.previousPicture+1)>this.props.pics.length-1)?0:this.state.previousPicture+1;
    this.setState({actualPicture:nextPicture});
  }

  createDots(){
    let name=this.props.name;
    let dots = [];
    for(let i=0;i<this.props.pics.length;i++){
      let extraClass=`experienceDots${(this.state.actualPicture===i)? ' actualDot':''}`;
      dots.push(<div className={extraClass} id={`${name}dot${i}`} key={`${name}dot${i}`}></div>)
    }
    return (dots);
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
