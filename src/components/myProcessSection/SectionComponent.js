import React, { Component } from 'react';
import './sectionComponent.css';
import requirements from'../../videos/requirements.mp4';
import sketching from'../../videos/sketching.mp4';
import prototyping from'../../videos/prototyping.mp4';
import implementing from'../../videos/implementing.mp4';
import evaluating from'../../videos/evaluating.mp4';


export default class SectionComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      actualSection:undefined,
      lastAnimated:undefined
    }
    /*content to the different sections */
    this.previousState=5
    this.contentArray=[
      {text:"textRequirements", video:"videoRequirements"},
      {text:"textSketching", video:"videoSketching"},
      {text:"textPrototyping", video:"videoPrototyping"},
      {text:"textImplementing", video:"videoImplementing"},
      {text:"textEvaluating", video:"videoEvaluating"}]

    /*Binding this to the functions*/
    this.checkAnimate=this.checkAnimate.bind(this);
    this.addClass=this.addClass.bind(this);
    this.removeClass=this.removeClass.bind(this);
    this.animateSection=this.animateSection.bind(this);
    this.unanimateSection=this.unanimateSection.bind(this);
  }

  static getDerivedStateFromProps(props,state) {
    if(state.actualSection !== props.section){
      state.actualSection=props.section;
    }
    return null;
  }

  componentDidUpdate(){
    let section = this.state.actualSection;
    ((typeof section!=="undefined")||section===0||section===this.contentArray.length) && this.checkAnimate();
  }

  checkAnimate(){
    if(this.state.lastAnimated !== this.props.section){
      let lastSection = this.state.lastAnimated;
      let actualSection = this.props.section;
      if(lastSection === undefined && actualSection===false){
        /*abriendo */
        this.addClass(this.contentArray[0].video, "videoMyProcessAnimation");
        this.setState({lastAnimated:"oppening"});
      }else if(lastSection === 0 && actualSection===false){
        this.removeClass("myProcessTexts", "myProcessTextsAnimation");
        this.removeClass(this.contentArray[lastSection].text, "myProcessSubtittleAnimation");
        this.setState({lastAnimated:"oppening"});
      }else if(lastSection === "oppening" && actualSection===false){
        /*do nothing */
      }else if(lastSection === "oppening" && actualSection===0){
        /*la primera */
        this.addClass("myProcessTexts", "myProcessTextsAnimation");
        this.addClass(this.contentArray[actualSection].text, "myProcessSubtittleAnimation");
        this.setState({lastAnimated:actualSection});
      }else if(lastSection===this.contentArray.length-1 && actualSection===this.contentArray.length){
        /*Cerrando*/ 
        this.removeClass("myProcessTexts", "myProcessTextsAnimation");
        this.removeClass(this.contentArray[lastSection].text, "myProcessSubtittleAnimation");
        this.setState({lastAnimated:"cerrando"});
      }else if(lastSection === "cerrando" && actualSection===this.contentArray.length){
        /**Do nothing */
      }else if((lastSection === "oppening"||lastSection === undefined)&& actualSection===this.contentArray.length){
        this.animateSection(this.contentArray[this.contentArray.length-1])
        this.setState({lastAnimated:"cerrando"});
      }else if(lastSection ==="cerrando" && actualSection===this.contentArray.length-1){
        /*la última */
        this.addClass("myProcessTexts", "myProcessTextsAnimation");
        this.addClass(this.contentArray[this.contentArray.length-1].text, "myProcessSubtittleAnimation");
        this.setState({lastAnimated:this.contentArray.length-1});
      }else if(lastSection === "cerrando" && actualSection===false){
        /**Do nothing */
      }else {
        if(!isNaN(lastSection)){
          this.unanimateSection(this.contentArray[lastSection]);
        };
        
        this.addClass("myProcessTexts", "myProcessTextsAnimation");
        this.animateSection(this.contentArray[actualSection])
        this.setState({lastAnimated:actualSection});
      }
    }
  }

  animateSection(object){
    this.addClass(object.video, "videoMyProcessAnimation");
    setTimeout(()=>{this.addClass(object.text, "myProcessSubtittleAnimation");},500);
  }

  unanimateSection(object){
    this.removeClass(object.video, "videoMyProcessAnimation");
    this.removeClass(object.text, "myProcessSubtittleAnimation");
    setTimeout(()=>{this.removeClass(object.text, "myProcessSubtittleAnimation")},2000);
  }

  addClass(objectName,classToAdd){   
    let selectedObject = document.getElementById(objectName);
    selectedObject.classList.add(classToAdd);
  }

  removeClass(objectName,classToRemove){
    let selectedObject = document.getElementById(objectName);
    selectedObject.classList.remove(classToRemove);
  }

  render() {   
    return (
      <div className="processSectionComponent">
            <div className="videoMyProcessContainer" id="videoRequirements">
              <video autoPlay muted loop className="videoMyProcess">
                <source src={requirements} type="video/webm"/> 
                <source src={requirements} type="video/mp4"/>        
              </video>
            </div>
            <div className="videoMyProcessContainer" id="videoSketching">
            <video autoPlay muted loop className="videoMyProcess" >
              <source src={sketching} type="video/webm"/> 
              <source src={sketching} type="video/mp4"/>        
            </video>
            </div>
            <div className="videoMyProcessContainer" id="videoPrototyping">
            <video autoPlay muted loop className="videoMyProcess" >
              <source src={prototyping} type="video/webm"/> 
              <source src={prototyping} type="video/mp4"/>        
            </video>
            </div>
            <div className="videoMyProcessContainer" id="videoImplementing">
            <video autoPlay muted loop className="videoMyProcess" >
              <source src={implementing} type="video/webm"/> 
              <source src={implementing} type="video/mp4"/>        
            </video>
            </div>
            <div className="videoMyProcessContainer" id="videoEvaluating">
            <video autoPlay muted loop className="videoMyProcess" >
              <source src={evaluating} type="video/webm"/> 
              <source src={evaluating} type="video/mp4"/>        
            </video>
            </div>
        <div className="myProcessTexts" id="myProcessTexts">
          <div className="myProcessTextInner">
          
            <h1>My Process</h1>
            <div className="processText">
              <h2 className="myProcessSubtittle" id="textRequirements">Gathering requirements</h2>
              <h2 className="myProcessSubtittle" id="textSketching">Sketching</h2>
              <h2 className="myProcessSubtittle" id="textPrototyping">Prototyping</h2>
              <h2 className="myProcessSubtittle" id="textImplementing">Implementing</h2>
              <h2 className="myProcessSubtittle" id="textEvaluating">Evaluating</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}