import React, { Component } from 'react';

export default class Facebook extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { className, profile, imageSrc } = this.props;
    className = className || "";
    return <div className={className}>
      <a href={"https://www.facebook.com/"+profile}><img className="responsive-img" src={imageSrc}/></a>
    </div>;
  }
}
