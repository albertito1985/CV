import React, { Component } from 'react';
import './aboutMe.css';
import AboutMeCarrusell from './aboutMeCarrusell';
import AccordionDemo from './acordeon';
/* import { ThickArrowDownIcon } from '@radix-ui/react-icons'; */

export default class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state={
      image:"item-1",
      show:true
    }
    this.changeImage=this.changeImage.bind(this);
  }

  componentDidMount(){
    this.changeImage("item-1");
    /**Observer */
    let aboutMe= document.getElementById("aboutMe");
    const aboutMeObserver = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        let items=document.getElementsByClassName("aboutMeItems");
        for(let i=0;i<items.length;i++){
          items[i].classList.add("aboutMeItemsShow");
        }

        let counter=5;
        let show = false;
        let hireMe= document.getElementById("hireMe");
        let itnerval= setInterval(()=>{
          hireMe.style.opacity = (show)?"1":"0";
          show = !show;
          counter-=1;
          if(counter<0)clearInterval(itnerval);
        },100)
        
        aboutMeObserver.unobserve(aboutMe);
      }
    },{threshold:1});
    aboutMeObserver.observe(aboutMe);
  }

  changeImage(newImage){
    let contentImages= document.getElementsByClassName("aboutMeContentImage");
    for(let i=0;i<contentImages.length;i++){
      let id=contentImages[i].id.replace("aboutMe","");
      if(id===newImage){
        contentImages[i].classList.add("aboutMeImageShow");
      }else{
        contentImages[i].classList.remove("aboutMeImageShow");
      }
    }
    this.setState({
      image:newImage
    })
    
  }

  render() {
    return (
      <div className="aboutMeTrack">
        <div className="aboutMe" id="aboutMe">
          <div className="aboutmeItemsWrap">
            <div className="aboutMeItems" id="aboutMeItemsLeft">
              <div className="aboutMeItemsContent" id="aboutMeItemsContentLeft">
                <div className="hireMe"><h2>Why you should <span id="hireMe">hire me</span></h2></div>
                <AccordionDemo changeImage={this.changeImage}/>
              </div>
            </div>
            <div className="aboutMeItems" id="aboutMeItemsRight">
              <div className="aboutMeItemsContent" id="aboutMeItemsContentRight">
                <div className="aboutMeContentImage" id="aboutMeitem-1">
                </div>
                <div className="aboutMeContentImage" id="aboutMeitem-2">
                </div>
                <div className="aboutMeContentImage" id="aboutMeitem-3">
                </div>
                <div className="aboutMeContentImage" id="aboutMeitem-4">
                </div>
              </div>
            </div>
          </div>
          <AboutMeCarrusell/>
        </div>
      </div>
    )
  }
}
