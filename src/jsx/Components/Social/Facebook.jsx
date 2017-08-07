import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
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
    let { className, profile, imageSrc } = this.props;
    className = className || "";
    return <div className={className}>
      <a href={"https://www.facebook.com/"+profile}><img className="responsive-img" src={imageSrc}/></a>
    </div>;
  }
}

Facebook.propTypes = {
  profile: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};
