import React, { Component } from 'react'

export default class Word extends Component {
    constructor(props){
        super(props);
        this.state={
            number:null,
        }
    }

static getDerivedStateFromProps(props,state){
    state.number = props.number;
    return 0;
}


  render() {
    return (
      <div className={`word${(this.state.number === this.props.visibleNumbers)? " visible":""}`}>{this.props.label}</div>
    )
  }
}
