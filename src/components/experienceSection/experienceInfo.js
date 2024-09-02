import React, { Component } from 'react';
import './experienceInfo.css';
import Button from '../interaction/button';

export default class ExperienceInfo extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    this.show=false
    this.addLogga=this.addLogga.bind(this);
    this.animateText=this.animateText.bind(this);
    this.reDirect=this.reDirect.bind(this);
  }
  
  componentDidMount(){
    this.addLogga();
  }
  componentDidUpdate(){
    this.animateText();
  }

  animateText(){
    animation=animation.bind(this);
    if(this.props.show!==this.show){
      animation();
      this.show=!this.show;
    };

    function animation(){
      let experienceInfoOuter=document.getElementById(`experienceInfoOuter${this.props.info.name}`);
      setTimeout(()=>{
        experienceInfoOuter.classList.toggle("experienceInfoOuterAnimation");
      },1000);
      /* this.setState({showing:!this.props.showing}); */
    }  
  }

  addLogga(){
    let container = document.getElementById(`logga${this.props.info.name}`);
    container.style.backgroundImage = `url(${this.props.info.logo})`;
  }

  reDirect(){
    window.location.replace(this.props.info.links.link);
    
  }


  render() {
    return (
      <div className="experienceInfo">
        <div className="experienceInfoOuter" id={`experienceInfoOuter${this.props.info.name}`}>
        <div className="experienceLoveContainer">
              <p className="love" >Work I love</p>
            </div>
          <div className="experienceInfoInner">
            
            <div className={`experienceLoggaContainer ${this.props.info.name}`} id={`logga${this.props.info.name}`}>
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
              <Button label={"To the prototype"} link={this.props.info.links.link}/>
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
