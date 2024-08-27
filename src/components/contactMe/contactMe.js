import React, { Component } from 'react';
import './contactMe.css';
import { BsPhoneVibrate } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default class ContactMe extends Component {

componentDidMount(){
/**Observer */
let contactMe= document.getElementById("contactMe");
const aboutMeObserver = new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    let lets=document.getElementById("lets");
    let talk=document.getElementById("talk");
    lets.classList.add("spanLetsTalkAnimate")
    setTimeout(()=>{talk.classList.add("spanLetsTalkAnimate")},500)
    aboutMeObserver.unobserve(contactMe);
  }
},{threshold:0.9});
aboutMeObserver.observe(contactMe);
}
  render() {
    return (
      <div className="contactMe" id="contactMe">
        <div className="contactWrap">
            <div className="contactMeTittle"><span className="spanLetsTalk" id="lets"><h1>Let's</h1></span><span className="spanLetsTalk" id="talk"><h1>talk</h1></span></div>
            <div className="contactInformation">
                <div className="contactItems telephone">
                    <BsPhoneVibrate/><a href="tel:0737296127">073 72 96 127</a>
                </div>
                <div className="contactItems email">
                    <MdEmail/><a href="mailto:anulo@live.se">anulo@live.se</a>
                </div>
                <div className="contactItems linkedin">
                    <FaLinkedin /><a href="https://www.linkedin.com/in/albertonunezloayza/">/albertonunezloayza</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
