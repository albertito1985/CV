import React, { Component } from 'react'
import './experienceSection.css';
import ExperienceInfo from './experienceInfo';
import ExperienceSlider from './experienceSlider';
import experienceData from './experienceData.js';


export default class ExperienceSection extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true,
      sectionNumber:undefined,
      scrollPosition:undefined,
      scrollDirection:undefined,
      vh:undefined
    }
    /* this.startSection=undefined */
    this.sectionNumber=undefined;
    this.sectionsQuantity=undefined;
    this.show=true;
    this.containersize=undefined;
    this.containerPosition= undefined;
    /**Binding this to the functions */
    this.setup=this.setup.bind(this);
    this.sectionsTrigger=this.sectionsTrigger.bind(this);
    this.animateSection=this.animateSection.bind(this);
    this.showFirstSection=this.showFirstSection.bind(this);
  }

  static getDerivedStateFromProps(props,state){
    state.scrollPosition=props.configurationObject.scrollPosition;
    state.vh=props.configurationObject.vh;
    state.scrollDirection=props.configurationObject.scrollDirection;
    return null;
  }

  componentDidMount(){
    this.setup();
  }

  componentDidUpdate(){
    this.sectionNumber = this.sectionsTrigger();
    this.animateSection(this.state.sectionNumber,this.sectionNumber);
  }

  setup(){
    let experienceSection = document.getElementsByClassName("experienceSection")[0];
    this.containerSize = experienceSection.getBoundingClientRect().height;
    this.sectionsQuantity = Object.keys(experienceData).length;
    this.containerPosition = experienceSection.getBoundingClientRect().y+window.scrollY;
    /* this.showFirstSection(); */
    this.animateSection(this.state.sectionNumber,this.sectionNumber);
  }

  showFirstSection(){
    console.log(this.sectionsTrigger(this.state.scrollPosition));
      let container = document.getElementById(`experience${this.sectionsTrigger(this.state.scrollPosition)}`);
      container.classList.add("experienceAnimate");
  }

  sectionsTrigger(){
    return (Math.floor((this.state.scrollPosition-this.containerPosition)/this.state.vh));
  }

  animateSection(previousSection,newSection){
    if(newSection===undefined){
      let actualSection=this.sectionsTrigger(this.state.scrollPosition);
      if(actualSection<0){
        newSection=0;
      }else{
        newSection=this.sectionsQuantity-1;
      }
    }
    
    if((newSection>-1 && previousSection>-1 && newSection< this.sectionsQuantity && (newSection!==previousSection))){
      let previousContainer= document.getElementById(`experience${previousSection}`);
      let newContainer= document.getElementById(`experience${newSection}`);
      previousContainer.classList.remove("experienceAnimate");
      newContainer.classList.add("experienceAnimate");
      this.setState({sectionNumber:newSection});
    }else if(previousSection===undefined){
      let newContainer= document.getElementById(`experience${newSection}`);
      newContainer.classList.add("experienceAnimate");
      this.setState({sectionNumber:newSection});
    }
      
  }

  createExperienceSections(){
    let keys = Object.keys(experienceData);
    let divsArray=[];
    keys.forEach((key,index)=>{
     divsArray.push(
      <div className="experienceIndividual" id={`experience${index}`} key={`experience${index}`}>
          <ExperienceSlider pics={experienceData[key].pics} name={experienceData[key].name} show={this.state.sectionNumber===index} scrollPosition={this.props.configurationObject.scrollPosition}/>
          <ExperienceInfo info={experienceData[key]} show={this.state.sectionNumber===index}/>
      </div>)
    });
    return divsArray;
  }

  render() {
    return (
        <div className="experienceSection">
            <div className="experienceSectionContent" id="experienceSectionContent">
            {this.createExperienceSections()}
            </div>
        </div>
    )
  }
}
