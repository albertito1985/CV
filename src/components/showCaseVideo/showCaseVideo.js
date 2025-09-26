import React, { Component,createRef } from 'react'
import './showCaseVideo.css';
import designer from '../../videos/Designer.mp4';
import Word from './word';

export default class ShowCaseVideo extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.state = {
      isVisible: false,
      visibleNumber1:null,
      visibleNumber2:null,
      visibleNumber3:null,
      actualPosition:null,
      wordsOffset:0
    };
    this.lastPosition=null;
    this.showCaseVideoRailsSize = null;
    this.pathStart=null;
    this.pathEnd=null;
    this.path = null;
    this.intervalPosition=0;

    this.scrollAnimation=this.scrollAnimation.bind(this);
    this.setUpComponent=this.setUpComponent.bind(this);
  }

  static getDerivedStateFromProps(props,state){
    state.actualPosition = props.configurationObject.scrollPosition;
    return 0;
  }

  componentDidMount() {
    this.setUpComponent();

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          this.setState({ isVisible: entry.isIntersecting });
        }
        
      },
      {
        threshold: 1,
      }
    );

    if (this.containerRef.current) {
      this.observer.observe(this.containerRef.current);
    }
  }

  componentWillUnmount() {
    if (this.observer && this.containerRef.current) {
      this.observer.unobserve(this.containerRef.current);
    }
    let rails = document.getElementsByClassName("showCaseVideoRails")[0];
    rails.removeEventListener('scroll',this.scrollListener);
  }

  componentDidUpdate(){
    this.scrollAnimation();
  }

  scrollAnimation(){
    let newInterval=Math.round(this.state.actualPosition/700);
    if(newInterval!==this.intervalPosition){
      console.log("change");
      this.setState({
        visibleNumbers1:generateNumber(1,10),
        visibleNumbers2:generateNumber(11,20),
        visibleNumbers3:generateNumber(21,29)
      });
      
      this.intervalPosition=newInterval;
      
      
      function generateNumber(max,min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
    if(this.state.actualPosition!==this.lastPosition && this.state.actualPosition<this.pathEnd + this.props.configurationObject.vh){
      let wordsContainer = document.getElementsByClassName("wordsContainer")[0];
      let increment = Math.floor((this.state.actualPosition - this.pathStart)/10);
      wordsContainer.style.top = `-${increment}px`;
      this.lastPosition = this.state.actualPosition
      this.setState({wordsOffset:increment});
    }
  }

  setUpComponent(){
    
    if(this.showCaseVideoRailsSize == null){
      let showCaseVideoRails= document.getElementsByClassName("showCaseVideoRails")[0];
      let computedStyle = window.getComputedStyle(showCaseVideoRails);

      this.showCaseVideoRailsSize = computedStyle.height;

      let stringLength= this.showCaseVideoRailsSize.length;
      this.showCaseVideoRailSize = parseInt(this.showCaseVideoRailsSize.slice(0,stringLength-2));
    }

    if(this.path == null){
      this.path = this.showCaseVideoRailSize - this.props.configurationObject.vh;
    }

    if(this.pathStart== null){
      let showCaseVideoRails= document.getElementsByClassName("showCaseVideoRails")[0];
      this.pathStart = showCaseVideoRails.offsetTop;
    }

    if(this.pathEnd== null){
      this.pathEnd = this.pathStart + this.showCaseVideoRailSize - this.props.configurationObject.vh;
    }

  }

  render() {
    return (
      <div  className="showCaseVideoRails">
        <div ref={this.containerRef} className="showCaseVideoWagon">
          <div className="wordsContainer">
            <Word label="UX" number={1} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="UI" number={2} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="Branding"  number={3} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="Business goals"  number={4} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="Usability"  number={5} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="User Centered"  number={6} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="HCI"  number={7} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="HTML"  number={8} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="CSS"  number={9} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="PHP"  number={10} visibleNumbers={this.state.visibleNumbers1}/>
            <Word label="JavaScript"  number={11} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="React"  number={12} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="Figma"  number={13} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="Photoshop"  number={14} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="NPM"  number={15} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="Back-end"  number={16} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="Illustrator"  number={17} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="Affinity"  number={18} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="AI"  number={19} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="Design"  number={20} visibleNumbers={this.state.visibleNumbers2}/>
            <Word label="Implementation"  number={21} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="Front-end"  number={22} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="User research"  number={23} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="Vector Graphics"  number={24} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="Prototyping"  number={25} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="User Experience"  number={26} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="Accessibility"  number={27} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="User Testing"  number={28} visibleNumbers={this.state.visibleNumbers3}/>
            <Word label="Machine Learning"  number={29} visibleNumbers={this.state.visibleNumbers3}/>
          </div>
          
          <div   className={`showCaseVideoContainer ${this.state.isVisible ? 'visible' : ''}`}>
              <video autoPlay muted loop controls>
                <source src={designer} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          
        </div>
      </div>
    )
  }
}
