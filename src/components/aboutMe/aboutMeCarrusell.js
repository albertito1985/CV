import React, { Component } from 'react';
import './aboutMeCarrusell.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default class AboutMeCarrusell extends Component {
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
createContent(){
  const imagesArray = this.importAll(require.context("../../images/Knowledge", false, /\.svg$/));
  let imagesAsBackground = [];
  imagesArray.forEach((image,index)=>{
    imagesAsBackground.push(
      <div className="knowledgeIcon" style={{backgroundImage:`url(${image})`}} key={`knowledgeIcon${index}`}>
      </div>
    )
  });
  return imagesAsBackground;
}

importAll(r){
  return r.keys().map(r);
};

  render() {
    return (
      <div className="aboutMeCarrusell">
        <Carousel
        swipeable={false}
        draggable={false}
        arrows={false}
        showDots={false}
        responsive={this.responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 2000ms linear"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={false}
        deviceType={this.props.deviceType}
        itemClass="carouselItem"
        rewindWithAnimation={false}
        >
        {this.createContent()}
        </Carousel>;
        </div>
    )
  }
}
