import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Facebook extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
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
