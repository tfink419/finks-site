import React, { Component, PropTypes } from 'react';
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

  componentWillReceiveProps(nextProps) {
    let nextState = { nextProps };
    this.setState(nextState);
  }


  render() {
    let { className } = this.props;
    className = className || "";
    return <div className={className}>
      <div className="row">
        <div className="row col m6 s12">
          <Github className="col center-text s11 push-s1 m9 push-m3" profile={'tfink419'}/>
          <LinkedIn className="col m10 push-m2 s12" profile={'tyler-fink'} />
        </div>
        <Facebook className="col m6 s12" profile={'tfink42'} imageSrc={'/static/img/fink-facebook.jpg'} />
      </div>
    </div>;
  }
}

SocialMedia.propTypes = {
};
