import React, { Component } from 'react'
import Hero from './components/heroSection/hero';
import MyProcess from './components/myProcessSection/myProcess';
import ExperienceSection from './components/experienceSection/experienceSection';
import ContactMe from './components/contactMe/contactMe';
import Development from './components/development/development'
import ShowCaseVideo from './components/showCaseVideo/showCaseVideo';

export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        scrollPosition:undefined,
        scrollDirection:undefined
      }
    this.scrollHandler=this.scrollHandler.bind(this);
  }

static getDerivedStateFromProps(props,state) {
    state.scrollPosition=window.pageYOffset;
    state.scrollDirection = (state.scrollPosition>0)?"up":"down";
    return null;
 }

componentDidMount(){
  document.addEventListener("scroll",this.scrollHandler);
}

componentWillUnmount(){
  document.removeEventListener("scroll",this.scrollHandler);
}

scrollHandler(){
  let newScrollPosition= window.pageYOffset;
  let scrollDirection=(this.state.scrollPosition>newScrollPosition)?"up":"down";
  this.setState({scrollPosition:newScrollPosition,scrollDirection:scrollDirection});
}

  render() {
    let configurationObject={
      scrollPosition:this.state.scrollPosition,
      vh:document.documentElement.clientHeight || window.innerHeight || 0,
      scrollDirection:this.state.scrollDirection
    }

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <Hero/>
          <ShowCaseVideo configurationObject={configurationObject}/>
          <MyProcess configurationObject={configurationObject} />
          <ExperienceSection configurationObject={configurationObject}/>
          <Development configurationObject={configurationObject}/>
          <div className="me"></div>
          <ContactMe/>
        </div>
    </div>
    )
  }
}
