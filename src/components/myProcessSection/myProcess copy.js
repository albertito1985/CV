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
        this.sectionsCofee=5;
        this.sectionsProcess=5;
        /*Variables*/
        this.sectionNumber=undefined;
        this.cofeePath=undefined;
        this.intervalZoom=undefined;
        this.coffePosition=undefined;
        /*Binding this to the functions */
        this.cofeeAnimation=this.cofeeAnimation.bind(this);
        this.calculateZoom=this.calculateZoom.bind(this);
        this.sectionsTrigger=this.sectionsTrigger.bind(this);
        this.calculateSection=this.calculateSection.bind(this);
        this.updateCoffeeAnimation=this.updateCoffeeAnimation.bind(this);
        this.getStartZoom=this.getStartZoom.bind(this);
    }

    static getDerivedStateFromProps(props,state) {
      state.scrollPosition=props.configurationObject.scrollPosition;
      state.vh=props.configurationObject.vh;
      return null;
    }

    async componentDidMount(){
      let myProcess= document.getElementsByClassName("myProcess")[0];
      this.intervalZoom=this.maxZoom-this.startZoom;
      await this.getStartZoom();
      this.cofeePath=this.sectionsCofee*(this.state.vh/2);
      this.coffePosition = myProcess.getBoundingClientRect().y+window.scrollY;
    }

    getStartZoom(){

      var div = document.getElementsByClassName("entireImage")[0];
      var style = div.currentStyle || window.getComputedStyle(div, false);
      var bg = style.backgroundImage.slice(4, -1);
      
      var background = new Image();
      background.src = bg;

      background.onload = calculateRatio();
      
      
      function calculateRatio(){
        console.log("function")
          if (background.width > background.height) {
              var ratio = background.height / background.width;
              if (div.offsetWidth > div.offsetHeight) {
                  var bgW = div.offsetWidth;
                  var bgH = Math.round(div.offsetWidth * ratio);
                  if (bgH < div.offsetHeight) {
                      bgH = div.offsetHeight;
                      bgW = Math.round(bgH / ratio);
                  }
              } else {
                  var bgW = Math.round(div.offsetHeight / ratio);
                  var bgH = div.offsetHeight;
              }
          } else {
              var ratio = background.width / background.height;
              if (div.offsetHeight > div.offsetWidth) {
                  var bgH = div.offsetHeight;
                  var bgW = Math.round(div.offsetHeight * ratio);
                  if (bgW > div.offsetWidth) {
                      bgW = div.offsetWidth;
                      bgH = Math.round(bgW / ratio);
                  }
              } else {
                  var bgW = Math.round(div.offsetWidth / ratio);
                  var bgH = div.offsetWidth;
              }
          }

          
          console.log(bgW + ", " + bgH);   
      }









      /* compare = compare.bind(this);
      var element = document.getElementsByClassName("entireImage")[0]
      
      var img = new Image()
      img.onload = ()=>{return(compare())};
      img.src = cofeeImage;
      
      function compare(){
        var fx = element.offsetWidth/img.width;
      } */




      /* function compare() {
        var fx = element.offsetWidth/img.width;
        var fy = element.offsetHeight/img.height;
        var bs = window.getComputedStyle(element, null).backgroundSize;
        var ratio = undefined
        switch (bs) {
          case 'cover': ratio = (Math.min(fx, fy)); break; 
          case 'contain': ratio = (Math.max(fx, fy)); break; 
          case '100% 100%':console.log(fx, fy); break; 
          default: console.log("invalid background size");
        }
        console.log(ratio);
        this.startZoom = ratio;
      } */
    }

    componentDidUpdate(){
      this.cofeeAnimation(this.state.scrollPosition);
      this.sectionsTrigger(this.state.scrollPosition);
    }

    sectionsTrigger(scrollPosition){
      this.sectionNumber= this.calculateSection(scrollPosition);
    }

    calculateSection(scrollPosition){
      let actualSection = (Math.floor((scrollPosition-this.coffePosition)/(this.state.vh/2)));
      let startSection = this.sectionsCofee-1;
      let validatedSection = ((actualSection-startSection)>-1 && (actualSection-startSection)<this.sectionsProcess+1)?actualSection-startSection:false;
      return validatedSection;
    }

    calculateScrollPercentage(){
      return ((this.state.scrollPosition-this.coffePosition)*100)/(this.cofeePath-(this.state.vh/2))
    }

    cofeeAnimation(){
      /* calculating the container size in procent*/
      let scrollPercentage = this.calculateScrollPercentage();
      let newZoom=this.calculateZoom(scrollPercentage);
      let newOpacity=(100-scrollPercentage)+"%";
      if(this.sectionNumber===undefined){
        newZoom=this.startZoom;
        newOpacity="100%";
      }
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
          <SectionComponent section={this.sectionNumber}/>
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
