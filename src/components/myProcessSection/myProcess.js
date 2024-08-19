import React, { Component } from 'react'
import './myProcess.css';
import SectionComponent from './SectionComponent';

export default class MyProcess extends Component {
    constructor(props){
        super(props);
        this.state={
            imageSize:50,
            sectionNumber:undefined,
            scrollPosition:undefined,
            vh:undefined
        }
        /*Adjustments */
        this.startZoom=150;
        this.maxZoom=1500;
        /*as it is configured you can conly choose a total of 8 sections*/
        this.sectionsCofee=3;
        this.sectionsProcess=5;
        /*Variables*/
        this.cofeePath=undefined;
        this.intervalZoom=undefined;
        /*Binding this to the functions */
        this.scrollHandler=this.scrollHandler.bind(this);
        this.cofeeAnimation=this.cofeeAnimation.bind(this);
        this.calculateZoom=this.calculateZoom.bind(this);
        this.sectionsTrigger=this.sectionsTrigger.bind(this);
        this.calculateSection=this.calculateSection.bind(this);
        this.updateCoffeeAnimation=this.updateCoffeeAnimation.bind(this);
    }

    static getDerivedStateFromProps(props,state) {
      state.scrollPosition=props.configurationObject.scrollPosition;
      state.vh=props.configurationObject.vh
      return null;
    }
    componentDidMount(){
      let myProcess = document.getElementsByClassName("myProcess")[0];   
      let myProcesscontent = document.getElementsByClassName("myProcessContent")[0];
      let myProcessHeight= myProcess.clientHeight;
      let percentagePerSection=this.state.vh/myProcessHeight;
      this.intervalZoom=this.maxZoom-this.startZoom;
      this.cofeePath=this.sectionsCofee*this.state.vh;
      this.cofeeAnimation();

      /*Observer */
      const myProcessObserver = new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){
          myProcesscontent.classList.add("myProcessSticky");
          document.addEventListener("scroll",this.scrollHandler);
        }else{
          myProcesscontent.classList.remove("myProcessSticky");
          document.removeEventListener("scroll",this.scrollHandler);
        }
      },{threshold:percentagePerSection});
      myProcessObserver.observe(myProcess);
    }

    componentWillUnmount(){
      document.removeEventListener("scroll",this.scrollHandler);
    }

    scrollHandler(){
      this.cofeeAnimation(this.state.scrollPosition);
      this.sectionsTrigger(this.state.scrollPosition);
    }

    sectionsTrigger(scrollPosition){
      this.setState({sectionNumber:this.calculateSection(scrollPosition)});
    }

    calculateSection(scrollPosition){
      let actualSection = (Math.floor(scrollPosition/this.state.vh));
      let validatedSection = ((actualSection-this.sectionsCofee)>-1 && (actualSection-this.sectionsCofee)<this.sectionsProcess+1)?actualSection-this.sectionsCofee:false;
      return validatedSection;
    }

    calculateScrollPercentage(){
      return ((this.state.scrollPosition-this.state.vh)*100)/(this.cofeePath-this.state.vh)
    }

    cofeeAnimation(){
      /* calculating the container size in procent*/
      let scrollPercentage = this.calculateScrollPercentage();
      let newZoom=this.calculateZoom(scrollPercentage);
      let newOpacity=(100-scrollPercentage)+"%";
      this.updateCoffeeAnimation(newZoom,newOpacity);
    }

    updateCoffeeAnimation(newZoom,newOpacity){
      let entireImage = document.getElementsByClassName("entireImage")[0];
      let holeImage = document.getElementsByClassName("holeImage")[0];
      let initials = document.getElementsByClassName("initials")[0];

      /* Updating Zoom*/
      holeImage.style.backgroundSize=newZoom+"%";
      entireImage.style.backgroundSize=newZoom+"%";      

      /* Updating Opacity*/
      entireImage.style.opacity=newOpacity;
      initials.style.opacity=newOpacity;
    }

    calculateZoom(scrollPercentage){
      let newZoom = ((this.intervalZoom*scrollPercentage)/100)+this.startZoom;
      if(newZoom<=this.startZoom){newZoom = this.startZoom};
      return newZoom;
    }

  render() {
    return (
      <div className="myProcess">
        <div className="myProcessContent">
          <SectionComponent section={this.state.sectionNumber}/>
          <div className="cofeeImages">
            <div className="holeImage">
            </div>
            <div className="entireImage">
            </div>
            <div className="initials">
                <h1>AN</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
