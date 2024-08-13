import React, { Component } from 'react'
import './experienceSection.css';
import ExperienceInfo from './experienceInfo';
import ExperienceSlider from './experienceSlider';
import experienceData from './experienceData.js';


export default class ExperienceSection extends Component {
  render() {
    return (
        <div className="experienceSection">
            <div className="experienceSectionContent">
                <div id="experience1">
                    <ExperienceSlider pics={experienceData.TIBSI.pics} name={experienceData.TIBSI.name}/>
                    <ExperienceInfo info={experienceData.TIBSI}/>
                </div>
            
            </div>
        </div>
    )
  }
}
