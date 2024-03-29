import React, { Component } from 'react';
import _ from 'lodash';

export default class Header extends Component {
  constructor(props) {
    super(props);
    let { src, srcType, srcIsVideo } = this.pickImage(props.images);
    this.state = { src, srcType, srcIsVideo };
  }
  
  pickImage(images) {
    let retObj = {};
    retObj.src = "/static/img/banners/"+images[Math.floor(Math.random() * images.length)];
    retObj.srcType = retObj.src.substring(retObj.src.lastIndexOf('.')+1);
    retObj.srcIsVideo = _.includes(['mp4','gifv','webm'], retObj.srcType);
    return retObj;
  }
  
  componentWillReceiveProps(nextProps) {
    let { src, srcType, srcIsVideo } = this.pickImage(props.images);
    let nextState = { src, srcType, srcIsVideo };
    this.setState(nextState);
  }

  render() {
    let { srcIsVideo, src } = this.state;
    let { className } = this.props;
    className = className || "";
    return <header className={"center-align"+" "+className}>
      { srcIsVideo ? <video className="responsive-video" style={ { width:'100%' } } src={src} loop={true} autoPlay={true}></video>
      : <img className="responsive-img" src={src} />
      }
      <h2 className="red-text header"><em>
        Fink's Site
      </em></h2>
    </header>;
  }
}
