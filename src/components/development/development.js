import React, { Component } from 'react';
import './development.css'

export default class Development extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: undefined,
            firstContentVisible:true
        }
        this.boxStart=undefined;
        this.animationStart=undefined;
        this.boxEnd=undefined;
        this.pathLength=undefined;
        this.textLeftStart=undefined;
        this.textLeft=undefined;
        this.floatingBoxBottomStart=undefined;
        this.floatingBoxBottomEnd=undefined;
        this.floatingBoxBottom=undefined;

        /**Functions binding this */
        this.animationIn=this.animationIn.bind(this);
        this.displaceText=this.displaceText.bind(this);
    }

    static getDerivedStateFromProps(props,state){
        state.scrollPosition=props.configurationObject.scrollPosition;
        return null;
    }

    componentDidMount(){
        this.setUp();
    }

    setUp(){
        let track= document.getElementsByClassName("developmentTrack")[0];
        let textBox=document.getElementsByClassName("developingSkills")[0];
        let floatingBox=document.getElementsByClassName("floatingBox")[0];
        this.pathLength = track.clientHeight;
        this.boxStart = track.getBoundingClientRect().y+window.scrollY;
        this.animationStart = this.boxStart + 500;
        this.boxEnd = this.boxStart + this.pathLength;
        this.textLeftStart=Number(window.getComputedStyle(textBox, false).left.replace("px",""));
        this.floatingBoxBottomStart=Number(window.getComputedStyle(floatingBox, false).bottom.replace("px",""));
        this.floatingBoxBottomEnd = (this.props.configurationObject.vh/2)-(Number(window.getComputedStyle(floatingBox, false).height.replace("px",""))/2);
    }

    componentDidUpdate(){
        if(this.state.scrollPosition >= this.animationStart){
            if(this.state.firstContentVisible === true){
                this.animationIn()
            }
        }else if(this.state.scrollPosition <= this.animationStart){
            if(this.state.firstContentVisible === false){
                this.animationOut()
            }
        };

        if((this.state.scrollPosition>=this.boxStart)&&(this.state.scrollPosition<=this.boxEnd)){
            let percentage = this.calculatePercentage();
            this.displaceText(percentage);
            this.displaceBox(percentage);
        }
    }
    displaceBox(percentage){
        let floatingBox=document.getElementsByClassName("floatingBox")[0];

        let floatingBoxBottomNew= ((this.floatingBoxBottomStart-this.floatingBoxBottomEnd)*percentage)/50;

        /* console.log(this.floatingBoxBottomStart-floatingBoxBottomNew); */
        floatingBox.style.bottom=`${this.floatingBoxBottomStart-floatingBoxBottomNew}px`;
    }

    displaceText(percentage){
        let textBox=document.getElementsByClassName("developingSkills")[0];
        let textBoxLeftNew= (this.textLeftStart*percentage)/100;
        textBox.style.left=`${this.textLeftStart-textBoxLeftNew}px`;
    }

    calculatePercentage(){
        let percentage = (100*(this.state.scrollPosition-this.boxStart))/this.pathLength;
        return percentage;
    }

    animationIn(){
        let tableBox = document.getElementsByClassName("developmentUpperInner")[0];
        let track= document.getElementsByClassName("developmentTrack")[0];
        let text = document.querySelector(".developingSkills h1");
        tableBox.classList.add("disapear");
        track.classList.add("transform");
        text.classList.add("transform");
        this.setState({firstContentVisible:false});
    }

    animationOut(){
        let tableBox = document.getElementsByClassName("developmentUpperInner")[0];
        let track= document.getElementsByClassName("developmentTrack")[0];
        let text = document.querySelector(".developingSkills h1");
        tableBox.classList.remove("disapear");
        track.classList.remove("transform");
        text.classList.remove("transform");
        this.setState({firstContentVisible:true});
    }

  render() {
    return (
      <div className="developmentTrack">
        <div className="development">
            <div className="developmentUpper">
                <div className="developmentUpperInner developmentInnerLeft">
                    <div className="tableTittle tableElement"><h2>PROFICIENT IN</h2></div>
                    <div className="tableElement"><h3>React</h3></div>
                    <div className="tableElement"><h3>JavaScript (EcmaScript)</h3></div>
                    <div className="tableElement"><h3>HTML</h3></div>
                    <div className="tableElement"><h3>CSS</h3></div>
                    <div className="tableElement"><h3>PHP</h3></div>
                    <div className="tableElement"><h3>C++</h3></div>
                </div>
                <div className="developmentUpperInner developmentInnerRight">
                </div>
            </div>
            
            <div className="developmentDown">
                <div className="developingSkills">
                    <h1>Developing Skills - Developing Skills - </h1>
                </div>
            </div>
            <div className="floatingBox">
                <a href="https://github.com/albertito1985" target="_blank">
                    <div className="floatingBoxImage">
                    </div>
                    <div className="floatingBoxText">
                        Visit my Github
                    </div>
                </a>
            </div>
            
        </div>
      </div>
    )
  }
}
 