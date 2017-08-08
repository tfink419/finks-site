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
    // this.setState(nextState);
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    let { siteData } = this.state;
    return <div className="teal lighten-2">
      <div className="container teal lighten-3">
        <Header images={siteData.bannerImages} />
        <SocialMedia />
      </div>
    </div>;
  }
}

FinksSite.propTypes = {
  siteData: PropTypes.object.isRequired
};
