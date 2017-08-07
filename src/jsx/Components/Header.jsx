import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
    this.state.src = "/static/img/banners/"+props.images[Math.floor(Math.random() * props.images.length)];
    this.state.srcType = this.state.src.substring(this.state.src.lastIndexOf('.')+1);
    this.state.srcIsVideo = _.includes(['mp4','gifv'], this.state.srcType);
  }
  
  componentWillMount() {
    console.log(this.state, this.props);
  }

  componentWillReceiveProps(nextProps) {
    let nextState = { nextProps };
    this.setState(nextState);
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    let { srcIsVideo, src } = this.state;
    return <header className="container center-align">
      { srcIsVideo ? <video className="responsive-video" style={ { width:'100%' } } src={src} loop={true} autoPlay={true}></video>
      : <img className="responsive-img" src={src} />
      }
      <h2 className="red-text"><em>
        Fink's Site
      </em></h2>
    </header>;
  }
}

Header.propTypes = {
    images: PropTypes.array.isRequired
  };