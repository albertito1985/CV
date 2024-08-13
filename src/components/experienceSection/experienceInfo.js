import React, { Component } from 'react';
import './experienceInfo.css';
import Button from '../interaction/button';

export default class ExperienceInfo extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className="experienceInfo">
        <div className="experienceInfoOuter">
          <div className="experienceInfoInner">
            <div className="experienceLoveContainer">
              <p className="love" >Work I love</p>
            </div>
            <div className={`experienceLoggaContainer ${this.props.info.name}`}>
            </div>
            <div className="experienceProjectContainer">
              <h2>Project</h2>
              <p>{this.props.info.project}</p>
            </div>
            <div className="experienceRoleContainer">
              <h2>Role</h2>
              <p>{this.props.info.role}</p>
            </div>
            <div className="experienceDescriptionContainer">
              <h2>Description</h2>
              <p>{this.props.info.description}</p>
            </div>
            <div className="experienceLinksContainer">
              <Button label={"To the prototype"}/>
            </div>
          </div>
          <div className="experienceCommentContainer">
            <p>{this.props.info.comment}</p>
          </div>
        </div>
      </div>
    )
  }
}
