import React, { Component } from 'react'
import './experienceSection.css';
import ExperienceInfo from './experienceInfo';
import ExperienceSlider from './experienceSlider';
import experienceData from './experienceData.js';


export default class ExperienceSection extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
    this.show=true
  }
  componentDidMount(){
    console.log("experience section")
    /*TEMPORAL to make the sliders disapear */
   /*  setTimeout(()=>{
      this.setState({show:false});
    },3000); */
  }
  createExperienceSections(){

  }

  render() {
    return (
        <div className="experienceSection">
            <div className="experienceSectionContent">
                <div id="experience1">
                    <ExperienceSlider pics={experienceData.SquidFactor.pics} name={experienceData.SquidFactor.name} show={this.state.show} scrollPosition={this.props.configurationObject.scrollPosition}/>
                    {/* <ExperienceInfo info={experienceData.SquidFactor} show={this.state.show}/> */}
                </div>
            
            </div>
        </div>
    )
  }
}
