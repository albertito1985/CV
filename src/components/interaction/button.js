import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  render() {
    return (
      <>
        <div className="buttonComponent">{this.props.label}</div>
      </>
    )
  }
}
