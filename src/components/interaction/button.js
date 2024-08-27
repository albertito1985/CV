import React, { Component} from 'react';
import './button.css';

export default class Button extends Component {

  render() {
    return (
      <>
        <a className="buttonLink" href={this.props.link} rel="noreferrer" target="_blank"><div className="buttonComponent">{this.props.label}</div></a>
      </>
    )
  }
}