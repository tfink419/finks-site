import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Github from './Github.jsx';
import Facebook from './Facebook.jsx';
import LinkedIn from './LinkedIn.jsx';

export default class SocialMedia extends Component {
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
    let { className } = this.props;
    className = className || "";
    return <div className={className}>
      <div className="row">
        <Github className="col s6" profile={'tfink419'}/>
        <div className="col s6 row">
          <LinkedIn className="col s12" profile={'tyler-fink'} />
          <Facebook className="col s12" profile={'tfink42'} imageSrc={'/static/img/fink-facebook.jpg'} />
        </div>
      </div>
    </div>;
  }
}

SocialMedia.propTypes = {
};
