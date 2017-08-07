import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './Header.jsx';
import SocialMedia from './Social/SocialMedia.jsx';

export default class FinksSite extends Component {
  // static defaultProps = {
    // minLength: 1,
    // maxLength: 256
  // };

  constructor(props) {
    super(props);
    this.state = { siteData:this.props.siteData };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    let nextState = { nextProps };
    this.setState(nextState);
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    let { siteData } = this.state;
    return <div>
      <Header images={siteData.bannerImages} />
      <div className="container">
        <SocialMedia />
      </div>
    </div>;
  }
}

FinksSite.propTypes = {
  siteData: PropTypes.object.isRequired
};
